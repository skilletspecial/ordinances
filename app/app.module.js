"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var about_component_1 = require("./about/about.component");
var action_bar_component_1 = require("./action-bar/action-bar.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var landing_component_1 = require("./landing/landing.component");
var sacrament_component_1 = require("./ordinances/sacrament/sacrament.component");
var baptism_component_1 = require("./ordinances/baptism/baptism.component");
var confirmation_component_1 = require("./ordinances/confirmation/confirmation.component");
var consecrate_oil_component_1 = require("./ordinances/consecrate-oil/consecrate-oil.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                action_bar_component_1.ActionBarComponent,
                landing_component_1.LandingComponent,
                sacrament_component_1.SacramentComponent,
                baptism_component_1.BaptismComponent,
                confirmation_component_1.ConfirmationComponent,
                consecrate_oil_component_1.ConsecrateOilComponent
            ],
            providers: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsMkRBQXlEO0FBQ3pELDBFQUF1RTtBQUV2RSwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFFdEUsaUVBQStEO0FBQy9ELGtGQUFnRjtBQUNoRiw0RUFBMEU7QUFDMUUsMkZBQXlGO0FBQ3pGLGlHQUE4RjtBQTJCOUY7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXpCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QseUNBQWtCO2dCQUNsQixvQ0FBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsb0NBQWdCO2dCQUNoQiw4Q0FBcUI7Z0JBQ3JCLGlEQUFzQjthQUN6QjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FFVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5pbXBvcnQgeyBMYW5kaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFNhY3JhbWVudENvbXBvbmVudCB9IGZyb20gJy4vb3JkaW5hbmNlcy9zYWNyYW1lbnQvc2FjcmFtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYXB0aXNtQ29tcG9uZW50IH0gZnJvbSBcIi4vb3JkaW5hbmNlcy9iYXB0aXNtL2JhcHRpc20uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL29yZGluYW5jZXMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uc2VjcmF0ZU9pbENvbXBvbmVudCB9IGZyb20gJy4vb3JkaW5hbmNlcy9jb25zZWNyYXRlLW9pbC9jb25zZWNyYXRlLW9pbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBBYm91dENvbXBvbmVudCxcbiAgICAgICAgQWN0aW9uQmFyQ29tcG9uZW50LFxuICAgICAgICBMYW5kaW5nQ29tcG9uZW50LFxuICAgICAgICBTYWNyYW1lbnRDb21wb25lbnQsXG4gICAgICAgIEJhcHRpc21Db21wb25lbnQsXG4gICAgICAgIENvbmZpcm1hdGlvbkNvbXBvbmVudCxcbiAgICAgICAgQ29uc2VjcmF0ZU9pbENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19