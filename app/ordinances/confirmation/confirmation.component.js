"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(page) {
        this.breadSelected = true;
        this.waterSelected = false;
        page.actionBarHidden = false;
    }
    ConfirmationComponent.prototype.ngOnInit = function () { };
    ConfirmationComponent.prototype.tapBread = function () {
        this.breadSelected = true;
        this.waterSelected = false;
    };
    ConfirmationComponent.prototype.tapWater = function () {
        this.breadSelected = false;
        this.waterSelected = true;
    };
    ConfirmationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-confirmation',
            templateUrl: './confirmation.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBTy9CO0lBSUUsK0JBQVksSUFBVTtRQUhmLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBR3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCx3Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFsQlUscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1NBQzdDLENBQUM7eUNBS2tCLFdBQUk7T0FKWCxxQkFBcUIsQ0FvQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYnJlYWRTZWxlY3RlZDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyB3YXRlclNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocGFnZTogUGFnZSkge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHRhcEJyZWFkKCkge1xuICAgIHRoaXMuYnJlYWRTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53YXRlclNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICB0YXBXYXRlcigpIHtcbiAgICB0aGlzLmJyZWFkU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLndhdGVyU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbn1cbiJdfQ==