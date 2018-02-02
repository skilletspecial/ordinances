import { Component, OnInit, Input } from "@angular/core";
import { Color } from "ui/page/page";

@Component({
    selector: "ns-action-bar",
    moduleId: module.id,
    template: `
    <ActionBar [backgroundColor]="actionBarBackground" [color]="actionBarColor" flat="true">
        <ActionItem *ngIf="showAboutButton" ios.systemIcon="10" ios.position="right" [nsRouterLink]="['/about']"></ActionItem>
    </ActionBar>
    `,
})
export class ActionBarComponent implements OnInit {
    @Input() showAboutButton: boolean = false;
    public actionBarBackground: Color = new Color('#313B44');
    public actionBarColor: Color = new Color('#66C6BF');

    constructor() { }

    ngOnInit() {

    }
}