import { Component } from "@angular/core";
import { Page, Color } from "ui/page";
import { topmost } from "ui/frame";
import { isIOS } from "platform";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor(page: Page) {
        page.actionBarHidden = false;
        if (isIOS) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        }
    }
}
