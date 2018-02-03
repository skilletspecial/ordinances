import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { AboutComponent } from './about/about.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { OrdinanceComponent } from "./ordinances/ordinance.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

import { LandingComponent } from './landing/landing.component';
import { SacramentComponent } from './ordinances/sacrament/sacrament.component';
import { BaptismComponent } from "./ordinances/baptism/baptism.component";
import { ConfirmationComponent } from './ordinances/confirmation/confirmation.component';
import { ConsecrateOilComponent } from './ordinances/consecrate-oil/consecrate-oil.component';
import { AdministerToSickComponent } from "./ordinances/administer-to-sick/administer-to-sick.component";
import { BlessingComponent } from "./ordinances/blessing/blessing.component";
import { BabyBlessingComponent } from './ordinances/baby-blessing/baby-blessing.component';
import { ConferComponent } from "./ordinances/confer/confer.component";
import { GravesComponent } from "./ordinances/graves/graves.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        ActionBarComponent,
        OrdinanceComponent,
        LandingComponent,
        SacramentComponent,
        BaptismComponent,
        ConfirmationComponent,
        ConsecrateOilComponent,
        AdministerToSickComponent,
        BlessingComponent,
        BabyBlessingComponent,
        ConferComponent,
        GravesComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
