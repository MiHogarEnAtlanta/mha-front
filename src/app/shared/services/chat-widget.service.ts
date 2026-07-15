import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

/**
 * Carga el chat widget de LeadConnector de forma condicional por ruta.
 *
 * Motivo: el chequeo de compliance de LeadConnector rechaza que el widget
 * conviva en la misma página con un formulario que capta teléfono/SMS. Por eso
 * NO lo dejamos en index.html (se cargaría en todas las páginas, incluidas las
 * que tienen el formulario de contacto). En su lugar lo inyectamos solo en las
 * rutas permitidas. Como el sitio usa SSR y este servicio corre únicamente en
 * el navegador, el HTML que el servidor entrega para home/contacto —lo que
 * escanea compliance— nunca incluye el widget.
 */
@Injectable({ providedIn: "root" })
export class ChatWidgetService {
  private readonly loaderId = "lc-chat-widget-loader";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /** Inyecta el loader del widget si aún no está presente. */
  load(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (document.getElementById(this.loaderId)) {
      return; // ya cargado
    }
    const script = document.createElement("script");
    script.id = this.loaderId;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", "6a5625cac6e06ac8e89f6b9b");
    script.setAttribute("data-source", "WEB_USER");
    document.body.appendChild(script);
  }

  /** Retira el widget y su loader (para rutas donde no debe aparecer). */
  remove(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const loader = document.getElementById(this.loaderId);
    if (loader && loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
    // El loader inyecta sus propios nodos (iframe/contenedor). Los quitamos
    // para que el widget desaparezca al navegar a una ruta no permitida.
    const injected = document.querySelectorAll(
      'iframe[src*="leadconnector"], [id*="lc_"], chat-widget'
    );
    injected.forEach((el) => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  }
}
