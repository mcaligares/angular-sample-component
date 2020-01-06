import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sample-component-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SampleComponentLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SampleComponentLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sample-component-lib',
                template: "<div class=\"component\">\n  <div class=\"component-header\">\n    <h1 class=\"component-header__title\">\n      Title\n    </h1>\n    <div class=\"component-header__search\">\n      <input type=\"text\" placeholder=\"Search...\">\n    </div>\n  </div>\n\n  <div class=\"component-list\">\n    <div class=\"component-item\" *ngFor=\"let i of [1, 2, 3, 4, 5]\">\n      <div class=\"item-description\">\n        <h3 class=\"item-description__title\">\n          Component title {{i}}\n        </h3>\n        <p class=\"item-description__description\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia excepturi officiis assumenda soluta doloribus, illum possimus cumque esse pariatur optio.\n        </p>\n        <a href=\"#\" class=\"item-description__link\">\n          Source\n        </a>\n      </div>\n\n      <div class=\"item-picture\">\n        <img src=\"https://via.placeholder.com/100\" alt=\"image\"/>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".component{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:Arial,Times,serif}.component .component-header{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;background-color:#2e4272}.component .component-header__title{-webkit-box-flex:1;flex-grow:1;padding:10px;color:#bbc7e4;font-size:2rem}.component .component-header__search{-webkit-box-flex:1;flex-grow:1;padding:10px;text-align:right}.component .component-header__search input{border:none;padding:15px;font-size:1.2rem;background-color:#bbc7e4}.component .component-header__search input:focus{outline:#4e6db8 auto 5px}.component .component-list{height:70vh;padding:5px;overflow-y:scroll;background-color:#e0e5f2}.component .component-list .component-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding-bottom:15px;border-bottom:1px solid #273760}.component .component-list .component-item .item-description__title{font-size:1rem;color:#273760}.component .component-list .component-item .item-description__link{color:#2e4272;font-style:italic;text-decoration:underline}.component .component-list .component-item .item-picture{padding:5px}"]
            }] }
];
/** @nocollapse */
SampleComponentLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sample-component-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SampleComponentLibModule {
}
SampleComponentLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SampleComponentLibComponent],
                imports: [CommonModule],
                exports: [SampleComponentLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: sample-component-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SampleComponentLibComponent, SampleComponentLibModule };

//# sourceMappingURL=sample-component-lib.js.map