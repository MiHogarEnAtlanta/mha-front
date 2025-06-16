import { Component, OnInit } from "@angular/core";
import {
  SwiperConfigInterface,
  SwiperPaginationInterface,
} from "ngx-swiper-wrapper";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  public imageNosotros;
  public achievements;
  public config: SwiperConfigInterface = {};
  private pagination: SwiperPaginationInterface = {
    el: ".swiper-pagination",
    clickable: true,
  };

  public awards: string[] = [
    "ABOUT.HISTORY_11",
    "ABOUT.HISTORY_12",
    "ABOUT.HISTORY_13",
    "ABOUT.HISTORY_14",
    "ABOUT.HISTORY_15",
    "ABOUT.HISTORY_16",
    "ABOUT.HISTORY_17",
    "ABOUT.HISTORY_18",
    "ABOUT.HISTORY_19",
    "ABOUT.HISTORY_20",
    "ABOUT.HISTORY_21",
  ];

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.imageNosotros = this.appService.getImagesNosotros();
    this.achievements = this.appService.getAchievements();
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
