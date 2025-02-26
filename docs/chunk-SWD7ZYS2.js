import {
  Action,
  Selector,
  State,
  ThemeOptionService,
  __decorate,
  __spreadProps,
  __spreadValues,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GDIBOM5I.js";

// src/environments/environment.ts
var environment = {
  production: false,
  baseURL: "http://localhost:4200",
  // This represents the base URL for running our frontend project.
  URL: "http://localhost:4200/assets/data",
  // Change only the domain part, keeping "/api" intact
  storageURL: "http://localhost:4200/assets"
  // Change only the laravel primary domain
};

// src/app/shared/store/action/theme-option.action.ts
var ThemeOptions = class {
  static {
    this.type = "[Theme Option] Get";
  }
};
var UpdateSession = class {
  static {
    this.type = "[Theme Option] Update Session";
  }
  constructor(slug, value) {
    this.slug = slug;
    this.value = value;
  }
};
var UpdateProductBox = class {
  static {
    this.type = "[Theme Option] Update Product Box";
  }
  constructor(value) {
    this.value = value;
  }
};

// src/app/shared/store/state/theme-option.state.ts
var ThemeOptionState = class ThemeOptionState2 {
  constructor(themeOptionService) {
    this.themeOptionService = themeOptionService;
  }
  static themeOptions(state) {
    return state.theme_option;
  }
  static exit(state) {
    return state.exit;
  }
  static cookies(state) {
    return state.cookies;
  }
  static newsletter(state) {
    return state.newsletter;
  }
  static productBox(state) {
    return state.productBox;
  }
  getThemeOptions(ctx) {
    return this.themeOptionService.getThemeOption().pipe(tap({
      next: (result) => {
        const state = ctx.getState();
        ctx.setState(__spreadProps(__spreadValues({}, state), {
          theme_option: result.options
        }));
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  UpdateSession(ctx, action) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      cookies: action.slug == "cookies" ? action.value : state.cookies,
      exit: action.slug == "exit" ? action.value : state.exit,
      newsletter: action.slug == "newsletter" ? action.value : state.newsletter
    }));
  }
  UpdateProductBox(ctx, action) {
    const state = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state), {
      productBox: action.value
    }));
  }
  static {
    this.\u0275fac = function ThemeOptionState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ThemeOptionState2)(\u0275\u0275inject(ThemeOptionService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: ThemeOptionState2, factory: ThemeOptionState2.\u0275fac });
  }
};
__decorate([
  Action(ThemeOptions)
], ThemeOptionState.prototype, "getThemeOptions", null);
__decorate([
  Action(UpdateSession)
], ThemeOptionState.prototype, "UpdateSession", null);
__decorate([
  Action(UpdateProductBox)
], ThemeOptionState.prototype, "UpdateProductBox", null);
__decorate([
  Selector()
], ThemeOptionState, "themeOptions", null);
__decorate([
  Selector()
], ThemeOptionState, "exit", null);
__decorate([
  Selector()
], ThemeOptionState, "cookies", null);
__decorate([
  Selector()
], ThemeOptionState, "newsletter", null);
__decorate([
  Selector()
], ThemeOptionState, "productBox", null);
ThemeOptionState = __decorate([
  State({
    name: "theme_option",
    defaults: {
      theme_option: null,
      exit: true,
      cookies: true,
      newsletter: true,
      productBox: ""
    }
  })
], ThemeOptionState);

export {
  environment,
  ThemeOptions,
  UpdateSession,
  UpdateProductBox,
  ThemeOptionState
};
//# sourceMappingURL=chunk-SWD7ZYS2.js.map
