import {
  AuthService,
  ButtonComponent,
  NotificationService
} from "./chunk-YVVLA4K6.js";
import {
  Action,
  EventEmitter,
  HttpClient,
  NgbModal,
  Selector,
  State,
  Store,
  TranslateModule,
  TranslatePipe,
  __decorate,
  environment,
  tap,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GDIBOM5I.js";

// src/app/shared/store/action/notification.action.ts
var GetNotification = class {
  static {
    this.type = "[Notification] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var MarkAsReadNotification = class {
  static {
    this.type = "[Notification] Mark As Read";
  }
  constructor() {
  }
};
var DeleteNotification = class {
  static {
    this.type = "[Notification] Delete";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/store/state/notification.state.ts
var NotificationState = class NotificationState2 {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }
  static notification(state) {
    return state.notification.data;
  }
  getNotification(ctx, action) {
    return this.notificationService.getNotifications(action?.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          notification: {
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
  markAsRead(ctx) {
  }
  static {
    this.\u0275fac = function NotificationState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationState2)(\u0275\u0275inject(NotificationService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: NotificationState2, factory: NotificationState2.\u0275fac });
  }
};
__decorate([
  Action(GetNotification)
], NotificationState.prototype, "getNotification", null);
__decorate([
  Action(MarkAsReadNotification)
], NotificationState.prototype, "markAsRead", null);
__decorate([
  Selector()
], NotificationState, "notification", null);
NotificationState = __decorate([
  State({
    name: "notification",
    defaults: {
      notification: {
        data: [],
        total: 0
      }
    }
  })
], NotificationState);

// src/app/shared/store/action/payment-details.action.ts
var GetPaymentDetails = class {
  static {
    this.type = "[Payment Details] Get";
  }
};
var UpdatePaymentDetails = class {
  static {
    this.type = "[Payment Details] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/payment-details.service.ts
var PaymentDetailsService = class _PaymentDetailsService {
  constructor(http) {
    this.http = http;
  }
  getPaymentAccount() {
    return this.http.get(`${environment.URL}/paymentAccount.json`);
  }
  static {
    this.\u0275fac = function PaymentDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentDetailsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentDetailsService, factory: _PaymentDetailsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/payment-details.state.ts
var PaymentDetailsState = class PaymentDetailsState2 {
  constructor(notificationService, PaymentDetailsService2) {
    this.notificationService = notificationService;
    this.PaymentDetailsService = PaymentDetailsService2;
  }
  static paymentDetails(state) {
    return state.paymentDetails;
  }
  getPaymentDetails(ctx) {
    return this.PaymentDetailsService.getPaymentAccount().pipe(tap({
      next: (result) => {
        ctx.patchState({
          paymentDetails: result
        });
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  updatePaymentDetails(ctx, action) {
  }
  static {
    this.\u0275fac = function PaymentDetailsState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaymentDetailsState2)(\u0275\u0275inject(NotificationService), \u0275\u0275inject(PaymentDetailsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PaymentDetailsState2, factory: PaymentDetailsState2.\u0275fac });
  }
};
__decorate([
  Action(GetPaymentDetails)
], PaymentDetailsState.prototype, "getPaymentDetails", null);
__decorate([
  Action(UpdatePaymentDetails)
], PaymentDetailsState.prototype, "updatePaymentDetails", null);
__decorate([
  Selector()
], PaymentDetailsState, "paymentDetails", null);
PaymentDetailsState = __decorate([
  State({
    name: "paymentDetails",
    defaults: {
      paymentDetails: null
    }
  })
], PaymentDetailsState);

// src/app/shared/store/action/wallet.action.ts
var GetUserTransaction = class {
  static {
    this.type = "[Point] Transaction Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/wallet.service.ts
var WalletService = class _WalletService {
  constructor(http) {
    this.http = http;
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/wallet.json`, { params: payload });
  }
  static {
    this.\u0275fac = function WalletService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WalletService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletService, factory: _WalletService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/wallet.state.ts
var WalletState = class WalletState2 {
  constructor(walletService) {
    this.walletService = walletService;
  }
  static wallet(state) {
    return state.wallet;
  }
  getUserTransactions(ctx, { payload }) {
    return this.walletService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          wallet: {
            balance: result?.balance,
            transactions: {
              data: result?.transactions?.data,
              total: result?.transactions?.total ? result?.transactions?.total : result?.transactions?.data?.length
            }
          }
        });
      },
      error: (err) => {
        ctx.patchState({
          wallet: {
            balance: 0,
            transactions: {
              data: [],
              total: 0
            }
          }
        });
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function WalletState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WalletState2)(\u0275\u0275inject(WalletService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: WalletState2, factory: WalletState2.\u0275fac });
  }
};
__decorate([
  Action(GetUserTransaction)
], WalletState.prototype, "getUserTransactions", null);
__decorate([
  Selector()
], WalletState, "wallet", null);
WalletState = __decorate([
  State({
    name: "wallet",
    defaults: {
      wallet: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], WalletState);

// src/app/shared/store/action/point.action.ts
var GetUserTransaction2 = class {
  static {
    this.type = "[Point] Transaction Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/point.service.ts
var PointService = class _PointService {
  constructor(http) {
    this.http = http;
  }
  getUserTransaction(payload) {
    return this.http.get(`${environment.URL}/points.json`, { params: payload });
  }
  static {
    this.\u0275fac = function PointService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PointService, factory: _PointService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/point.state.ts
var PointState = class PointState2 {
  constructor(pointService) {
    this.pointService = pointService;
  }
  static point(state) {
    return state.point;
  }
  getUserTransaction(ctx, { payload }) {
    return this.pointService.getUserTransaction(payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          point: {
            balance: result?.balance,
            transactions: {
              data: result?.transactions?.data,
              total: result?.transactions?.total ? result?.transactions?.total : result?.transactions?.data?.length
            }
          }
        });
      },
      error: (err) => {
        ctx.patchState({
          point: {
            balance: 0,
            transactions: {
              data: [],
              total: 0
            }
          }
        });
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function PointState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PointState2)(\u0275\u0275inject(PointService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: PointState2, factory: PointState2.\u0275fac });
  }
};
__decorate([
  Action(GetUserTransaction2)
], PointState.prototype, "getUserTransaction", null);
__decorate([
  Selector()
], PointState, "point", null);
PointState = __decorate([
  State({
    name: "point",
    defaults: {
      point: {
        balance: 0,
        transactions: {
          data: [],
          total: 0
        }
      }
    }
  })
], PointState);

// src/app/shared/store/action/refund.action.ts
var GetRefund = class {
  static {
    this.type = "[Refund] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var SendRefundRequest = class {
  static {
    this.type = "[Refund] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/store/action/download.action.ts
var Downloads = class {
  static {
    this.type = "[Download] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DownloadFiles = class {
  static {
    this.type = "[Download] Files";
  }
  constructor(id) {
    this.id = id;
  }
};
var DownloadLicense = class {
  static {
    this.type = "[Download] License";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/services/downloads.service.ts
var DownloadsService = class _DownloadsService {
  constructor(http) {
    this.http = http;
  }
  downloads(payload) {
    return this.http.get(`${environment.URL}/download.json`, { params: payload });
  }
  static {
    this.\u0275fac = function DownloadsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DownloadsService, factory: _DownloadsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/download.state.ts
var DownloadState = class DownloadState2 {
  constructor(downloadService) {
    this.downloadService = downloadService;
  }
  static download(state) {
    return state.download;
  }
  downloads(ctx, action) {
    return this.downloadService.downloads(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          download: {
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
  downloadFiles(ctx, action) {
  }
  downloadLicense(ctx, action) {
  }
  static {
    this.\u0275fac = function DownloadState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DownloadState2)(\u0275\u0275inject(DownloadsService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: DownloadState2, factory: DownloadState2.\u0275fac });
  }
};
__decorate([
  Action(Downloads)
], DownloadState.prototype, "downloads", null);
__decorate([
  Action(DownloadFiles)
], DownloadState.prototype, "downloadFiles", null);
__decorate([
  Action(DownloadLicense)
], DownloadState.prototype, "downloadLicense", null);
__decorate([
  Selector()
], DownloadState, "download", null);
DownloadState = __decorate([
  State({
    name: "download",
    defaults: {
      download: {
        data: [],
        total: 0
      }
    }
  })
], DownloadState);

// src/app/shared/services/refund.service.ts
var RefundService = class _RefundService {
  constructor(http) {
    this.http = http;
  }
  getRefunds(payload) {
    return this.http.get(`${environment.URL}/refund.json`, { params: payload });
  }
  static {
    this.\u0275fac = function RefundService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RefundService, factory: _RefundService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/refund.state.ts
var RefundState = class RefundState2 {
  constructor(refundService) {
    this.refundService = refundService;
  }
  static refund(state) {
    return state.refund;
  }
  getRefund(ctx, action) {
    return this.refundService.getRefunds(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          refund: {
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
  sendRefundStatus(ctx, action) {
  }
  static {
    this.\u0275fac = function RefundState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RefundState2)(\u0275\u0275inject(RefundService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: RefundState2, factory: RefundState2.\u0275fac });
  }
};
__decorate([
  Action(GetRefund)
], RefundState.prototype, "getRefund", null);
__decorate([
  Action(SendRefundRequest)
], RefundState.prototype, "sendRefundStatus", null);
__decorate([
  Selector()
], RefundState, "refund", null);
RefundState = __decorate([
  State({
    name: "refund",
    defaults: {
      refund: {
        data: [],
        total: 0
      }
    }
  })
], RefundState);

// src/app/shared/components/widgets/modal/confirmation-modal/confirmation-modal.component.ts
var ConfirmationModalComponent = class _ConfirmationModalComponent {
  constructor(modal, authService, store) {
    this.modal = modal;
    this.authService = authService;
    this.store = store;
    this.confirm = new EventEmitter();
  }
  confirmation() {
    this.confirm.emit(true);
  }
  static {
    this.\u0275fac = function ConfirmationModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationModalComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationModalComponent, selectors: [["app-confirmation-modal"]], outputs: { confirm: "confirm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 19, consts: [[1, "modal-body"], [1, "ri-question-line", "icon-box"], [1, "modal-title"], [1, "button-box"], [3, "click", "spinner", "id"], [3, "click", "id"]], template: function ConfirmationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "i", 1);
        \u0275\u0275elementStart(2, "h5", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 3)(9, "app-button", 4);
        \u0275\u0275listener("click", function ConfirmationModalComponent_Template_app_button_click_9_listener() {
          return ctx.modal.dismissAll("Cancel");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-button", 5);
        \u0275\u0275listener("click", function ConfirmationModalComponent_Template_app_button_click_12_listener() {
          return ctx.confirmation();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "confirmation"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 13, "are_you_sure_you_want_to_proceed"), "?");
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-md fw-bold btn-outline");
        \u0275\u0275property("spinner", false)("id", "confirm_no_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "no"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "confirm_yes_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "yes"), " ");
      }
    }, dependencies: [TranslateModule, TranslatePipe, ButtonComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationModalComponent, { className: "ConfirmationModalComponent" });
})();

// src/app/shared/validator/password-match.ts
var CustomValidators = class {
  static MatchValidator(source, target) {
    return (control) => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value ? { mismatch: true } : null;
    };
  }
};

export {
  ConfirmationModalComponent,
  CustomValidators,
  GetNotification,
  MarkAsReadNotification,
  NotificationState,
  GetPaymentDetails,
  UpdatePaymentDetails,
  PaymentDetailsState,
  GetUserTransaction,
  WalletState,
  GetUserTransaction2,
  PointState,
  GetRefund,
  SendRefundRequest,
  Downloads,
  DownloadFiles,
  DownloadLicense,
  DownloadState,
  RefundState
};
//# sourceMappingURL=chunk-OYZRUOGI.js.map
