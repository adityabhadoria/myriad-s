import {
  Action,
  HttpClient,
  Router,
  Selector,
  State,
  __decorate,
  __spreadProps,
  __spreadValues,
  environment,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GDIBOM5I.js";

// src/app/shared/store/action/category.action.ts
var GetCategories = class {
  static {
    this.type = "[Category] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetCategory = class {
  static {
    this.type = "[Category] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetFooterCategories = class {
  static {
    this.type = "[FooterCategory] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetHeaderCategories = class {
  static {
    this.type = "[HeaderCategory] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetProductCategory = class {
  static {
    this.type = "[ProductCategory] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetSearchByCategory = class {
  static {
    this.type = "[CategoryBySearch] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetCategoryBySlug = class {
  static {
    this.type = "[Category] Get Category By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};

// src/app/shared/services/category.service.ts
var CategoryService = class _CategoryService {
  constructor(http) {
    this.http = http;
    this.searchSkeleton = false;
  }
  getCategories(payload) {
    return this.http.get(`${environment.URL}/category.json`, { params: payload });
  }
  getCategoryBySlug(slug) {
    return this.http.get(`${environment.URL}/category/slug/${slug}`);
  }
  static {
    this.\u0275fac = function CategoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/category.state.ts
var CategoryState = class CategoryState2 {
  constructor(categoryService) {
    this.categoryService = categoryService;
  }
  static category(state) {
    return state.category;
  }
  static categories(state) {
    return state.categories;
  }
  static footerCategory(state) {
    return state.footerCategory;
  }
  static headerCategory(state) {
    return state.headerCategory;
  }
  static productCategory(state) {
    return state.productCategory;
  }
  static subCategory(state) {
    return state.category;
  }
  static searchByCategory(state) {
    return state.searchByCategory;
  }
  static selectedCategory(state) {
    return state.selectedCategory;
  }
  getCategories(ctx, action) {
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            categories: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getCategory(ctx, action) {
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            category: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  GetFooterCategories(ctx, action) {
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            footerCategory: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  GetHeaderCategories(ctx, action) {
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        if (result && result.data) {
          ctx.patchState({
            headerCategory: {
              data: result.data,
              total: result?.total ? result?.total : result.data.length
            }
          });
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  GetProductCategory(ctx, action) {
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          productCategory: {
            data: result.data,
            total: result?.total ? result?.total : result.data.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getSearchByCategory(ctx, action) {
    this.categoryService.searchSkeleton = true;
    return this.categoryService.getCategories(action.payload).pipe(tap({
      next: (result) => {
        let categories;
        if (action?.payload?.["search"]) {
          categories = result.data.filter((category) => category.name.toLowerCase().includes(action?.payload?.["search"].toLowerCase()));
        } else {
          categories = result.data;
        }
        ctx.patchState({
          searchByCategory: categories ? categories.splice(0, 4) : []
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      },
      complete: () => {
        this.categoryService.searchSkeleton = false;
      }
    }));
  }
  getCategoryBySlug(ctx, action) {
    return this.categoryService.getCategories().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const result = results.data.find((category) => category.slug == action.slug);
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedCategory: result
          }));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getSubCategory(category, ids) {
    if (ids?.includes(category.id)) {
      if (category) {
        return category;
      }
    }
    if (category.subcategories?.length) {
      category.subcategories.map((subcategory) => {
        this.getSubCategory(subcategory, ids);
      });
    }
  }
  static {
    this.\u0275fac = function CategoryState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategoryState2)(\u0275\u0275inject(CategoryService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CategoryState2, factory: CategoryState2.\u0275fac });
  }
};
__decorate([
  Action(GetCategories)
], CategoryState.prototype, "getCategories", null);
__decorate([
  Action(GetCategory)
], CategoryState.prototype, "getCategory", null);
__decorate([
  Action(GetFooterCategories)
], CategoryState.prototype, "GetFooterCategories", null);
__decorate([
  Action(GetHeaderCategories)
], CategoryState.prototype, "GetHeaderCategories", null);
__decorate([
  Action(GetProductCategory)
], CategoryState.prototype, "GetProductCategory", null);
__decorate([
  Action(GetSearchByCategory)
], CategoryState.prototype, "getSearchByCategory", null);
__decorate([
  Action(GetCategoryBySlug)
], CategoryState.prototype, "getCategoryBySlug", null);
__decorate([
  Selector()
], CategoryState, "category", null);
__decorate([
  Selector()
], CategoryState, "categories", null);
__decorate([
  Selector()
], CategoryState, "footerCategory", null);
__decorate([
  Selector()
], CategoryState, "headerCategory", null);
__decorate([
  Selector()
], CategoryState, "productCategory", null);
__decorate([
  Selector()
], CategoryState, "subCategory", null);
__decorate([
  Selector()
], CategoryState, "searchByCategory", null);
__decorate([
  Selector()
], CategoryState, "selectedCategory", null);
CategoryState = __decorate([
  State({
    name: "category",
    defaults: {
      category: {
        data: [],
        total: 0
      },
      categories: {
        data: [],
        total: 0
      },
      footerCategory: {
        data: [],
        total: 0
      },
      headerCategory: {
        data: [],
        total: 0
      },
      productCategory: {
        data: [],
        total: 0
      },
      searchByCategory: [],
      selectedCategory: null
    }
  })
], CategoryState);

// src/app/shared/store/action/blog.action.ts
var GetBlogs = class {
  static {
    this.type = "[Blog] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetBlogBySlug = class {
  static {
    this.type = "[Blog] By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var GetRecentBlog = class {
  static {
    this.type = "[Blog] By Recent";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetSelectedBlogs = class {
  static {
    this.type = "[Blog] Selected";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/blog.service.ts
var BlogService = class _BlogService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getBlogs(payload) {
    return this.http.get(`${environment.URL}/blog.json`, { params: payload });
  }
  getBlogBySlug(slug) {
    return this.http.get(`${environment.URL}/blog/slug/${slug}`);
  }
  static {
    this.\u0275fac = function BlogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BlogService, factory: _BlogService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/blog.state.ts
var BlogState = class BlogState2 {
  constructor(router, blogService) {
    this.router = router;
    this.blogService = blogService;
  }
  static blog(state) {
    return state.blog;
  }
  static selectedBlog(state) {
    return state.selectedBlog;
  }
  static resentBlog(state) {
    return state.recentBlog;
  }
  static selectedBlogs(state) {
    return state.selectedBlogs;
  }
  getBlogs(ctx, action) {
    this.blogService.skeletonLoader = true;
    return this.blogService.getBlogs(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          blog: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.blogService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getBlogBySlug(ctx, { slug }) {
    return this.blogService.getBlogs().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const state = ctx.getState();
          const result = results.data.find((blog) => blog.slug == slug);
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedBlog: result
          }));
        }
      },
      error: (err) => {
        this.router.navigate(["/404"]);
        throw new Error(err?.error?.message);
      }
    }));
  }
  getRecentBlogs(ctx, action) {
    return this.blogService.getBlogs(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          recentBlog: result.data
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getSelectedBlogs(ctx, action) {
    return this.blogService.getBlogs(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          selectedBlogs: result.data
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function BlogState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogState2)(\u0275\u0275inject(Router), \u0275\u0275inject(BlogService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: BlogState2, factory: BlogState2.\u0275fac });
  }
};
__decorate([
  Action(GetBlogs)
], BlogState.prototype, "getBlogs", null);
__decorate([
  Action(GetBlogBySlug)
], BlogState.prototype, "getBlogBySlug", null);
__decorate([
  Action(GetRecentBlog)
], BlogState.prototype, "getRecentBlogs", null);
__decorate([
  Action(GetSelectedBlogs)
], BlogState.prototype, "getSelectedBlogs", null);
__decorate([
  Selector()
], BlogState, "blog", null);
__decorate([
  Selector()
], BlogState, "selectedBlog", null);
__decorate([
  Selector()
], BlogState, "resentBlog", null);
__decorate([
  Selector()
], BlogState, "selectedBlogs", null);
BlogState = __decorate([
  State({
    name: "blog",
    defaults: {
      blog: {
        data: [],
        total: 0
      },
      selectedBlog: null,
      recentBlog: [],
      selectedBlogs: []
    }
  })
], BlogState);

// src/app/shared/store/action/brand.action.ts
var GetBrands = class {
  static {
    this.type = "[Brand] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetBrandBySlug = class {
  static {
    this.type = "[Brand] Get Brand By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};

// src/app/shared/services/brand.service.ts
var BrandService = class _BrandService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getBrands(payload) {
    return this.http.get(`${environment.URL}/brand.json`, { params: payload });
  }
  getBrandBySlug(slug) {
    return this.http.get(`${environment.URL}/brand/slug/${slug}`);
  }
  static {
    this.\u0275fac = function BrandService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrandService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrandService, factory: _BrandService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/brand.state.ts
var BrandState = class BrandState2 {
  constructor(brandService) {
    this.brandService = brandService;
  }
  static brand(state) {
    return state.brand;
  }
  static selectedBrand(state) {
    return state.selectedBrand;
  }
  getBrands(ctx, action) {
    this.brandService.skeletonLoader = true;
    return this.brandService.getBrands(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          brand: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.brandService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getBrandBySlug(ctx, action) {
    return this.brandService.getBrands().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const result = results.data.find((brand) => brand.slug == action.slug);
          const state = ctx.getState();
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedBrand: result
          }));
        }
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function BrandState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrandState2)(\u0275\u0275inject(BrandService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: BrandState2, factory: BrandState2.\u0275fac });
  }
};
__decorate([
  Action(GetBrands)
], BrandState.prototype, "getBrands", null);
__decorate([
  Action(GetBrandBySlug)
], BrandState.prototype, "getBrandBySlug", null);
__decorate([
  Selector()
], BrandState, "brand", null);
__decorate([
  Selector()
], BrandState, "selectedBrand", null);
BrandState = __decorate([
  State({
    name: "brand",
    defaults: {
      brand: {
        data: [],
        total: 0
      },
      selectedBrand: null
    }
  })
], BrandState);

export {
  GetCategories,
  GetFooterCategories,
  GetHeaderCategories,
  GetSearchByCategory,
  GetCategoryBySlug,
  CategoryService,
  CategoryState,
  GetBlogs,
  GetBlogBySlug,
  GetRecentBlog,
  GetSelectedBlogs,
  BlogService,
  BlogState,
  GetBrands,
  GetBrandBySlug,
  BrandService,
  BrandState
};
//# sourceMappingURL=chunk-MEGG5YRD.js.map
