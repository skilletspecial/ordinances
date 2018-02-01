"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page/page");
var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent() {
        this.showAboutButton = false;
        this.title = '';
        this.actionBarBackground = new page_1.Color('#313B44');
        this.actionBarColor = new page_1.Color('#66C6BF');
    }
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ActionBarComponent.prototype, "showAboutButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "title", void 0);
    ActionBarComponent = __decorate([
        core_1.Component({
            selector: "ns-action-bar",
            moduleId: module.id,
            template: "\n    <ActionBar [backgroundColor]=\"actionBarBackground\" [color]=\"actionBarColor\" flat=\"true\">\n        <ActionItem *ngIf=\"showAboutButton\" ios.systemIcon=\"10\" ios.position=\"right\" [nsRouterLink]=\"['/about']\"></ActionItem>\n    </ActionBar>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxxQ0FBcUM7QUFXckM7SUFNSTtRQUxTLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDckIsd0JBQW1CLEdBQVUsSUFBSSxZQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsbUJBQWMsR0FBVSxJQUFJLFlBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRWpCLHFDQUFRLEdBQVI7SUFFQSxDQUFDO0lBVFE7UUFBUixZQUFLLEVBQUU7OytEQUFrQztJQUNqQztRQUFSLFlBQUssRUFBRTs7cURBQW9CO0lBRm5CLGtCQUFrQjtRQVQ5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzUUFJVDtTQUNKLENBQUM7O09BQ1csa0JBQWtCLENBVzlCO0lBQUQseUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidWkvcGFnZS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFjdGlvbi1iYXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciBbYmFja2dyb3VuZENvbG9yXT1cImFjdGlvbkJhckJhY2tncm91bmRcIiBbY29sb3JdPVwiYWN0aW9uQmFyQ29sb3JcIiBmbGF0PVwidHJ1ZVwiPlxuICAgICAgICA8QWN0aW9uSXRlbSAqbmdJZj1cInNob3dBYm91dEJ1dHRvblwiIGlvcy5zeXN0ZW1JY29uPVwiMTBcIiBpb3MucG9zaXRpb249XCJyaWdodFwiIFtuc1JvdXRlckxpbmtdPVwiWycvYWJvdXQnXVwiPjwvQWN0aW9uSXRlbT5cbiAgICA8L0FjdGlvbkJhcj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHNob3dBYm91dEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgYWN0aW9uQmFyQmFja2dyb3VuZDogQ29sb3IgPSBuZXcgQ29sb3IoJyMzMTNCNDQnKTtcbiAgICBwdWJsaWMgYWN0aW9uQmFyQ29sb3I6IENvbG9yID0gbmV3IENvbG9yKCcjNjZDNkJGJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG59Il19