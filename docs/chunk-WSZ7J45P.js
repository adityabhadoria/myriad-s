import {
  ConfirmationModalComponent,
  CustomValidators,
  DownloadFiles,
  DownloadLicense,
  DownloadState,
  Downloads,
  GetNotification,
  GetPaymentDetails,
  GetRefund,
  GetUserTransaction,
  GetUserTransaction2,
  MarkAsReadNotification,
  NotificationState,
  PaymentDetailsState,
  PointState,
  RefundState,
  SendRefundRequest,
  UpdatePaymentDetails,
  WalletState
} from "./chunk-OYZRUOGI.js";
import {
  AddressModalComponent,
  TextConverterPipe
} from "./chunk-ATNCNZTA.js";
import {
  AccountService,
  AccountState,
  DeleteAddress,
  DownloadInvoice,
  GetOrderStatus,
  GetOrders,
  LoaderComponent,
  Logout,
  OrderState,
  OrderStatusState,
  RePayment,
  Select2,
  Select2Module,
  UpdateUserPassword,
  UpdateUserProfile,
  ViewOrder,
  countryCodes
} from "./chunk-J5JW2VI6.js";
import {
  PaginationComponent
} from "./chunk-PQG4CYAW.js";
import {
  ButtonComponent,
  CurrencySymbolPipe,
  LoaderState
} from "./chunk-YVVLA4K6.js";
import {
  BreadcrumbComponent
} from "./chunk-LDIDPIIC.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Location,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgbActiveModal,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbModal,
  NgbModule,
  NgbTooltip,
  NoDataComponent,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Select,
  SettingState,
  Store,
  Subject,
  TitleCasePipe,
  TranslateModule,
  TranslatePipe,
  UpperCasePipe,
  Validators,
  __decorate,
  mergeMap,
  of,
  switchMap,
  takeUntil,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate5,
  ɵɵtextInterpolate6
} from "./chunk-GDIBOM5I.js";

// src/app/components/account/sidebar/sidebar.component.ts
var _c0 = () => ["active"];
var _c1 = () => ["/account/dashboard"];
var _c2 = () => ["/account/notifications"];
var _c3 = () => ["/account/bank-details"];
var _c4 = () => ["/account/wallet"];
var _c5 = () => ["/account/point"];
var _c6 = () => ["/account/order"];
var _c7 = () => ["/account/downloads"];
var _c8 = () => ["/account/refund"];
var _c9 = () => ["/account/addresses"];
function SidebarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r0.user$)) == null ? null : tmp_1_0.profile_image == null ? null : tmp_1_0.profile_image.original_url, \u0275\u0275sanitizeUrl);
  }
}
function SidebarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_1_0 = \u0275\u0275pipeBind1(3, 1, ctx_r0.user$)) == null ? null : tmp_1_0.name == null ? null : (tmp_1_0 = tmp_1_0.name.charAt(0)) == null ? null : (tmp_1_0 = tmp_1_0.toString()) == null ? null : tmp_1_0.toUpperCase());
  }
}
function SidebarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275listener("click", function SidebarComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uploadImage("remove"));
    });
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.unreadNotificationCount, ")");
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor(store, modal, accountService) {
    this.store = store;
    this.modal = modal;
    this.accountService = accountService;
    this.notification$.subscribe((notification) => {
      this.unreadNotificationCount = notification?.filter((item) => !item.read_at)?.length;
    });
  }
  logout() {
    const modal = this.modal.open(ConfirmationModalComponent, { centered: true, windowClass: "" });
    modal.componentInstance.confirm.subscribe((val) => {
      if (val === true) {
        this.store.dispatch(new Logout());
        this.modal.dismissAll();
      }
    });
  }
  closeMenu() {
    this.accountService.isOpenMenu = false;
  }
  uploadImage(event) {
    if (event?.target?.files) {
      let form = new FormData();
      form.append("profile_image", event.target.files[0]);
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    } else {
      let form = new FormData();
      form.append("profile_image_id", "");
      form.append("_method", "PUT");
      this.store.dispatch(new UpdateUserProfile(form));
    }
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(AccountService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 82, vars: 90, consts: [[1, "dashboard-sidebar"], [1, "btn", "back-btn", 3, "click"], [1, "ri-close-line"], [1, "profile-top"], [1, "profile-top-box"], [1, "profile-image"], [1, "position-relative", "h-100"], ["alt", "profile", 1, "update_img", 3, "src"], [1, "user-round"], [1, "user-icon"], ["type", "file", "accept", "image/*", 3, "change"], [1, "ri-image-edit-line", "d-lg-block", "d-none"], [1, "ri-pencil-fill", "edit-icon", "d-lg-none"], [1, "user-icon-2"], [1, "profile-detail"], [1, "faq-tab"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], [1, "nav-link", 3, "routerLinkActive", "routerLink"], [1, "ri-home-line"], [1, "ri-notification-line"], [1, "notification-count"], [1, "ri-bank-line"], [1, "ri-wallet-line"], [1, "ri-coin-line"], [1, "ri-file-text-line"], [1, "ri-download-2-line"], [1, "ri-money-dollar-circle-line"], [1, "ri-map-pin-line"], ["role", "presentation", 1, "nav-item", "logout-cls"], ["href", "javascript:void(0)", 1, "btn", "loagout-btn", 3, "click"], [1, "ri-logout-box-r-line"], [1, "user-icon-2", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_1_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "div", 5)(9, "div", 6);
        \u0275\u0275template(10, SidebarComponent_Conditional_10_Template, 2, 3, "img", 7);
        \u0275\u0275pipe(11, "async");
        \u0275\u0275pipe(12, "async");
        \u0275\u0275template(13, SidebarComponent_Conditional_13_Template, 4, 3, "div", 8);
        \u0275\u0275elementStart(14, "div", 9)(15, "input", 10);
        \u0275\u0275listener("change", function SidebarComponent_Template_input_change_15_listener($event) {
          return ctx.uploadImage($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "i", 11)(17, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(18, SidebarComponent_Conditional_18_Template, 2, 0, "div", 13);
        \u0275\u0275pipe(19, "async");
        \u0275\u0275pipe(20, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14)(22, "h5");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275pipe(25, "titlecase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h6");
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "ul", 16)(31, "li", 17)(32, "a", 18);
        \u0275\u0275element(33, "i", 19);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "li", 17)(37, "a", 18);
        \u0275\u0275element(38, "i", 20);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275template(41, SidebarComponent_Conditional_41_Template, 2, 1, "span", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "li", 17)(43, "a", 18);
        \u0275\u0275element(44, "i", 22);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "li", 17)(48, "a", 18);
        \u0275\u0275element(49, "i", 23);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "li", 17)(53, "a", 18);
        \u0275\u0275element(54, "i", 24);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "li", 17)(58, "a", 18);
        \u0275\u0275element(59, "i", 25);
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "li", 17)(63, "a", 18);
        \u0275\u0275element(64, "i", 26);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "li", 17)(68, "a", 18);
        \u0275\u0275element(69, "i", 27);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "li", 17)(73, "a", 18);
        \u0275\u0275element(74, "i", 28);
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "li", 29)(78, "a", 30);
        \u0275\u0275listener("click", function SidebarComponent_Template_a_click_78_listener() {
          return ctx.logout();
        });
        \u0275\u0275element(79, "i", 31);
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275classProp("open", ctx.accountService.isOpenMenu);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 36, "close"));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(11, 38, ctx.user$)) == null ? null : tmp_2_0.profile_image) && ((tmp_2_0 = \u0275\u0275pipeBind1(12, 40, ctx.user$)) == null ? null : tmp_2_0.profile_image == null ? null : tmp_2_0.profile_image.original_url) ? 10 : 13);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(((tmp_3_0 = \u0275\u0275pipeBind1(19, 42, ctx.user$)) == null ? null : tmp_3_0.profile_image) && ((tmp_3_0 = \u0275\u0275pipeBind1(20, 44, ctx.user$)) == null ? null : tmp_3_0.profile_image == null ? null : tmp_3_0.profile_image.original_url) ? 18 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 48, (tmp_4_0 = \u0275\u0275pipeBind1(24, 46, ctx.user$)) == null ? null : tmp_4_0.name));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate((tmp_5_0 = \u0275\u0275pipeBind1(28, 50, ctx.user$)) == null ? null : tmp_5_0.email);
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(72, _c0))("routerLink", \u0275\u0275pureFunction0(73, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 52, "dashboard"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(74, _c0))("routerLink", \u0275\u0275pureFunction0(75, _c2));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 54, "notifications"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.unreadNotificationCount ? 41 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(76, _c0))("routerLink", \u0275\u0275pureFunction0(77, _c3));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 56, "bank_details"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(78, _c0))("routerLink", \u0275\u0275pureFunction0(79, _c4));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 58, "my_wallet"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(80, _c0))("routerLink", \u0275\u0275pureFunction0(81, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 60, "earning_points"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(82, _c0))("routerLink", \u0275\u0275pureFunction0(83, _c6));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(61, 62, "my_orders"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(84, _c0))("routerLink", \u0275\u0275pureFunction0(85, _c7));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(66, 64, "downloads"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(86, _c0))("routerLink", \u0275\u0275pureFunction0(87, _c8));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 66, "refund_history"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActive", \u0275\u0275pureFunction0(88, _c0))("routerLink", \u0275\u0275pureFunction0(89, _c9));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 68, "saved_address"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(81, 70, "logout"), " ");
      }
    }, dependencies: [CommonModule, AsyncPipe, TitleCasePipe, RouterModule, RouterLink, RouterLinkActive, TranslateModule, TranslatePipe] });
  }
};
__decorate([
  Select(NotificationState.notification)
], SidebarComponent.prototype, "notification$", void 0);
__decorate([
  Select(AccountState.user)
], SidebarComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent" });
})();

// src/app/components/account/account.component.ts
function AccountComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-loader", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("loaderClass", "loader-wrapper blur-bg");
  }
}
var AccountComponent = class _AccountComponent {
  constructor(store, router, accountService) {
    this.store = store;
    this.router = router;
    this.accountService = accountService;
    this.breadcrumb = {
      title: "Dashboard",
      items: [{ label: "Dashboard", active: false }]
    };
    this.store.dispatch(new GetNotification());
    this.router.events.subscribe(() => {
      this.breadcrumb.title = this.router?.url?.split("?")[0]?.split("/")?.pop();
      if (this.router?.url.includes("order/details")) {
        this.breadcrumb.title = "Order";
      }
      this.breadcrumb.items = [];
      this.breadcrumb.items.push({ label: this.breadcrumb.title, active: false });
    });
  }
  openMenu() {
    this.accountService.isOpenMenu = true;
  }
  static {
    this.\u0275fac = function AccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountComponent, selectors: [["app-account"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 7, consts: [[3, "breadcrumb"], [1, "dashboard-section", "section-b-space", "user-dashboard-section"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "position-relative"], ["id", "top-tabContent", 1, "faq-content", "tab-content"], [1, "box-loader"], [1, "show-btn", "btn", 3, "click"], ["id", "info", 1, "tab-pane", "fade", "show", "active"], [3, "loaderClass"]], template: function AccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-breadcrumb", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-sidebar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
        \u0275\u0275template(8, AccountComponent_Conditional_8_Template, 2, 1, "div", 7);
        \u0275\u0275pipe(9, "async");
        \u0275\u0275elementStart(10, "button", 8);
        \u0275\u0275listener("click", function AccountComponent_Template_button_click_10_listener() {
          return ctx.openMenu();
        });
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275element(14, "router-outlet");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumb", ctx.breadcrumb);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(9, 3, ctx.loadingStatus$) ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, "show_menu"), " ");
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      RouterModule,
      RouterOutlet,
      TranslateModule,
      TranslatePipe,
      BreadcrumbComponent,
      SidebarComponent,
      LoaderComponent
    ] });
  }
};
__decorate([
  Select(LoaderState.status)
], AccountComponent.prototype, "loadingStatus$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountComponent, { className: "AccountComponent" });
})();

// src/app/shared/components/widgets/modal/edit-profile-modal/edit-profile-modal.component.ts
function EditProfileModalComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
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
function EditProfileModalComponent_Conditional_6_Conditional_18_Template(rf, ctx) {
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
function EditProfileModalComponent_Conditional_6_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "please_enter_valid_email"), " ");
  }
}
function EditProfileModalComponent_Conditional_6_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r3 == null ? null : data_r3.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r3.code);
  }
}
function EditProfileModalComponent_Conditional_6_Conditional_30_Template(rf, ctx) {
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
function EditProfileModalComponent_Conditional_6_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_number_is_invalid"), " ");
  }
}
function EditProfileModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function EditProfileModalComponent_Conditional_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "label", 11);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 12);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275template(10, EditProfileModalComponent_Conditional_6_Conditional_10_Template, 3, 3, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 10)(13, "label", 15);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275template(18, EditProfileModalComponent_Conditional_6_Conditional_18_Template, 3, 3, "div", 13)(19, EditProfileModalComponent_Conditional_6_Conditional_19_Template, 3, 3, "div", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 17)(21, "div", 10)(22, "label", 18);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select2", 19);
    \u0275\u0275template(26, EditProfileModalComponent_Conditional_6_ng_template_26_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 20);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275template(30, EditProfileModalComponent_Conditional_6_Conditional_30_Template, 3, 3, "div", 13)(31, EditProfileModalComponent_Conditional_6_Conditional_31_Template, 3, 3, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 21)(33, "app-button", 22);
    \u0275\u0275listener("click", function EditProfileModalComponent_Conditional_6_Template_app_button_click_33_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalService.dismissAll("Cancel"));
    });
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "app-button", 23);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const template_r4 = \u0275\u0275reference(27);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 24, "name"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(9, 26, "enter_name"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls["name"].touched && (ctx_r1.form.controls["name"].errors == null ? null : ctx_r1.form.controls["name"].errors["required"]) ? 10 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 28, "email"));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(17, 30, "enter_email"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls["email"].touched && (ctx_r1.form.controls["email"].errors == null ? null : ctx_r1.form.controls["email"].errors["required"]) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls["email"].touched && (ctx_r1.form.controls["email"].errors == null ? null : ctx_r1.form.controls["email"].errors["email"]) ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 32, "phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275property("templates", template_r4)("data", ctx_r1.codes);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(29, 34, "enter_phone"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls["phone"].touched && (ctx_r1.form.controls["phone"].errors == null ? null : ctx_r1.form.controls["phone"].errors["required"]) ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls["phone"].touched && (ctx_r1.form.controls["phone"].errors == null ? null : ctx_r1.form.controls["phone"].errors["pattern"]) ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn btn-outline btn-md fw-bold");
    \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_profile_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 36, "cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn btn-solid");
    \u0275\u0275property("id", "submit_profile_btn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 38, "submit"), " ");
  }
}
var EditProfileModalComponent = class _EditProfileModalComponent {
  constructor(modalService, store, formBuilder) {
    this.modalService = modalService;
    this.store = store;
    this.formBuilder = formBuilder;
    this.modalOpen = false;
    this.flicker = false;
    this.codes = countryCodes;
    this.user$.subscribe((user) => {
      this.flicker = true;
      this.form = this.formBuilder.group({
        name: new FormControl(user?.name, [Validators.required]),
        email: new FormControl(user?.email, [Validators.required, Validators.email]),
        phone: new FormControl(user?.phone, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        country_code: new FormControl(user?.country_code),
        profile_image_id: new FormControl(user?.profile_image_id),
        _method: new FormControl("PUT")
      });
      setTimeout(() => this.flicker = false, 200);
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdateUserProfile(this.form.value));
    }
  }
  static {
    this.\u0275fac = function EditProfileModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditProfileModalComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditProfileModalComponent, selectors: [["app-edit-profile-modal"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 8, consts: [["template", ""], [1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [3, "formGroup"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-4"], [1, "col-xxl-12"], [1, "form-box"], ["for", "name", 1, "form-label"], ["id", "name", "type", "text", "formControlName", "name", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], [1, "col-12"], ["for", "email", 1, "form-label"], ["id", "email", "type", "text", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "col-12", "phone-field"], ["for", "address1", 1, "form-label"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "templates", "data"], ["type", "number", "formControlName", "phone", "name", "phone", 1, "form-control", "intl-input-padding", 3, "placeholder"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "id"], [1, "country"], [1, "flag-box"], [1, "dial-code"]], template: function EditProfileModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 3);
        \u0275\u0275listener("click", function EditProfileModalComponent_Template_app_button_click_4_listener() {
          return ctx.modalService.dismissAll("Cancel");
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, EditProfileModalComponent_Conditional_6_Template, 39, 40, "form", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "edit_profile"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.flicker ? 6 : -1);
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, Select2Module, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Select2, FormsModule, ReactiveFormsModule, ButtonComponent] });
  }
};
__decorate([
  Select(AccountState.user)
], EditProfileModalComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditProfileModalComponent, { className: "EditProfileModalComponent" });
})();

// src/app/shared/components/widgets/modal/change-password-modal/change-password-modal.component.ts
function ChangePasswordModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "current_password_is_required"), " ");
  }
}
function ChangePasswordModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "new_password_is_required"), " ");
  }
}
function ChangePasswordModalComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "confirm_password_is_required"), " ");
  }
}
function ChangePasswordModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "confirm_password_does_not_matched"), " ");
  }
}
var ChangePasswordModalComponent = class _ChangePasswordModalComponent {
  constructor(modalService, store, formBuilder) {
    this.modalService = modalService;
    this.store = store;
    this.formBuilder = formBuilder;
    this.form = this.formBuilder.group({
      current_password: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      password_confirmation: new FormControl("", [Validators.required])
    }, { validator: CustomValidators.MatchValidator("password", "password_confirmation") });
  }
  get passwordMatchError() {
    return this.form?.getError("mismatch") && this.form?.get("password_confirmation")?.touched;
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdateUserPassword(this.form.value)).subscribe({
        complete: () => {
          this.form.reset();
        }
      });
    }
  }
  static {
    this.\u0275fac = function ChangePasswordModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangePasswordModalComponent)(\u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordModalComponent, selectors: [["app-change-password-modal"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 43, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-4"], [1, "col-xxl-12"], [1, "form-box"], ["for", "cpass", 1, "form-label"], ["id", "cpass", "type", "password", "formControlName", "current_password", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], [1, "col-12"], ["for", "npass", 1, "form-label"], ["id", "npass", "type", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], ["for", "cnpass", 1, "form-label"], ["id", "cnpass", "type", "password", "formControlName", "password_confirmation", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "id"]], template: function ChangePasswordModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function ChangePasswordModalComponent_Template_app_button_click_4_listener() {
          return ctx.modalService.dismissAll("Cross click");
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 4);
        \u0275\u0275listener("ngSubmit", function ChangePasswordModalComponent_Template_form_ngSubmit_6_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 10);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275template(16, ChangePasswordModalComponent_Conditional_16_Template, 3, 3, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 8)(19, "label", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 14);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275template(24, ChangePasswordModalComponent_Conditional_24_Template, 3, 3, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "div", 8)(27, "label", 15);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 16);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275template(32, ChangePasswordModalComponent_Conditional_32_Template, 3, 3, "div", 11)(33, ChangePasswordModalComponent_Conditional_33_Template, 3, 3, "div", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 17)(35, "app-button", 18);
        \u0275\u0275listener("click", function ChangePasswordModalComponent_Template_app_button_click_35_listener() {
          return ctx.modalService.dismissAll("Cancel");
        });
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "app-button", 19);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 25, "change_password"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "password_modal_close_btn");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 27, "current_password"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 29, "enter_current_password"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["current_password"].touched && (ctx.form.controls["current_password"].errors == null ? null : ctx.form.controls["current_password"].errors["required"]) ? 16 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 31, "new_password"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 33, "enter_new_password"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["password"].touched && (ctx.form.controls["password"].errors == null ? null : ctx.form.controls["password"].errors["required"]) ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 35, "confirm_password"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(31, 37, "enter_confirm_password"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["password_confirmation"].touched && (ctx.form.controls["password_confirmation"].errors == null ? null : ctx.form.controls["password_confirmation"].errors["required"]) ? 32 : ctx.passwordMatchError ? 33 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-outline btn-md fw-bold");
        \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 39, "cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 41, "submit"), " ");
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, ButtonComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordModalComponent, { className: "ChangePasswordModalComponent" });
})();

// src/app/components/account/dashboard/dashboard.component.ts
function DashboardComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate6("", \u0275\u0275pipeBind1(3, 6, "address"), ": ", ctx_r0.address.street, " ", ctx_r0.address.city, ", ", ctx_r0.address.state.name, ", ", ctx_r0.address.country.name, " ", ctx_r0.address.pincode, "");
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(modal) {
    this.modal = modal;
    this.user$.subscribe((user) => {
      this.address = user?.address?.length ? user?.address?.[0] : null;
    });
  }
  openModal(value) {
    if (value == "profile") {
      this.modal.open(EditProfileModalComponent, { centered: true, windowClass: "theme-modal-2" });
    } else if (value == "password") {
      this.modal.open(ChangePasswordModalComponent, { centered: true, windowClass: "theme-modal-2" });
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 88, vars: 76, consts: [[1, "counter-section"], [1, "welcome-msg"], [1, "row"], [1, "col-md-4"], [1, "counter-box"], ["src", "assets/images/icon/dashboard/account1.png", 1, "img-fluid"], ["src", "assets/images/icon/dashboard/account2.png", 1, "img-fluid"], ["src", "assets/images/icon/dashboard/account3.png", 1, "img-fluid"], [1, "box-account", "box-info"], [1, "box-head"], [1, "col-12"], [1, "box"], [1, "box-content"], [1, "box", "mt-3"], [1, "col-sm-6"], ["href", "javascript:void(0)", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "async");
        \u0275\u0275pipe(6, "titlecase");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 2)(11, "div", 3)(12, "div", 4);
        \u0275\u0275element(13, "img", 5);
        \u0275\u0275elementStart(14, "div")(15, "h3");
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275pipe(18, "async");
        \u0275\u0275pipe(19, "currencySymbol");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "h5");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 3)(24, "div", 4);
        \u0275\u0275element(25, "img", 6);
        \u0275\u0275elementStart(26, "div")(27, "h3");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275pipe(30, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h5");
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 3)(35, "div", 4);
        \u0275\u0275element(36, "img", 7);
        \u0275\u0275elementStart(37, "div")(38, "h3");
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "async");
        \u0275\u0275pipe(41, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "h5");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(45, "div", 8)(46, "div", 9)(47, "h4");
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 2)(51, "div", 10)(52, "div", 11)(53, "ul", 12)(54, "li")(55, "h6");
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275pipe(58, "async");
        \u0275\u0275pipe(59, "titlecase");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "li")(61, "h6");
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275pipe(64, "async");
        \u0275\u0275pipe(65, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(66, DashboardComponent_Conditional_66_Template, 4, 8, "li");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "div", 13)(68, "div", 9)(69, "h4");
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 2)(73, "div", 14)(74, "h6");
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275pipe(77, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "a", 15);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_78_listener() {
          return ctx.openModal("profile");
        });
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 14)(82, "h6");
        \u0275\u0275text(83);
        \u0275\u0275pipe(84, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "a", 15);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_85_listener() {
          return ctx.openModal("password");
        });
        \u0275\u0275text(86);
        \u0275\u0275pipe(87, "translate");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_2_0;
        let tmp_4_0;
        let tmp_6_0;
        let tmp_9_0;
        let tmp_10_0;
        let tmp_13_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 22, "hello"), ", ", \u0275\u0275pipeBind1(6, 26, (tmp_0_0 = \u0275\u0275pipeBind1(5, 24, ctx.user$)) == null ? null : tmp_0_0.name), " !");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 28, "welcome_text"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 34, ((tmp_2_0 = \u0275\u0275pipeBind1(17, 30, ctx.user$)) == null ? null : tmp_2_0.wallet) ? (tmp_2_0 = \u0275\u0275pipeBind1(18, 32, ctx.user$)) == null ? null : tmp_2_0.wallet == null ? null : tmp_2_0.wallet.balance : 0));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 36, "balance"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(((tmp_4_0 = \u0275\u0275pipeBind1(29, 38, ctx.user$)) == null ? null : tmp_4_0.point) ? (tmp_4_0 = \u0275\u0275pipeBind1(30, 40, ctx.user$)) == null ? null : tmp_4_0.point == null ? null : tmp_4_0.point.balance : 0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 42, "total_points"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(((tmp_6_0 = \u0275\u0275pipeBind1(40, 44, ctx.user$)) == null ? null : tmp_6_0.orders_count) ? (tmp_6_0 = \u0275\u0275pipeBind1(41, 46, ctx.user$)) == null ? null : tmp_6_0.orders_count : 0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 48, "total_orders"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 50, "account_information"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(57, 52, "name"), ": ", \u0275\u0275pipeBind1(59, 56, (tmp_9_0 = \u0275\u0275pipeBind1(58, 54, ctx.user$)) == null ? null : tmp_9_0.name), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(63, 58, "phone"), ": +", (tmp_10_0 = \u0275\u0275pipeBind1(64, 60, ctx.user$)) == null ? null : tmp_10_0.country_code, " ", (tmp_10_0 = \u0275\u0275pipeBind1(65, 62, ctx.user$)) == null ? null : tmp_10_0.phone, "");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.address ? 66 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 64, "login_details"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(76, 66, "email"), " : ", (tmp_13_0 = \u0275\u0275pipeBind1(77, 68, ctx.user$)) == null ? null : tmp_13_0.email, "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 70, "edit"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(84, 72, "password"), " : \u25CF\u25CF\u25CF\u25CF\u25CF\u25CF");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 74, "edit"));
      }
    }, dependencies: [CommonModule, AsyncPipe, TitleCasePipe, TranslateModule, TranslatePipe, CurrencySymbolPipe] });
  }
};
__decorate([
  Select(AccountState.user)
], DashboardComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();

// src/app/components/account/notification/notification.component.ts
function NotificationComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275element(4, "i", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r1 = ctx.$implicit;
    \u0275\u0275classProp("unread", !notification_r1.read_at);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r1 == null ? null : notification_r1.data == null ? null : notification_r1.data.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, notification_r1 == null ? null : notification_r1.created_at, "dd MMM yyyy hh:mm:a"), "");
  }
}
function NotificationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 3);
    \u0275\u0275repeaterCreate(1, NotificationComponent_Conditional_6_For_2_Template, 7, 7, "li", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.notification$));
  }
}
function NotificationComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 7);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_notification")("description", "no_notification_description");
  }
}
var NotificationComponent = class _NotificationComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnDestroy() {
    this.store.dispatch(new MarkAsReadNotification());
  }
  static {
    this.\u0275fac = function NotificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 6, consts: [[1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "notification-list"], [3, "class", "image", "text", "description"], [3, "unread"], [1, "ri-time-line"], [3, "image", "text", "description"]], template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, NotificationComponent_Conditional_6_Template, 4, 2, "ul", 3);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275template(8, NotificationComponent_Conditional_8_Template, 1, 5, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "notifications"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.notification$)) == null ? null : tmp_1_0.length) ? 6 : 8);
      }
    }, dependencies: [CommonModule, AsyncPipe, DatePipe, TranslateModule, TranslatePipe, NoDataComponent] });
  }
};
__decorate([
  Select(NotificationState.notification)
], NotificationComponent.prototype, "notification$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent" });
})();

// src/app/components/account/bank-details/bank-details.component.ts
var BankDetailsComponent = class _BankDetailsComponent {
  constructor(store) {
    this.store = store;
    this.active = "bank";
    this.form = new FormGroup({
      bank_account_no: new FormControl(),
      bank_name: new FormControl(),
      bank_holder_name: new FormControl(),
      swift: new FormControl(),
      ifsc: new FormControl(),
      paypal_email: new FormControl("", [Validators.email])
    });
  }
  ngOnInit() {
    this.store.dispatch(new GetPaymentDetails());
    this.paymentDetails$.subscribe((paymentDetails) => {
      this.form.patchValue({
        bank_account_no: paymentDetails?.bank_account_no,
        bank_name: paymentDetails?.bank_name,
        bank_holder_name: paymentDetails?.bank_holder_name,
        swift: paymentDetails?.swift,
        ifsc: paymentDetails?.ifsc,
        paypal_email: paymentDetails?.paypal_email
      });
    });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new UpdatePaymentDetails(this.form.value));
    }
  }
  static {
    this.\u0275fac = function BankDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BankDetailsComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankDetailsComponent, selectors: [["app-bank-details"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 50, consts: [[1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "themeform-auth", 3, "ngSubmit", "formGroup"], [1, "row", "mb-3", "align-items-center"], ["for", "bank_account_no", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], [1, "col-xxl-10", "col-lg-12", "col-md-9"], ["type", "text", "id", "bank_account_no", "formControlName", "bank_account_no", "numbersOnly", "", 1, "form-control", 3, "placeholder"], ["for", "bank_name", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "bank_name", "formControlName", "bank_name", 1, "form-control", 3, "placeholder"], ["for", "bank_holder_name", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "bank_holder_name", "formControlName", "bank_holder_name", 1, "form-control", 3, "placeholder"], ["for", "swift", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "swift", "formControlName", "swift", 1, "form-control", 3, "placeholder"], ["for", "ifsc", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "text", "id", "ifsc", "formControlName", "ifsc", 1, "form-control", 3, "placeholder"], [1, "mb-3", "top-sec", "top-sec-2"], ["for", "paypal_email", 1, "form-label", "col-xxl-2", "col-lg-12", "col-md-3"], ["type", "email", "id", "paypal_email", "formControlName", "paypal_email", 1, "form-control", 3, "placeholder"], [1, "text-end"], [3, "id"]], template: function BankDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 3);
        \u0275\u0275listener("ngSubmit", function BankDetailsComponent_Template_form_ngSubmit_6_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(7, "div", 4)(8, "label", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275element(12, "input", 7);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 4)(15, "label", 8);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 6);
        \u0275\u0275element(19, "input", 9);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 4)(22, "label", 10);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 6);
        \u0275\u0275element(26, "input", 11);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 4)(29, "label", 12);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 6);
        \u0275\u0275element(33, "input", 13);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 4)(36, "label", 14);
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 6);
        \u0275\u0275element(40, "input", 15);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 16)(43, "h3");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "form", 3);
        \u0275\u0275listener("ngSubmit", function BankDetailsComponent_Template_form_ngSubmit_46_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(47, "div", 4)(48, "label", 17);
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 6);
        \u0275\u0275element(52, "input", 18);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 19)(55, "app-button", 20);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 20, "bank_details"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 22, "bank_account_no"));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(13, 24, "enter_bank_account_no"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 26, "bank_name"));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(20, 28, "enter_bank_name"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 30, "holder_name"));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(27, 32, "enter_bank_holder_name"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 34, "swift"));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(34, 36, "enter_swift"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 38, "ifsc"));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(41, 40, "enter_ifsc"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 42, "paypal_details"));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 44, "paypal_email"));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(53, 46, "enter_paypal_email"));
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "payout_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 48, "save"));
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, ButtonComponent] });
  }
};
__decorate([
  Select(PaymentDetailsState.paymentDetails)
], BankDetailsComponent.prototype, "paymentDetails$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankDetailsComponent, { className: "BankDetailsComponent" });
})();

// src/app/components/account/wallet/wallet.component.ts
function WalletComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "div", 3)(3, "div", 4)(4, "div", 7)(5, "div", 8)(6, "div", 9);
    \u0275\u0275element(7, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12)(10, "h5");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "async");
    \u0275\u0275pipe(17, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 2, "wallet_balance"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 8, \u0275\u0275pipeBind1(15, 4, ctx_r0.wallet$) ? (tmp_2_0 = \u0275\u0275pipeBind1(16, 6, ctx_r0.wallet$)) == null ? null : tmp_2_0.balance : 0));
  }
}
function WalletComponent_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r2 == null ? null : transaction_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, transaction_r2 == null ? null : transaction_r2.amount));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(transaction_r2 == null ? null : transaction_r2.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge rounded-0 bg-", transaction_r2 == null ? null : transaction_r2.type, " custom-badge");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, transaction_r2 == null ? null : transaction_r2.type));
  }
}
function WalletComponent_Conditional_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "div", 20)(4, "nav", 21)(5, "app-pagination", 22);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function WalletComponent_Conditional_6_Conditional_22_Template_app_pagination_setPage_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setPaginate($event));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, ctx_r0.wallet$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r0.filter["page"])("pageSize", ctx_r0.filter["paginate"]);
  }
}
function WalletComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 13)(2, "div", 14)(3, "table", 15)(4, "thead")(5, "tr", 16)(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, WalletComponent_Conditional_6_For_20_Template, 14, 14, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, WalletComponent_Conditional_6_Conditional_22_Template, 7, 5, "div", 17);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_5_0 = \u0275\u0275pipeBind1(21, 13, ctx_r0.wallet$)) == null ? null : tmp_5_0.transactions == null ? null : tmp_5_0.transactions.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_6_0 = \u0275\u0275pipeBind1(23, 15, ctx_r0.wallet$)) == null ? null : tmp_6_0.transactions == null ? null : tmp_6_0.transactions.data == null ? null : tmp_6_0.transactions.data.length) ? 22 : -1);
  }
}
function WalletComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 23);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_transaction")("description", "no_wallet_balance");
  }
}
var WalletComponent = class _WalletComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction(this.filter));
  }
  static {
    this.\u0275fac = function WalletComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WalletComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletComponent, selectors: [["app-wallet"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 6, consts: [[1, "row", "g-3"], [1, "col-12"], [1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "card"], [1, "total-contain", "wallet-bg"], [1, "wallet-point-box"], [1, "total-image"], ["src", "assets/images/svg/wallet.svg", "alt", "wallet"], [1, "total-detail"], [1, "total-box"], [1, "wallet-table"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "product-pagination"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function WalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, WalletComponent_Conditional_1_Template, 18, 10, "div", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
        \u0275\u0275template(6, WalletComponent_Conditional_6_Template, 24, 17, "div", 4);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275template(8, WalletComponent_Conditional_8_Template, 1, 5, "app-no-data", 5);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 2, ctx.wallet$)) == null ? null : tmp_0_0.transactions == null ? null : tmp_0_0.transactions.data == null ? null : tmp_0_0.transactions.data.length) ? 1 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.wallet$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length) ? 6 : 8);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      TitleCasePipe,
      DatePipe,
      TranslateModule,
      TranslatePipe,
      CurrencySymbolPipe,
      PaginationComponent,
      NoDataComponent
    ] });
  }
};
__decorate([
  Select(WalletState.wallet)
], WalletComponent.prototype, "wallet$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletComponent, { className: "WalletComponent" });
})();

// src/app/components/account/point/point.component.ts
function PointComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
}
function PointComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 6)(2, "div", 3)(3, "div", 4)(4, "div", 7)(5, "div", 8)(6, "div", 9);
    \u0275\u0275element(7, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12)(10, "h5");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13)(18, "h3", 14);
    \u0275\u0275element(19, "i", 15);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275pipe(23, "currencySymbol");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(25, PointComponent_Conditional_1_Conditional_25_Template, 0, 0);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "total_points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, ctx_r0.point$) ? (tmp_2_0 = \u0275\u0275pipeBind1(16, 10, ctx_r0.point$)) == null ? null : tmp_2_0.balance : 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(21, 12, "1_point"), " = ", \u0275\u0275pipeBind1(23, 16, 1 / ((tmp_3_0 = \u0275\u0275pipeBind1(22, 14, ctx_r0.setting$)) == null ? null : tmp_3_0.wallet_points == null ? null : tmp_3_0.wallet_points.point_currency_ratio)), " ", \u0275\u0275pipeBind1(24, 18, "balance"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(26, 20, ctx_r0.point$)) == null ? null : tmp_4_0.transactions == null ? null : tmp_4_0.transactions.data == null ? null : tmp_4_0.transactions.data.length) ? 25 : -1);
  }
}
function PointComponent_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const transaction_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, transaction_r2 == null ? null : transaction_r2.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", transaction_r2 == null ? null : transaction_r2.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r2 == null ? null : transaction_r2.detail);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge rounded-0 bg-", transaction_r2 == null ? null : transaction_r2.type, " custom-badge");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, transaction_r2 == null ? null : transaction_r2.type));
  }
}
function PointComponent_Conditional_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "nav", 24)(5, "app-pagination", 25);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function PointComponent_Conditional_6_Conditional_22_Template_app_pagination_setPage_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setPaginate($event));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, ctx_r0.point$)) == null ? null : tmp_2_0.transactions == null ? null : tmp_2_0.transactions.total) || 0)("currentPage", ctx_r0.filter["page"])("pageSize", ctx_r0.filter["paginate"]);
  }
}
function PointComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 16)(2, "div", 17)(3, "table", 18)(4, "thead")(5, "tr", 19)(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, PointComponent_Conditional_6_For_20_Template, 13, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, PointComponent_Conditional_6_Conditional_22_Template, 7, 5, "div", 20);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "points"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "remark"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_5_0 = \u0275\u0275pipeBind1(21, 13, ctx_r0.point$)) == null ? null : tmp_5_0.transactions == null ? null : tmp_5_0.transactions.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_6_0 = \u0275\u0275pipeBind1(23, 15, ctx_r0.point$)) == null ? null : tmp_6_0.transactions == null ? null : tmp_6_0.transactions.data == null ? null : tmp_6_0.transactions.data.length) ? 22 : -1);
  }
}
function PointComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 26);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_transaction")("description", "no_points");
  }
}
var PointComponent = class _PointComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetUserTransaction2(this.filter));
  }
  static {
    this.\u0275fac = function PointComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PointComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PointComponent, selectors: [["app-point"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 6, consts: [[1, "row", "g-3"], [1, "col-12"], [1, "card", "dashboard-table"], [1, "card-body"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "card"], [1, "total-contain", "wallet-bg"], [1, "wallet-point-box"], [1, "total-image"], ["src", "assets/images/svg/coin.svg", "alt", "coin", 1, "img-fluid"], [1, "total-detail"], [1, "total-box"], [1, "point-ratio"], [1, "counter"], [1, "ri-information-line"], [1, "wallet-table"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "product-pagination"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function PointComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, PointComponent_Conditional_1_Template, 27, 22, "div", 1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
        \u0275\u0275template(6, PointComponent_Conditional_6_Template, 24, 17, "div", 4);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275template(8, PointComponent_Conditional_8_Template, 1, 5, "app-no-data", 5);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(((tmp_0_0 = \u0275\u0275pipeBind1(2, 2, ctx.point$)) == null ? null : tmp_0_0.transactions == null ? null : tmp_0_0.transactions.data == null ? null : tmp_0_0.transactions.data.length) ? 1 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.point$)) == null ? null : tmp_1_0.transactions == null ? null : tmp_1_0.transactions.data == null ? null : tmp_1_0.transactions.data.length) ? 6 : 8);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      TitleCasePipe,
      DatePipe,
      TranslateModule,
      TranslatePipe,
      CurrencySymbolPipe,
      PaginationComponent,
      NoDataComponent
    ] });
  }
};
__decorate([
  Select(SettingState.setting)
], PointComponent.prototype, "setting$", void 0);
__decorate([
  Select(PointState.point)
], PointComponent.prototype, "point$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PointComponent, { className: "PointComponent" });
})();

// src/app/components/account/orders/orders.component.ts
var _c02 = (a0) => ["/account/order/details", a0];
function OrdersComponent_Conditional_6_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "a", 11);
    \u0275\u0275element(19, "i", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", order_r1.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, order_r1 == null ? null : order_r1.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, order_r1 == null ? null : order_r1.total));
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("badge rounded-0 bg-", order_r1 == null ? null : order_r1.payment_status == null ? null : order_r1.payment_status.toLowerCase(), " custom-badge");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, order_r1 == null ? null : order_r1.payment_status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r1 == null ? null : order_r1.payment_method == null ? null : order_r1.payment_method.toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c02, order_r1.order_number));
  }
}
function OrdersComponent_Conditional_6_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "nav", 16)(5, "app-pagination", 17);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function OrdersComponent_Conditional_6_Conditional_28_Template_app_pagination_setPage_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, ctx_r2.order$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function OrdersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "div", 6)(3, "table", 7)(4, "thead")(5, "tr", 8)(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, OrdersComponent_Conditional_6_For_26_Template, 20, 18, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(28, OrdersComponent_Conditional_6_Conditional_28_Template, 7, 5, "div", 9);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 11, "amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 13, "payment_status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 15, "payment_method"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 17, "option"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_7_0 = \u0275\u0275pipeBind1(27, 19, ctx_r2.order$)) == null ? null : tmp_7_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(29, 21, ctx_r2.order$)) == null ? null : tmp_8_0.data == null ? null : tmp_8_0.data.length) ? 28 : -1);
  }
}
function OrdersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_order")("description", "no_order_yet");
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetOrders(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetOrders(this.filter));
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 6, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "wallet-table", "mt-0"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "product-pagination"], [1, "fw-bolder"], [3, "routerLink"], [1, "ri-eye-line"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, OrdersComponent_Conditional_6_Template, 30, 23, "div", 3);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275template(8, OrdersComponent_Conditional_8_Template, 1, 5, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "my_orders"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.order$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length) ? 6 : 8);
      }
    }, dependencies: [CommonModule, AsyncPipe, TitleCasePipe, DatePipe, TranslateModule, TranslatePipe, RouterModule, RouterLink, CurrencySymbolPipe, PaginationComponent, NoDataComponent] });
  }
};
__decorate([
  Select(OrderState.order)
], OrdersComponent.prototype, "order$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent" });
})();

// src/app/shared/components/widgets/modal/pay-modal/pay-modal.component.ts
function PayModalComponent_For_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15);
    \u0275\u0275element(4, "input", 16);
    \u0275\u0275elementStart(5, "label", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const payment_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", payment_r1.name)("id", payment_r1.name)("formControl", ctx_r1.paymentType);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("for", payment_r1.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, payment_r1.title ? payment_r1.title : payment_r1.name), " ");
  }
}
function PayModalComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PayModalComponent_For_11_Conditional_0_Template, 8, 7, "div", 12);
  }
  if (rf & 2) {
    const payment_r1 = ctx.$implicit;
    \u0275\u0275conditional(payment_r1.status ? 0 : -1);
  }
}
function PayModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "select_payment_method_is_required"), " ");
  }
}
var PayModalComponent = class _PayModalComponent {
  constructor(modalService, store) {
    this.modalService = modalService;
    this.store = store;
    this.paymentType = new FormControl("", [Validators.required]);
  }
  submit() {
    this.paymentType.markAllAsTouched();
    if (this.paymentType.valid) {
      const data = {
        order_number: this.order.order_number,
        payment_method: this.paymentType.value
      };
      this.store.dispatch(new RePayment(data)).subscribe({
        complete: () => {
          this.modalService.close();
        }
      });
    }
  }
  static {
    this.\u0275fac = function PayModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PayModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayModalComponent, selectors: [["app-pay-modal"]], inputs: { orderDetails: "orderDetails" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 24, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body"], [1, "checkout-box"], [1, "checkout-detail"], [1, "row", "g-3"], [1, "invalid-feedback"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "click", "id"], [1, "col-md-6"], [1, "payment-option"], [1, "payment-category", "w-100"], [1, "form-check"], ["type", "radio", "name", "payment_method", 1, "form-check-input", 3, "value", "id", "formControl"], [1, "form-check-label", 3, "for"]], template: function PayModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function PayModalComponent_Template_app_button_click_4_listener() {
          return ctx.modalService.dismiss("Cross click");
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275repeaterCreate(10, PayModalComponent_For_11_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275template(13, PayModalComponent_Conditional_13_Template, 3, 3, "div", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 9)(15, "app-button", 10);
        \u0275\u0275listener("click", function PayModalComponent_Template_app_button_click_15_listener() {
          return ctx.modalService.dismiss("Cancel");
        });
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "app-button", 11);
        \u0275\u0275listener("click", function PayModalComponent_Template_app_button_click_18_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 16, "pay_now"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(6);
        \u0275\u0275repeater((tmp_4_0 = \u0275\u0275pipeBind1(12, 18, ctx.setting$)) == null ? null : tmp_4_0.payment_methods);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.paymentType.touched && (ctx.paymentType.errors == null ? null : ctx.paymentType.errors["required"]) ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-outline");
        \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 20, "cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 22, "submit"), " ");
      }
    }, dependencies: [CommonModule, AsyncPipe, UpperCasePipe, TranslateModule, TranslatePipe, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, ReactiveFormsModule, FormControlDirective, ButtonComponent] });
  }
};
__decorate([
  Select(SettingState.setting)
], PayModalComponent.prototype, "setting$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayModalComponent, { className: "PayModalComponent" });
})();

// src/app/shared/components/widgets/modal/refund-modal/refund-modal.component.ts
var _c03 = () => [];
function RefundModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "reason_is_required"), " ");
  }
}
function RefundModalComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "payment_type_is_required"), " ");
  }
}
var RefundModalComponent = class _RefundModalComponent {
  constructor(modalService, store) {
    this.modalService = modalService;
    this.store = store;
    this.option = [
      {
        label: "Wallet",
        value: "wallet"
      },
      {
        label: "Paypal",
        value: "paypal"
      },
      {
        label: "Bank",
        value: "bank"
      }
    ];
    this.form = new FormGroup({
      order_id: new FormControl("", [Validators.required]),
      reason: new FormControl("", [Validators.required]),
      payment_type: new FormControl("", [Validators.required]),
      product_id: new FormControl()
    });
  }
  ngOnInit() {
    if (this.form) {
      this.form.controls["order_id"].setValue(this.orderId);
      this.form.get("product_id")?.patchValue(this.productDetails.id);
    }
  }
  sendRequest() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(new SendRefundRequest(this.form.value)).subscribe({
        complete: () => {
          this.form.reset();
          this.modalService.close();
        }
      });
    }
  }
  static {
    this.\u0275fac = function RefundModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundModalComponent, selectors: [["app-refund-modal"]], inputs: { productDetails: "productDetails", orderId: "orderId" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 44, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body"], [1, "product-review-form"], [1, "product-wrapper"], [1, "product-image"], [1, "img-fluid", 3, "src", "alt"], [1, "product-content"], [1, "name"], [1, "product-review-rating"], [1, "product-rating"], [1, "price-number"], [1, "review-box"], [3, "formGroup"], ["for", "content", 1, "form-label"], ["id", "content", "rows", "3", "formControlName", "reason", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], ["for", "payment_option", 1, "form-label"], ["formControlName", "payment_type", "resettable", "", 1, "custom-select", 3, "data", "placeholder"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "click", "id"]], template: function RefundModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function RefundModalComponent_Template_app_button_click_4_listener() {
          return ctx.modalService.close("Cross click");
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275element(10, "img", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "h5", 10);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "h6", 13);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "currencySymbol");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 14)(20, "form", 15)(21, "label", 16);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "textarea", 17);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275template(26, RefundModalComponent_Conditional_26_Template, 3, 3, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 14)(28, "label", 19);
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "select2", 20);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275template(33, RefundModalComponent_Conditional_33_Template, 3, 3, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 21)(35, "app-button", 22);
        \u0275\u0275listener("click", function RefundModalComponent_Template_app_button_click_35_listener() {
          return ctx.modalService.close("Cancel");
        });
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "app-button", 23);
        \u0275\u0275listener("click", function RefundModalComponent_Template_app_button_click_38_listener() {
          return ctx.sendRequest();
        });
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 27, "refund"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.productDetails && ctx.productDetails.product_thumbnail ? ctx.productDetails.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx.productDetails.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.productDetails.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 29, ctx.productDetails.pivot == null ? null : ctx.productDetails.pivot.single_price));
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 31, "reason"), " *");
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(25, 33, "enter_reason"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["reason"].touched && (ctx.form.controls["reason"].errors == null ? null : ctx.form.controls["reason"].errors["required"]) ? 26 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 35, "payment_option"));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", ctx.option ? ctx.option : \u0275\u0275pureFunction0(43, _c03))("placeholder", \u0275\u0275pipeBind1(32, 37, "select_payment_option"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["payment_type"].touched && (ctx.form.controls["payment_type"].errors == null ? null : ctx.form.controls["payment_type"].errors["required"]) ? 33 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-md btn-outline fw-bold");
        \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 39, "cancel"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 41, "submit"), " ");
      }
    }, dependencies: [
      CommonModule,
      TranslateModule,
      TranslatePipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgForm,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      Select2Module,
      Select2,
      CurrencySymbolPipe,
      ButtonComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundModalComponent, { className: "RefundModalComponent" });
})();

// src/app/components/account/orders/details/details.component.ts
var _c04 = (a0) => ({ "d-none": a0 });
var _c12 = (a0) => ["/account/order/details", a0];
function DetailsComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function DetailsComponent_Conditional_0_Conditional_9_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPayModal(ctx_r1.order));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "pay_now"));
  }
}
function DetailsComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function DetailsComponent_Conditional_0_Conditional_10_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.download(ctx_r1.order.order_number));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "invoice"), " ");
  }
}
function DetailsComponent_Conditional_0_Conditional_13_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "textConverter");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orderStatus_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, orderStatus_r5.name));
  }
}
function DetailsComponent_Conditional_0_Conditional_13_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const orderStatus_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, orderStatus_r5.activities_date, "dd MMM yyyy"));
  }
}
function DetailsComponent_Conditional_0_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275element(3, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275template(5, DetailsComponent_Conditional_0_Conditional_13_For_2_Conditional_5_Template, 3, 3, "div", 33)(6, DetailsComponent_Conditional_0_Conditional_13_For_2_Conditional_6_Template, 3, 4, "span", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const orderStatus_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (orderStatus_r5 == null ? null : orderStatus_r5.sequence) <= ctx_r1.order.order_status.sequence);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c04, (orderStatus_r5 == null ? null : orderStatus_r5.sequence) >= ctx_r1.order.order_status.sequence && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "cancelled") || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "cancelled" || ctx_r1.order.is_digital_only && ((orderStatus_r5 == null ? null : orderStatus_r5.slug) == "shipped" || (orderStatus_r5 == null ? null : orderStatus_r5.slug) == "out-for-delivery")));
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", orderStatus_r5 == null ? null : orderStatus_r5.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((orderStatus_r5 == null ? null : orderStatus_r5.name) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(orderStatus_r5.sequence <= ctx_r1.order.order_status.sequence && orderStatus_r5.activities_date ? 6 : -1);
  }
}
function DetailsComponent_Conditional_0_Conditional_13_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "img", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("src", "assets/svg/tracking/", ctx_r1.order.order_status.slug, ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.order.order_status.name.replace("_", " ")));
  }
}
function DetailsComponent_Conditional_0_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 28);
    \u0275\u0275template(1, DetailsComponent_Conditional_0_Conditional_13_Conditional_4_Conditional_1_Template, 6, 5, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.order_status ? 1 : -1);
  }
}
function DetailsComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, DetailsComponent_Conditional_0_Conditional_13_For_2_Template, 7, 9, "li", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, DetailsComponent_Conditional_0_Conditional_13_Conditional_4_Template, 2, 1, "li", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_2_0 = \u0275\u0275pipeBind1(3, 1, ctx_r1.orderStatus$)) == null ? null : tmp_2_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "cancelled" ? 4 : -1);
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_18_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const product_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openRefundModal(product_r7, ctx_r1.order.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "refund"), " ");
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "non_refundable"));
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classMapInterpolate1("status-", product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status == null ? null : product_r7.pivot.refund_status.toLowerCase(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status));
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "refund"), "");
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Conditional_1_Template, 3, 3, "a", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(!(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status) ? 1 : -1);
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_0_Template, 4, 6, "div", 41)(1, DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Conditional_1_Template, 2, 1, "div", 42);
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275conditional((product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status) ? 0 : 1);
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_0_Template, 3, 3, "span")(1, DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(product_r7.is_return === 0 ? 0 : 1);
  }
}
function DetailsComponent_Conditional_0_Conditional_14_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275element(2, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "h6");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "h6");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "h6");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "h6");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_18_Template, 3, 3, "a", 5)(19, DetailsComponent_Conditional_0_Conditional_14_For_27_Conditional_19_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) && (product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.variation_image == null ? null : product_r7.pivot.variation.variation_image.original_url : (product_r7 == null ? null : product_r7.product_thumbnail) ? product_r7 == null ? null : product_r7.product_thumbnail == null ? null : product_r7.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation) ? product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.variation == null ? null : product_r7.pivot.variation.name : product_r7 == null ? null : product_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.single_price));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 8, product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.subtotal));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.order.payment_status && (product_r7 == null ? null : product_r7.is_return) === 1 && ctx_r1.order.payment_status && ctx_r1.order.payment_status === "COMPLETED" && ctx_r1.order.order_status && ctx_r1.order.order_status.slug == "delivered" && !(product_r7 == null ? null : product_r7.pivot == null ? null : product_r7.pivot.refund_status) ? 18 : 19);
  }
}
function DetailsComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14)(2, "div", 35)(3, "div", 36)(4, "table", 37)(5, "thead")(6, "tr")(7, "th", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 38);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 38);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 38);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "tbody");
    \u0275\u0275repeaterCreate(26, DetailsComponent_Conditional_0_Conditional_14_For_27_Template, 20, 10, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "short_name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "price"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 12, "quantity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 14, "subtotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "refund_status"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.order.products);
  }
}
function DetailsComponent_Conditional_0_Conditional_25_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.billing_address.street, " ", ctx_r1.order.billing_address.city, " ", ctx_r1.order.billing_address.state.name, " ", ctx_r1.order.billing_address.country.name, " ", ctx_r1.order.billing_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(4, 8, "phone"), " : +", ctx_r1.order.billing_address.country_code, " ", ctx_r1.order.billing_address.phone, " ");
  }
}
function DetailsComponent_Conditional_0_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DetailsComponent_Conditional_0_Conditional_25_Conditional_4_Template, 5, 10, "h4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "billing_address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.billing_address.state ? 4 : -1);
  }
}
function DetailsComponent_Conditional_0_Conditional_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5(" ", ctx_r1.order.shipping_address.street, " ", ctx_r1.order.shipping_address.city, " ", ctx_r1.order.shipping_address.state.name, " ", ctx_r1.order.shipping_address.country.name, " ", ctx_r1.order.shipping_address.pincode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(4, 8, "phone"), " : +", ctx_r1.order.shipping_address.country_code, " ", ctx_r1.order.shipping_address.phone, " ");
  }
}
function DetailsComponent_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DetailsComponent_Conditional_0_Conditional_26_Conditional_4_Template, 5, 10, "h4");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "shipping_address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.shipping_address.state ? 4 : -1);
  }
}
function DetailsComponent_Conditional_0_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 18)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "delivery_slot"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.order.delivery_description);
  }
}
function DetailsComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "li", 44)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 45)(13, "h4");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "uppercase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 4, "payment_mode"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, ctx_r1.order.payment_method));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 8, "payment_status"), ":");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, ctx_r1.order.payment_status));
  }
}
function DetailsComponent_Conditional_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "shipping"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.shipping_total ? ctx_r1.order.shipping_total : 0));
  }
}
function DetailsComponent_Conditional_0_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "points"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.points_amount));
  }
}
function DetailsComponent_Conditional_0_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "wallet_balance"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.wallet_balance));
  }
}
function DetailsComponent_Conditional_0_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, "coupon_discount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, ctx_r1.order.coupon_total_discount));
  }
}
function DetailsComponent_Conditional_0_Conditional_59_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "h6");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "h6");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "h6")(14, "div")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "td")(18, "a", 46);
    \u0275\u0275element(19, "i");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subOrder_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("#" + subOrder_r8.order_number);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 10, subOrder_r8.created_at, "dd MMM yyyy hh:mm:a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, subOrder_r8.amount));
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("status-", subOrder_r8.order_status.slug, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subOrder_r8.order_status.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c12, subOrder_r8.order_number));
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-eye-line");
  }
}
function DetailsComponent_Conditional_0_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14)(2, "div", 35)(3, "div", 36)(4, "table", 37)(5, "thead")(6, "tr")(7, "th", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 38);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 38);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, DetailsComponent_Conditional_0_Conditional_59_For_24_Template, 20, 17, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "order_number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "order_date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 9, "total_amount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.order.sub_orders);
  }
}
function DetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "h5")(4, "a", 2);
    \u0275\u0275listener("click", function DetailsComponent_Conditional_0_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275element(5, "i", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275template(9, DetailsComponent_Conditional_0_Conditional_9_Template, 4, 3, "a", 5)(10, DetailsComponent_Conditional_0_Conditional_10_Template, 4, 3, "a", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
    \u0275\u0275template(13, DetailsComponent_Conditional_0_Conditional_13_Template, 5, 3, "ul");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, DetailsComponent_Conditional_0_Conditional_14_Template, 28, 18, "div", 9);
    \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "h3", 15);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 16)(24, "ul", 17);
    \u0275\u0275template(25, DetailsComponent_Conditional_0_Conditional_25_Template, 5, 4, "li", 18)(26, DetailsComponent_Conditional_0_Conditional_26_Template, 5, 4, "li", 18)(27, DetailsComponent_Conditional_0_Conditional_27_Template, 6, 4, "li", 18)(28, DetailsComponent_Conditional_0_Conditional_28_Template, 16, 12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 14)(32, "h3", 15);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 21)(36, "ul")(37, "li");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, DetailsComponent_Conditional_0_Conditional_43_Template, 6, 6, "li");
    \u0275\u0275elementStart(44, "li");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "currencySymbol");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, DetailsComponent_Conditional_0_Conditional_50_Template, 6, 6, "li", 22)(51, DetailsComponent_Conditional_0_Conditional_51_Template, 6, 6, "li", 22)(52, DetailsComponent_Conditional_0_Conditional_52_Template, 6, 6, "li", 22);
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "currencySymbol");
    \u0275\u0275elementEnd()()()()()()()()();
    \u0275\u0275template(59, DetailsComponent_Conditional_0_Conditional_59_Template, 25, 15, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(7, 23, "order_number"), ": #", ctx_r1.order.order_number, "");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r1.order.payment_status === "FAILED" || ctx_r1.order.payment_status === "PENDING") && (ctx_r1.order.order_status && ctx_r1.order.order_status.slug != "cancelled") && ctx_r1.order.payment_method != "cod" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.invoice_url && ctx_r1.order.payment_status && ctx_r1.order.payment_status === "COMPLETED" && ctx_r1.isLogin ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.order && ctx_r1.order.sub_orders && !ctx_r1.order.sub_orders.length ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.products && ctx_r1.order.products.length ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 25, "consumer_details"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.order.billing_address ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.shipping_address && !ctx_r1.order.is_digital_only ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.delivery_description && !ctx_r1.order.is_digital_only ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.payment_method ? 28 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 27, "summary"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(39, 29, "subtotal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 31, ctx_r1.order.amount ? ctx_r1.order.amount : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.order.is_digital_only ? 43 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(46, 33, "tax"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 35, ctx_r1.order.tax_total ? ctx_r1.order.tax_total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.points_amount != 0 ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.wallet_balance != 0 ? 51 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.order.coupon_total_discount != 0 ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(55, 37, "total"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 39, ctx_r1.order.total ? ctx_r1.order.total : 0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.order.sub_orders && ctx_r1.order.sub_orders.length ? 59 : -1);
  }
}
var DetailsComponent = class _DetailsComponent {
  constructor(store, route, modal, datePipe, location) {
    this.store = store;
    this.route = route;
    this.modal = modal;
    this.datePipe = datePipe;
    this.location = location;
    this.destroy$ = new Subject();
    this.store.dispatch(new GetOrderStatus());
  }
  ngOnInit() {
    this.isLogin = !!this.store.selectSnapshot((state) => state.auth && state.auth.access_token);
    this.route.params.pipe(switchMap((params) => {
      if (!params["id"])
        return of();
      return this.store.dispatch(new ViewOrder(params["id"])).pipe(mergeMap(() => this.store.select(OrderState.selectedOrder)));
    }), takeUntil(this.destroy$)).subscribe((order) => {
      this.order = order;
      if (this.order && this.order?.order_status_activities) {
        this.order?.order_status_activities?.map((actStatus) => {
          this.orderStatus$.subscribe((res) => {
            res.data.map((status) => {
              if (actStatus.status == status.name) {
                let convertDate = this.datePipe.transform(actStatus?.changed_at, "dd MMM yyyy hh:mm:a");
                status["activities_date"] = convertDate;
              }
            });
          });
        });
      }
    });
  }
  openPayModal(order) {
    const modal = this.modal.open(PayModalComponent, { centered: true });
    modal.componentInstance.orderDetails = order;
  }
  openRefundModal(product, order_id) {
    const modal = this.modal.open(RefundModalComponent, { centered: true, windowClass: "theme-modal-2 refund-modal" });
    modal.componentInstance.productDetails = product;
    modal.componentInstance.orderId = order_id;
  }
  download(id) {
    this.store.dispatch(new DownloadInvoice({ order_number: id }));
  }
  back() {
    this.location.back();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function DetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DetailsComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailsComponent, selectors: [["app-details"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "title-header"], [1, "d-flex", "align-items-center", "w-100", "justify-content-between"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-arrow-left-line"], [1, "right-option"], ["href", "javascript:void(0)", 1, "btn", "btn-solid"], [1, "btn", "btn-md", "fw-bold", "text-light", "theme-bg-color", "ms-auto"], [1, "mb-4", "mt-2"], [1, "tracking-panel"], [1, "card", "dashboard-table"], [1, "summary-details", "my-3"], [1, "row", "g-4"], [1, "col-xxl-8", "col-lg-12", "col-md-7"], [1, "card"], [1, "card-body"], [1, "order-title"], [1, "customer-detail", "tracking-wrapper"], [1, "row", "g-3"], [1, "col-sm-6"], [1, "col-xxl-4", "col-lg-12", "col-md-5"], [1, "card", "h-m30"], [1, "tracking-total", "tracking-wrapper"], [1, "txt-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-solid", 3, "click"], [1, "ri-refresh-line", "ms-2"], [1, "btn", "btn-md", "fw-bold", "text-light", "theme-bg-color", "ms-auto", 3, "click"], [1, "ri-download-2-fill", "ms-2"], [3, "active", "ngClass"], [1, "active", "cancelled-box"], [3, "ngClass"], [1, "panel-content"], [1, "icon"], ["alt", "image", 1, "img-fluid", 3, "src"], [1, "status"], [1, "panel-content-sm"], [1, "wallet-table"], [1, "tracking-wrapper", "table-responsive"], [1, "table", "product-table", "order-table"], ["scope", "col"], [1, "product-image"], ["alt", "product", 1, "img-fluid", 3, "src"], [3, "class"], ["placement", "top", "ngbTooltip", "Enable after delivery", 1, "black-tooltip"], [1, "btn", "btn-solid", "disabled"], [1, "col-sm-3"], [1, "d-flex", "align-items-center", "gap-2"], ["href", "javascript:void(0)", 3, "routerLink"]], template: function DetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DetailsComponent_Conditional_0_Template, 60, 41, "div");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.order ? 0 : -1);
      }
    }, dependencies: [CommonModule, NgClass, AsyncPipe, UpperCasePipe, TitleCasePipe, DatePipe, TranslateModule, TranslatePipe, RouterModule, RouterLink, CurrencySymbolPipe, NgbModule, NgbTooltip, TextConverterPipe] });
  }
};
__decorate([
  Select(OrderStatusState.orderStatus)
], DetailsComponent.prototype, "orderStatus$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailsComponent, { className: "DetailsComponent" });
})();

// src/app/components/account/downloads/downloads.component.ts
function DownloadsComponent_Conditional_15_For_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function DownloadsComponent_Conditional_15_For_15_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadFiles(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "all_files_document"));
  }
}
function DownloadsComponent_Conditional_15_For_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function DownloadsComponent_Conditional_15_For_15_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const data_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadLicense(data_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "license_pdf"));
  }
}
function DownloadsComponent_Conditional_15_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 13)(7, "button", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 15);
    \u0275\u0275template(11, DownloadsComponent_Conditional_15_For_15_Conditional_11_Template, 3, 3, "button", 16)(12, DownloadsComponent_Conditional_15_For_15_Conditional_12_Template, 3, 3, "button", 16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", data_r2.item_image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2.item_name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "download"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(data_r2.can_download_file ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r2.can_download_license ? 12 : -1);
  }
}
function DownloadsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, DownloadsComponent_Conditional_15_For_15_Template, 13, 7, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "image"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "action"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_4_0 = \u0275\u0275pipeBind1(16, 9, ctx_r2.download$)) == null ? null : tmp_4_0.data);
  }
}
function DownloadsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 18);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_item_found")("description", "no_order_yet");
  }
}
var DownloadsComponent = class _DownloadsComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 10
      // Display per page,
    };
    this.term = new FormControl("");
    this.store.dispatch(new Downloads(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new Downloads(this.filter));
  }
  search() {
    this.filter["search"] = this.term.value;
    ;
    this.store.dispatch(new Downloads(this.filter));
  }
  downloadFiles(id) {
    this.store.dispatch(new DownloadFiles(id));
  }
  downloadLicense(id) {
    this.store.dispatch(new DownloadLicense(id));
  }
  static {
    this.\u0275fac = function DownloadsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DownloadsComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadsComponent, selectors: [["app-downloads"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 16, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "download-detail", "dashboard-bg-box"], [1, "input-group", "download-form"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl"], ["type", "button", 1, "btn", 3, "click"], [1, "download-table", "dashboard-bg-box"], [1, "table-responsive"], [3, "class", "image", "text", "description"], [1, "table", "user-download-table"], [1, "table-name"], ["alt", "image", 1, "img-fluid", "table-image", 3, "src"], ["ngbDropdown", "", "container", "body", "placement", "bottom-end", 1, "d-inline-block", "download-dropdown-box"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle"], ["ngbDropdownMenu", "", 1, "download-dropdown-menu"], ["ngbDropdownItem", ""], ["ngbDropdownItem", "", 3, "click"], [3, "image", "text", "description"]], template: function DownloadsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "form")(8, "div", 4);
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementStart(11, "button", 6);
        \u0275\u0275listener("click", function DownloadsComponent_Template_button_click_11_listener() {
          return ctx.search();
        });
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275template(15, DownloadsComponent_Conditional_15_Template, 17, 11, "div", 8);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, DownloadsComponent_Conditional_17_Template, 1, 5, "app-no-data", 9);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "downloads"));
        \u0275\u0275advance(5);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(10, 8, "search_download"));
        \u0275\u0275property("formControl", ctx.term);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "search"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_4_0 = \u0275\u0275pipeBind1(16, 12, ctx.download$)) == null ? null : tmp_4_0.data == null ? null : tmp_4_0.data.length) ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!((tmp_5_0 = \u0275\u0275pipeBind1(18, 14, ctx.download$)) == null ? null : tmp_5_0.data == null ? null : tmp_5_0.data.length) ? 17 : -1);
      }
    }, dependencies: [CommonModule, AsyncPipe, TranslateModule, TranslatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, NgbModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, NoDataComponent] });
  }
};
__decorate([
  Select(DownloadState.download)
], DownloadsComponent.prototype, "download$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadsComponent, { className: "DownloadsComponent" });
})();

// src/app/components/account/refund/refund.component.ts
function RefundComponent_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const refund_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", refund_r1 == null ? null : refund_r1.order == null ? null : refund_r1.order.order_number, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("status-", refund_r1 == null ? null : refund_r1.status, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, refund_r1 == null ? null : refund_r1.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(refund_r1 == null ? null : refund_r1.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 9, refund_r1 == null ? null : refund_r1.created_at, "dd MMM yyyy"));
  }
}
function RefundComponent_Conditional_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "nav", 15)(5, "app-pagination", 16);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("setPage", function RefundComponent_Conditional_6_Conditional_22_Template_app_pagination_setPage_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setPaginate($event));
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("total", ((tmp_2_0 = \u0275\u0275pipeBind1(6, 3, ctx_r2.refund$)) == null ? null : tmp_2_0.total) || 0)("currentPage", ctx_r2.filter["page"])("pageSize", ctx_r2.filter["paginate"]);
  }
}
function RefundComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "div", 6)(3, "table", 7)(4, "thead")(5, "tr", 8)(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 9);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, RefundComponent_Conditional_6_For_20_Template, 14, 12, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(22, RefundComponent_Conditional_6_Conditional_22_Template, 7, 5, "div", 10);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "order"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "reason"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "created_at"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_5_0 = \u0275\u0275pipeBind1(21, 13, ctx_r2.refund$)) == null ? null : tmp_5_0.data);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_6_0 = \u0275\u0275pipeBind1(23, 15, ctx_r2.refund$)) == null ? null : tmp_6_0.data == null ? null : tmp_6_0.data.length) ? 22 : -1);
  }
}
function RefundComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 17);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_refund")("description", "no_refund_yet");
  }
}
var RefundComponent = class _RefundComponent {
  constructor(store) {
    this.store = store;
    this.filter = {
      "page": 1,
      // Current page number
      "paginate": 10
      // Display per page,
    };
    this.store.dispatch(new GetRefund(this.filter));
  }
  setPaginate(page) {
    this.filter["page"] = page;
    this.store.dispatch(new GetRefund(this.filter));
  }
  static {
    this.\u0275fac = function RefundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefundComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefundComponent, selectors: [["app-refund"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 6, consts: [[1, "card", "dashboard-table", "mt-0"], [1, "card-body"], [1, "top-sec"], [1, "total-box", "mt-0"], [3, "class", "image", "text", "description"], [1, "wallet-table", "mt-0"], [1, "table-responsive"], [1, "table", "cart-table", "order-table"], [1, "table-head"], [1, "reason-table"], [1, "product-pagination"], [1, "fw-bolder"], [1, "theme-pagination-block"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], [3, "setPage", "total", "currentPage", "pageSize"], [3, "image", "text", "description"]], template: function RefundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, RefundComponent_Conditional_6_Template, 24, 17, "div", 3);
        \u0275\u0275pipe(7, "async");
        \u0275\u0275template(8, RefundComponent_Conditional_8_Template, 1, 5, "app-no-data", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "refund"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(7, 4, ctx.refund$)) == null ? null : tmp_1_0.data == null ? null : tmp_1_0.data.length) ? 6 : 8);
      }
    }, dependencies: [
      CommonModule,
      AsyncPipe,
      TitleCasePipe,
      DatePipe,
      TranslateModule,
      TranslatePipe,
      PaginationComponent,
      NoDataComponent
    ] });
  }
};
__decorate([
  Select(RefundState.refund)
], RefundComponent.prototype, "refund$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefundComponent, { className: "RefundComponent" });
})();

// src/app/shared/components/widgets/modal/delete-address-modal/delete-address-modal.component.ts
var DeleteAddressModalComponent = class _DeleteAddressModalComponent {
  constructor(modal, store) {
    this.modal = modal;
    this.store = store;
    this.userAction = {};
  }
  ngOnInit() {
    if (this.userAddress) {
      this.userAction = {
        data: this.userAddress
      };
    }
  }
  delete() {
    this.store.dispatch(new DeleteAddress(this.userAddress.id));
  }
  static {
    this.\u0275fac = function DeleteAddressModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteAddressModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteAddressModalComponent, selectors: [["app-delete-address-modal"]], inputs: { userAddress: "userAddress" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 19, consts: [[1, "modal-body"], [1, "ri-delete-bin-line", "icon-box"], [1, "modal-title"], [1, "button-box"], [3, "click", "spinner", "id"], [3, "click", "id"]], template: function DeleteAddressModalComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function DeleteAddressModalComponent_Template_app_button_click_9_listener() {
          return ctx.modal.dismiss("Cancel");
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-button", 5);
        \u0275\u0275listener("click", function DeleteAddressModalComponent_Template_app_button_click_12_listener() {
          return ctx.delete();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 11, "delete_item"), "?");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 13, "delete_text"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-outline btn-md fw-bold");
        \u0275\u0275property("spinner", false)("id", "delete_no_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 15, "no"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "delete_yes_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 17, "yes"), " ");
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, ButtonComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAddressModalComponent, { className: "DeleteAddressModalComponent" });
})();

// src/app/components/account/addresses/addresses.component.ts
function AddressesComponent_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "titlecase");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "div", 13)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14)(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 15)(24, "a", 16);
    \u0275\u0275listener("click", function AddressesComponent_Conditional_11_For_3_Template_a_click_24_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.AddressModal(address_r2));
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 16);
    \u0275\u0275listener("click", function AddressesComponent_Conditional_11_For_3_Template_a_click_27_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeAddress(address_r2));
    });
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const address_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 14, (tmp_12_0 = \u0275\u0275pipeBind1(5, 12, ctx_r2.user$)) == null ? null : tmp_12_0.name), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(address_r2 == null ? null : address_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", address_r2 == null ? null : address_r2.street, ", ", address_r2 == null ? null : address_r2.city, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", address_r2 == null ? null : address_r2.state == null ? null : address_r2.state.name, ", ", address_r2 == null ? null : address_r2.country == null ? null : address_r2.country.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r2 == null ? null : address_r2.pincode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 16, "phone"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("+", address_r2 == null ? null : address_r2.country_code, " ", address_r2 == null ? null : address_r2.phone, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 18, "edit"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 20, "remove"));
  }
}
function AddressesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8);
    \u0275\u0275repeaterCreate(2, AddressesComponent_Conditional_11_For_3_Template, 30, 22, "div", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater((tmp_1_0 = \u0275\u0275pipeBind1(4, 0, ctx_r2.user$)) == null ? null : tmp_1_0.address);
  }
}
function AddressesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-no-data", 17);
  }
  if (rf & 2) {
    \u0275\u0275classMap("no-data-added");
    \u0275\u0275property("image", "assets/svg/empty-items.svg")("text", "no_address")("description", "no_address_yet");
  }
}
var AddressesComponent = class _AddressesComponent {
  constructor(store, modal) {
    this.store = store;
    this.modal = modal;
  }
  AddressModal(address) {
    const modal = this.modal.open(AddressModalComponent, { centered: true, windowClass: "theme-modal-2" });
    if (address) {
      modal.componentInstance.userAddress = address;
    }
  }
  removeAddress(address) {
    const modal = this.modal.open(DeleteAddressModalComponent, { centered: true });
    if (address) {
      modal.componentInstance.userAddress = address;
    }
  }
  delete(action, data) {
    if (action == "delete" && data)
      this.store.dispatch(new DeleteAddress(data.id));
  }
  static {
    this.\u0275fac = function AddressesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressesComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressesComponent, selectors: [["app-addresses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 9, consts: [[1, "row"], [1, "col-12"], [1, "card", "mt-0"], [1, "card-body"], [1, "top-sec"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-solid", 3, "click"], [1, "address-book-section"], [3, "class", "image", "text", "description"], [1, "row", "g-4"], [1, "select-box", "active", "col-xl-4", "col-md-6"], [1, "address-box"], [1, "top"], [1, "middle"], [1, "address"], [1, "number"], [1, "bottom"], ["href", "javascript:void(0)", 1, "bottom_btn", 3, "click"], [3, "image", "text", "description"]], template: function AddressesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 5);
        \u0275\u0275listener("click", function AddressesComponent_Template_a_click_8_listener() {
          return ctx.AddressModal();
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, AddressesComponent_Conditional_11_Template, 5, 2, "div", 6);
        \u0275\u0275pipe(12, "async");
        \u0275\u0275template(13, AddressesComponent_Conditional_13_Template, 1, 5, "app-no-data", 7);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "address_book"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind1(10, 5, "add_new"), "");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(12, 7, ctx.user$)) == null ? null : tmp_2_0.address == null ? null : tmp_2_0.address.length) ? 11 : 13);
      }
    }, dependencies: [CommonModule, AsyncPipe, TitleCasePipe, TranslateModule, TranslatePipe, NoDataComponent] });
  }
};
__decorate([
  Select(AccountState.user)
], AddressesComponent.prototype, "user$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressesComponent, { className: "AddressesComponent" });
})();

// src/app/components/account/account.routes.ts
var account = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "notifications",
        component: NotificationComponent
      },
      {
        path: "bank-details",
        component: BankDetailsComponent
      },
      {
        path: "wallet",
        component: WalletComponent
      },
      {
        path: "point",
        component: PointComponent
      },
      {
        path: "order",
        component: OrdersComponent
      },
      {
        path: "order/details/:id",
        component: DetailsComponent
      },
      {
        path: "downloads",
        component: DownloadsComponent
      },
      {
        path: "refund",
        component: RefundComponent
      },
      {
        path: "addresses",
        component: AddressesComponent
      }
    ]
  }
];
export {
  account
};
//# sourceMappingURL=chunk-WSZ7J45P.js.map
