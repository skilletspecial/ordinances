"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page/page");
var page_2 = require("ui/page");
var SacramentComponent = /** @class */ (function () {
    function SacramentComponent(page) {
        this.actionBarBackground = new page_1.Color('#313B44');
        this.actionBarColor = new page_1.Color('#F4EBE1');
        this.breadSelected = true;
        this.waterSelected = false;
        page.actionBarHidden = false;
    }
    SacramentComponent.prototype.ngOnInit = function () { };
    SacramentComponent.prototype.tapBread = function () {
        this.breadSelected = true;
        this.waterSelected = false;
    };
    SacramentComponent.prototype.tapWater = function () {
        this.breadSelected = false;
        this.waterSelected = true;
    };
    SacramentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-sacrament',
            templateUrl: './sacrament.component.html'
        }),
        __metadata("design:paramtypes", [page_2.Page])
    ], SacramentComponent);
    return SacramentComponent;
}());
exports.SacramentComponent = SacramentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FjcmFtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhY3JhbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUNBQXFDO0FBQ3JDLGdDQUErQjtBQU8vQjtJQU1FLDRCQUFZLElBQVU7UUFMZix3QkFBbUIsR0FBVSxJQUFJLFlBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxtQkFBYyxHQUFVLElBQUksWUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBR3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFwQlUsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtTQUMxQyxDQUFDO3lDQU9rQixXQUFJO09BTlgsa0JBQWtCLENBc0I5QjtJQUFELHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInVpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zYWNyYW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2FjcmFtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTYWNyYW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYWN0aW9uQmFyQmFja2dyb3VuZDogQ29sb3IgPSBuZXcgQ29sb3IoJyMzMTNCNDQnKTtcbiAgcHVibGljIGFjdGlvbkJhckNvbG9yOiBDb2xvciA9IG5ldyBDb2xvcignI0Y0RUJFMScpO1xuICBwdWJsaWMgYnJlYWRTZWxlY3RlZDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyB3YXRlclNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocGFnZTogUGFnZSkge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHRhcEJyZWFkKCkge1xuICAgIHRoaXMuYnJlYWRTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53YXRlclNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICB0YXBXYXRlcigpIHtcbiAgICB0aGlzLmJyZWFkU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLndhdGVyU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbn1cbiJdfQ==