import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sample-component-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SampleComponentLibComponent {
    constructor() {
        this.items = new Array(20);
    }
}
SampleComponentLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-sample-component',
                template: "<div class=\"component-list\">\n\n  <div class=\"component-header\">\n    <h1 class=\"component-header__title\">\n      some component\n    </h1>\n    <div class=\"component-header__search\">\n      <input type=\"text\" placeholder=\"Search...\">\n    </div>\n  </div>\n\n  <div class=\"component-body\">\n    <div class=\"component-item\" *ngFor=\"let item of items; let i = index\">\n      <div class=\"item-description\">\n        <h3 class=\"item-description__title\">\n          item title {{i}}\n        </h3>\n        <p class=\"item-description__description\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia excepturi officiis assumenda soluta doloribus, illum possimus cumque esse pariatur optio.\n        </p>\n        <a href=\"#\" class=\"item-description__link\">\n          Source {{i}}\n        </a>\n      </div>\n      <div class=\"item-picture\">\n        <img src=\"https://via.placeholder.com/100\" alt=\"image\"/>\n      </div>\n    </div>\n  </div>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".component-list{padding:5px}"]
            }] }
];

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