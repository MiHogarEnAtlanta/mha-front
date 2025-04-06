import { NgModule } from "@angular/core";
import { PrivacyConditionsComponent } from "./privacy-conditions.component";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

export const routes: Route[] = [
  { path: "", component: PrivacyConditionsComponent, pathMatch: "full" },
];

@NgModule({
  declarations: [PrivacyConditionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PrivacyConditionsModule {}
