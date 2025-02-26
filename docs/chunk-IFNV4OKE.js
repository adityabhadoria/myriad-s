import {
  AccountClear,
  AuthClear,
  ForgotPassword,
  GetUserDetails,
  Login,
  LoginWithNumber,
  Logout,
  Register,
  UpdatePassword,
  VerifyNumberOTP,
  VerifyOTP
} from "./chunk-J5JW2VI6.js";
import {
  ClearCart,
  Feedback,
  GetQuestionAnswers,
  SendQuestion,
  UpdateQuestionAnswers
} from "./chunk-KDHUGBQL.js";
import {
  AuthService,
  NotificationService
} from "./chunk-YVVLA4K6.js";
import {
  Action,
  CommonModule,
  HttpClient,
  NgbModal,
  Router,
  Selector,
  State,
  Store,
  __decorate,
  __spreadProps,
  __spreadValues,
  environment,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-GDIBOM5I.js";

// src/app/core/guard/auth.guard.ts
var AuthGuard = class _AuthGuard {
  // @ViewChild("loginModal") LoginModal: LoginModalComponent;
  constructor(store, router, modal, authService) {
    this.store = store;
    this.router = router;
    this.modal = modal;
    this.authService = authService;
  }
  canActivate(route, state) {
    let is_redirect;
    this.authService.redirectUrl = state.url;
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      this.authService.isLogin = true;
      is_redirect = false;
    } else {
      is_redirect = true;
    }
    this.store.dispatch(new GetUserDetails()).subscribe({
      complete: () => {
        return true;
      }
    });
    return is_redirect;
  }
  canActivateChild(route, state) {
    if (!!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      if (this.router.url.startsWith("/account") || this.router.url == "/checkout" || this.router.url == "/compare")
        this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Store), \u0275\u0275inject(Router), \u0275\u0275inject(NgbModal), \u0275\u0275inject(AuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/auth.state.ts
var AuthState = class AuthState2 {
  constructor(store, router, authService) {
    this.store = store;
    this.router = router;
    this.authService = authService;
  }
  static accessToken(state) {
    return state.access_token;
  }
  static isAuthenticated(state) {
    return !!state.access_token;
  }
  static email(state) {
    return state.email;
  }
  static number(state) {
    return state.number;
  }
  static token(state) {
    return state.token;
  }
  register(ctx, action) {
  }
  login(ctx, action) {
    ctx.patchState({
      email: "john.customer@example.com",
      token: "",
      access_token: "115|laravel_sanctum_mp1jyyMyKeE4qVsD1bKrnSycnmInkFXXIrxKv49w49d2a2c5"
    });
    this.store.dispatch(new GetUserDetails());
  }
  loginWithNumber(ctx, action) {
    this.store.dispatch(new GetUserDetails());
  }
  forgotPassword(ctx, action) {
  }
  verifyEmail(ctx, action) {
  }
  verifyNumber(ctx, action) {
    this.store.dispatch(new GetUserDetails());
  }
  updatePassword(ctx, action) {
  }
  logout(ctx) {
    this.store.dispatch(new AuthClear());
    this.router.navigate(["/"]);
  }
  authClear(ctx) {
    ctx.patchState({
      email: "",
      token: "",
      access_token: null,
      permissions: []
    });
    this.authService.redirectUrl = void 0;
    this.store.dispatch(new AccountClear());
    this.store.dispatch(new ClearCart());
  }
  static {
    this.\u0275fac = function AuthState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthState2)(\u0275\u0275inject(Store), \u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: AuthState2, factory: AuthState2.\u0275fac });
  }
};
__decorate([
  Action(Register)
], AuthState.prototype, "register", null);
__decorate([
  Action(Login)
], AuthState.prototype, "login", null);
__decorate([
  Action(LoginWithNumber)
], AuthState.prototype, "loginWithNumber", null);
__decorate([
  Action(ForgotPassword)
], AuthState.prototype, "forgotPassword", null);
__decorate([
  Action(VerifyOTP)
], AuthState.prototype, "verifyEmail", null);
__decorate([
  Action(VerifyNumberOTP)
], AuthState.prototype, "verifyNumber", null);
__decorate([
  Action(UpdatePassword)
], AuthState.prototype, "updatePassword", null);
__decorate([
  Action(Logout)
], AuthState.prototype, "logout", null);
__decorate([
  Action(AuthClear)
], AuthState.prototype, "authClear", null);
__decorate([
  Selector()
], AuthState, "accessToken", null);
__decorate([
  Selector()
], AuthState, "isAuthenticated", null);
__decorate([
  Selector()
], AuthState, "email", null);
__decorate([
  Selector()
], AuthState, "number", null);
__decorate([
  Selector()
], AuthState, "token", null);
AuthState = __decorate([
  State({
    name: "auth",
    defaults: {
      email: "",
      token: "",
      number: null,
      access_token: "",
      permissions: []
    }
  })
], AuthState);

// src/app/shared/components/widgets/alert/alert.component.ts
function AlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.alert["message"], " ");
  }
}
function AlertComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.alert["message"], " ");
  }
}
var AlertComponent = class _AlertComponent {
  constructor(notificationService) {
    this.notificationService = notificationService;
    this.alert = {
      type: null,
      message: null
    };
    this.notificationService.alertSubject.subscribe((alert) => {
      this.alert = alert;
    });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.notificationService.notification = true;
  }
  static {
    this.\u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertComponent)(\u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["app-alert"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["role", "alert", 1, "alert", "alert-danger", "login-alert"], ["role", "alert", 1, "alert", "alert-success", "login-alert"], [1, "ri-error-warning-line"], [1, "ri-check-line"]], template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AlertComponent_Conditional_0_Template, 3, 1, "div", 0)(1, AlertComponent_Conditional_1_Template, 3, 1, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.alert["type"] == "error" ? 0 : ctx.alert["type"] == "success" ? 1 : -1);
      }
    }, dependencies: [CommonModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent" });
})();

// src/app/shared/store/action/store.action.ts
var GetStores = class {
  static {
    this.type = "[Store] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var GetStoreBySlug = class {
  static {
    this.type = "[Store] Get By Slug";
  }
  constructor(slug) {
    this.slug = slug;
  }
};

// src/app/shared/store/action/review.action.ts
var GetReview = class {
  static {
    this.type = "[Review] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var SendReview = class {
  static {
    this.type = "[Review] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateReview = class {
  static {
    this.type = "[Review] Put";
  }
  constructor(id, payload) {
    this.id = id;
    this.payload = payload;
  }
};

// src/app/shared/services/review.service.ts
var ReviewService = class _ReviewService {
  constructor(http) {
    this.http = http;
  }
  getReview(slug) {
    return this.http.get(`${environment.URL}/review.json`, { params: slug });
  }
  static {
    this.\u0275fac = function ReviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/review.state.ts
var ReviewState = class ReviewState2 {
  constructor(reviewsService) {
    this.reviewsService = reviewsService;
  }
  static review(state) {
    return state.review;
  }
  getReview(ctx, action) {
    return this.reviewsService.getReview(action.payload).pipe(tap({
      next: (results) => {
        const result = results.data.filter((review) => review.product_id == action.payload["product_id"]);
        ctx.patchState({
          review: {
            data: result,
            total: result?.length
          }
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  sendReview(ctx, action) {
  }
  update(ctx, { payload, id }) {
  }
  static {
    this.\u0275fac = function ReviewState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReviewState2)(\u0275\u0275inject(ReviewService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: ReviewState2, factory: ReviewState2.\u0275fac });
  }
};
__decorate([
  Action(GetReview)
], ReviewState.prototype, "getReview", null);
__decorate([
  Action(SendReview)
], ReviewState.prototype, "sendReview", null);
__decorate([
  Action(UpdateReview)
], ReviewState.prototype, "update", null);
__decorate([
  Selector()
], ReviewState, "review", null);
ReviewState = __decorate([
  State({
    name: "review",
    defaults: {
      review: {
        data: [],
        total: 0
      }
    }
  })
], ReviewState);

// src/app/shared/services/questions-answer.service.ts
var QuestionsAnswerService = class _QuestionsAnswerService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getQuestionAnswers(slug) {
    return this.http.get(`${environment.URL}/question-and-answer.json`, { params: slug });
  }
  static {
    this.\u0275fac = function QuestionsAnswerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuestionsAnswerService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionsAnswerService, factory: _QuestionsAnswerService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/questions-answers.state.ts
var QuestionAnswersState = class QuestionAnswersState2 {
  constructor(questionsAnswersService) {
    this.questionsAnswersService = questionsAnswersService;
  }
  static questionsAnswers(state) {
    return state.question;
  }
  getQuestionAnswers(ctx, action) {
    this.questionsAnswersService.skeletonLoader = true;
    return this.questionsAnswersService.getQuestionAnswers(action.slug).pipe(tap({
      next: (results) => {
        const result = results.data.filter((qna) => qna.product_id == action.slug["product_id"]);
        ctx.patchState({
          question: {
            data: result,
            total: result?.length
          }
        });
      },
      complete: () => {
        this.questionsAnswersService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  sendQuestion(ctx, action) {
  }
  update(ctx, { payload, id }) {
  }
  Feedback(ctx, action) {
  }
  static {
    this.\u0275fac = function QuestionAnswersState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuestionAnswersState2)(\u0275\u0275inject(QuestionsAnswerService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: QuestionAnswersState2, factory: QuestionAnswersState2.\u0275fac });
  }
};
__decorate([
  Action(GetQuestionAnswers)
], QuestionAnswersState.prototype, "getQuestionAnswers", null);
__decorate([
  Action(SendQuestion)
], QuestionAnswersState.prototype, "sendQuestion", null);
__decorate([
  Action(UpdateQuestionAnswers)
], QuestionAnswersState.prototype, "update", null);
__decorate([
  Action(Feedback)
], QuestionAnswersState.prototype, "Feedback", null);
__decorate([
  Selector()
], QuestionAnswersState, "questionsAnswers", null);
QuestionAnswersState = __decorate([
  State({
    name: "question",
    defaults: {
      question: {
        data: [],
        total: 0
      }
    }
  })
], QuestionAnswersState);

// src/app/shared/services/store.service.ts
var StoreService = class _StoreService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getStores(payload) {
    return this.http.get(`${environment.URL}/store.json`, { params: payload });
  }
  static {
    this.\u0275fac = function StoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StoreService, factory: _StoreService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/store.state.ts
var StoreState = class StoreState2 {
  constructor(storeService, router) {
    this.storeService = storeService;
    this.router = router;
  }
  static store(state) {
    return state.store;
  }
  static selectedStore(state) {
    return state.selectedStore;
  }
  getStores(ctx, action) {
    this.storeService.skeletonLoader = true;
    return this.storeService.getStores(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          store: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.storeService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  getStoreBySlug(ctx, { slug }) {
    return this.storeService.getStores().pipe(tap({
      next: (results) => {
        if (results && results.data) {
          const state = ctx.getState();
          const result = results.data.find((store) => store.slug == slug);
          ctx.patchState(__spreadProps(__spreadValues({}, state), {
            selectedStore: result
          }));
        }
      },
      error: (err) => {
        this.router.navigate(["/404"]);
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function StoreState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StoreState2)(\u0275\u0275inject(StoreService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: StoreState2, factory: StoreState2.\u0275fac });
  }
};
__decorate([
  Action(GetStores)
], StoreState.prototype, "getStores", null);
__decorate([
  Action(GetStoreBySlug)
], StoreState.prototype, "getStoreBySlug", null);
__decorate([
  Selector()
], StoreState, "store", null);
__decorate([
  Selector()
], StoreState, "selectedStore", null);
StoreState = __decorate([
  State({
    name: "store",
    defaults: {
      store: {
        data: [],
        total: 0
      },
      selectedStore: null
    }
  })
], StoreState);

export {
  AuthState,
  AlertComponent,
  AuthGuard,
  GetStores,
  GetStoreBySlug,
  GetReview,
  SendReview,
  UpdateReview,
  ReviewState,
  QuestionsAnswerService,
  QuestionAnswersState,
  StoreService,
  StoreState
};
//# sourceMappingURL=chunk-IFNV4OKE.js.map
