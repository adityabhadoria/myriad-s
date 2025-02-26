import {
  Action,
  HttpClient,
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

// src/app/shared/store/action/page.action.ts
var GetPages = class {
  static {
    this.type = "[Page] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetPageBySlug = class {
  static {
    this.type = "[Page] By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var GetFaqs = class {
  static {
    this.type = "[Faq] Get";
  }
};
var ContactUs = class {
  static {
    this.type = "[ContactUs] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/page.service.ts
var PageService = class _PageService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getPages(payload) {
    return this.http.get(`${environment.URL}/page.json`, { params: payload });
  }
  getFaqs() {
    return this.http.get(`${environment.URL}/faq.json`);
  }
  getStores(payload) {
    return this.http.get(`${environment.URL}/store`, { params: payload });
  }
  static {
    this.\u0275fac = function PageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageService, factory: _PageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/page.state.ts
var PageState = class PageState2 {
  constructor(pageService) {
    this.pageService = pageService;
  }
  static page(state) {
    return state.page;
  }
  static faq(state) {
    return state.faq;
  }
  static selectedPage(state) {
    return state.selectedPage;
  }
  getPages(ctx, action) {
    return this.pageService.getPages(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          page: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getPageBySlug(ctx, { slug }) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getPages().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const state = ctx.getState();
          const result = results.data.find((page) => page.slug == slug);
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedPage: result
          }));
        }
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getFaqs(ctx) {
    this.pageService.skeletonLoader = true;
    return this.pageService.getFaqs().pipe(tap({
      next: (result) => {
        ctx.patchState({
          faq: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.pageService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  contactUs(ctx, { payload }) {
  }
  static {
    this.\u0275fac = function PageState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PageState2)(\u0275\u0275inject(PageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PageState2, factory: PageState2.\u0275fac });
  }
};
__decorate([
  Action(GetPages)
], PageState.prototype, "getPages", null);
__decorate([
  Action(GetPageBySlug)
], PageState.prototype, "getPageBySlug", null);
__decorate([
  Action(GetFaqs)
], PageState.prototype, "getFaqs", null);
__decorate([
  Action(ContactUs)
], PageState.prototype, "contactUs", null);
__decorate([
  Selector()
], PageState, "page", null);
__decorate([
  Selector()
], PageState, "faq", null);
__decorate([
  Selector()
], PageState, "selectedPage", null);
PageState = __decorate([
  State({
    name: "page",
    defaults: {
      page: {
        data: [],
        total: 0
      },
      faq: {
        data: [],
        total: 0
      },
      selectedPage: null
    }
  })
], PageState);

export {
  GetPageBySlug,
  GetFaqs,
  ContactUs,
  PageService,
  PageState
};
//# sourceMappingURL=chunk-ZHCF6HBW.js.map
