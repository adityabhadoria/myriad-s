import {
  Autoplay,
  GetHomePage,
  Mousewheel,
  Navigation,
  Pagination,
  SwiperComponent,
  SwiperModule,
  SwiperSlideDirective,
  ThemeState,
  core_default
} from "./chunk-TM2AEMKX.js";
import {
  CategoriesComponent,
  VideoModalComponent
} from "./chunk-2NEM6ESW.js";
import {
  AttributeState,
  GetAttribute
} from "./chunk-YXNPAIYV.js";
import {
  BlogService,
  BlogState,
  BrandState,
  CategoryState,
  GetBlogs,
  GetBrands,
  GetCategories,
  GetHeaderCategories
} from "./chunk-MEGG5YRD.js";
import {
  ThemeServicesComponent
} from "./chunk-L32XHBEA.js";
import {
  BlogSlider,
  BrandSlider,
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective,
  CouponState,
  FurnitureCategorySlider,
  GetCoupons,
  JewelleryCategorySlider,
  ProductBoxComponent,
  SkeletonProductBoxComponent,
  SocialMediaSlider,
  attributeSlider,
  bagsProduct,
  blogSlider4,
  categorySlider,
  homeBannerSlider,
  horizontalProductSlider,
  productSlider,
  productSlider2,
  productSlider3,
  productSlider4,
  productSlider5,
  productSlider6,
  toolsCategorySlider
} from "./chunk-KDHUGBQL.js";
import {
  ButtonComponent
} from "./chunk-YVVLA4K6.js";
import {
  ThemeOptionState,
  environment
} from "./chunk-SWD7ZYS2.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DatePipe,
  GetCategoryProducts,
  GetMoreProduct,
  GetProductByIds,
  GetProducts,
  NgClass,
  NgForOf,
  NgStyle,
  NgbModal,
  NoDataComponent,
  PLATFORM_ID,
  ProductService,
  ProductState,
  Router,
  RouterLink,
  RouterModule,
  Select,
  Store,
  ThemeOptionService,
  TranslateModule,
  TranslatePipe,
  __decorate,
  __spreadProps,
  __spreadValues,
  forkJoin,
  isPlatformBrowser,
  of,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
  ɵɵtextInterpolate2
} from "./chunk-GDIBOM5I.js";

// src/app/shared/components/widgets/image-link/image-link.component.ts
var _c0 = ["*", "*", "*"];
var _c1 = (a0) => ({ "background-image": a0 });
var _c2 = (a0) => ["/category", a0];
var _c3 = (a0) => ["/product/", a0];
function ImageLinkComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.class)("ngStyle", \u0275\u0275pureFunction1(2, _c1, "url(" + ((ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder) + ")"));
  }
}
function ImageLinkComponent_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder, \u0275\u0275sanitizeUrl);
  }
}
function ImageLinkComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0);
    \u0275\u0275template(1, ImageLinkComponent_Conditional_0_Conditional_0_Conditional_1_Template, 1, 4, "div", 2)(2, ImageLinkComponent_Conditional_0_Conditional_0_Conditional_2_Template, 1, 1, "img", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275propertyInterpolate("href", ctx_r0.image == null ? null : ctx_r0.image.redirect_link == null ? null : ctx_r0.image.redirect_link.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bgImage ? 1 : 2);
  }
}
function ImageLinkComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.class)("ngStyle", \u0275\u0275pureFunction1(2, _c1, "url(" + ((ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder) + ")"));
  }
}
function ImageLinkComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder, \u0275\u0275sanitizeUrl);
  }
}
function ImageLinkComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ImageLinkComponent_Conditional_0_Conditional_1_Conditional_1_Template, 1, 4, "div", 2)(2, ImageLinkComponent_Conditional_0_Conditional_1_Conditional_2_Template, 1, 1, "img", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bgImage ? 1 : 2);
  }
}
function ImageLinkComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImageLinkComponent_Conditional_0_Conditional_0_Template, 3, 2, "a", 0)(1, ImageLinkComponent_Conditional_0_Conditional_1_Template, 3, 1, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r0.image == null ? null : ctx_r0.image.redirect_link == null ? null : ctx_r0.image.redirect_link.link) ? 0 : 1);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.image.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.image.title);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ImageLinkComponent_Conditional_1_Conditional_0_Conditional_1_Conditional_1_Template, 5, 2, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.class)("ngStyle", \u0275\u0275pureFunction1(3, _c1, "url(" + ((ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder) + ")"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.banner_details ? 1 : -1);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder, \u0275\u0275sanitizeUrl);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275template(1, ImageLinkComponent_Conditional_1_Conditional_0_Conditional_1_Template, 2, 5, "div", 2)(2, ImageLinkComponent_Conditional_1_Conditional_0_Conditional_2_Template, 1, 1, "img", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, ctx_r0.image == null ? null : ctx_r0.image.redirect_link == null ? null : ctx_r0.image.redirect_link.link));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bgImage ? 1 : 2);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.image.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.image.title);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ImageLinkComponent_Conditional_1_Conditional_1_Conditional_0_Conditional_1_Template, 5, 2, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.class)("ngStyle", \u0275\u0275pureFunction1(3, _c1, "url(" + ((ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder) + ")"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.banner_details ? 1 : -1);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder, \u0275\u0275sanitizeUrl);
  }
}
function ImageLinkComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImageLinkComponent_Conditional_1_Conditional_1_Conditional_0_Template, 2, 5, "div", 2)(1, ImageLinkComponent_Conditional_1_Conditional_1_Conditional_1_Template, 1, 1, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.bgImage ? 0 : 1);
  }
}
function ImageLinkComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImageLinkComponent_Conditional_1_Conditional_0_Template, 3, 4, "a", 4)(1, ImageLinkComponent_Conditional_1_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r0.image == null ? null : ctx_r0.image.redirect_link == null ? null : ctx_r0.image.redirect_link.link) ? 0 : 1);
  }
}
function ImageLinkComponent_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.class)("ngStyle", \u0275\u0275pureFunction1(2, _c1, "url(" + ((ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder) + ")"));
  }
}
function ImageLinkComponent_Conditional_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder, \u0275\u0275sanitizeUrl);
  }
}
function ImageLinkComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275template(1, ImageLinkComponent_Conditional_2_Conditional_0_Conditional_1_Template, 2, 4, "div", 2)(2, ImageLinkComponent_Conditional_2_Conditional_0_Conditional_2_Template, 1, 1, "img", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c3, ctx_r0.image == null ? null : ctx_r0.image.product_slug));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bgImage ? 1 : 2);
  }
}
function ImageLinkComponent_Conditional_2_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.class)("ngStyle", \u0275\u0275pureFunction1(2, _c1, "url(" + ((ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder) + ")"));
  }
}
function ImageLinkComponent_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder, \u0275\u0275sanitizeUrl);
  }
}
function ImageLinkComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImageLinkComponent_Conditional_2_Conditional_1_Conditional_0_Template, 2, 4, "div", 2)(1, ImageLinkComponent_Conditional_2_Conditional_1_Conditional_1_Template, 1, 1, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.bgImage ? 0 : 1);
  }
}
function ImageLinkComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImageLinkComponent_Conditional_2_Conditional_0_Template, 3, 4, "a", 4)(1, ImageLinkComponent_Conditional_2_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r0.image == null ? null : ctx_r0.image.product_slug) ? 0 : 1);
  }
}
function ImageLinkComponent_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.class)("ngStyle", \u0275\u0275pureFunction1(2, _c1, "url(" + ((ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder) + ")"));
  }
}
function ImageLinkComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
    \u0275\u0275projection(1, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", (ctx_r0.image == null ? null : ctx_r0.image.image_url) ? ctx_r0.StorageURL + (ctx_r0.image == null ? null : ctx_r0.image.image_url) : ctx_r0.placeholder, \u0275\u0275sanitizeUrl);
  }
}
function ImageLinkComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ImageLinkComponent_Conditional_3_Conditional_0_Template, 1, 4, "div", 2)(1, ImageLinkComponent_Conditional_3_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.bgImage ? 0 : 1);
  }
}
var ImageLinkComponent = class _ImageLinkComponent {
  constructor() {
    this.banner_details = false;
    this.StorageURL = environment.storageURL;
  }
  ngOnChanges(change) {
    if (change["image"]?.currentValue && typeof change["image"]?.currentValue?.redirect_link?.link === "number") {
      this.product$.subscribe((res) => {
        res.map((product) => {
          if (product.id === change["image"]?.currentValue?.redirect_link?.link) {
            this.image["product_slug"] = product.slug;
          }
        });
      });
    }
  }
  getProductSlug(id, products) {
    let product = products.find((product2) => {
      product2.id === id;
    });
    return product ? product.slug : null;
  }
  static {
    this.\u0275fac = function ImageLinkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImageLinkComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImageLinkComponent, selectors: [["app-image-link"]], inputs: { image: "image", bgImage: "bgImage", class: "class", banner_details: "banner_details", placeholder: "placeholder" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 4, vars: 1, consts: [["target", "_blank", 1, "banner-contain", "d-block", 3, "href"], [1, "banner-contain"], [1, "bg-size", 3, "ngClass", "ngStyle"], ["alt", "banner", 1, "bg-img", "w-100", 3, "src"], [3, "routerLink"], [1, "absolute-contain"]], template: function ImageLinkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275template(0, ImageLinkComponent_Conditional_0_Template, 2, 1)(1, ImageLinkComponent_Conditional_1_Template, 2, 1)(2, ImageLinkComponent_Conditional_2_Template, 2, 1)(3, ImageLinkComponent_Conditional_3_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.image == null ? null : ctx.image.redirect_link == null ? null : ctx.image.redirect_link.link_type) === "external_url" ? 0 : (ctx.image == null ? null : ctx.image.redirect_link == null ? null : ctx.image.redirect_link.link_type) === "collection" ? 1 : (ctx.image == null ? null : ctx.image.redirect_link == null ? null : ctx.image.redirect_link.link_type) === "product" ? 2 : 3);
      }
    }, dependencies: [CommonModule, NgClass, NgStyle, RouterModule, RouterLink] });
  }
};
__decorate([
  Select(ProductState.productByIds)
], ImageLinkComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImageLinkComponent, { className: "ImageLinkComponent" });
})();

// src/app/components/home/widgets/theme-banner/theme-banner.component.ts
function ThemeBannerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 3);
    \u0275\u0275element(2, "app-image-link", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class ? ctx_r0.class : "col-md-6");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("collection-banner");
    \u0275\u0275property("image", ctx_r0.banners == null ? null : ctx_r0.banners.banner_1)("bgImage", true);
  }
}
function ThemeBannerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 3);
    \u0275\u0275element(2, "app-image-link", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class ? ctx_r0.class : "col-md-6");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("collection-banner");
    \u0275\u0275property("image", ctx_r0.banners == null ? null : ctx_r0.banners.banner_2)("bgImage", true);
  }
}
function ThemeBannerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 3);
    \u0275\u0275element(2, "app-image-link", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class ? ctx_r0.class : "col-md-6");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("collection-banner");
    \u0275\u0275property("image", ctx_r0.banners == null ? null : ctx_r0.banners.banner_3)("bgImage", true);
  }
}
function ThemeBannerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 3);
    \u0275\u0275element(2, "app-image-link", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class ? ctx_r0.class : "col-md-6");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("collection-banner");
    \u0275\u0275property("image", ctx_r0.banners == null ? null : ctx_r0.banners.banner_4)("bgImage", true);
  }
}
function ThemeBannerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "a", 3);
    \u0275\u0275element(3, "app-image-link", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.banners == null ? null : ctx_r0.banners.grid_banner_1)("bgImage", true);
  }
}
function ThemeBannerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "a", 3);
    \u0275\u0275element(3, "app-image-link", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.banners == null ? null : ctx_r0.banners.grid_banner_2)("bgImage", true);
  }
}
function ThemeBannerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "a", 3);
    \u0275\u0275element(3, "app-image-link", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.banners == null ? null : ctx_r0.banners.grid_banner_3)("bgImage", true);
  }
}
var ThemeBannerComponent = class _ThemeBannerComponent {
  static {
    this.\u0275fac = function ThemeBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeBannerComponent, selectors: [["app-theme-banner"]], inputs: { banners: "banners", class: "class" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 7, consts: [[1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "col-md-4"], ["href", "javascript:void(0)"], [3, "image", "bgImage"], [1, "collection-banner", "text-center"]], template: function ThemeBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ThemeBannerComponent_Conditional_1_Template, 3, 6, "div", 1)(2, ThemeBannerComponent_Conditional_2_Template, 3, 6, "div", 1)(3, ThemeBannerComponent_Conditional_3_Template, 3, 6, "div", 1)(4, ThemeBannerComponent_Conditional_4_Template, 3, 6, "div", 1)(5, ThemeBannerComponent_Conditional_5_Template, 4, 4, "div", 2)(6, ThemeBannerComponent_Conditional_6_Template, 4, 4, "div", 2)(7, ThemeBannerComponent_Conditional_7_Template, 4, 4, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.banner_1 == null ? null : ctx.banners.banner_1.status) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.banner_2 == null ? null : ctx.banners.banner_2.status) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.banner_3 == null ? null : ctx.banners.banner_3.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.banner_4 == null ? null : ctx.banners.banner_4.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.grid_banner_1 == null ? null : ctx.banners.grid_banner_1.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.grid_banner_2 == null ? null : ctx.banners.grid_banner_2.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.grid_banner_3 == null ? null : ctx.banners.grid_banner_3.status) ? 7 : -1);
      }
    }, dependencies: [CommonModule, ImageLinkComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeBannerComponent, { className: "ThemeBannerComponent" });
})();

// src/app/components/home/widgets/theme-blog/theme-blog.component.ts
var _c02 = (a0) => ["/blog/", a0];
var _c12 = (a0) => ({ "background-image": a0 });
function ThemeBlogComponent_Conditional_2_ng_container_0_ng_template_1_Template(rf, ctx) {
}
function ThemeBlogComponent_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 2);
    \u0275\u0275template(1, ThemeBlogComponent_Conditional_2_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    \u0275\u0275elementContainerEnd();
  }
}
function ThemeBlogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeBlogComponent_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngForOf", ctx_r0.skeletonItems);
  }
}
function ThemeBlogComponent_Conditional_3_For_1_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 6)(2, "a", 7)(3, "div", 8);
    \u0275\u0275element(4, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 7)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h6");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c02, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", blog_r2.blog_thumbnail.original_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 7, blog_r2 == null ? null : blog_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c02, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(14, 10, "by"), ": ", blog_r2.created_by.name, "");
  }
}
function ThemeBlogComponent_Conditional_3_For_1_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 7)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "hr", 15);
    \u0275\u0275elementStart(14, "h6");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c02, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.blogEffect ? ctx_r0.blogEffect : "classic-effect");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(16, _c12, "url(" + blog_r2.blog_thumbnail.original_url + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", blog_r2.blog_thumbnail.original_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, blog_r2 == null ? null : blog_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c02, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(16, 12, "by"), ": ", blog_r2.created_by.name, " ");
  }
}
function ThemeBlogComponent_Conditional_3_For_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeBlogComponent_Conditional_3_For_1_ng_template_0_Conditional_0_Template, 15, 16, "div")(1, ThemeBlogComponent_Conditional_3_For_1_ng_template_0_Conditional_1_Template, 17, 20, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r0.type == "simple" ? 0 : 1);
  }
}
function ThemeBlogComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeBlogComponent_Conditional_3_For_1_ng_template_0_Template, 2, 1, "ng-template", 2);
  }
}
function ThemeBlogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ThemeBlogComponent_Conditional_3_For_1_Template, 1, 0, null, 2, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.blogs);
  }
}
function ThemeBlogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 16);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_blog");
  }
}
var ThemeBlogComponent = class _ThemeBlogComponent {
  constructor(blogService) {
    this.blogService = blogService;
    this.blogIds = [];
    this.option = BlogSlider;
    this.blogs = [];
    this.skeletonItems = Array.from({ length: 5 }, (_, index) => index);
    this.StorageURL = environment.storageURL;
  }
  ngOnChanges() {
    if (Array.isArray(this.blogIds)) {
      this.blog$.subscribe((blogs) => {
        this.blogs = blogs?.data.filter((blog) => this.blogIds?.includes(blog?.id));
      });
    }
  }
  static {
    this.\u0275fac = function ThemeBlogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeBlogComponent)(\u0275\u0275directiveInject(BlogService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeBlogComponent, selectors: [["app-theme-blog"]], inputs: { blogIds: "blogIds", blogEffect: "blogEffect", type: "type", option: "option" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [[1, "slide-3"], [3, "options"], ["carouselSlide", ""], [3, "class", "text"], ["carouselSlide", "", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "blog-wrap"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "blog-image"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "blog-details", "text-start", "p-0"], [3, "ngClass"], [1, "bg-size", 3, "ngStyle"], ["alt", "blog-image", 1, "img-fluid", "bg-img", 3, "src"], [1, "blog-details"], [1, "style1"], [3, "text"]], template: function ThemeBlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "owl-carousel-o", 1);
        \u0275\u0275template(2, ThemeBlogComponent_Conditional_2_Template, 1, 1, "ng-container", 2)(3, ThemeBlogComponent_Conditional_3_Template, 2, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ThemeBlogComponent_Conditional_4_Template, 1, 3, "app-no-data", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.option);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.blogService.skeletonLoader ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.blogs.length ? 4 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgStyle, DatePipe, CarouselModule, CarouselComponent, CarouselSlideDirective, RouterModule, RouterLink, TranslateModule, TranslatePipe, NoDataComponent] });
  }
};
__decorate([
  Select(BlogState.blog)
], ThemeBlogComponent.prototype, "blog$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeBlogComponent, { className: "ThemeBlogComponent" });
})();

// src/app/components/home/widgets/theme-brand/theme-brand.component.ts
var _c03 = (a0) => ["/brand", a0];
function ThemeBrandComponent_Conditional_1_For_4_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", brand_r1 == null ? null : brand_r1.brand_image == null ? null : brand_r1.brand_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function ThemeBrandComponent_Conditional_1_For_4_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(brand_r1.name);
  }
}
function ThemeBrandComponent_Conditional_1_For_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "a", 8);
    \u0275\u0275template(3, ThemeBrandComponent_Conditional_1_For_4_ng_template_0_Conditional_3_Template, 1, 1, "img", 9)(4, ThemeBrandComponent_Conditional_1_For_4_ng_template_0_Conditional_4_Template, 2, 1, "h4");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const brand_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c03, brand_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275conditional((brand_r1 == null ? null : brand_r1.brand_image == null ? null : brand_r1.brand_image.original_url) ? 3 : 4);
  }
}
function ThemeBrandComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeBrandComponent_Conditional_1_For_4_ng_template_0_Template, 5, 4, "ng-template", 6);
  }
}
function ThemeBrandComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "owl-carousel-o", 5);
    \u0275\u0275repeaterCreate(3, ThemeBrandComponent_Conditional_1_For_4_Template, 1, 0, null, 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-light", ctx_r1.bgLight);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.brands);
  }
}
function ThemeBrandComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 10);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_brand");
  }
}
var ThemeBrandComponent = class _ThemeBrandComponent {
  constructor() {
    this.bgLight = false;
    this.brands = [];
    this.options = BrandSlider;
  }
  ngOnChanges() {
    if (Array.isArray(this.brandIds)) {
      this.brand$.subscribe((brand) => {
        this.brands = brand?.data?.filter((brand2) => this.brandIds?.includes(brand2?.id));
      });
    }
  }
  static {
    this.\u0275fac = function ThemeBrandComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeBrandComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeBrandComponent, selectors: [["app-theme-brand"]], inputs: { brandIds: "brandIds", bgLight: "bgLight" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "container"], [1, "row", 3, "bg-light"], [3, "class", "text"], [1, "row"], [1, "brand-slider-box"], [3, "options"], ["carouselSlide", ""], [1, "logo-block"], ["href", "javascript:void(0)", 3, "routerLink"], ["alt", "brand-logo", 1, "img-fluid", 3, "src"], [3, "text"]], template: function ThemeBrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ThemeBrandComponent_Conditional_1_Template, 5, 3, "div", 1)(2, ThemeBrandComponent_Conditional_2_Template, 1, 3, "app-no-data", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.brands.length ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.brands.length ? 2 : -1);
      }
    }, dependencies: [CommonModule, CarouselModule, CarouselComponent, CarouselSlideDirective, RouterModule, RouterLink, NoDataComponent] });
  }
};
__decorate([
  Select(BrandState.brand)
], ThemeBrandComponent.prototype, "brand$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeBrandComponent, { className: "ThemeBrandComponent" });
})();

// src/app/components/home/widgets/theme-home-slider/theme-home-slider.component.ts
function ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "video", 14);
    \u0275\u0275element(3, "source", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.StorageURL + banner_r1.image_url, \u0275\u0275sanitizeUrl);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_0_ng_template_0_Template, 4, 1, "ng-template", 11);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image-link", 16);
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classMap("home");
    \u0275\u0275property("image", banner_r1)("bgImage", false)("placeholder", "assets/images/placeholder/banner.png");
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", 11);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_0_Template, 1, 0, null, 11)(1, ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template, 1, 0, null, 11);
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.videoType.includes(banner_r1 && banner_r1.image_url && banner_r1.image_url.substring(banner_r1.image_url.lastIndexOf(".") + 1)) ? 0 : 1);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional(banner_r1.status && banner_r1.image_url ? 0 : -1);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 10);
    \u0275\u0275repeaterCreate(1, ThemeHomeSliderComponent_Conditional_0_Conditional_0_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredBanners);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "video", 14);
    \u0275\u0275element(3, "source", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.StorageURL + ctx_r1.filteredBanners[0].image_url, \u0275\u0275sanitizeUrl);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image-link", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("home");
    \u0275\u0275property("image", ctx_r1.filteredBanners[0])("placeholder", "assets/images/placeholder/banner.png")("bgImage", false);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeHomeSliderComponent_Conditional_0_Conditional_1_Conditional_0_Template, 4, 1, "div", 12)(1, ThemeHomeSliderComponent_Conditional_0_Conditional_1_Conditional_1_Template, 1, 5, "app-image-link", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.filteredBanners.length && ctx_r1.filteredBanners[0].image_url && ctx_r1.videoType.includes(ctx_r1.filteredBanners[0].image_url.substring(ctx_r1.filteredBanners[0].image_url.lastIndexOf(".") + 1)) ? 0 : 1);
  }
}
function ThemeHomeSliderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeHomeSliderComponent_Conditional_0_Conditional_0_Template, 3, 1, "owl-carousel-o", 10)(1, ThemeHomeSliderComponent_Conditional_0_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.filteredBanners && ctx_r1.filteredBanners.length > 1 ? 0 : 1);
  }
}
var ThemeHomeSliderComponent = class _ThemeHomeSliderComponent {
  constructor() {
    this.options = homeBannerSlider;
    this.videoType = ["mp4", "webm", "ogg"];
    this.StorageURL = environment.storageURL;
  }
  ngOnChanges(change) {
    this.filteredBanners = change["banners"].currentValue?.banners?.filter((banner) => {
      return banner.status;
    });
  }
  static {
    this.\u0275fac = function ThemeHomeSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeHomeSliderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeHomeSliderComponent, selectors: [["app-theme-home-slider"]], inputs: { banners: "banners", theme: "theme" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 1, consts: [[1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [3, "options"], ["carouselSlide", ""], ["id", "block", "data-vide-options", "position: 0% 50%", 1, "slider-contain", 2, "width", "100%", "position", "relative"], [2, "position", "absolute", "z-index", "-1", "inset", "0px", "overflow", "hidden", "background-size", "cover", "background-color", "transparent", "background-repeat", "no-repeat", "background-position", "0% 50%", "background-image", "none"], ["autoplay", "", "loop", "", "muted", "", 2, "margin", "auto", "position", "absolute", "z-index", "-1", "top", "50%", "left", "0%", "transform", "translate(0%, -50%)", "visibility", "visible", "opacity", "1", "width", "1907px", "height", "auto"], ["type", "video/mp4", 3, "src"], [3, "image", "bgImage", "placeholder"], [3, "class", "image", "placeholder", "bgImage"], [3, "image", "placeholder", "bgImage"]], template: function ThemeHomeSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ThemeHomeSliderComponent_Conditional_0_Template, 2, 1);
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "p", 5)(7, "span", 6);
        \u0275\u0275element(8, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 8);
        \u0275\u0275element(10, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275element(12, "span", 7);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.banners ? 0 : -1);
      }
    }, dependencies: [CommonModule, RouterModule, CarouselModule, CarouselComponent, CarouselSlideDirective, ImageLinkComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeHomeSliderComponent, { className: "ThemeHomeSliderComponent" });
})();

// src/app/components/home/widgets/theme-parallax-banner/theme-parallax-banner.component.ts
var _c04 = (a0) => ({ "background-image": a0 });
function ThemeParallaxBannerComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.banners.button_text);
  }
}
var ThemeParallaxBannerComponent = class _ThemeParallaxBannerComponent {
  constructor() {
    this.text_right = false;
    this.StorageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function ThemeParallaxBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeParallaxBannerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeParallaxBannerComponent, selectors: [["app-theme-parallax-banner"]], inputs: { banners: "banners", class: "class", text_right: "text_right" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 11, consts: [[1, "full-banner", "parallax", "text-center", "bg-size", 3, "ngClass", "ngStyle"], ["alt", "", 1, "bg-img", 3, "src"], [1, "container"], [1, "row"], [1, "col"], [1, "banner-contain"], ["href", "javascript:void(0)", 1, "btn", "btn-solid"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"]], template: function ThemeParallaxBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h3");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h4");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, ThemeParallaxBannerComponent_Conditional_12_Template, 2, 1, "a", 6);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 7)(14, "div", 8)(15, "div", 2)(16, "div", 3)(17, "div", 9)(18, "p", 10)(19, "span", 11);
        \u0275\u0275element(20, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 13);
        \u0275\u0275element(22, "span", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 14);
        \u0275\u0275element(24, "span", 12);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class);
        \u0275\u0275property("ngClass", ctx.text_right ? "p-right" : "p-left")("ngStyle", \u0275\u0275pureFunction1(9, _c04, "url(" + ctx.StorageURL + (ctx.banners == null ? null : ctx.banners.image_url) + ")"));
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.StorageURL + (ctx.banners == null ? null : ctx.banners.image_url), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.banners == null ? null : ctx.banners.main_title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.banners == null ? null : ctx.banners.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.banners == null ? null : ctx.banners.sub_title);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.banners == null ? null : ctx.banners.button_text) ? 12 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NgStyle] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeParallaxBannerComponent, { className: "ThemeParallaxBannerComponent" });
})();

// src/app/components/home/widgets/theme-product-tab-section/theme-product-tab-section.component.ts
var _c05 = () => ({ "display": "block" });
function ThemeProductTabSectionComponent_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275listener("click", function ThemeProductTabSectionComponent_Conditional_1_For_6_Template_a_click_1_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeTab(category_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", ctx_r2.activeCategory == category_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2.name);
  }
}
function ThemeProductTabSectionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 8)(2, "h2", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul", 10);
    \u0275\u0275repeaterCreate(5, ThemeProductTabSectionComponent_Conditional_1_For_6_Template, 3, 3, "li", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.title == null ? null : ctx_r2.title.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categories);
  }
}
function ThemeProductTabSectionComponent_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275listener("click", function ThemeProductTabSectionComponent_Conditional_2_For_5_Template_a_click_1_listener() {
      const category_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeTab(category_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", ctx_r2.activeCategory == category_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r5.name);
  }
}
function ThemeProductTabSectionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "h5", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 14);
    \u0275\u0275repeaterCreate(4, ThemeProductTabSectionComponent_Conditional_2_For_5_Template, 3, 3, "li", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.title == null ? null : ctx_r2.title.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categories);
  }
}
function ThemeProductTabSectionComponent_Conditional_3_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275listener("click", function ThemeProductTabSectionComponent_Conditional_3_For_8_Template_a_click_1_listener() {
      const category_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeTab(category_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", ctx_r2.activeCategory == category_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r7.name);
  }
}
function ThemeProductTabSectionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 15)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 14);
    \u0275\u0275repeaterCreate(7, ThemeProductTabSectionComponent_Conditional_3_For_8_Template, 3, 3, "li", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.title == null ? null : ctx_r2.title.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.title == null ? null : ctx_r2.title.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.categories);
  }
}
function ThemeProductTabSectionComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275listener("click", function ThemeProductTabSectionComponent_Conditional_4_For_2_Template_a_click_1_listener() {
      const category_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeTab(category_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", ctx_r2.activeCategory == category_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r9.name);
  }
}
function ThemeProductTabSectionComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 4);
    \u0275\u0275repeaterCreate(1, ThemeProductTabSectionComponent_Conditional_4_For_2_Template, 3, 3, "li", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.tab_title_class ? ctx_r2.tab_title_class : "tab-title");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.categories);
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_1_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-product-box");
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductTabSectionComponent_Conditional_7_Conditional_1_For_2_ng_template_0_Template, 1, 0, "ng-template", 18);
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 17);
    \u0275\u0275repeaterCreate(1, ThemeProductTabSectionComponent_Conditional_7_Conditional_1_For_2_Template, 1, 0, null, 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("options", ctx_r2.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.skeletonItems);
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_0_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box", 20);
  }
  if (rf & 2) {
    const product_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r2.style);
    \u0275\u0275property("product", product_r10);
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_0_For_2_ng_template_0_Template, 1, 3, "ng-template", 18);
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 17);
    \u0275\u0275repeaterCreate(1, ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_0_For_2_Template, 1, 0, null, 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("options", ctx_r2.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 1, ctx_r2.product$));
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_product");
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_0_Template, 4, 3, "owl-carousel-o", 17);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Conditional_2_Template, 1, 3, "app-no-data", 19);
    \u0275\u0275pipe(3, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(1, 2, ctx_r2.product$)) == null ? null : tmp_2_0.length) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_3_0 = \u0275\u0275pipeBind1(3, 4, ctx_r2.product$)) == null ? null : tmp_3_0.length) ? 2 : -1);
  }
}
function ThemeProductTabSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ThemeProductTabSectionComponent_Conditional_7_Conditional_1_Template, 3, 1, "owl-carousel-o", 17)(2, ThemeProductTabSectionComponent_Conditional_7_Conditional_2_Template, 4, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(!ctx_r2.slider ? ctx_r2.class : "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.productService.skeletonCategoryProductLoader ? 1 : 2);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-product-box");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275styleMap(ctx_r2.product_box_style);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_0_For_1_Template, 1, 2, "app-skeleton-product-box", 23, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r2.skeletonItems);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "app-product-box", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r2.style);
    \u0275\u0275property("product", product_r11);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_1_For_1_Template, 3, 3, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.product$));
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_0_Template, 2, 0)(1, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Conditional_1_Template, 3, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.productService.skeletonCategoryProductLoader ? 0 : 1);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-product-box");
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_For_1_Template, 1, 0, "app-skeleton-product-box", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(ctx_r2.skeletonItems);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box", 20);
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275styleMap(ctx_r2.style);
    \u0275\u0275property("product", product_r12);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_For_1_Template, 1, 3, "app-product-box", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r2.product$));
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_0_Template, 2, 0)(1, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Conditional_1_Template, 3, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.productService.skeletonCategoryProductLoader ? 0 : 1);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_1_Template, 2, 1)(2, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Conditional_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.class);
    \u0275\u0275classProp("product-tab", ctx_r2.product_box_style == "horizontal");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.style == "horizontal" && ctx_r2.product_box_style == "horizontal" ? 1 : 2);
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 21);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_product");
  }
}
function ThemeProductTabSectionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductTabSectionComponent_Conditional_8_Conditional_0_Template, 3, 5, "div", 22)(1, ThemeProductTabSectionComponent_Conditional_8_Conditional_1_Template, 1, 3, "app-no-data", 19);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.product$ ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind1(2, 2, ctx_r2.product$)) == null ? null : tmp_2_0.length) && !ctx_r2.productService.skeletonCategoryProductLoader ? 1 : -1);
  }
}
var ThemeProductTabSectionComponent = class _ThemeProductTabSectionComponent {
  constructor(store, productService) {
    this.store = store;
    this.productService = productService;
    this.slider = false;
    this.showItems = 4;
    this.class = "row row-cols-xl-4 row-cols-md-3 row-cols-2 g-md-4 g-3";
    this.options = productSlider4;
    this.skeletonItems = Array.from({ length: this.showItems ? this.showItems : this.showItems ? this.showItems : 4 }, (_, index) => index);
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 4,
      // Display per page,
      "status": 1,
      "category_id": ""
    };
  }
  ngOnChanges() {
    this.filter["paginate"] = this.showItems;
    this.skeletonItems = Array.from({ length: this.showItems ? this.showItems : this.showItems ? this.showItems : 4 }, (_, index) => index);
    if (this.categoryIds && this.categoryIds.length) {
      this.categorySubscription = this.category$.subscribe((res) => {
        if (res) {
          this.categories = this.getCategoriesByIds(res.data, this.categoryIds);
          if (this.categories.length) {
            this.activeCategory = this.categories[0].id;
            this.filter["category_id"] = this.categories[0].id;
            if (this.filter["category_id"]) {
              this.store.dispatch(new GetCategoryProducts(this.filter));
            }
          }
        }
      });
    }
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
  changeTab(value) {
    this.activeCategory = value.id;
    this.filter["category_id"] = value.id, this.store.dispatch(new GetCategoryProducts(this.filter));
  }
  ngOnDestroy() {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function ThemeProductTabSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeProductTabSectionComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeProductTabSectionComponent, selectors: [["app-theme-product-tab-section"]], inputs: { categoryIds: "categoryIds", slider: "slider", style: "style", tab_title_class: "tab_title_class", tab_style: "tab_style", showItems: "showItems", class: "class", type: "type", title: "title", product_box_style: "product_box_style", options: "options" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[1, "theme-tab"], [1, "bg-title-part", "mt-0"], [1, "bg-title-part"], [1, "left-side"], [1, "tabs", 3, "ngClass"], [1, "tab-content-cls"], ["id", "tab-4", 1, "tab-content", "active", "default", 3, "ngStyle"], [1, "product-4", "product-m", 3, "class"], [1, "title-basic", "mb-0"], [1, "title"], [1, "tabs", "tab-title", "w-bg"], [3, "current"], ["href", "javascript:void(0)", 3, "click"], [1, "title-border"], [1, "tabs", "tab-title"], [1, "left-tab-title"], [1, "product-4", "product-m"], [3, "options"], ["carouselSlide", ""], [3, "class", "text"], [3, "product"], [3, "text"], [3, "class", "product-tab"], [3, "style"], [1, "tab-box"], [1, "product-box2"], [3, "product", "style"]], template: function ThemeProductTabSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ThemeProductTabSectionComponent_Conditional_1_Template, 7, 1, "div", 1)(2, ThemeProductTabSectionComponent_Conditional_2_Template, 6, 1, "div", 2)(3, ThemeProductTabSectionComponent_Conditional_3_Template, 9, 2, "div", 3)(4, ThemeProductTabSectionComponent_Conditional_4_Template, 3, 1, "ul", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
        \u0275\u0275template(7, ThemeProductTabSectionComponent_Conditional_7_Template, 3, 3, "div", 7)(8, ThemeProductTabSectionComponent_Conditional_8_Template, 3, 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.tab_style == "simple" ? 1 : ctx.tab_style == "classic" ? 2 : ctx.tab_style == "premium" ? 3 : 4);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(3, _c05));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.slider ? 7 : 8);
      }
    }, dependencies: [CommonModule, NgClass, NgStyle, AsyncPipe, ProductBoxComponent, CarouselModule, CarouselComponent, CarouselSlideDirective, NoDataComponent, SkeletonProductBoxComponent] });
  }
};
__decorate([
  Select(CategoryState.category)
], ThemeProductTabSectionComponent.prototype, "category$", void 0);
__decorate([
  Select(ProductState.categoryProducts)
], ThemeProductTabSectionComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeProductTabSectionComponent, { className: "ThemeProductTabSectionComponent" });
})();

// src/app/components/home/widgets/theme-product/theme-product.component.ts
function ThemeProductComponent_Conditional_0_Conditional_0_Conditional_0_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275element(4, "app-product-box", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("product", product_r1);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductComponent_Conditional_0_Conditional_0_Conditional_0_For_2_ng_template_0_Template, 5, 3, "ng-template", 2);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 0);
    \u0275\u0275repeaterCreate(1, ThemeProductComponent_Conditional_0_Conditional_0_Conditional_0_For_2_Template, 1, 0, null, 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("options", ctx_r1.horizontalSliderOption);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("text", "no_product");
  }
}
function ThemeProductComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductComponent_Conditional_0_Conditional_0_Conditional_0_Template, 3, 1, "owl-carousel-o", 0)(1, ThemeProductComponent_Conditional_0_Conditional_0_Conditional_1_Template, 1, 1, "app-no-data", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.products.length ? 0 : 1);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box", 10);
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("product", product_r3)("product_box_style", ctx_r1.product_box_style);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_0_For_1_Template, 1, 4, "app-product-box", 9, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.products);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 4)(3, "div", 13)(4, "div", 14);
    \u0275\u0275element(5, "app-product-box", 7);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("product", product_r4);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_1_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("text", "no_product");
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_1_For_2_Template, 6, 3, "div", 11, \u0275\u0275repeaterTrackByIdentity, false, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_1_ForEmpty_3_Template, 1, 1, "app-no-data", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box", 7);
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("product", product_r5);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_2_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("text", "no_product");
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_2_For_2_Template, 1, 3, "app-product-box", 15, \u0275\u0275repeaterTrackByIdentity, false, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_2_ForEmpty_3_Template, 1, 1, "app-no-data", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products);
  }
}
function ThemeProductComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_0_Template, 2, 0)(1, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_1_Template, 4, 1, "div", 8)(2, ThemeProductComponent_Conditional_0_Conditional_1_Conditional_2_Template, 4, 1, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.product_box_style == "single_product" ? 0 : ctx_r1.product_box_style == "horizontal" ? 1 : 2);
  }
}
function ThemeProductComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductComponent_Conditional_0_Conditional_0_Template, 2, 1)(1, ThemeProductComponent_Conditional_0_Conditional_1_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.slider ? 0 : 1);
  }
}
function ThemeProductComponent_Conditional_1_Conditional_0_Conditional_1_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "app-product-box", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.class);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("product", product_r6);
  }
}
function ThemeProductComponent_Conditional_1_Conditional_0_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductComponent_Conditional_1_Conditional_0_Conditional_1_For_2_ng_template_0_Template, 2, 4, "ng-template", 2);
  }
}
function ThemeProductComponent_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 0);
    \u0275\u0275repeaterCreate(1, ThemeProductComponent_Conditional_1_Conditional_0_Conditional_1_For_2_Template, 1, 0, null, 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("options", ctx_r1.options);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products);
  }
}
function ThemeProductComponent_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 1);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_product");
  }
}
function ThemeProductComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ThemeProductComponent_Conditional_1_Conditional_0_Conditional_1_Template, 3, 1, "owl-carousel-o", 0)(2, ThemeProductComponent_Conditional_1_Conditional_0_Conditional_2_Template, 1, 3, "app-no-data", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.products.length ? 1 : 2);
  }
}
function ThemeProductComponent_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-product-box", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("product", product_r7);
  }
}
function ThemeProductComponent_Conditional_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 1);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added bag-category-not-found");
    \u0275\u0275property("text", "no_product");
  }
}
function ThemeProductComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, ThemeProductComponent_Conditional_1_Conditional_1_For_2_Template, 2, 3, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ThemeProductComponent_Conditional_1_Conditional_1_Conditional_3_Template, 1, 3, "app-no-data", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.class);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.products.length ? 3 : -1);
  }
}
function ThemeProductComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeProductComponent_Conditional_1_Conditional_0_Template, 3, 1, "div", 16)(1, ThemeProductComponent_Conditional_1_Conditional_1_Template, 4, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.slider ? 0 : 1);
  }
}
var ThemeProductComponent = class _ThemeProductComponent {
  constructor(productService) {
    this.productService = productService;
    this.productIds = [];
    this.options = productSlider;
    this.products = [];
    this.horizontalSliderOption = horizontalProductSlider;
  }
  ngOnChanges() {
    if (Array.isArray(this.productIds) && this.productIds.length) {
      this.product$.subscribe((products) => {
        this.products = products.filter((product) => this.productIds?.includes(product.id));
      });
    }
  }
  static {
    this.\u0275fac = function ThemeProductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeProductComponent)(\u0275\u0275directiveInject(ProductService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeProductComponent, selectors: [["app-theme-product"]], inputs: { productIds: "productIds", style: "style", options: "options", slider: "slider", class: "class", type: "type", product_box_style: "product_box_style" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "options"], [3, "text"], ["carouselSlide", ""], [1, "theme-card", "center-align"], [1, "offer-slider"], [1, "sec-1"], [1, "product-box2"], [3, "product"], [1, "row", "g-3"], [3, "product", "style", "product_box_style"], [3, "product", "product_box_style"], [1, "col-xl-3", "col-md-6", "col-sm-12"], [1, "theme-card"], [1, ""], [1, "product-box2", "product-box"], [3, "product", "style"], [1, "product-4", "product-m"], [3, "class", "text"], [3, "ngClass"]], template: function ThemeProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ThemeProductComponent_Conditional_0_Template, 2, 1)(1, ThemeProductComponent_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.style == "horizontal" ? 0 : ctx.style == "vertical" ? 1 : -1);
      }
    }, dependencies: [CommonModule, NgClass, ProductBoxComponent, CarouselModule, CarouselComponent, CarouselSlideDirective, NoDataComponent] });
  }
};
__decorate([
  Select(ProductState.productByIds)
], ThemeProductComponent.prototype, "product$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeProductComponent, { className: "ThemeProductComponent" });
})();

// src/app/components/home/widgets/theme-title/theme-title.component.ts
function ThemeTitleComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "h4", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.tag);
  }
}
function ThemeTitleComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 17);
    \u0275\u0275element(7, "span")(8, "span");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.title.description);
  }
}
function ThemeTitleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, ThemeTitleComponent_Conditional_0_Conditional_1_Template, 3, 1);
    \u0275\u0275elementStart(2, "h2", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "h2", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ThemeTitleComponent_Conditional_0_Conditional_5_Template, 9, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("section-t-space", ctx_r0.space);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title.tag ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.class);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.title.description ? 5 : -1);
  }
}
function ThemeTitleComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "h4", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.tag);
  }
}
function ThemeTitleComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 17);
    \u0275\u0275element(7, "span")(8, "span");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.title.description);
  }
}
function ThemeTitleComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ThemeTitleComponent_Conditional_1_Conditional_1_Template, 3, 1);
    \u0275\u0275elementStart(2, "h2", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "h2", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ThemeTitleComponent_Conditional_1_Conditional_5_Template, 9, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("section-t-space", ctx_r0.space);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title.tag ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.title.description ? 5 : -1);
  }
}
function ThemeTitleComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "h2", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
  }
}
function ThemeTitleComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "h4", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.tag);
  }
}
function ThemeTitleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ThemeTitleComponent_Conditional_3_Conditional_1_Template, 3, 1);
    \u0275\u0275elementStart(2, "h2", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "h2", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title.tag ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
  }
}
function ThemeTitleComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "h4", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.tag);
  }
}
function ThemeTitleComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ThemeTitleComponent_Conditional_4_Conditional_1_Template, 3, 1);
    \u0275\u0275elementStart(2, "h2", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "h2", 25);
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275element(6, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title.tag ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
  }
}
function ThemeTitleComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
  }
}
function ThemeTitleComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275element(4, "span")(5, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.description);
  }
}
function ThemeTitleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "h4", 12);
    \u0275\u0275elementStart(4, "h2", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "h2", 30)(7, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ThemeTitleComponent_Conditional_6_Conditional_8_Template, 6, 1, "div", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.tag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.title.description ? 8 : -1);
  }
}
function ThemeTitleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "h2", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("section-t-space", ctx_r0.space);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-white", ctx_r0.textWhite);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.title);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-white", ctx_r0.textWhite);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.description);
  }
}
function ThemeTitleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h2", 34);
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "h2", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title.title, " ");
  }
}
function ThemeTitleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.sub_title);
  }
}
function ThemeTitleComponent_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.title.description);
  }
}
function ThemeTitleComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "h4", 12);
    \u0275\u0275elementStart(4, "h2", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "h2", 10)(7, "hr", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ThemeTitleComponent_Conditional_10_Conditional_8_Template, 6, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title.tag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.title.title);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.title.description ? 8 : -1);
  }
}
function ThemeTitleComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.getTitle(ctx_r0.title.title || ""), \u0275\u0275sanitizeHtml);
  }
}
function ThemeTitleComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title.title);
  }
}
var ThemeTitleComponent = class _ThemeTitleComponent {
  constructor() {
    this.textWhite = false;
    this.space = true;
  }
  getTitle(value) {
    const text = value.split(" ");
    const firstWord = text.slice(0, 3).join(" ");
    const remainingWord = text.slice(3).join(" ");
    return `<h4>${firstWord} <span class="gradient-text">${remainingWord}</span></h4>`;
  }
  static {
    this.\u0275fac = function ThemeTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeTitleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeTitleComponent, selectors: [["app-theme-title"]], inputs: { title: "title", type: "type", textWhite: "textWhite", space: "space", class: "class" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 1, consts: [[1, "title2", "text-start"], [1, "title2"], [1, "title4"], [1, "title1", "wo-border", "section-t-space"], [1, "title-basic"], [1, "title8"], [1, "title1", "title7"], [1, "title-borderless"], [1, "title1"], [1, "title-inner1", 3, "ngClass"], [1, "skeleton-text-h2", "title-inner1"], [1, "container"], [1, "skeleton-text-h4"], [1, "row"], [1, "col-lg-6", "offset-lg-3"], [1, "product-para"], [1, "text-center"], [1, "skeleton-text-p"], [1, "title1", "wo-border"], [1, "title-inner1", "font-cormorant"], [1, "title-inner2", "p-0"], [1, "skeleton-text-h2", "title-inner2", "p-0"], [1, "title-inner2"], [1, "skeleton-text-h2", "title-inner1", "mx-auto"], [1, "title-inner4"], [1, "skeleton-text-h2", "title-inner4", "mx-auto"], [1, "line"], [1, "title-inner1", "font-courgette"], [1, "title3"], [1, "title-inner3"], [1, "skeleton-text-h2", "title-inner3", "mx-auto"], [1, "about-text"], [1, "title6"], [1, "font-fraunces"], [1, "title", "font-fraunces"], [1, "ri-flashlight-line"], [1, "skeleton-text-h2", "title", "font-fraunces"], [1, "title1", "title5"], [1, "title-inner1"], ["role", "tournament6"], [3, "innerHTML"]], template: function ThemeTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ThemeTitleComponent_Conditional_0_Template, 6, 6)(1, ThemeTitleComponent_Conditional_1_Template, 6, 5)(2, ThemeTitleComponent_Conditional_2_Template, 4, 1, "div", 0)(3, ThemeTitleComponent_Conditional_3_Template, 5, 2, "div", 1)(4, ThemeTitleComponent_Conditional_4_Template, 7, 2, "div", 2)(5, ThemeTitleComponent_Conditional_5_Template, 5, 2, "div", 3)(6, ThemeTitleComponent_Conditional_6_Template, 9, 3)(7, ThemeTitleComponent_Conditional_7_Template, 9, 8)(8, ThemeTitleComponent_Conditional_8_Template, 5, 1, "div", 4)(9, ThemeTitleComponent_Conditional_9_Template, 5, 2, "div", 5)(10, ThemeTitleComponent_Conditional_10_Template, 9, 3)(11, ThemeTitleComponent_Conditional_11_Template, 2, 1, "div", 6)(12, ThemeTitleComponent_Conditional_12_Template, 2, 1, "h2", 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.type == "basic" ? 0 : ctx.type == "simple" ? 1 : ctx.type == "classic" ? 2 : ctx.type == "standard" ? 3 : ctx.type == "premium" ? 4 : ctx.type == "digital" ? 5 : ctx.type == "luxury" ? 6 : ctx.type == "fraunces" ? 7 : ctx.type == "icon" ? 8 : ctx.type == "vegetable" ? 9 : ctx.type == "jewellery" ? 10 : ctx.type == "single_product" ? 11 : ctx.type == "borderless" ? 12 : -1);
      }
    }, dependencies: [CommonModule, NgClass] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeTitleComponent, { className: "ThemeTitleComponent" });
})();

// src/app/components/home/widgets/theme-social-media/theme-social-media.component.ts
var _c06 = (a0) => ({ "background-image": a0 });
function ThemeSocialMediaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.media)("type", ctx_r0.type);
  }
}
function ThemeSocialMediaComponent_For_7_Conditional_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 8)(2, "div", 9);
    \u0275\u0275element(3, "img", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275element(5, "i", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const media_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", media_r2.redirect_link.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c06, "url(" + ctx_r0.StorageURL + media_r2.image_url + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.StorageURL + media_r2.image_url, \u0275\u0275sanitizeUrl);
  }
}
function ThemeSocialMediaComponent_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeSocialMediaComponent_For_7_Conditional_0_ng_template_0_Template, 6, 5, "ng-template", 7);
  }
}
function ThemeSocialMediaComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ThemeSocialMediaComponent_For_7_Conditional_0_Template, 1, 0, null, 7);
  }
  if (rf & 2) {
    const media_r2 = ctx.$implicit;
    \u0275\u0275conditional(media_r2.status ? 0 : -1);
  }
}
function ThemeSocialMediaComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 13);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_media");
  }
}
var ThemeSocialMediaComponent = class _ThemeSocialMediaComponent {
  constructor() {
    this.options = SocialMediaSlider;
    this.StorageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function ThemeSocialMediaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeSocialMediaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeSocialMediaComponent, selectors: [["app-theme-social-media"]], inputs: { media: "media", title: "title", options: "options", class: "class", type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [[3, "ngClass"], [1, "row", "m-0"], [1, "col-md-12", "p-0"], [3, "title", "type"], [1, "slide-7"], [3, "options"], [3, "class", "text"], ["carouselSlide", ""], ["tabindex", "0", "target", "_blank", 3, "href"], [1, "instagram-box", "bg-size", 3, "ngStyle"], ["alt", "img", 1, "bg-img", 3, "src"], [1, "overlay"], [1, "ri-instagram-line"], [3, "text"]], template: function ThemeSocialMediaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, ThemeSocialMediaComponent_Conditional_3_Template, 1, 2, "app-theme-title", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "owl-carousel-o", 5);
        \u0275\u0275repeaterCreate(6, ThemeSocialMediaComponent_For_7_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(8, ThemeSocialMediaComponent_Conditional_8_Template, 1, 3, "app-no-data", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.class ? ctx.class : "container-fluid p-0");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.type ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("options", ctx.options);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.media.banners);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!(ctx.media.banners == null ? null : ctx.media.banners.length) ? 8 : -1);
      }
    }, dependencies: [CommonModule, NgClass, NgStyle, CarouselModule, CarouselComponent, CarouselSlideDirective, ThemeTitleComponent, NoDataComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeSocialMediaComponent, { className: "ThemeSocialMediaComponent" });
})();

// src/app/components/home/bag/bag.component.ts
var _c07 = () => [];
var _c13 = (a0) => ({ "even": a0 });
var _c22 = (a0) => ({ "background-image": a0 });
function BagComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 5);
    \u0275\u0275element(2, "app-theme-title", 12)(3, "app-theme-product-tab-section", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("slider", true);
  }
}
function BagComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 14);
    \u0275\u0275element(2, "app-categories", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("border-section", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.status);
    \u0275\u0275advance();
    \u0275\u0275styleMap("bag");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category == null ? null : ctx_r0.data.content.category.category_ids) || \u0275\u0275pureFunction0(5, _c07));
  }
}
function BagComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "app-image-link", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function BagComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 20)(2, "h5", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275element(5, "app-theme-product", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_content == null ? null : ctx_r0.data.content.product_banner.center_content.status) ? "col-lg-4" : "col-lg-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.left_content == null ? null : ctx_r0.data.content.product_banner.left_content.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.left_content == null ? null : ctx_r0.data.content.product_banner.left_content.product_ids) || \u0275\u0275pureFunction0(5, _c07));
  }
}
function BagComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div");
    \u0275\u0275element(2, "app-theme-title", 12)(3, "app-theme-product", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_content)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_content == null ? null : ctx_r0.data.content.product_banner.center_content.product_ids) || \u0275\u0275pureFunction0(7, _c07))("slider", true)("options", ctx_r0.options);
  }
}
function BagComponent_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 20)(2, "h5", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275element(5, "app-theme-product", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_content == null ? null : ctx_r0.data.content.product_banner.center_content.status) ? "col-lg-4" : "col-lg-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.right_content == null ? null : ctx_r0.data.content.product_banner.right_content.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.right_content == null ? null : ctx_r0.data.content.product_banner.right_content.product_ids) || \u0275\u0275pureFunction0(5, _c07));
  }
}
function BagComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 5)(2, "div", 17);
    \u0275\u0275template(3, BagComponent_Conditional_6_Conditional_3_Template, 6, 6, "div", 18)(4, BagComponent_Conditional_6_Conditional_4_Template, 4, 8, "div", 19)(5, BagComponent_Conditional_6_Conditional_5_Template, 6, 6, "div", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.left_content == null ? null : ctx_r0.data.content.product_banner.left_content.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_content == null ? null : ctx_r0.data.content.product_banner.center_content.status) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.right_content == null ? null : ctx_r0.data.content.product_banner.right_content.status) ? 5 : -1);
  }
}
function BagComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "section", 25);
    \u0275\u0275element(2, "app-theme-services", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners)("type", "simple");
  }
}
function BagComponent_For_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const banner_r3 = ctx_r1.$implicit;
    const \u0275$index_81_r4 = ctx_r1.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c13, \u0275$index_81_r4 % 2 != 0))("ngStyle", \u0275\u0275pureFunction1(5, _c22, "url(" + ctx_r0.StorageURL + banner_r3.image_url + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.StorageURL + banner_r3.image_url, \u0275\u0275sanitizeUrl);
  }
}
function BagComponent_For_12_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(banner_r3.offer);
  }
}
function BagComponent_For_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div")(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 30)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, BagComponent_For_12_Conditional_2_Conditional_7_Template, 2, 1, "a", 31);
    \u0275\u0275element(8, "app-button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const banner_r3 = ctx_r1.$implicit;
    const \u0275$index_81_r4 = ctx_r1.$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c13, \u0275$index_81_r4 % 2 != 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(banner_r3.tag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(banner_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(banner_r3.offer ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("bag-category-btn");
    \u0275\u0275property("data", banner_r3)("type", "button_link");
  }
}
function BagComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, BagComponent_For_12_Conditional_1_Template, 2, 7, "a", 27)(2, BagComponent_For_12_Conditional_2_Template, 9, 10, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(banner_r3.image_url ? 1 : 2);
  }
}
function BagComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "section", 33)(2, "div", 34)(3, "div", 35);
    \u0275\u0275element(4, "app-theme-title", 12)(5, "app-theme-product", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c07))("slider", true);
  }
}
function BagComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 5)(2, "div", 34)(3, "div", 37);
    \u0275\u0275element(4, "app-theme-title", 12)(5, "app-theme-blog", 38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c07));
  }
}
function BagComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-social-media", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(2, _c07))("type", "borderless");
  }
}
function BagComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275element(1, "app-theme-brand", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c07));
  }
}
var BagComponent = class _BagComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = bagsProduct;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      let categoryIds = [...new Set(this.data?.content?.category?.category_ids.concat(this.data.content.category_product.category_ids))];
      let getProduct$;
      if (this.data?.content?.products_ids.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds.length && (this.data?.content?.category_product?.status || this.data?.content?.category?.status)) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function BagComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BagComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BagComponent, selectors: [["app-bag"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 17, vars: 10, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "section-b-space"], [1, "container", "category-button"], [1, "container"], [1, "category-bg", "ratio_square"], [1, "container-fluid", "p-0"], [1, "row", "order-section"], [1, "col-sm-4", "p-0"], [1, "blog", "ratio3_2"], [1, "instagram", "ratio_square"], [3, "title", "type"], [3, "categoryIds", "slider"], [1, "section-b-space", "border-bottom-0"], [3, "categoryIds"], [3, "image", "placeholder", "bgImage"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [1, "col-lg-4", "center-slider", "border-0"], [1, "theme-card", "card-border"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"], [3, "productIds", "slider", "options"], [1, "service", "wo-box", "section-b-space"], [3, "services", "type"], ["href", "javascript:void(0)", 1, "image-block", "bg-size", 3, "ngClass", "ngStyle"], [1, "contain-block", 3, "ngClass"], ["alt", "banner", 3, "src"], ["href", "javascript:void(0)"], ["href", "javascript:void(0)", 1, "btn", "btn-solid", "category-btn"], [3, "data", "type"], [1, "section-b-space", "border-section", "border-top-0"], [1, "row"], [1, "col"], [3, "productIds", "slider"], [1, "col-md-12"], [3, "blogIds"], [3, "media", "type"], [3, "brandIds"]], template: function BagComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, BagComponent_Conditional_3_Template, 4, 6, "section", 3)(4, BagComponent_Conditional_4_Template, 3, 6, "div", 4)(5, BagComponent_Conditional_5_Template, 2, 3, "section", 0)(6, BagComponent_Conditional_6_Template, 6, 3, "section")(7, BagComponent_Conditional_7_Template, 3, 2, "div", 5);
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
        \u0275\u0275repeaterCreate(11, BagComponent_For_12_Template, 3, 1, "div", 9, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(13, BagComponent_Conditional_13_Template, 6, 7, "div", 5)(14, BagComponent_Conditional_14_Template, 6, 4, "section", 10)(15, BagComponent_Conditional_15_Template, 2, 3, "section", 11)(16, BagComponent_Conditional_16_Template, 2, 2, "section", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category == null ? null : ctx.data.content.category.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner == null ? null : ctx.data.content.product_banner.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 7 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.grid_banner == null ? null : ctx.data.content.grid_banner.banners);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 16 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      CarouselModule,
      TranslateModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeProductComponent,
      ThemeServicesComponent,
      ImageLinkComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      CategoriesComponent,
      ButtonComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BagComponent, { className: "BagComponent" });
})();

// src/app/components/home/beauty/beauty.component.ts
var _c08 = () => [];
function BeautyComponent_Conditional_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-theme-services", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_us == null ? null : ctx_r0.data.content.about_us.services == null ? null : ctx_r0.data.content.about_us.services.banners)("type", "simple");
  }
}
function BeautyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275element(4, "img", 11)(5, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "div")(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 16);
    \u0275\u0275element(15, "span")(16, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BeautyComponent_Conditional_3_Conditional_17_Template, 2, 2, "div", 17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pb-0", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.status));
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_us == null ? null : ctx_r0.data.content.about_us.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_us == null ? null : ctx_r0.data.content.about_us.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_us == null ? null : ctx_r0.data.content.about_us.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_us == null ? null : ctx_r0.data.content.about_us.description);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_us == null ? null : ctx_r0.data.content.about_us.services) ? 17 : -1);
  }
}
function BeautyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 19);
    \u0275\u0275elementStart(1, "section", 20)(2, "div", 8);
    \u0275\u0275element(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "basic")("space", false);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(8, _c08))("slider", true)("options", ctx_r0.productSlider5);
  }
}
function BeautyComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function BeautyComponent_Conditional_5_Conditional_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal(ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video == null ? null : ctx_r0.data.content.product_video.video_url) || "", "video"));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275element(2, "i", 28);
    \u0275\u0275elementEnd()();
  }
}
function BeautyComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "app-theme-title", 22);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "div", 23)(5, "a", 24)(6, "div", 25);
    \u0275\u0275element(7, "img", 11);
    \u0275\u0275template(8, BeautyComponent_Conditional_5_Conditional_8_Template, 3, 0, "div", 26);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video)("type", "basic");
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video == null ? null : ctx_r0.data.content.product_video.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video == null ? null : ctx_r0.data.content.product_video.title);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video == null ? null : ctx_r0.data.content.product_video.video_url) ? 8 : -1);
  }
}
function BeautyComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 19);
    \u0275\u0275elementStart(1, "section", 20)(2, "div", 8);
    \u0275\u0275element(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2)("type", "basic")("space", false);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(8, _c08))("slider", true)("options", ctx_r0.productSlider5);
  }
}
function BeautyComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-theme-title", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 29)(3, "div", 8)(4, "div", 9)(5, "div", 30);
    \u0275\u0275element(6, "app-theme-blog", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance();
    \u0275\u0275classProp("section-b-space", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media == null ? null : ctx_r0.data.content.social_media.status));
    \u0275\u0275advance(4);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(5, _c08));
  }
}
function BeautyComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275element(1, "app-theme-social-media", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c08))("type", "borderless");
  }
}
function BeautyComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6);
    \u0275\u0275element(1, "app-theme-brand", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c08));
  }
}
var BeautyComponent = class _BeautyComponent {
  constructor(store, modal, platformId, themeOptionService) {
    this.store = store;
    this.modal = modal;
    this.themeOptionService = themeOptionService;
    this.productSlider5 = productSlider5;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids.length && (this.data?.content?.products_list_1?.status || this.data?.content?.products_list_2?.status)) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  openModal(url, type) {
    const modal = this.modal.open(VideoModalComponent, { centered: true, size: "lg", windowClass: "theme-modal-2" });
    modal.componentInstance.video_url = url;
    modal.componentInstance.type = type;
  }
  static {
    this.\u0275fac = function BeautyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BeautyComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BeautyComponent, selectors: [["app-beauty"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "section-b-space", "beauty-about", 3, "pb-0"], [1, "video-section", "section-b-space", "pt-0"], [1, "instagram", "section-b-space", "ratio_square"], [1, "section-b-space"], [1, "section-b-space", "beauty-about"], [1, "container"], [1, "row"], [1, "col-xl-5", "col-lg-6", "col-md-12", "offset-xl-1", "text-center", "position-relative"], [1, "img-fluid", "lazyload", 3, "src", "alt"], [1, "skeleton-loader-img"], [1, "col-xl-5", "col-lg-6", "col-md-12"], [1, "about-section"], [1, "about-text"], [1, "skeleton-text-p"], [1, "service", "small-section", "pb-0"], [3, "services", "type"], [3, "title", "type", "space"], [1, "pt-0"], [3, "productIds", "slider", "options"], [3, "title", "type"], [1, "col-md-8", "offset-md-2"], ["href", "javascript:void(0)"], [1, "video-img"], [1, "play-btn"], [1, "play-btn", 3, "click"], [1, "ri-play-fill"], [1, "blog", "pt-0", "ratio3_2"], [1, "col-md-12"], [3, "blogIds"], [3, "media", "type"], [3, "brandIds"]], template: function BeautyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, BeautyComponent_Conditional_3_Template, 18, 7, "section", 3)(4, BeautyComponent_Conditional_4_Template, 4, 9)(5, BeautyComponent_Conditional_5_Template, 9, 5, "section", 4)(6, BeautyComponent_Conditional_6_Template, 4, 9)(7, BeautyComponent_Conditional_7_Template, 7, 6)(8, BeautyComponent_Conditional_8_Template, 2, 5, "section", 5)(9, BeautyComponent_Conditional_9_Template, 2, 2, "section", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.about_us == null ? null : ctx.data.content.about_us.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_video == null ? null : ctx.data.content.product_video.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BeautyComponent, { className: "BeautyComponent" });
})();

// src/app/components/home/bicycle/bicycle.component.ts
var _c09 = () => [];
function BicycleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 9);
    \u0275\u0275element(2, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-theme-title", 11);
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275element(5, "app-theme-product", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(8, _c09))("options", ctx_r0.options);
  }
}
function BicycleComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "img", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.image_url), \u0275\u0275sanitizeUrl);
  }
}
function BicycleComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 12);
    \u0275\u0275element(2, "app-theme-title", 16)(3, "app-theme-product-tab-section", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pt-1", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic")("space", false);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids);
  }
}
function BicycleComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? "col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("bgImage", true);
  }
}
function BicycleComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? "col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("bgImage", true);
  }
}
function BicycleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 18)(2, "div", 19);
    \u0275\u0275template(3, BicycleComponent_Conditional_6_Conditional_3_Template, 2, 5, "div", 20)(4, BicycleComponent_Conditional_6_Conditional_4_Template, 2, 5, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? 4 : -1);
  }
}
function BicycleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-social-media", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c09))("type", "borderless");
  }
}
function BicycleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-brand", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c09));
  }
}
var BicycleComponent = class _BicycleComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        center: true,
        nav: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
          0: {
            items: 1
          },
          992: {
            items: 3
          }
        }
      });
      let getProduct$;
      if (this.data?.content?.products_ids && this.data?.content?.products_list?.status) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids.length && this.data?.content?.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function BicycleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BicycleComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BicycleComponent, selectors: [["app-bicycle"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 7, consts: [[1, "p-0", "position-relative", "height-85"], [1, "home-slider"], [3, "banners"], [1, "section-b-space", "pt-0", "position-relative", "overflow-hidden"], [1, "p-0", "overflow-cls"], [1, "ratio2_3", 3, "pt-1"], [1, "pb-0", "ratio2_1", "banner-section"], [1, "instagram", "ratio_square"], [1, "section-b-space", "blog-wo-bg"], [1, "animated-wheel", "d-md-block", "d-none"], ["src", "assets/images/bicycle/wheel.png", "alt", "wheel", 1, "img-fluid"], [3, "title", "type"], [1, "container"], [3, "productIds", "options"], ["alt", "banner", 1, "img-fluid", "w-100", 3, "src"], [1, "ratio2_3"], [3, "title", "type", "space"], [3, "categoryIds"], [1, "container-fluid"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [3, "image", "bgImage"], [3, "media", "type"], [3, "brandIds"]], template: function BicycleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, BicycleComponent_Conditional_3_Template, 6, 9, "section", 3)(4, BicycleComponent_Conditional_4_Template, 2, 1, "section", 4)(5, BicycleComponent_Conditional_5_Template, 4, 8, "section", 5)(6, BicycleComponent_Conditional_6_Template, 5, 2, "section", 6)(7, BicycleComponent_Conditional_7_Template, 2, 5, "section", 7)(8, BicycleComponent_Conditional_8_Template, 2, 2, "section", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) || (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 8 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BicycleComponent, { className: "BicycleComponent" });
})();

// src/app/components/home/widgets/theme-four-column-product/theme-four-column-product.component.ts
var _c010 = () => [];
function ThemeFourColumnProductComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4)(2, "h5", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "app-theme-product", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", !(ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.status) ? "col-lg-4 col-sm-6" : "col-xl-3 col-md-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_1 == null ? null : ctx_r0.data.product_slider_1.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.style);
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_1 == null ? null : ctx_r0.data.product_slider_1.product_ids) || \u0275\u0275pureFunction0(5, _c010));
  }
}
function ThemeFourColumnProductComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4)(2, "h5", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "app-theme-product", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", !(ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.status) ? "col-lg-4 col-sm-6" : "col-xl-3 col-md-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_2 == null ? null : ctx_r0.data.product_slider_2.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.style);
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_2 == null ? null : ctx_r0.data.product_slider_2.product_ids) || \u0275\u0275pureFunction0(5, _c010));
  }
}
function ThemeFourColumnProductComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4)(2, "h5", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "app-theme-product", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", !(ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.status) ? "col-lg-4 col-sm-6" : "col-xl-3 col-md-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_3 == null ? null : ctx_r0.data.product_slider_3.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.style);
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_3 == null ? null : ctx_r0.data.product_slider_3.product_ids) || \u0275\u0275pureFunction0(5, _c010));
  }
}
function ThemeFourColumnProductComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4)(2, "h5", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275element(5, "app-theme-product", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx_r0.style);
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.product_slider_4 == null ? null : ctx_r0.data.product_slider_4.product_ids) || \u0275\u0275pureFunction0(4, _c010));
  }
}
function ThemeFourColumnProductComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("text", "no_product");
  }
}
var ThemeFourColumnProductComponent = class _ThemeFourColumnProductComponent {
  static {
    this.\u0275fac = function ThemeFourColumnProductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeFourColumnProductComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeFourColumnProductComponent, selectors: [["app-theme-four-column-product"]], inputs: { data: "data", style: "style" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 5, consts: [[1, "row", "g-4"], [3, "ngClass"], [1, "col-xl-3", "col-md-6"], [3, "text"], [1, "theme-card"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"]], template: function ThemeFourColumnProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ThemeFourColumnProductComponent_Conditional_1_Template, 6, 6, "div", 1)(2, ThemeFourColumnProductComponent_Conditional_2_Template, 6, 6, "div", 1)(3, ThemeFourColumnProductComponent_Conditional_3_Template, 6, 6, "div", 1)(4, ThemeFourColumnProductComponent_Conditional_4_Template, 6, 5, "div", 2)(5, ThemeFourColumnProductComponent_Conditional_5_Template, 1, 1, "app-no-data", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.product_slider_1 == null ? null : ctx.data.product_slider_1.status) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.status) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.product_slider_3 == null ? null : ctx.data.product_slider_3.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.product_slider_4 == null ? null : ctx.data.product_slider_4.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!((ctx.data == null ? null : ctx.data.product_slider_1 == null ? null : ctx.data.product_slider_1.product_ids == null ? null : ctx.data.product_slider_1.product_ids.length) && (ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.product_ids == null ? null : ctx.data.product_slider_2.product_ids.length) && (ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.product_ids == null ? null : ctx.data.product_slider_2.product_ids.length) && (ctx.data == null ? null : ctx.data.product_slider_2 == null ? null : ctx.data.product_slider_2.product_ids == null ? null : ctx.data.product_slider_2.product_ids.length)) ? 5 : -1);
      }
    }, dependencies: [CommonModule, NgClass, ThemeProductComponent, NoDataComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeFourColumnProductComponent, { className: "ThemeFourColumnProductComponent" });
})();

// src/app/components/home/books/books.component.ts
var _c011 = () => [];
var _c14 = (a0) => ({ "background-image": a0 });
function BooksComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 8)(2, "div", 14);
    \u0275\u0275element(3, "app-categories", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("books");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_1 == null ? null : ctx_r0.data.content.categories_1.category_ids) || \u0275\u0275pureFunction0(3, _c011));
  }
}
function BooksComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 8);
    \u0275\u0275element(2, "app-theme-title", 16)(3, "app-theme-product-tab-section", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("slider", false)("showItems", 5);
  }
}
function BooksComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "section", 18);
    \u0275\u0275element(2, "app-categories", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("bag");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_2 == null ? null : ctx_r0.data.content.categories_2.category_ids) || \u0275\u0275pureFunction0(4, _c011))("slider", true);
  }
}
function BooksComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 20)(2, "div", 8);
    \u0275\u0275element(3, "app-theme-title", 16)(4, "app-theme-four-column-product", 21)(5, "div", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c14, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products == null ? null : ctx_r0.data.content.slider_products.image_url) + ")"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function BooksComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? "col-md-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("bgImage", true);
  }
}
function BooksComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? "col-md-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("bgImage", true);
  }
}
function BooksComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 8);
    \u0275\u0275element(2, "app-theme-title", 16)(3, "app-theme-product", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c011))("slider", true);
  }
}
function BooksComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "div", 25)(2, "div", 26)(3, "div", 27);
    \u0275\u0275element(4, "app-theme-title", 16)(5, "app-theme-blog", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "standard");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c011));
  }
}
function BooksComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "app-theme-brand", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c011));
  }
}
var BooksComponent = class _BooksComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let categoryIds = [...new Set(this.data?.content?.categories_1?.category_ids.concat(this.data.content.category_product.category_ids, this.data?.content?.categories_2?.category_ids))];
      let getProducts$;
      if (this.data?.content?.products_ids?.length && (this.data?.content?.products_list?.status || this.data?.content?.slider_products?.status)) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (categoryIds.length && (this.data?.content?.category_product?.status || this.data?.content?.categories_1?.category_ids || this.data?.content?.categories_2?.category_ids)) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
    if (this.platformId) {
      document.body.classList.add("header-style-light");
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("header-style-light");
    }
  }
  static {
    this.\u0275fac = function BooksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BooksComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BooksComponent, selectors: [["app-books"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 10, consts: [[1, "p-0", "layout-7"], [1, "home-slider"], [3, "banners"], [1, "vector-category"], [1, "tools_product", "section-b-space"], [1, "container", "category-button"], [1, "card-white-bg", "bg-size", 3, "ngStyle"], [1, "pb-0", "ratio2_1", "banner-section"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "section-b-space", "tools_product", "ratio_asos"], [1, "blog", "ratio3_2", "pt-0", "section-b-space"], [1, "section-b-space"], [1, "vector-slide-8", "category-slide", "ratio_square"], [3, "categoryIds"], [3, "title", "type"], [3, "categoryIds", "slider", "showItems"], [1, "section-b-space", "border-section", "border-bottom-0"], [3, "categoryIds", "slider"], [1, "ratio_square"], [3, "data"], [1, "row"], [3, "image", "bgImage"], [3, "productIds", "slider"], [1, "container", "border-section", "border-bottom-0"], [1, "row", "section-t-space"], [1, "col-md-12"], [3, "blogIds"], [3, "brandIds"]], template: function BooksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, BooksComponent_Conditional_3_Template, 4, 4, "section", 3)(4, BooksComponent_Conditional_4_Template, 4, 9, "section", 4)(5, BooksComponent_Conditional_5_Template, 3, 5, "div", 5)(6, BooksComponent_Conditional_6_Template, 6, 8, "section", 6);
        \u0275\u0275elementStart(7, "section", 7)(8, "div", 8)(9, "div", 9);
        \u0275\u0275template(10, BooksComponent_Conditional_10_Template, 2, 5, "div", 10)(11, BooksComponent_Conditional_11_Template, 2, 5, "div", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, BooksComponent_Conditional_12_Template, 4, 7, "section", 11)(13, BooksComponent_Conditional_13_Template, 6, 4, "section", 12)(14, BooksComponent_Conditional_14_Template, 2, 2, "section", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_1 == null ? null : ctx.data.content.categories_1.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_2 == null ? null : ctx.data.content.categories_2.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status) ? 6 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 14 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgStyle,
      ThemeHomeSliderComponent,
      CategoriesComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeFourColumnProductComponent,
      ImageLinkComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BooksComponent, { className: "BooksComponent" });
})();

// src/app/components/home/christmas/christmas.component.ts
var _c012 = () => [];
function ChristmasComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 15);
    \u0275\u0275element(2, "app-image-link", 16);
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18)(5, "p", 19)(6, "span", 20);
    \u0275\u0275element(7, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275element(9, "span", 21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2.status) ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1)("bgImage", true);
  }
}
function ChristmasComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 15);
    \u0275\u0275element(2, "app-image-link", 16);
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18)(5, "p", 19)(6, "span", 20);
    \u0275\u0275element(7, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275element(9, "span", 21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1.status) ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2)("bgImage", true);
  }
}
function ChristmasComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 23);
    \u0275\u0275elementStart(1, "section", 24)(2, "div", 4);
    \u0275\u0275element(3, "app-theme-product", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c012))("slider", true);
  }
}
function ChristmasComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 23);
    \u0275\u0275elementStart(1, "section", 26)(2, "div", 4);
    \u0275\u0275element(3, "app-theme-product-tab-section", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_1)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_1 == null ? null : ctx_r0.data.content.category_product_1.category_ids)("slider", true);
  }
}
function ChristmasComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-image-link", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_3);
  }
}
function ChristmasComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 23);
    \u0275\u0275elementStart(1, "section", 28)(2, "div", 4);
    \u0275\u0275element(3, "app-theme-product-tab-section", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_2)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_2 == null ? null : ctx_r0.data.content.category_product_2.category_ids)("slider", true);
  }
}
function ChristmasComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "div", 4);
    \u0275\u0275element(2, "app-theme-title", 29)(3, "app-theme-blog", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic")("space", false);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(5, _c012))("type", "simple");
  }
}
function ChristmasComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-theme-social-media", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c012))("type", "borderless");
  }
}
function ChristmasComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 34);
    \u0275\u0275element(2, "img", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-theme-brand", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c012));
  }
}
var ChristmasComponent = class _ChristmasComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getCategory$;
      if ((this.data?.content.category_product_1?.category_ids?.length || this.data?.content.category_product_2?.category_ids?.length) && (this.data?.content.category_product_1?.status || this.data?.content.category_product_2?.status)) {
        const categories_ids = this.data?.content.category_product_1?.category_ids?.concat(this.data?.content.category_product_2?.category_ids);
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categories_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("christmas");
        forkJoin([getProducts$, getCategory$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("christmas");
    }
  }
  static {
    this.\u0275fac = function ChristmasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChristmasComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChristmasComponent, selectors: [["app-christmas"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 11, consts: [[1, "p-0", "snow-slider"], [1, "home-slider"], [3, "banners"], [1, "pb-0", "ratio_45"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "p-0", "overflow-cls"], [1, "full-banner", "py-0", "text-center", "p-center"], [3, "image"], [1, "decor"], ["src", "assets/images/christmas/parall.png", "alt", "christmas-parall", 1, "img-fluid"], [1, "blog-section", "grey-bg", "section-b-space", "ratio2_3"], [1, "instagram", "ratio_square"], [1, "section-b-space", "logo-section", "blog-wo-bg"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "section-b-space", "pt-0"], [3, "productIds", "slider"], [1, "section-b-space", "product-christmas", "pt-0"], [3, "categoryIds", "slider"], [1, "section-b-space", "pt-0", "product-christmas"], [3, "title", "type", "space"], [3, "blogIds", "type"], [1, "insta-decor"], ["src", "assets/images/christmas/insta.png", "alt", "insta-decor", 1, "img-fluid"], [3, "media", "type"], [1, "logo-decor"], ["src", "assets/images/christmas/footer-decor.png", "alt", "footer-decor", 1, "img-fluid"], [3, "brandIds"]], template: function ChristmasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275template(6, ChristmasComponent_Conditional_6_Template, 10, 5, "div", 6)(7, ChristmasComponent_Conditional_7_Template, 10, 5, "div", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, ChristmasComponent_Conditional_8_Template, 4, 7);
        \u0275\u0275elementStart(9, "section", 7)(10, "div", 8);
        \u0275\u0275element(11, "app-image-link", 9);
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275element(13, "img", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(14, ChristmasComponent_Conditional_14_Template, 4, 6)(15, ChristmasComponent_Conditional_15_Template, 2, 1, "section", 7)(16, ChristmasComponent_Conditional_16_Template, 4, 6)(17, ChristmasComponent_Conditional_17_Template, 4, 6, "section", 12)(18, ChristmasComponent_Conditional_18_Template, 4, 5, "section", 13)(19, ChristmasComponent_Conditional_19_Template, 4, 2, "section", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_1 == null ? null : ctx.data.content.offer_banner_1.banner_1 == null ? null : ctx.data.content.offer_banner_1.banner_1.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_1 == null ? null : ctx.data.content.offer_banner_1.banner_2 == null ? null : ctx.data.content.offer_banner_1.banner_2.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2);
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product_1 == null ? null : ctx.data.content.category_product_1.status) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_3 == null ? null : ctx.data.content.offer_banner_3.status) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product_2 == null ? null : ctx.data.content.category_product_2.status) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids == null ? null : ctx.data.content.featured_blogs.blog_ids.length) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 19 : -1);
      }
    }, dependencies: [
      ThemeHomeSliderComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChristmasComponent, { className: "ChristmasComponent" });
})();

// src/app/components/home/electronic/electronic-1/electronic-1.component.ts
function _forTrack0($index, $item) {
  return this.data;
}
var _c013 = () => [];
function Electronic1Component_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "app-image-link", 10);
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "p", 13)(6, "span", 14);
    \u0275\u0275element(7, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275element(9, "span", 15);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.banners.length === 3 ? "col-md-4 col-sm-6" : ctx_r1.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function Electronic1Component_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Electronic1Component_For_7_Conditional_0_Template, 10, 3, "div", 8);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function Electronic1Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 4);
    \u0275\u0275element(2, "app-theme-title", 17);
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19);
    \u0275\u0275element(5, "app-theme-product-tab-section", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product)("type", "standard");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.category_ids);
  }
}
function Electronic1Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-brand", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c013));
  }
}
var Electronic1Component = class _Electronic1Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      ;
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      ;
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("md-container");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("md-container");
    }
  }
  static {
    this.\u0275fac = function Electronic1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Electronic1Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Electronic1Component, selectors: [["app-electronic-1"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "pt-0"], [1, "home-slider"], [3, "banners"], [1, "ratio2_3", "banner-section"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [1, "section-b-space", "category-tab-section", "ratio_square"], [1, "section-b-space"], [3, "ngClass"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "row"], [1, "col"], [3, "categoryIds"], [3, "brandIds"]], template: function Electronic1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275repeaterCreate(6, Electronic1Component_For_7_Template, 1, 1, null, null, _forTrack0, true);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, Electronic1Component_Conditional_8_Template, 6, 5, "section", 6)(9, Electronic1Component_Conditional_9_Template, 2, 2, "section", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.banners);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Electronic1Component, { className: "Electronic1Component" });
})();

// src/app/components/home/electronic/electronic-2/electronic-2.component.ts
function _forTrack02($index, $item) {
  return this.data;
}
var _c014 = () => [];
function Electronic2Component_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 13);
    \u0275\u0275element(2, "app-image-link", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p", 17)(6, "span", 18);
    \u0275\u0275element(7, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275element(9, "span", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-fluid");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.banner_1)("bgImage", false);
  }
}
function Electronic2Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 13);
    \u0275\u0275element(2, "app-image-link", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p", 17)(6, "span", 18);
    \u0275\u0275element(7, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275element(9, "span", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-fluid");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.banner_2)("bgImage", false);
  }
}
function Electronic2Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 13);
    \u0275\u0275element(2, "app-image-link", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p", 17)(6, "span", 18);
    \u0275\u0275element(7, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275element(9, "span", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-fluid");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.banner_3)("bgImage", false);
  }
}
function Electronic2Component_Conditional_7_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13);
    \u0275\u0275element(2, "app-image-link", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p", 17)(6, "span", 18);
    \u0275\u0275element(7, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275element(9, "span", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.banners.length === 3 ? "col-md-4 col-6" : ctx_r0.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function Electronic2Component_Conditional_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Electronic2Component_Conditional_7_For_4_Conditional_0_Template, 10, 5, "div", 21);
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    \u0275\u0275conditional((banner_r2 == null ? null : banner_r2.status) ? 0 : -1);
  }
}
function Electronic2Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 8)(2, "div", 1);
    \u0275\u0275repeaterCreate(3, Electronic2Component_Conditional_7_For_4_Template, 1, 1, null, null, _forTrack02, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.banners);
  }
}
function Electronic2Component_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275element(1, "app-theme-brand", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c014));
  }
}
var Electronic2Component = class _Electronic2Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      ;
      let getCategory$;
      if (this.data?.content.category_product?.status && this.data?.content.category_product.category_ids?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      ;
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      ;
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Electronic2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Electronic2Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Electronic2Component, selectors: [["app-electronic-2"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 14, vars: 9, consts: [[1, "container", "banner-slider"], [1, "row", "g-sm-4", "g-3"], [1, "col-md-7"], [1, "col-md-5"], [1, "row", "home-banner", "g-sm-4", "g-3"], [1, "col-12"], [1, "banner-padding", "banner-section", "ratio2_1"], [1, "category-tab-section"], [1, "container"], [1, "row"], [1, "col"], [3, "categoryIds", "tab_title_class"], [1, "section-b-space", "blog-wo-bg"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "class"], [3, "brandIds"]], template: function Electronic2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, Electronic2Component_Conditional_2_Template, 10, 4, "div", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
        \u0275\u0275template(5, Electronic2Component_Conditional_5_Template, 10, 4, "div", 5)(6, Electronic2Component_Conditional_6_Template, 10, 4, "div", 5);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(7, Electronic2Component_Conditional_7_Template, 5, 0, "section", 6);
        \u0275\u0275elementStart(8, "section", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
        \u0275\u0275element(12, "app-theme-product-tab-section", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(13, Electronic2Component_Conditional_13_Template, 2, 2, "section", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.banner_1 == null ? null : ctx.data.content.home_banner.banner_1.status) ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.banner_2 == null ? null : ctx.data.content.home_banner.banner_2.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.banner_3 == null ? null : ctx.data.content.home_banner.banner_3.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 7 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275styleMap("vertical");
        \u0275\u0275property("categoryIds", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids)("tab_title_class", "tab-title2");
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 13 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeProductTabSectionComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Electronic2Component, { className: "Electronic2Component" });
})();

// src/app/components/home/electronic/electronic-3/electronic-3.component.ts
var _c015 = () => [];
function Electronic3Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 1);
    \u0275\u0275element(2, "app-theme-services", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("col-xl-3 col-sm-6");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function Electronic3Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 1)(2, "div", 13)(3, "div", 15)(4, "div", 21)(5, "h2", 22);
    \u0275\u0275element(6, "i", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "h2", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "app-theme-product", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(6, _c015))("options", ctx_r0.options)("slider", true);
  }
}
function Electronic3Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 26)(2, "a", 27)(3, "div", 28);
    \u0275\u0275element(4, "app-image-link", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("img-part custom-height");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.main_banner)("bgImage", true);
  }
}
function Electronic3Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "a", 27)(2, "div", 30);
    \u0275\u0275element(3, "app-image-link", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.grid_banner_1)("bgImage", true);
  }
}
function Electronic3Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "a", 27)(2, "div", 30);
    \u0275\u0275element(3, "app-image-link", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.grid_banner_2)("bgImage", true);
  }
}
function Electronic3Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 26)(2, "a", 27)(3, "div", 28);
    \u0275\u0275element(4, "app-image-link", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("img-part custom-height");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.grid_banner_3)("bgImage", true);
  }
}
function Electronic3Component_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "header", 34)(2, "div", 35)(3, "div", 36)(4, "div", 37);
    \u0275\u0275element(5, "app-categories", 38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_1 == null ? null : ctx_r0.data.content.category_product_1.categories == null ? null : ctx_r0.data.content.category_product_1.categories.category_ids) || \u0275\u0275pureFunction0(3, _c015));
  }
}
function Electronic3Component_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 13);
    \u0275\u0275template(2, Electronic3Component_Conditional_18_Conditional_2_Template, 6, 4, "div", 31);
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275element(4, "app-theme-product", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_1 == null ? null : ctx_r0.data.content.category_product_1.categories == null ? null : ctx_r0.data.content.category_product_1.categories.status) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_1 == null ? null : ctx_r0.data.content.category_product_1.categories == null ? null : ctx_r0.data.content.category_product_1.categories.status) ? "col-xl-10" : "col-xl-12");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_1 == null ? null : ctx_r0.data.content.category_product_1.products == null ? null : ctx_r0.data.content.category_product_1.products.product_ids) || \u0275\u0275pureFunction0(8, _c015))("slider", false);
  }
}
function Electronic3Component_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "app-image-link", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1)("bgImage", false);
  }
}
function Electronic3Component_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "app-image-link", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_2.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_1)("bgImage", true);
  }
}
function Electronic3Component_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "app-image-link", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_1 == null ? null : ctx_r0.data.content.offer_banner_2.banner_1.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_2)("bgImage", true);
  }
}
function Electronic3Component_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "div", 1)(2, "div", 39);
    \u0275\u0275template(3, Electronic3Component_Conditional_20_Conditional_3_Template, 2, 5, "div", 32)(4, Electronic3Component_Conditional_20_Conditional_4_Template, 2, 5, "div", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_1 == null ? null : ctx_r0.data.content.offer_banner_2.banner_1.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_2 == null ? null : ctx_r0.data.content.offer_banner_2.banner_2.status) ? 4 : -1);
  }
}
function Electronic3Component_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 1)(2, "div", 13)(3, "div", 40);
    \u0275\u0275element(4, "app-theme-product-tab-section", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_2 == null ? null : ctx_r0.data.content.category_product_2.category_ids)("tab_style", "simple")("showItems", 5)("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product_2);
  }
}
function Electronic3Component_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19);
    \u0275\u0275element(1, "app-theme-brand", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c015));
  }
}
var Electronic3Component = class _Electronic3Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      let categoryIds = [...new Set(this.data?.content?.category_product_1?.categories?.category_ids.concat(this.data.content.category_product_2.category_ids))];
      this.options = __spreadProps(__spreadValues({}, this.options), {
        center: true,
        responsive: __spreadProps(__spreadValues({}, this.options.responsive), {
          999: {
            items: 5
          }
        })
      });
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      ;
      let getCategory$;
      if (categoryIds?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      ;
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      ;
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Electronic3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Electronic3Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Electronic3Component, selectors: [["app-electronic-3"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 23, vars: 12, consts: [[1, "small-section", "pt-res-0"], [1, "container"], [1, "home-slider"], [3, "banners"], [1, "service-w-bg", "pt-0", "tools-service"], [1, "ratio_square"], [1, "banner-style-1"], [1, "full-box"], [1, "row", "ratio2_1"], [1, "col-lg-5", "col-md-7", "card-margin"], [1, "col-lg-4", "col-md-5"], [1, "banner-padding", "pt-0", "ratio2_1"], [1, "container", "p-0"], [1, "row"], [1, "col-12", "mb-4"], [1, "col-12"], [1, "col-lg-3", "col-12", "d-lg-block", "d-none"], [1, "ratio2_1", "banner-padding"], [1, "ratio_square", "bg-title", "section-b-space", "wo-bg", "category-tab-section"], [1, "section-b-space", "bg-light", "blog-wo-bg"], [3, "services"], [1, "title-basic"], [1, "title"], [1, "ri-flashlight-line"], [1, "skeleton-text-h2", "title"], [3, "productIds", "options", "slider"], [1, "banner-padding", "pt-0"], ["href", "javascript:void(0)"], [1, "collection-banner", "tl-content"], [3, "image", "bgImage"], [1, "collection-banner"], [1, "col-xl-2", "d-xl-inline-block", "d-none"], [3, "ngClass"], [3, "productIds", "slider"], [1, "left-header", "left-header-relative"], [1, "metro"], [1, "main-menu"], [1, "menu-left"], [3, "categoryIds"], [1, "row", "g-4"], [1, "col"], [3, "categoryIds", "tab_style", "showItems", "title"], [3, "brandIds"]], template: function Electronic3Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-theme-home-slider", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, Electronic3Component_Conditional_4_Template, 3, 3, "section", 4)(5, Electronic3Component_Conditional_5_Template, 10, 7, "section", 5);
        \u0275\u0275elementStart(6, "section", 6)(7, "div", 7)(8, "div", 1)(9, "div", 8);
        \u0275\u0275template(10, Electronic3Component_Conditional_10_Template, 5, 4, "div", 9);
        \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
        \u0275\u0275template(15, Electronic3Component_Conditional_15_Template, 4, 4, "div", 14)(16, Electronic3Component_Conditional_16_Template, 4, 4, "div", 15);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(17, Electronic3Component_Conditional_17_Template, 5, 4, "div", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(18, Electronic3Component_Conditional_18_Template, 5, 9, "section", 1)(19, Electronic3Component_Conditional_19_Template, 2, 2, "section", 1)(20, Electronic3Component_Conditional_20_Template, 5, 2, "section", 17)(21, Electronic3Component_Conditional_21_Template, 5, 8, "section", 18)(22, Electronic3Component_Conditional_22_Template, 2, 2, "section", 19);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 5 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.main_banner == null ? null : ctx.data.content.banner.main_banner.status) ? 10 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.grid_banner_1 == null ? null : ctx.data.content.banner.grid_banner_1.status) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.grid_banner_2 == null ? null : ctx.data.content.banner.grid_banner_2.status) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.grid_banner_3 == null ? null : ctx.data.content.banner.grid_banner_3.status) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product_1 == null ? null : ctx.data.content.category_product_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product_1 == null ? null : ctx.data.content.category_product_1.categories == null ? null : ctx.data.content.category_product_1.categories.category_ids) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_1 == null ? null : ctx.data.content.offer_banner_1.status) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.banner_1 == null ? null : ctx.data.content.offer_banner_2.banner_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.banner_2 == null ? null : ctx.data.content.offer_banner_2.banner_2.status) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product_2 == null ? null : ctx.data.content.category_product_2.status) ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 22 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeProductTabSectionComponent,
      ThemeBrandComponent,
      CategoriesComponent
    ], styles: ["\n\n.left-header[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n}\n.left-header[_ngcontent-%COMP%]   .menu-left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 0 20px 0;\n  background-color: #fff;\n  color: #222;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 23px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  text-align: right;\n  width: 100%;\n}\n/*# sourceMappingURL=electronic-3.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Electronic3Component, { className: "Electronic3Component" });
})();

// src/app/components/home/fashion/fashion-1/fashion-1.component.ts
var _c016 = () => [];
function Fashion1Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275element(2, "app-image-link", 11);
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "p", 14)(6, "span", 15);
    \u0275\u0275element(7, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275element(9, "span", 16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? "col-6" : "col-md-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("placeholder", "assets/images/placeholder/two_column_banner.png")("bgImage", true);
  }
}
function Fashion1Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10);
    \u0275\u0275element(2, "app-image-link", 11);
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "p", 14)(6, "span", 15);
    \u0275\u0275element(7, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275element(9, "span", 16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? "col-6" : "col-md-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("placeholder", "assets/images/placeholder/two_column_banner.png")("bgImage", true);
  }
}
function Fashion1Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 18);
    \u0275\u0275elementStart(1, "section", 19)(2, "div", 4);
    \u0275\u0275element(3, "app-theme-product", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c016))("slider", true);
  }
}
function Fashion1Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-image-link", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function Fashion1Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 18);
    \u0275\u0275elementStart(1, "section", 21)(2, "div", 4);
    \u0275\u0275element(3, "app-theme-product-tab-section", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids);
  }
}
function Fashion1Component_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 23);
    \u0275\u0275element(2, "app-theme-services", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners) || \u0275\u0275pureFunction0(1, _c016));
  }
}
function Fashion1Component_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-theme-title", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 25)(3, "div", 4);
    \u0275\u0275element(4, "app-theme-blog", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c016));
  }
}
function Fashion1Component_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-social-media", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container-fluid");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c016))("type", "borderless");
  }
}
function Fashion1Component_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9);
    \u0275\u0275element(1, "app-theme-brand", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c016));
  }
}
var Fashion1Component = class _Fashion1Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids?.length && this.data?.content?.products_list?.status) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Fashion1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Fashion1Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Fashion1Component, selectors: [["app-fashion-1"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275ProvidersFeature([Store]), \u0275\u0275StandaloneFeature], decls: 15, vars: 10, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "pb-0", "ratio2_1", "banner-section"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [1, "p-0", "banner-sale"], [1, "instagram", "ratio_square"], [1, "section-b-space"], [1, "position-relative"], [3, "image", "placeholder", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "section-b-space", "pt-0"], [3, "productIds", "slider"], [1, "section-b-space", "category-tab-section", "pt-0"], [3, "categoryIds"], [1, "service", "border-section", "small-section"], [3, "services"], [1, "blog", "pt-0", "ratio2_3"], [3, "blogIds"], [3, "media", "type"], [3, "brandIds"]], template: function Fashion1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275template(6, Fashion1Component_Conditional_6_Template, 10, 4, "div", 6)(7, Fashion1Component_Conditional_7_Template, 10, 4, "div", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, Fashion1Component_Conditional_8_Template, 4, 7)(9, Fashion1Component_Conditional_9_Template, 2, 3, "section", 7)(10, Fashion1Component_Conditional_10_Template, 4, 5)(11, Fashion1Component_Conditional_11_Template, 3, 2, "div", 4)(12, Fashion1Component_Conditional_12_Template, 5, 4)(13, Fashion1Component_Conditional_13_Template, 2, 5, "section", 8)(14, Fashion1Component_Conditional_14_Template, 2, 2, "section", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.product_ids) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.status) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 14 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeServicesComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Fashion1Component, { className: "Fashion1Component" });
})();

// src/app/components/home/fashion/fashion-2/fashion-2.component.ts
function _forTrack03($index, $item) {
  return this.data;
}
var _c017 = () => [];
function Fashion2Component_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11);
    \u0275\u0275element(2, "app-image-link", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "p", 15)(6, "span", 16);
    \u0275\u0275element(7, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275element(9, "span", 17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const banner_r2 = ctx_r0.$implicit;
    const \u0275$index_13_r3 = ctx_r0.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275$index_13_r3 % 2 == 0 && ctx_r3.banners.length == \u0275$index_13_r3 + 1 ? "col-md-12" : "col-6");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function Fashion2Component_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Fashion2Component_For_7_Conditional_0_Template, 10, 5, "div", 10);
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    \u0275\u0275conditional((banner_r2 == null ? null : banner_r2.status) ? 0 : -1);
  }
}
function Fashion2Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 19);
    \u0275\u0275elementStart(1, "section", 20)(2, "div", 21)(3, "div", 22)(4, "div", 23);
    \u0275\u0275element(5, "app-theme-product-tab-section", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.category_product)("type", "basic");
    \u0275\u0275advance(5);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.category_product == null ? null : ctx_r3.data.content.category_product.category_ids);
  }
}
function Fashion2Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6);
    \u0275\u0275element(1, "app-image-link", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function Fashion2Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 21);
    \u0275\u0275element(2, "app-theme-four-column-product", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("data", ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.slider_products);
  }
}
function Fashion2Component_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-social-media", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("media", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.social_media) || \u0275\u0275pureFunction0(2, _c017))("type", "borderless");
  }
}
function Fashion2Component_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9);
    \u0275\u0275element(1, "app-theme-brand", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.brand == null ? null : ctx_r3.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c017));
  }
}
var Fashion2Component = class _Fashion2Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      if (this.data?.content?.offer_banner?.banner_4?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_4];
      }
      let getProduct$;
      if (this.data?.content?.products_ids?.length && this.data?.content?.slider_products.status) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Fashion2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Fashion2Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Fashion2Component, selectors: [["app-fashion-2"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 6, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "banner-section", "ratio2_1"], [1, "container-fluid"], [1, "row", "g-sm-4", "g-3"], [1, "p-0", "banner-sale"], [1, ""], [1, "instagram", "ratio_square"], [1, "section-b-space"], [3, "class"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "section-b-space", "category-tab-section", "pt-0"], [1, "container"], [1, "row"], [1, "col"], [3, "categoryIds"], [3, "image", "placeholder", "bgImage"], [3, "data"], [3, "media", "type"], [3, "brandIds"]], template: function Fashion2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275repeaterCreate(6, Fashion2Component_For_7_Template, 1, 1, null, null, _forTrack03, true);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, Fashion2Component_Conditional_8_Template, 6, 7)(9, Fashion2Component_Conditional_9_Template, 2, 3, "section", 6)(10, Fashion2Component_Conditional_10_Template, 3, 3, "section", 7)(11, Fashion2Component_Conditional_11_Template, 2, 3, "section", 8)(12, Fashion2Component_Conditional_12_Template, 2, 2, "section", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.banners);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 12 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeFourColumnProductComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Fashion2Component, { className: "Fashion2Component" });
})();

// src/app/components/home/fashion/fashion-3/fashion-3.component.ts
var _c018 = () => [];
function Fashion3Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 7);
    \u0275\u0275element(2, "app-theme-title", 8)(3, "app-theme-product", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(7, _c018))("slider", true)("options", ctx_r0.productSlider4);
  }
}
function Fashion3Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275element(1, "app-image-link", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function Fashion3Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 8);
    \u0275\u0275elementStart(1, "section", 11)(2, "div", 7);
    \u0275\u0275element(3, "app-theme-product-tab-section", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids);
  }
}
function Fashion3Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6);
    \u0275\u0275element(1, "app-theme-brand", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c018));
  }
}
var Fashion3Component = class _Fashion3Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider4 = productSlider4;
    this.productSlider = {
      loop: true,
      nav: false,
      dots: false,
      margin: 24,
      items: 4,
      responsive: {
        0: {
          items: 2,
          margin: 16
        },
        576: {
          items: 3
        },
        915: {
          items: 4
        }
      }
    };
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProduct$;
      if (this.data?.content?.products_ids.length && this.data?.content?.products_list?.status) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("box-layout-body");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("box-layout-body");
    }
  }
  static {
    this.\u0275fac = function Fashion3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Fashion3Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Fashion3Component, selectors: [["app-fashion-3"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 5, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "container", "box-layout", "bg-image"], [1, "section-b-space", "pt-0"], [1, "p-0", "banner-sale"], [1, "section-b-space", "brand-section"], [1, "container", "p-0"], [3, "title", "type"], [3, "productIds", "slider", "options"], [3, "image", "placeholder", "bgImage"], [1, "pt-0"], [3, "categoryIds"], [3, "brandIds"]], template: function Fashion3Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275template(4, Fashion3Component_Conditional_4_Template, 4, 8, "section", 4)(5, Fashion3Component_Conditional_5_Template, 2, 3, "section", 5)(6, Fashion3Component_Conditional_6_Template, 4, 7)(7, Fashion3Component_Conditional_7_Template, 2, 2, "section", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.product_ids) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Fashion3Component, { className: "Fashion3Component" });
})();

// src/app/components/home/fashion/fashion-4/fashion-4.component.ts
function _forTrack04($index, $item) {
  return this.data;
}
var _c019 = () => [];
function Fashion4Component_Conditional_4_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 10);
    \u0275\u0275element(2, "app-image-link", 11);
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "p", 14)(6, "span", 15);
    \u0275\u0275element(7, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275element(9, "span", 16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.banners.length === 3 ? "col-md-4" : ctx_r1.banners.length === 2 ? "col-6" : "col-md-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function Fashion4Component_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Fashion4Component_Conditional_4_For_4_Conditional_0_Template, 10, 5, "div", 9);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function Fashion4Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 1)(2, "div", 8);
    \u0275\u0275repeaterCreate(3, Fashion4Component_Conditional_4_For_4_Template, 1, 1, null, null, _forTrack04, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function Fashion4Component_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "header", 23)(2, "div", 24)(3, "div", 25)(4, "div", 26);
    \u0275\u0275element(5, "app-categories", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.categories == null ? null : ctx_r1.data.content.products_list.categories.category_ids) || \u0275\u0275pureFunction0(3, _c019));
  }
}
function Fashion4Component_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 28)(2, "div", 18);
    \u0275\u0275element(3, "app-theme-product", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.categories == null ? null : ctx_r1.data.content.products_list.categories.status) ? "col-xl-10" : "col-xl-12");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.products == null ? null : ctx_r1.data.content.products_list.products.product_ids) || \u0275\u0275pureFunction0(7, _c019))("slider", false);
  }
}
function Fashion4Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 18)(2, "div", 19);
    \u0275\u0275element(3, "app-theme-title", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, Fashion4Component_Conditional_5_Conditional_4_Template, 6, 4, "div", 21)(5, Fashion4Component_Conditional_5_Conditional_5_Template, 4, 8, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.products)("type", "simple")("space", false);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.categories == null ? null : ctx_r1.data.content.products_list.categories.status) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.products == null ? null : ctx_r1.data.content.products_list.products.status) && (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.products == null ? null : ctx_r1.data.content.products_list.products.product_ids) ? 5 : -1);
  }
}
function Fashion4Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 1);
    \u0275\u0275element(2, "app-image-link", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-fluid w-100");
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2)("bgImage", false);
  }
}
function Fashion4Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-brand", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c019));
  }
}
var Fashion4Component = class _Fashion4Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider4 = productSlider4;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner_1?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_1];
      }
      if (this.data?.content?.offer_banner_1?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_2];
      }
      if (this.data?.content?.offer_banner_1?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_3];
      }
      let categoryIds = this.data?.content?.products_list?.categories?.category_ids;
      let getProducts$;
      if (this.data?.content?.products_ids?.length && this.data?.content?.products_list?.products?.status) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      this.store.dispatch(new GetCategories({
        status: 1,
        ids: categoryIds?.join(",")
      }));
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("large-container");
        forkJoin([getProducts$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("large-container");
    }
  }
  static {
    this.\u0275fac = function Fashion4Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Fashion4Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Fashion4Component, selectors: [["app-fashion-4"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 5, consts: [[1, "pt-0", "mt-0"], [1, "container"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "banner-section", "ratio2_1"], [1, "container", "section-b-space"], [1, "pt-0"], [1, "section-b-space"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "row"], [1, "col-12"], [3, "title", "type", "space"], [1, "col-xl-2", "d-xl-inline-block", "d-none"], [3, "ngClass"], [1, "left-header", "left-header-relative"], [1, "metro"], [1, "main-menu"], [1, "menu-left"], [3, "categoryIds"], [1, "container", "p-0"], [3, "productIds", "slider"], [3, "brandIds"]], template: function Fashion4Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-theme-home-slider", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, Fashion4Component_Conditional_4_Template, 5, 0, "section", 4)(5, Fashion4Component_Conditional_5_Template, 6, 5, "section", 5)(6, Fashion4Component_Conditional_6_Template, 3, 4, "section", 6)(7, Fashion4Component_Conditional_7_Template, 2, 2, "section", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeBrandComponent,
      CategoriesComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Fashion4Component, { className: "Fashion4Component" });
})();

// src/app/components/home/fashion/fashion-5/fashion-5.component.ts
var _c020 = () => [];
function Fashion5Component_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 4)(2, "div", 5);
    \u0275\u0275element(3, "app-image-link", 6);
    \u0275\u0275elementStart(4, "div", 7)(5, "div", 8)(6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "p", 12)(10, "span", 13);
    \u0275\u0275element(11, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275element(13, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 16);
    \u0275\u0275element(15, "span", 14);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("home");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner)("bgImage", true);
  }
}
function Fashion5Component_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 9);
    \u0275\u0275element(2, "app-theme-title", 17)(3, "app-categories", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories)("type", "classic");
    \u0275\u0275advance();
    \u0275\u0275styleMap("basic");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.category_ids) || \u0275\u0275pureFunction0(6, _c020))("slider", false);
  }
}
function Fashion5Component_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 9);
    \u0275\u0275element(2, "app-image-link", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-fluid w-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.deals_banner);
  }
}
function Fashion5Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 17);
    \u0275\u0275elementStart(1, "section", 20)(2, "div", 9);
    \u0275\u0275element(3, "app-theme-product-tab-section", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids);
  }
}
function Fashion5Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 9);
    \u0275\u0275element(2, "app-image-link", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-fluid w-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner);
  }
}
function Fashion5Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275element(1, "app-theme-social-media", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(5, _c020))("options", ctx_r0.SocialMediaSlider)("type", "classic");
  }
}
function Fashion5Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "app-theme-brand", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c020));
  }
}
var Fashion5Component = class _Fashion5Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.SocialMediaSlider = SocialMediaSlider;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: {
          0: {
            items: 2,
            mouseDrag: true
          },
          890: {
            items: 3,
            mouseDrag: true
          },
          999: {
            items: 4,
            mouseDrag: false,
            touchDrag: false
          }
        }
      });
      this.SocialMediaSlider = __spreadProps(__spreadValues({}, this.SocialMediaSlider), {
        center: true,
        responsive: __spreadProps(__spreadValues({}, this.SocialMediaSlider.responsive), {
          1367: {
            items: 5
          }
        })
      });
      let categoryIds = this.data?.content.categories?.category_ids.concat(this.data?.content.category_product?.category_ids);
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        is_approved: 1,
        ids: this.data.content.products_ids?.join(","),
        paginate: this.data?.content?.products_ids?.length
      }));
      const getCategory$ = this.store.dispatch(new GetCategories({
        status: 1,
        ids: categoryIds?.join(",")
      }));
      const getBrands$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brand?.brand_ids?.join(",")
      }));
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Fashion5Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Fashion5Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Fashion5Component, selectors: [["app-fashion-5"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [[1, "home-slider-container"], [1, "section-b-space"], [1, "pt-0"], [1, "instagram", "insta-style", "ratio_square", "section-b-space"], [1, "p-0"], [1, "home-slider"], [3, "image", "bgImage"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [3, "title", "type"], [3, "categoryIds", "slider"], [3, "image"], [1, "section-b-space", "category-tab-section", "pt-0"], [3, "categoryIds"], [3, "media", "options", "type"], [3, "brandIds"]], template: function Fashion5Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Fashion5Component_Conditional_0_Template, 16, 4, "div", 0)(1, Fashion5Component_Conditional_1_Template, 4, 7, "section", 1)(2, Fashion5Component_Conditional_2_Template, 3, 3, "section", 2)(3, Fashion5Component_Conditional_3_Template, 4, 5)(4, Fashion5Component_Conditional_4_Template, 3, 3, "section", 2)(5, Fashion5Component_Conditional_5_Template, 2, 6, "section", 3)(6, Fashion5Component_Conditional_6_Template, 2, 2, "section", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.status) ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.deals_banner == null ? null : ctx.data.content.deals_banner.status) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 6 : -1);
      }
    }, dependencies: [
      CommonModule,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      CategoriesComponent,
      ThemeProductTabSectionComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Fashion5Component, { className: "Fashion5Component" });
})();

// src/app/components/home/fashion/fashion-6/fashion-6.component.ts
var _c021 = () => [];
var _c15 = (a0) => ({ "background-image": a0 });
function Fashion6Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11);
    \u0275\u0275element(5, "app-image-link", 12);
    \u0275\u0275elementStart(6, "div", 13)(7, "div", 14)(8, "p", 15)(9, "span", 16);
    \u0275\u0275element(10, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 18);
    \u0275\u0275element(12, "span", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(13, "div", 19)(14, "div", 20)(15, "div", 21)(16, "div", 22);
    \u0275\u0275element(17, "app-image-link", 12);
    \u0275\u0275elementStart(18, "div", 13)(19, "div", 14)(20, "p", 15)(21, "span", 16);
    \u0275\u0275element(22, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 18);
    \u0275\u0275element(24, "span", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(25, "div", 21)(26, "div", 22);
    \u0275\u0275element(27, "app-image-link", 12);
    \u0275\u0275elementStart(28, "div", 13)(29, "div", 14)(30, "p", 15)(31, "span", 16);
    \u0275\u0275element(32, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 18);
    \u0275\u0275element(34, "span", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(35, "div", 21)(36, "div", 22);
    \u0275\u0275element(37, "app-image-link", 12);
    \u0275\u0275elementStart(38, "div", 13)(39, "div", 14)(40, "p", 15)(41, "span", 16);
    \u0275\u0275element(42, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 18);
    \u0275\u0275element(44, "span", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(45, "div", 23)(46, "div", 22);
    \u0275\u0275element(47, "app-image-link", 12);
    \u0275\u0275elementStart(48, "div", 13)(49, "div", 14)(50, "p", 15)(51, "span", 16);
    \u0275\u0275element(52, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 18);
    \u0275\u0275element(54, "span", 17);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(55, "div", 24)(56, "div", 22);
    \u0275\u0275element(57, "app-image-link", 12);
    \u0275\u0275elementStart(58, "div", 13)(59, "div", 14)(60, "p", 15)(61, "span", 16);
    \u0275\u0275element(62, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 18);
    \u0275\u0275element(64, "span", 17);
    \u0275\u0275elementEnd()()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap("h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("bgImage", true);
    \u0275\u0275advance(12);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("bgImage", true);
    \u0275\u0275advance(10);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_3)("bgImage", true);
    \u0275\u0275advance(10);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_4)("bgImage", true);
    \u0275\u0275advance(10);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_5)("bgImage", true);
    \u0275\u0275advance(10);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_6)("bgImage", true);
  }
}
function Fashion6Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 25);
    \u0275\u0275elementStart(1, "section", 26)(2, "div", 8);
    \u0275\u0275element(3, "app-theme-product", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c021));
  }
}
function Fashion6Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "img", 28);
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 8)(4, "div", 9)(5, "div", 30)(6, "div", 31)(7, "h5", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 33);
    \u0275\u0275element(10, "app-theme-product", 27);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c15, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.image_url) + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.image_url);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.product_slider_1 == null ? null : ctx_r0.data.content.product_banner.product_slider_1.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.product_slider_1 == null ? null : ctx_r0.data.content.product_banner.product_slider_1.product_ids) || \u0275\u0275pureFunction0(9, _c021));
  }
}
function Fashion6Component_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.products)("type", "basic");
  }
}
function Fashion6Component_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "app-image-link", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.right_panel)("bgImage", true);
  }
}
function Fashion6Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Fashion6Component_Conditional_6_Conditional_0_Template, 1, 2, "app-theme-title", 25);
    \u0275\u0275elementStart(1, "section", 5)(2, "div", 8)(3, "div", 9)(4, "div", 34);
    \u0275\u0275element(5, "app-theme-product", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Fashion6Component_Conditional_6_Conditional_6_Template, 2, 4, "div", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.products == null ? null : ctx_r0.data.content.products_list_2.products.product_ids) ? 0 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.right_panel == null ? null : ctx_r0.data.content.products_list_2.right_panel.status) ? "col-lg-9 col-md-8 col-sm-7 col-6" : "col-lg-12 col-md-8 col-sm-7 col-6");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.products == null ? null : ctx_r0.data.content.products_list_2.products.product_ids) || \u0275\u0275pureFunction0(8, _c021))("slider", true)("options", ctx_r0.options);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.right_panel == null ? null : ctx_r0.data.content.products_list_2.right_panel.status) ? 6 : -1);
  }
}
function Fashion6Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 37);
    \u0275\u0275element(3, "app-theme-title", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "section", 38)(5, "div", 8)(6, "div", 9)(7, "div", 39);
    \u0275\u0275element(8, "app-theme-blog", 40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance(5);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c021));
  }
}
function Fashion6Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6);
    \u0275\u0275element(1, "app-theme-social-media", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(2, _c021))("type", "borderless");
  }
}
function Fashion6Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-brand", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c021));
  }
}
var Fashion6Component = class _Fashion6Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: {
          0: {
            items: 1
          },
          668: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        approve: 1,
        ids: this.data?.content?.products_ids?.join(","),
        paginate: this.data?.content?.products_ids?.length
      }));
      const getBrands$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brand?.brand_ids?.join(",")
      }));
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Fashion6Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Fashion6Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Fashion6Component, selectors: [["app-fashion-6"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0"], [1, "center-home-slider", "sm-size", "home-slider", "layout-7"], [3, "banners"], [1, "banner-padding", "ratio2_1"], [1, "section-b-space", "bg-size", 3, "ngStyle"], [1, "pt-0", "ratio_square"], [1, "instagram", "ratio_square"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-lg-3", "d-lg-block", "d-none"], [1, "position-relative", "h-100"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "col-lg-9"], [1, "row", "g-md-4", "g-3"], [1, "col-md-4", "col-6"], [1, "position-relative"], [1, "col-6"], [1, "col-md-6"], [3, "title", "type"], [1, "section-b-space", "pt-0", "ratio_square"], [3, "productIds"], [1, "bg-img", 3, "src", "alt"], [1, "ratio_square"], [1, "col-lg-4", "col-md-6"], [1, "theme-card", "card-border", "bg-white"], [1, "title-border"], [1, "offer-slider"], [3, "ngClass"], [3, "productIds", "slider", "options"], [1, "col-lg-3", "col-md-4", "col-sm-5", "col-6", "images"], [1, "col"], [1, "blog", "pt-0", "ratio2_3"], [1, "col-md-12"], [3, "blogIds"], [3, "media", "type"], [3, "brandIds"]], template: function Fashion6Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Fashion6Component_Conditional_3_Template, 65, 24, "section", 3)(4, Fashion6Component_Conditional_4_Template, 4, 8)(5, Fashion6Component_Conditional_5_Template, 11, 10, "section", 4)(6, Fashion6Component_Conditional_6_Template, 7, 9, "section", 5)(7, Fashion6Component_Conditional_7_Template, 9, 4)(8, Fashion6Component_Conditional_8_Template, 2, 3, "section", 6)(9, Fashion6Component_Conditional_9_Template, 2, 2, "section", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner == null ? null : ctx.data.content.product_banner.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeHomeSliderComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Fashion6Component, { className: "Fashion6Component" });
})();

// src/app/components/home/fashion/fashion-7/fashion-7.component.ts
var _c022 = (a0) => ({ "background-image": a0 });
var _c16 = () => [];
function Fashion7Component_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 24);
    \u0275\u0275element(2, "app-image-link", 2);
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 4)(5, "p", 26)(6, "span", 27);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 28);
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-part");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_banners == null ? null : ctx_r0.data.content.featured_banners.banner_1)("bgImage", true);
  }
}
function Fashion7Component_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 29);
    \u0275\u0275element(2, "app-image-link", 2);
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 4)(5, "p", 26)(6, "span", 27);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 28);
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-part h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_banners == null ? null : ctx_r0.data.content.featured_banners.banner_2)("bgImage", true);
  }
}
function Fashion7Component_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 29);
    \u0275\u0275element(2, "app-image-link", 2);
    \u0275\u0275elementStart(3, "div", 25)(4, "div", 4)(5, "p", 26)(6, "span", 27);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 28);
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-part h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_banners == null ? null : ctx_r0.data.content.featured_banners.banner_3)("bgImage", true);
  }
}
function Fashion7Component_Conditional_21_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "app-product-box", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("product", product_r2);
  }
}
function Fashion7Component_Conditional_21_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "no_more_product"), " ");
  }
}
function Fashion7Component_Conditional_21_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.button_text, " ");
  }
}
function Fashion7Component_Conditional_21_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 36)(2, "a", 37);
    \u0275\u0275listener("click", function Fashion7Component_Conditional_21_Conditional_9_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.loadMore(1));
    });
    \u0275\u0275template(3, Fashion7Component_Conditional_21_Conditional_9_Conditional_3_Template, 2, 3)(4, Fashion7Component_Conditional_21_Conditional_9_Conditional_4_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("loading", ctx_r0.button_loader)("disabled", ctx_r0.products == ctx_r0.total_product);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.finished ? 3 : (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.button_text) ? 4 : -1);
  }
}
function Fashion7Component_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17);
    \u0275\u0275element(1, "app-theme-title", 30);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6)(4, "div", 31)(5, "div", 32);
    \u0275\u0275repeaterCreate(6, Fashion7Component_Conditional_21_For_7_Template, 2, 3, "div", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, Fashion7Component_Conditional_21_Conditional_9_Template, 5, 5, "div", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "basic");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 3, ctx_r0.moreProduct$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.more_button) ? 9 : -1);
  }
}
function Fashion7Component_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "div", 38);
    \u0275\u0275element(3, "img", 39);
    \u0275\u0275elementStart(4, "div", 40)(5, "div", 5)(6, "div", 6)(7, "div", 41)(8, "div", 42)(9, "div", 43);
    \u0275\u0275element(10, "app-theme-product", 44);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ((tmp_1_0 = \u0275\u0275pipeBind1(1, 7, ctx_r0.moreProduct$)) == null ? null : tmp_1_0.length) ? "p-0" : "section-t-space");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(9, _c022, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.image_url) + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.image_url);
    \u0275\u0275advance(7);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.product_ids) || \u0275\u0275pureFunction0(11, _c16));
  }
}
function Fashion7Component_Conditional_24_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-button", 50);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-outline btn-sm");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel)("type", "button_link");
  }
}
function Fashion7Component_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 48)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Fashion7Component_Conditional_24_Conditional_3_Conditional_7_Template, 1, 4, "app-button", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.description);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.more_button) ? 7 : -1);
  }
}
function Fashion7Component_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 5)(2, "div", 6);
    \u0275\u0275template(3, Fashion7Component_Conditional_24_Conditional_3_Template, 8, 3, "div", 45);
    \u0275\u0275elementStart(4, "div", 46);
    \u0275\u0275element(5, "app-theme-product", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.status) ? "col-xl-9 col-lg-8" : "col-xl-12 col-lg-8");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.products == null ? null : ctx_r0.data.content.products_list_2.products.product_ids) || \u0275\u0275pureFunction0(7, _c16))("slider", true)("options", ctx_r0.options);
  }
}
function Fashion7Component_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? "col-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275classMap("img-part h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("bgImage", true);
  }
}
function Fashion7Component_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? "col-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275classMap("img-part h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("bgImage", true);
  }
}
function Fashion7Component_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23);
    \u0275\u0275element(1, "app-theme-brand", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c16));
  }
}
var Fashion7Component = class _Fashion7Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.button_loader = false;
    this.options = productSlider;
    this.StorageURL = environment.storageURL;
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 4,
      // Display per page,
      "status": 1,
      "approve": 1,
      "category_id": ""
    };
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.filter["category_id"] = this.data?.content.products_list_1.category_id;
      this.productsSubscription = this.product$.subscribe((product) => {
        if (product && product.total) {
          this.total_product = product.total;
        }
      });
      this.productSubscription = this.moreProduct$.subscribe((product) => {
        if (product && product.length) {
          this.products = product.length;
        }
        if (this.total_product != this.products) {
          this.finished = false;
        } else {
          this.finished = true;
        }
      });
      this.banners = [];
      if (this.data?.content?.featured_banners?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.featured_banners?.banner_1];
      }
      if (this.data?.content?.featured_banners?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.featured_banners?.banner_2];
      }
      if (this.data?.content?.featured_banners?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.featured_banners?.banner_3];
      }
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: {
          0: {
            items: 1
          },
          668: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
      const getProducts$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        approve: 1,
        ids: this.data?.content?.products_ids?.join(","),
        paginate: this.data?.content?.products_ids?.length
      }));
      const getMoreProducts$ = this.store.dispatch(new GetMoreProduct(this.filter));
      const getBrands$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brand?.brand_ids?.join(",")
      }));
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$, getMoreProducts$]).subscribe({
          complete: () => {
            this.store.dispatch(new GetProducts(this.filter));
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  loadMore(value) {
    if (this.products != this.total_product) {
      this.button_loader = true;
      this.filter["page"] = this.filter["page"] + value;
      this.store.dispatch(new GetMoreProduct(this.filter, true)).subscribe({
        complete: () => {
          this.button_loader = false;
        }
      });
    } else {
      this.finished = true;
    }
  }
  ngOnDestroy() {
    if (this.productSubscription && this.productsSubscription) {
      this.productSubscription.unsubscribe();
      this.productsSubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function Fashion7Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Fashion7Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Fashion7Component, selectors: [["app-fashion-7"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 15, consts: [[1, "p-0", "xs-responsive", "bg-white"], [1, "home-slider"], [3, "image", "bgImage"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [1, "banner-padding", "bg-white"], [1, "container-fluid"], [1, "col-md-6", "ratio_40"], [1, "col-md-3", "col-6", "ratio3_2", "h-auto"], [1, "section-b-space", "pt-0", "ratio_asos", "bg-white"], [1, "product-parallax", 3, "ngClass"], [1, "ratio_asos"], [1, "pb-0", "ratio2_1"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "section-b-space"], [1, "position-relative"], [1, "banner-skeleton"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "col-lg-9", "col-12"], [1, "position-relative", "h-100"], [3, "title", "type"], [1, "col"], [1, "row", "row-cols-lg-4", "row-cols-md-3", "row-cols-2", "m-product", "infinite-product", "g-sm-4", "g-3"], [1, "d-block"], [1, "col-12"], [3, "product"], [1, "load-more-button", "text-center", "mt-4"], ["href", "javascript:void(0)", 1, "load-product", "btn", "btn-outline", 3, "click"], [1, "section-b-space", "section-t-space", "bg-size", 3, "ngStyle"], [1, "bg-img", 3, "src", "alt"], [1, "ratio_square"], [1, "col-lg-4", "col-md-6", "ms-auto"], [1, "theme-card", "card-border"], [1, "offer-slider"], [3, "productIds"], [1, "col-xl-3", "col-lg-4", "left-panel"], [3, "ngClass"], [3, "productIds", "slider", "options"], [1, "product-left-title"], [3, "data", "type", "class"], [3, "data", "type"], [3, "brandIds"]], template: function Fashion7Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-link", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8)(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 11);
        \u0275\u0275element(12, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(15, "section", 13)(16, "div", 14)(17, "div", 6);
        \u0275\u0275template(18, Fashion7Component_Conditional_18_Template, 10, 4, "div", 15)(19, Fashion7Component_Conditional_19_Template, 10, 4, "div", 16)(20, Fashion7Component_Conditional_20_Template, 10, 4, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, Fashion7Component_Conditional_21_Template, 10, 5, "section", 17);
        \u0275\u0275pipe(22, "async");
        \u0275\u0275template(23, Fashion7Component_Conditional_23_Template, 11, 12, "section", 18)(24, Fashion7Component_Conditional_24_Template, 6, 8, "section", 19);
        \u0275\u0275elementStart(25, "section", 20)(26, "div", 5)(27, "div", 21);
        \u0275\u0275template(28, Fashion7Component_Conditional_28_Template, 2, 7, "div", 22)(29, Fashion7Component_Conditional_29_Template, 2, 7, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(30, Fashion7Component_Conditional_30_Template, 2, 2, "section", 23);
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275advance(2);
        \u0275\u0275classMap("home");
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner)("bgImage", false);
        \u0275\u0275advance(16);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.banner_1 == null ? null : ctx.data.content.featured_banners.banner_1.status) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.banner_2 == null ? null : ctx.data.content.featured_banners.banner_2.status) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_banners == null ? null : ctx.data.content.featured_banners.banner_2 == null ? null : ctx.data.content.featured_banners.banner_2.status) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && ((tmp_6_0 = \u0275\u0275pipeBind1(22, 13, ctx.moreProduct$)) == null ? null : tmp_6_0.length) ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner == null ? null : ctx.data.content.product_banner.status) ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 30 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      AsyncPipe,
      TranslateModule,
      TranslatePipe,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ProductBoxComponent,
      ThemeBrandComponent,
      ButtonComponent
    ] });
  }
};
__decorate([
  Select(ProductState.product)
], Fashion7Component.prototype, "product$", void 0);
__decorate([
  Select(ProductState.moreProduct)
], Fashion7Component.prototype, "moreProduct$", void 0);
__decorate([
  Select(CategoryState.category)
], Fashion7Component.prototype, "category$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Fashion7Component, { className: "Fashion7Component" });
})();

// src/app/components/home/flower/flower.component.ts
var _c023 = () => [];
function FlowerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 17);
    \u0275\u0275element(2, "app-image-link", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20)(5, "p", 21)(6, "span", 22);
    \u0275\u0275element(7, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275element(9, "span", 23);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? "col-md-4" : "col-md-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("bgImage", false);
  }
}
function FlowerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 17);
    \u0275\u0275element(2, "app-image-link", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20)(5, "p", 21)(6, "span", 22);
    \u0275\u0275element(7, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275element(9, "span", 23);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? "col-md-8" : "col-md-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("bgImage", false);
  }
}
function FlowerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 25)(2, "div", 4);
    \u0275\u0275element(3, "app-theme-title", 12)(4, "app-theme-product", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(6, _c023))("slider", true);
  }
}
function FlowerComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "section", 0)(2, "div", 26);
    \u0275\u0275element(3, "app-theme-title", 12)(4, "app-theme-product-tab-section", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("product_box_style", "horizontal");
  }
}
function FlowerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 4)(2, "div", 10)(3, "div", 28);
    \u0275\u0275element(4, "app-theme-title", 12)(5, "app-theme-blog", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c023))("blogEffect", "basic-effect");
  }
}
function FlowerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 30);
    \u0275\u0275element(2, "app-theme-services", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners)("type", "simple");
  }
}
function FlowerComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 4);
    \u0275\u0275element(2, "app-theme-social-media", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("container-fluid");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c023))("type", "borderless");
  }
}
function FlowerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16);
    \u0275\u0275element(1, "app-theme-brand", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c023));
  }
}
var FlowerComponent = class _FlowerComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids?.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$, getBlog$, getCategory$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function FlowerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlowerComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlowerComponent, selectors: [["app-flower"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 16, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "pb-0"], [1, "container"], [1, "row", "g-4"], [3, "ngClass"], [1, "section-b-space"], [1, "bg-block"], [1, "section-b-space", "ratio_square"], [1, "row"], [1, "col"], [3, "title", "type"], [3, "productIds", "slider"], [1, "blog", "flower-bg", "section-b-space", "ratio3_2"], [1, "instagram", "ratio_square", "section-b-space"], [1, "section-b-space", "pt-0"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "full-box"], [1, "container-fluid"], [3, "categoryIds", "product_box_style"], [1, "col-md-12"], [3, "blogIds", "blogEffect"], [1, "service", "wo-box", "border-section", "section-b-space", "border-top-0"], [3, "services", "type"], [3, "media", "type"], [3, "brandIds"]], template: function FlowerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275template(6, FlowerComponent_Conditional_6_Template, 10, 3, "div", 6)(7, FlowerComponent_Conditional_7_Template, 10, 3, "div", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, FlowerComponent_Conditional_8_Template, 5, 7, "section", 7)(9, FlowerComponent_Conditional_9_Template, 5, 6, "div", 8);
        \u0275\u0275elementStart(10, "section", 9)(11, "div", 4)(12, "div", 10)(13, "div", 11);
        \u0275\u0275element(14, "app-theme-title", 12)(15, "app-theme-product", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(16, FlowerComponent_Conditional_16_Template, 6, 5, "section", 14)(17, FlowerComponent_Conditional_17_Template, 3, 2, "div", 4)(18, FlowerComponent_Conditional_18_Template, 3, 5, "section", 15)(19, FlowerComponent_Conditional_19_Template, 2, 2, "section", 16);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 9 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2)("type", "premium");
        \u0275\u0275advance();
        \u0275\u0275styleMap("vertical");
        \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(15, _c023))("slider", true);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 19 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeServicesComponent,
      ThemeProductTabSectionComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlowerComponent, { className: "FlowerComponent" });
})();

// src/app/components/home/furniture/furniture-1/furniture-1.component.ts
function _forTrack05($index, $item) {
  return this.data;
}
var _c024 = () => [];
function Furniture1Component_Conditional_3_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 10);
    \u0275\u0275element(2, "app-image-link", 11);
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "p", 14)(6, "span", 15);
    \u0275\u0275element(7, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275element(9, "span", 16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.banners.length === 3 ? "col-md-4 col-6" : ctx_r1.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function Furniture1Component_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Furniture1Component_Conditional_3_For_4_Conditional_0_Template, 10, 5, "div", 9);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function Furniture1Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 7)(2, "div", 8);
    \u0275\u0275repeaterCreate(3, Furniture1Component_Conditional_3_For_4_Template, 1, 1, null, null, _forTrack05, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function Furniture1Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 18);
    \u0275\u0275elementStart(1, "section", 19)(2, "div", 20);
    \u0275\u0275element(3, "app-theme-product-tab-section", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.category_ids);
  }
}
function Furniture1Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "app-image-link", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.status) ? "p-0" : "section-t-space");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function Furniture1Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 20)(2, "div", 23)(3, "div", 24);
    \u0275\u0275element(4, "app-theme-title", 25)(5, "app-theme-blog", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.featured_blogs)("type", "basic")("space", false);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.featured_blogs == null ? null : ctx_r1.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c024));
  }
}
function Furniture1Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6);
    \u0275\u0275element(1, "app-theme-brand", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c024));
  }
}
var Furniture1Component = class _Furniture1Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      let getCategory$;
      if (this.data?.content.category_product?.status && this.data?.content.category_product.category_ids?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      ;
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getCategory$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Furniture1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Furniture1Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Furniture1Component, selectors: [["app-furniture-1"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 8, vars: 6, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "ratio_45", "banner-padding"], [3, "ngClass"], [1, "blog", "ratio3_2", "section-b-space"], [1, "section-b-space", "pt-0"], [1, "container-fluid"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "section-b-space", "category-tab-section", "pt-0"], [1, "container"], [3, "categoryIds"], [3, "image", "placeholder", "bgImage"], [1, "row"], [1, "col-md-12"], [3, "title", "type", "space"], [3, "blogIds"], [3, "brandIds"]], template: function Furniture1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Furniture1Component_Conditional_3_Template, 5, 0, "section", 3)(4, Furniture1Component_Conditional_4_Template, 4, 5)(5, Furniture1Component_Conditional_5_Template, 2, 4, "section", 4)(6, Furniture1Component_Conditional_6_Template, 6, 5, "section", 5)(7, Furniture1Component_Conditional_7_Template, 2, 2, "section", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners && ctx.banners.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Furniture1Component, { className: "Furniture1Component" });
})();

// src/app/components/home/furniture/furniture-2/furniture-2.component.ts
function _forTrack06($index, $item) {
  return this.data;
}
var _c025 = () => [];
function Furniture2Component_Conditional_3_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 12);
    \u0275\u0275element(2, "app-image-link", 13);
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "p", 16)(6, "span", 17);
    \u0275\u0275element(7, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275element(9, "span", 18);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.banners.length === 3 ? "col-md-4 col-6" : ctx_r1.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function Furniture2Component_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Furniture2Component_Conditional_3_For_5_Conditional_0_Template, 10, 5, "div", 11);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function Furniture2Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 4)(2, "div", 9)(3, "div", 10);
    \u0275\u0275repeaterCreate(4, Furniture2Component_Conditional_3_For_5_Template, 1, 1, null, null, _forTrack06, true);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function Furniture2Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 20);
    \u0275\u0275element(2, "app-categories", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("simple");
    \u0275\u0275property("categoryIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_icon_list == null ? null : ctx_r1.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(4, _c025))("slider", true);
  }
}
function Furniture2Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 22);
    \u0275\u0275elementStart(1, "section", 23)(2, "div", 4)(3, "div", 24)(4, "div", 25);
    \u0275\u0275element(5, "app-theme-product", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_1)("type", "basic");
    \u0275\u0275advance(5);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_1 == null ? null : ctx_r1.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c025))("options", ctx_r1.productSlider5)("slider", true);
  }
}
function Furniture2Component_Conditional_6_For_4_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "a", 31)(2, "div", 32)(3, "div")(4, "video", 33);
    \u0275\u0275element(5, "source", 34);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.StorageURL + (banner_r3 == null ? null : banner_r3.image_url), \u0275\u0275sanitizeUrl);
  }
}
function Furniture2Component_Conditional_6_For_4_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "app-image-link", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3);
  }
}
function Furniture2Component_Conditional_6_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Furniture2Component_Conditional_6_For_4_Conditional_0_Conditional_0_Template, 6, 1, "div", 30)(1, Furniture2Component_Conditional_6_For_4_Conditional_0_Conditional_1_Template, 2, 1, "div", 29);
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.videoType.includes(banner_r3.image_url.substring(banner_r3.image_url.lastIndexOf(".") + 1)) ? 0 : 1);
  }
}
function Furniture2Component_Conditional_6_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 36)(2, "div")(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 37)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 38);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 37)(11, "h6")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(banner_r3.tag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(banner_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(banner_r3.button_text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 4, "shop_now"));
  }
}
function Furniture2Component_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Furniture2Component_Conditional_6_For_4_Conditional_0_Template, 2, 1)(1, Furniture2Component_Conditional_6_For_4_Conditional_1_Template, 15, 6, "div", 29);
  }
  if (rf & 2) {
    const banner_r3 = ctx.$implicit;
    \u0275\u0275conditional(banner_r3.image_url ? 0 : 1);
  }
}
function Furniture2Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 27)(2, "div", 28);
    \u0275\u0275repeaterCreate(3, Furniture2Component_Conditional_6_For_4_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.grid_banner == null ? null : ctx_r1.data.content.grid_banner.banners);
  }
}
function Furniture2Component_Conditional_7_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "app-image-link", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_2 == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_2.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_1)("bgImage", true);
  }
}
function Furniture2Component_Conditional_7_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "app-image-link", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_1 == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_1.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_2)("bgImage", true);
  }
}
function Furniture2Component_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 46)(2, "div", 47)(3, "div", 39);
    \u0275\u0275template(4, Furniture2Component_Conditional_7_Conditional_7_Conditional_4_Template, 2, 3, "div", 40)(5, Furniture2Component_Conditional_7_Conditional_7_Conditional_5_Template, 2, 3, "div", 40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_1 == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_1.status) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_2 == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_2.status) ? 5 : -1);
  }
}
function Furniture2Component_Conditional_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 48)(2, "h5", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50);
    \u0275\u0275element(5, "app-theme-product", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.right_panel == null ? null : ctx_r1.data.content.product_list_2.right_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.right_panel == null ? null : ctx_r1.data.content.product_list_2.right_panel.product_ids) || \u0275\u0275pureFunction0(4, _c025));
  }
}
function Furniture2Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 4)(2, "div", 39)(3, "div", 40)(4, "div", 41)(5, "div", 42);
    \u0275\u0275element(6, "app-theme-product", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Furniture2Component_Conditional_7_Conditional_7_Template, 6, 2, "div", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, Furniture2Component_Conditional_7_Conditional_8_Template, 6, 5, "div", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.right_panel == null ? null : ctx_r1.data.content.product_list_2.right_panel.status) ? "col-xl-9 col-lg-8 col-md-12" : "col-xl-12 col-lg-8 col-md-12");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_item == null ? null : ctx_r1.data.content.product_list_2.products.product_item.product_ids) || \u0275\u0275pureFunction0(7, _c025))("slider", true);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_1 == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_1.status) || (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.products == null ? null : ctx_r1.data.content.product_list_2.products.product_banner == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_2 == null ? null : ctx_r1.data.content.product_list_2.products.product_banner.banner_2.status) ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_2 == null ? null : ctx_r1.data.content.product_list_2.right_panel == null ? null : ctx_r1.data.content.product_list_2.right_panel.status) ? 8 : -1);
  }
}
function Furniture2Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-brand", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(2, _c025))("bgLight", true);
  }
}
function Furniture2Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-social-media", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("media", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.social_media) || \u0275\u0275pureFunction0(2, _c025))("type", "borderless");
  }
}
var Furniture2Component = class _Furniture2Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.categoryOptions = categorySlider;
    this.videoType = ["mp4", "webm", "ogg"];
    this.StorageURL = environment.storageURL;
    this.productSlider5 = productSlider5;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      ;
      let getCategory$;
      if (this.data?.content.categories_icon_list?.status && this.data?.content.categories_icon_list?.category_ids?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.categories_icon_list.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      ;
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      ;
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("header-style-light");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("header-style-light");
    }
  }
  static {
    this.\u0275fac = function Furniture2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Furniture2Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Furniture2Component, selectors: [["app-furniture-2"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "banner-section", "absolute-banner", "pb-0", "ratio2_1"], [1, "container"], [1, "category-bg", "ratio3_2"], [1, ""], [1, "tools-brand"], [1, "instagram", "ratio_square"], [1, "absolute-bg"], [1, "row", "g-lg-4", "g-3"], [3, "class"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "category-style-1"], [3, "categoryIds", "slider"], [3, "title", "type"], [1, "section-b-space", "pt-0", "ratio_asos"], [1, "row"], [1, "col"], [3, "productIds", "options", "slider"], [1, "container-fluid", "p-0"], [1, "row", "order-section"], [1, "col-sm-4", "p-0"], [1, "col-sm-8", "p-0"], ["href", "javascript:void(0)", 1, "image-block"], ["id", "block", 1, "video-sec"], ["autoplay", "true", "loop", "true"], ["type", "video/mp4", 3, "src"], [3, "image"], [1, "contain-block", "even"], ["href", "javascript:void(0)"], ["href", "javascript:void(0)", 1, "btn", "btn-solid", "category-btn"], [1, "row", "g-4"], [3, "ngClass"], [1, "theme-tab"], [1, "tab-content-cls", "ratio_asos"], [3, "productIds", "slider"], [1, "banner-tools", "border-0", "product_banner", "banner-section"], [1, "col-xl-3", "col-lg-4", "col-md-12", "mb-0", "images"], [1, "ratio2_1"], [1, "container", "p-0"], [1, "theme-card"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"], [3, "brandIds", "bgLight"], [3, "media", "type"]], template: function Furniture2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Furniture2Component_Conditional_3_Template, 6, 0, "section", 3)(4, Furniture2Component_Conditional_4_Template, 3, 5, "div", 4)(5, Furniture2Component_Conditional_5_Template, 6, 8)(6, Furniture2Component_Conditional_6_Template, 5, 0, "div", 5)(7, Furniture2Component_Conditional_7_Template, 9, 8, "section", 6)(8, Furniture2Component_Conditional_8_Template, 2, 3, "section", 7)(9, Furniture2Component_Conditional_9_Template, 2, 3, "section", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.grid_banner == null ? null : ctx.data.content.grid_banner.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_list_2 == null ? null : ctx.data.content.product_list_2.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      CarouselModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeBrandComponent,
      ThemeSocialMediaComponent,
      CategoriesComponent,
      TranslateModule,
      TranslatePipe
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Furniture2Component, { className: "Furniture2Component" });
})();

// src/app/components/home/furniture/furniture-dark/furniture-dark.component.ts
var _c026 = () => [];
function FurnitureDarkComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275element(4, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "div")(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.sub_title);
  }
}
function FurnitureDarkComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275element(4, "img", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "div")(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.sub_title);
  }
}
function FurnitureDarkComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "a", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275element(4, "img", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "div")(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_3 == null ? null : ctx_r0.data.content.offer_banner.banner_3.image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_3 == null ? null : ctx_r0.data.content.offer_banner.banner_3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_3 == null ? null : ctx_r0.data.content.offer_banner.banner_3.sub_title);
  }
}
function FurnitureDarkComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 26);
    \u0275\u0275elementStart(1, "section", 27)(2, "div", 5);
    \u0275\u0275element(3, "app-theme-product", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(8, _c026))("slider", false);
  }
}
function FurnitureDarkComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "section", 28)(2, "div");
    \u0275\u0275element(3, "app-categories", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("classic");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(5, _c026))("slider", true)("options", ctx_r0.categoryOptions);
  }
}
function FurnitureDarkComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    \u0275\u0275element(4, "app-image-link", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275element(6, "app-image-link", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 32);
    \u0275\u0275element(8, "app-image-link", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("image-block");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.banner_1)("bgImage", true);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("image-block");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.banner_2)("bgImage", true);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("image-block");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.banner == null ? null : ctx_r0.data.content.banner.banner_3)("bgImage", true);
  }
}
function FurnitureDarkComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "section", 33);
    \u0275\u0275element(2, "app-theme-services", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function FurnitureDarkComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 10)(2, "div", 15);
    \u0275\u0275element(3, "app-theme-title", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "section", 35)(5, "div", 5)(6, "div", 10)(7, "div", 36);
    \u0275\u0275element(8, "app-theme-blog", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance(5);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c026))("blogEffect", "basic-effect");
  }
}
function FurnitureDarkComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19);
    \u0275\u0275element(1, "app-theme-brand", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c026));
  }
}
var FurnitureDarkComponent = class _FurnitureDarkComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.categoryOptions = FurnitureCategorySlider;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      const getProduct$ = this.store.dispatch(new GetProductByIds({
        status: 1,
        approve: 1,
        ids: this.data?.content?.products_ids?.join(","),
        paginate: this.data?.content?.products_ids?.length
      }));
      const getCategory$ = this.store.dispatch(new GetCategories({
        status: 1,
        ids: this.data?.content.categories_icon_list.category_ids?.join(",")
      }));
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      const getBrands$ = this.store.dispatch(new GetBrands({
        status: 1,
        ids: this.data?.content?.brand?.brand_ids?.join(",")
      }));
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("dark");
        document.body.classList.add("dark-demo");
        forkJoin([getProduct$, getCategory$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("dark");
      document.body.classList.remove("dark-demo");
    }
  }
  static {
    this.\u0275fac = function FurnitureDarkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FurnitureDarkComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FurnitureDarkComponent, selectors: [["app-furniture-dark"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 27, vars: 21, consts: [[1, "p-0", "height-100", "sm-responsive"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "absolute-banner", "banner-style-2", "pb-0", "ratio2_1"], [1, "absolute-bg"], [1, "container"], [1, "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-lg-4", "col-sm-6"], [1, "container", "category-button", "button-dark"], [1, "category-bg", "onerow-cat", "ratio3_2"], [1, "row"], [1, "col-xl-3", "d-xl-block", "d-none", "left-panel"], [3, "image", "bgImage"], [1, "col-xl-9"], [1, "container", "p-0"], [1, "col"], [1, "four-product", "row", "dark-box"], [3, "productIds", "slider"], [1, "container", "section-t-space"], [1, "section-b-space"], ["href", "javascript:void(0)"], [1, "collection-banner", "p-right", "text-center", "dark-banner-skeleton"], [1, "absolute-img"], ["alt", "offers", 1, "img-fluid", 3, "src"], [1, "contain-banner", "banner-3"], ["alt", "", 1, "img-fluid", 3, "src"], [3, "title", "type"], [1, "pt-0", "section-b-space"], [1, "section-b-space", "border-section"], [3, "categoryIds", "slider", "options"], [1, "container-fluid", "p-0"], [1, "row", "order-section"], [1, "col-sm-4", "p-0"], [1, "service", "border-section", "small-section"], [3, "services"], [1, "blog", "pt-0", "section-b-space", "left-blog", "ratio2_3"], [1, "col-md-12"], [3, "blogIds", "blogEffect"], [3, "brandIds"]], template: function FurnitureDarkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275template(7, FurnitureDarkComponent_Conditional_7_Template, 11, 3, "div", 7)(8, FurnitureDarkComponent_Conditional_8_Template, 11, 3, "div", 7)(9, FurnitureDarkComponent_Conditional_9_Template, 11, 3, "div", 7);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(10, FurnitureDarkComponent_Conditional_10_Template, 4, 9)(11, FurnitureDarkComponent_Conditional_11_Template, 4, 6, "div", 8)(12, FurnitureDarkComponent_Conditional_12_Template, 9, 12, "div", 9);
        \u0275\u0275elementStart(13, "section", 5)(14, "div", 10)(15, "div", 11);
        \u0275\u0275element(16, "app-image-link", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 10)(20, "div", 15)(21, "div", 16)(22, "div", 15);
        \u0275\u0275element(23, "app-theme-product", 17);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275template(24, FurnitureDarkComponent_Conditional_24_Template, 3, 1, "div", 18)(25, FurnitureDarkComponent_Conditional_25_Template, 9, 5)(26, FurnitureDarkComponent_Conditional_26_Template, 2, 2, "section", 19);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(5);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_3 == null ? null : ctx.data.content.offer_banner.banner_3.status) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.status) ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classMap("image-block");
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_list_2 == null ? null : ctx.data.content.product_list_2.left_panel)("bgImage", false);
        \u0275\u0275advance(7);
        \u0275\u0275styleMap("vertical");
        \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
        \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_list_2 == null ? null : ctx.data.content.product_list_2.products == null ? null : ctx.data.content.product_list_2.products.product_ids) || \u0275\u0275pureFunction0(20, _c026))("slider", false);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 26 : -1);
      }
    }, dependencies: [
      CommonModule,
      CarouselModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeServicesComponent,
      ThemeBlogComponent,
      ThemeBrandComponent,
      CategoriesComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FurnitureDarkComponent, { className: "FurnitureDarkComponent" });
})();

// src/app/components/home/game/game.component.ts
var _c027 = (a0) => ({ "background-image": a0 });
var _c17 = () => [];
function GameComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "app-image-link", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "p", 15)(6, "span", 16);
    \u0275\u0275element(7, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275element(9, "span", 17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2.status) ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1)("bgImage", false);
  }
}
function GameComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "app-image-link", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "p", 15)(6, "span", 16);
    \u0275\u0275element(7, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275element(9, "span", 17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1.status) ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2)("bgImage", false);
  }
}
function GameComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 8)(2, "div", 9);
    \u0275\u0275template(3, GameComponent_Conditional_3_Conditional_3_Template, 10, 3, "div", 10)(4, GameComponent_Conditional_3_Conditional_4_Template, 10, 3, "div", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_1.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2 == null ? null : ctx_r0.data.content.offer_banner_1.banner_2.status) ? 4 : -1);
  }
}
function GameComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 19);
    \u0275\u0275elementStart(1, "section", 20)(2, "div", 8);
    \u0275\u0275element(3, "app-theme-product-tab-section", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids);
  }
}
function GameComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 8);
    \u0275\u0275element(2, "app-image-link", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_2)("bgImage", false);
  }
}
function GameComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 8);
    \u0275\u0275element(2, "app-theme-four-column-product", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function GameComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 23)(2, "div", 8)(3, "div", 24)(4, "div", 25)(5, "div", 26)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c027, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.image_url) + ")"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.main_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.sub_title);
  }
}
function GameComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-theme-title", 19);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275element(3, "app-theme-product", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c17))("slider", true);
  }
}
function GameComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275element(1, "app-theme-brand", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c17));
  }
}
var GameComponent = class _GameComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids?.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$, getCategory$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function GameComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GameComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameComponent, selectors: [["app-game"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0", "effect-cls"], [1, "home-slider"], [3, "banners"], [1, "pb-0", "banner-section", "ratio_45"], [1, "p-0", "banner-sale"], [1, "section-b-space"], [1, "p-0", "game-parallax", "effect-cls"], [1, "title1"], [1, "container"], [1, "row", "g-4"], [3, "ngClass"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "section-b-space", "category-tab-section", "pt-0", "ratio_asos"], [3, "categoryIds"], [3, "data"], [1, "full-banner", "parallax", "text-center", "p-center", "text-center", "bg-size", 3, "ngStyle"], [1, "row"], [1, "col"], [1, "banner-contain"], [3, "productIds", "slider"], [3, "brandIds"]], template: function GameComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, GameComponent_Conditional_3_Template, 5, 2, "section", 3)(4, GameComponent_Conditional_4_Template, 4, 5)(5, GameComponent_Conditional_5_Template, 3, 2, "section", 4)(6, GameComponent_Conditional_6_Template, 3, 3, "section", 5)(7, GameComponent_Conditional_7_Template, 12, 6, "section", 6)(8, GameComponent_Conditional_8_Template, 4, 7, "div", 7)(9, GameComponent_Conditional_9_Template, 2, 2, "section", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_1 == null ? null : ctx.data.content.offer_banner_1.banner_1 == null ? null : ctx.data.content.offer_banner_1.banner_1.status) || (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_1 == null ? null : ctx.data.content.offer_banner_1.banner_2 == null ? null : ctx.data.content.offer_banner_1.banner_2.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_banner == null ? null : ctx.data.content.parallax_banner.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_banner == null ? null : ctx.data.content.parallax_banner.image_url) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeHomeSliderComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeFourColumnProductComponent,
      ThemeProductComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameComponent, { className: "GameComponent" });
})();

// src/app/components/home/goggles/goggles.component.ts
function _forTrack07($index, $item) {
  return this.data;
}
var _c028 = () => [];
function GogglesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 9);
    \u0275\u0275element(2, "app-theme-services", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function GogglesComponent_Conditional_4_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 13);
    \u0275\u0275element(2, "app-image-link", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p", 17)(6, "span", 18);
    \u0275\u0275element(7, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275element(9, "span", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.banners.length === 3 ? "col-lg-4 col-6" : ctx_r0.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function GogglesComponent_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GogglesComponent_Conditional_4_For_4_Conditional_0_Template, 10, 5, "div", 12);
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    \u0275\u0275conditional((banner_r2 == null ? null : banner_r2.status) ? 0 : -1);
  }
}
function GogglesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 3)(2, "div", 11);
    \u0275\u0275repeaterCreate(3, GogglesComponent_Conditional_4_For_4_Template, 1, 1, null, null, _forTrack07, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.banners);
  }
}
function GogglesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 21)(1, "div", 3)(2, "div", 22)(3, "div", 23);
    \u0275\u0275element(4, "app-theme-title", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275element(6, "app-theme-product", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pt-0", ctx_r0.banners.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "luxury");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(8, _c028))("slider", true);
  }
}
function GogglesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "app-image-link", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function GogglesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 3)(2, "div", 22)(3, "div", 28);
    \u0275\u0275element(4, "app-theme-product-tab-section", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("tab_title_class", "tab-title2")("slider", true);
  }
}
function GogglesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-social-media", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c028))("type", "borderless");
  }
}
function GogglesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-brand", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c028));
  }
}
var GogglesComponent = class _GogglesComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      let getProducts$;
      if (this.data?.content?.products_ids.length && this.data?.content?.products_list?.status) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function GogglesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GogglesComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GogglesComponent, selectors: [["app-goggles"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "container"], [1, "section-b-space", "banner-section", "ratio2_1"], [1, "layout9-box", "section-b-space", 3, "pt-0"], [1, "layout9-box"], [1, "instagram", "section-b-space", "ratio_square"], [1, "section-b-space"], [1, "service", "border-section", "small-section", "border-top-0"], [3, "services"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "layout9-box", "section-b-space"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [3, "title", "type"], [1, "col-12"], [3, "productIds", "slider"], [3, "image", "placeholder", "bgImage"], [1, "col"], [3, "categoryIds", "tab_title_class", "slider"], [3, "media", "type"], [3, "brandIds"]], template: function GogglesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, GogglesComponent_Conditional_3_Template, 3, 1, "div", 3)(4, GogglesComponent_Conditional_4_Template, 5, 0, "section", 4)(5, GogglesComponent_Conditional_5_Template, 7, 9, "section", 5)(6, GogglesComponent_Conditional_6_Template, 2, 3, "section", 0)(7, GogglesComponent_Conditional_7_Template, 5, 5, "section", 6)(8, GogglesComponent_Conditional_8_Template, 2, 5, "section", 7)(9, GogglesComponent_Conditional_9_Template, 2, 2, "section", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GogglesComponent, { className: "GogglesComponent" });
})();

// src/app/components/home/gym/gym.component.ts
var _c029 = () => [];
var _c18 = (a0) => ({ "background-image": a0 });
function GymComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 16);
    \u0275\u0275element(2, "app-image-link", 17);
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19)(5, "p", 20)(6, "span", 21);
    \u0275\u0275element(7, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275element(9, "span", 22);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? "col-sm-4" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("bgImage", false);
  }
}
function GymComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 16);
    \u0275\u0275element(2, "app-image-link", 17);
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19)(5, "p", 20)(6, "span", 21);
    \u0275\u0275element(7, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275element(9, "span", 22);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? "col-sm-8" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("bgImage", false);
  }
}
function GymComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-theme-title", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 24)(3, "div", 9);
    \u0275\u0275element(4, "app-theme-blog", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c029))("blogEffect", "basic-effect");
  }
}
function GymComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 9);
    \u0275\u0275element(2, "app-theme-social-media", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("container-fluid");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c029))("type", "borderless");
  }
}
function GymComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15);
    \u0275\u0275element(1, "app-theme-brand", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c029));
  }
}
var GymComponent = class _GymComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids?.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function GymComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GymComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GymComponent, selectors: [["app-gym"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 27, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "gym-banner"], [1, "container-fluid"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [3, "title", "type"], [1, "pt-0", "section-b-space"], [1, "container"], [1, "row", "partition-cls"], [3, "productIds", "slider"], [1, "full-banner", "gym-parallax", "parallax", "p-0", "ratio_square", "bg-size", 3, "ngStyle"], [1, "section-b-space"], [1, "instagram", "ratio_square"], [1, "section-b-space", "blog-wo-bg"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "blog", "pt-0", "ratio2_3"], [3, "blogIds", "blogEffect"], [3, "media", "type"], [3, "brandIds"]], template: function GymComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275template(6, GymComponent_Conditional_6_Template, 10, 3, "div", 6)(7, GymComponent_Conditional_7_Template, 10, 3, "div", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(8, "app-theme-title", 7);
        \u0275\u0275elementStart(9, "section", 8)(10, "div", 9)(11, "div", 10);
        \u0275\u0275element(12, "app-theme-product", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "div", 9);
        \u0275\u0275element(16, "app-theme-title", 7)(17, "app-theme-product", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(18, GymComponent_Conditional_18_Template, 5, 5)(19, GymComponent_Conditional_19_Template, 3, 5, "section", 14)(20, GymComponent_Conditional_20_Template, 2, 2, "section", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list)("type", "basic");
        \u0275\u0275advance(4);
        \u0275\u0275styleMap("vertical");
        \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
        \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(23, _c029))("slider", false);
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(24, _c18, "url(" + ctx.StorageURL + (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_product == null ? null : ctx.data.content.parallax_product.image_url) + ")"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_product)("type", "basic");
        \u0275\u0275advance();
        \u0275\u0275styleMap("vertical");
        \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
        \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_product == null ? null : ctx.data.content.parallax_product.product_ids) || \u0275\u0275pureFunction0(26, _c029))("slider", false);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 20 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeHomeSliderComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GymComponent, { className: "GymComponent" });
})();

// src/app/components/home/jewellery/jewellery-1/jewellery-1.component.ts
var _c030 = () => [];
function Jewellery1Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 9);
    \u0275\u0275element(2, "app-categories", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("standard");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.category_ids) || \u0275\u0275pureFunction0(4, _c030))("slider", true);
  }
}
function Jewellery1Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 11);
    \u0275\u0275elementStart(1, "section", 12)(2, "div", 3);
    \u0275\u0275element(3, "app-theme-product", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "jewellery");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c030))("slider", true);
  }
}
function Jewellery1Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 14);
    \u0275\u0275element(2, "app-theme-services", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("section-t-space", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.status));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("col-lg-3 col-md-6");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners)("type", "simple");
  }
}
function Jewellery1Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275element(1, "app-image-link", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function Jewellery1Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 3);
    \u0275\u0275element(2, "app-theme-title", 11)(3, "app-theme-product-tab-section", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "jewellery");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids);
  }
}
function Jewellery1Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-social-media", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c030))("type", "borderless");
  }
}
function Jewellery1Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-brand", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c030));
  }
}
var Jewellery1Component = class _Jewellery1Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = categorySlider;
    this.categorySlider = JewelleryCategorySlider;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      let categoryIds = this.data?.content.categories.category_ids.concat(this.data?.content.category_product.category_ids);
      let getProduct$;
      if (this.data?.content?.products_ids.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("bg_cls");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("bg_cls");
    }
  }
  static {
    this.\u0275fac = function Jewellery1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Jewellery1Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Jewellery1Component, selectors: [["app-jewellery-1"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0", "height-100"], [1, "home-slider"], [3, "banners"], [1, "container"], [1, "container", 3, "section-t-space"], [1, "p-0"], [1, "section-t-space", "j-box"], [1, "instagram", "section-b-space", "ratio_square"], [1, "section-b-space"], [1, "section-b-space", "border-section", "border-top-0", "border-bottom-0"], [3, "categoryIds", "slider"], [3, "title", "type"], [1, "section-b-space", "pt-0", "j-box"], [3, "productIds", "slider"], [1, "pt-0", "service", "section-b-space"], [3, "services", "type"], [3, "image", "placeholder", "bgImage"], [3, "categoryIds"], [3, "media", "type"], [3, "brandIds"]], template: function Jewellery1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Jewellery1Component_Conditional_3_Template, 3, 5, "div", 3)(4, Jewellery1Component_Conditional_4_Template, 4, 7)(5, Jewellery1Component_Conditional_5_Template, 3, 6, "div", 4)(6, Jewellery1Component_Conditional_6_Template, 2, 3, "section", 5)(7, Jewellery1Component_Conditional_7_Template, 4, 5, "section", 6)(8, Jewellery1Component_Conditional_8_Template, 2, 5, "section", 7)(9, Jewellery1Component_Conditional_9_Template, 2, 2, "section", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      ThemeHomeSliderComponent,
      CategoriesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeServicesComponent,
      ThemeProductTabSectionComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Jewellery1Component, { className: "Jewellery1Component" });
})();

// src/app/components/home/jewellery/jewellery-2/jewellery-2.component.ts
var _c031 = () => [];
function Jewellery2Component_Conditional_3_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 15);
    \u0275\u0275element(2, "app-image-link", 16);
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18)(5, "p", 19)(6, "span", 20);
    \u0275\u0275element(7, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275element(9, "span", 21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const banner_r2 = ctx_r0.$implicit;
    const \u0275$index_14_r3 = ctx_r0.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.filteredBanners.length == 5 && (\u0275$index_14_r3 == 3 || \u0275$index_14_r3 == 4) ? "col-6" : ctx_r3.filteredBanners.length == 4 || ctx_r3.filteredBanners.length == 2 ? "col-6" : "col-md-4 col-6");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function Jewellery2Component_Conditional_3_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-image-link", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function Jewellery2Component_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Jewellery2Component_Conditional_3_For_4_Conditional_0_Template, 10, 3, "div", 13)(1, Jewellery2Component_Conditional_3_For_4_Conditional_1_Template, 2, 2, "div", 14);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.filteredBanners.length >= 2 ? 0 : 1);
  }
}
function Jewellery2Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 12)(2, "div", 7);
    \u0275\u0275repeaterCreate(3, Jewellery2Component_Conditional_3_For_4_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.filteredBanners);
  }
}
function Jewellery2Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "section", 23);
    \u0275\u0275element(2, "app-categories", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("standard");
    \u0275\u0275property("categoryIds", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.categories == null ? null : ctx_r3.data.content.categories.category_ids) || \u0275\u0275pureFunction0(4, _c031))("slider", true);
  }
}
function Jewellery2Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 25);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 4);
    \u0275\u0275element(3, "app-theme-product", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.products_list_1)("type", "simple");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.products_list_1 == null ? null : ctx_r3.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c031));
  }
}
function Jewellery2Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.StorageURL + (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.banner == null ? null : ctx_r3.data.content.banner.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.banner == null ? null : ctx_r3.data.content.banner.image_url);
  }
}
function Jewellery2Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 4);
    \u0275\u0275element(2, "app-theme-services", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("col-lg-3 col-sm-6");
    \u0275\u0275property("services", ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.services == null ? null : ctx_r3.data.content.services.banners);
  }
}
function Jewellery2Component_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 29)(2, "h5", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275element(5, "app-theme-product", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.product_banner == null ? null : ctx_r3.data.content.product_banner.left_panel == null ? null : ctx_r3.data.content.product_banner.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.product_banner == null ? null : ctx_r3.data.content.product_banner.left_panel == null ? null : ctx_r3.data.content.product_banner.left_panel.product_ids) || \u0275\u0275pureFunction0(4, _c031));
  }
}
function Jewellery2Component_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 29)(2, "h5", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275element(5, "app-theme-product", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.product_banner == null ? null : ctx_r3.data.content.product_banner.right_panel == null ? null : ctx_r3.data.content.product_banner.right_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.product_banner == null ? null : ctx_r3.data.content.product_banner.right_panel == null ? null : ctx_r3.data.content.product_banner.right_panel.product_ids) || \u0275\u0275pureFunction0(4, _c031));
  }
}
function Jewellery2Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4)(2, "div", 32);
    \u0275\u0275element(3, "img", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r3.StorageURL + (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.offer_banner_2 == null ? null : ctx_r3.data.content.offer_banner_2.image_url), \u0275\u0275sanitizeUrl);
  }
}
function Jewellery2Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 4)(2, "div", 34)(3, "div", 35);
    \u0275\u0275element(4, "app-theme-product", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.products_list_2 == null ? null : ctx_r3.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(4, _c031))("slider", true);
  }
}
function Jewellery2Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10);
    \u0275\u0275element(1, "app-theme-social-media", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("media", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.social_media) || \u0275\u0275pureFunction0(2, _c031))("type", "borderless");
  }
}
function Jewellery2Component_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-brand", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r3.data == null ? null : ctx_r3.data.content == null ? null : ctx_r3.data.content.brand == null ? null : ctx_r3.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c031));
  }
}
var Jewellery2Component = class _Jewellery2Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = categorySlider;
    this.categorySlider = JewelleryCategorySlider;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let categoryIds = this.data?.content.categories.category_ids;
      let getProduct$;
      if (this.data?.content?.products_ids.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds && categoryIds.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnChanges(change) {
    if (change["data"] && change["data"].currentValue) {
      this.filteredBanners = change["data"]?.currentValue?.content?.offer_banner_1?.banners?.filter((banner) => {
        return banner.status;
      });
    }
  }
  static {
    this.\u0275fac = function Jewellery2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Jewellery2Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Jewellery2Component, selectors: [["app-jewellery-2"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 19, vars: 15, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "banner-section", "ratio2_1"], [1, "container"], [1, "tools-service", "service-w-bg"], [1, "section-b-space", "banner-section"], [1, "row", "g-sm-4", "g-3"], [1, "col-lg-4"], [1, "col-lg-4", "center-slider", "border-0", "ratio2_3"], [1, "instagram", "ratio_square"], [1, "section-b-space"], [1, "container-fluid"], [3, "ngClass"], [1, "col-12"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "section-b-space", "border-section", "border-top-0", "category-rounded"], [3, "categoryIds", "slider"], [3, "title", "type"], [3, "productIds"], [1, "img-fluid", "w-100", 3, "src", "alt"], [3, "services"], [1, "theme-card", "card-border"], [1, "title-border"], [1, "offer-slider"], [1, "mx-0"], ["alt", "offer", 1, "img-fluid", 3, "src"], [1, "row"], [1, "col"], [3, "productIds", "slider"], [3, "media", "type"], [3, "brandIds"]], template: function Jewellery2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Jewellery2Component_Conditional_3_Template, 5, 0, "section", 3)(4, Jewellery2Component_Conditional_4_Template, 3, 5, "div", 4)(5, Jewellery2Component_Conditional_5_Template, 4, 8)(6, Jewellery2Component_Conditional_6_Template, 2, 2, "section", 0)(7, Jewellery2Component_Conditional_7_Template, 3, 3, "section", 5);
        \u0275\u0275elementStart(8, "section", 6)(9, "div", 4)(10, "div", 7);
        \u0275\u0275template(11, Jewellery2Component_Conditional_11_Template, 6, 5, "div", 8);
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275element(13, "app-theme-banner", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, Jewellery2Component_Conditional_14_Template, 6, 5, "div", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, Jewellery2Component_Conditional_15_Template, 4, 1, "section")(16, Jewellery2Component_Conditional_16_Template, 5, 5, "section")(17, Jewellery2Component_Conditional_17_Template, 2, 3, "section", 10)(18, Jewellery2Component_Conditional_18_Template, 2, 2, "section", 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.category_ids == null ? null : ctx.data.content.categories.category_ids.length) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.banner == null ? null : ctx.data.content.banner.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 7 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner == null ? null : ctx.data.content.product_banner.left_panel == null ? null : ctx.data.content.product_banner.left_panel.status) ? 11 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("col-md-12");
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner == null ? null : ctx.data.content.product_banner.center_panel);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner == null ? null : ctx.data.content.product_banner.right_panel == null ? null : ctx.data.content.product_banner.right_panel.status) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.status) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 18 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      CarouselModule,
      ThemeHomeSliderComponent,
      ThemeBannerComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeServicesComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      CategoriesComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Jewellery2Component, { className: "Jewellery2Component" });
})();

// src/app/components/home/jewellery/jewellery-3/jewellery-3.component.ts
function _forTrack08($index, $item) {
  return this.data;
}
var _c032 = () => [];
function Jewellery3Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 13);
    \u0275\u0275element(2, "app-theme-services", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function Jewellery3Component_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275element(2, "app-image-link", 17);
    \u0275\u0275elementStart(3, "div", 18)(4, "div", 19)(5, "p", 20)(6, "span", 21);
    \u0275\u0275element(7, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275element(9, "span", 22);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.banners.length === 3 ? "col-md-4 col-6" : ctx_r0.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function Jewellery3Component_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Jewellery3Component_For_8_Conditional_0_Template, 10, 3, "div", 15);
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    \u0275\u0275conditional((banner_r2 == null ? null : banner_r2.status) ? 0 : -1);
  }
}
function Jewellery3Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 24);
    \u0275\u0275elementStart(1, "section", 25)(2, "div", 5);
    \u0275\u0275element(3, "app-theme-product", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "simple");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(7, _c032))("slider", true)("options", ctx_r0.productSlider4);
  }
}
function Jewellery3Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-image-link", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function Jewellery3Component_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 5)(2, "div", 28)(3, "div", 29);
    \u0275\u0275element(4, "app-theme-title", 24)(5, "app-theme-product-tab-section", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "simple");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("options", ctx_r0.productSlider4)("slider", true);
  }
}
function Jewellery3Component_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 32)(2, "h5", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275element(5, "app-theme-product", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_panel == null ? null : ctx_r0.data.content.product_banner.center_panel.status) ? "col-lg-4" : "col-lg-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.left_panel == null ? null : ctx_r0.data.content.product_banner.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.left_panel == null ? null : ctx_r0.data.content.product_banner.left_panel.product_ids) || \u0275\u0275pureFunction0(5, _c032));
  }
}
function Jewellery3Component_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "app-image-link", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_panel)("bgImage", true);
  }
}
function Jewellery3Component_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 32)(2, "h5", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275element(5, "app-theme-product", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_panel == null ? null : ctx_r0.data.content.product_banner.center_panel.status) ? "col-lg-4" : "col-lg-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.right_panel == null ? null : ctx_r0.data.content.product_banner.right_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.right_panel == null ? null : ctx_r0.data.content.product_banner.right_panel.product_ids) || \u0275\u0275pureFunction0(5, _c032));
  }
}
function Jewellery3Component_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 5)(2, "div", 6);
    \u0275\u0275template(3, Jewellery3Component_Conditional_12_Conditional_3_Template, 6, 6, "div", 15)(4, Jewellery3Component_Conditional_12_Conditional_4_Template, 2, 2, "div", 31)(5, Jewellery3Component_Conditional_12_Conditional_5_Template, 6, 6, "div", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.left_panel == null ? null : ctx_r0.data.content.product_banner.left_panel.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.center_panel == null ? null : ctx_r0.data.content.product_banner.center_panel.status) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner == null ? null : ctx_r0.data.content.product_banner.right_panel == null ? null : ctx_r0.data.content.product_banner.right_panel.status) ? 5 : -1);
  }
}
function Jewellery3Component_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 5)(2, "div", 28)(3, "div", 36);
    \u0275\u0275element(4, "app-theme-title", 24)(5, "app-theme-blog", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "simple");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c032));
  }
}
function Jewellery3Component_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-social-media", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c032))("type", "borderless");
  }
}
function Jewellery3Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275element(1, "app-theme-brand", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c032));
  }
}
var Jewellery3Component = class _Jewellery3Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider4 = productSlider4;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      let categoryIds = this.data?.content?.category_product?.category_ids;
      let getProduct$;
      if (this.data?.content?.products_ids.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Jewellery3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Jewellery3Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Jewellery3Component, selectors: [["app-jewellery-3"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 16, vars: 9, consts: [[1, "p-0", "position-relative", "overflow-hidden"], [1, "home-slider"], [3, "banners"], [1, "tools-service", "service-style-border"], [1, "ratio2_1", "banner-section"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [1, "p-0", "banner-sale"], [1, "pt-0"], [1, "section-b-space", "banner-section"], [1, "blog", "ratio2_3", "left-blog", "pt-0", "section-b-space", "bg-light"], [1, "instagram", "ratio_square"], [1, "section-b-space"], [1, "container", "border-section", "border-top-0", "section-b-space"], [3, "services"], [3, "ngClass"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "pt-0", "section-b-space"], [3, "productIds", "slider", "options"], [3, "image", "placeholder", "bgImage"], [1, "row"], [1, "col"], [3, "categoryIds", "options", "slider"], [1, "col-lg-4", "center-slider", "border-0", "ratio_125"], [1, "theme-card", "card-border"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"], [1, "col-md-12"], [3, "blogIds"], [3, "media", "type"], [3, "brandIds"]], template: function Jewellery3Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Jewellery3Component_Conditional_3_Template, 3, 1, "section", 3);
        \u0275\u0275elementStart(4, "section", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275repeaterCreate(7, Jewellery3Component_For_8_Template, 1, 1, null, null, _forTrack08, true);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, Jewellery3Component_Conditional_9_Template, 4, 8)(10, Jewellery3Component_Conditional_10_Template, 2, 3, "section", 7)(11, Jewellery3Component_Conditional_11_Template, 6, 7, "section", 8)(12, Jewellery3Component_Conditional_12_Template, 6, 3, "section", 9)(13, Jewellery3Component_Conditional_13_Template, 6, 4, "section", 10)(14, Jewellery3Component_Conditional_14_Template, 2, 5, "section", 11)(15, Jewellery3Component_Conditional_15_Template, 2, 2, "section", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.banners);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner == null ? null : ctx.data.content.product_banner.status) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 15 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Jewellery3Component, { className: "Jewellery3Component" });
})();

// src/app/components/home/kids/kids.component.ts
var _c033 = () => [];
function KidsComponent_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11);
    \u0275\u0275element(2, "app-image-link", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "p", 15)(6, "span", 16);
    \u0275\u0275element(7, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275element(9, "span", 17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1)("bgImage", true);
  }
}
function KidsComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11);
    \u0275\u0275element(2, "app-image-link", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14)(5, "p", 15)(6, "span", 16);
    \u0275\u0275element(7, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275element(9, "span", 17);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2)("bgImage", true);
  }
}
function KidsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 7)(2, "div", 8)(3, "div", 9);
    \u0275\u0275template(4, KidsComponent_Conditional_3_Conditional_4_Template, 10, 5, "div", 10)(5, KidsComponent_Conditional_3_Conditional_5_Template, 10, 5, "div", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner_1.status) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner_2.status) ? 5 : -1);
  }
}
function KidsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 19);
    \u0275\u0275elementStart(1, "section", 20)(2, "div", 7);
    \u0275\u0275element(3, "app-theme-product", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c033))("slider", true);
  }
}
function KidsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "app-image-link", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function KidsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 7);
    \u0275\u0275element(2, "app-theme-four-column-product", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function KidsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5);
    \u0275\u0275element(1, "app-theme-social-media", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container-fluid");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c033))("type", "borderless");
  }
}
function KidsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6);
    \u0275\u0275element(1, "app-theme-brand", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c033));
  }
}
var KidsComponent = class _KidsComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids?.length && (this.data?.content?.products_list?.status || this.data?.content?.slider_products?.status)) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function KidsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KidsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KidsComponent, selectors: [["app-kids"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 7, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "absolute-banner", "pb-0", "ratio2_1"], [1, ""], [1, "instagram", "ratio_square"], [1, "section-b-space"], [1, "container"], [1, "absolute-bg"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "section-b-space", "pt-0"], [3, "productIds", "slider"], [3, "image", "placeholder", "bgImage"], [3, "data"], [3, "media", "type"], [3, "brandIds"]], template: function KidsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, KidsComponent_Conditional_3_Template, 6, 2, "section", 3)(4, KidsComponent_Conditional_4_Template, 4, 7)(5, KidsComponent_Conditional_5_Template, 2, 3, "section", 0)(6, KidsComponent_Conditional_6_Template, 3, 3, "section", 4)(7, KidsComponent_Conditional_7_Template, 2, 5, "section", 5)(8, KidsComponent_Conditional_8_Template, 2, 2, "section", 6);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_1 == null ? null : ctx.data.content.offer_banner.banner_1.status) || (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.banner_2 == null ? null : ctx.data.content.offer_banner.banner_2.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 8 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeFourColumnProductComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KidsComponent, { className: "KidsComponent" });
})();

// src/app/components/home/marijuana/marijuana.component.ts
var _c034 = () => [];
var _c19 = (a0) => ({ "background-image": a0 });
function MarijuanaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8)(2, "section", 9);
    \u0275\u0275element(3, "app-theme-services", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("col-lg-3");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners)("type", "simple");
  }
}
function MarijuanaComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner == null ? null : ctx_r0.data.content.offer_banner.banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner.banner_2.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner == null ? null : ctx_r0.data.content.offer_banner.banner.banner_1)("bgImage", true);
  }
}
function MarijuanaComponent_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner == null ? null : ctx_r0.data.content.offer_banner.banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner.banner_1.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner == null ? null : ctx_r0.data.content.offer_banner.banner.banner_2)("bgImage", true);
  }
}
function MarijuanaComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 8)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-title", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 14)(6, "div", 8)(7, "div", 15);
    \u0275\u0275template(8, MarijuanaComponent_Conditional_4_Conditional_8_Template, 2, 5, "div", 16)(9, MarijuanaComponent_Conditional_4_Conditional_9_Template, 2, 5, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner)("type", "luxury");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner == null ? null : ctx_r0.data.content.offer_banner.banner.banner_1 == null ? null : ctx_r0.data.content.offer_banner.banner.banner_1.status) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner == null ? null : ctx_r0.data.content.offer_banner.banner == null ? null : ctx_r0.data.content.offer_banner.banner.banner_2 == null ? null : ctx_r0.data.content.offer_banner.banner.banner_2.status) ? 9 : -1);
  }
}
function MarijuanaComponent_Conditional_5_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18)(2, "div");
    \u0275\u0275element(3, "img", 19);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const details_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.filteredBanners.length == 3 ? "col-md-4" : ctx_r0.filteredBanners.length == 2 ? "col-md-6" : "col-12");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.StorageURL + details_r2.image_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(details_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(details_r2.description);
  }
}
function MarijuanaComponent_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MarijuanaComponent_Conditional_5_For_4_Conditional_0_Template, 8, 5, "div", 16);
  }
  if (rf & 2) {
    const details_r2 = ctx.$implicit;
    \u0275\u0275conditional(details_r2.status ? 0 : -1);
  }
}
function MarijuanaComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 8)(2, "div", 11);
    \u0275\u0275repeaterCreate(3, MarijuanaComponent_Conditional_5_For_4_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredBanners);
  }
}
function MarijuanaComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 8);
    \u0275\u0275element(2, "app-theme-title", 13)(3, "app-theme-product", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "luxury");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(7, _c034))("slider", true)("options", ctx_r0.productSlider4);
  }
}
function MarijuanaComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 8);
    \u0275\u0275element(2, "app-theme-product-tab-section", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(9, _c19, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.image_url) + ")"));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids) || \u0275\u0275pureFunction0(11, _c034))("tab_style", "premium")("showItems", 3)("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product);
  }
}
function MarijuanaComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11)(2, "div", 22);
    \u0275\u0275element(3, "app-theme-title", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "section", 23)(5, "div", 8)(6, "div", 11)(7, "div", 24);
    \u0275\u0275element(8, "app-theme-blog", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("section-t-space", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "luxury");
    \u0275\u0275advance(5);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(6, _c034))("blogEffect", "basic-effect");
  }
}
function MarijuanaComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-brand", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c034));
  }
}
var MarijuanaComponent = class _MarijuanaComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider4 = productSlider4;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids.length && this.data?.content?.products_list?.status) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids.length && this.data?.content.category_product.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnChanges(change) {
    if (change["data"] && change["data"].currentValue) {
      this.filteredBanners = change["data"]?.currentValue?.content?.details_section?.banners?.filter((banner) => {
        return banner.status;
      });
    }
  }
  static {
    this.\u0275fac = function MarijuanaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarijuanaComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarijuanaComponent, selectors: [["app-marijuana"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0", "service_slide"], [1, "home-slider", "text-white"], [3, "banners"], [1, "service-home"], [1, "section-b-space", "detail-cannabis", "bg-grey"], [1, "section-b-space", "ratio_asos", "metro-section", "portfolio-section"], [1, "parallax", "large-section", "tab-left", "border-box", 3, "ngStyle"], [1, "bg-grey", "section-b-space", "small-section"], [1, "container"], [1, "service", "small-section", "pb-0"], [3, "services", "type"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [3, "title", "type"], [1, "pt-0", "section-b-space", "banner-section", "ratio_45", "banner-section"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [3, "image", "bgImage"], [1, "detail_section"], [3, "src"], [3, "productIds", "slider", "options"], [3, "categoryIds", "tab_style", "showItems", "title"], [1, "col"], [1, "blog", "pt-0", "section-b-space", "ratio3_2"], [1, "col-md-12"], [3, "blogIds", "blogEffect"], [3, "brandIds"]], template: function MarijuanaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, MarijuanaComponent_Conditional_3_Template, 4, 4, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MarijuanaComponent_Conditional_4_Template, 10, 4)(5, MarijuanaComponent_Conditional_5_Template, 5, 0, "section", 4)(6, MarijuanaComponent_Conditional_6_Template, 4, 8, "section", 5)(7, MarijuanaComponent_Conditional_7_Template, 3, 12, "section", 6)(8, MarijuanaComponent_Conditional_8_Template, 9, 7)(9, MarijuanaComponent_Conditional_9_Template, 2, 2, "section", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners.length ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgStyle,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeBrandComponent,
      ThemeProductTabSectionComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarijuanaComponent, { className: "MarijuanaComponent" });
})();

// src/app/components/home/marketplace/marketplace-1/marketplace-1.component.ts
function _forTrack09($index, $item) {
  return this.data;
}
var _c035 = () => [];
function Marketplace1Component_Conditional_3_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275element(2, "app-image-link", 13);
    \u0275\u0275elementStart(3, "div", 14)(4, "div", 15)(5, "p", 16)(6, "span", 17);
    \u0275\u0275element(7, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275element(9, "span", 18);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.banners.length == 4 ? "col-lg-3 col-6" : ctx_r1.banners.length == 3 ? "col-lg-4 col-6" : ctx_r1.banners.length == 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function Marketplace1Component_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Marketplace1Component_Conditional_3_For_4_Conditional_0_Template, 10, 3, "div", 11);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function Marketplace1Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 9)(2, "div", 10);
    \u0275\u0275repeaterCreate(3, Marketplace1Component_Conditional_3_For_4_Template, 1, 1, null, null, _forTrack09, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function Marketplace1Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 20);
    \u0275\u0275elementStart(1, "section", 21)(2, "div", 6)(3, "div");
    \u0275\u0275element(4, "app-theme-product", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_1)("type", "basic");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list_1 == null ? null : ctx_r1.data.content.product_list_1.product_ids) || \u0275\u0275pureFunction0(8, _c035))("slider", false);
  }
}
function Marketplace1Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "app-image-link", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2)("bgImage", false);
  }
}
function Marketplace1Component_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 26)(2, "h5", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275element(5, "app-theme-product", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.left_panel == null ? null : ctx_r1.data.content.category_product.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.left_panel == null ? null : ctx_r1.data.content.category_product.left_panel.product_ids) || \u0275\u0275pureFunction0(4, _c035));
  }
}
function Marketplace1Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 6)(2, "div", 10);
    \u0275\u0275template(3, Marketplace1Component_Conditional_6_Conditional_3_Template, 6, 5, "div", 23);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275element(5, "app-theme-product-tab-section", 24);
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275element(7, "app-image-link", 13);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.left_panel == null ? null : ctx_r1.data.content.category_product.left_panel.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.left_panel == null ? null : ctx_r1.data.content.category_product.left_panel.status) ? "col-xl-8 col-lg-8 col-md-12" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("product-m");
    \u0275\u0275property("categoryIds", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.right_panel == null ? null : ctx_r1.data.content.category_product.right_panel.product_category == null ? null : ctx_r1.data.content.category_product.right_panel.product_category.category_ids)("tab_style", "classic")("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.right_panel == null ? null : ctx_r1.data.content.category_product.right_panel.product_category)("slider", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.right_panel == null ? null : ctx_r1.data.content.category_product.right_panel.product_banner)("bgImage", false);
  }
}
function Marketplace1Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "section", 30);
    \u0275\u0275element(2, "app-theme-services", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.services == null ? null : ctx_r1.data.content.services.banners);
  }
}
function Marketplace1Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-social-media", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("media", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.social_media) || \u0275\u0275pureFunction0(2, _c035))("type", "borderless");
  }
}
function Marketplace1Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-brand", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c035));
  }
}
var Marketplace1Component = class _Marketplace1Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider6 = productSlider6;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner_1?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_1];
      }
      if (this.data?.content?.offer_banner_1?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_2];
      }
      if (this.data?.content?.offer_banner_1?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_3];
      }
      if (this.data?.content?.offer_banner_1?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_4];
      }
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      ;
      let getCategory$;
      if (this.data?.content.category_product.right_panel.product_category.status && this.data?.content.category_product.right_panel.product_category.category_ids?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.right_panel.product_category.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      ;
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      ;
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Marketplace1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Marketplace1Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Marketplace1Component, selectors: [["app-marketplace-1"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0", "layout-7"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "banner-section", "ratio2_1"], [1, "p-0"], [1, "tools_product", "bg-title", "section-b-space"], [1, "container"], [1, "instagram", "ratio_square"], [1, "section-b-space"], [1, "container-fluid"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "pt-0", "section-b-space"], [3, "productIds", "slider"], [1, "col-xl-4", "col-lg-4", "col-md-12"], [3, "categoryIds", "tab_style", "title", "slider"], [1, "banner-tools"], [1, "theme-card"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"], [1, "service", "border-section", "small-section"], [3, "services"], [3, "media", "type"], [3, "brandIds"]], template: function Marketplace1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Marketplace1Component_Conditional_3_Template, 5, 0, "section", 3)(4, Marketplace1Component_Conditional_4_Template, 5, 9)(5, Marketplace1Component_Conditional_5_Template, 2, 2, "section", 4)(6, Marketplace1Component_Conditional_6_Template, 8, 12, "section", 5)(7, Marketplace1Component_Conditional_7_Template, 3, 1, "div", 6)(8, Marketplace1Component_Conditional_8_Template, 2, 3, "section", 7)(9, Marketplace1Component_Conditional_9_Template, 2, 2, "section", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_list_1 == null ? null : ctx.data.content.product_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_list_1 == null ? null : ctx.data.content.product_list_1.product_ids) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeServicesComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Marketplace1Component, { className: "Marketplace1Component" });
})();

// src/app/components/home/marketplace/marketplace-2/marketplace-2.component.ts
function _forTrack010($index, $item) {
  return this.data;
}
var _c036 = () => [];
function Marketplace2Component_Conditional_3_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "app-image-link", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20)(5, "p", 21)(6, "span", 22);
    \u0275\u0275element(7, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 24);
    \u0275\u0275element(9, "span", 23);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.banners.length == 4 ? "col-lg-3 col-6" : ctx_r1.banners.length == 3 ? "col-lg-4 col-6" : ctx_r1.banners.length == 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function Marketplace2Component_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Marketplace2Component_Conditional_3_For_4_Conditional_0_Template, 10, 3, "div", 16);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function Marketplace2Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 14)(2, "div", 15);
    \u0275\u0275repeaterCreate(3, Marketplace2Component_Conditional_3_For_4_Template, 1, 1, null, null, _forTrack010, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function Marketplace2Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 25);
    \u0275\u0275elementStart(1, "section", 26)(2, "div", 6)(3, "div", 7);
    \u0275\u0275element(4, "app-theme-product", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_1)("type", "fraunces");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_1 == null ? null : ctx_r1.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(8, _c036))("slider", false);
  }
}
function Marketplace2Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 28)(2, "div", 6);
    \u0275\u0275element(3, "app-theme-title", 29);
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275element(5, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 31)(8, "div", 32);
    \u0275\u0275element(9, "app-theme-product", 27);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_2)("type", "fraunces")("textWhite", true)("space", false);
    \u0275\u0275advance(6);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_2 == null ? null : ctx_r1.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(8, _c036))("slider", true);
  }
}
function Marketplace2Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "app-theme-title", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275element(3, "app-theme-product", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_3)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_3 == null ? null : ctx_r1.data.content.products_list_3.product_ids) || \u0275\u0275pureFunction0(6, _c036))("slider", true);
  }
}
function Marketplace2Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "app-theme-title", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275element(3, "app-theme-product", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_4)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_4 == null ? null : ctx_r1.data.content.products_list_4.product_ids) || \u0275\u0275pureFunction0(6, _c036))("slider", true);
  }
}
function Marketplace2Component_Conditional_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_2.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_1)("bgImage", true);
  }
}
function Marketplace2Component_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_1 == null ? null : ctx_r1.data.content.offer_banner_2.banner_1.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_2)("bgImage", true);
  }
}
function Marketplace2Component_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 34)(1, "div", 6)(2, "div", 35);
    \u0275\u0275template(3, Marketplace2Component_Conditional_11_Conditional_3_Template, 2, 5, "div", 36)(4, Marketplace2Component_Conditional_11_Conditional_4_Template, 2, 5, "div", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pt-0", !(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_1 == null ? null : ctx_r1.data.content.offer_banner_2.banner_1.status) && !(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_2.status));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_1 == null ? null : ctx_r1.data.content.offer_banner_2.banner_1.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.banner_2.status) ? 4 : -1);
  }
}
function Marketplace2Component_Conditional_12_Template(rf, ctx) {
}
function Marketplace2Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 6);
    \u0275\u0275element(2, "app-theme-services", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("col-lg-3 col-md-6");
    \u0275\u0275property("services", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.services == null ? null : ctx_r1.data.content.services.banners)("type", "simple");
  }
}
function Marketplace2Component_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "app-theme-title", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275element(3, "app-theme-product", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_5)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_5 == null ? null : ctx_r1.data.content.products_list_5.product_ids) || \u0275\u0275pureFunction0(6, _c036))("slider", true);
  }
}
function Marketplace2Component_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "app-theme-title", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275element(3, "app-theme-product", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_6)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_6 == null ? null : ctx_r1.data.content.products_list_6.product_ids) || \u0275\u0275pureFunction0(6, _c036))("slider", true);
  }
}
function Marketplace2Component_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 6);
    \u0275\u0275element(2, "app-image-link", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-fluid w-100");
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_3);
  }
}
function Marketplace2Component_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9);
    \u0275\u0275element(1, "app-theme-brand", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c036));
  }
}
var Marketplace2Component = class _Marketplace2Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner_1?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_1];
      }
      if (this.data?.content?.offer_banner_1?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_2];
      }
      if (this.data?.content?.offer_banner_1?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_3];
      }
      if (this.data?.content?.offer_banner_1?.banner_4?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_4];
      }
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("header-theme-color");
        forkJoin([getProduct$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("header-theme-color");
    }
  }
  static {
    this.\u0275fac = function Marketplace2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Marketplace2Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Marketplace2Component, selectors: [["app-marketplace-2"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 18, consts: [[1, "pt-0", "height-65"], [1, "home-slider"], [3, "banners"], [1, "pt-0", "ratio3_2", "banner-section"], [1, "p-0", "product-vertical", "overflow-hidden"], [1, "ratio_square"], [1, "container"], [1, "row"], [1, "pb-0", "ratio2_1", "banner-section", 3, "pt-0"], [1, "section-b-space"], [3, "data"], [1, "service", "section-b-space", "bg-light"], [1, "section-b-space", "ratio_square"], [1, "pt-0"], [1, "container-fluid", "p-0"], [1, "row", "mx-0"], [1, "col-sm-6", "p-0", 3, "ngClass"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "pt-0", "section-b-space", "ratio_square"], [3, "productIds", "slider"], [1, "full-banner", "parallax", "text-center", "p-left", "bg-theme"], [3, "title", "type", "textWhite", "space"], [1, "col-lg-6", "m-auto"], [1, "col-12"], [1, "slide-3", "full-box"], [1, "col-12", "section-t-space"], [1, "pb-0", "ratio2_1", "banner-section"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [3, "services", "type"], [3, "image"], [3, "brandIds"]], template: function Marketplace2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Marketplace2Component_Conditional_3_Template, 5, 0, "section", 3)(4, Marketplace2Component_Conditional_4_Template, 5, 9)(5, Marketplace2Component_Conditional_5_Template, 10, 9, "section", 4);
        \u0275\u0275elementStart(6, "section", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275template(9, Marketplace2Component_Conditional_9_Template, 4, 7)(10, Marketplace2Component_Conditional_10_Template, 4, 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, Marketplace2Component_Conditional_11_Template, 5, 4, "section", 8)(12, Marketplace2Component_Conditional_12_Template, 0, 0);
        \u0275\u0275elementStart(13, "section", 9)(14, "div", 6);
        \u0275\u0275element(15, "app-theme-four-column-product", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, Marketplace2Component_Conditional_16_Template, 3, 4, "section", 11);
        \u0275\u0275elementStart(17, "section", 12)(18, "div", 6)(19, "div", 7);
        \u0275\u0275template(20, Marketplace2Component_Conditional_20_Template, 4, 7)(21, Marketplace2Component_Conditional_21_Template, 4, 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(22, Marketplace2Component_Conditional_22_Template, 3, 3, "section", 13)(23, Marketplace2Component_Conditional_23_Template, 2, 2, "section", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) ? 5 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.product_ids) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_4 == null ? null : ctx.data.content.products_list_4.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_4 == null ? null : ctx.data.content.products_list_4.product_ids) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.status) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status) ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275styleMap("horizontal");
        \u0275\u0275property("data", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("pt-0", !(ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_5 == null ? null : ctx.data.content.products_list_5.status) || !(ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_6 == null ? null : ctx.data.content.products_list_6.status));
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_5 == null ? null : ctx.data.content.products_list_5.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_5 == null ? null : ctx.data.content.products_list_5.product_ids) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_6 == null ? null : ctx.data.content.products_list_6.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_6 == null ? null : ctx.data.content.products_list_6.product_ids) ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_3 == null ? null : ctx.data.content.offer_banner_3.status) ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 23 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeProductComponent,
      ThemeTitleComponent,
      ThemeFourColumnProductComponent,
      ThemeServicesComponent,
      ImageLinkComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Marketplace2Component, { className: "Marketplace2Component" });
})();

// src/app/components/home/marketplace/marketplace-3/marketplace-3.component.ts
function _forTrack011($index, $item) {
  return this.data;
}
var _c037 = () => [];
function Marketplace3Component_Conditional_4_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 10);
    \u0275\u0275element(2, "app-image-link", 11);
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "p", 14)(6, "span", 15);
    \u0275\u0275element(7, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 17);
    \u0275\u0275element(9, "span", 16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.banners.length === 3 ? "col-md-4 col-6" : ctx_r1.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function Marketplace3Component_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Marketplace3Component_Conditional_4_For_4_Conditional_0_Template, 10, 5, "div", 9);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function Marketplace3Component_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 0)(2, "div", 8);
    \u0275\u0275repeaterCreate(3, Marketplace3Component_Conditional_4_For_4_Template, 1, 1, null, null, _forTrack011, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function Marketplace3Component_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "nav");
    \u0275\u0275element(2, "app-categories", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.categories == null ? null : ctx_r1.data.content.categories_products.left_panel.categories.category_ids) || \u0275\u0275pureFunction0(3, _c037));
  }
}
function Marketplace3Component_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "h5", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275element(4, "app-theme-product", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list.product_ids) || \u0275\u0275pureFunction0(4, _c037));
  }
}
function Marketplace3Component_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "app-image-link", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.banner);
  }
}
function Marketplace3Component_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 0)(2, "div", 19)(3, "div", 36);
    \u0275\u0275element(4, "app-theme-title", 37);
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275element(6, "app-theme-product", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.products_list)("type", "icon")("textWhite", true)("space", false);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.products_list == null ? null : ctx_r1.data.content.categories_products.right_panel.products_list.product_ids) || \u0275\u0275pureFunction0(8, _c037))("slider", true);
  }
}
function Marketplace3Component_Conditional_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 0);
    \u0275\u0275element(2, "app-theme-product-tab-section", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.category_product == null ? null : ctx_r1.data.content.categories_products.right_panel.category_product.category_ids)("tab_style", "simple")("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.category_product);
  }
}
function Marketplace3Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 18)(2, "div", 0)(3, "div", 19)(4, "div", 20)(5, "div", 21);
    \u0275\u0275template(6, Marketplace3Component_Conditional_5_Conditional_6_Template, 3, 4, "div", 22);
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275template(8, Marketplace3Component_Conditional_5_Conditional_8_Template, 5, 5, "div", 24)(9, Marketplace3Component_Conditional_5_Conditional_9_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 26)(11, "div", 27);
    \u0275\u0275template(12, Marketplace3Component_Conditional_5_Conditional_12_Template, 7, 9, "div", 28);
    \u0275\u0275elementStart(13, "div", 29)(14, "div", 0);
    \u0275\u0275element(15, "app-theme-banner", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, Marketplace3Component_Conditional_5_Conditional_16_Template, 3, 5, "div", 30);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.categories == null ? null : ctx_r1.data.content.categories_products.left_panel.categories.status) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list.status) && (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list == null ? null : ctx_r1.data.content.categories_products.left_panel.products_list.product_ids) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.left_panel == null ? null : ctx_r1.data.content.categories_products.left_panel.banner == null ? null : ctx_r1.data.content.categories_products.left_panel.banner.status) ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.products_list == null ? null : ctx_r1.data.content.categories_products.right_panel.products_list.status) ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("col-md-6");
    \u0275\u0275property("banners", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.offer_banner);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.category_product == null ? null : ctx_r1.data.content.categories_products.right_panel.category_product.status) && (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.categories_products == null ? null : ctx_r1.data.content.categories_products.right_panel == null ? null : ctx_r1.data.content.categories_products.right_panel.category_product == null ? null : ctx_r1.data.content.categories_products.right_panel.category_product.category_ids) ? 16 : -1);
  }
}
function Marketplace3Component_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 0)(2, "div", 19)(3, "div", 41);
    \u0275\u0275element(4, "app-theme-blog", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("blogIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.featured_blogs == null ? null : ctx_r1.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(1, _c037));
  }
}
function Marketplace3Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-brand", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c037));
  }
}
var Marketplace3Component = class _Marketplace3Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let categoryIds = this.data?.content?.categories_products?.left_panel?.categories?.category_ids;
      this.banners = [];
      if (this.data?.content?.offer_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_1];
      }
      if (this.data?.content?.offer_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_2];
      }
      if (this.data?.content?.offer_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner?.banner_3];
      }
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlogs$;
      if (this.data?.content?.featured_blogs.blog_ids.length && this.data?.content?.featured_blogs?.status) {
        getBlogs$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content.featured_blogs.blog_ids?.join(",")
        }));
      } else {
        getBlogs$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBlogs$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Marketplace3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Marketplace3Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Marketplace3Component, selectors: [["app-marketplace-3"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 5, consts: [[1, "container"], [1, "small-section", "pb-0", "pt-res-0"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "banner-section", "ratio2_1"], [1, "small-section", "pb-0"], [1, "blog", "ratio2_3", "left-blog", "section-b-space", "overflow-hidden"], [1, "section-b-space", "bg-light"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [1, "collection-wrapper"], [1, "row"], [1, "col-xl-3", "collection-filter"], [1, "sticky-top-section"], [1, "sidenav", "marketplace-sidebar", "svg-icon-menu", "wo-bg"], [1, "d-xl-block", "d-none"], [1, "theme-card", "demo-card"], [1, "collection-sidebar-banner"], [1, "collection-content", "col-xl-9", "p-0-xl"], [1, "page-main-content"], [1, "ratio_115"], [1, "pb-0", "ratio2_1", "small-section"], [1, "ratio_115", "bg-title", "small-section", "pb-0", "wo-bg"], [3, "categoryIds"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"], [3, "image"], [1, "col-12"], [3, "title", "type", "textWhite", "space"], [1, ""], [3, "productIds", "slider"], [3, "categoryIds", "tab_style", "title"], [1, "col-md-12"], [3, "blogIds"], [3, "brandIds"]], template: function Marketplace3Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-theme-home-slider", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(4, Marketplace3Component_Conditional_4_Template, 5, 0, "section", 4)(5, Marketplace3Component_Conditional_5_Template, 17, 8, "section", 5)(6, Marketplace3Component_Conditional_6_Template, 5, 2, "section", 6)(7, Marketplace3Component_Conditional_7_Template, 2, 2, "section", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_products == null ? null : ctx.data.content.categories_products.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 7 : -1);
      }
    }, dependencies: [
      ThemeHomeSliderComponent,
      ThemeBannerComponent,
      CategoriesComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Marketplace3Component, { className: "Marketplace3Component" });
})();

// src/app/components/home/marketplace/marketplace-4/marketplace-4.component.ts
var _c038 = () => [];
var _c110 = (a0) => ({ "background-image": a0 });
function Marketplace4Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 5)(2, "div", 19);
    \u0275\u0275element(3, "app-theme-services", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("col-lg-3 col-md-6");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function Marketplace4Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "app-theme-title", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275element(3, "app-theme-product", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(6, _c038))("slider", true);
  }
}
function Marketplace4Component_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-image-link", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_1 == null ? null : ctx_r0.data.content.product_banner_1.left_panel)("bgImage", true);
  }
}
function Marketplace4Component_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-theme-product", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_1 == null ? null : ctx_r0.data.content.product_banner_1.left_panel == null ? null : ctx_r0.data.content.product_banner_1.left_panel.status) ? "col-lg-9 col-sm-6 col-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_1 == null ? null : ctx_r0.data.content.product_banner_1.right_panel == null ? null : ctx_r0.data.content.product_banner_1.right_panel.product_ids) || \u0275\u0275pureFunction0(5, _c038))("slider", true);
  }
}
function Marketplace4Component_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6)(4, "div", 26)(5, "div", 27)(6, "h5", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275element(9, "app-theme-product", 30);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c110, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products == null ? null : ctx_r0.data.content.slider_products.image_url) + ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products == null ? null : ctx_r0.data.content.slider_products.image_url), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products == null ? null : ctx_r0.data.content.slider_products.product_slider_1 == null ? null : ctx_r0.data.content.slider_products.product_slider_1.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products == null ? null : ctx_r0.data.content.slider_products.product_slider_1 == null ? null : ctx_r0.data.content.slider_products.product_slider_1.product_ids) || \u0275\u0275pureFunction0(8, _c038));
  }
}
function Marketplace4Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "app-theme-title", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275element(3, "app-theme-product", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(6, _c038))("slider", true);
  }
}
function Marketplace4Component_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 31)(2, "h5", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275element(5, "app-theme-product", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_2 == null ? null : ctx_r0.data.content.product_banner_2.left_panel == null ? null : ctx_r0.data.content.product_banner_2.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_2 == null ? null : ctx_r0.data.content.product_banner_2.left_panel == null ? null : ctx_r0.data.content.product_banner_2.left_panel.product_ids) || \u0275\u0275pureFunction0(4, _c038));
  }
}
function Marketplace4Component_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 31)(2, "h5", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29);
    \u0275\u0275element(5, "app-theme-product", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_2 == null ? null : ctx_r0.data.content.product_banner_2.right_panel == null ? null : ctx_r0.data.content.product_banner_2.right_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_2 == null ? null : ctx_r0.data.content.product_banner_2.right_panel == null ? null : ctx_r0.data.content.product_banner_2.right_panel.product_ids) || \u0275\u0275pureFunction0(4, _c038));
  }
}
function Marketplace4Component_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-image-link", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_3 == null ? null : ctx_r0.data.content.product_banner_3.left_panel)("bgImage", true);
  }
}
function Marketplace4Component_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-theme-product", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_3 == null ? null : ctx_r0.data.content.product_banner_3.left_panel == null ? null : ctx_r0.data.content.product_banner_3.left_panel.status) ? "col-lg-9 col-sm-6 col-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_banner_3 == null ? null : ctx_r0.data.content.product_banner_3.right_panel == null ? null : ctx_r0.data.content.product_banner_3.right_panel.product_ids) || \u0275\u0275pureFunction0(5, _c038))("slider", true);
  }
}
function Marketplace4Component_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "app-theme-title", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 32);
    \u0275\u0275element(3, "app-theme-product", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.product_ids) || \u0275\u0275pureFunction0(6, _c038))("slider", true);
  }
}
function Marketplace4Component_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17);
    \u0275\u0275element(1, "app-theme-brand", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(2, _c038))("bgLight", true);
  }
}
function Marketplace4Component_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18);
    \u0275\u0275element(1, "app-theme-social-media", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(2, _c038))("type", "borderless");
  }
}
var Marketplace4Component = class _Marketplace4Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("header-theme-color");
        forkJoin([getProduct$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("header-theme-color");
    }
  }
  static {
    this.\u0275fac = function Marketplace4Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Marketplace4Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Marketplace4Component, selectors: [["app-marketplace-4"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 17, consts: [[1, "p-0", "layout-7"], [1, "home-slider"], [3, "banners"], [1, "banner-padding", "absolute-banner", "pb-0", "tools-service"], [1, "section-b-space"], [1, "container"], [1, "row"], [1, "pt-0", "section-b-space"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-6"], [1, "col-md-8", 3, "ngClass"], [1, "section-b-space", "bg-size", 3, "ngStyle"], [1, "row", "g-sm-4", "g-3"], [1, "col-lg-4"], [1, "col-lg-4", "center-slider", "border-0", "ratio2_3"], [1, "pt-0"], [1, "row", "section-b-space"], [1, "col-lg-3", "col-md-4", "col-sm-5", "col-6"], [1, "tools-brand"], [1, "instagram", "ratio_square"], [1, "absolute-bg"], [3, "services"], [1, "col-12"], [3, "title", "type"], [3, "productIds", "slider"], [3, "image", "bgImage"], ["alt", "", 1, "bg-img", 3, "src"], [1, "col-lg-4", "col-md-6"], [1, "theme-card", "card-border", "bg-white"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"], [1, "theme-card", "card-border"], [1, "col"], [3, "brandIds", "bgLight"], [3, "media", "type"]], template: function Marketplace4Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, Marketplace4Component_Conditional_3_Template, 4, 3, "section", 3);
        \u0275\u0275elementStart(4, "section", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275template(7, Marketplace4Component_Conditional_7_Template, 4, 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "section", 7)(9, "div", 5)(10, "div", 6);
        \u0275\u0275template(11, Marketplace4Component_Conditional_11_Template, 2, 4, "div", 8)(12, Marketplace4Component_Conditional_12_Template, 2, 6, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(13, Marketplace4Component_Conditional_13_Template, 10, 9, "section", 10);
        \u0275\u0275elementStart(14, "section")(15, "div", 5)(16, "div", 6);
        \u0275\u0275template(17, Marketplace4Component_Conditional_17_Template, 4, 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "section", 4)(19, "div", 5)(20, "div", 11);
        \u0275\u0275template(21, Marketplace4Component_Conditional_21_Template, 6, 5, "div", 12);
        \u0275\u0275elementStart(22, "div", 13);
        \u0275\u0275element(23, "app-theme-banner", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, Marketplace4Component_Conditional_24_Template, 6, 5, "div", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "section", 14)(26, "div", 5)(27, "div", 15);
        \u0275\u0275template(28, Marketplace4Component_Conditional_28_Template, 2, 4, "div", 16)(29, Marketplace4Component_Conditional_29_Template, 2, 6, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 6);
        \u0275\u0275template(31, Marketplace4Component_Conditional_31_Template, 4, 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(32, Marketplace4Component_Conditional_32_Template, 2, 3, "section", 17)(33, Marketplace4Component_Conditional_33_Template, 2, 3, "section", 18);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 3 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 7 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner_1 == null ? null : ctx.data.content.product_banner_1.left_panel == null ? null : ctx.data.content.product_banner_1.left_panel.status) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner_1 == null ? null : ctx.data.content.product_banner_1.right_panel == null ? null : ctx.data.content.product_banner_1.right_panel.status) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status) ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) ? 17 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner_2 == null ? null : ctx.data.content.product_banner_2.left_panel == null ? null : ctx.data.content.product_banner_2.left_panel.status) ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("col-md-12");
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner_2 == null ? null : ctx.data.content.product_banner_2.center_panel);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner_2 == null ? null : ctx.data.content.product_banner_2.right_panel == null ? null : ctx.data.content.product_banner_2.right_panel.status) ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner_3 == null ? null : ctx.data.content.product_banner_3.left_panel == null ? null : ctx.data.content.product_banner_3.left_panel.status) ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_banner_3 == null ? null : ctx.data.content.product_banner_3.right_panel == null ? null : ctx.data.content.product_banner_3.right_panel.status) ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.product_ids) ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 32 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 33 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeBannerComponent,
      ThemeBrandComponent,
      ThemeSocialMediaComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Marketplace4Component, { className: "Marketplace4Component" });
})();

// src/app/components/home/medical/medical.component.ts
var _c039 = () => [];
function MedicalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 9);
    \u0275\u0275element(2, "app-categories", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("digital");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.category_ids) || \u0275\u0275pureFunction0(4, _c039))("slider", true);
  }
}
function MedicalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 11);
    \u0275\u0275elementStart(1, "section", 12)(2, "div", 3);
    \u0275\u0275element(3, "app-theme-product-tab-section", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("showItems", 5);
  }
}
function MedicalComponent_Conditional_5_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-image-link", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const banner_r3 = ctx_r1.$implicit;
    const \u0275$index_30_r4 = ctx_r1.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275$index_30_r4 == 0 || \u0275$index_30_r4 == 1 ? "col-sm-6" : \u0275$index_30_r4 > 1 && ctx_r0.filteredBanners.length % 2 == 0 ? "col-sm-6" : \u0275$index_30_r4 > 1 && ctx_r0.filteredBanners.length == 5 ? "col-md-4 col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function MedicalComponent_Conditional_5_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "app-image-link", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function MedicalComponent_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MedicalComponent_Conditional_5_For_4_Conditional_0_Template, 2, 3, "div", 16)(1, MedicalComponent_Conditional_5_For_4_Conditional_1_Template, 2, 2, "div", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.filteredBanners.length >= 2 ? 0 : 1);
  }
}
function MedicalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 14)(2, "div", 15);
    \u0275\u0275repeaterCreate(3, MedicalComponent_Conditional_5_For_4_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.status) && !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.status) ? "section-t-space" : "pt-0");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredBanners);
  }
}
function MedicalComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 20);
    \u0275\u0275element(2, "app-image-link", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_1 == null ? null : ctx_r0.data.content.column_banner_product.product_list_1.status) ? "col-xl-3 col-sm-6" : "col-sm-6");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-part h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_1)("bgImage", true);
  }
}
function MedicalComponent_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 21)(2, "h5", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275element(5, "app-theme-product", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_1 == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_1.status) ? "col-xl-3 col-sm-6" : "col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_1 == null ? null : ctx_r0.data.content.column_banner_product.product_list_1.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_1 == null ? null : ctx_r0.data.content.column_banner_product.product_list_1.product_ids) || \u0275\u0275pureFunction0(5, _c039));
  }
}
function MedicalComponent_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 20);
    \u0275\u0275element(2, "app-image-link", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_2 == null ? null : ctx_r0.data.content.column_banner_product.product_list_2.status) ? "col-xl-3 col-sm-6" : "col-sm-6");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("img-part h-100");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_2)("bgImage", true);
  }
}
function MedicalComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 21)(2, "h5", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275element(5, "app-theme-product", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_2 == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_2.status) ? "col-xl-3 col-sm-6" : "col-sm-6");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_2 == null ? null : ctx_r0.data.content.column_banner_product.product_list_2.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_2 == null ? null : ctx_r0.data.content.column_banner_product.product_list_2.product_ids) || \u0275\u0275pureFunction0(5, _c039));
  }
}
function MedicalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 3)(2, "div", 19);
    \u0275\u0275template(3, MedicalComponent_Conditional_6_Conditional_3_Template, 3, 5, "div", 16)(4, MedicalComponent_Conditional_6_Conditional_4_Template, 6, 6, "div", 16)(5, MedicalComponent_Conditional_6_Conditional_5_Template, 3, 5, "div", 16)(6, MedicalComponent_Conditional_6_Conditional_6_Template, 6, 6, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_1 == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_1.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_1 == null ? null : ctx_r0.data.content.column_banner_product.product_list_1.status) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_2 == null ? null : ctx_r0.data.content.column_banner_product.offer_banner_2.status) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.column_banner_product == null ? null : ctx_r0.data.content.column_banner_product.product_list_2 == null ? null : ctx_r0.data.content.column_banner_product.product_list_2.status) ? 6 : -1);
  }
}
function MedicalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 25);
    \u0275\u0275element(2, "app-theme-title", 11)(3, "app-theme-blog", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c039));
  }
}
function MedicalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 3)(2, "div", 27);
    \u0275\u0275element(3, "app-theme-services", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("col-lg-3 col-sm-6");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function MedicalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8);
    \u0275\u0275element(1, "app-theme-brand", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c039));
  }
}
var MedicalComponent = class _MedicalComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = categorySlider;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let category = [...new Set(this.data?.content.categories.category_ids.concat(this.data.content.category_product.category_ids))];
      let getProducts$;
      if (this.data?.content?.products_ids.length && (this.data?.content?.column_banner_product?.product_list_1?.status || this.data?.content?.column_banner_product?.product_list_2?.status)) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (category.length && (this.data?.content?.categories?.status || this.data?.content?.category_product?.status)) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: category?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
    if (this.platformId) {
      document.body.classList.add("theme-color-22");
    }
    this.themeOptionService.theme_color = "#38c6bb";
  }
  ngOnChanges(change) {
    this.filteredBanners = change["data"]?.currentValue?.content?.offer_banner?.banners?.filter((banner) => {
      return banner.status;
    });
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("theme-color-22");
    }
  }
  static {
    this.\u0275fac = function MedicalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MedicalComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MedicalComponent, selectors: [["app-medical"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "p-0", "position-relative", "overflow-hidden"], [1, "home-slider"], [3, "banners"], [1, "container"], [1, "ratio_40", "banner-section", 3, "ngClass"], [1, "section-b-space", "ratio3_2"], [1, "blog", "ratio3_2", "left-blog", "pt-0"], [1, "tools-service", "service-w-bg", "section-b-space"], [1, "section-b-space"], [1, "section-b-space", "border-section", "border-top-0", "category-width", "medical-slider-box"], [3, "categoryIds", "slider"], [3, "title", "type"], [1, "section-b-space", "pt-0", "j-box"], [3, "categoryIds", "showItems"], [1, "container-fluid"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [1, "col-12"], [3, "image", "bgImage"], [1, "row", "g-4"], [1, "collection-banner", "h-100", "tl-content"], [1, "theme-card"], [1, "title-border", "pt-cls-slider"], [1, "offer-slider"], [3, "productIds"], [1, "container", "border-section", "border-bottom-0"], [3, "blogIds"], [1, "service", "p-0"], [3, "services"], [3, "brandIds"]], template: function MedicalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, MedicalComponent_Conditional_3_Template, 3, 5, "div", 3)(4, MedicalComponent_Conditional_4_Template, 4, 8)(5, MedicalComponent_Conditional_5_Template, 5, 1, "section", 4)(6, MedicalComponent_Conditional_6_Template, 7, 4, "section", 5)(7, MedicalComponent_Conditional_7_Template, 4, 4, "section", 6)(8, MedicalComponent_Conditional_8_Template, 4, 3, "section", 7)(9, MedicalComponent_Conditional_9_Template, 2, 2, "section", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners && ctx.filteredBanners.length ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.column_banner_product == null ? null : ctx.data.content.column_banner_product.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      CarouselModule,
      CategoriesComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeServicesComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MedicalComponent, { className: "MedicalComponent" });
})();

// src/app/components/home/perfume/perfume.component.ts
function _forTrack012($index, $item) {
  return this.data;
}
var _c040 = () => [];
var _c111 = (a0) => ({ "margin-bottom": a0 });
function PerfumeComponent_Conditional_16_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "app-image-link", 3);
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 5)(5, "p", 24)(6, "span", 25);
    \u0275\u0275element(7, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 26);
    \u0275\u0275element(9, "span", 11);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.banners.length == 4 ? "col-lg-3 col-6" : ctx_r1.banners.length == 3 ? "col-lg-4 col-6" : ctx_r1.banners.length == 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", true);
  }
}
function PerfumeComponent_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PerfumeComponent_Conditional_16_For_4_Conditional_0_Template, 10, 3, "div", 21);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function PerfumeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 19)(2, "div", 20);
    \u0275\u0275repeaterCreate(3, PerfumeComponent_Conditional_16_For_4_Template, 1, 1, null, null, _forTrack012, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function PerfumeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 6);
    \u0275\u0275element(2, "app-theme-title", 27)(3, "app-theme-product-tab-section", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product)("type", "digital");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.category_ids);
  }
}
function PerfumeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", !ctx_r1.banners.length || !(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.status) ? "section-t-space" : "p-0");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.StorageURL + (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.collection_banner == null ? null : ctx_r1.data.content.collection_banner.image_url), \u0275\u0275sanitizeUrl)("alt", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.collection_banner == null ? null : ctx_r1.data.content.collection_banner.image_url);
  }
}
function PerfumeComponent_Conditional_19_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-button", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-outline btn-sm");
    \u0275\u0275property("data", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list == null ? null : ctx_r1.data.content.product_list.left_panel)("type", "button_link");
  }
}
function PerfumeComponent_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 32)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PerfumeComponent_Conditional_19_Conditional_3_Conditional_7_Template, 1, 4, "app-button", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list == null ? null : ctx_r1.data.content.product_list.left_panel == null ? null : ctx_r1.data.content.product_list.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list == null ? null : ctx_r1.data.content.product_list.left_panel == null ? null : ctx_r1.data.content.product_list.left_panel.description);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list == null ? null : ctx_r1.data.content.product_list.left_panel == null ? null : ctx_r1.data.content.product_list.left_panel.more_button) ? 7 : -1);
  }
}
function PerfumeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "div", 6)(2, "div", 7);
    \u0275\u0275template(3, PerfumeComponent_Conditional_19_Conditional_3_Template, 8, 3, "div", 30);
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275element(5, "app-theme-product", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list == null ? null : ctx_r1.data.content.product_list.left_panel == null ? null : ctx_r1.data.content.product_list.left_panel.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list == null ? null : ctx_r1.data.content.product_list.left_panel == null ? null : ctx_r1.data.content.product_list.left_panel.status) ? "col-xl-9 col-lg-8" : "col-xl-12 col-lg-8");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.product_list == null ? null : ctx_r1.data.content.product_list.products == null ? null : ctx_r1.data.content.product_list.products.product_ids) || \u0275\u0275pureFunction0(7, _c040))("slider", true)("options", ctx_r1.options);
  }
}
function PerfumeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 6);
    \u0275\u0275element(2, "img", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.StorageURL + (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.offer_banner_2 == null ? null : ctx_r1.data.content.offer_banner_2.image_url), \u0275\u0275sanitizeUrl);
  }
}
function PerfumeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18);
    \u0275\u0275element(1, "app-theme-brand", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c111, ctx_r1.themeOptionService.footer_height + "px"));
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(4, _c040));
  }
}
var PerfumeComponent = class _PerfumeComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner_1?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_1];
      }
      if (this.data?.content?.offer_banner_1?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_2];
      }
      if (this.data?.content?.offer_banner_1?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_3];
      }
      if (this.data?.content?.offer_banner_1?.banner_4?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_4];
      }
      let getProduct$;
      if (this.data?.content?.products_ids.length && this.data?.content?.product_list?.status) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids.length && this.data?.content?.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        forkJoin([getProduct$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function PerfumeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PerfumeComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfumeComponent, selectors: [["app-perfume"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 8, consts: [[1, "p-0", "bg-white"], [1, "home-slider"], ["id", "img-bg"], [3, "image", "bgImage"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [1, "banner-padding", "banner-section", "ratio2_3"], [1, "pt-0", "ratio_asos", "section-b-space"], [3, "ngClass"], [1, "ratio_asos"], [1, "section-b-space", "blog-wo-bg", 3, "ngStyle"], [1, "container-fluid"], [1, "row", "g-sm-4", "g-3"], [1, "col-6", 3, "ngClass"], [1, "position-relative"], [1, "banner-skeleton"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [3, "categoryIds"], [1, "img-fluid", 3, "src", "alt"], [1, "col-xl-3", "col-lg-4", "order-lg-1"], [3, "productIds", "slider", "options"], [1, "product-left-title", "right-content"], [3, "data", "type", "class"], [3, "data", "type"], ["alt", "offer", 1, "img-fluid", 3, "src"], [3, "brandIds"]], template: function PerfumeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-image-link", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "p", 9)(10, "span", 10);
        \u0275\u0275element(11, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 12);
        \u0275\u0275element(13, "span", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 13);
        \u0275\u0275element(15, "span", 11);
        \u0275\u0275elementEnd()()()()()()()()()();
        \u0275\u0275template(16, PerfumeComponent_Conditional_16_Template, 5, 0, "section", 14)(17, PerfumeComponent_Conditional_17_Template, 4, 7, "section", 15)(18, PerfumeComponent_Conditional_18_Template, 2, 3, "section", 16)(19, PerfumeComponent_Conditional_19_Template, 6, 8, "section", 17)(20, PerfumeComponent_Conditional_20_Template, 3, 1, "section")(21, PerfumeComponent_Conditional_21_Template, 2, 5, "section", 18);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner)("bgImage", false);
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.banners.length ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.collection_banner == null ? null : ctx.data.content.collection_banner.status) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_list == null ? null : ctx.data.content.product_list.status) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_2 == null ? null : ctx.data.content.offer_banner_2.status) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 21 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeProductComponent,
      ThemeBrandComponent,
      ImageLinkComponent,
      ButtonComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfumeComponent, { className: "PerfumeComponent" });
})();

// src/app/components/home/pets/pets.component.ts
var _c041 = () => [];
var _c112 = (a0) => ({ "background-image": a0 });
function PetsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275element(1, "app-theme-brand", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c041));
  }
}
function PetsComponent_Conditional_4_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275element(2, "app-image-link", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "p", 17)(6, "span", 18);
    \u0275\u0275element(7, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275element(9, "span", 19);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const banner_r3 = ctx_r1.$implicit;
    const \u0275$index_19_r4 = ctx_r1.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.filteredBanners.length == 5 && (\u0275$index_19_r4 == 3 || \u0275$index_19_r4 == 4) ? "col-6" : ctx_r0.filteredBanners.length == 4 || ctx_r0.filteredBanners.length == 2 ? "col-6" : "col-lg-4 col-6");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function PetsComponent_Conditional_4_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "app-image-link", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function PetsComponent_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PetsComponent_Conditional_4_For_4_Conditional_0_Template, 10, 3, "div", 11)(1, PetsComponent_Conditional_4_For_4_Conditional_1_Template, 2, 2, "div", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.filteredBanners.length >= 2 ? 0 : 1);
  }
}
function PetsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 9)(2, "div", 10);
    \u0275\u0275repeaterCreate(3, PetsComponent_Conditional_4_For_4_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredBanners);
  }
}
function PetsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 9);
    \u0275\u0275element(2, "app-theme-title", 21)(3, "app-theme-product", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "jewellery");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(6, _c041))("slider", true);
  }
}
function PetsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 23)(2, "div", 9)(3, "div", 24)(4, "div", 25)(5, "div", 26)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 27);
    \u0275\u0275element(13, "img", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c112, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.image_url) + ")"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.main_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.description);
  }
}
function PetsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 9);
    \u0275\u0275element(2, "app-theme-title", 29)(3, "app-theme-product", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2)("type", "jewellery")("space", false);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(7, _c041))("slider", true);
  }
}
function PetsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-theme-title", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "section", 30)(3, "div", 9);
    \u0275\u0275element(4, "app-theme-blog", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "jewellery");
    \u0275\u0275advance(3);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c041));
  }
}
var PetsComponent = class _PetsComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids.length && (this.data?.content?.products_list_1?.status || this.data?.content?.products_list_2?.status)) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
    if (this.platformId) {
      document.body.classList.add("header-style-light");
    }
  }
  ngOnChanges(change) {
    this.filteredBanners = change["data"]?.currentValue?.content?.offer_banner?.banners.filter((banner) => {
      return banner.status;
    });
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("header-style-light");
    }
  }
  static {
    this.\u0275fac = function PetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PetsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PetsComponent, selectors: [["app-pets"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 9, vars: 7, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "section-t-space", "blog-wo-bg"], [1, "section-t-space", "ratio2_1", "banner-section"], [1, "section-t-space", "pets-box"], [1, "pet-parallax"], [1, "section-b-space", "pets-box"], [3, "brandIds"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [1, "col-12"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [3, "productIds", "slider"], [1, "full-banner", "parallax", "text-center", "p-center", "bg-size", 3, "ngStyle"], [1, "row"], [1, "col"], [1, "banner-contain"], [1, "pet-decor"], ["src", "assets/images/dog.png", "alt", "dog", 1, "img-fluid"], [3, "title", "type", "space"], [1, "section-b-space", "blog", "pt-0", "blog_box", "ratio2_3"], [3, "blogIds"]], template: function PetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, PetsComponent_Conditional_3_Template, 2, 2, "section", 3)(4, PetsComponent_Conditional_4_Template, 5, 0, "section", 4)(5, PetsComponent_Conditional_5_Template, 4, 7, "section", 5)(6, PetsComponent_Conditional_6_Template, 14, 6, "section", 6)(7, PetsComponent_Conditional_7_Template, 4, 8, "section", 7)(8, PetsComponent_Conditional_8_Template, 5, 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners && ctx.filteredBanners.length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_banner == null ? null : ctx.data.content.parallax_banner.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 8 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeHomeSliderComponent,
      ThemeBrandComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PetsComponent, { className: "PetsComponent" });
})();

// src/app/components/home/shoes/shoes.component.ts
var _c042 = () => [];
function ShoesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 13)(2, "div", 14)(3, "div", 15)(4, "div", 16);
    \u0275\u0275element(5, "app-categories", 17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleMap("digital");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_1 == null ? null : ctx_r0.data.content.categories_1.category_ids) || \u0275\u0275pureFunction0(4, _c042))("slider", true);
  }
}
function ShoesComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_2 == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_2.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_1)("bgImage", true);
  }
}
function ShoesComponent_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-image-link", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_1 == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_1.status) ? "col-md-6" : "col-md-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_2)("bgImage", true);
  }
}
function ShoesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 3)(2, "div", 14)(3, "div", 18);
    \u0275\u0275element(4, "app-theme-title", 5);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 19)(6, "div", 3)(7, "div", 20);
    \u0275\u0275template(8, ShoesComponent_Conditional_4_Conditional_8_Template, 2, 5, "div", 21)(9, ShoesComponent_Conditional_4_Conditional_9_Template, 2, 5, "div", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_banner)("type", "luxury");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_1 == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_1.status) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.about_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_2 == null ? null : ctx_r0.data.content.about_banner.collection_banner.banner_2.status) ? 9 : -1);
  }
}
function ShoesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 23);
    \u0275\u0275element(2, "app-categories", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("shoes");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_2 == null ? null : ctx_r0.data.content.categories_2.category_ids) || \u0275\u0275pureFunction0(4, _c042))("slider", true);
  }
}
function ShoesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 3);
    \u0275\u0275element(2, "app-theme-four-column-product", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.slider_products);
  }
}
function ShoesComponent_Conditional_11_For_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275listener("click", function ShoesComponent_Conditional_11_For_5_ng_template_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const attribute_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.getAttribute(attribute_r3.value));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "h4", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attribute_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(attribute_r3.value);
  }
}
function ShoesComponent_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ShoesComponent_Conditional_11_For_5_ng_template_0_Template, 4, 1, "ng-template", 27);
  }
}
function ShoesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 3)(2, "div", 25)(3, "owl-carousel-o", 26);
    \u0275\u0275repeaterCreate(4, ShoesComponent_Conditional_11_For_5_Template, 1, 0, null, 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r0.attributeSliderOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.attribute_value.attribute_values);
  }
}
function ShoesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 3)(2, "div", 14)(3, "div", 15);
    \u0275\u0275element(4, "app-theme-product-tab-section", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("tab_title_class", "tab-title2")("slider", true);
  }
}
function ShoesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10)(1, "div", 3)(2, "div", 14)(3, "div", 32);
    \u0275\u0275element(4, "app-theme-title", 5)(5, "app-theme-blog", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "luxury");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c042));
  }
}
function ShoesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 34);
    \u0275\u0275element(2, "app-theme-services", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function ShoesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11);
    \u0275\u0275element(1, "app-theme-social-media", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c042))("type", "borderless");
  }
}
function ShoesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275element(1, "app-theme-brand", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c042));
  }
}
var ShoesComponent = class _ShoesComponent {
  constructor(store, platformId, router, themeOptionService) {
    this.store = store;
    this.router = router;
    this.themeOptionService = themeOptionService;
    this.attributeSliderOptions = attributeSlider;
    this.platformId = isPlatformBrowser(platformId);
    this.attribute_value$.subscribe((value) => {
      this.attribute_value = value;
    });
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let categoryIds = [...new Set(this.data?.content.categories_1.category_ids.concat(this.data?.content.categories_2.category_ids, this.data?.content?.category_product.category_ids))];
      let getProducts$;
      if (this.data?.content?.products_ids.length && (this.data?.content?.products_list?.status || this.data?.content?.slider_products?.status)) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (categoryIds.length && (this.data?.content?.categories_1?.status || this.data?.content?.categories_2?.status || this.data?.content?.category_product.status)) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getAttribute$;
      if (this.data?.content.attribute.attribute_id) {
        getAttribute$ = this.store.dispatch(new GetAttribute(this.data?.content.attribute.attribute_id));
      } else {
        getAttribute$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getAttribute$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  getAttribute(value) {
    this.router.navigate(["/collections"], { queryParams: { attribute: value } });
  }
  static {
    this.\u0275fac = function ShoesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShoesComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShoesComponent, selectors: [["app-shoes"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 19, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "container"], [1, "section-b-space", "ratio_asos", 3, "ngClass"], [3, "title", "type"], [3, "productIds", "slider"], [1, "p-0", "ratio2_1"], [1, "best-seller-section"], [1, "section-b-space", "ratio_asos"], [1, "blog", "blog-bg", "section-b-space", "ratio2_3"], [1, "instagram", "ratio_square"], [1, "section-b-space", "blog-wo-bg"], [1, "section-b-space", "border-section", "border-top-0", "category-width"], [1, "row"], [1, "col"], [1, ""], [3, "categoryIds", "slider"], [1, "col-lg-8", "offset-lg-2"], [1, "section-b-space", "banner-section", "pt-0", "ratio_40"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [3, "image", "bgImage"], [1, "container-fluid"], [3, "data"], [1, "row", "background"], [3, "options"], ["carouselSlide", ""], ["href", "javascript:void(0)", 3, "click"], [1, "contain-bg"], ["data-hover", "size 06"], [3, "categoryIds", "tab_title_class", "slider"], [1, "col-md-12"], [3, "blogIds"], [1, "service", "border-section", "small-section", "border-top-0"], [3, "services"], [3, "media", "type"], [3, "brandIds"]], template: function ShoesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, ShoesComponent_Conditional_3_Template, 6, 5, "div", 3)(4, ShoesComponent_Conditional_4_Template, 10, 4);
        \u0275\u0275elementStart(5, "section", 4)(6, "div", 3);
        \u0275\u0275element(7, "app-theme-title", 5)(8, "app-theme-product", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ShoesComponent_Conditional_9_Template, 3, 5, "section", 7)(10, ShoesComponent_Conditional_10_Template, 3, 3, "section", 8)(11, ShoesComponent_Conditional_11_Template, 6, 1, "section")(12, ShoesComponent_Conditional_12_Template, 5, 5, "section", 9)(13, ShoesComponent_Conditional_13_Template, 6, 4, "section", 10)(14, ShoesComponent_Conditional_14_Template, 3, 1, "div", 3)(15, ShoesComponent_Conditional_15_Template, 2, 5, "section", 11)(16, ShoesComponent_Conditional_16_Template, 2, 2, "section", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_1 == null ? null : ctx.data.content.categories_1.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.about_banner == null ? null : ctx.data.content.about_banner.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.about_banner == null ? null : ctx.data.content.about_banner.status) ? "pt-0" : "section-t-space");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list)("type", "luxury");
        \u0275\u0275advance();
        \u0275\u0275styleMap("vertical");
        \u0275\u0275property("productIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(18, _c042))("slider", true);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_2 == null ? null : ctx.data.content.categories_2.status) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.slider_products == null ? null : ctx.data.content.slider_products.status) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.attribute == null ? null : ctx.data.content.attribute.status) && ctx.attribute_value ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 16 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterModule,
      ThemeHomeSliderComponent,
      CategoriesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeFourColumnProductComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeServicesComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ImageLinkComponent,
      CarouselModule,
      CarouselComponent,
      CarouselSlideDirective
    ] });
  }
};
__decorate([
  Select(AttributeState.selectedAttribute)
], ShoesComponent.prototype, "attribute_value$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShoesComponent, { className: "ShoesComponent" });
})();

// src/app/components/home/tools/tools.component.ts
var _c043 = () => [];
var _c113 = (a0) => ({ "background-image": a0 });
function ToolsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 8)(2, "div", 9);
    \u0275\u0275element(3, "app-theme-services", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.status) && !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.status) ? "section-b-space" : "pb-0");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("col-lg-3 col-sm-6 service-block");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function ToolsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 8)(2, "div", 11)(3, "div", 12);
    \u0275\u0275element(4, "app-theme-title", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(5, "section", 14)(6, "div", 8)(7, "div", 11)(8, "div", 15)(9, "div", 16);
    \u0275\u0275element(10, "app-categories", 17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories)("type", "luxury");
    \u0275\u0275advance();
    \u0275\u0275classProp("section-b-space", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.status));
    \u0275\u0275advance(5);
    \u0275\u0275styleMap("one");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.category_ids) || \u0275\u0275pureFunction0(9, _c043))("slider", true)("options", ctx_r0.options);
  }
}
function ToolsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 8);
    \u0275\u0275element(2, "app-theme-title", 13)(3, "app-theme-product", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "luxury");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c043))("slider", true)("options", ctx_r0.productSlider);
  }
}
function ToolsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 8);
    \u0275\u0275element(2, "app-theme-title", 13)(3, "app-theme-product", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c113, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.image_url) + ")"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "luxury");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(10, _c043))("slider", true)("options", ctx_r0.productSlider);
  }
}
function ToolsComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 23)(2, "h5", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275element(5, "app-theme-product", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.left_panel == null ? null : ctx_r0.data.content.category_product.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.left_panel == null ? null : ctx_r0.data.content.category_product.left_panel.product_ids) || \u0275\u0275pureFunction0(4, _c043));
  }
}
function ToolsComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "app-theme-product-tab-section", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.left_panel == null ? null : ctx_r0.data.content.category_product.left_panel.status) ? "col-xl-9 col-lg-8" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.right_panel == null ? null : ctx_r0.data.content.category_product.right_panel.product_category == null ? null : ctx_r0.data.content.category_product.right_panel.product_category.category_ids)("slider", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.right_panel == null ? null : ctx_r0.data.content.category_product.right_panel.product_banner == null ? null : ctx_r0.data.content.category_product.right_panel.product_banner.image_url), \u0275\u0275sanitizeUrl);
  }
}
function ToolsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 8)(2, "div", 20);
    \u0275\u0275template(3, ToolsComponent_Conditional_7_Conditional_3_Template, 6, 5, "div", 21)(4, ToolsComponent_Conditional_7_Conditional_4_Template, 4, 6, "div", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pt-0", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.status));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.left_panel == null ? null : ctx_r0.data.content.category_product.left_panel.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.right_panel == null ? null : ctx_r0.data.content.category_product.right_panel.product_category == null ? null : ctx_r0.data.content.category_product.right_panel.product_category.status) ? 4 : -1);
  }
}
function ToolsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-brand", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c043));
  }
}
var ToolsComponent = class _ToolsComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = toolsCategorySlider;
    this.productSlider = productSlider;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let categoryIds = [...new Set(this.data?.content.categories.category_ids.concat(this.data.content.category_product.right_panel.product_category.category_ids))];
      this.productSlider = __spreadProps(__spreadValues({}, this.productSlider), {
        responsive: __spreadProps(__spreadValues({}, this.productSlider.responsive), {
          999: {
            items: 5
          }
        })
      });
      let getProducts$;
      if (this.data?.content?.products_ids.length && (this.data?.content?.products_list_1?.status || this.data?.content?.products_list_2?.status || this.data?.content?.category_product?.left_panel?.status)) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (categoryIds.length && (this.data?.content.categories.category_ids || this.data?.content.category_product.right_panel.product_category.category_ids)) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("tools-bg");
        forkJoin([getProducts$, getCategory$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("tools-bg");
    }
  }
  static {
    this.\u0275fac = function ToolsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToolsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToolsComponent, selectors: [["app-tools"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 7, consts: [[1, "p-0", "height-85", "tools_slider"], [1, "home-slider"], [3, "banners"], [1, "absolute-banner", "tools-service", 3, "ngClass"], [1, "section-b-space"], [1, "section-b-space", "popular-products-section", 3, "ngStyle"], [1, "tools_product", 3, "pt-0"], [1, "section-b-space", "tools-brand"], [1, "container"], [1, "absolute-bg"], [3, "services"], [1, "row"], [1, "col-lg-8", "offset-lg-2"], [3, "title", "type"], [1, "pt-0", "category-tools", "ratio3_2"], [1, "col"], [1, "slide-4", "category-m"], [3, "categoryIds", "slider", "options"], [3, "productIds", "slider", "options"], [1, "tools_product"], [1, "row", "g-sm-4", "g-3"], [1, "col-xl-3", "col-lg-4", "col-md-12"], [1, "col-12", 3, "ngClass"], [1, "theme-card"], [1, "title-border"], [1, "offer-slider"], [3, "productIds"], [3, "categoryIds", "slider"], [1, "banner-tools"], ["alt", "banner", 1, "img-fluid", 3, "src"], [3, "brandIds"]], template: function ToolsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, ToolsComponent_Conditional_3_Template, 4, 4, "section", 3)(4, ToolsComponent_Conditional_4_Template, 11, 10)(5, ToolsComponent_Conditional_5_Template, 4, 8, "section", 4)(6, ToolsComponent_Conditional_6_Template, 4, 11, "section", 5)(7, ToolsComponent_Conditional_7_Template, 5, 4, "section", 6)(8, ToolsComponent_Conditional_8_Template, 2, 2, "section", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 8 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      CategoriesComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToolsComponent, { className: "ToolsComponent" });
})();

// src/app/components/home/vegetables/vegetables-1/vegetables-1.component.ts
var _c044 = () => [];
function Vegetables1Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 5)(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "app-theme-services", 18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("services", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners) || \u0275\u0275pureFunction0(1, _c044));
  }
}
function Vegetables1Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 5)(2, "div", 6)(3, "div", 19);
    \u0275\u0275element(4, "app-theme-title", 20);
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275element(6, "app-theme-product", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "premium");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c044))("slider", true)("options", ctx_r0.options);
  }
}
function Vegetables1Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "app-image-link", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.full_banner)("placeholder", "assets/images/full_column_banner.png")("bgImage", false);
  }
}
function Vegetables1Component_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 24)(2, "div", 5);
    \u0275\u0275element(3, "app-theme-title", 20);
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275element(5, "app-theme-product", 22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2)("type", "premium");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(7, _c044))("slider", true)("options", ctx_r0.options);
  }
}
function Vegetables1Component_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 19);
    \u0275\u0275element(3, "app-theme-title", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "section", 25)(5, "div", 5)(6, "div", 6)(7, "div", 26);
    \u0275\u0275element(8, "app-theme-blog", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "premium");
    \u0275\u0275advance(5);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c044));
  }
}
function Vegetables1Component_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15);
    \u0275\u0275element(1, "app-theme-brand", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c044));
  }
}
var Vegetables1Component = class _Vegetables1Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: __spreadProps(__spreadValues({}, this.options.responsive), {
          999: {
            items: 5
          }
        })
      });
      let getProducts$;
      if (this.data?.content?.products_ids?.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand.status && this.data?.content?.brand?.brand_ids?.length) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function Vegetables1Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Vegetables1Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Vegetables1Component, selectors: [["app-vegetables-1"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 21, vars: 7, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [1, "banner-padding", "absolute-banner", "pb-0"], [1, "section-b-space", "ratio_square"], [1, "section-b-space"], [1, "absolute-bg"], [1, "service", "p-0"], [3, "services"], [1, "col"], [3, "title", "type"], [1, "product-5", "product-m"], [3, "productIds", "slider", "options"], [3, "image", "placeholder", "bgImage"], [1, "full-box"], [1, "blog", "section-b-space", "pt-0", "ratio2_3"], [1, "col-md-12"], [3, "blogIds"], [3, "brandIds"]], template: function Vegetables1Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8)(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 11);
        \u0275\u0275element(12, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275template(15, Vegetables1Component_Conditional_15_Template, 5, 2, "section", 13)(16, Vegetables1Component_Conditional_16_Template, 7, 8, "section", 14)(17, Vegetables1Component_Conditional_17_Template, 2, 3, "section", 0)(18, Vegetables1Component_Conditional_18_Template, 6, 8, "section", 14)(19, Vegetables1Component_Conditional_19_Template, 9, 4)(20, Vegetables1Component_Conditional_20_Template, 2, 2, "section", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(13);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.full_banner == null ? null : ctx.data.content.full_banner.status) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 20 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeBrandComponent,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Vegetables1Component, { className: "Vegetables1Component" });
})();

// src/app/components/home/vegetables/vegetables-2/vegetables-2.component.ts
var _c045 = () => [];
function Vegetables2Component_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 1);
    \u0275\u0275element(2, "app-theme-services", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("col-xl-3");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function Vegetables2Component_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 1)(2, "div", 2)(3, "div", 15);
    \u0275\u0275element(4, "app-theme-title", 16)(5, "app-theme-product", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "icon");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c045))("slider", true)("options", ctx_r0.options);
  }
}
function Vegetables2Component_Conditional_9_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-image-link", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const banner_r3 = ctx_r1.$implicit;
    const \u0275$index_42_r4 = ctx_r1.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275$index_42_r4 == 0 || \u0275$index_42_r4 == 1 ? "col-sm-6" : \u0275$index_42_r4 > 1 && ctx_r0.filteredBanners.length % 2 == 0 ? "col-sm-6" : \u0275$index_42_r4 > 1 && ctx_r0.filteredBanners.length == 5 ? "col-md-4 col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function Vegetables2Component_Conditional_9_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-image-link", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function Vegetables2Component_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Vegetables2Component_Conditional_9_For_4_Conditional_0_Template, 2, 3, "div", 20)(1, Vegetables2Component_Conditional_9_For_4_Conditional_1_Template, 2, 2, "div", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.filteredBanners.length >= 2 ? 0 : 1);
  }
}
function Vegetables2Component_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 1)(2, "div", 19);
    \u0275\u0275repeaterCreate(3, Vegetables2Component_Conditional_9_For_4_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pt-3", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.status));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredBanners);
  }
}
function Vegetables2Component_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 1);
    \u0275\u0275element(2, "app-theme-product-tab-section", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("tab_style", "classic")("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("showItems", 5);
  }
}
function Vegetables2Component_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "app-image-link", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pt-3", !(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.status));
    \u0275\u0275advance();
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner);
  }
}
function Vegetables2Component_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 1)(2, "div", 2)(3, "div", 15);
    \u0275\u0275element(4, "app-theme-title", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275element(6, "app-theme-product", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(7, _c045))("slider", true)("options", ctx_r0.options);
  }
}
function Vegetables2Component_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "div", 1)(2, "div", 2)(3, "div", 24);
    \u0275\u0275element(4, "app-theme-title", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275element(6, "app-theme-blog", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "icon");
    \u0275\u0275advance(2);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c045))("blogEffect", "basic-effect");
  }
}
function Vegetables2Component_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "app-theme-brand", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c045));
  }
}
var Vegetables2Component = class _Vegetables2Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: __spreadProps(__spreadValues({}, this.options.responsive), {
          999: {
            items: 5
          }
        })
      });
      let categoryIds = this.data?.content?.category_product?.category_ids;
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlogs$;
      if (this.data?.content?.featured_blogs.blog_ids.length && this.data?.content?.featured_blogs?.status) {
        getBlogs$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content.featured_blogs.blog_ids?.join(",")
        }));
      } else {
        getBlogs$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBlogs$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnChanges(change) {
    if (change["data"] && change["data"].currentValue) {
      this.filteredBanners = change["data"]?.currentValue?.content?.banner?.banners?.filter((banner) => {
        return banner.status;
      });
    }
  }
  static {
    this.\u0275fac = function Vegetables2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Vegetables2Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Vegetables2Component, selectors: [["app-vegetables-2"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 15, vars: 9, consts: [[1, "small-section", "pt-res-0"], [1, "container"], [1, "row"], [1, "col-xl-12"], [1, "pt-0"], [1, "home-slider"], [3, "banners"], [1, "service-w-bg", "tools-service", "pt-0"], [1, "pb-0", "banner-section", "ratio2_1", 3, "pt-3"], [1, "ratio_square", "bg-title", "wo-bg"], [1, "container", 3, "pt-3"], [1, "ratio_square"], [1, "blog", "section-b-space", "left-blog", "ratio3_2"], [1, "section-b-space"], [3, "services"], [1, "col-12"], [3, "title", "type"], [3, "productIds", "slider", "options"], [1, "pb-0", "banner-section", "ratio2_1"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [3, "image", "bgImage"], [3, "categoryIds", "tab_style", "title", "showItems"], [3, "image"], [1, "col-md-12"], [3, "blogIds", "blogEffect"], [3, "brandIds"]], template: function Vegetables2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "section", 4)(5, "div", 5);
        \u0275\u0275element(6, "app-theme-home-slider", 6);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(7, Vegetables2Component_Conditional_7_Template, 3, 3, "section", 7)(8, Vegetables2Component_Conditional_8_Template, 6, 8, "section")(9, Vegetables2Component_Conditional_9_Template, 5, 2, "section", 8)(10, Vegetables2Component_Conditional_10_Template, 3, 8, "section", 9)(11, Vegetables2Component_Conditional_11_Template, 2, 3, "section", 10)(12, Vegetables2Component_Conditional_12_Template, 7, 8, "section", 11)(13, Vegetables2Component_Conditional_13_Template, 7, 5, "section", 12)(14, Vegetables2Component_Conditional_14_Template, 2, 2, "section", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners.length ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner == null ? null : ctx.data.content.offer_banner.status) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 14 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Vegetables2Component, { className: "Vegetables2Component" });
})();

// src/app/components/home/vegetables/vegetables-3/vegetables-3.component.ts
var _c046 = () => [];
function Vegetables3Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 18);
    \u0275\u0275element(2, "app-theme-services", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("col-xl-3");
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function Vegetables3Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275element(4, "app-theme-title", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275element(6, "app-theme-product-tab-section", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic")("space", false);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("tab_style", "basic")("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("showItems", 5);
  }
}
function Vegetables3Component_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "app-image-link", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.filteredBanners.length == 3 ? "col-md-4 col-sm-6" : ctx_r0.filteredBanners.length == 2 ? "col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function Vegetables3Component_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 26)(2, "div", 20)(3, "div", 27);
    \u0275\u0275repeaterCreate(4, Vegetables3Component_Conditional_18_For_5_Template, 2, 3, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filteredBanners);
  }
}
function Vegetables3Component_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275element(4, "app-theme-title", 23)(5, "app-theme-product", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic")("space", false);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(8, _c046))("slider", true)("options", ctx_r0.options);
  }
}
function Vegetables3Component_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 20);
    \u0275\u0275element(2, "app-theme-title", 23)(3, "app-theme-blog", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic")("space", false);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(5, _c046))("blogEffect", "basic-effect");
  }
}
function Vegetables3Component_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17);
    \u0275\u0275element(1, "app-theme-brand", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c046));
  }
}
var Vegetables3Component = class _Vegetables3Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = productSlider;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.themeOption$.subscribe((value) => {
        if (value) {
          this.categoryIds = value?.header?.category_ids;
        }
      });
      this.options = __spreadProps(__spreadValues({}, this.options), {
        responsive: __spreadProps(__spreadValues({}, this.options.responsive), {
          999: {
            items: 5
          }
        })
      });
      let categoryIds = this.data?.content?.category_product?.category_ids.concat(this.data?.content?.sidebar_category?.category_ids);
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      this.store.dispatch(new GetHeaderCategories({
        status: 1,
        ids: this.categoryIds?.join(",")
      }));
      let getBlogs$;
      if (this.data?.content?.featured_blogs.blog_ids.length && this.data?.content?.featured_blogs?.status) {
        getBlogs$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content.featured_blogs.blog_ids?.join(",")
        }));
      } else {
        getBlogs$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("having-sidemenu");
        forkJoin([getProduct$, getCategory$, getBlogs$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnChanges(change) {
    if (change["data"] && change["data"].currentValue) {
      this.filteredBanners = change["data"]?.currentValue?.content?.banner?.banners?.filter((banner) => {
        return banner.status;
      });
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("having-sidemenu");
    }
  }
  static {
    this.\u0275fac = function Vegetables3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Vegetables3Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Vegetables3Component, selectors: [["app-vegetables-3"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 22, vars: 11, consts: [[1, "left-header", "left-header-sm"], [1, "metro"], [1, "main-menu"], [1, "menu-left"], [1, "sidenav", "svg-icon-menu"], [1, "sidebar-back", "text-start", "d-xl-none", "d-block"], [1, "left-sidebar_center"], [3, "categoryIds"], [1, "pt-0", "section-t-space"], [1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "container-fluid", "p-0-xl"], [1, "service-w-bg", "banner-padding"], [1, "ratio_square", "bg-title", "wo-bg"], [1, "pb-0", "ratio2_1", "banner-section"], [1, "blog", "left-blog", "ratio3_2"], [1, "section-b-space"], [1, "container-fluid"], [3, "services"], [1, "container"], [1, "row"], [1, "col-12"], [3, "title", "type", "space"], [1, "col"], [3, "categoryIds", "tab_style", "title", "showItems"], [1, "ratio2_1"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [3, "image", "bgImage"], [3, "productIds", "slider", "options"], [3, "blogIds", "blogEffect"], [3, "brandIds"]], template: function Vegetables3Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "nav")(6, "div")(7, "div", 5);
        \u0275\u0275text(8, "Back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275element(10, "app-categories", 7);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(11, "div", 8)(12, "section", 9)(13, "div", 10);
        \u0275\u0275element(14, "app-theme-home-slider", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 12);
        \u0275\u0275template(16, Vegetables3Component_Conditional_16_Template, 3, 3, "section", 13)(17, Vegetables3Component_Conditional_17_Template, 7, 11, "section", 14)(18, Vegetables3Component_Conditional_18_Template, 6, 0, "section", 15)(19, Vegetables3Component_Conditional_19_Template, 6, 9, "section")(20, Vegetables3Component_Conditional_20_Template, 4, 6, "section", 16)(21, Vegetables3Component_Conditional_21_Template, 2, 2, "section", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275styleMap("sidebar");
        \u0275\u0275property("categoryIds", (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.sidebar_category == null ? null : ctx.data.content.sidebar_category.category_ids) || \u0275\u0275pureFunction0(10, _c046));
        \u0275\u0275advance(4);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.category_ids) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners.length ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.product_ids) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 21 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterModule,
      ThemeHomeSliderComponent,
      ThemeServicesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ImageLinkComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeBrandComponent,
      CategoriesComponent
    ] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], Vegetables3Component.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Vegetables3Component, { className: "Vegetables3Component" });
})();

// src/app/components/home/video-slider/video-slider.component.ts
function _forTrack013($index, $item) {
  return this.data;
}
var _c047 = (a0) => ({ "background-image": a0 });
var _c114 = () => [];
function VideoSliderComponent_For_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "app-image-link", 23);
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 4)(5, "p", 25)(6, "span", 26);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 27);
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.banners.length === 3 ? "col-lg-4 col-6" : ctx_r1.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("collection-banner");
    \u0275\u0275property("image", banner_r1)("bgImage", true)("banner_details", true);
  }
}
function VideoSliderComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VideoSliderComponent_For_19_Conditional_0_Template, 10, 6, "div", 21);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function VideoSliderComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 5);
    \u0275\u0275element(2, "app-theme-title", 28)(3, "app-theme-product-tab-section", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.category_product == null ? null : ctx_r1.data.content.category_product.category_ids);
  }
}
function VideoSliderComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 30)(2, "div", 5)(3, "div", 6)(4, "div", 31)(5, "div", 32)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c047, "url(" + ctx_r1.StorageURL + (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.parallax_banner == null ? null : ctx_r1.data.content.parallax_banner.image_url) + ")"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.parallax_banner == null ? null : ctx_r1.data.content.parallax_banner.main_title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.parallax_banner == null ? null : ctx_r1.data.content.parallax_banner.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.parallax_banner == null ? null : ctx_r1.data.content.parallax_banner.sub_title);
  }
}
function VideoSliderComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "div", 33)(2, "div", 5);
    \u0275\u0275element(3, "app-theme-title", 28)(4, "app-theme-product", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list == null ? null : ctx_r1.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c114))("product_box_style", "horizontal");
  }
}
function VideoSliderComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "section", 35);
    \u0275\u0275element(2, "app-theme-services", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.services == null ? null : ctx_r1.data.content.services.banners)("type", "simple");
  }
}
function VideoSliderComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 6)(2, "div", 31);
    \u0275\u0275element(3, "app-theme-title", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "section", 38)(5, "div", 5)(6, "div", 6)(7, "div", 39);
    \u0275\u0275element(8, "app-theme-blog", 40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.featured_blogs)("type", "premium");
    \u0275\u0275advance(5);
    \u0275\u0275property("blogIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.featured_blogs == null ? null : ctx_r1.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c114));
  }
}
function VideoSliderComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19);
    \u0275\u0275element(1, "app-theme-social-media", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.social_media) || \u0275\u0275pureFunction0(4, _c114))("type", "borderless");
  }
}
function VideoSliderComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20);
    \u0275\u0275element(1, "app-theme-brand", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c114));
  }
}
var VideoSliderComponent = class _VideoSliderComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.collection_banner?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.collection_banner?.banner_1];
      }
      if (this.data?.content?.collection_banner?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.collection_banner?.banner_2];
      }
      if (this.data?.content?.collection_banner?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.collection_banner?.banner_3];
      }
      let getProducts$;
      if (this.data?.content?.products_ids.length && this.data?.content?.products_list?.status) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function VideoSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideoSliderComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoSliderComponent, selectors: [["app-video-slider"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 8, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [1, "banner-padding", "absolute_banner", "ratio3_2"], [1, "row", "g-sm-4", "g-3"], [1, "absolute-product", "ratio_asos", "section-t-space", "section-b-space"], [1, "p-0", "advertise-section"], [1, "box-product", "section-b-space"], [1, "container", "wo-box"], [1, "instagram", "ratio_square"], [1, "section-b-space"], [3, "ngClass"], [1, "position-relative"], [3, "image", "bgImage", "banner_details"], [1, "banner-skeleton"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [3, "categoryIds"], [1, "full-banner", "parallax", "text-center", "p-center", "bg-size", 3, "ngStyle"], [1, "col"], [1, "banner-contain"], [1, "full-box"], [3, "productIds", "product_box_style"], [1, "service", "section-b-space", "border-section"], [3, "services", "type"], [1, "container", "section-t-space"], [1, "blog", "pt-0", "ratio2_3"], [1, "col-md-12"], [3, "blogIds"], [3, "media", "type"], [3, "brandIds"]], template: function VideoSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8)(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 11);
        \u0275\u0275element(12, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(15, "section", 13)(16, "div", 5)(17, "div", 14);
        \u0275\u0275repeaterCreate(18, VideoSliderComponent_For_19_Template, 1, 1, null, null, _forTrack013, true);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, VideoSliderComponent_Conditional_20_Template, 4, 5, "section", 15)(21, VideoSliderComponent_Conditional_21_Template, 12, 6, "section", 16)(22, VideoSliderComponent_Conditional_22_Template, 5, 7, "section", 17)(23, VideoSliderComponent_Conditional_23_Template, 3, 2, "div", 18)(24, VideoSliderComponent_Conditional_24_Template, 9, 4)(25, VideoSliderComponent_Conditional_25_Template, 2, 5, "section", 19)(26, VideoSliderComponent_Conditional_26_Template, 2, 2, "section", 20);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.banners);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_banner == null ? null : ctx.data.content.parallax_banner.status) ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 26 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      ThemeHomeSliderComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeProductComponent,
      ThemeServicesComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoSliderComponent, { className: "VideoSliderComponent" });
})();

// src/app/components/home/watch/watch.component.ts
function _forTrack014($index, $item) {
  return this.data;
}
var _c048 = () => [];
function WatchComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275element(1, "app-theme-brand", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c048));
  }
}
function WatchComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 9)(2, "div", 12);
    \u0275\u0275element(3, "app-image-link", 13);
    \u0275\u0275elementStart(4, "div", 14)(5, "div", 15)(6, "p", 16)(7, "span", 17);
    \u0275\u0275element(8, "span", 18);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("banner-text");
    \u0275\u0275property("image", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.offer_banner_1);
  }
}
function WatchComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 9)(2, "div", 19)(3, "div", 20)(4, "div", 21);
    \u0275\u0275element(5, "app-categories", 22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleMap("one");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.category_ids) || \u0275\u0275pureFunction0(5, _c048))("slider", true)("options", ctx_r0.options);
  }
}
function WatchComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 23)(2, "div", 24);
    \u0275\u0275element(3, "app-theme-title", 25)(4, "app-theme-product-tab-section", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("product_box_style", "horizontal");
  }
}
function WatchComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 9)(2, "div", 19)(3, "div", 20);
    \u0275\u0275element(4, "app-theme-title", 25)(5, "app-theme-product", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c048))("slider", true)("options", ctx_r0.productSlider4);
  }
}
function WatchComponent_Conditional_8_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "app-image-link", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.banners.length == 3 ? "col-md-4 col-sm-6" : ctx_r0.banners.length == 2 ? "col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function WatchComponent_Conditional_8_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, WatchComponent_Conditional_8_For_4_Conditional_0_Template, 2, 3, "div", 29);
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    \u0275\u0275conditional((banner_r2 == null ? null : banner_r2.status) ? 0 : -1);
  }
}
function WatchComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 9)(2, "div", 28);
    \u0275\u0275repeaterCreate(3, WatchComponent_Conditional_8_For_4_Template, 1, 1, null, null, _forTrack014, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.banners);
  }
}
function WatchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7)(1, "div", 9)(2, "div", 19)(3, "div", 20);
    \u0275\u0275element(4, "app-theme-title", 25)(5, "app-theme-product", 31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(6, _c048))("slider", true);
  }
}
function WatchComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 9)(2, "div", 19)(3, "div", 32);
    \u0275\u0275element(4, "app-theme-title", 25)(5, "app-theme-blog", 33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c048));
  }
}
function WatchComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "section", 34);
    \u0275\u0275element(2, "app-theme-services", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners)("type", "simple");
  }
}
function WatchComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 10);
    \u0275\u0275element(1, "app-theme-social-media", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c048))("type", "borderless");
  }
}
var WatchComponent = class _WatchComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.options = toolsCategorySlider;
    this.productSlider4 = productSlider4;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner_2?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_2?.banner_1];
      }
      if (this.data?.content?.offer_banner_2?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_2?.banner_2];
      }
      if (this.data?.content?.offer_banner_2?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_2?.banner_3];
      }
      let categoryIds = [...new Set(this.data?.content?.categories?.category_ids.concat(this.data.content.category_product.category_ids))];
      let getProduct$;
      if (this.data?.content?.products_ids.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (categoryIds.length && (this.data?.content?.category_product?.status || this.data?.content?.categories?.status)) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProduct$, getCategory$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function WatchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WatchComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WatchComponent, selectors: [["app-watch"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 13, vars: 11, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "blog-wo-bg", "watch-brand"], [1, "section-b-space", "ratio_portrait"], [1, "p-0", "tab-bg-section"], [1, "ratio_45", "banner-section"], [1, "section-b-space"], [1, "blog", "blog-bg", "section-b-space", "ratio2_3"], [1, "container"], [1, "instagram", "ratio_square", "section-b-space"], [3, "brandIds"], [1, "position-relative"], [3, "image"], [1, "banner-skeleton"], [1, "skeleton-content"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "placeholder"], [1, "row"], [1, "col"], [1, "slide-4", "category-m"], [3, "categoryIds", "slider", "options"], [1, "tab-bg"], [1, "container-fluid", "p-0"], [3, "title", "type"], [3, "categoryIds", "product_box_style"], [3, "productIds", "slider", "options"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [3, "image", "bgImage"], [3, "productIds", "slider"], [1, "col-md-12"], [3, "blogIds"], [1, "service", "section-b-space", "wo-box", "border-section", "border-top-0"], [3, "services", "type"], [3, "media", "type"]], template: function WatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, WatchComponent_Conditional_3_Template, 2, 2, "section", 3)(4, WatchComponent_Conditional_4_Template, 9, 3, "section")(5, WatchComponent_Conditional_5_Template, 6, 6, "section", 4)(6, WatchComponent_Conditional_6_Template, 5, 6, "section", 5)(7, WatchComponent_Conditional_7_Template, 6, 8, "section")(8, WatchComponent_Conditional_8_Template, 5, 0, "section", 6)(9, WatchComponent_Conditional_9_Template, 6, 7, "section", 7)(10, WatchComponent_Conditional_10_Template, 6, 4, "section", 8)(11, WatchComponent_Conditional_11_Template, 3, 2, "div", 9)(12, WatchComponent_Conditional_12_Template, 2, 5, "section", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.offer_banner_1 == null ? null : ctx.data.content.offer_banner_1.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners.length ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 12 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ThemeHomeSliderComponent,
      ThemeBrandComponent,
      ImageLinkComponent,
      CategoriesComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeServicesComponent,
      ThemeSocialMediaComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WatchComponent, { className: "WatchComponent" });
})();

// src/app/components/home/yoga/yoga.component.ts
function _forTrack015($index, $item) {
  return this.data;
}
var _c049 = () => [];
function YogaComponent_Conditional_15_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275element(2, "app-image-link", 2);
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 4)(5, "p", 23)(6, "span", 24);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.banners.length === 3 ? "col-md-4 col-6" : ctx_r1.banners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r1)("bgImage", false);
  }
}
function YogaComponent_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, YogaComponent_Conditional_15_For_3_Conditional_0_Template, 10, 3, "div", 20);
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    \u0275\u0275conditional((banner_r1 == null ? null : banner_r1.status) ? 0 : -1);
  }
}
function YogaComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 19);
    \u0275\u0275repeaterCreate(2, YogaComponent_Conditional_15_For_3_Template, 1, 1, null, null, _forTrack015, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.banners);
  }
}
function YogaComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 5)(2, "div", 6)(3, "div", 26);
    \u0275\u0275element(4, "app-theme-title", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_1)("type", "luxury");
  }
}
function YogaComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 5);
    \u0275\u0275element(2, "app-theme-product", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_1 == null ? null : ctx_r1.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(4, _c049))("slider", true);
  }
}
function YogaComponent_Conditional_18_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-image-link", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.banners2.length === 3 ? "col-md-4 col-sm-6" : ctx_r1.banners2.length === 2 ? "col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3)("bgImage", false);
  }
}
function YogaComponent_Conditional_18_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, YogaComponent_Conditional_18_For_4_Conditional_0_Template, 2, 3, "div", 20);
  }
  if (rf & 2) {
    const banner_r3 = ctx.$implicit;
    \u0275\u0275conditional((banner_r3 == null ? null : banner_r3.status) ? 0 : -1);
  }
}
function YogaComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 5)(2, "div", 19);
    \u0275\u0275repeaterCreate(3, YogaComponent_Conditional_18_For_4_Template, 1, 1, null, null, _forTrack015, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.banners2);
  }
}
function YogaComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 5);
    \u0275\u0275element(2, "app-theme-title", 27)(3, "app-theme-product", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_2)("type", "luxury");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("productIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.products_list_2 == null ? null : ctx_r1.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(8, _c049))("slider", false);
  }
}
function YogaComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 5)(2, "div", 29)(3, "div", 30);
    \u0275\u0275element(4, "app-theme-title", 31)(5, "app-theme-blog", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.featured_blogs)("type", "luxury")("space", false);
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.featured_blogs == null ? null : ctx_r1.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(4, _c049));
  }
}
function YogaComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17);
    \u0275\u0275element(1, "app-theme-social-media", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.social_media) || \u0275\u0275pureFunction0(4, _c049))("type", "borderless");
  }
}
function YogaComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18);
    \u0275\u0275element(1, "app-theme-brand", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r1.data == null ? null : ctx_r1.data.content == null ? null : ctx_r1.data.content.brand == null ? null : ctx_r1.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c049));
  }
}
var YogaComponent = class _YogaComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.banners = [];
      if (this.data?.content?.offer_banner_1?.banner_1?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_1];
      }
      if (this.data?.content?.offer_banner_1?.banner_2?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_2];
      }
      if (this.data?.content?.offer_banner_1?.banner_3?.status) {
        this.banners = [...this.banners, this.data?.content?.offer_banner_1?.banner_3];
      }
      this.banners2 = [];
      if (this.data?.content?.offer_banner_2?.banner_1?.status) {
        this.banners2 = [...this.banners2, this.data?.content?.offer_banner_2?.banner_1];
      }
      if (this.data?.content?.offer_banner_2?.banner_2?.status) {
        this.banners2 = [...this.banners2, this.data?.content?.offer_banner_2?.banner_2];
      }
      if (this.data?.content?.offer_banner_2?.banner_3?.status) {
        this.banners2 = [...this.banners2, this.data?.content?.offer_banner_2?.banner_3];
      }
      let getProduct$;
      if (this.data?.content?.products_ids.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        forkJoin([getProduct$, getBlog$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  static {
    this.\u0275fac = function YogaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _YogaComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YogaComponent, selectors: [["app-yoga"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 12, consts: [[1, "pt-0"], [1, "home-slider"], [3, "image", "bgImage"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [1, "container-fluid", "banner-padding"], [1, "category-img-wrapper", "ratio_asos", "pt-0"], [1, "ratio2_1", "banner-section"], [1, "blog", "ratio2_1", "left-blog", "pt-0"], [1, "instagram", "section-b-space", "ratio_square"], [1, "section-b-space"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [1, "position-relative"], [1, "banner-skeleton"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "col-lg-9", "col-12"], [1, "col-lg-8", "offset-lg-2"], [3, "title", "type"], [3, "productIds", "slider"], [1, "row", "section-t-space"], [1, "col-12"], [3, "title", "type", "space"], [3, "blogIds"], [3, "media", "type"], [3, "brandIds"]], template: function YogaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-link", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8)(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 11);
        \u0275\u0275element(12, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275template(15, YogaComponent_Conditional_15_Template, 4, 0, "section", 13)(16, YogaComponent_Conditional_16_Template, 5, 2, "section")(17, YogaComponent_Conditional_17_Template, 3, 5, "section", 14)(18, YogaComponent_Conditional_18_Template, 5, 0, "section", 15)(19, YogaComponent_Conditional_19_Template, 4, 9, "section")(20, YogaComponent_Conditional_20_Template, 6, 5, "section", 16)(21, YogaComponent_Conditional_21_Template, 2, 5, "section", 17)(22, YogaComponent_Conditional_22_Template, 2, 2, "section", 18);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classMap("home");
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner)("bgImage", false);
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.banners.length ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners2.length ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 22 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YogaComponent, { className: "YogaComponent" });
})();

// src/app/components/home/nursery/nursery.component.ts
var _c050 = () => [];
function NurseryComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4)(1, "div", 8)(2, "div", 9)(3, "div", 10);
    \u0275\u0275element(4, "app-theme-title", 11)(5, "app-theme-product", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c050))("slider", true);
  }
}
function NurseryComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "div", 13)(2, "div", 14);
    \u0275\u0275element(3, "app-theme-title", 11)(4, "app-theme-product-tab-section", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275styleMap("horizontal");
    \u0275\u0275classMap("row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-md-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("product_box_style", "horizontal");
  }
}
function NurseryComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "div", 8)(2, "div", 9)(3, "div", 16);
    \u0275\u0275element(4, "app-theme-title", 11)(5, "app-theme-blog", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "premium");
    \u0275\u0275advance();
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c050));
  }
}
function NurseryComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "app-theme-brand", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c050));
  }
}
function NurseryComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 7);
    \u0275\u0275element(1, "app-theme-social-media", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container-fluid");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c050))("type", "borderless");
  }
}
var NurseryComponent = class _NurseryComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      document.body.classList.add("layout-20");
      if (this.data?.content?.home_banner?.background_image) {
        const backgroundImageUrl = `url(${this.StorageURL + this.data?.content?.home_banner?.background_image})`;
        document.body.style.setProperty("background-image", backgroundImageUrl);
      }
      let getProducts$;
      if (this.data?.content?.products_ids.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.category_product.category_ids?.length && this.data?.content.category_product?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.category_product.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBlog$, getBrands$, getCategory$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("layout-20");
      document.body.style.removeProperty("background-image");
    }
  }
  static {
    this.\u0275fac = function NurseryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NurseryComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NurseryComponent, selectors: [["app-nursery"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 6, consts: [[1, "bg-white"], [1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "section-b-space"], [1, "p-0", "nursery-product"], [1, "blog", "ratio2_3"], [1, "instagram", "ratio_square"], [1, "container"], [1, "row"], [1, "col"], [3, "title", "type"], [3, "productIds", "slider"], [1, "tab-bg", "tab-grey-bg"], [1, "container-fluid"], [3, "categoryIds", "product_box_style"], [1, "col-md-12"], [3, "blogIds"], [3, "brandIds"], [3, "media", "type"]], template: function NurseryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 2);
        \u0275\u0275element(4, "app-theme-home-slider", 3);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(5, NurseryComponent_Conditional_5_Template, 6, 7, "section", 4)(6, NurseryComponent_Conditional_6_Template, 5, 8, "section", 5)(7, NurseryComponent_Conditional_7_Template, 6, 4, "section", 6)(8, NurseryComponent_Conditional_8_Template, 2, 2, "section", 4)(9, NurseryComponent_Conditional_9_Template, 2, 5, "section", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 9 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NurseryComponent, { className: "NurseryComponent" });
})();

// src/app/components/home/gradient/gradient.component.ts
var _c051 = () => [];
function GradientComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section")(1, "div", 21);
    \u0275\u0275element(2, "app-categories", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("gradient");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_1 == null ? null : ctx_r0.data.content.categories_1.category_ids) || \u0275\u0275pureFunction0(3, _c051));
  }
}
function GradientComponent_Conditional_16_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 26);
    \u0275\u0275element(2, "app-image-link", 27);
    \u0275\u0275elementStart(3, "div", 28)(4, "div", 4)(5, "p", 29)(6, "span", 30);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 31);
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const banner_r3 = ctx_r1.$implicit;
    const \u0275$index_45_r4 = ctx_r1.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275$index_45_r4 == 0 || \u0275$index_45_r4 == 1 ? "col-6" : \u0275$index_45_r4 > 1 && ctx_r0.filteredBanners.length % 2 == 0 ? "col-6" : \u0275$index_45_r4 > 1 && ctx_r0.filteredBanners.length == 5 ? "col-lg-4 col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function GradientComponent_Conditional_16_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "app-image-link", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function GradientComponent_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GradientComponent_Conditional_16_For_4_Conditional_0_Template, 10, 3, "div", 24)(1, GradientComponent_Conditional_16_For_4_Conditional_1_Template, 2, 2, "div", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.filteredBanners.length >= 2 ? 0 : 1);
  }
}
function GradientComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 21)(2, "div", 23);
    \u0275\u0275repeaterCreate(3, GradientComponent_Conditional_16_For_4_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredBanners);
  }
}
function GradientComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 32);
    \u0275\u0275elementStart(1, "section", 33)(2, "div", 21);
    \u0275\u0275element(3, "app-theme-product-tab-section", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("title-gradient");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275classMap("row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("showItems", 5);
  }
}
function GradientComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 21)(2, "div", 6)(3, "div", 25);
    \u0275\u0275element(4, "app-theme-title", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "app-theme-product", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap("title-gradient");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(9, _c051))("options", ctx_r0.productSlider5)("slider", true);
  }
}
function GradientComponent_For_23_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36)(1, "div", 37);
    \u0275\u0275element(2, "img", 38);
    \u0275\u0275elementStart(3, "div", 39)(4, "div")(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const coupon_r6 = ctx_r4.$implicit;
    const \u0275$index_100_r7 = ctx_r4.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.images[\u0275$index_100_r7 % ctx_r0.images.length], \u0275\u0275sanitizeUrl)("alt", coupon_r6 == null ? null : coupon_r6.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(coupon_r6 == null ? null : coupon_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", coupon_r6 == null ? null : coupon_r6.code, "");
  }
}
function GradientComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GradientComponent_For_23_ng_template_0_Template, 9, 4, "ng-template", 18);
  }
}
function GradientComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19);
    \u0275\u0275element(1, "app-theme-parallax-banner", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.banner_1)("text_right", true);
  }
}
function GradientComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19);
    \u0275\u0275element(1, "app-theme-parallax-banner", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.parallax_banner == null ? null : ctx_r0.data.content.parallax_banner.banner_2);
  }
}
function GradientComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 41);
    \u0275\u0275element(3, "app-theme-title", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "section", 42)(5, "div", 21);
    \u0275\u0275element(6, "app-theme-blog", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMap("title-gradient");
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(7, _c051))("option", ctx_r0.blogSlider4)("blogEffect", "basic-effect");
  }
}
function GradientComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20);
    \u0275\u0275element(1, "app-theme-social-media", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container-fluid");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c051))("type", "borderless");
  }
}
function GradientComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15);
    \u0275\u0275element(1, "app-theme-brand", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c051));
  }
}
var GradientComponent = class _GradientComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider5 = productSlider5;
    this.blogSlider4 = blogSlider4;
    this.images = [
      "assets/images/gradient/deal-bg/1.jpg",
      "assets/images/gradient/deal-bg/2.jpg",
      "assets/images/gradient/deal-bg/3.jpg",
      "assets/images/gradient/deal-bg/4.jpg",
      "assets/images/gradient/deal-bg/5.jpg",
      "assets/images/gradient/deal-bg/6.jpg"
    ];
    this.options = {
      loop: true,
      nav: false,
      dots: false,
      margin: 24,
      responsive: {
        0: {
          items: 2,
          margin: 12
        },
        600: {
          items: 3,
          margin: 12
        },
        700: {
          items: 4
        },
        1050: {
          items: 5
        },
        1296: {
          items: 6
        }
      }
    };
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      this.store.dispatch(new GetCoupons({ status: 1 }));
      let categoryIds = this.data?.content?.category_product?.category_ids.concat(this.data?.content?.categories_1?.category_ids);
      let getProducts$;
      if (this.data?.content?.products_ids?.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      let getCategory$;
      if (categoryIds?.length) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$, getBrands$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnChanges(change) {
    if (change["data"] && change["data"].currentValue) {
      this.filteredBanners = change["data"]?.currentValue?.content?.offer_banner?.banners?.filter((banner) => {
        return banner.status;
      });
    }
  }
  static {
    this.\u0275fac = function GradientComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GradientComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GradientComponent, selectors: [["app-gradient"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 30, vars: 13, consts: [[1, "p-0"], [1, "home-slider"], [3, "banners"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [1, "pb-0", "ratio2_1"], [1, "gradient-slider", "pt-0"], [1, "section-b-space"], [1, "container-lg", "container"], [3, "options"], ["carouselSlide", ""], [1, "p-0", "pet-parallax"], [1, "instagram", "ratio_square", "gym-parallax"], [1, "container", "container-lg"], [3, "categoryIds"], [1, "row", "g-sm-4", "g-3"], [3, "ngClass"], [1, "col-12"], [1, "position-relative"], [3, "image", "bgImage"], [1, "banner-skeleton"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "col-lg-9", "col-12"], [3, "title", "type"], [1, "pt-0"], [3, "categoryIds", "showItems"], [3, "productIds", "options", "slider"], ["href", "javascript:void(0)"], [1, "deal-category"], [1, "img-fluid", "w-100", 3, "src", "alt"], [1, "deal-content"], [3, "banners", "text_right"], [1, "col"], [1, "blog", "left-blog", "pt-0", "ratio_115"], [3, "blogIds", "option", "blogEffect"], [3, "media", "type"], [3, "brandIds"]], template: function GradientComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-theme-home-slider", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8)(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 11);
        \u0275\u0275element(12, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275template(15, GradientComponent_Conditional_15_Template, 3, 4, "section")(16, GradientComponent_Conditional_16_Template, 5, 0, "section", 13)(17, GradientComponent_Conditional_17_Template, 4, 10)(18, GradientComponent_Conditional_18_Template, 6, 10, "section", 14);
        \u0275\u0275elementStart(19, "section", 15)(20, "div", 16)(21, "owl-carousel-o", 17);
        \u0275\u0275repeaterCreate(22, GradientComponent_For_23_Template, 1, 0, null, 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(25, GradientComponent_Conditional_25_Template, 2, 2, "section", 19)(26, GradientComponent_Conditional_26_Template, 2, 1, "section", 19)(27, GradientComponent_Conditional_27_Template, 7, 8)(28, GradientComponent_Conditional_28_Template, 2, 5, "section", 20)(29, GradientComponent_Conditional_29_Template, 2, 2, "section", 15);
      }
      if (rf & 2) {
        let tmp_6_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("banners", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner);
        \u0275\u0275advance(13);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_1 == null ? null : ctx.data.content.categories_1.status) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners.length ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 18 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("options", ctx.options);
        \u0275\u0275advance();
        \u0275\u0275repeater((tmp_6_0 = \u0275\u0275pipeBind1(24, 11, ctx.coupon$)) == null ? null : tmp_6_0.data);
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_banner == null ? null : ctx.data.content.parallax_banner.banner_1 == null ? null : ctx.data.content.parallax_banner.banner_1.status) ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.parallax_banner == null ? null : ctx.data.content.parallax_banner.banner_2 == null ? null : ctx.data.content.parallax_banner.banner_2.status) ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 29 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      AsyncPipe,
      CarouselModule,
      CarouselComponent,
      CarouselSlideDirective,
      ThemeHomeSliderComponent,
      CategoriesComponent,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductTabSectionComponent,
      ThemeProductComponent,
      ThemeParallaxBannerComponent,
      ThemeBlogComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent
    ] });
  }
};
__decorate([
  Select(CouponState.coupon)
], GradientComponent.prototype, "coupon$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GradientComponent, { className: "GradientComponent" });
})();

// src/app/components/home/video/video.component.ts
var VideoComponent = class _VideoComponent {
  constructor() {
    this.StorageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function VideoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VideoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VideoComponent, selectors: [["app-video"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "p-0"], [1, "home-slider"], ["alt", "banner", 1, "bg-img", "w-100", 3, "src"]], template: function VideoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "a");
        \u0275\u0275element(3, "img", 2);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.StorageURL + (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.video == null ? null : ctx.data.content.video.video_url), \u0275\u0275sanitizeUrl);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VideoComponent, { className: "VideoComponent" });
})();

// src/app/components/home/full-page/full-page.component.ts
var _c052 = () => ({ draggable: true });
var _c115 = () => ({ delay: 1e3, disableOnInteraction: false });
function FullPageComponent_Conditional_1_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-image-link", 4);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("image", item_r1);
  }
}
function FullPageComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FullPageComponent_Conditional_1_For_2_ng_template_0_Template, 1, 1, "ng-template", 3);
  }
  if (rf & 2) {
    const \u0275$index_6_r2 = ctx.$index;
    \u0275\u0275property("data-swiper-autoplay", 2e3 * (\u0275$index_6_r2 + 1));
  }
}
function FullPageComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "swiper", 1);
    \u0275\u0275repeaterCreate(1, FullPageComponent_Conditional_1_For_2_Template, 1, 1, null, 2, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("direction", "vertical")("loop", true)("autoHeight", true)("mousewheel", true)("allowTouchMove", true)("scrollbar", \u0275\u0275pureFunction0(7, _c052))("autoplay", \u0275\u0275pureFunction0(8, _c115));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredBanners);
  }
}
core_default.use([Navigation, Pagination, Autoplay, Mousewheel]);
var FullPageComponent = class _FullPageComponent {
  ngOnChanges(change) {
    this.filteredBanners = change["data"]?.currentValue?.content?.home_banner?.banners?.filter((banner) => {
      return banner.status;
    });
  }
  static {
    this.\u0275fac = function FullPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullPageComponent, selectors: [["app-full-page"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "home-slider", "fullpage", "full-slider"], [1, "height-vh", 3, "direction", "loop", "autoHeight", "mousewheel", "allowTouchMove", "scrollbar", "autoplay"], ["swiperSlide", ""], ["swiperSlide", "", 3, "data-swiper-autoplay"], [3, "image"]], template: function FullPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, FullPageComponent_Conditional_1_Template, 3, 9, "swiper", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners && ctx.filteredBanners.length ? 1 : -1);
      }
    }, dependencies: [SwiperModule, SwiperComponent, SwiperSlideDirective, CommonModule, ImageLinkComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullPageComponent, { className: "FullPageComponent" });
})();

// src/app/components/home/parallax/parallax.component.ts
function ParallaxComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1);
    \u0275\u0275element(1, "app-theme-parallax-banner", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    const \u0275$index_4_r2 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275classMap("parallax-layout");
    \u0275\u0275property("banners", banner_r1)("text_right", \u0275$index_4_r2 % 2 != 0 ? true : false);
  }
}
function ParallaxComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ParallaxComponent_Conditional_1_For_1_Template, 2, 4, "section", 1, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filteredBanners);
  }
}
var ParallaxComponent = class _ParallaxComponent {
  ngOnChanges(change) {
    this.filteredBanners = change["data"]?.currentValue?.content?.parallax_banner?.banners?.filter((banner) => {
      return banner.status;
    });
  }
  static {
    this.\u0275fac = function ParallaxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParallaxComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParallaxComponent, selectors: [["app-parallax"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "parallax-cls"], [1, "p-0"], [3, "banners", "text_right"]], template: function ParallaxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ParallaxComponent_Conditional_1_Template, 2, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners && ctx.filteredBanners.length ? 1 : -1);
      }
    }, dependencies: [ThemeParallaxBannerComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParallaxComponent, { className: "ParallaxComponent" });
})();

// src/app/components/home/vegetables/vegetables-4/vegetables-4.component.ts
var _c053 = () => [];
function Vegetables4Component_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 5)(2, "div", 21);
    \u0275\u0275element(3, "app-categories", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vegetable");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.category_ids) || \u0275\u0275pureFunction0(4, _c053))("slider", true);
  }
}
function Vegetables4Component_Conditional_16_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 25);
    \u0275\u0275element(2, "app-image-link", 2);
    \u0275\u0275elementStart(3, "div", 26)(4, "div", 4)(5, "p", 27)(6, "span", 28);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275element(9, "span", 10);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.filteredBanners.length === 3 ? "col-lg-4 col-6" : ctx_r0.filteredBanners.length === 2 ? "col-6" : "col-12");
    \u0275\u0275advance(2);
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function Vegetables4Component_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "div", 5)(2, "div", 23);
    \u0275\u0275repeaterCreate(3, Vegetables4Component_Conditional_16_For_4_Template, 10, 5, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.filteredBanners);
  }
}
function Vegetables4Component_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 5)(2, "div", 6)(3, "div", 30);
    \u0275\u0275element(4, "app-theme-title", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275element(6, "app-theme-product", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1)("type", "vegetable");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_1 == null ? null : ctx_r0.data.content.products_list_1.product_ids) || \u0275\u0275pureFunction0(7, _c053))("options", ctx_r0.productSlider6)("slider", true);
  }
}
function Vegetables4Component_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 5)(2, "div", 6)(3, "div", 30);
    \u0275\u0275element(4, "app-theme-title", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275element(6, "app-theme-product", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2)("type", "vegetable");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.product_ids) || \u0275\u0275pureFunction0(7, _c053))("options", ctx_r0.productSlider6)("slider", true);
  }
}
function Vegetables4Component_Conditional_19_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "app-image-link", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.filteredBanners2.length === 3 ? "col-lg-4 col-sm-6" : ctx_r0.filteredBanners2.length === 2 ? "col-sm-6" : "col-12");
    \u0275\u0275advance();
    \u0275\u0275classMap("collection-banner");
    \u0275\u0275property("image", banner_r3)("bgImage", true);
  }
}
function Vegetables4Component_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 5)(2, "div", 33)(3, "div", 23);
    \u0275\u0275repeaterCreate(4, Vegetables4Component_Conditional_19_For_5_Template, 2, 5, "div", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.filteredBanners2);
  }
}
function Vegetables4Component_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 17)(1, "div", 5)(2, "div", 6)(3, "div", 30);
    \u0275\u0275element(4, "app-theme-title", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275element(6, "app-theme-product", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3)("type", "vegetable");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_3 == null ? null : ctx_r0.data.content.products_list_3.product_ids) || \u0275\u0275pureFunction0(7, _c053))("options", ctx_r0.productSlider6)("slider", true);
  }
}
function Vegetables4Component_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 18)(1, "div", 5);
    \u0275\u0275element(2, "app-theme-services", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("services", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.banners);
  }
}
function Vegetables4Component_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 5)(2, "div", 6)(3, "div", 30);
    \u0275\u0275element(4, "app-theme-title", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275element(6, "app-theme-product", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_4)("type", "vegetable");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_4 == null ? null : ctx_r0.data.content.products_list_4.product_ids) || \u0275\u0275pureFunction0(7, _c053))("options", ctx_r0.productSlider6)("slider", true);
  }
}
function Vegetables4Component_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 19)(1, "div", 5)(2, "div", 6)(3, "div", 30);
    \u0275\u0275element(4, "app-theme-title", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275element(6, "app-theme-blog", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "vegetable");
    \u0275\u0275advance(2);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c053));
  }
}
function Vegetables4Component_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20);
    \u0275\u0275element(1, "app-theme-brand", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c053));
  }
}
var Vegetables4Component = class _Vegetables4Component {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider6 = productSlider6;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProduct$;
      if (this.data?.content?.products_ids?.length) {
        getProduct$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProduct$ = of(null);
      }
      let getCategory$;
      if (this.data?.content.categories.category_ids?.length && this.data?.content.categories?.status) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: this.data?.content.categories.category_ids?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlogs$;
      if (this.data?.content?.featured_blogs.blog_ids.length && this.data?.content?.featured_blogs?.status) {
        getBlogs$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content.featured_blogs.blog_ids?.join(",")
        }));
      } else {
        getBlogs$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        document.body.classList.add("mulish-font");
        forkJoin([getProduct$, getBlogs$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnChanges(change) {
    if (change["data"] && change["data"].currentValue) {
      this.filteredBanners = change["data"]?.currentValue?.content?.offer_banner_1?.banners?.filter((banner) => {
        return banner.status;
      });
      this.filteredBanners2 = change["data"]?.currentValue?.content?.offer_banner_2?.banners?.filter((banner) => {
        return banner.status;
      });
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("mulish-font");
    }
  }
  static {
    this.\u0275fac = function Vegetables4Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Vegetables4Component)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Vegetables4Component, selectors: [["app-vegetables-4"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 25, vars: 14, consts: [[1, "p-0"], [1, "home-slider"], [3, "image", "bgImage"], [1, "home-skeleton"], [1, "skeleton-content"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-sm-8", "col-11"], [1, "card-text", "placeholder-glow", "row", "g-lg-4", "g-sm-3", "g-2"], [1, "col-7"], [1, "placeholder"], [1, "col-9"], [1, "col-6"], [1, "vegetables-category"], [1, "banner-section", "ratio2_1"], [1, "six-items"], [1, "gift-card-section", "ratio2_1", "banner-section"], [1, "six-items", "deal-product-space", "section-b-space"], [1, "service-w-bg", "banner-padding", "theme-bg-service", "pt-0"], [1, "blog", "left-blog", "ratio3_2", "section-b-space"], [1, "section-b-space"], [1, "vector-slide-8", "ratio_square"], [3, "categoryIds", "slider"], [1, "row", "g-sm-4", "g-3"], [3, "class"], [1, "position-relative"], [1, "banner-skeleton"], [1, "card-text", "placeholder-glow", "row", "g-lg-3", "g-0"], [1, "col-lg-7", "col-9"], [1, "col-lg-9", "col-12"], [1, "col-12"], [3, "title", "type"], [3, "productIds", "options", "slider"], [1, "card-box"], [3, "ngClass"], [3, "services"], [1, "col-md-12"], [3, "blogIds"], [3, "brandIds"]], template: function Vegetables4Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-link", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "p", 8)(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 11);
        \u0275\u0275element(12, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12);
        \u0275\u0275element(14, "span", 10);
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275template(15, Vegetables4Component_Conditional_15_Template, 4, 5, "section", 13)(16, Vegetables4Component_Conditional_16_Template, 5, 0, "section", 14)(17, Vegetables4Component_Conditional_17_Template, 7, 8, "section", 15)(18, Vegetables4Component_Conditional_18_Template, 7, 8, "section", 15)(19, Vegetables4Component_Conditional_19_Template, 6, 0, "section", 16)(20, Vegetables4Component_Conditional_20_Template, 7, 8, "section", 17)(21, Vegetables4Component_Conditional_21_Template, 3, 1, "section", 18)(22, Vegetables4Component_Conditional_22_Template, 7, 8, "section", 15)(23, Vegetables4Component_Conditional_23_Template, 7, 4, "section", 19)(24, Vegetables4Component_Conditional_24_Template, 2, 2, "section", 20);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classMap("home");
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner)("bgImage", false);
        \u0275\u0275advance(13);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners && ctx.filteredBanners.length ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_1 == null ? null : ctx.data.content.products_list_1.product_ids) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.product_ids) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredBanners2 && ctx.filteredBanners2.length ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_3 == null ? null : ctx.data.content.products_list_3.product_ids) ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services) ? 21 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_4 == null ? null : ctx.data.content.products_list_4.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_4 == null ? null : ctx.data.content.products_list_4.product_ids) ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.blog_ids) ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 24 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      ImageLinkComponent,
      CategoriesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeServicesComponent,
      ThemeBlogComponent,
      ThemeBrandComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Vegetables4Component, { className: "Vegetables4Component" });
})();

// src/app/components/home/surfboard/surfboard.component.ts
var _c054 = () => [];
function SurfboardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 5);
    \u0275\u0275element(2, "app-theme-home-slider", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("banners", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner);
  }
}
function SurfboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 7);
    \u0275\u0275element(2, "app-theme-title", 8)(3, "app-categories", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories)("type", "basic");
    \u0275\u0275advance();
    \u0275\u0275styleMap("basic");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories == null ? null : ctx_r0.data.content.categories.category_ids) || \u0275\u0275pureFunction0(6, _c054))("slider", true);
  }
}
function SurfboardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 10)(2, "div", 7)(3, "div", 11)(4, "div", 12);
    \u0275\u0275element(5, "app-theme-title", 13)(6, "app-theme-product", 14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic")("space", false);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("options", ctx_r0.productSlider5)("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(9, _c054))("options", ctx_r0.productSlider4)("slider", true);
  }
}
function SurfboardComponent_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-image-link", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const banner_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("image", banner_r2)("bgImage", true);
  }
}
function SurfboardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 7)(2, "div", 15);
    \u0275\u0275repeaterCreate(3, SurfboardComponent_Conditional_3_For_4_Template, 2, 2, "div", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.banners);
  }
}
function SurfboardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 10)(2, "div", 7)(3, "div", 11)(4, "div", 12);
    \u0275\u0275element(5, "app-theme-title", 13)(6, "app-theme-product-tab-section", 18);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic")("space", false);
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids);
  }
}
function SurfboardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3);
    \u0275\u0275element(1, "app-theme-social-media", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c054))("type", "borderless");
  }
}
function SurfboardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "app-theme-brand", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c054));
  }
}
var SurfboardComponent = class _SurfboardComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider5 = productSlider5;
    this.productSlider4 = productSlider4;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids.length && this.data?.content?.products_list?.status) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      let categoryIds = [];
      if (this.data?.content?.categories?.category_ids?.length)
        categoryIds = [...categoryIds, ...this.data?.content?.categories?.category_ids];
      if (this.data?.content?.category_product?.category_ids?.length)
        categoryIds = [...categoryIds, ...this.data?.content?.category_product?.category_ids];
      if (categoryIds?.length && (this.data?.content.categories.category_ids || this.data?.content.category_product?.status)) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids?.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getCategory$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnChanges(change) {
    this.banners = change["data"]?.currentValue?.content?.offer_banner?.banners.filter((banner) => {
      return banner.status;
    });
  }
  static {
    this.\u0275fac = function SurfboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SurfboardComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurfboardComponent, selectors: [["app-surfboard"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 7, vars: 7, consts: [[1, "p-0"], [1, "section-b-space", "pt-0"], [1, "banner-6", "ratio2_1", "section-t-space", "section-b-space"], [1, "instagram", "ratio_square"], [1, "section-b-space"], [1, "home-slider"], [3, "banners"], [1, "container"], [3, "title", "type"], [3, "categoryIds", "slider"], [1, "tab-bg", "tab-grey-bg"], [1, "row"], [1, "col"], [3, "title", "type", "space"], [3, "options", "productIds", "slider"], [1, "row", "g-sm-4", "g-3"], [1, "col-6"], [3, "image", "bgImage"], [3, "categoryIds"], [3, "media", "type"], [3, "brandIds"]], template: function SurfboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SurfboardComponent_Conditional_0_Template, 3, 1, "section", 0)(1, SurfboardComponent_Conditional_1_Template, 4, 7, "section", 1)(2, SurfboardComponent_Conditional_2_Template, 7, 10, "section", 0)(3, SurfboardComponent_Conditional_3_Template, 5, 0, "section", 2)(4, SurfboardComponent_Conditional_4_Template, 7, 6, "section", 0)(5, SurfboardComponent_Conditional_5_Template, 2, 5, "section", 3)(6, SurfboardComponent_Conditional_6_Template, 2, 2, "section", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner) ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories == null ? null : ctx.data.content.categories.status) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.banners && ctx.banners.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 6 : -1);
      }
    }, dependencies: [
      CommonModule,
      ThemeHomeSliderComponent,
      ThemeTitleComponent,
      CategoriesComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      RouterModule,
      ImageLinkComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurfboardComponent, { className: "SurfboardComponent" });
})();

// src/app/components/home/digital-download/digital-download.component.ts
var _c055 = (a0) => ({ "background-image": a0 });
var _c116 = () => [];
function DigitalDownloadComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 5)(2, "div", 1)(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div")(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 10);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
    \u0275\u0275element(16, "img", 13)(17, "img", 14);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c055, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.background_image) + ")"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 6, "shop_now"));
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.sub_image_1), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.sub_image_2), \u0275\u0275sanitizeUrl);
  }
}
function DigitalDownloadComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "section", 15);
    \u0275\u0275element(2, "app-categories", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleMap("digital_download");
    \u0275\u0275property("categoryIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.categories_icon_list == null ? null : ctx_r0.data.content.categories_icon_list.category_ids) || \u0275\u0275pureFunction0(4, _c116))("slider", true);
  }
}
function DigitalDownloadComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-theme-title", 17);
    \u0275\u0275elementStart(1, "section", 18)(2, "div", 1);
    \u0275\u0275element(3, "app-theme-product", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "basic");
    \u0275\u0275advance(3);
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(7, _c116))("slider", true)("options", ctx_r0.productSlider3);
  }
}
function DigitalDownloadComponent_Conditional_3_Conditional_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-button", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-outline");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel)("type", "button_link");
  }
}
function DigitalDownloadComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 22)(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23)(8, "a", 10);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DigitalDownloadComponent_Conditional_3_Conditional_3_Conditional_11_Template, 1, 4, "app-button", 24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "view_all"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.more_button) ? 11 : -1);
  }
}
function DigitalDownloadComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "div", 1)(2, "div", 6);
    \u0275\u0275template(3, DigitalDownloadComponent_Conditional_3_Conditional_3_Template, 12, 6, "div", 20);
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275element(5, "app-theme-product", 19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c055, "url(" + ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.image_url) + ")"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.left_panel == null ? null : ctx_r0.data.content.products_list_2.left_panel.status) ? "col-lg-8" : "col-xl-12 col-lg-8");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list_2 == null ? null : ctx_r0.data.content.products_list_2.products == null ? null : ctx_r0.data.content.products_list_2.products.product_ids) || \u0275\u0275pureFunction0(10, _c116))("slider", true)("options", ctx_r0.productSlider2);
  }
}
function DigitalDownloadComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 3)(1, "div", 1);
    \u0275\u0275element(2, "app-theme-title", 17)(3, "app-theme-product-tab-section", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product)("type", "basic");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("categoryIds", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.category_product == null ? null : ctx_r0.data.content.category_product.category_ids)("slider", true)("options", ctx_r0.productSlider3);
  }
}
function DigitalDownloadComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "div", 7);
    \u0275\u0275element(3, "app-theme-title", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "section", 27)(5, "div", 1)(6, "div", 6)(7, "div", 28);
    \u0275\u0275element(8, "app-theme-blog", 29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs)("type", "basic");
    \u0275\u0275advance(5);
    \u0275\u0275property("blogIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.featured_blogs == null ? null : ctx_r0.data.content.featured_blogs.blog_ids) || \u0275\u0275pureFunction0(3, _c116));
  }
}
var DigitalDownloadComponent = class _DigitalDownloadComponent {
  constructor(store, platformId, themeOptionService) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.productSlider3 = productSlider3;
    this.productSlider2 = productSlider2;
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnInit() {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids?.length && this.data?.content?.products_list?.status) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getCategory$;
      let categoryIds = this.data?.content.category_product.category_ids.concat(this.data.content.categories_icon_list.category_ids);
      if (categoryIds) {
        getCategory$ = this.store.dispatch(new GetCategories({
          status: 1,
          ids: categoryIds?.join(",")
        }));
      } else {
        getCategory$ = of(null);
      }
      let getBlog$;
      if (this.data?.content?.featured_blogs?.blog_ids?.length && this.data?.content?.featured_blogs?.status) {
        getBlog$ = this.store.dispatch(new GetBlogs({
          status: 1,
          ids: this.data?.content?.featured_blogs?.blog_ids?.join(",")
        }));
      } else {
        getBlog$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body", "digital-download");
        forkJoin([getProducts$, getCategory$, getBlog$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
    }
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("digital-download");
    }
  }
  static {
    this.\u0275fac = function DigitalDownloadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DigitalDownloadComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DigitalDownloadComponent, selectors: [["app-digital-download"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 6, consts: [[1, "p-0", "height-85", "nft-home", 3, "ngStyle"], [1, "container"], [1, "ratio_digital", "nft-collection-section", 3, "ngStyle"], [1, "ratio_digital", "pt-0"], [1, "blog-section", "pt-0"], [1, "home-slider"], [1, "row"], [1, "col"], [1, "slider-contain"], [1, "d-lg-block", "d-none"], ["href", "javascript:void(0)", 1, "btn", "btn-solid"], [1, "col-lg-7", "col-6", "d-md-inline-block", "d-none", "position-relative"], [1, "slider-img"], ["alt", "", 1, "img-fluid", "sm-img", 3, "src"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "section-b-space", "border-section", "border-top-0", "category-width"], [3, "categoryIds", "slider"], [3, "title", "type"], [1, "section-b-space", "pt-0"], [3, "productIds", "slider", "options"], [1, "col-lg-4", "left-panel"], [3, "ngClass"], [1, "product-left-title"], [1, "d-flex", "gap-2"], [3, "data", "type", "class"], [3, "data", "type"], [3, "categoryIds", "slider", "options"], [1, "blog", "pt-0", "section-b-space", "ratio2_3"], [1, "col-md-12"], [3, "blogIds"]], template: function DigitalDownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DigitalDownloadComponent_Conditional_0_Template, 18, 10, "section", 0)(1, DigitalDownloadComponent_Conditional_1_Template, 3, 5, "div", 1)(2, DigitalDownloadComponent_Conditional_2_Template, 4, 8)(3, DigitalDownloadComponent_Conditional_3_Template, 6, 11, "section", 2)(4, DigitalDownloadComponent_Conditional_4_Template, 4, 7, "section", 3);
        \u0275\u0275elementStart(5, "section", 4);
        \u0275\u0275template(6, DigitalDownloadComponent_Conditional_6_Template, 9, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.status) ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.categories_icon_list == null ? null : ctx.data.content.categories_icon_list.status) ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list_2 == null ? null : ctx.data.content.products_list_2.status) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.category_product == null ? null : ctx.data.content.category_product.status) ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.featured_blogs == null ? null : ctx.data.content.featured_blogs.status) ? 6 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      CategoriesComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeProductTabSectionComponent,
      ThemeBlogComponent,
      TranslateModule,
      TranslatePipe,
      ButtonComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DigitalDownloadComponent, { className: "DigitalDownloadComponent" });
})();

// src/app/components/home/single-product/single-product.component.ts
var _c056 = () => [];
function SingleProductComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-button", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("btn gradient-btn");
    \u0275\u0275property("data", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner)("type", "button_link");
  }
}
function SingleProductComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 3)(2, "div", 14);
    \u0275\u0275element(3, "div", 15);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SingleProductComponent_Conditional_0_Conditional_6_Template, 1, 4, "app-button", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275element(8, "img", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("innerHTML", ctx_r0.getText((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.title) || ""), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.description);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.show_button) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.home_banner == null ? null : ctx_r0.data.content.home_banner.banner_image), \u0275\u0275sanitizeUrl);
  }
}
function SingleProductComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.left_panel == null ? null : ctx_r0.data.content.services.left_panel.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.left_panel == null ? null : ctx_r0.data.content.services.left_panel.description);
  }
}
function SingleProductComponent_Conditional_1_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "div", 25);
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.StorageURL + service_r2.image_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r2.description);
  }
}
function SingleProductComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "ul", 23);
    \u0275\u0275repeaterCreate(2, SingleProductComponent_Conditional_1_Conditional_4_For_3_Template, 8, 3, "li", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredServices);
  }
}
function SingleProductComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 3)(2, "div", 20);
    \u0275\u0275template(3, SingleProductComponent_Conditional_1_Conditional_3_Template, 6, 2, "div", 21)(4, SingleProductComponent_Conditional_1_Conditional_4_Template, 4, 0, "div", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.services == null ? null : ctx_r0.data.content.services.left_panel == null ? null : ctx_r0.data.content.services.left_panel.status) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.filteredServices && ctx_r0.filteredServices.length ? 4 : -1);
  }
}
function SingleProductComponent_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function SingleProductComponent_Conditional_13_Conditional_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal(ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video == null ? null : ctx_r0.data.content.product_video.video) || "", "video"));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275element(2, "i", 33);
    \u0275\u0275elementEnd()();
  }
}
function SingleProductComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "div", 3)(2, "div", 27)(3, "div", 28)(4, "a", 29)(5, "div", 30);
    \u0275\u0275element(6, "img", 18);
    \u0275\u0275template(7, SingleProductComponent_Conditional_13_Conditional_7_Template, 3, 0, "div", 31);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r0.StorageURL + (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video == null ? null : ctx_r0.data.content.product_video.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.product_video == null ? null : ctx_r0.data.content.product_video.video) ? 7 : -1);
  }
}
function SingleProductComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 9)(1, "div", 3);
    \u0275\u0275element(2, "app-theme-title", 34)(3, "app-theme-product", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list)("type", "single_product");
    \u0275\u0275advance();
    \u0275\u0275styleMap("vertical");
    \u0275\u0275property("productIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.products_list == null ? null : ctx_r0.data.content.products_list.product_ids) || \u0275\u0275pureFunction0(6, _c056))("slider", true);
  }
}
function SingleProductComponent_Conditional_18_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275element(3, "img", 18);
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40)(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const testimonial_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.StorageURL + testimonial_r4.image_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", testimonial_r4.review, " ");
  }
}
function SingleProductComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 11)(1, "div", 3);
    \u0275\u0275element(2, "app-theme-title", 34);
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275repeaterCreate(4, SingleProductComponent_Conditional_18_For_5_Template, 9, 3, "div", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("title", ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.testimonial)("type", "single_product");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.filteredTestimonial);
  }
}
function SingleProductComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12);
    \u0275\u0275element(1, "app-theme-social-media", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap("container-fluid");
    \u0275\u0275property("media", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.social_media) || \u0275\u0275pureFunction0(4, _c056))("type", "single_product");
  }
}
function SingleProductComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275element(1, "app-theme-brand", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("brandIds", (ctx_r0.data == null ? null : ctx_r0.data.content == null ? null : ctx_r0.data.content.brand == null ? null : ctx_r0.data.content.brand.brand_ids) || \u0275\u0275pureFunction0(1, _c056));
  }
}
var SingleProductComponent = class _SingleProductComponent {
  constructor(store, themeOptionService, modal, platformId) {
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.modal = modal;
    this.options = toolsCategorySlider;
    this.productSlider4 = productSlider4;
    this.singleProductIds = [];
    this.StorageURL = environment.storageURL;
    this.platformId = isPlatformBrowser(platformId);
  }
  ngOnChanges(change) {
    if (this.data?.slug == this.slug) {
      let getProducts$;
      if (this.data?.content?.products_ids?.length) {
        getProducts$ = this.store.dispatch(new GetProductByIds({
          status: 1,
          approve: 1,
          ids: this.data?.content?.products_ids?.join(","),
          paginate: this.data?.content?.products_ids?.length
        }));
      } else {
        getProducts$ = of(null);
      }
      let getBrands$;
      if (this.data?.content?.brand?.brand_ids.length && this.data?.content?.brand?.status) {
        getBrands$ = this.store.dispatch(new GetBrands({
          status: 1,
          ids: this.data?.content?.brand?.brand_ids?.join(",")
        }));
      } else {
        getBrands$ = of(null);
      }
      if (this.platformId) {
        document.body.classList.add("skeleton-body");
        forkJoin([getProducts$, getBrands$]).subscribe({
          complete: () => {
            document.body.classList.remove("skeleton-body");
            this.themeOptionService.preloader = false;
          }
        });
      }
      this.filteredServices = change["data"]?.currentValue?.content?.services?.right_panel?.banners?.filter((banner) => {
        return banner.status;
      });
      this.filteredTestimonial = change["data"]?.currentValue?.content?.testimonial?.banners?.filter((banner) => {
        return banner.status;
      });
      const productId = this.data?.content?.single_product?.product_ids;
      this.singleProductIds = Array.isArray(productId) ? productId : productId !== void 0 ? [productId] : [];
    }
  }
  ngOnInit() {
    if (this.platformId) {
      document.body.classList.add("single-product");
    }
  }
  getText(value) {
    const text = value.split(" ");
    const firstWord = text.slice(0, 3).join(" ");
    const remainingWord = text.slice(3).join(" ");
    return `<h1>${firstWord} <span>${remainingWord}</span></h1>`;
  }
  openModal(url, type) {
    const modal = this.modal.open(VideoModalComponent, { centered: true, size: "lg", windowClass: "theme-modal-2" });
    modal.componentInstance.video_url = url;
    modal.componentInstance.type = type;
  }
  ngOnDestroy() {
    if (this.platformId) {
      document.body.classList.remove("single-product");
    }
  }
  static {
    this.\u0275fac = function SingleProductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SingleProductComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SingleProductComponent, selectors: [["app-single-product"]], inputs: { data: "data", slug: "slug" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 21, vars: 23, consts: [[1, "p-0", "height-85", "single-home", "bg-size", 2, "background-image", "url('assets/images/single-product/bg.jpg')"], [1, "single-about-us"], [1, "single-banner-section"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [1, "col-md-6"], [3, "image", "bgImage"], [1, "col-12"], [1, "video-section"], [1, "deal-section"], [3, "productIds", "product_box_style"], [1, "comment-section"], [1, "instagram", "ratio_square"], [1, "section-b-space", "single-brand-section"], [1, "home-content"], [3, "innerHTML"], [3, "data", "type", "class"], [1, "home-img", "d-md-flex", "d-none"], ["alt", "", 1, "img-fluid", 3, "src"], [3, "data", "type"], [1, "row", "g-3"], [1, "col-lg-6"], [1, "about-left-box"], [1, "about-right-box"], [1, "right-box"], [1, "about-img"], [1, "about-content"], [1, "row"], [1, "col-md-12"], ["href", "javascript:void(0)"], [1, "video-img", "custom-border-radius", "overflow-hidden"], [1, "play-btn"], [1, "play-btn", 3, "click"], [1, "ri-play-fill"], [3, "title", "type"], [3, "productIds", "slider"], [1, "row", "comment-list-box", "g-4", "justify-content-center"], [1, "col-xl-4", "col-sm-6"], [1, "comment-box"], [1, "profile-name"], [1, "profile-detail"], [3, "media", "type"], [3, "brandIds"]], template: function SingleProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SingleProductComponent_Conditional_0_Template, 9, 4, "section", 0)(1, SingleProductComponent_Conditional_1_Template, 5, 2, "section", 1);
        \u0275\u0275elementStart(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275element(6, "app-image-link", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 4)(9, "div", 7);
        \u0275\u0275element(10, "app-image-link", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275element(12, "app-image-link", 6);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(13, SingleProductComponent_Conditional_13_Template, 8, 2, "section", 8);
        \u0275\u0275elementStart(14, "section", 9)(15, "div", 3);
        \u0275\u0275element(16, "app-theme-product", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, SingleProductComponent_Conditional_17_Template, 4, 7, "section", 9)(18, SingleProductComponent_Conditional_18_Template, 6, 2, "section", 11)(19, SingleProductComponent_Conditional_19_Template, 2, 5, "section", 12)(20, SingleProductComponent_Conditional_20_Template, 2, 2, "section", 13);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.home_banner == null ? null : ctx.data.content.home_banner.status) ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.services == null ? null : ctx.data.content.services.status) ? 1 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classMap("custom-border-radius");
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.grid_banner == null ? null : ctx.data.content.grid_banner.banner_1)("bgImage", false);
        \u0275\u0275advance(4);
        \u0275\u0275classMap("custom-border-radius");
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.grid_banner == null ? null : ctx.data.content.grid_banner.banner_2)("bgImage", false);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("custom-border-radius mt-xl-2");
        \u0275\u0275property("image", ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.grid_banner == null ? null : ctx.data.content.grid_banner.banner_3)("bgImage", false);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.product_video == null ? null : ctx.data.content.product_video.status) ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275styleMap("horizontal");
        \u0275\u0275property("productIds", ctx.singleProductIds)("product_box_style", "single_product");
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.status) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.products_list == null ? null : ctx.data.content.products_list.product_ids) ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.testimonial == null ? null : ctx.data.content.testimonial.status) && ctx.filteredTestimonial && ctx.filteredTestimonial.length ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.banners == null ? null : ctx.data.content.social_media.banners.length) && (ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.social_media == null ? null : ctx.data.content.social_media.status) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.data == null ? null : ctx.data.content == null ? null : ctx.data.content.brand == null ? null : ctx.data.content.brand.status) ? 20 : -1);
      }
    }, dependencies: [
      CommonModule,
      ImageLinkComponent,
      ThemeTitleComponent,
      ThemeProductComponent,
      ThemeSocialMediaComponent,
      ThemeBrandComponent,
      ButtonComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SingleProductComponent, { className: "SingleProductComponent" });
})();

// src/app/components/home/home.component.ts
function HomeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fashion-1", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fashion-2", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fashion-3", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fashion-4", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fashion-5", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fashion-6", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-fashion-7", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-furniture-1", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-furniture-2", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-furniture-dark", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-electronic-1", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-electronic-2", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-electronic-3", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-marketplace-1", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-marketplace-2", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-marketplace-3", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-marketplace-4", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vegetables-1", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vegetables-2", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vegetables-3", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vegetables-4", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-jewellery-1", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-jewellery-2", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-jewellery-3", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-bag", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-watch", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-medical", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-perfume", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-yoga", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-bicycle", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-marijuana", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-tools", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-christmas", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-shoes", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-kids", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-books", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-beauty", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-surfboard", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-goggles", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-gym", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video-slider", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-pets", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-nursery", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-game", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-flower", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-gradient", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-video", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-full-page", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parallax", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-digital-download", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
function HomeComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-single-product", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.homePage)("slug", ctx_r0.theme);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(store, route, themeOptionService) {
    this.store = store;
    this.route = route;
    this.themeOptionService = themeOptionService;
    this.route.queryParams.subscribe((params) => {
      this.themeOptionService.preloader = true;
      this.activeTheme$.subscribe((theme) => {
        this.theme = params["theme"] ? params["theme"] : theme;
        if (this.theme) {
          this.store.dispatch(new GetHomePage(params["theme"] ? params["theme"] : theme)).subscribe((data) => {
            this.homePage = data.theme.homePage;
            this.themeOptionService.preloader = false;
          });
        }
      });
    });
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 1, consts: [[3, "data", "slug"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, HomeComponent_Conditional_0_Template, 1, 2, "app-fashion-1", 0)(1, HomeComponent_Conditional_1_Template, 1, 2, "app-fashion-2", 0)(2, HomeComponent_Conditional_2_Template, 1, 2, "app-fashion-3", 0)(3, HomeComponent_Conditional_3_Template, 1, 2, "app-fashion-4", 0)(4, HomeComponent_Conditional_4_Template, 1, 2, "app-fashion-5", 0)(5, HomeComponent_Conditional_5_Template, 1, 2, "app-fashion-6", 0)(6, HomeComponent_Conditional_6_Template, 1, 2, "app-fashion-7", 0)(7, HomeComponent_Conditional_7_Template, 1, 2, "app-furniture-1", 0)(8, HomeComponent_Conditional_8_Template, 1, 2, "app-furniture-2", 0)(9, HomeComponent_Conditional_9_Template, 1, 2, "app-furniture-dark", 0)(10, HomeComponent_Conditional_10_Template, 1, 2, "app-electronic-1", 0)(11, HomeComponent_Conditional_11_Template, 1, 2, "app-electronic-2", 0)(12, HomeComponent_Conditional_12_Template, 1, 2, "app-electronic-3", 0)(13, HomeComponent_Conditional_13_Template, 1, 2, "app-marketplace-1", 0)(14, HomeComponent_Conditional_14_Template, 1, 2, "app-marketplace-2", 0)(15, HomeComponent_Conditional_15_Template, 1, 2, "app-marketplace-3", 0)(16, HomeComponent_Conditional_16_Template, 1, 2, "app-marketplace-4", 0)(17, HomeComponent_Conditional_17_Template, 1, 2, "app-vegetables-1", 0)(18, HomeComponent_Conditional_18_Template, 1, 2, "app-vegetables-2", 0)(19, HomeComponent_Conditional_19_Template, 1, 2, "app-vegetables-3", 0)(20, HomeComponent_Conditional_20_Template, 1, 2, "app-vegetables-4", 0)(21, HomeComponent_Conditional_21_Template, 1, 2, "app-jewellery-1", 0)(22, HomeComponent_Conditional_22_Template, 1, 2, "app-jewellery-2", 0)(23, HomeComponent_Conditional_23_Template, 1, 2, "app-jewellery-3", 0)(24, HomeComponent_Conditional_24_Template, 1, 2, "app-bag", 0)(25, HomeComponent_Conditional_25_Template, 1, 2, "app-watch", 0)(26, HomeComponent_Conditional_26_Template, 1, 2, "app-medical", 0)(27, HomeComponent_Conditional_27_Template, 1, 2, "app-perfume", 0)(28, HomeComponent_Conditional_28_Template, 1, 2, "app-yoga", 0)(29, HomeComponent_Conditional_29_Template, 1, 2, "app-bicycle", 0)(30, HomeComponent_Conditional_30_Template, 1, 2, "app-marijuana", 0)(31, HomeComponent_Conditional_31_Template, 1, 2, "app-tools", 0)(32, HomeComponent_Conditional_32_Template, 1, 2, "app-christmas", 0)(33, HomeComponent_Conditional_33_Template, 1, 2, "app-shoes", 0)(34, HomeComponent_Conditional_34_Template, 1, 2, "app-kids", 0)(35, HomeComponent_Conditional_35_Template, 1, 2, "app-books", 0)(36, HomeComponent_Conditional_36_Template, 1, 2, "app-beauty", 0)(37, HomeComponent_Conditional_37_Template, 1, 2, "app-surfboard", 0)(38, HomeComponent_Conditional_38_Template, 1, 2, "app-goggles", 0)(39, HomeComponent_Conditional_39_Template, 1, 2, "app-gym", 0)(40, HomeComponent_Conditional_40_Template, 1, 2, "app-video-slider", 0)(41, HomeComponent_Conditional_41_Template, 1, 2, "app-pets", 0)(42, HomeComponent_Conditional_42_Template, 1, 2, "app-nursery", 0)(43, HomeComponent_Conditional_43_Template, 1, 2, "app-game", 0)(44, HomeComponent_Conditional_44_Template, 1, 2, "app-flower", 0)(45, HomeComponent_Conditional_45_Template, 1, 2, "app-gradient", 0)(46, HomeComponent_Conditional_46_Template, 1, 2, "app-video", 0)(47, HomeComponent_Conditional_47_Template, 1, 2, "app-full-page", 0)(48, HomeComponent_Conditional_48_Template, 1, 2, "app-parallax", 0)(49, HomeComponent_Conditional_49_Template, 1, 2, "app-digital-download", 0)(50, HomeComponent_Conditional_50_Template, 1, 2, "app-single-product", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.homePage == null ? null : ctx.homePage.slug) == "fashion_one" ? 0 : (ctx.homePage == null ? null : ctx.homePage.slug) == "fashion_two" ? 1 : (ctx.homePage == null ? null : ctx.homePage.slug) == "fashion_three" ? 2 : (ctx.homePage == null ? null : ctx.homePage.slug) == "fashion_four" ? 3 : (ctx.homePage == null ? null : ctx.homePage.slug) == "fashion_five" ? 4 : (ctx.homePage == null ? null : ctx.homePage.slug) == "fashion_six" ? 5 : (ctx.homePage == null ? null : ctx.homePage.slug) == "fashion_seven" ? 6 : (ctx.homePage == null ? null : ctx.homePage.slug) == "furniture_one" ? 7 : (ctx.homePage == null ? null : ctx.homePage.slug) == "furniture_two" ? 8 : (ctx.homePage == null ? null : ctx.homePage.slug) == "furniture_dark" ? 9 : (ctx.homePage == null ? null : ctx.homePage.slug) == "electronics_one" ? 10 : (ctx.homePage == null ? null : ctx.homePage.slug) == "electronics_two" ? 11 : (ctx.homePage == null ? null : ctx.homePage.slug) == "electronics_three" ? 12 : (ctx.homePage == null ? null : ctx.homePage.slug) == "marketplace_one" ? 13 : (ctx.homePage == null ? null : ctx.homePage.slug) == "marketplace_two" ? 14 : (ctx.homePage == null ? null : ctx.homePage.slug) == "marketplace_three" ? 15 : (ctx.homePage == null ? null : ctx.homePage.slug) == "marketplace_four" ? 16 : (ctx.homePage == null ? null : ctx.homePage.slug) == "vegetables_one" ? 17 : (ctx.homePage == null ? null : ctx.homePage.slug) == "vegetables_two" ? 18 : (ctx.homePage == null ? null : ctx.homePage.slug) == "vegetables_three" ? 19 : (ctx.homePage == null ? null : ctx.homePage.slug) == "vegetables_four" ? 20 : (ctx.homePage == null ? null : ctx.homePage.slug) == "jewellery_one" ? 21 : (ctx.homePage == null ? null : ctx.homePage.slug) == "jewellery_two" ? 22 : (ctx.homePage == null ? null : ctx.homePage.slug) == "jewellery_three" ? 23 : (ctx.homePage == null ? null : ctx.homePage.slug) == "bag" ? 24 : (ctx.homePage == null ? null : ctx.homePage.slug) == "watch" ? 25 : (ctx.homePage == null ? null : ctx.homePage.slug) == "medical" ? 26 : (ctx.homePage == null ? null : ctx.homePage.slug) == "perfume" ? 27 : (ctx.homePage == null ? null : ctx.homePage.slug) == "yoga" ? 28 : (ctx.homePage == null ? null : ctx.homePage.slug) == "bicycle" ? 29 : (ctx.homePage == null ? null : ctx.homePage.slug) == "marijuana" ? 30 : (ctx.homePage == null ? null : ctx.homePage.slug) == "tools" ? 31 : (ctx.homePage == null ? null : ctx.homePage.slug) == "christmas" ? 32 : (ctx.homePage == null ? null : ctx.homePage.slug) == "shoes" ? 33 : (ctx.homePage == null ? null : ctx.homePage.slug) == "kids" ? 34 : (ctx.homePage == null ? null : ctx.homePage.slug) == "books" ? 35 : (ctx.homePage == null ? null : ctx.homePage.slug) == "beauty" ? 36 : (ctx.homePage == null ? null : ctx.homePage.slug) == "surfboard" ? 37 : (ctx.homePage == null ? null : ctx.homePage.slug) == "goggles" ? 38 : (ctx.homePage == null ? null : ctx.homePage.slug) == "gym" ? 39 : (ctx.homePage == null ? null : ctx.homePage.slug) == "video_slider" ? 40 : (ctx.homePage == null ? null : ctx.homePage.slug) == "pets" ? 41 : (ctx.homePage == null ? null : ctx.homePage.slug) == "nursery" ? 42 : (ctx.homePage == null ? null : ctx.homePage.slug) == "game" ? 43 : (ctx.homePage == null ? null : ctx.homePage.slug) == "flower" ? 44 : (ctx.homePage == null ? null : ctx.homePage.slug) == "gradient" ? 45 : (ctx.homePage == null ? null : ctx.homePage.slug) == "video" ? 46 : (ctx.homePage == null ? null : ctx.homePage.slug) == "full_page" ? 47 : (ctx.homePage == null ? null : ctx.homePage.slug) == "parallax" ? 48 : (ctx.homePage == null ? null : ctx.homePage.slug) == "digital_download" ? 49 : true ? 50 : -1);
      }
    }, dependencies: [
      CommonModule,
      Fashion1Component,
      Fashion2Component,
      Fashion3Component,
      Fashion4Component,
      Fashion5Component,
      Fashion6Component,
      Fashion7Component,
      Furniture1Component,
      Furniture2Component,
      FurnitureDarkComponent,
      Electronic1Component,
      Electronic2Component,
      Electronic3Component,
      Marketplace1Component,
      Marketplace2Component,
      Marketplace3Component,
      Marketplace4Component,
      Vegetables1Component,
      Vegetables2Component,
      Vegetables3Component,
      Vegetables4Component,
      Jewellery1Component,
      Jewellery2Component,
      Jewellery3Component,
      BagComponent,
      WatchComponent,
      MedicalComponent,
      PerfumeComponent,
      YogaComponent,
      BicycleComponent,
      MarijuanaComponent,
      ToolsComponent,
      ChristmasComponent,
      ShoesComponent,
      KidsComponent,
      BooksComponent,
      BeautyComponent,
      SurfboardComponent,
      GogglesComponent,
      GymComponent,
      VideoSliderComponent,
      PetsComponent,
      NurseryComponent,
      GameComponent,
      FlowerComponent,
      GradientComponent,
      VideoComponent,
      FullPageComponent,
      ParallaxComponent,
      DigitalDownloadComponent,
      SingleProductComponent
    ] });
  }
};
__decorate([
  Select(ThemeState.homePage)
], HomeComponent.prototype, "homePage$", void 0);
__decorate([
  Select(ThemeState.activeTheme)
], HomeComponent.prototype, "activeTheme$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();

// src/app/components/home/home.routes.ts
var home = [
  {
    path: "",
    component: HomeComponent
  }
];
export {
  home
};
//# sourceMappingURL=chunk-UN73DAHP.js.map
