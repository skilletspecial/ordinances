import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { SacramentComponent } from './ordinances/sacrament/sacrament.component';
import { BaptismComponent } from "./ordinances/baptism/baptism.component";
import { ConfirmationComponent } from "./ordinances/confirmation/confirmation.component";
import { ConsecrateOilComponent } from './ordinances/consecrate-oil/consecrate-oil.component';

const routes: Routes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "landing", component: LandingComponent },
    { path: "about", component: AboutComponent },
    { path: "sacrament", component: SacramentComponent },
    { path: "baptism", component: BaptismComponent },
    { path: "confirmation", component: ConfirmationComponent },
    { path: "consecrate-oil", component: ConsecrateOilComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }