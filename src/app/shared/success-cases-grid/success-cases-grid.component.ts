import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-success-cases-grid",
  templateUrl: "./success-cases-grid.component.html",
  styleUrls: ["./success-cases-grid.component.scss"],
})
export class SuccessCasesGridComponent implements OnInit {
  // Mismos casos de éxito que /nosotros, pero presentados como grid de cards
  // (no carrusel) para que la home tenga identidad propia.
  public cases;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.cases = this.appService.getImagesNosotros();
  }
}
