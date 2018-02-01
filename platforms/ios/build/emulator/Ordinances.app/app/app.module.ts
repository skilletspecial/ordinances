import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { AboutComponent } from './about/about.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

import { LandingComponent } from './landing/landing.component';
import { SacramentComponent } from './ordinances/sacrament/sacrament.component';
import { BaptismComponent } from "./ordinances/baptism/baptism.component";
import { ConfirmationComponent } from './ordinances/confirmation/confirmation.component';
import { ConsecrateOilComponent } from './ordinances/consecrate-oil/consecrate-oil.component';

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
        LandingComponent,
        SacramentComponent,
        BaptismComponent,
        ConfirmationComponent,
        ConsecrateOilComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
