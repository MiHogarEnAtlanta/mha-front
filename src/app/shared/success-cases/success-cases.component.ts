import { Component, OnInit } from "@angular/core";
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from "ngx-swiper-wrapper";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-success-cases",
  templateUrl: "./success-cases.component.html",
  styleUrls: ["./success-cases.component.scss"],
})
export class SuccessCasesComponent implements OnInit {
  public imageNosotros;
  public config: SwiperConfigInterface = {};
  private pagination: SwiperPaginationInterface = {
    el: ".swiper-pagination",
    clickable: true,
  };

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.imageNosotros = this.appService.getImagesNosotros();
  }

  ngAfterViewInit() {
    this.config = {
      observer: true,
      slidesPerView: 1,
      keyboard: false,
      navigation: true,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      pagination: this.pagination,
      autoHeight: true,
      autoplay: true,
      updateOnWindowResize: true,
    };
  }
}
