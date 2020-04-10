(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('sample-component-lib', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['sample-component-lib'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    function SampleComponentLibComponent_div_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 7);
        core["ɵɵelementStart"](1, "div", 8);
        core["ɵɵelementStart"](2, "h3", 9);
        core["ɵɵtext"](3);
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](4, "p", 10);
        core["ɵɵtext"](5, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia excepturi officiis assumenda soluta doloribus, illum possimus cumque esse pariatur optio. ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](6, "a", 11);
        core["ɵɵtext"](7);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](8, "div", 12);
        core["ɵɵelement"](9, "img", 13);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var i_r5 = ctx.index;
        core["ɵɵadvance"](3);
        core["ɵɵtextInterpolate1"](" item title ", i_r5, " ");
        core["ɵɵadvance"](4);
        core["ɵɵtextInterpolate1"](" Source ", i_r5, " ");
    } }
    var SampleComponentLibComponent = /** @class */ (function () {
        function SampleComponentLibComponent() {
            this.items = new Array(20);
        }
        SampleComponentLibComponent.ɵfac = function SampleComponentLibComponent_Factory(t) { return new (t || SampleComponentLibComponent)(); };
        SampleComponentLibComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SampleComponentLibComponent, selectors: [["lib-sample-component"]], decls: 8, vars: 1, consts: [[1, "component-list"], [1, "component-header"], [1, "component-header__title"], [1, "component-header__search"], ["type", "text", "placeholder", "Search..."], [1, "component-body"], ["class", "component-item", 4, "ngFor", "ngForOf"], [1, "component-item"], [1, "item-description"], [1, "item-description__title"], [1, "item-description__description"], ["href", "#", 1, "item-description__link"], [1, "item-picture"], ["src", "https://via.placeholder.com/100", "alt", "image"]], template: function SampleComponentLibComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "div", 1);
                core["ɵɵelementStart"](2, "h1", 2);
                core["ɵɵtext"](3, " some component ");
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](4, "div", 3);
                core["ɵɵelement"](5, "input", 4);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "div", 5);
                core["ɵɵtemplate"](7, SampleComponentLibComponent_div_7_Template, 10, 2, "div", 6);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](7);
                core["ɵɵproperty"]("ngForOf", ctx.items);
            } }, directives: [common.NgForOf], encapsulation: 2 });
        return SampleComponentLibComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SampleComponentLibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-sample-component',
                    templateUrl: 'sample-component-lib.html',
                    // styleUrls: ['sample-component-lib.scss'],
                    encapsulation: core.ViewEncapsulation.None
                }]
        }], null, null); })();

    var SampleComponentLibModule = /** @class */ (function () {
        function SampleComponentLibModule() {
        }
        SampleComponentLibModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SampleComponentLibModule });
        SampleComponentLibModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SampleComponentLibModule_Factory(t) { return new (t || SampleComponentLibModule)(); }, imports: [[common.CommonModule]] });
        return SampleComponentLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SampleComponentLibModule, { declarations: [SampleComponentLibComponent], imports: [common.CommonModule], exports: [SampleComponentLibComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SampleComponentLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [SampleComponentLibComponent],
                    imports: [common.CommonModule],
                    exports: [SampleComponentLibComponent]
                }]
        }], null, null); })();

    exports.SampleComponentLibComponent = SampleComponentLibComponent;
    exports.SampleComponentLibModule = SampleComponentLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sample-component-lib.umd.js.map
