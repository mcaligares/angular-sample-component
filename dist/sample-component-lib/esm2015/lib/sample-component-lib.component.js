import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SampleComponentLibComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "h3", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 10);
    i0.ɵɵtext(5, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia excepturi officiis assumenda soluta doloribus, illum possimus cumque esse pariatur optio. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵelement(9, "img", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" item title ", i_r2, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Source ", i_r2, " ");
} }
export class SampleComponentLibComponent {
    constructor() {
        this.items = new Array(20);
    }
}
SampleComponentLibComponent.ɵfac = function SampleComponentLibComponent_Factory(t) { return new (t || SampleComponentLibComponent)(); };
SampleComponentLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SampleComponentLibComponent, selectors: [["lib-sample-component"]], decls: 8, vars: 1, consts: [[1, "component-list"], [1, "component-header"], [1, "component-header__title"], [1, "component-header__search"], ["type", "text", "placeholder", "Search..."], [1, "component-body"], ["class", "component-item", 4, "ngFor", "ngForOf"], [1, "component-item"], [1, "item-description"], [1, "item-description__title"], [1, "item-description__description"], ["href", "#", 1, "item-description__link"], [1, "item-picture"], ["src", "https://via.placeholder.com/100", "alt", "image"]], template: function SampleComponentLibComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "h1", 2);
        i0.ɵɵtext(3, " some component ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵelement(5, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵtemplate(7, SampleComponentLibComponent_div_7_Template, 10, 2, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i1.NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SampleComponentLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sample-component',
                templateUrl: 'sample-component-lib.html',
                // styleUrls: ['sample-component-lib.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FtcGxlLWNvbXBvbmVudC1saWIvIiwic291cmNlcyI6WyJsaWIvc2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LnRzIiwibGliL3NhbXBsZS1jb21wb25lbnQtbGliLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ1l6RCw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsNkJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7SUFDTCw2QkFDRTtJQUFBLDhLQUNGO0lBQUEsaUJBQUk7SUFDSiw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSTtJQUNOLGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFDRjtJQUFBLGlCQUFNO0lBQ1IsaUJBQU07OztJQVpBLGVBQ0Y7SUFERSxnREFDRjtJQUtFLGVBQ0Y7SUFERSw0Q0FDRjs7QURkUixNQUFNLE9BQU8sMkJBQTJCO0lBTnhDO1FBT0UsVUFBSyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCOztzR0FGWSwyQkFBMkI7Z0VBQTNCLDJCQUEyQjtRQ1J4Qyw4QkFFRTtRQUFBLDhCQUNFO1FBQUEsNkJBQ0U7UUFBQSxnQ0FDRjtRQUFBLGlCQUFLO1FBQ0wsOEJBQ0U7UUFBQSwyQkFDRjtRQUFBLGlCQUFNO1FBQ1IsaUJBQU07UUFFTiw4QkFDRTtRQUFBLDZFQUNFO1FBZUosaUJBQU07UUFFUixpQkFBTTs7UUFsQjBCLGVBQXlDO1FBQXpDLG1DQUF5Qzs7a0RESjVELDJCQUEyQjtjQU52QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsNENBQTRDO2dCQUM1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNhbXBsZS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJ3NhbXBsZS1jb21wb25lbnQtbGliLmh0bWwnLFxuICAvLyBzdHlsZVVybHM6IFsnc2FtcGxlLWNvbXBvbmVudC1saWIuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNhbXBsZUNvbXBvbmVudExpYkNvbXBvbmVudCB7XG4gIGl0ZW1zID0gbmV3IEFycmF5KDIwKTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJjb21wb25lbnQtbGlzdFwiPlxuXG4gIDxkaXYgY2xhc3M9XCJjb21wb25lbnQtaGVhZGVyXCI+XG4gICAgPGgxIGNsYXNzPVwiY29tcG9uZW50LWhlYWRlcl9fdGl0bGVcIj5cbiAgICAgIHNvbWUgY29tcG9uZW50XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50LWhlYWRlcl9fc2VhcmNoXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50LWJvZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50LWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvbl9fdGl0bGVcIj5cbiAgICAgICAgICBpdGVtIHRpdGxlIHt7aX19XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvbl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdW9zIHF1aWEgZXhjZXB0dXJpIG9mZmljaWlzIGFzc3VtZW5kYSBzb2x1dGEgZG9sb3JpYnVzLCBpbGx1bSBwb3NzaW11cyBjdW1xdWUgZXNzZSBwYXJpYXR1ciBvcHRpby5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvbl9fbGlua1wiPlxuICAgICAgICAgIFNvdXJjZSB7e2l9fVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXBpY3R1cmVcIj5cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwXCIgYWx0PVwiaW1hZ2VcIi8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjwvZGl2PiJdfQ==