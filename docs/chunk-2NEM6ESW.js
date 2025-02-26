import {
  AttributeService
} from "./chunk-YXNPAIYV.js";
import {
  CategoryState
} from "./chunk-MEGG5YRD.js";
import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective,
  categorySlider
} from "./chunk-KDHUGBQL.js";
import {
  ButtonComponent
} from "./chunk-YVVLA4K6.js";
import {
  environment
} from "./chunk-SWD7ZYS2.js";
import {
  ActivatedRoute,
  CommonModule,
  NgStyle,
  NgbActiveModal,
  NoDataComponent,
  Router,
  RouterLink,
  RouterModule,
  Select,
  SlicePipe,
  TranslateModule,
  TranslatePipe,
  __decorate,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GDIBOM5I.js";

// src/app/shared/components/widgets/categories/categories.component.ts
var _c0 = (a0) => ["/category", a0];
var _c1 = (a0) => ({ "background-image": a0 });
function CategoriesComponent_Conditional_0_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r1.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 2);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_0_Conditional_0_For_2_Template, 3, 4, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_0_Conditional_0_Template, 3, 0, "ul", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.categories.length ? 0 : -1);
  }
}
function CategoriesComponent_Conditional_0_Conditional_1_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "app-button", 16);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_0_Conditional_1_Conditional_6_For_2_Template_app_button_click_1_listener() {
      const category_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.redirectToCollection(category_r5.slug));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "img", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.selectedCategorySlug.length && ctx_r1.selectedCategorySlug.includes(category_r5.slug) ? "nav-link active" : "nav-link");
    \u0275\u0275property("id", "nav_link_btn")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("src", (category_r5 == null ? null : category_r5.category_icon) ? category_r5 == null ? null : category_r5.category_icon == null ? null : category_r5.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r5 == null ? null : category_r5.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 14);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_1_Conditional_6_For_2_Template, 4, 7, "li", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_category");
  }
}
function CategoriesComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 11)(2, "span", 12);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_0_Conditional_1_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeCanvasMenu());
    });
    \u0275\u0275element(3, "i", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CategoriesComponent_Conditional_0_Conditional_1_Conditional_6_Template, 3, 0, "ul", 14)(7, CategoriesComponent_Conditional_0_Conditional_1_Conditional_7_Template, 1, 3, "app-no-data", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.categories.length ? 6 : 7);
  }
}
function CategoriesComponent_Conditional_0_Conditional_2_For_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "a", 21);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_0_Conditional_2_For_3_ng_template_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const category_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.redirectToCollection(category_r7.slug));
    });
    \u0275\u0275element(2, "img", 17);
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedCategorySlug.length && ctx_r1.selectedCategorySlug.includes(category_r7.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", (category_r7 == null ? null : category_r7.category_icon) ? category_r7 == null ? null : category_r7.category_icon == null ? null : category_r7.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r7 == null ? null : category_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r7.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_2_For_3_ng_template_0_Template, 5, 5, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_category");
  }
}
function CategoriesComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(2, CategoriesComponent_Conditional_0_Conditional_2_For_3_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CategoriesComponent_Conditional_0_Conditional_2_Conditional_4_Template, 1, 3, "app-no-data", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("category-slider");
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.categories.length ? 4 : -1);
  }
}
function CategoriesComponent_Conditional_0_Conditional_3_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "a", 10)(2, "div", 24)(3, "div", 25);
    \u0275\u0275element(4, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4")(6, "a", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, category_r8.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c1, "url(" + (category_r8.category_image ? category_r8 == null ? null : category_r8.category_image == null ? null : category_r8.category_image.original_url : "assets/images/placeholder/category.png") + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r8.category_image ? category_r8 == null ? null : category_r8.category_image == null ? null : category_r8.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, category_r8.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r8.name, " ");
  }
}
function CategoriesComponent_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CategoriesComponent_Conditional_0_Conditional_3_Conditional_1_For_1_Template, 8, 12, "div", 23, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_3_Conditional_2_For_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4")(5, "a", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, category_r9.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c1, "url(" + (category_r9.category_image ? category_r9 == null ? null : category_r9.category_image == null ? null : category_r9.category_image.original_url : "assets/images/placeholder/category.png") + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r9.category_image ? category_r9 == null ? null : category_r9.category_image == null ? null : category_r9.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, category_r9.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r9.name, " ");
  }
}
function CategoriesComponent_Conditional_0_Conditional_3_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_3_Conditional_2_For_3_ng_template_0_Template, 7, 12, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(2, CategoriesComponent_Conditional_0_Conditional_3_Conditional_2_For_3_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, CategoriesComponent_Conditional_0_Conditional_3_Conditional_1_Template, 2, 0)(2, CategoriesComponent_Conditional_0_Conditional_3_Conditional_2_Template, 4, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.slider ? 1 : 2);
  }
}
function CategoriesComponent_Conditional_0_Conditional_4_Conditional_1_For_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 10)(2, "div", 31);
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "a", 10)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r10.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r10.category_image ? category_r10 == null ? null : category_r10.category_image == null ? null : category_r10.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r10.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r10.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_4_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_4_Conditional_1_For_4_ng_template_0_Template, 8, 9, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(3, CategoriesComponent_Conditional_0_Conditional_4_Conditional_1_For_4_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_4_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 30)(2, "a", 10)(3, "div", 31);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 33)(6, "a", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r11.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r11.category_image ? category_r11 == null ? null : category_r11.category_image == null ? null : category_r11.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r11.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r11.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CategoriesComponent_Conditional_0_Conditional_4_Conditional_2_For_1_Template, 9, 9, "div", 23, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, CategoriesComponent_Conditional_0_Conditional_4_Conditional_1_Template, 5, 1, "div", 28)(2, CategoriesComponent_Conditional_0_Conditional_4_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.slider ? 1 : 2);
  }
}
function CategoriesComponent_Conditional_0_Conditional_5_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 34);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r12.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r12.category_icon ? category_r12.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r12.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r12.name, " ");
  }
}
function CategoriesComponent_Conditional_0_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_5_For_2_ng_template_0_Template, 4, 6, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_5_For_2_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_6_Conditional_1_For_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 10)(2, "div", 36)(3, "div", 37);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 33)(6, "a", 10)(7, "h5");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r13.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r13.category_icon ? category_r13.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r13.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r13.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_6_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_6_Conditional_1_For_4_ng_template_0_Template, 9, 9, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 35)(2, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(3, CategoriesComponent_Conditional_0_Conditional_6_Conditional_1_For_4_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 30)(2, "a", 10)(3, "div", 36)(4, "div", 37);
    \u0275\u0275element(5, "img", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 33)(7, "a", 10)(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r14.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r14.category_icon ? category_r14.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r14.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r14.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CategoriesComponent_Conditional_0_Conditional_6_Conditional_2_For_1_Template, 10, 9, "div", 23, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, CategoriesComponent_Conditional_0_Conditional_6_Conditional_1_Template, 5, 1, "div", 28)(2, CategoriesComponent_Conditional_0_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.slider ? 1 : 2);
  }
}
function CategoriesComponent_Conditional_0_Conditional_7_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 38)(2, "div")(3, "h4", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 40)(6, "li")(7, "a", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275element(10, "img", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(category_r15.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r15.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r15.category_image ? category_r15 == null ? null : category_r15.category_image == null ? null : category_r15.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl);
  }
}
function CategoriesComponent_Conditional_0_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_7_For_2_ng_template_0_Template, 11, 6, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_7_For_2_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_8_Conditional_0_For_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r16.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r16.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_8_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_8_Conditional_0_For_3_ng_template_0_Template, 3, 4, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(2, CategoriesComponent_Conditional_0_Conditional_8_Conditional_0_For_3_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_8_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r17.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r17.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_8_Conditional_1_For_2_Template, 3, 4, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_8_Conditional_0_Template, 4, 1, "div", 6)(1, CategoriesComponent_Conditional_0_Conditional_8_Conditional_1_Template, 3, 0, "div", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.slider ? 0 : 1);
  }
}
function CategoriesComponent_Conditional_0_Conditional_9_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 10)(2, "div", 31);
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "a", 10)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, category_r18.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r18.category_icon ? category_r18.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r18.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r18.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_9_For_2_ng_template_0_Template, 8, 9, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_9_For_2_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r19 == null ? null : category_r19.category_image == null ? null : category_r19.category_image.original_url, \u0275\u0275sanitizeUrl)("alt", category_r19.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r19.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const categories_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, categories_r20.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(categories_r20.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_For_1_Template, 3, 4, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "slice");
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, category_r19.subcategories, 0, 5));
  }
}
function CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 38)(2, "div");
    \u0275\u0275template(3, CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_3_Template, 2, 2, "div")(4, CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_4_Template, 2, 2, "div");
    \u0275\u0275elementStart(5, "h4")(6, "a", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ul", 40);
    \u0275\u0275template(9, CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Conditional_9_Template, 3, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 43);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional((category_r19 == null ? null : category_r19.category_image) ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, category_r19.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r19.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(category_r19.subcategories ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, category_r19.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "view_more"));
  }
}
function CategoriesComponent_Conditional_0_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_10_For_2_ng_template_0_Template, 13, 12, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_10_For_2_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47);
    \u0275\u0275element(3, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "a", 10)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(5, _c1, "url(" + (category_r21.category_image ? category_r21 == null ? null : category_r21.category_image == null ? null : category_r21.category_image.original_url : "assets/images/placeholder/category.png") + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r21.category_image ? category_r21 == null ? null : category_r21.category_image == null ? null : category_r21.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, category_r21.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r21.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_11_For_2_Template, 8, 9, "div", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "a", 10)(2, "div", 50)(3, "h4", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c0, category_r22.slug));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r22.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_12_For_2_Template, 5, 4, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_13_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "a", 10)(2, "div", 52)(3, "div", 37);
    \u0275\u0275element(4, "img", 32)(5, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r23.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r23.category_icon ? category_r23.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r23.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r23.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_13_For_2_ng_template_0_Template, 8, 6, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_13_For_2_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_14_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "a", 10)(2, "div", 24)(3, "div", 37);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r24.slug));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r24.category_icon ? category_r24.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r24.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r24.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_14_For_2_ng_template_0_Template, 7, 6, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_14_For_2_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "a", 10)(2, "div", 55)(3, "div", 56)(4, "div", 37);
    \u0275\u0275element(5, "img", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const category_r25 = ctx.$implicit;
    const \u0275$index_395_r26 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, category_r25.slug));
    \u0275\u0275advance();
    \u0275\u0275classProp("hover-effect", \u0275$index_395_r26 == 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", category_r25.category_image ? category_r25 == null ? null : category_r25.category_image == null ? null : category_r25.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r25.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r25.name);
  }
}
function CategoriesComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_0_Conditional_15_For_2_Template, 8, 8, "div", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_0_Conditional_0_Template, 1, 1)(1, CategoriesComponent_Conditional_0_Conditional_1_Template, 8, 4, "div", 3)(2, CategoriesComponent_Conditional_0_Conditional_2_Template, 5, 4, "div", 4)(3, CategoriesComponent_Conditional_0_Conditional_3_Template, 3, 1, "div", 5)(4, CategoriesComponent_Conditional_0_Conditional_4_Template, 3, 1, "div", 6)(5, CategoriesComponent_Conditional_0_Conditional_5_Template, 3, 1, "owl-carousel-o", 1)(6, CategoriesComponent_Conditional_0_Conditional_6_Template, 3, 1, "div", 6)(7, CategoriesComponent_Conditional_0_Conditional_7_Template, 3, 1, "owl-carousel-o", 1)(8, CategoriesComponent_Conditional_0_Conditional_8_Template, 2, 1)(9, CategoriesComponent_Conditional_0_Conditional_9_Template, 3, 1, "owl-carousel-o", 1)(10, CategoriesComponent_Conditional_0_Conditional_10_Template, 3, 1, "owl-carousel-o", 1)(11, CategoriesComponent_Conditional_0_Conditional_11_Template, 3, 0, "div", 7)(12, CategoriesComponent_Conditional_0_Conditional_12_Template, 3, 0, "div", 8)(13, CategoriesComponent_Conditional_0_Conditional_13_Template, 3, 1, "owl-carousel-o", 1)(14, CategoriesComponent_Conditional_0_Conditional_14_Template, 3, 1, "owl-carousel-o", 1)(15, CategoriesComponent_Conditional_0_Conditional_15_Template, 3, 0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.style == "vertical" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "classic_vertical" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "horizontal" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "basic" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "simple" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "classic" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "standard" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "premium" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "bag" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "digital" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "one" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "shoes" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "shoes-size" ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "vegetable" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "books" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.style == "gradient" ? 15 : -1);
  }
}
function CategoriesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_category");
  }
}
function CategoriesComponent_Conditional_2_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 57)(2, "a", 10)(3, "div", 31);
    \u0275\u0275element(4, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33)(6, "h5");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const category_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r27.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r27.category_image ? category_r27 == null ? null : category_r27.category_image == null ? null : category_r27.category_image.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl)("alt", category_r27.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r27.name);
  }
}
function CategoriesComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CategoriesComponent_Conditional_2_For_2_ng_template_0_Template, 8, 6, "ng-template", 20);
  }
}
function CategoriesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 1);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_2_For_2_Template, 1, 0, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function CategoriesComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 10);
    \u0275\u0275element(2, "img", 58)(3, "div", 59);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, category_r28.slug));
    \u0275\u0275advance();
    \u0275\u0275property("alt", category_r28 == null ? null : category_r28.name)("src", (category_r28 == null ? null : category_r28.category_icon) ? category_r28 == null ? null : category_r28.category_icon == null ? null : category_r28.category_icon.original_url : "assets/images/placeholder/category.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r28.name);
  }
}
function CategoriesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 2);
    \u0275\u0275repeaterCreate(1, CategoriesComponent_Conditional_3_For_2_Template, 7, 6, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
var CategoriesComponent = class _CategoriesComponent {
  constructor(route, router, attributeService) {
    this.route = route;
    this.router = router;
    this.attributeService = attributeService;
    this.categoryIds = [];
    this.style = "vertical";
    this.options = categorySlider;
    this.selectedCategorySlug = [];
    this.StorageURL = environment.storageURL;
    this.route.queryParams.subscribe((params) => {
      this.selectedCategorySlug = params["category"] ? params["category"].split(",") : [];
    });
    this.category$.subscribe((res) => this.categories = res.data.map((category) => category));
  }
  ngOnChanges() {
    if (this.categoryIds && this.categoryIds.length) {
      this.category$.subscribe((res) => this.categories = this.getCategoriesByIds(res.data, this.categoryIds));
    }
    if (this.style == "vegetable") {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: __spreadProps(__spreadValues({}, this.options.responsive), {
          768: {
            items: 4
          },
          900: {
            items: 5
          },
          1300: {
            items: 7
          }
        })
      });
    }
  }
  redirectToCollection(slug) {
    let index = this.selectedCategorySlug.indexOf(slug);
    if (index === -1)
      this.selectedCategorySlug.push(slug);
    else
      this.selectedCategorySlug.splice(index, 1);
    this.router.navigate(["/collections"], {
      relativeTo: this.route,
      queryParams: {
        category: this.selectedCategorySlug.length ? this.selectedCategorySlug?.join(",") : null
      },
      queryParamsHandling: "merge",
      // preserve the existing query params in the route
      skipLocationChange: false
      // do trigger navigation
    });
  }
  getCategoriesByIds(categories, ids) {
    let matchedCategories = [];
    categories.forEach((category) => {
      if (ids.includes(category.id)) {
        matchedCategories.push(category);
      }
      if (category.subcategories?.length) {
        const matchedSubcategories = this.getCategoriesByIds(category.subcategories, ids);
        if (matchedSubcategories.length) {
          matchedCategories.push(...matchedSubcategories);
        }
      }
    });
    return matchedCategories;
  }
  closeCanvasMenu() {
    this.attributeService.offCanvasMenu = false;
  }
  static {
    this.\u0275fac = function CategoriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoriesComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AttributeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], inputs: { categoryIds: "categoryIds", style: "style", image: "image", slider: "slider", options: "options" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [[3, "class", "text"], [3, "options"], ["id", "sub-menu", 1, "sm", "pixelstrap", "sm-vertical"], [1, "shop-left-sidebar"], [1, "product-wrapper", 3, "class"], [1, "row", "g-4", "ratio_square"], [1, "row"], [1, "row", "g-sm-4", "g-3", "category-border"], [1, "row", "background"], [1, "row", "g-sm-4", "g-3"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "collection-mobile-back"], [1, "filter-back", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "nav", "nav-pills", "mb-3", "custom-nav-tab"], [1, "nav-item"], [3, "click", "id", "spinner"], [3, "src", "alt"], [3, "text"], [1, "product-wrapper"], ["carouselSlide", ""], ["href", "javascript:void(0)", 1, "category-box", "category-dark", 3, "click"], [1, "col-12"], [1, "col-xl-2", "col-sm-3", "col-4"], [1, "img-category"], [1, "img-sec", "bg-size", 3, "ngStyle"], [1, "img-fluid", "bg-img", 3, "src", "alt"], [3, "routerLink"], [1, "col"], [1, "category-5"], [1, "category-block"], [1, "category-image"], [1, "img-fluid", 3, "src", "alt"], [1, "category-details"], ["href", "javascript:void(0)", 1, "btn", "btn-outline", "btn-block", 3, "routerLink"], [1, ""], [1, "category-image", "svg-image"], [1, "img-sec"], [1, "category-wrapper"], [1, "text-theme"], [1, "category-link"], ["alt", "category-image", 1, "img-fluid", "lazyload", 3, "src"], [1, "row", "row-cols-md-4", "row-cols-2", "g-sm-4", "g-2"], ["href", "javascript:void", 1, "btn", "btn-classic", "btn-outline", 3, "routerLink"], ["href", "javascript:void", 3, "routerLink"], [1, "col-lg-4", "col-sm-6", "border-padding"], [1, "category-banner"], [1, "bg-size", 3, "ngStyle"], [1, "img-fluid", "lazyload", "bg-img", 3, "src", "alt"], [1, "category-box"], [1, "contain-bg"], ["data-hover", "size 06"], [1, "category-boxes"], [1, "skeleton-img-sec"], [1, "col-xl-2", "col-md-3", "col-sm-4", "col-6"], [1, "gradient-category"], [1, "gradient-border"], [1, "category-nft"], ["alt", "", 1, "img-fluid", "me-2", "rounded-0", "rounded-0", 3, "alt", "src"], [1, "skeleton-category-img"], [1, "skeleton-category-text"]], template: function CategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CategoriesComponent_Conditional_0_Template, 16, 16)(1, CategoriesComponent_Conditional_1_Template, 1, 3, "app-no-data", 0)(2, CategoriesComponent_Conditional_2_Template, 3, 1, "owl-carousel-o", 1)(3, CategoriesComponent_Conditional_3_Template, 3, 0, "ul", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.categories && ctx.categories.length ? 0 : 1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.style == "digital_download" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.style == "sidebar" ? 3 : -1);
      }
    }, dependencies: [CommonModule, NgStyle, SlicePipe, CarouselModule, CarouselComponent, CarouselSlideDirective, TranslateModule, TranslatePipe, RouterModule, RouterLink, ButtonComponent, NoDataComponent] });
  }
};
__decorate([
  Select(CategoryState.category)
], CategoriesComponent.prototype, "category$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent" });
})();

// src/app/shared/components/widgets/modal/video-modal/video-modal.component.ts
function VideoModalComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 4);
    \u0275\u0275element(1, "source", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.video_url, \u0275\u0275sanitizeUrl);
  }
}
function VideoModalComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "audio", 5);
    \u0275\u0275element(1, "source", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.video_url, \u0275\u0275sanitizeUrl);
  }
}
function VideoModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VideoModalComponent_Conditional_4_Conditional_0_Template, 2, 1, "video", 4)(1, VideoModalComponent_Conditional_4_Conditional_1_Template, 2, 1, "audio", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.type == "video" ? 0 : ctx_r0.type == "audio" ? 1 : -1);
  }
}
var VideoModalComponent = class _VideoModalComponent {
  constructor(modal) {
    this.modal = modal;
    this.StorageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function VideoModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideoModalComponent)(\u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoModalComponent, selectors: [["app-video-modal"]], inputs: { video_url: "video_url", type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 5, consts: [[1, "modal-content"], [1, "modal-header", "p-0"], [3, "click", "id", "iconClass"], [1, "modal-body", "p-3", "d-flex", "align-items-center", "justify-content-center"], ["autoplay", "true", "loop", "true", 1, "w-100", "h-100"], ["controls", "", "autoplay", "false", "loop", "true"], ["type", "video/mp4", 3, "src"], ["type", "audio/mp3", 3, "src"]], template: function VideoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "app-button", 2);
        \u0275\u0275listener("click", function VideoModalComponent_Template_app_button_click_2_listener() {
          return ctx.modal.close("Cross click");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, VideoModalComponent_Conditional_4_Template, 2, 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("id", "profile_modal_close_btn")("iconClass", "ri-close-line");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.video_url ? 4 : -1);
      }
    }, dependencies: [ButtonComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoModalComponent, { className: "VideoModalComponent" });
})();

export {
  CategoriesComponent,
  VideoModalComponent
};
//# sourceMappingURL=chunk-2NEM6ESW.js.map
