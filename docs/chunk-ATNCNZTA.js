import {
  CountryState,
  CreateAddress,
  Select2,
  Select2Module,
  StateState,
  UpdateAddress,
  countryCodes
} from "./chunk-J5JW2VI6.js";
import {
  ButtonComponent
} from "./chunk-YVVLA4K6.js";
import {
  AsyncPipe,
  CommonModule,
  DefaultValueAccessor,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgbActiveModal,
  NumberValueAccessor,
  ReactiveFormsModule,
  Select,
  Store,
  TranslateModule,
  TranslatePipe,
  Validators,
  __decorate,
  map,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GDIBOM5I.js";

// src/app/shared/pipe/text-converter.pipe.ts
var TextConverterPipe = class _TextConverterPipe {
  transform(value) {
    if (!value)
      return "";
    return value.split(/[-_]/).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  static {
    this.\u0275fac = function TextConverterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextConverterPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "textConverter", type: _TextConverterPipe, pure: true, standalone: true });
  }
};

// src/app/shared/components/widgets/modal/address-modal/address-modal.component.ts
var _c0 = () => [];
function AddressModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "title_is_required"), " ");
  }
}
function AddressModalComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "street_address_is_required"), " ");
  }
}
function AddressModalComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("iti-flag ", data_r2 == null ? null : data_r2.class, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2 == null ? null : data_r2.code);
  }
}
function AddressModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_number_is_required"), " ");
  }
}
function AddressModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "phone_number_is_invalid"), " ");
  }
}
function AddressModalComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "country_is_required"), " ");
  }
}
function AddressModalComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "state_is_required"), " ");
  }
}
function AddressModalComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "city_is_required"), " ");
  }
}
function AddressModalComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "pincode_is_required"), " ");
  }
}
var AddressModalComponent = class _AddressModalComponent {
  constructor(modal, store, formBuilder) {
    this.modal = modal;
    this.store = store;
    this.formBuilder = formBuilder;
    this.codes = countryCodes;
    this.form = this.formBuilder.group({
      title: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      state_id: new FormControl("", [Validators.required]),
      country_id: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      pincode: new FormControl("", [Validators.required]),
      country_code: new FormControl("91", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]*$/)])
    });
  }
  ngOnInit() {
    if (this.userAddress) {
      this.patchForm(this.userAddress);
    }
  }
  countryChange(data) {
    if (data && data?.value) {
      this.states$ = this.store.select(StateState.states).pipe(map((filterFn) => filterFn(+data?.value)));
      if (!this.address)
        this.form.controls["state_id"].setValue("");
    } else {
      this.form.controls["state_id"].setValue("");
    }
  }
  patchForm(value) {
    if (value) {
      this.address = value;
      this.form.patchValue({
        user_id: value?.user_id,
        title: value?.title,
        street: value?.street,
        country_id: value?.country_id,
        state_id: value?.state_id,
        city: value?.city,
        pincode: value?.pincode,
        country_code: value?.country_code,
        phone: value?.phone
      });
    } else {
      this.address = null;
      this.form.reset();
      this.form?.controls?.["country_code"].setValue("91");
    }
  }
  submit() {
    this.form.markAllAsTouched();
    let action = new CreateAddress(this.form.value);
    if (this.address) {
      action = new UpdateAddress(this.form.value, this.address.id);
    }
    if (this.form.valid) {
      this.store.dispatch(action).subscribe({
        complete: () => {
          this.form.reset();
          if (!this.address) {
            this.form?.controls?.["country_code"].setValue("91");
          }
        }
      });
    }
  }
  static {
    this.\u0275fac = function AddressModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddressModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressModalComponent, selectors: [["app-address-modal"]], inputs: { userAddress: "userAddress" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 80, vars: 86, consts: [["template", ""], [1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "", 3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-sm-4", "g-2"], [1, "col-xxl-12"], [1, "form-box"], ["for", "pname", 1, "form-label"], ["id", "title", "type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder"], [1, "invalid-feedback"], [1, "col-12"], ["for", "address1", 1, "form-label"], ["id", "address", "type", "text", "formControlName", "street", 1, "form-control", 3, "placeholder"], [1, "col-12", "phone-field"], ["formControlName", "country_code", 1, "custom-select", "intl-tel-input", 3, "templates", "data"], ["type", "number", "formControlName", "phone", "name", "phone", 1, "form-control", "intl-input-padding", 3, "placeholder"], [1, "col-sm-6"], ["formControlName", "country_id", "resettable", "", 1, "custom-select", 3, "update", "data", "placeholder"], ["for", "state", 1, "form-label"], ["formControlName", "state_id", 1, "custom-select", 3, "data", "placeholder"], ["for", "city", 1, "form-label"], ["id", "city", "type", "text", "formControlName", "city", 1, "form-control", 3, "placeholder"], ["for", "pincode", 1, "form-label"], ["id", "pincode", "type", "text", "formControlName", "pincode", "numbersOnly", "", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], [3, "click", "type", "spinner", "id"], [3, "id"], [1, "country"], [1, "flag-box"], [1, "dial-code"]], template: function AddressModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "h3", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 3);
        \u0275\u0275listener("click", function AddressModalComponent_Template_app_button_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.modal.close("Cross click"));
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 5);
        \u0275\u0275listener("ngSubmit", function AddressModalComponent_Template_form_ngSubmit_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "label", 10);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 11);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275template(16, AddressModalComponent_Conditional_16_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13)(18, "div", 9)(19, "label", 14);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 15);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275template(24, AddressModalComponent_Conditional_24_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 16)(26, "div", 9)(27, "label", 14);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "select2", 17);
        \u0275\u0275template(31, AddressModalComponent_ng_template_31_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "input", 18);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275template(35, AddressModalComponent_Conditional_35_Template, 3, 3, "div", 12)(36, AddressModalComponent_Conditional_36_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 19)(38, "div", 9)(39, "label", 14);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "select2", 20);
        \u0275\u0275pipe(43, "async");
        \u0275\u0275pipe(44, "async");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275listener("update", function AddressModalComponent_Template_select2_update_42_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.countryChange($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(46, AddressModalComponent_Conditional_46_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 19)(48, "div", 9)(49, "label", 21);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "select2", 22);
        \u0275\u0275pipe(53, "async");
        \u0275\u0275pipe(54, "async");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275template(56, AddressModalComponent_Conditional_56_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 19)(58, "div", 9)(59, "label", 23);
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "input", 24);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275template(64, AddressModalComponent_Conditional_64_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 19)(66, "div", 9)(67, "label", 25);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "input", 26);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275template(72, AddressModalComponent_Conditional_72_Template, 3, 3, "div", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 27)(74, "app-button", 28);
        \u0275\u0275listener("click", function AddressModalComponent_Template_app_button_click_74_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.modal.close("Cancel"));
        });
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "app-button", 29);
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const template_r3 = \u0275\u0275reference(32);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 42, !ctx.address ? "add_address" : "edit_address"), "");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "address_modal_close_btn");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 44, "title"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(15, 46, "enter_title"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["title"].touched && (ctx.form.controls["title"].errors == null ? null : ctx.form.controls["title"].errors["required"]) ? 16 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 48, "address"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 50, "enter_address"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["street"].touched && (ctx.form.controls["street"].errors == null ? null : ctx.form.controls["street"].errors["required"]) ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 52, "phone_number"));
        \u0275\u0275advance(2);
        \u0275\u0275property("templates", template_r3)("data", ctx.codes);
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(34, 54, "enter_phone"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["required"]) ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.controls["phone"].touched && (ctx.form.controls["phone"].errors == null ? null : ctx.form.controls["phone"].errors["pattern"]) ? 36 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 56, "country"));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", \u0275\u0275pipeBind1(43, 58, ctx.countries$) ? \u0275\u0275pipeBind1(44, 60, ctx.countries$) : \u0275\u0275pureFunction0(84, _c0))("placeholder", \u0275\u0275pipeBind1(45, 62, "select_country"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.form.controls["country_id"].touched && (ctx.form.controls["country_id"].errors == null ? null : ctx.form.controls["country_id"].errors["required"]) ? 46 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 64, "state"));
        \u0275\u0275advance(2);
        \u0275\u0275property("data", \u0275\u0275pipeBind1(53, 66, ctx.states$) ? \u0275\u0275pipeBind1(54, 68, ctx.states$) : \u0275\u0275pureFunction0(85, _c0))("placeholder", \u0275\u0275pipeBind1(55, 70, "select_state"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.form.controls["state_id"].touched && (ctx.form.controls["state_id"].errors == null ? null : ctx.form.controls["state_id"].errors["required"]) ? 56 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 72, "city"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(63, 74, "enter_city"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["city"].touched && (ctx.form.controls["city"].errors == null ? null : ctx.form.controls["city"].errors["required"]) ? 64 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 76, "pincode"));
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(71, 78, "enter_pincode"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.form.controls["pincode"].touched && (ctx.form.controls["pincode"].errors == null ? null : ctx.form.controls["pincode"].errors["required"]) ? 72 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-outline btn-md fw-bold");
        \u0275\u0275property("type", "button")("spinner", false)("id", "cancel_addres_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 80, "cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_address_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 82, "submit"), " ");
      }
    }, dependencies: [CommonModule, AsyncPipe, TranslateModule, TranslatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, Select2Module, Select2, ButtonComponent] });
  }
};
__decorate([
  Select(CountryState.countries)
], AddressModalComponent.prototype, "countries$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressModalComponent, { className: "AddressModalComponent" });
})();

export {
  TextConverterPipe,
  AddressModalComponent
};
//# sourceMappingURL=chunk-ATNCNZTA.js.map
