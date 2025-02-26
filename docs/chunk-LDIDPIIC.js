import {
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GDIBOM5I.js";

// src/app/shared/components/widgets/breadcrumb/breadcrumb.component.ts
var _c0 = () => ["/"];
function BreadcrumbComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275classProp("active", item_r1.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var BreadcrumbComponent = class _BreadcrumbComponent {
  static {
    this.\u0275fac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreadcrumbComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { breadcrumb: "breadcrumb" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 6, consts: [[1, "breadcrumb-section"], [1, "container"], ["aria-label", "breadcrumb", 1, "theme-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "breadcrumb-item", 3, "active"]], template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 2)(5, "ol", 3)(6, "li", 4)(7, "a", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(10, BreadcrumbComponent_For_11_Template, 2, 3, "li", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.breadcrumb.title);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 3, "home"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.breadcrumb.items);
      }
    }, dependencies: [TranslateModule, TranslatePipe, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent" });
})();

export {
  BreadcrumbComponent
};
//# sourceMappingURL=chunk-LDIDPIIC.js.map
