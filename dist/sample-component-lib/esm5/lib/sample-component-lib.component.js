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
    var i_r5 = ctx.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" item title ", i_r5, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Source ", i_r5, " ");
} }
var SampleComponentLibComponent = /** @class */ (function () {
    function SampleComponentLibComponent() {
        this.items = new Array(20);
    }
    SampleComponentLibComponent.ɵfac = function SampleComponentLibComponent_Factory(t) { return new (t || SampleComponentLibComponent)(); };
    SampleComponentLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SampleComponentLibComponent, selectors: [["lib-sample-component"]], decls: 8, vars: 1, consts: [[1, "component-list"], [1, "component-header"], [1, "component-header__title"], [1, "component-header__search"], ["type", "text", "placeholder", "Search...", 1, "search_input"], [1, "component-body"], ["class", "component-item", 4, "ngFor", "ngForOf"], [1, "component-item"], [1, "item-description"], [1, "item-description__title"], [1, "item-description__description"], ["href", "#", 1, "item-description__link"], [1, "item-picture"], ["src", "https://via.placeholder.com/100", "alt", "image"]], template: function SampleComponentLibComponent_Template(rf, ctx) { if (rf & 1) {
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
    return SampleComponentLibComponent;
}());
export { SampleComponentLibComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SampleComponentLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-sample-component',
                templateUrl: 'sample-component-lib.html',
                // styleUrls: ['sample-component-lib.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2FtcGxlLWNvbXBvbmVudC1saWIvIiwic291cmNlcyI6WyJsaWIvc2FtcGxlLWNvbXBvbmVudC1saWIuY29tcG9uZW50LnRzIiwibGliL3NhbXBsZS1jb21wb25lbnQtbGliLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ1l6RCw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsNkJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7SUFDTCw2QkFDRTtJQUFBLDhLQUNGO0lBQUEsaUJBQUk7SUFDSiw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBSTtJQUNOLGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFDRjtJQUFBLGlCQUFNO0lBQ1IsaUJBQU07OztJQVpBLGVBQ0Y7SUFERSxnREFDRjtJQUtFLGVBQ0Y7SUFERSw0Q0FDRjs7QURwQlI7SUFBQTtRQU9FLFVBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN2QjswR0FGWSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQ1J4Qyw4QkFFRTtZQUFBLDhCQUNFO1lBQUEsNkJBQ0U7WUFBQSxnQ0FDRjtZQUFBLGlCQUFLO1lBQ0wsOEJBQ0U7WUFBQSwyQkFDRjtZQUFBLGlCQUFNO1lBQ1IsaUJBQU07WUFFTiw4QkFDRTtZQUFBLDZFQUNFO1lBZUosaUJBQU07WUFFUixpQkFBTTs7WUFsQjBCLGVBQXlDO1lBQXpDLG1DQUF5Qzs7c0NEWnpFO0NBVUMsQUFSRCxJQVFDO1NBRlksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FOdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLDRDQUE0QztnQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zYW1wbGUtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICdzYW1wbGUtY29tcG9uZW50LWxpYi5odG1sJyxcbiAgLy8gc3R5bGVVcmxzOiBbJ3NhbXBsZS1jb21wb25lbnQtbGliLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb21wb25lbnRMaWJDb21wb25lbnQge1xuICBpdGVtcyA9IG5ldyBBcnJheSgyMCk7XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29tcG9uZW50LWxpc3RcIj5cblxuICA8ZGl2IGNsYXNzPVwiY29tcG9uZW50LWhlYWRlclwiPlxuICAgIDxoMSBjbGFzcz1cImNvbXBvbmVudC1oZWFkZXJfX3RpdGxlXCI+XG4gICAgICBzb21lIGNvbXBvbmVudFxuICAgIDwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudC1oZWFkZXJfX3NlYXJjaFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2VhcmNoX2lucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbXBvbmVudC1ib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbXBvbmVudC1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25fX3RpdGxlXCI+XG4gICAgICAgICAgaXRlbSB0aXRsZSB7e2l9fVxuICAgICAgICA8L2gzPlxuICAgICAgICA8cCBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25fX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvcyBxdWlhIGV4Y2VwdHVyaSBvZmZpY2lpcyBhc3N1bWVuZGEgc29sdXRhIGRvbG9yaWJ1cywgaWxsdW0gcG9zc2ltdXMgY3VtcXVlIGVzc2UgcGFyaWF0dXIgb3B0aW8uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25fX2xpbmtcIj5cbiAgICAgICAgICBTb3VyY2Uge3tpfX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1waWN0dXJlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMFwiIGFsdD1cImltYWdlXCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG48L2Rpdj4iXX0=