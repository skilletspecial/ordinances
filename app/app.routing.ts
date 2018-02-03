import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { SacramentComponent } from './ordinances/sacrament/sacrament.component';
import { BaptismComponent } from "./ordinances/baptism/baptism.component";
import { ConfirmationComponent } from "./ordinances/confirmation/confirmation.component";
import { ConsecrateOilComponent } from './ordinances/consecrate-oil/consecrate-oil.component';
import { AdministerToSickComponent } from "./ordinances/administer-to-sick/administer-to-sick.component";
import { BlessingComponent } from './ordinances/blessing/blessing.component';
import { BabyBlessingComponent } from "./ordinances/baby-blessing/baby-blessing.component";
import { ConferComponent } from './ordinances/confer/confer.component';
import { GravesComponent } from './ordinances/graves/graves.component';

const routes: Routes = [
    { path: "", redirectTo: "/landing", pathMatch: "full" },
    { path: "landing", component: LandingComponent },
    { path: "about", component: AboutComponent },
    { path: "sacrament", component: SacramentComponent },
    { path: "baptism", component: BaptismComponent },
    { path: "confirmation", component: ConfirmationComponent },
    { path: "consecrate-oil", component: ConsecrateOilComponent },
    { path: "administer-to-sick", component: AdministerToSickComponent },
    { path: "blessing", component: BlessingComponent },
    { path: "baby-blessing", component: BabyBlessingComponent },
    { path: "confer", component: ConferComponent },
    { path: "grave", component: GravesComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }