import { Component } from "@angular/core";

@Component({
  selector: "app-agent-stats",
  templateUrl: "./agent-stats.component.html",
  styleUrls: ["./agent-stats.component.scss"],
})
export class AgentStatsComponent {
  // Cifras reales de Carmela como realtor (fuente: su página personal, que el
  // equipo mantiene más actualizada). Respaldadas por sus reconocimientos:
  // Top Producer NAHREP, Million Dollar Club, etc.
  public stats = [
    { number: "+8", label: "Años de experiencia" },
    { number: "+600", label: "Propiedades vendidas" },
    { number: "$120M", label: "En ventas" },
    { number: "+600", label: "Familias felices" },
  ];
}
