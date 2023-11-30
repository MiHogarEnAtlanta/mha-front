import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { AppSettings, Settings } from "src/app/app.settings";

@Component({
  selector: "app-header-video",
  templateUrl: "./header-video.component.html",
  styleUrls: ["./header-video.component.scss"],
})
export class HeaderVideoComponent implements OnInit, AfterViewInit {
  @Input("backgroundVideo") backgroundVideo;
  @Input("contentOffsetToTop") contentOffsetToTop;
  @Input("contentMinHeight") contentMinHeight;
  @Input("title") title;
  @Input("desc") desc;
  @Input("isHomePage") isHomePage: boolean = false;
  @Input("fullscreen") fullscreen: boolean = false;
  @ViewChild("bgvideos", { static: false }) bgVideo: ElementRef;
  public settings: Settings;
  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
    setTimeout(() => {
      this.settings.headerBgVideo = true;
    });
  }
  ngAfterViewInit(): void {
    this.bgVideo.nativeElement.muted = true;
    this.bgVideo.nativeElement.autoplay = true;
    this.bgVideo.nativeElement.load();
  }
  ngOnInit(): void {
    if (this.contentOffsetToTop) {
      setTimeout(() => {
        this.settings.contentOffsetToTop = this.contentOffsetToTop;
      });
    }
    var vid = <HTMLVideoElement>document.getElementById("bgVideo");
    vid.muted = true;
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.settings.headerBgVideo = false;
      this.settings.contentOffsetToTop = false;
    });
  }
}
