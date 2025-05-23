import { Component, OnInit } from "@angular/core";
import { Settings, AppSettings } from "../../app.settings";
import { AppService, Data } from "../../app.service";
import { Property, Pagination, Location } from "../../app.models";
import { filter, map } from "rxjs/operators";
import { Subscription } from "rxjs";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { FmlsService } from "src/app/shared/services/fmls.service";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  watcher: Subscription;
  activeMediaQuery = "";

  public slides = [];
  public properties: Property[];
  public viewType: string = "grid";
  public viewCol: number = 50;
  public count: number = 6;
  public sort: string = "Ordenar por defecto";
  public searchFields: any;
  public removedSearchField: string;
  public pagination: Pagination = new Pagination(1, 6, null, 2, 0, 0);
  public message: string;
  public featuredProperties: Property[];
  public locations: Location[];
  public sortProperties: string;
  public call: number = 0;

  public settings: Settings;
  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    public mediaObserver: MediaObserver,
    public fmls: FmlsService,
    public httpClient: HttpClient
  ) {
    this.settings = this.appSettings.settings;

    this.watcher = mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change: MediaChange) => {
        if (change.mqAlias == "xs") {
          this.viewCol = 100;
        } else if (change.mqAlias == "sm") {
          this.viewCol = 50;
        } else if (change.mqAlias == "md") {
          this.viewCol = 33.3;
        } else {
          this.viewCol = 50;
        }
      });
  }

  ngOnInit() {
    this.getSlides();
    this.getLocations();
    this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
    // this.getFeaturedProperties();

    const tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";

    document.body.appendChild(tag);
  }

  ngDoCheck() {
    if (this.settings.loadMore.load) {
      this.settings.loadMore.load = false;
      this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
    }
  }

  ngOnDestroy() {
    this.resetLoadMore();
    this.watcher.unsubscribe();
  }

  public getSlides() {
    this.appService.getHomeCarouselSlides().subscribe((res) => {
      this.slides = res;
    });
  }

  public getLocations() {
    this.appService.getLocations().subscribe((res) => {
      this.locations = res;
    });
  }

  public async getProperties(sort, limit, offset) {
    if (this.searchFields && this.searchFields.city) {
        let city = this.searchFields.city.name.toLowerCase();
        let data = await this.fmls.getPropertiesByCity(city, limit, offset);
        this.fmls.cleanData(data.bundle);
    } else if (sort == "Ordenar por defecto" || sort == "Sort by default") {
      // this.fmls.offset = this.fmls.offset + 12
      let data = await this.fmls.getDataProperties(limit, offset);
      this.fmls.cleanData(data.bundle);
    } else if (
      sort == "Precio (Bajo a Alto)" ||
      sort == "Price (Low to High)"
    ) {
      // this.fmls.limit = this.fmls.limit + 12
      let data = await this.fmls.getAscend(limit);
      this.fmls.cleanData(data.bundle);
    } else if (
      sort == "Precio (Alto a Bajo)" ||
      sort == "Price (High to Low)"
    ) {
      this.fmls.limit = this.fmls.limit + 12;
      let data = await this.fmls.getDescend(limit);
      this.fmls.cleanData(data.bundle);
    } else if (sort == "Nuevo" || sort == "New") {
      this.fmls.limit = this.fmls.limit + 12;
      let data = await this.fmls.getNew(limit);
      this.fmls.cleanData(data.bundle);
    } else if (sort == "Viejo" || sort == "Old") {
      this.fmls.limit = this.fmls.limit + 12;
      let data = await this.fmls.getOld(limit);
      this.fmls.cleanData(data.bundle);
    }
    let data;
    if (this.properties && this.properties.length > 0) {
      data = this.fmls.uniqueData.filter((property) => !this.properties.find(existingProperty => existingProperty.id === property.id))
    } else {
      data = this.fmls.uniqueData
    }
    let result = this.filterData(data);
    if (result.data.length == 0) {
      this.properties.length = 0;
      this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
      this.message = "No Se Encontraron Resultados";
      return false;
    }
    if (this.properties && this.properties.length > 0) {
      this.properties = this.properties.concat(result.data);
    } else {
      this.properties = result.data;
    }
    this.pagination = result.pagination;
    this.message = null;

    if (this.properties.length == this.pagination.total) {
      this.settings.loadMore.complete = true;
      this.settings.loadMore.result = this.properties.length;
    } else {
      this.settings.loadMore.complete = false;
    }

    if (this.settings.header == "map") {
      this.locations.length = 0;
      this.properties.forEach((p) => {
        let loc = new Location(p.id, p.location.lat, p.location.lng);
        this.locations.push(loc);
      });
      this.locations = [...this.locations];
    }

    // })
  }

  public resetLoadMore() {
    this.settings.loadMore.complete = false;
    this.settings.loadMore.start = false;
    this.settings.loadMore.page = 1;

    this.pagination = new Pagination(
      1,
      this.count,
      null,
      null,
      this.pagination.total,
      this.pagination.totalPages
    );
  }

  public filterData(data) {
    return this.appService.filterData(
      data,
      this.searchFields,
      this.sort,
      this.pagination.page,
      this.pagination.perPage
    );
  }

  public searchClicked() {
    // this.properties.length = 0;
    this.properties = []
    this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
  }

  public searchChanged(event) {
    event.valueChanges.subscribe(() => {
      this.resetLoadMore();
      this.searchFields = event.value;
      setTimeout(() => {
        this.removedSearchField = null;
      });
      if (!this.settings.searchOnBtnClick) {
        this.properties.length = 0;
      }
    });
    event.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        if (!this.settings.searchOnBtnClick) {
          this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
        }
      });
  }

  public removeSearchField(field) {
    this.message = null;
    this.removedSearchField = field;
  }

  public changeCount(count) {
    this.count = count;
    this.resetLoadMore();
    this.properties.length = 0;
    this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
  }

  public changeSorting(sort) {
    this.properties = []
    this.sort = sort;
    this.resetLoadMore();
    this.properties.length = 0;
    this.getProperties(sort, this.fmls.limit, this.fmls.offset);
  }
  public changeViewType(obj) {
    this.viewType = obj.viewType;
    this.viewCol = obj.viewCol;
  }

  // public getFeaturedProperties(){
  //   this.appService.getFeaturedProperties().subscribe(properties=>{
  //     this.featuredProperties = properties;
  //   })
  // }
}
