import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Settings, AppSettings } from './app.settings';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { GoogleAdsService } from './shared/services/google-ads.service';
import { ChatWidgetService } from './shared/services/chat-widget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public settings: Settings;

  // Rutas con formulario de teléfono/SMS: el chat widget NO debe cargar ahí
  // (LeadConnector rechaza que convivan en la misma página). El formulario
  // ahora vive solo en /contact.
  private readonly chatWidgetExcludedRoutes = ['/contact'];

  constructor(public appSettings:AppSettings,
              public router:Router,
              @Inject(PLATFORM_ID) private platformId: Object,
              public translate: TranslateService,
              private googleAds: GoogleAdsService,
              private chatWidget: ChatWidgetService){
    this.settings = this.appSettings.settings;
    translate.addLangs(['en','es']);
    translate.setDefaultLang('es'); 
    translate.use('es');
  }

  ngAfterViewInit(){ 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.googleAds.trackPageView(event.urlAfterRedirects);
        this.updateChatWidget(event.urlAfterRedirects);
        setTimeout(() => {
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0,0);
          }
        });
      }
    });
  }

  // Muestra el chat widget solo en rutas sin formulario de teléfono/SMS.
  private updateChatWidget(url: string): void {
    const path = url.split('?')[0].split('#')[0];
    if (this.chatWidgetExcludedRoutes.indexOf(path) !== -1) {
      this.chatWidget.remove();
    } else {
      this.chatWidget.load();
    }
  }

}
