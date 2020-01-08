/**
 * @fileoverview added by tsickle
 * Generated from: lib/sample-component-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
export class SampleComponentLibComponent {
    constructor() {
        this.items = new Array(20);
    }
}
SampleComponentLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sample-component',
                template: "<div class=\"component-list\">\n\n  <div class=\"component-header\">\n    <h1 class=\"component-header__title\">\n      some component\n    </h1>\n    <div class=\"component-header__search\">\n      <input type=\"text\" placeholder=\"Search...\">\n    </div>\n  </div>\n\n  <div class=\"component-body\">\n    <div class=\"component-item\" *ngFor=\"let item of items; let i = index\">\n      <div class=\"item-description\">\n        <h3 class=\"item-description__title\">\n          item title {{i}}\n        </h3>\n        <p class=\"item-description__description\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia excepturi officiis assumenda soluta doloribus, illum possimus cumque esse pariatur optio.\n        </p>\n        <a href=\"#\" class=\"item-description__link\">\n          Source {{i}}\n        </a>\n      </div>\n      <div class=\"item-picture\">\n        <img src=\"https://via.placeholder.com/100\" alt=\"image\"/>\n      </div>\n    </div>\n  </div>\n\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: ["input{border:none;padding:15px;font-size:1.2rem}.component-list{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.component-list .component-header{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#3976aa}@media screen and (max-width:425px){.component-list .component-header{flex-wrap:wrap}.component-list .component-header__title{text-align:center}}.component-list .component-header__title{-webkit-box-flex:1;flex-grow:1;padding:10px;text-transform:capitalize;font-size:2rem}.component-list .component-header__search{-webkit-box-flex:1;flex-grow:1;padding:10px;text-align:right}@media screen and (max-width:425px){.component-list .component-header__search{text-align:center}}.component-list .component-body{height:70vh;padding:5px;overflow-y:scroll}.component-list .component-body .component-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.component-list .component-body .component-item .item-description__title{color:#3976aa}"]
            }] }
];
if (false) {
    /** @type {?} */
    SampleComponentLibComponent.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FtcGxlLWNvbXBvbmVudC1saWIvIiwic291cmNlcyI6WyJsaWIvc2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVE3RCxNQUFNLE9BQU8sMkJBQTJCO0lBTnhDO1FBT0UsVUFBSyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywrL0JBQXdDO2dCQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7SUFFQyw0Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zYW1wbGUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdzYW1wbGUtY29tcG9uZW50LWxpYi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NhbXBsZS1jb21wb25lbnQtbGliLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb21wb25lbnRMaWJDb21wb25lbnQge1xuICBpdGVtcyA9IG5ldyBBcnJheSgyMCk7XG59XG4iXX0=