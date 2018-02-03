import { Component, OnInit, Input } from "@angular/core";
import { Color } from "ui/page/page";

@Component({
    selector: "ns-action-bar",
    moduleId: module.id,
    template: `
    <ActionBar [title]="title" [backgroundColor]="actionBarBackground" [color]="actionBarColor" flat="true">
        <ActionItem *ngIf="showAboutButton" text="About" ios.position="right" [color]="aboutColor" [nsRouterLink]="['/about']"></ActionItem>
    </ActionBar>
    `,
})
export class ActionBarComponent implements OnInit {
    @Input() title: string = null;
    @Input() showAboutButton: boolean = false;
    public actionBarBackground: Color = new Color('#313B44');
    public actionBarColor: Color = new Color('#66C6BF');
    public aboutColor: Color = new Color('#E86F3F');

    constructor() { }

    ngOnInit() {

    }
}