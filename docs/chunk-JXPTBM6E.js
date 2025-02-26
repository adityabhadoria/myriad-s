import {
  GetTags,
  TagState
} from "./chunk-RHZG645K.js";
import {
  SeoService
} from "./chunk-JLOWZYSS.js";
import {
  BlogService,
  BlogState,
  CategoryState,
  GetBlogBySlug,
  GetBlogs,
  GetCategories,
  GetRecentBlog
} from "./chunk-MEGG5YRD.js";
import "./chunk-PQG4CYAW.js";
import "./chunk-ZHCF6HBW.js";
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
  DatePipe,
  NgClass,
  NgTemplateOutlet,
  NgbPagination,
  NoDataComponent,
  Router,
  RouterLink,
  RouterModule,
  Select,
  SlicePipe,
  Store,
  TranslateModule,
  TranslatePipe,
  __decorate,
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GDIBOM5I.js";

// src/app/components/blog/sidebar/blog-recent-post/blog-recent-post.component.ts
var _c0 = (a0) => ["/blog/", a0];
function BlogRecentPostComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 5)(9, "h5", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r1.blog_thumbnail ? blog_r1.blog_thumbnail.original_url : "assets/images/blog.png", \u0275\u0275sanitizeUrl)("alt", blog_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, blog_r1 == null ? null : blog_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, blog_r1 == null ? null : blog_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1 == null ? null : blog_r1.title);
  }
}
var BlogRecentPostComponent = class _BlogRecentPostComponent {
  constructor() {
    this.StorageURL = environment.storageURL;
  }
  static {
    this.\u0275fac = function BlogRecentPostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogRecentPostComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogRecentPostComponent, selectors: [["app-blog-recent-post"]], inputs: { blogs: "blogs" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 4, consts: [[1, "recent-blog"], [1, "media", "blog-box"], [1, "blog-image"], [1, "img-fluid", "lazyload", 3, "src", "alt"], [1, "media-body", "blog-content"], [3, "routerLink"], [1, "recent-name"]], template: function BlogRecentPostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, BlogRecentPostComponent_For_2_Template, 11, 10, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(3, "slice");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 0, ctx.blogs, 0, 5));
      }
    }, dependencies: [CommonModule, SlicePipe, DatePipe, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogRecentPostComponent, { className: "BlogRecentPostComponent" });
})();

// src/app/components/blog/sidebar/blog-category/blog-category.component.ts
var _c02 = (a0) => ({ $implicit: a0 });
var _c1 = () => ["/blogs"];
var _c2 = (a0) => ({ category: a0 });
function BlogCategoryComponent_Conditional_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", category_r1 == null ? null : category_r1.blogs_count, ")");
  }
}
function BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275template(1, BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275nextContext(2);
    const recursiveCategory_r2 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveCategory_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c02, category_r1.subcategories));
  }
}
function BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 3)(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Conditional_4_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Conditional_5_Template, 2, 4, "a", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c1))("queryParams", \u0275\u0275pureFunction1(6, _c2, category_r1 == null ? null : category_r1.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional((category_r1 == null ? null : category_r1.blogs_count) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((category_r1 == null ? null : category_r1.subcategories.length) ? 5 : -1);
  }
}
function BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Conditional_0_Template, 6, 8, "li");
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275conditional((category_r1 == null ? null : category_r1.type) == "post" ? 0 : -1);
  }
}
function BlogCategoryComponent_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, BlogCategoryComponent_Conditional_0_ng_template_3_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const categories_r3 = ctx.$implicit;
    \u0275\u0275repeater(categories_r3);
  }
}
function BlogCategoryComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 1);
    \u0275\u0275template(1, BlogCategoryComponent_Conditional_0_div_1_Template, 1, 0, "div", 2);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, BlogCategoryComponent_Conditional_0_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recursiveCategory_r2 = \u0275\u0275reference(4);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveCategory_r2)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c02, \u0275\u0275pipeBind3(2, 2, ctx_r3.data, 0, 10)));
  }
}
var BlogCategoryComponent = class _BlogCategoryComponent {
  static {
    this.\u0275fac = function BlogCategoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogCategoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCategoryComponent, selectors: [["app-blog-category"]], inputs: { data: "data" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["recursiveCategory", ""], [1, "categories"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "category-name", 3, "routerLink", "queryParams"], [1, "dropdown-menu"]], template: function BlogCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, BlogCategoryComponent_Conditional_0_Template, 5, 8, "ul", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.data.length || 0 > 5 ? 0 : -1);
      }
    }, dependencies: [CommonModule, NgTemplateOutlet, SlicePipe, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCategoryComponent, { className: "BlogCategoryComponent" });
})();

// src/app/components/blog/sidebar/blog-tag/blog-tag.component.ts
var _c03 = () => ["/blogs"];
var _c12 = (a0) => ({ tag: a0 });
function BlogTagComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c03))("queryParams", \u0275\u0275pureFunction1(4, _c12, tag_r1 == null ? null : tag_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1 == null ? null : tag_r1.name);
  }
}
var BlogTagComponent = class _BlogTagComponent {
  static {
    this.\u0275fac = function BlogTagComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogTagComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogTagComponent, selectors: [["app-blog-tag"]], inputs: { tags: "tags" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "tags"], [3, "routerLink", "queryParams"]], template: function BlogTagComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ul", 0);
        \u0275\u0275repeaterCreate(1, BlogTagComponent_For_2_Template, 3, 6, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.tags);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogTagComponent, { className: "BlogTagComponent" });
})();

// src/app/components/blog/skeleton-blog/skeleton-blog.component.ts
function SkeletonBlogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "a", 4);
    \u0275\u0275element(4, "h3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 5)(6, "a", 6);
    \u0275\u0275elementEnd()();
  }
}
function SkeletonBlogComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "ul");
    \u0275\u0275element(2, "li", 7)(3, "li", 8)(4, "li", 9)(5, "li", 10)(6, "li", 8)(7, "li", 7)(8, "li", 8)(9, "li", 11)(10, "li", 10)(11, "li", 8)(12, "li", 12)(13, "li", 8)(14, "li", 11)(15, "li", 10)(16, "li", 8)(17, "li", 7)(18, "li", 12)(19, "li", 13)(20, "li", 10)(21, "li", 8);
    \u0275\u0275elementEnd()();
  }
}
var SkeletonBlogComponent = class _SkeletonBlogComponent {
  constructor() {
    this.type = "grid";
  }
  static {
    this.\u0275fac = function SkeletonBlogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonBlogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonBlogComponent, selectors: [["app-skeleton-blog"]], inputs: { type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[1, "blog-skeleton", "blog-box"], [1, "left-skelton-box"], [1, "blog-image"], [1, "blog-contain"], ["href", ""], [1, "blog-label"], ["href", "", 1, "blog-button"], [1, "placeholder", "col-6"], [1, "placeholder", "col-7"], [1, "placeholder", "col-10"], [1, "placeholder", "col-9"], [1, "placeholder", "col-11"], [1, "placeholder", "col-8"], [1, "placeholder", "col-4"]], template: function SkeletonBlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SkeletonBlogComponent_Conditional_0_Template, 7, 0, "div", 0)(1, SkeletonBlogComponent_Conditional_1_Template, 22, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.type == "grid" ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.type == "sidebar" ? 1 : -1);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonBlogComponent, { className: "SkeletonBlogComponent" });
})();

// src/app/components/blog/sidebar/sidebar.component.ts
var _c04 = () => [];
function SidebarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-blog", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("type", "sidebar");
  }
}
function SidebarComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 6);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "Recent Blog");
  }
}
function SidebarComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 6);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_category");
  }
}
function SidebarComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 6);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "No Tag");
  }
}
function SidebarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-blog-recent-post", 2);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, SidebarComponent_Conditional_1_Conditional_6_Template, 1, 3, "app-no-data", 3);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 1)(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "app-blog-category", 4);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275template(14, SidebarComponent_Conditional_1_Conditional_14_Template, 1, 3, "app-no-data", 3);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 1)(17, "h4");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "app-blog-tag", 5);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275template(22, SidebarComponent_Conditional_1_Conditional_22_Template, 1, 3, "app-no-data", 3);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_8_0;
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "recent_blog"));
    \u0275\u0275advance(2);
    \u0275\u0275property("blogs", \u0275\u0275pipeBind1(5, 11, ctx_r0.resentBlog$) || \u0275\u0275pureFunction0(27, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_3_0 = \u0275\u0275pipeBind1(7, 13, ctx_r0.resentBlog$)) == null ? null : tmp_3_0.length) ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 15, "categories"));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ((tmp_5_0 = \u0275\u0275pipeBind1(13, 17, ctx_r0.category$)) == null ? null : tmp_5_0.data) || \u0275\u0275pureFunction0(28, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_6_0 = \u0275\u0275pipeBind1(15, 19, ctx_r0.category$)) == null ? null : tmp_6_0.data == null ? null : tmp_6_0.data.length) ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 21, "tags"));
    \u0275\u0275advance(2);
    \u0275\u0275property("tags", ((tmp_8_0 = \u0275\u0275pipeBind1(21, 23, ctx_r0.tag$)) == null ? null : tmp_8_0.data) || \u0275\u0275pureFunction0(29, _c04));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!((tmp_9_0 = \u0275\u0275pipeBind1(23, 25, ctx_r0.tag$)) == null ? null : tmp_9_0.data == null ? null : tmp_9_0.data.length) ? 22 : -1);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(blogService, store) {
    this.blogService = blogService;
    this.store = store;
    this.store.dispatch(new GetTags({ status: 1, type: "post" }));
    this.store.dispatch(new GetRecentBlog({ status: 1, type: "post", paginate: "5" }));
    this.store.dispatch(new GetCategories({ status: 1, type: "post" })).subscribe((result) => {
      this.category = result.category.category.data;
    });
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(BlogService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "type"], [1, "theme-card"], [3, "blogs"], [3, "class", "text"], [3, "data"], [3, "tags"], [3, "text"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SidebarComponent_Conditional_0_Template, 1, 1, "app-skeleton-blog", 0)(1, SidebarComponent_Conditional_1_Template, 24, 30);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.blogService.skeletonLoader ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      RouterModule,
      TranslateModule,
      TranslatePipe,
      BlogRecentPostComponent,
      BlogCategoryComponent,
      BlogTagComponent,
      SkeletonBlogComponent,
      NoDataComponent
    ] });
  }
};
__decorate([
  Select(BlogState.resentBlog)
], SidebarComponent.prototype, "resentBlog$", void 0);
__decorate([
  Select(CategoryState.category)
], SidebarComponent.prototype, "category$", void 0);
__decorate([
  Select(TagState.tag)
], SidebarComponent.prototype, "tag$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent" });
})();

// src/app/components/blog/blog.component.ts
var _c05 = (a0) => ["/blog/", a0];
function BlogComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-skeleton-blog");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.style === "list_view" ? "col-12 list_view" : "col-xxl-4 col-sm-6");
  }
}
function BlogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, BlogComponent_Conditional_5_For_2_Template, 2, 2, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeletonItems);
  }
}
function BlogComponent_Conditional_6_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "featured"));
  }
}
function BlogComponent_Conditional_6_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementEnd();
  }
}
function BlogComponent_Conditional_6_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r2 == null ? null : blog_r2.created_by == null ? null : blog_r2.created_by.name);
  }
}
function BlogComponent_Conditional_6_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 22);
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", blog_r2.description, \u0275\u0275sanitizeHtml);
  }
}
function BlogComponent_Conditional_6_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const blog_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c05, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "read_more"), " ");
  }
}
function BlogComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 11)(2, "div", 12);
    \u0275\u0275template(3, BlogComponent_Conditional_6_For_2_Conditional_3_Template, 4, 3, "div", 13)(4, BlogComponent_Conditional_6_For_2_Conditional_4_Template, 2, 0, "div", 14);
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275element(6, "img", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 17)(8, "a", 15)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18)(12, "span", 19);
    \u0275\u0275element(13, "i", 20);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BlogComponent_Conditional_6_For_2_Conditional_17_Template, 4, 1, "span", 21);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, BlogComponent_Conditional_6_For_2_Conditional_19_Template, 1, 1, "p", 22)(20, BlogComponent_Conditional_6_For_2_Conditional_20_Template, 4, 6, "a", 23);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_23_0;
    let tmp_25_0;
    const blog_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.style === "list_view" ? "col-12" : "col-xxl-4 col-sm-6");
    \u0275\u0275advance();
    \u0275\u0275classProp("blog-list", ctx_r0.style === "list_view");
    \u0275\u0275property("ngClass", (blog_r2 == null ? null : blog_r2.is_sticky) === 1 ? "sticky-blog-box" : "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((blog_r2 == null ? null : blog_r2.is_featured) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((blog_r2 == null ? null : blog_r2.is_sticky) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c05, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", (blog_r2 == null ? null : blog_r2.blog_thumbnail) ? blog_r2 == null ? null : blog_r2.blog_thumbnail == null ? null : blog_r2.blog_thumbnail.original_url : "assets/images/blog.png", \u0275\u0275sanitizeUrl)("alt", blog_r2 == null ? null : blog_r2.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("blog-contain-2", ctx_r0.style === "list_view");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c05, blog_r2 == null ? null : blog_r2.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r2 == null ? null : blog_r2.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 18, blog_r2 == null ? null : blog_r2.created_at, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_23_0 = \u0275\u0275pipeBind1(18, 21, ctx_r0.themeOption$)) == null ? null : tmp_23_0.blog == null ? null : tmp_23_0.blog.blog_author_enable) ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((blog_r2 == null ? null : blog_r2.description) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_25_0 = \u0275\u0275pipeBind1(21, 23, ctx_r0.themeOption$)) == null ? null : tmp_25_0.blog == null ? null : tmp_25_0.blog.read_more_enable) ? 20 : -1);
  }
}
function BlogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, BlogComponent_Conditional_6_For_2_Template, 22, 29, "div", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ratio_65", ctx_r0.style === "list_view");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.paginateBlog);
  }
}
function BlogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 27);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("text", "no_blog")("description", "no_blog_desc");
  }
}
function BlogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 7)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "div", 31)(5, "nav", 32)(6, "ngb-pagination", 33);
    \u0275\u0275twoWayListener("pageChange", function BlogComponent_Conditional_8_Template_ngb_pagination_pageChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.filter["page"], $event) || (ctx_r0.filter["page"] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("pageChange", function BlogComponent_Conditional_8_Template_ngb_pagination_pageChange_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setPage());
    });
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("collectionSize", ctx_r0.totalItems);
    \u0275\u0275twoWayProperty("page", ctx_r0.filter["page"]);
    \u0275\u0275property("pageSize", ctx_r0.filter["paginate"])("maxSize", 5)("rotate", true)("boundaryLinks", true);
  }
}
var BlogComponent = class _BlogComponent {
  constructor(store, route, blogService, router) {
    this.store = store;
    this.route = route;
    this.blogService = blogService;
    this.router = router;
    this.breadcrumb = {
      title: "Blogs",
      items: []
    };
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 12,
      // Display per page,
      "status": 1,
      "category": "",
      "tag": ""
    };
    this.skeletonItems = Array.from({ length: 9 }, (_, index) => index);
    this.totalItems = 0;
    this.sidebar = "left_sidebar";
    this.StorageURL = environment.storageURL;
    this.route.queryParams.subscribe((params) => {
      this.filter.category = params["category"] ? params["category"] : "";
      this.filter.tag = params["tag"] ? params["tag"] : "";
      this.breadcrumb.items = [];
      this.breadcrumb.title = this.filter.category ? `Blogs: ${this.filter.category.replaceAll("-", " ")}` : this.filter.tag ? `Blogs: ${this.filter.tag.replaceAll("-", " ")}` : "Blogs";
      this.breadcrumb.items.push({ label: "Blogs", active: true });
      this.store.dispatch(new GetBlogs(this.filter));
      if (params["style"]) {
        this.style = params["style"];
      }
      if (params["sidebar"]) {
        this.sidebar = params["sidebar"];
      }
      if (!params["style"] && !params["sidebar"]) {
        this.themeOption$.subscribe((theme) => {
          this.style = theme?.blog?.blog_style;
          this.sidebar = theme?.blog.blog_sidebar_type;
        });
      }
    });
    this.blog$.subscribe((blog2) => this.totalItems = blog2?.total);
    this.setPage();
  }
  setPaginate(data) {
    this.filter.page = data;
    this.store.dispatch(new GetBlogs(this.filter));
  }
  setPage() {
    this.blog$.subscribe((res) => {
      this.blogsArray = res.data;
      this.paginateBlog = this.blogsArray.map((product) => __spreadValues({}, product)).slice((this.filter["page"] - 1) * this.filter["paginate"], (this.filter["page"] - 1) * this.filter["paginate"] + this.filter["paginate"]);
    });
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.filter["page"]
      },
      queryParamsHandling: "merge",
      skipLocationChange: false
    });
  }
  static {
    this.\u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(BlogService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 11, consts: [[3, "breadcrumb"], [1, "blog-page", "section-b-space", "ratio2_3"], [1, "container"], [1, "row", "g-sm-4", "g-3"], [1, "row", "g-4"], [1, "row", "g-4", 3, "ratio_65"], [3, "class", "text", "description"], [1, "custome-pagination"], [1, "col-xxl-3", "col-lg-4"], [1, "blog-sidebar"], [3, "class"], [1, "blog-box", 3, "ngClass"], [1, "blog-image"], [1, "blog-featured-tag"], [1, "blog-label-tag"], [3, "routerLink"], [3, "src", "alt"], [1, "blog-contain", "blog-contain-2"], [1, "blog-label"], [1, "time"], [1, "ri-time-line"], [1, "super"], [3, "innerHTML"], [1, "blog-button", 3, "routerLink"], [1, "ri-pushpin-fill"], [1, "ri-user-line"], [1, "ri-arrow-right-line"], [3, "text", "description"], [1, "product-pagination"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "pageChange", "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks"]], template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div");
        \u0275\u0275template(5, BlogComponent_Conditional_5_Template, 3, 0, "div", 4)(6, BlogComponent_Conditional_6_Template, 3, 2, "div", 5)(7, BlogComponent_Conditional_7_Template, 1, 4, "app-no-data", 6)(8, BlogComponent_Conditional_8_Template, 7, 6, "nav", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
        \u0275\u0275element(11, "app-sidebar");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.sidebar === "no_sidebar" ? "col-xxl-12 col-xl-12 col-lg-12 no-sidebar" : "col-xxl-9 col-lg-8 order-lg-2");
        \u0275\u0275classProp("order-lg-1", ctx.sidebar === "right_sidebar");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.blogService.skeletonLoader ? 5 : ctx.paginateBlog.length ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.paginateBlog.length && !ctx.blogService.skeletonLoader ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.sidebar === "no_sidebar" ? "d-none" : "");
        \u0275\u0275classProp("order-lg-2", ctx.sidebar === "right_sidebar");
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      AsyncPipe,
      DatePipe,
      RouterModule,
      RouterLink,
      TranslateModule,
      TranslatePipe,
      SidebarComponent,
      BreadcrumbComponent,
      NoDataComponent,
      SkeletonBlogComponent,
      NgbPagination
    ], styles: ["\n\n.blog-skeleton[_ngcontent-%COMP%]   .product-box[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n}\n.blog-skeleton[_ngcontent-%COMP%]   .skeleton__img[_ngcontent-%COMP%] {\n  height: 224px;\n}\n.skeleton__p[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 100%;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=blog.component.css.map */"] });
  }
};
__decorate([
  Select(BlogState.blog)
], BlogComponent.prototype, "blog$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], BlogComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent" });
})();

// src/app/components/blog/blog-details/blog-details.component.ts
var BlogDetailsComponent = class _BlogDetailsComponent {
  constructor(seoService, route) {
    this.seoService = seoService;
    this.route = route;
    this.breadcrumb = {
      title: "Product",
      items: []
    };
    this.StorageURL = environment.storageURL;
    this.blog$.subscribe((blog2) => {
      this.breadcrumb.items = [];
      this.breadcrumb.title = blog2.title;
      this.breadcrumb.items.push({ label: "Blog", active: true }, { label: blog2.title, active: false });
    });
    this.route.queryParams.subscribe((params) => {
      if (params["sidebar"]) {
        this.sidebar = params["sidebar"];
      } else {
        this.themeOption$.subscribe((theme) => {
          this.sidebar = theme?.blog.blog_sidebar_type;
        });
      }
    });
  }
  static {
    this.\u0275fac = function BlogDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogDetailsComponent)(\u0275\u0275directiveInject(SeoService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailsComponent, selectors: [["app-blog-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 27, consts: [[3, "breadcrumb"], [1, "blog-detail-page", "section-b-space", "ratio2_3"], [1, "container"], [1, "blog-detail"], [1, "img-fluid", 3, "src", "alt"], [1, "post-social"], [1, "blog-detail-contain", "ckeditor-content", 3, "innerHTML"]], template: function BlogDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "async");
        \u0275\u0275pipe(7, "async");
        \u0275\u0275elementStart(8, "h3");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ul", 5)(12, "li");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "async");
        \u0275\u0275pipe(15, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "li");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275pipe(19, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(20, "div", 6);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(4);
        \u0275\u0275property("src", ((tmp_1_0 = \u0275\u0275pipeBind1(5, 8, ctx.blog$)) == null ? null : tmp_1_0.blog_thumbnail) ? (tmp_1_0 = \u0275\u0275pipeBind1(6, 10, ctx.blog$)) == null ? null : tmp_1_0.blog_thumbnail == null ? null : tmp_1_0.blog_thumbnail.original_url : "assets/images/blog.png", \u0275\u0275sanitizeUrl)("alt", (tmp_2_0 = \u0275\u0275pipeBind1(7, 12, ctx.blog$)) == null ? null : tmp_2_0.title);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((tmp_3_0 = \u0275\u0275pipeBind1(10, 14, ctx.blog$)) == null ? null : tmp_3_0.title);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, (tmp_4_0 = \u0275\u0275pipeBind1(14, 16, ctx.blog$)) == null ? null : tmp_4_0.created_at, "dd MMM yyyy hh:mm:a"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(18, 21, "posted_by"), " : ", (tmp_5_0 = \u0275\u0275pipeBind1(19, 23, ctx.blog$)) == null ? null : tmp_5_0.created_by == null ? null : tmp_5_0.created_by.name, "");
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", (tmp_6_0 = \u0275\u0275pipeBind1(21, 25, ctx.blog$)) == null ? null : tmp_6_0.content, \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [CommonModule, AsyncPipe, DatePipe, TranslateModule, TranslatePipe, BreadcrumbComponent] });
  }
};
__decorate([
  Select(BlogState.selectedBlog)
], BlogDetailsComponent.prototype, "blog$", void 0);
__decorate([
  Select(ThemeOptionState.themeOptions)
], BlogDetailsComponent.prototype, "themeOption$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailsComponent, { className: "BlogDetailsComponent" });
})();

// src/app/shared/resolver/blog.resolver.ts
var BlogResolver = (route, state) => {
  return inject(Store).dispatch(new GetBlogBySlug(route.paramMap.get("slug")));
};

// src/app/components/blog/blog.routes.ts
var blog = [
  {
    path: "blogs",
    component: BlogComponent
  },
  {
    path: "blog/:slug",
    component: BlogDetailsComponent,
    resolve: {
      data: BlogResolver
    }
  }
];
export {
  blog
};
//# sourceMappingURL=chunk-JXPTBM6E.js.map
