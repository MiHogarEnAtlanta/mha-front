import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { Settings, AppSettings } from '../../app.settings';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Property } from 'src/app/app.models';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  public config: SwiperConfigInterface = {}; 
  public watcher: Subscription; 
  public settings: Settings;
  constructor(public appSettings:AppSettings, public appService:AppService, public mediaObserver: MediaObserver) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() { 
    this.config = {
      observer: true,
      slidesPerView: 3,
      spaceBetween: 16,       
      keyboard: false,
      navigation: true,
      pagination: false,
      simulateTouch: true,
      grabCursor: true,        
      loop: false,
      preloadImages: true,
      lazy: false,    
      breakpoints: {
        150:{
          slidesPerView: 1
        },
        600: {
          slidesPerView: 1
        },
        960: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    }
    this.watchForChanges();
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
    
  public disableSwiper(){
    setTimeout(() => {
      if(this.directiveRef){
        this.config.keyboard = false;
        this.config.navigation = false;  
        this.config.simulateTouch = false;
        this.directiveRef.update();
      } 
    });   
  }
  public enableSwiper(){
    setTimeout(() => {
      if(this.directiveRef){
        this.config.keyboard = true;
        this.config.navigation = { nextEl: '.carousel-next', prevEl: '.carousel-prev' };  
        this.config.simulateTouch = true;
        this.directiveRef.update();
      } 
    });      
  }

  public clear(){
    this.appService.Data.compareList = [];
    localStorage.removeItem('compare');
  }

  public remove(property:Property) {
    const index: number = this.appService.Data.compareList.indexOf(property);
    if (index !== -1) {
        this.appService.Data.compareList.splice(index, 1);
        localStorage.setItem('compare', JSON.stringify(this.appService.Data.compareList))
    }  
    this.watchForChanges();     
  }

  public watchForChanges(){
    this.watcher = this.mediaObserver.asObservable()
    .pipe(filter((changes: MediaChange[]) => changes.length > 0), map((changes: MediaChange[]) => changes[0]))
    .subscribe((change: MediaChange) => {
       if(change.mqAlias == 'xs' && this.appService.Data.compareList.length > 1) {
         this.enableSwiper();
       }
       else if(change.mqAlias == 'sm' && this.appService.Data.compareList.length > 2){
         this.enableSwiper();
       }
       else if(change.mqAlias == 'md' && this.appService.Data.compareList.length > 3){
         this.enableSwiper();
       }
       else if(change.mqAlias == 'lg' && this.appService.Data.compareList.length > 4){
         this.enableSwiper();  
       }
       else if(change.mqAlias == 'xl' && this.appService.Data.compareList.length > 4){
         this.enableSwiper();
       }
       else{
         this.disableSwiper();
       } 
     });
  }  

}