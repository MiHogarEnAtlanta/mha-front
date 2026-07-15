import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

// gtag.js se carga desde index.html; aquí solo lo referenciamos.
declare let gtag: Function;

@Injectable({ providedIn: "root" })
export class GoogleAdsService {
  // ID de la cuenta de Google Ads (el mismo de index.html).
  private readonly adsId = "AW-18322825978";

  // Etiqueta de conversión "envío de formulario de contacto".
  // PENDIENTE: cuando el equipo de Google Ads cree la conversión, reemplaza
  // XXXXXXXXXXX por el "Send to" que entrega Google Ads
  // (formato AW-18322825978/XXXXXXXXXXX). Mientras siga con el placeholder,
  // trackContactConversion() no dispara nada.
  private readonly contactConversionLabel = "AW-18322825978/XXXXXXXXXXX";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private get enabled(): boolean {
    return isPlatformBrowser(this.platformId) && typeof gtag === "function";
  }

  /** Registra una vista de página en la SPA (Angular no recarga entre rutas). */
  trackPageView(path: string): void {
    if (!this.enabled) {
      return;
    }
    gtag("config", this.adsId, { page_path: path });
  }

  /** Dispara la conversión al enviarse el formulario de contacto. */
  trackContactConversion(): void {
    // Aún no hay etiqueta real: no disparamos para no enviar eventos vacíos.
    if (this.contactConversionLabel.endsWith("/XXXXXXXXXXX")) {
      return;
    }
    if (!this.enabled) {
      return;
    }
    gtag("event", "conversion", { send_to: this.contactConversionLabel });
  }
}
