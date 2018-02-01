"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var BaptismComponent = /** @class */ (function () {
    function BaptismComponent(page) {
        this.breadSelected = true;
        this.waterSelected = false;
        page.actionBarHidden = false;
    }
    BaptismComponent.prototype.ngOnInit = function () { };
    BaptismComponent.prototype.tapBread = function () {
        this.breadSelected = true;
        this.waterSelected = false;
    };
    BaptismComponent.prototype.tapWater = function () {
        this.breadSelected = false;
        this.waterSelected = true;
    };
    BaptismComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-baptism',
            templateUrl: './baptism.component.html'
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], BaptismComponent);
    return BaptismComponent;
}());
exports.BaptismComponent = BaptismComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFwdGlzbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXB0aXNtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFPL0I7SUFJRSwwQkFBWSxJQUFVO1FBSGYsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFHcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQWxCVSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1NBQ3hDLENBQUM7eUNBS2tCLFdBQUk7T0FKWCxnQkFBZ0IsQ0FvQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1iYXB0aXNtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhcHRpc20uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJhcHRpc21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYnJlYWRTZWxlY3RlZDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyB3YXRlclNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocGFnZTogUGFnZSkge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHRhcEJyZWFkKCkge1xuICAgIHRoaXMuYnJlYWRTZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53YXRlclNlbGVjdGVkID0gZmFsc2U7XG4gIH1cblxuICB0YXBXYXRlcigpIHtcbiAgICB0aGlzLmJyZWFkU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLndhdGVyU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbn1cbiJdfQ==