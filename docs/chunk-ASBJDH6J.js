import {
  Error404Component
} from "./chunk-IHBXF625.js";
import "./chunk-L32XHBEA.js";
import {
  SkeletonOfferComponent
} from "./chunk-DAHRVSWU.js";
import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective,
  CouponService,
  CouponState,
  GetCoupons,
  ProductBoxComponent,
  SkeletonProductBoxComponent,
  teamSlider,
  testimonialSlider
} from "./chunk-KDHUGBQL.js";
import {
  ButtonComponent
} from "./chunk-YVVLA4K6.js";
import {
  ContactUs,
  GetFaqs,
  GetPageBySlug,
  PageService,
  PageState
} from "./chunk-ZHCF6HBW.js";
import {
  ThemeOptionState,
  environment
} from "./chunk-SWD7ZYS2.js";
import {
  BreadcrumbComponent
} from "./chunk-LDIDPIIC.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  GetProducts,
  Meta,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionModule,
  NoDataComponent,
  ProductService,
  ProductState,
  ReactiveFormsModule,
  Router,
  Select,
  SlicePipe,
  Store,
  TranslateModule,
  TranslatePipe,
  Validators,
  __decorate,
  debounceTime,
  distinctUntilChanged,
  inject,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-GDIBOM5I.js";

// src/app/components/page/about-us/about-us.component.ts
function AboutUsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 5)(2, "div", 6);
    \u0275\u0275element(3, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.content_bg_image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.description);
  }
}
function AboutUsComponent_Conditional_2_For_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 14)(2, "div", 15);
    \u0275\u0275element(3, "img", 16);
    \u0275\u0275elementStart(4, "h5");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h6");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 17)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const team_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.StorageURL + (team_r2 == null ? null : team_r2.profile_image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r2 == null ? null : team_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r2 == null ? null : team_r2.designation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r2 == null ? null : team_r2.review);
  }
}
function AboutUsComponent_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUsComponent_Conditional_2_For_10_ng_template_0_Template, 11, 4, "ng-template", 13);
  }
}
function AboutUsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 5)(2, "div", 9)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "owl-carousel-o", 12);
    \u0275\u0275repeaterCreate(9, AboutUsComponent_Conditional_2_For_10_Template, 1, 0, null, 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.testimonial == null ? null : ctx_r0.aboutUs.testimonial.sub_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.testimonial == null ? null : ctx_r0.aboutUs.testimonial.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.testimonialOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.testimonial == null ? null : ctx_r0.aboutUs.testimonial.reviews);
  }
}
function AboutUsComponent_Conditional_3_For_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const team_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.StorageURL + (team_r3 == null ? null : team_r3.profile_image_url), \u0275\u0275sanitizeUrl)("alt", team_r3 == null ? null : team_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r3 == null ? null : team_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r3 == null ? null : team_r3.designation);
  }
}
function AboutUsComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AboutUsComponent_Conditional_3_For_8_ng_template_0_Template, 5, 4, "ng-template", 13);
  }
}
function AboutUsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 5)(2, "div", 9)(3, "h2", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19)(6, "owl-carousel-o", 12);
    \u0275\u0275repeaterCreate(7, AboutUsComponent_Conditional_3_For_8_Template, 1, 0, null, 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.team == null ? null : ctx_r0.aboutUs.team.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r0.teamOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.team == null ? null : ctx_r0.aboutUs.team.members);
  }
}
function AboutUsComponent_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 14);
    \u0275\u0275element(2, "img", 24)(3, "div", 25);
    \u0275\u0275elementStart(4, "div", 17)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "h4", 26);
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "p", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures == null ? null : ctx_r0.aboutUs.about.futures.length) == 4 ? "col-xl-3 col-sm-6" : (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures == null ? null : ctx_r0.aboutUs.about.futures.length) == 3 ? "col-md-4" : (ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures == null ? null : ctx_r0.aboutUs.about.futures.length) == 2 ? "col-md-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.StorageURL + service_r4.icon, \u0275\u0275sanitizeUrl)("alt", service_r4.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r4.description);
  }
}
function AboutUsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 21)(2, "div", 22);
    \u0275\u0275repeaterCreate(3, AboutUsComponent_Conditional_4_For_4_Template, 11, 5, "div", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.aboutUs == null ? null : ctx_r0.aboutUs.about == null ? null : ctx_r0.aboutUs.about.futures);
  }
}
var AboutUsComponent = class _AboutUsComponent {
  constructor(store) {
    this.store = store;
    this.testimonialOptions = testimonialSlider;
    this.teamOptions = teamSlider;
    this.StorageURL = environment.storageURL;
    this.breadcrumb = {
      title: "About Us",
      items: [{ label: "About Us", active: true }]
    };
    this.themeOptions$.subscribe((option) => {
      this.aboutUs = option?.about_us;
    });
  }
  static {
    this.\u0275fac = function AboutUsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutUsComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 5, consts: [[3, "breadcrumb"], [1, "about-page", "section-b-space"], [1, "testimonial", "small-section"], ["id", "team", 1, "team", "section-b-space"], [1, "container", "about-cls", "section-b-space"], [1, "container"], [1, "banner-section"], ["alt", "", 1, "img-fluid", "lazyload", 3, "src"], [1, "mt-4"], [1, "title1"], [1, "title-inner1"], [1, "slide-2", "testimonial-slider"], [3, "options"], ["carouselSlide", ""], [1, "media"], [1, "text-center"], ["alt", "image", 3, "src"], [1, "media-body"], [1, "title-inner1", "border-0"], [1, "team-4"], [1, "img-fluid", 3, "src", "alt"], [1, "service", "border-section", "small-section"], [1, "row", "g-sm-4", "g-3"], [1, "service-block", 3, "ngClass"], [3, "src", "alt"], [1, "skeleton-img-box"], [1, "skeleton-content-h4"], [1, "skeleton-content-p"]], template: function AboutUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275template(1, AboutUsComponent_Conditional_1_Template, 9, 3, "section", 1)(2, AboutUsComponent_Conditional_2_Template, 11, 3, "section", 2)(3, AboutUsComponent_Conditional_3_Template, 9, 2, "section", 3)(4, AboutUsComponent_Conditional_4_Template, 5, 0, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.about == null ? null : ctx.aboutUs.about.content_bg_image_url) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.status) && (ctx.aboutUs == null ? null : ctx.aboutUs.testimonial == null ? null : ctx.aboutUs.testimonial.reviews == null ? null : ctx.aboutUs.testimonial.reviews.length) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.status) && (ctx.aboutUs == null ? null : ctx.aboutUs.team == null ? null : ctx.aboutUs.team.members == null ? null : ctx.aboutUs.team.members.length) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.aboutUs == null ? null : ctx.aboutUs.about == null ? null : ctx.aboutUs.about.futures) ? 4 : -1);
      }
    }, dependencies: [CommonModule, NgClass, CarouselModule, CarouselComponent, CarouselSlideDirective, TranslateModule, BreadcrumbComponent] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], AboutUsComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent" });
})();

// src/app/components/page/contact-us/contact-us.component.ts
function ContactUsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "name_is_required"), " ");
  }
}
function ContactUsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "email_is_required"), " ");
  }
}
function ContactUsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invalid_email"), " ");
  }
}
function ContactUsComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_number_is_required"), " ");
  }
}
function ContactUsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subject_is_required"), " ");
  }
}
function ContactUsComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "message_is_required"), " ");
  }
}
function ContactUsComponent_Conditional_62_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.contactData.detail_1.icon);
  }
}
function ContactUsComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 27);
    \u0275\u0275template(2, ContactUsComponent_Conditional_62_Conditional_2_Template, 1, 2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.contactData.detail_1.icon ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_1.text);
  }
}
function ContactUsComponent_Conditional_63_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.contactData.detail_2.icon);
  }
}
function ContactUsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 27);
    \u0275\u0275template(2, ContactUsComponent_Conditional_63_Conditional_2_Template, 1, 2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.contactData.detail_2.icon ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_2.text);
  }
}
function ContactUsComponent_Conditional_64_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.contactData.detail_3.icon);
  }
}
function ContactUsComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 27);
    \u0275\u0275template(2, ContactUsComponent_Conditional_64_Conditional_2_Template, 1, 2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.contactData.detail_3.icon ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_3.text);
  }
}
function ContactUsComponent_Conditional_65_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.contactData.detail_4.icon);
  }
}
function ContactUsComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 27);
    \u0275\u0275template(2, ContactUsComponent_Conditional_65_Conditional_2_Template, 1, 2, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.contactData.detail_4.icon ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.contactData.detail_4.text);
  }
}
var ContactUsComponent = class _ContactUsComponent {
  constructor(formBuilder, store) {
    this.formBuilder = formBuilder;
    this.store = store;
    this.breadcrumb = {
      title: "Contact",
      items: [{ label: "Contact", active: true }]
    };
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required])
    });
    this.themeOption$.subscribe((data) => this.contactData = data.contact_us);
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new ContactUs(this.form.value)).subscribe({
        complete: () => {
          this.form.reset();
        }
      });
    }
  }
  static {
    this.\u0275fac = function ContactUsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactUsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 70, vars: 52, consts: [[3, "breadcrumb"], [1, "contact-page", "section-b-space"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [1, "col-lg-5"], [1, "contact-title"], [1, "col-lg-7"], [1, "theme-form", "contact-form", 3, "formGroup"], [1, "row", "g-4"], [1, "col-12"], [1, "form-box"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], [1, "col-md-6"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "review"], ["type", "text", "id", "review", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["type", "text", "id", "last-name", "formControlName", "subject", 1, "form-control", 3, "placeholder"], ["rows", "6", "formControlName", "message", 1, "form-control", 3, "placeholder"], [3, "click", "type", "id", "spinner"], [1, "contact-right"], [1, "contact-page", "pt-0"], [1, "container-fluid", "p-0"], [1, "map-box"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321`, "allowfullscreen", ""], [1, "contact-icon"], [3, "class"], [1, "media-body"]], template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6)(11, "form", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "label", 11);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275template(20, ContactUsComponent_Conditional_20_Template, 3, 3, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 10)(23, "label", 15);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(26, "input", 16);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275template(28, ContactUsComponent_Conditional_28_Template, 3, 3, "div", 13)(29, ContactUsComponent_Conditional_29_Template, 3, 3, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 14)(31, "div", 10)(32, "label", 17);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 18);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275template(37, ContactUsComponent_Conditional_37_Template, 3, 3, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 9)(39, "div", 10)(40, "label", 15);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 19);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275template(45, ContactUsComponent_Conditional_45_Template, 3, 3, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 9)(47, "div", 10)(48, "label", 17);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "textarea", 20);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275template(53, ContactUsComponent_Conditional_53_Template, 3, 3, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 9)(55, "div", 10)(56, "app-button", 21);
        \u0275\u0275listener("click", function ContactUsComponent_Template_app_button_click_56_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(59, "div", 9)(60, "div", 22)(61, "ul");
        \u0275\u0275template(62, ContactUsComponent_Conditional_62_Template, 8, 3, "li")(63, ContactUsComponent_Conditional_63_Template, 8, 3, "li")(64, ContactUsComponent_Conditional_64_Template, 8, 3, "li")(65, ContactUsComponent_Conditional_65_Template, 8, 3, "li");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(66, "section", 23)(67, "div", 24)(68, "div", 25);
        \u0275\u0275element(69, "iframe", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.contactData.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.contactData.description);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 30, "name"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 32, "name"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["name"].touched && (ctx.form.controls["name"].errors == null ? null : ctx.form.controls["name"].errors["required"]) ? 20 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 34, "email"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(27, 36, "email"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["email"].touched && (ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["required"]) ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.form.controls["email"].errors == null ? null : ctx.form.controls["email"].errors["email"]) ? 29 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 38, "phone"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(36, 40, "enter_phone"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]) ? 37 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 42, "subject"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(44, 44, "subject"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["subject"].touched && (ctx.form.controls["subject"].errors == null ? null : ctx.form.controls["subject"].errors["required"]) ? 45 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 46, "write_message"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(52, 48, "write_message"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["message"].touched && (ctx.form.controls["message"].errors == null ? null : ctx.form.controls["message"].errors["required"]) ? 53 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("type", "button")("id", "send_message")("spinner", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 50, "send_message"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.contactData.detail_1.text ? 62 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.contactData.detail_2.text ? 63 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.contactData.detail_3.text ? 64 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.contactData.detail_4.text ? 65 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe, BreadcrumbComponent, ButtonComponent] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], ContactUsComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent" });
})();

// src/app/components/page/faq/faq.component.ts
function FaqComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h5", 9)(3, "button", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    const \u0275$index_15_r2 = ctx.$index;
    \u0275\u0275property("collapsed", \u0275$index_15_r2 !== 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(faq_r1.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(faq_r1.description);
  }
}
function FaqComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, FaqComponent_Conditional_5_For_2_Template, 9, 3, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("closeOthers", true);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = \u0275\u0275pipeBind1(3, 1, ctx_r2.faq$)) == null ? null : tmp_2_0.data);
  }
}
function FaqComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 13);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_faq")("description", "no_faq_desc");
  }
}
var FaqComponent = class _FaqComponent {
  constructor(store, pageService) {
    this.store = store;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "FAQ's",
      items: [{ label: "FAQ's", active: true }]
    };
    this.store.dispatch(new GetFaqs());
  }
  static {
    this.\u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaqComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 4, consts: [[3, "breadcrumb"], [1, "faq-section", "section-b-space"], [1, "container"], [1, "row"], [1, "col-sm-12"], ["ngbAccordion", "", 1, "accordion", "faq-accordion", 3, "closeOthers"], [3, "class", "image", "text", "description"], ["ngbAccordionItem", "", 3, "collapsed"], ["ngbAccordionHeader", ""], [1, "mb-0"], ["type", "button", "ngbAccordionButton", "", 1, "btn", "btn-link"], ["ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body"], [3, "image", "text", "description"]], template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275template(5, FaqComponent_Conditional_5_Template, 4, 3, "div", 5);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275template(7, FaqComponent_Conditional_7_Template, 1, 5, "app-no-data", 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(6, 2, ctx.faq$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length) ? 5 : 7);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      NgbAccordionModule,
      NgbAccordionButton,
      NgbAccordionDirective,
      NgbAccordionItem,
      NgbAccordionHeader,
      NgbAccordionBody,
      NgbAccordionCollapse,
      BreadcrumbComponent,
      NoDataComponent
    ] });
  }
};
__decorate([
  Select(PageState.faq)
], FaqComponent.prototype, "faq$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent" });
})();

// src/app/components/page/search/search.component.ts
function SearchComponent_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-skeleton-product-box");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
  }
}
function SearchComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SearchComponent_Conditional_18_For_1_Template, 2, 2, "div", 14, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.skeletonItems);
  }
}
function SearchComponent_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-product-box", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r2);
  }
}
function SearchComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SearchComponent_Conditional_19_For_1_Template, 2, 3, "div", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "slice");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, ctx_r0.products, 0, 8));
  }
}
function SearchComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 16);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_product")("description", "no_product_desc");
  }
}
var SearchComponent = class _SearchComponent {
  constructor(store, productService, route, router) {
    this.store = store;
    this.productService = productService;
    this.route = route;
    this.router = router;
    this.breadcrumb = {
      title: "Search",
      items: [{ label: "Search", active: true }]
    };
    this.search = new FormControl();
    this.totalItems = 0;
    this.skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 12,
      // Display per page,
      "status": 1,
      "search": ""
    };
    this.route.queryParams.subscribe((params) => {
      if (params["search"]) {
        this.filter["search"] = params["search"];
        this.search.patchValue(params["search"] ? params["search"] : "");
      }
      this.store.dispatch(new GetProducts(this.filter)).subscribe({
        next: (val) => {
          this.products = val.product.product.data;
        }
      });
    });
  }
  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((inputValue) => {
      if (inputValue.length >= 0) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {
            search: inputValue
          }
        });
        this.filter["search"] = inputValue;
      }
    });
  }
  searchProduct() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.search.value
      }
    });
    this.filter["search"] = this.search.value;
  }
  static {
    this.\u0275fac = function SearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["app-search"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 16, consts: [[3, "breadcrumb"], [1, "authentication-page"], [1, "container"], [1, "search-block"], [1, "row"], [1, "col-lg-6", "offset-lg-3"], [1, "form-header"], [1, "input-group", "form-box"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], [1, "input-group-append"], [3, "click", "type", "id", "spinner", "iconClass"], [1, "section-b-space"], [1, "row", "search-product"], [3, "class", "image", "text", "description"], [1, "col-xl-3", "col-md-4", "col-6"], [3, "product"], [3, "image", "text", "description"]], template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "section", 3)(4, "div", 2)(5, "div", 4)(6, "div", 5)(7, "form", 6)(8, "div", 7);
        \u0275\u0275element(9, "input", 8);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementStart(11, "div", 9)(12, "app-button", 10);
        \u0275\u0275listener("click", function SearchComponent_Template_app_button_click_12_listener() {
          return ctx.searchProduct();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275elementStart(15, "section", 11)(16, "div", 2)(17, "div", 12);
        \u0275\u0275template(18, SearchComponent_Conditional_18_Template, 2, 0)(19, SearchComponent_Conditional_19_Template, 3, 4)(20, SearchComponent_Conditional_20_Template, 1, 5, "app-no-data", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(9);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(10, 12, "search_product"));
        \u0275\u0275property("formControl", ctx.search);
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("type", "button")("id", "search-btn")("spinner", false)("iconClass", "ri-search-line");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 14, "search"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.productService.skeletonLoader ? 18 : 19);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.products && !ctx.products.length && !ctx.productService.skeletonLoader ? 20 : -1);
      }
    }, dependencies: [
      CommonModule,
      SlicePipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgForm,
      ReactiveFormsModule,
      FormControlDirective,
      TranslateModule,
      TranslatePipe,
      BreadcrumbComponent,
      ButtonComponent,
      ProductBoxComponent,
      NoDataComponent,
      SkeletonProductBoxComponent
    ] });
  }
};
__decorate([
  Select(ProductState.product)
], SearchComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent" });
})();

// src/app/components/page/offer/offer.component.ts
function OfferComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-skeleton-offer");
    \u0275\u0275elementEnd();
  }
}
function OfferComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OfferComponent_Conditional_4_For_1_Template, 2, 0, "div", 4, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.skeletonItems);
  }
}
function OfferComponent_Conditional_5_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function OfferComponent_Conditional_5_For_1_Conditional_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const coupon_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyFunction(coupon_r3.code));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "copy_code"), " ");
  }
}
function OfferComponent_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6)(2, "div", 7)(3, "h5", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "h6", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, OfferComponent_Conditional_5_For_1_Conditional_11_Template, 3, 3, "a", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(coupon_r3 == null ? null : coupon_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupon_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", coupon_r3 == null ? null : coupon_r3.code, "");
    \u0275\u0275advance();
    \u0275\u0275conditional((coupon_r3 == null ? null : coupon_r3.code) ? 11 : -1);
  }
}
function OfferComponent_Conditional_5_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 14);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added collection-no-data");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_offer")("description", "no_offer_desc");
  }
}
function OfferComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, OfferComponent_Conditional_5_For_1_Template, 12, 4, "div", 4, \u0275\u0275repeaterTrackByIdentity, false, OfferComponent_Conditional_5_ForEmpty_2_Template, 1, 5, "app-no-data", 5);
    \u0275\u0275pipe(3, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater((tmp_1_0 = \u0275\u0275pipeBind1(3, 1, ctx_r0.coupon$)) == null ? null : tmp_1_0.data);
  }
}
var OfferComponent = class _OfferComponent {
  constructor(store, couponService) {
    this.store = store;
    this.couponService = couponService;
    this.skeletonItems = Array.from({ length: 6 }, (_, index) => index);
    this.breadcrumb = {
      title: "Offers",
      items: [{ label: "Offers", active: true }]
    };
    this.store.dispatch(new GetCoupons({ status: 1 }));
  }
  copyFunction(txt) {
    navigator.clipboard.writeText(txt);
  }
  static {
    this.\u0275fac = function OfferComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OfferComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(CouponService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OfferComponent, selectors: [["app-offer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 2, consts: [[3, "breadcrumb"], [1, "section-b-space", "section-t-space", "offer-section"], [1, "container"], [1, "row", "g-md-4", "g-3"], [1, "col-xxl-4", "col-lg-4", "col-sm-6"], [3, "class", "image", "text", "description"], [1, "coupon-box"], [1, "coupon-name"], [1, "fw-semibold", "dark-text"], [1, "coupon-content"], [1, "coupon-apply"], [1, "coupon-code", "success-color"], ["href", "javascript:void(0)", 1, "btn", "theme-btn", "border-btn", "copy-btn", "mt-0"], ["href", "javascript:void(0)", 1, "btn", "theme-btn", "border-btn", "copy-btn", "mt-0", 3, "click"], [3, "image", "text", "description"]], template: function OfferComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275template(4, OfferComponent_Conditional_4_Template, 2, 0)(5, OfferComponent_Conditional_5_Template, 4, 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.couponService.skeletonLoader ? 4 : 5);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      TranslateModule,
      TranslatePipe,
      BreadcrumbComponent,
      NoDataComponent,
      SkeletonOfferComponent
    ] });
  }
};
__decorate([
  Select(CouponState.coupon)
], OfferComponent.prototype, "coupon$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OfferComponent, { className: "OfferComponent" });
})();

// src/app/components/page/skeleton-page/skeleton-page.component.ts
var SkeletonPageComponent = class _SkeletonPageComponent {
  static {
    this.\u0275fac = function SkeletonPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonPageComponent, selectors: [["app-skeleton-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "common-skeleton"], [1, "img-box"], [1, "img"], [1, "img-content"], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-8"], [1, "placeholder", "col-11"]], template: function SkeletonPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "ul");
        \u0275\u0275element(11, "li", 8)(12, "li", 7)(13, "li", 6)(14, "li", 5)(15, "li", 7)(16, "li", 9);
        \u0275\u0275elementEnd()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonPageComponent, { className: "SkeletonPageComponent" });
})();

// src/app/components/page/page/page.component.ts
function PageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-page");
  }
}
function PageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.selectedPage$)) == null ? null : tmp_1_0.content, \u0275\u0275sanitizeHtml);
  }
}
var PageComponent = class _PageComponent {
  constructor(meta, pageService) {
    this.meta = meta;
    this.pageService = pageService;
    this.breadcrumb = {
      title: "Page",
      items: []
    };
    this.selectedPage$.subscribe((page2) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = page2.title;
      this.breadcrumb.items.push({ label: "Page", active: true }, { label: page2.title, active: false });
      page2?.meta_title && this.meta.updateTag({ property: "og:title", content: page2?.meta_title });
      page2?.meta_description && this.meta.updateTag({ property: "og:description", content: page2?.meta_description });
    });
  }
  static {
    this.\u0275fac = function PageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageComponent, selectors: [["app-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[3, "breadcrumb"], [1, "section-b-space", "ckeditor-content"], [1, "container"], [3, "innerHTML"]], template: function PageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275template(3, PageComponent_Conditional_3_Template, 1, 0, "app-skeleton-page")(4, PageComponent_Conditional_4_Template, 2, 3, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.pageService.skeletonLoader ? 3 : 4);
      }
    }, dependencies: [CommonModule, AsyncPipe, BreadcrumbComponent, SkeletonPageComponent] });
  }
};
__decorate([
  Select(PageState.selectedPage)
], PageComponent.prototype, "selectedPage$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageComponent, { className: "PageComponent" });
})();

// src/app/shared/resolver/page.resolver.ts
var PageResolver = (route, state) => {
  return inject(Store).dispatch(new GetPageBySlug(route.paramMap.get("slug")));
};

// src/app/components/page/page.routes.ts
var page = [
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "offers",
    component: OfferComponent
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "page/:slug",
    component: PageComponent,
    resolve: {
      data: PageResolver
    }
  }
];
export {
  page
};
//# sourceMappingURL=chunk-ASBJDH6J.js.map
