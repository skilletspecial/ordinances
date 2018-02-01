import { Component, OnInit } from "@angular/core";
import { Color } from "ui/page/page";

@Component({
    selector: "ns-landing",
    moduleId: module.id,
    templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit {
    public actionBarBackground: Color = new Color('#313B44');
    public actionBarColor: Color = new Color('#F4EBE1');

    constructor() { }

    ngOnInit() {

    }
}