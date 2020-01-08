/**
 * @fileoverview added by tsickle
 * Generated from: lib/sample-component-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
var SampleComponentLibComponent = /** @class */ (function () {
    function SampleComponentLibComponent() {
        this.items = new Array(20);
    }
    SampleComponentLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-sample-component',
                    template: "<div class=\"component-list\">\n\n  <div class=\"component-header\">\n    <h1 class=\"component-header__title\">\n      some component\n    </h1>\n    <div class=\"component-header__search\">\n      <input type=\"text\" placeholder=\"Search...\">\n    </div>\n  </div>\n\n  <div class=\"component-body\">\n    <div class=\"component-item\" *ngFor=\"let item of items; let i = index\">\n      <div class=\"item-description\">\n        <h3 class=\"item-description__title\">\n          item title {{i}}\n        </h3>\n        <p class=\"item-description__description\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia excepturi officiis assumenda soluta doloribus, illum possimus cumque esse pariatur optio.\n        </p>\n        <a href=\"#\" class=\"item-description__link\">\n          Source {{i}}\n        </a>\n      </div>\n      <div class=\"item-picture\">\n        <img src=\"https://via.placeholder.com/100\" alt=\"image\"/>\n      </div>\n    </div>\n  </div>\n\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["input{border:none;padding:15px;font-size:1.2rem}.component-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.component-list .component-header{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#2e4272}@media screen and (max-width:425px){.component-list .component-header{flex-wrap:wrap}.component-list .component-header__title{text-align:center}}.component-list .component-header__title{-webkit-box-flex:1;flex-grow:1;padding:10px;text-transform:capitalize;font-size:2rem;color:#bbc7e4}.component-list .component-header__search{-webkit-box-flex:1;flex-grow:1;padding:10px;text-align:right}@media screen and (max-width:425px){.component-list .component-header__search{text-align:center}}.component-list .component-body{height:70vh;padding:5px;overflow-y:scroll;background-color:#bbc7e4}.component-list .component-body .component-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding-bottom:15px;border-bottom:1px solid #273760}.component-list .component-header__search input{background-color:#bbc7e4}.component-list .component-header__search input:focus{outline:#4e6db8 auto 5px}.component-list .component-body .component-item .item-description__title{color:#273760;text-transform:capitalize;font-size:1rem}.component-list .component-body .component-item .item-description__link{color:#2e4272;font-style:italic;text-decoration:underline}.component-list .component-body .component-item .item-picture{padding:5px}"]
                }] }
    ];
    return SampleComponentLibComponent;
}());
export { SampleComponentLibComponent };
if (false) {
    /** @type {?} */
    SampleComponentLibComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FtcGxlLWNvbXBvbmVudC1saWIvIiwic291cmNlcyI6WyJsaWIvc2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RDtJQUFBO1FBT0UsVUFBSyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywrL0JBQXdDO29CQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOztJQUdELGtDQUFDO0NBQUEsQUFSRCxJQVFDO1NBRlksMkJBQTJCOzs7SUFDdEMsNENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2FtcGxlLWNvbXBvbmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnc2FtcGxlLWNvbXBvbmVudC1saWIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzYW1wbGUtY29tcG9uZW50LWxpYi5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2FtcGxlQ29tcG9uZW50TGliQ29tcG9uZW50IHtcbiAgaXRlbXMgPSBuZXcgQXJyYXkoMjApO1xufVxuIl19