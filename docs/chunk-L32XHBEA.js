import {
  environment
} from "./chunk-SWD7ZYS2.js";
import {
  CommonModule,
  NgClass,
  NoDataComponent,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GDIBOM5I.js";

// src/app/components/home/widgets/theme-services/theme-services.component.ts
function ThemeServicesComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "img", 4)(3, "div", 5);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "h4", 6);
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.filteredServices.length == 4 ? "col-xl-3 col-sm-6" : ctx_r1.filteredServices.length == 3 ? "col-lg-4 col-sm-6" : ctx_r1.filteredServices.length == 2 ? "col-sm-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.StorageURL + service_r1.image_url, \u0275\u0275sanitizeUrl)("alt", service_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
function ThemeServicesComponent_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 8)(2, "div", 9);
    \u0275\u0275element(3, "img", 4)(4, "div", 10);
    \u0275\u0275elementStart(5, "div", 11)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "h4", 6);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const service_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.filteredServices.length == 4 ? "col-xl-3 col-sm-6" : ctx_r1.filteredServices.length == 3 ? "col-lg-4 col-sm-6" : ctx_r1.filteredServices.length == 2 ? "col-sm-6" : "col-12");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.StorageURL + service_r1.image_url, \u0275\u0275sanitizeUrl)("alt", service_r1.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
function ThemeServicesComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeServicesComponent_For_2_Conditional_0_Template, 10, 5, "div", 2)(1, ThemeServicesComponent_For_2_Conditional_1_Template, 12, 5, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.type == "simple" ? 0 : 1);
  }
}
function ThemeServicesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 12);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_service");
  }
}
var ThemeServicesComponent = class _ThemeServicesComponent {
  constructor() {
    this.StorageURL = environment.storageURL;
  }
  ngOnChanges(change) {
    if (change["services"] && change["services"].currentValue) {
      this.filteredServices = change["services"].currentValue.filter((service) => {
        return service.status;
      });
    }
  }
  static {
    this.\u0275fac = function ThemeServicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeServicesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeServicesComponent, selectors: [["app-theme-services"]], inputs: { services: "services", class: "class", type: "type" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "row", "g-sm-4", "g-3"], [3, "class", "text"], [3, "ngClass"], [1, "service-block1"], [3, "src", "alt"], [1, "service-skeleton-img"], [1, "skeleton-content-h4"], [1, "skeleton-content-p"], [1, "service-block"], [1, "media"], [1, "skeleton-img-box"], [1, "media-body"], [3, "text"]], template: function ThemeServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, ThemeServicesComponent_For_2_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ThemeServicesComponent_Conditional_3_Template, 1, 3, "app-no-data", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filteredServices);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.filteredServices.length ? 3 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NoDataComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeServicesComponent, { className: "ThemeServicesComponent" });
})();

export {
  ThemeServicesComponent
};
//# sourceMappingURL=chunk-L32XHBEA.js.map
