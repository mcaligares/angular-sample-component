import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵadvance, ɵɵtextInterpolate1, ɵɵdefineComponent, ɵɵtemplate, ɵɵproperty, ɵsetClassMetadata, Component, ViewEncapsulation, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgForOf, CommonModule } from '@angular/common';

function SampleComponentLibComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "div", 8);
    ɵɵelementStart(2, "h3", 9);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "p", 10);
    ɵɵtext(5, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia excepturi officiis assumenda soluta doloribus, illum possimus cumque esse pariatur optio. ");
    ɵɵelementEnd();
    ɵɵelementStart(6, "a", 11);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 12);
    ɵɵelement(9, "img", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var i_r5 = ctx.index;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" item title ", i_r5, " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" Source ", i_r5, " ");
} }
var SampleComponentLibComponent = /** @class */ (function () {
    function SampleComponentLibComponent() {
        this.items = new Array(20);
    }
    SampleComponentLibComponent.ɵfac = function SampleComponentLibComponent_Factory(t) { return new (t || SampleComponentLibComponent)(); };
    SampleComponentLibComponent.ɵcmp = ɵɵdefineComponent({ type: SampleComponentLibComponent, selectors: [["lib-sample-component"]], decls: 8, vars: 1, consts: [[1, "component-list"], [1, "component-header"], [1, "component-header__title"], [1, "component-header__search"], ["type", "text", "placeholder", "Search..."], [1, "component-body"], ["class", "component-item", 4, "ngFor", "ngForOf"], [1, "component-item"], [1, "item-description"], [1, "item-description__title"], [1, "item-description__description"], ["href", "#", 1, "item-description__link"], [1, "item-picture"], ["src", "https://via.placeholder.com/100", "alt", "image"]], template: function SampleComponentLibComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "h1", 2);
            ɵɵtext(3, " some component ");
            ɵɵelementEnd();
            ɵɵelementStart(4, "div", 3);
            ɵɵelement(5, "input", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(6, "div", 5);
            ɵɵtemplate(7, SampleComponentLibComponent_div_7_Template, 10, 2, "div", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(7);
            ɵɵproperty("ngForOf", ctx.items);
        } }, directives: [NgForOf], encapsulation: 2 });
    return SampleComponentLibComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SampleComponentLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sample-component',
                templateUrl: 'sample-component-lib.html',
                // styleUrls: ['sample-component-lib.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();

var SampleComponentLibModule = /** @class */ (function () {
    function SampleComponentLibModule() {
    }
    SampleComponentLibModule.ɵmod = ɵɵdefineNgModule({ type: SampleComponentLibModule });
    SampleComponentLibModule.ɵinj = ɵɵdefineInjector({ factory: function SampleComponentLibModule_Factory(t) { return new (t || SampleComponentLibModule)(); }, imports: [[CommonModule]] });
    return SampleComponentLibModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SampleComponentLibModule, { declarations: [SampleComponentLibComponent], imports: [CommonModule], exports: [SampleComponentLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SampleComponentLibModule, [{
        type: NgModule,
        args: [{
                declarations: [SampleComponentLibComponent],
                imports: [CommonModule],
                exports: [SampleComponentLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of sample-component-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SampleComponentLibComponent, SampleComponentLibModule };
//# sourceMappingURL=sample-component-lib.js.map
