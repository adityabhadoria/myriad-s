import {
  AuthService,
  ButtonComponent,
  CurrencySymbolPipe,
  NotificationService,
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-YVVLA4K6.js";
import {
  ThemeOptionState,
  UpdateProductBox,
  environment as environment2
} from "./chunk-SWD7ZYS2.js";
import {
  Action,
  ActivatedRoute,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DefaultValueAccessor,
  Directive,
  ElementRef,
  ErrorHandler,
  EventEmitter,
  FormControl,
  FormControlDirective,
  FormsModule,
  HostBinding,
  HostListener,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  JsonPipe,
  LocationStrategy,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  NgbActiveModal,
  NgbModal,
  NgbModule,
  NgbRating,
  NgbRatingConfig,
  NgbTooltip,
  Optional,
  Output,
  PLATFORM_ID,
  ReactiveFormsModule,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  Select,
  Selector,
  SettingState,
  State,
  Store,
  Subject,
  TemplateRef,
  ThemeOptionService,
  TranslateModule,
  TranslatePipe,
  ViewChild,
  __decorate,
  __spreadProps,
  __spreadValues,
  delay,
  environment,
  filter,
  first,
  from,
  fromEvent,
  isDevMode,
  isPlatformBrowser,
  map,
  merge,
  of,
  setClassMetadata,
  skip,
  switchMap,
  take,
  tap,
  toArray,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-GDIBOM5I.js";

// node_modules/ngx-owl-carousel-o/fesm2022/ngx-owl-carousel-o.mjs
var _c0 = (a0, a1, a2, a3, a4) => ({
  "width": a0,
  "transform": a1,
  "transition": a2,
  "padding-left": a3,
  "padding-right": a4
});
var _c1 = (a0, a1, a2, a3) => ({
  "width": a0,
  "margin-left": a1,
  "margin-right": a2,
  "left": a3
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function StageComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const slide_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", slide_r2.tplRef)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r2.preparePublicSlide(slide_r2), i_r5));
  }
}
function StageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
      const slide_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear(slide_r2.id));
    });
    \u0275\u0275template(2, StageComponent_ng_container_2_2_Template, 1, 5, null, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", slide_r2.classes)("ngStyle", \u0275\u0275pureFunction4(4, _c1, slide_r2.width + "px", slide_r2.marginL ? slide_r2.marginL + "px" : "", slide_r2.marginR ? slide_r2.marginR + "px" : "", slide_r2.left))("@autoHeight", slide_r2.heightState);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slide_r2.load);
  }
}
var _c3 = (a0, a1, a2, a3, a4) => ({
  "owl-rtl": a0,
  "owl-loaded": a1,
  "owl-responsive": a2,
  "owl-drag": a3,
  "owl-grab": a4
});
var _c4 = (a0, a1) => ({
  "isMouseDragable": a0,
  "isTouchDragable": a1
});
var _c5 = (a0) => ({
  "disabled": a0
});
var _c6 = (a0, a1) => ({
  "active": a0,
  "owl-dot-text": a1
});
function CarouselComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "owl-stage", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("owlDraggable", \u0275\u0275pureFunction2(3, _c4, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
  }
}
function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
      const dot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveByDot(dot_r5.id));
    });
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dot_r5 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c6, dot_r5.active, dot_r5.showInnerContent));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", dot_r5.innerContent, \u0275\u0275sanitizeHtml);
  }
}
function CarouselComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275template(5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.htmlText, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.htmlText, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c5, ctx_r1.dotsData == null ? null : ctx_r1.dotsData.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dotsData == null ? null : ctx_r1.dotsData.dots);
  }
}
var OwlCarouselOConfig = class {
  items = 3;
  skip_validateItems = false;
  loop = false;
  center = false;
  rewind = false;
  mouseDrag = true;
  touchDrag = true;
  pullDrag = true;
  freeDrag = false;
  margin = 0;
  stagePadding = 0;
  merge = false;
  mergeFit = true;
  autoWidth = false;
  startPosition = 0;
  rtl = false;
  smartSpeed = 250;
  fluidSpeed = false;
  dragEndSpeed = false;
  responsive = {};
  responsiveRefreshRate = 200;
  // defaults to Navigation
  nav = false;
  navText = ["prev", "next"];
  navSpeed = false;
  slideBy = 1;
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = true;
  dotsEach = false;
  dotsData = false;
  dotsSpeed = false;
  // defaults to Autoplay
  autoplay = false;
  autoplayTimeout = 5e3;
  autoplayHoverPause = false;
  autoplaySpeed = false;
  autoplayMouseleaveTimeout = 1;
  // defaults to LazyLoading
  lazyLoad = false;
  lazyLoadEager = 0;
  // defaults to Animate
  slideTransition = "";
  animateOut = false;
  animateIn = false;
  // defaults to AutoHeight
  autoHeight = false;
  // defaults to Hash
  URLhashListener = false;
  constructor() {
  }
};
var OwlOptionsMockedTypes = class {
  items = "number";
  skip_validateItems = "boolean";
  loop = "boolean";
  center = "boolean";
  rewind = "boolean";
  mouseDrag = "boolean";
  touchDrag = "boolean";
  pullDrag = "boolean";
  freeDrag = "boolean";
  margin = "number";
  stagePadding = "number";
  merge = "boolean";
  mergeFit = "boolean";
  autoWidth = "boolean";
  startPosition = "number|string";
  rtl = "boolean";
  smartSpeed = "number";
  fluidSpeed = "boolean";
  dragEndSpeed = "number|boolean";
  responsive = {};
  responsiveRefreshRate = "number";
  // defaults to Navigation
  nav = "boolean";
  navText = "string[]";
  navSpeed = "number|boolean";
  slideBy = "number|string";
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = "boolean";
  dotsEach = "number|boolean";
  dotsData = "boolean";
  dotsSpeed = "number|boolean";
  // defaults to Autoplay
  autoplay = "boolean";
  autoplayTimeout = "number";
  autoplayHoverPause = "boolean";
  autoplaySpeed = "number|boolean";
  autoplayMouseleaveTimeout = "number";
  // defaults to LazyLoading
  lazyLoad = "boolean";
  lazyLoadEager = "number";
  // defaults to Animate
  slideTransition = "string";
  animateOut = "string|boolean";
  animateIn = "string|boolean";
  // defaults to AutoHeight
  autoHeight = "boolean";
  // defaults to Hash
  URLhashListener = "boolean";
  constructor() {
  }
};
var OwlLogger = class _OwlLogger {
  errorHandler;
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
  }
  log(value, ...rest) {
    if (isDevMode()) {
      console.log(value, ...rest);
    }
  }
  error(error) {
    this.errorHandler.handleError(error);
  }
  warn(value, ...rest) {
    console.warn(value, ...rest);
  }
  static \u0275fac = function OwlLogger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwlLogger)(\u0275\u0275inject(ErrorHandler));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OwlLogger,
    factory: _OwlLogger.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlLogger, [{
    type: Injectable
  }], () => [{
    type: ErrorHandler
  }], null);
})();
var Type;
(function(Type2) {
  Type2["Event"] = "event";
  Type2["State"] = "state";
})(Type || (Type = {}));
var Width;
(function(Width2) {
  Width2["Default"] = "default";
  Width2["Inner"] = "inner";
  Width2["Outer"] = "outer";
})(Width || (Width = {}));
var CarouselService = class _CarouselService {
  logger;
  /**
   * Subject for passing data needed for managing View
   */
  _viewSettingsShipper$ = new Subject();
  /**
   * Subject for notification when the carousel got initializes
   */
  _initializedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings start changinf
   */
  _changeSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings have changed
   */
  _changedSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel starts translating or moving
   */
  _translateCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel stopped translating or moving
   */
  _translatedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
   */
  _resizeCarousel$ = new Subject();
  /**
   * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
   */
  _resizedCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel starts
   */
  _refreshCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel is ended
   */
  _refreshedCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel starts
   */
  _dragCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel is ended
   */
  _draggedCarousel$ = new Subject();
  /**
   * Current settings for the carousel.
   */
  settings = {
    items: 0
  };
  /**
   * Initial data for setting classes to element .owl-carousel
   */
  owlDOMData = {
    rtl: false,
    isResponsive: false,
    isRefreshed: false,
    isLoaded: false,
    isLoading: false,
    isMouseDragable: false,
    isGrab: false,
    isTouchDragable: false
  };
  /**
   * Initial data of .owl-stage
   */
  stageData = {
    transform: "translate3d(0px,0px,0px)",
    transition: "0s",
    width: 0,
    paddingL: 0,
    paddingR: 0
  };
  /**
   *  Data of every slide
   */
  slidesData;
  /**
   * Data of navigation block
   */
  navData;
  /**
   * Data of dots block
   */
  dotsData;
  /**
   * Carousel width
   */
  _width;
  /**
   * All real items.
   */
  _items = [];
  // is equal to this.slides
  /**
   * Array with width of every slide.
   */
  _widths = [];
  /**
   * Currently suppressed events to prevent them from beeing retriggered.
   */
  _supress = {};
  /**
   * References to the running plugins of this carousel.
   */
  _plugins = {};
  /**
   * Absolute current position.
   */
  _current = null;
  /**
   * All cloned items.
   */
  _clones = [];
  /**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   */
  _mergers = [];
  /**
   * Animation speed in milliseconds.
   */
  _speed = null;
  /**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   */
  _coordinates = [];
  /**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   */
  _breakpoint = null;
  /**
   * Prefix for id of cloned slides
   */
  clonedIdPrefix = "cloned-";
  /**
   * Current options set by the caller including defaults.
   */
  _options = {};
  /**
   * Invalidated parts within the update process.
   */
  _invalidated = {};
  // Is needed for tests
  get invalidated() {
    return this._invalidated;
  }
  /**
   * Current state information and their tags.
   */
  _states = {
    current: {},
    tags: {
      initializing: ["busy"],
      animating: ["busy"],
      dragging: ["interacting"]
    }
  };
  // is needed for tests
  get states() {
    return this._states;
  }
  /**
       * Ordered list of workers for the update process.
   */
  _pipe = [
    // {
    //   filter: ['width', 'settings'],
    //   run: () => {
    //     this._width = this.carouselWindowWidth;
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        cache.current = this._items && this._items[this.relative(this._current)]?.id;
      }
    },
    // {
    //   filter: ['items', 'settings'],
    //   run: function() {
    //     // this.$stage.children('.cloned').remove();
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
          "margin-left": rtl ? margin : "",
          "margin-right": rtl ? "" : margin
        };
        if (!grid) {
          this.slidesData.forEach((slide) => {
            slide.marginL = css["margin-left"];
            slide.marginR = css["margin-right"];
          });
        }
        cache.css = css;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const width = +(this.width() / this.settings.items).toFixed(3) - this.settings.margin, grid = !this.settings.autoWidth, widths = [];
        let merge2 = null, iterator = this._items.length;
        cache.items = {
          merge: false,
          width
        };
        while (iterator-- > 0) {
          merge2 = this._mergers[iterator];
          merge2 = this.settings.mergeFit && Math.min(merge2, this.settings.items) || merge2;
          cache.items.merge = merge2 > 1 || cache.items.merge;
          widths[iterator] = !grid ? this._items[iterator].width ? this._items[iterator].width : width : width * merge2;
        }
        this._widths = widths;
        this.slidesData.forEach((slide, i) => {
          slide.width = this._widths[i];
          slide.marginR = cache.css["margin-right"];
          slide.marginL = cache.css["margin-left"];
        });
      }
    },
    {
      filter: ["items", "settings"],
      run: () => {
        const clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2;
        let append = [], prepend = [], repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
        repeat /= 2;
        while (repeat-- > 0) {
          clones.push(this.normalize(clones.length / 2, true));
          append.push(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
          clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
          prepend.unshift(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
        }
        this._clones = clones;
        append = append.map((slide) => {
          slide.id = `${this.clonedIdPrefix}${slide.id}`;
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        prepend = prepend.map((slide) => {
          slide.id = `${this.clonedIdPrefix}${slide.id}`;
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        this.slidesData = prepend.concat(this.slidesData).concat(append);
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, coordinates = [];
        let iterator = -1, previous = 0, current = 0;
        while (++iterator < size) {
          previous = coordinates[iterator - 1] || 0;
          current = this._widths[this.relative(iterator)] + this.settings.margin;
          coordinates.push(previous + current * rtl);
        }
        this._coordinates = coordinates;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
          "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          "padding-left": padding || "",
          "padding-right": padding || ""
        };
        this.stageData.width = css.width;
        this.stageData.paddingL = css["padding-left"];
        this.stageData.paddingR = css["padding-right"];
      }
    },
    {
      //   filter: [ 'width', 'items', 'settings' ],
      //   run: cache => {
      // 		// this method sets the width for every slide, but I set it in different way earlier
      // 		const grid = !this.settings.autoWidth,
      // 		items = this.$stage.children(); // use this.slidesData
      //     let iterator = this._coordinates.length;
      //     if (grid && cache.items.merge) {
      //       while (iterator--) {
      //         cache.css.width = this._widths[this.relative(iterator)];
      //         items.eq(iterator).css(cache.css);
      //       }
      //     } else if (grid) {
      //       cache.css.width = cache.items.width;
      //       items.css(cache.css);
      //     }
      //   }
      // }, {
      //   filter: [ 'items' ],
      //   run: function() {
      //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
      //   }
      // }, {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        let current = cache.current ? this.slidesData.findIndex((slide) => slide.id === cache.current) : 0;
        current = Math.max(this.minimum(), Math.min(this.maximum(), current));
        this.reset(current);
      }
    },
    {
      filter: ["position"],
      run: () => {
        this.animate(this.coordinates(this._current));
      }
    },
    {
      filter: ["width", "position", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, matches = [];
        let begin, end, inner, outer, i, n;
        begin = this.coordinates(this.current());
        if (typeof begin === "number") {
          begin += padding;
        } else {
          begin = 0;
        }
        end = begin + this.width() * rtl;
        if (rtl === -1 && this.settings.center) {
          const result = this._coordinates.filter((element) => {
            return this.settings.items % 2 === 1 ? element >= begin : element > begin;
          });
          begin = result.length ? result[result.length - 1] : begin;
        }
        for (i = 0, n = this._coordinates.length; i < n; i++) {
          inner = Math.ceil(this._coordinates[i - 1] || 0);
          outer = Math.ceil(Math.abs(this._coordinates[i]) + padding * rtl);
          if (this._op(inner, "<=", begin) && this._op(inner, ">", end) || this._op(outer, "<", begin) && this._op(outer, ">", end)) {
            matches.push(i);
          }
        }
        this.slidesData.forEach((slide) => {
          slide.isActive = false;
          return slide;
        });
        matches.forEach((item) => {
          this.slidesData[item].isActive = true;
        });
        if (this.settings.center) {
          this.slidesData.forEach((slide) => {
            slide.isCentered = false;
            return slide;
          });
          this.slidesData[this.current()].isCentered = true;
        }
      }
    }
  ];
  constructor(logger) {
    this.logger = logger;
  }
  /**
   * Makes _viewSettingsShipper$ Subject become Observable
   * @returns Observable of _viewSettingsShipper$ Subject
   */
  getViewCurSettings() {
    return this._viewSettingsShipper$.asObservable();
  }
  /**
   * Makes _initializedCarousel$ Subject become Observable
   * @returns Observable of _initializedCarousel$ Subject
   */
  getInitializedState() {
    return this._initializedCarousel$.asObservable();
  }
  /**
   * Makes _changeSettingsCarousel$ Subject become Observable
   * @returns Observable of _changeSettingsCarousel$ Subject
   */
  getChangeState() {
    return this._changeSettingsCarousel$.asObservable();
  }
  /**
   * Makes _changedSettingsCarousel$ Subject become Observable
   * @returns Observable of _changedSettingsCarousel$ Subject
   */
  getChangedState() {
    return this._changedSettingsCarousel$.asObservable();
  }
  /**
   * Makes _translateCarousel$ Subject become Observable
   * @returns Observable of _translateCarousel$ Subject
   */
  getTranslateState() {
    return this._translateCarousel$.asObservable();
  }
  /**
   * Makes _translatedCarousel$ Subject become Observable
   * @returns Observable of _translatedCarousel$ Subject
   */
  getTranslatedState() {
    return this._translatedCarousel$.asObservable();
  }
  /**
   * Makes _resizeCarousel$ Subject become Observable
   * @returns Observable of _resizeCarousel$ Subject
   */
  getResizeState() {
    return this._resizeCarousel$.asObservable();
  }
  /**
   * Makes _resizedCarousel$ Subject become Observable
   * @returns Observable of _resizedCarousel$ Subject
   */
  getResizedState() {
    return this._resizedCarousel$.asObservable();
  }
  /**
   * Makes _refreshCarousel$ Subject become Observable
   * @returns Observable of _refreshCarousel$ Subject
   */
  getRefreshState() {
    return this._refreshCarousel$.asObservable();
  }
  /**
   * Makes _refreshedCarousel$ Subject become Observable
   * @returns Observable of _refreshedCarousel$ Subject
   */
  getRefreshedState() {
    return this._refreshedCarousel$.asObservable();
  }
  /**
   * Makes _dragCarousel$ Subject become Observable
   * @returns Observable of _dragCarousel$ Subject
   */
  getDragState() {
    return this._dragCarousel$.asObservable();
  }
  /**
   * Makes _draggedCarousel$ Subject become Observable
   * @returns Observable of _draggedCarousel$ Subject
   */
  getDraggedState() {
    return this._draggedCarousel$.asObservable();
  }
  /**
   * Setups custom options expanding default options
   * @param options custom options
   */
  setOptions(options) {
    const configOptions = new OwlCarouselOConfig();
    const checkedOptions = this._validateOptions(options, configOptions);
    this._options = __spreadValues(__spreadValues({}, configOptions), checkedOptions);
  }
  /**
   * Checks whether user's option are set properly. Cheking is based on typings;
   * @param options options set by user
   * @param configOptions default options
   * @returns checked and modified (if it's needed) user's options
   *
   * Notes:
   * 	- if user set option with wrong type, it'll be written in console
   */
  _validateOptions(options, configOptions) {
    const checkedOptions = __spreadValues({}, options);
    const mockedTypes = new OwlOptionsMockedTypes();
    const setRightOption = (type, key) => {
      this.logger.log(`options.${key} must be type of ${type}; ${key}=${options[key]} skipped to defaults: ${key}=${configOptions[key]}`);
      return configOptions[key];
    };
    for (const key in checkedOptions) {
      if (checkedOptions.hasOwnProperty(key)) {
        if (mockedTypes[key] === "number") {
          if (this._isNumeric(checkedOptions[key])) {
            checkedOptions[key] = +checkedOptions[key];
            checkedOptions[key] = key === "items" ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        } else if (mockedTypes[key] === "boolean" && typeof checkedOptions[key] !== "boolean") {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|boolean" && !this._isNumberOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|string" && !this._isNumberOrString(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string|boolean" && !this._isStringOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string[]") {
          if (Array.isArray(checkedOptions[key])) {
            let isString = false;
            checkedOptions[key].forEach((element) => {
              isString = typeof element === "string" ? true : false;
            });
            if (!isString) {
              checkedOptions[key] = setRightOption(mockedTypes[key], key);
            }
            ;
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        }
      }
    }
    return checkedOptions;
  }
  /**
   * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
   * @param items option items set by user
   * @param skip_validateItems option `skip_validateItems` set by user
   * @returns right number of items
   */
  _validateItems(items, skip_validateItems) {
    let result = items;
    if (items > this._items.length) {
      if (skip_validateItems) {
        this.logger.log("The option 'items' in your options is bigger than the number of slides. The navigation got disabled");
      } else {
        result = this._items.length;
        this.logger.log("The option 'items' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled");
      }
    } else {
      if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
        this.logger.log("Option 'items' in your options is equal to the number of slides. So the navigation got disabled");
      }
    }
    return result;
  }
  /**
   * Set current width of carousel
   * @param width width of carousel Window
   */
  setCarouselWidth(width) {
    this._width = width;
  }
  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @param carouselWidth width of carousel
   * @param slides array of slides
   * @param options options set by user
   */
  setup(carouselWidth, slides, options) {
    this.setCarouselWidth(carouselWidth);
    this.setItems(slides);
    this._defineSlidesData();
    this.setOptions(options);
    this.settings = __spreadValues({}, this._options);
    this.setOptionsForViewport();
    this._trigger("change", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
    this.invalidate("settings");
    this._trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }
  /**
   * Set options for current viewport
   */
  setOptionsForViewport() {
    const viewport = this._width, overwrites = this._options.responsive;
    let match = -1;
    if (!Object.keys(overwrites).length) {
      return;
    }
    if (!viewport) {
      this.settings.items = 1;
      return;
    }
    for (const key in overwrites) {
      if (overwrites.hasOwnProperty(key)) {
        if (+key <= viewport && +key > match) {
          match = Number(key);
        }
      }
    }
    this.settings = __spreadProps(__spreadValues(__spreadValues({}, this._options), overwrites[match]), {
      items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
    });
    delete this.settings.responsive;
    this.owlDOMData.isResponsive = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    const mergers = [];
    this._items.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      mergers.push(mergeN);
    });
    this._mergers = mergers;
    this._breakpoint = match;
    this.invalidate("settings");
  }
  /**
   * Initializes the carousel.
   * @param slides array of CarouselSlideDirective
   */
  initialize(slides) {
    this.enter("initializing");
    this.owlDOMData.rtl = this.settings.rtl;
    if (this._mergers.length) {
      this._mergers = [];
    }
    slides.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      this._mergers.push(mergeN);
    });
    this._clones = [];
    this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
    this.invalidate("items");
    this.refresh();
    this.owlDOMData.isLoaded = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    this.sendChanges();
    this.leave("initializing");
    this._trigger("initialized");
  }
  /**
   * Sends all data needed for View
   */
  sendChanges() {
    this._viewSettingsShipper$.next({
      owlDOMData: this.owlDOMData,
      stageData: this.stageData,
      slidesData: this.slidesData,
      navData: this.navData,
      dotsData: this.dotsData
    });
  }
  /**
   * Updates option logic if necessery
   */
  _optionsLogic() {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = 0;
      this.settings.merge = false;
    }
  }
  /**
   * Updates the view
   */
  update() {
    let i = 0;
    const n = this._pipe.length, filter2 = (item) => this._invalidated[item], cache = {};
    while (i < n) {
      const filteredPipe = this._pipe[i].filter.filter(filter2);
      if (this._invalidated.all || filteredPipe.length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }
    this.slidesData.forEach((slide) => slide.classes = this.setCurSlideClasses(slide));
    this.sendChanges();
    this._invalidated = {};
    if (!this.is("valid")) {
      this.enter("valid");
    }
  }
  /**
   * Gets the width of the view.
   * @param [dimension=Width.Default] The dimension to return
   * @returns The width of the view in pixel.
   */
  width(dimension) {
    dimension = dimension || Width.Default;
    switch (dimension) {
      case Width.Inner:
      case Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  }
  /**
   * Refreshes the carousel primarily for adaptive purposes.
   */
  refresh() {
    this.enter("refreshing");
    this._trigger("refresh");
    this._defineSlidesData();
    this.setOptionsForViewport();
    this._optionsLogic();
    this.update();
    this.leave("refreshing");
    this._trigger("refreshed");
  }
  /**
   * Checks window `resize` event.
   * @param curWidth width of .owl-carousel
   */
  onResize(curWidth) {
    if (!this._items.length) {
      return false;
    }
    this.setCarouselWidth(curWidth);
    this.enter("resizing");
    this._trigger("resize");
    this.invalidate("width");
    this.refresh();
    this.leave("resizing");
    this._trigger("resized");
  }
  /**
   * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @param event - The event arguments.
   * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
   */
  prepareDragging(event) {
    let stage = null, transformArr;
    transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, "").split(",");
    stage = {
      x: +transformArr[0],
      y: +transformArr[1]
    };
    if (this.is("animating")) {
      this.invalidate("position");
    }
    if (event.type === "mousedown") {
      this.owlDOMData.isGrab = true;
    }
    this.speed(0);
    return stage;
  }
  /**
   * Enters into a 'dragging' state
   */
  enterDragging() {
    this.enter("dragging");
    this._trigger("drag");
  }
  /**
   * Defines new coords for .owl-stage while dragging it
   * @todo #261
   * @param event the event arguments.
   * @param dragData initial data got after starting dragging
   * @returns coords or false
   */
  defineNewCoordsDrag(event, dragData) {
    let minimum = null, maximum = null, pull = null;
    const delta = this.difference(dragData.pointer, this.pointer(event)), stage = this.difference(dragData.stage.start, delta);
    if (!this.is("dragging")) {
      return false;
    }
    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = +this.coordinates(this.maximum() + 1) - minimum;
      stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }
    return stage;
  }
  /**
   * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
   * @todo #261
   * @todo Threshold for click event
   * @param event the event arguments.
   * @param dragObj the object with dragging settings and states
   * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
   */
  finishDragging(event, dragObj, clickAttacher) {
    const directions = ["right", "left"], delta = this.difference(dragObj.pointer, this.pointer(event)), stage = dragObj.stage.current, direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
    let currentSlideI, current, newCurrent;
    if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
      this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
      currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
      current = this.current();
      newCurrent = this.current(currentSlideI === -1 ? void 0 : currentSlideI);
      if (current !== newCurrent) {
        this.invalidate("position");
        this.update();
      }
      dragObj.direction = direction;
      if (Math.abs(delta.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - dragObj.time > 300) {
        clickAttacher();
      }
    }
    if (!this.is("dragging")) {
      return;
    }
    this.leave("dragging");
    this._trigger("dragged");
  }
  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @param coordinate The coordinate in pixel.
   * @param direction The direction to check for the closest item. Ether `left` or `right`.
   * @returns The absolute position of the closest item.
   */
  closest(coordinate, direction) {
    const pull = 30, width = this.width();
    let coordinates = this.coordinates(), position = -1;
    if (this.settings.center) {
      coordinates = coordinates.map((item) => {
        if (item === 0) {
          item += 1e-6;
        }
        return item;
      });
    }
    for (let i = 0; i < coordinates.length; i++) {
      if (direction === "left" && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      } else if (direction === "right" && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
        position = i + 1;
      } else if (this._op(coordinate, "<", coordinates[i]) && this._op(coordinate, ">", coordinates[i + 1] || coordinates[i] - width)) {
        position = direction === "left" ? i + 1 : i;
      } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      }
      if (position !== -1) {
        break;
      }
      ;
    }
    if (!this.settings.loop) {
      if (this._op(coordinate, ">", coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this._op(coordinate, "<", coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }
    return position;
  }
  /**
   * Animates the stage.
   * @todo #270
   * @param coordinate The coordinate in pixels.
   */
  animate(coordinate) {
    const animate2 = this.speed() > 0;
    if (this.is("animating")) {
      this.onTransitionEnd();
    }
    if (animate2) {
      this.enter("animating");
      this._trigger("translate");
    }
    this.stageData.transform = "translate3d(" + coordinate + "px,0px,0px)";
    this.stageData.transition = this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "");
  }
  /**
   * Checks whether the carousel is in a specific state or not.
   * @param state The state to check.
   * @returns The flag which indicates if the carousel is busy.
   */
  is(state2) {
    return this._states.current[state2] && this._states.current[state2] > 0;
  }
  /**
   * Sets the absolute position of the current item.
   * @param position The new absolute position or nothing to leave it unchanged.
   * @returns The absolute position of the current item.
   */
  current(position) {
    if (position === void 0) {
      return this._current;
    }
    if (this._items.length === 0) {
      return void 0;
    }
    position = this.normalize(position);
    if (this._current !== position) {
      const event = this._trigger("change", {
        property: {
          name: "position",
          value: position
        }
      });
      this._current = position;
      this.invalidate("position");
      this._trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }
    return this._current;
  }
  /**
   * Invalidates the given part of the update routine.
   * @param part The part to invalidate.
   * @returns The invalidated parts.
   */
  invalidate(part) {
    if (typeof part === "string") {
      this._invalidated[part] = true;
      if (this.is("valid")) {
        this.leave("valid");
      }
    }
    return Object.keys(this._invalidated);
  }
  /**
   * Resets the absolute position of the current item.
   * @param position the absolute position of the new item.
   */
  reset(position) {
    position = this.normalize(position);
    if (position === void 0) {
      return;
    }
    this._speed = 0;
    this._current = position;
    this._suppress(["translate", "translated"]);
    this.animate(this.coordinates(position));
    this._release(["translate", "translated"]);
  }
  /**
   * Normalizes an absolute or a relative position of an item.
   * @param position The absolute or relative position to normalize.
   * @param relative Whether the given position is relative or not.
   * @returns The normalized position.
   */
  normalize(position, relative) {
    const n = this._items.length, m = relative ? 0 : this._clones.length;
    if (!this._isNumeric(position) || n < 1) {
      position = void 0;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }
    return position;
  }
  /**
   * Converts an absolute position of an item into a relative one.
   * @param position The absolute position to convert.
   * @returns The converted position.
   */
  relative(position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  }
  /**
   * Gets the maximum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of maximum position
   */
  maximum(relative = false) {
    const settings = this.settings;
    let maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      reciprocalItemsWidth = this.slidesData[--iterator].width;
      elementWidth = this._width;
      while (iterator-- > 0) {
        reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;
        if (reciprocalItemsWidth > elementWidth) {
          break;
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }
    if (relative) {
      maximum -= this._clones.length / 2;
    }
    return Math.max(maximum, 0);
  }
  /**
   * Gets the minimum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of minimum position
   */
  minimum(relative = false) {
    return relative ? 0 : this._clones.length / 2;
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  items(position) {
    if (position === void 0) {
      return this._items.slice();
    }
    position = this.normalize(position, true);
    return [this._items[position]];
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  mergers(position) {
    if (position === void 0) {
      return this._mergers.slice();
    }
    position = this.normalize(position, true);
    return this._mergers[position];
  }
  /**
   * Gets the absolute positions of clones for an item.
   * @param position The relative position of the item.
   * @returns The absolute positions of clones for the item or all if no position was given.
   */
  clones(position) {
    const odd = this._clones.length / 2, even = odd + this._items.length, map2 = (index) => index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
    if (position === void 0) {
      return this._clones.map((v, i) => map2(i));
    }
    return this._clones.map((v, i) => v === position ? map2(i) : null).filter((item) => item);
  }
  /**
   * Sets the current animation speed.
   * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns The current animation speed in milliseconds.
   */
  speed(speed) {
    if (speed !== void 0) {
      this._speed = speed;
    }
    return this._speed;
  }
  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @param position The absolute position of the item within `minimum()` and `maximum()`.
   * @returns The coordinate of the item in pixel or all coordinates.
   */
  coordinates(position) {
    let multiplier = 1, newPosition = position - 1, coordinate, result;
    if (position === void 0) {
      result = this._coordinates.map((item, index) => {
        return this.coordinates(index);
      });
      return result;
    }
    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }
    coordinate = Math.ceil(coordinate);
    return coordinate;
  }
  /**
   * Calculates the speed for a translation.
   * @param from The absolute position of the start item.
   * @param to The absolute position of the target item.
   * @param factor [factor=undefined] - The time factor in milliseconds.
   * @returns The time in milliseconds for the translation.
   */
  _duration(from2, to, factor) {
    if (factor === 0) {
      return 0;
    }
    return Math.min(Math.max(Math.abs(to - from2), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
  }
  /**
   * Slides to the specified item.
   * @param position The position of the item.
   * @param speed The time in milliseconds for the transition.
   */
  to(position, speed) {
    let current = this.current(), revert = null, distance = position - this.relative(current), maximum = this.maximum(), delayForLoop = 0;
    const direction = +(distance > 0) - +(distance < 0), items = this._items.length, minimum = this.minimum();
    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }
      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;
      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        delayForLoop = 30;
        this.reset(current);
        this.sendChanges();
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }
    setTimeout(() => {
      this.speed(this._duration(current, position, speed));
      this.current(position);
      this.update();
    }, delayForLoop);
  }
  /**
   * Slides to the next item.
   * @param speed The time in milliseconds for the transition.
   */
  next(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  }
  /**
   * Slides to the previous item.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  }
  /**
   * Handles the end of an animation.
   * @param event - The event arguments.
   */
  onTransitionEnd(event) {
    if (event !== void 0) {
      return false;
    }
    this.leave("animating");
    this._trigger("translated");
  }
  /**
   * Gets viewport width.
   * @returns - The width in pixel.
   */
  _viewport() {
    let width;
    if (this._width) {
      width = this._width;
    } else {
      this.logger.log("Can not detect viewport width.");
    }
    return width;
  }
  /**
   * Sets _items
   * @param content The list of slides put into CarouselSlideDirectives.
   */
  setItems(content) {
    this._items = content;
  }
  /**
   * Sets slidesData using this._items
   */
  _defineSlidesData() {
    let loadMap;
    if (this.slidesData && this.slidesData.length) {
      loadMap = /* @__PURE__ */ new Map();
      this.slidesData.forEach((item) => {
        if (item.load) {
          loadMap.set(item.id, item.load);
        }
      });
    }
    this.slidesData = this._items.map((slide) => {
      return {
        id: `${slide.id}`,
        isActive: false,
        tplRef: slide.tplRef,
        dataMerge: slide.dataMerge,
        width: 0,
        isCloned: false,
        load: loadMap ? loadMap.get(slide.id) : false,
        hashFragment: slide.dataHash
      };
    });
  }
  /**
   * Sets current classes for slide
   * @param slide Slide of carousel
   * @returns object with names of css-classes which are keys and true/false values
   */
  setCurSlideClasses(slide) {
    const currentClasses = {
      "active": slide.isActive,
      "center": slide.isCentered,
      "cloned": slide.isCloned,
      "animated": slide.isAnimated,
      "owl-animated-in": slide.isDefAnimatedIn,
      "owl-animated-out": slide.isDefAnimatedOut
    };
    if (this.settings.animateIn) {
      currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
    }
    if (this.settings.animateOut) {
      currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
    }
    return currentClasses;
  }
  /**
   * Operators to calculate right-to-left and left-to-right.
   * @param a - The left side operand.
   * @param o - The operator.
   * @param b - The right side operand.
   * @returns true/false meaning right-to-left or left-to-right
   */
  _op(a, o, b) {
    const rtl = this.settings.rtl;
    switch (o) {
      case "<":
        return rtl ? a > b : a < b;
      case ">":
        return rtl ? a < b : a > b;
      case ">=":
        return rtl ? a <= b : a >= b;
      case "<=":
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  }
  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @param name The event name.
   * @param data The event data.
   * @param namespace The event namespace.
   * @param state The state which is associated with the event.
   * @param enter Indicates if the call enters the specified state or not.
   */
  _trigger(name, data, namespace, state2, enter) {
    switch (name) {
      case "initialized":
        this._initializedCarousel$.next(name);
        break;
      case "change":
        this._changeSettingsCarousel$.next(data);
        break;
      case "changed":
        this._changedSettingsCarousel$.next(data);
        break;
      case "drag":
        this._dragCarousel$.next(name);
        break;
      case "dragged":
        this._draggedCarousel$.next(name);
        break;
      case "resize":
        this._resizeCarousel$.next(name);
        break;
      case "resized":
        this._resizedCarousel$.next(name);
        break;
      case "refresh":
        this._refreshCarousel$.next(name);
        break;
      case "refreshed":
        this._refreshedCarousel$.next(name);
        break;
      case "translate":
        this._translateCarousel$.next(name);
        break;
      case "translated":
        this._translatedCarousel$.next(name);
        break;
      default:
        break;
    }
  }
  /**
   * Enters a state.
   * @param name - The state name.
   */
  enter(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === void 0) {
        this._states.current[stateName] = 0;
      }
      this._states.current[stateName]++;
    });
  }
  /**
   * Leaves a state.
   * @param name - The state name.
   */
  leave(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === 0 || !!this._states.current[stateName]) {
        this._states.current[stateName]--;
      }
    });
  }
  /**
   * Registers an event or state.
   * @param object - The event or state to register.
   */
  register(object) {
    if (object.type === Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }
      this._states.tags[object.name] = this._states.tags[object.name].filter((tag, i) => {
        return this._states.tags[object.name].indexOf(tag) === i;
      });
    }
  }
  /**
   * Suppresses events.
   * @param events The events to suppress.
   */
  _suppress(events) {
    events.forEach((event) => {
      this._supress[event] = true;
    });
  }
  /**
   * Releases suppressed events.
   * @param events The events to release.
   */
  _release(events) {
    events.forEach((event) => {
      delete this._supress[event];
    });
  }
  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @param event The `mousedown` or `touchstart` event.
   * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
   */
  pointer(event) {
    const result = {
      x: null,
      y: null
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }
    return result;
  }
  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @param number The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number
   */
  _isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  /**
   * Determines whether value is number or boolean type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
   */
  _isNumberOrBoolean(value) {
    return this._isNumeric(value) || typeof value === "boolean";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isNumberOrString(value) {
    return this._isNumeric(value) || typeof value === "string";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isStringOrBoolean(value) {
    return typeof value === "string" || typeof value === "boolean";
  }
  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @param first The first vector.
   * @param second The second vector.
   * @returns The difference.
   */
  difference(first2, second) {
    if (null === first2 || null === second) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: first2.x - second.x,
      y: first2.y - second.y
    };
  }
  static \u0275fac = function CarouselService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselService)(\u0275\u0275inject(OwlLogger));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselService,
    factory: _CarouselService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], () => [{
    type: OwlLogger
  }], null);
})();
var NavigationService = class _NavigationService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  navSubscription;
  /**
   * Indicates whether the plugin is initialized or not.
   */
  _initialized = false;
  /**
   * The current paging indexes.
   */
  _pages = [];
  /**
   * Data for navigation elements of the user interface.
   */
  _navData = {
    disabled: false,
    prev: {
      disabled: false,
      htmlText: ""
    },
    next: {
      disabled: false,
      htmlText: ""
    }
  };
  /**
   * Data for dot elements of the user interface.
   */
  _dotsData = {
    disabled: false,
    dots: []
  };
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((state2) => {
      this.initialize();
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(filter((data) => data.property.name === "position"), tap((data) => {
      this.update();
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap(() => {
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const navMerge$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.navSubscription = navMerge$.subscribe(() => {
    });
  }
  /**
     * Initializes the layout of the plugin and extends the carousel.
     */
  initialize() {
    this._navData.disabled = true;
    this._navData.prev.htmlText = this.carouselService.settings.navText[0];
    this._navData.next.htmlText = this.carouselService.settings.navText[1];
    this._dotsData.disabled = true;
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Calculates internal states and updates prop _pages
   */
  _updateNavPages() {
    let i, j, k;
    const lower = this.carouselService.clones().length / 2, upper = lower + this.carouselService.items().length, maximum = this.carouselService.maximum(true), pages = [], settings = this.carouselService.settings;
    let size = settings.center || settings.autoWidth || settings.dotsData ? 1 : Math.floor(Number(settings.dotsEach)) || Math.floor(settings.items);
    size = +size;
    if (settings.slideBy !== "page") {
      settings.slideBy = Math.min(+settings.slideBy, settings.items);
    }
    if (settings.dots || settings.slideBy === "page") {
      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this.carouselService.mergers(this.carouselService.relative(i));
      }
    }
    this._pages = pages;
  }
  /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     */
  draw() {
    let difference;
    const settings = this.carouselService.settings, items = this.carouselService.items(), disabled = items.length <= settings.items;
    this._navData.disabled = !settings.nav || disabled;
    this._dotsData.disabled = !settings.dots || disabled;
    if (settings.dots) {
      difference = this._pages.length - this._dotsData.dots.length;
      if (settings.dotsData && difference !== 0) {
        this._dotsData.dots = [];
        items.forEach((item) => {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${item.id}`,
            innerContent: item.dotContent,
            showInnerContent: true
          });
        });
      } else if (difference > 0) {
        const startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
        for (let i = 0; i < difference; i++) {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${i + startI}`,
            innerContent: "",
            showInnerContent: false
          });
        }
      } else if (difference < 0) {
        this._dotsData.dots.splice(difference, Math.abs(difference));
      }
    }
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Updates navigation buttons's and dots's states
   */
  update() {
    this._updateNavButtons();
    this._updateDots();
  }
  /**
   * Changes state of nav buttons (disabled, enabled)
   */
  _updateNavButtons() {
    const settings = this.carouselService.settings, loop = settings.loop || settings.rewind, index = this.carouselService.relative(this.carouselService.current());
    if (settings.nav) {
      this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
      this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
    }
    this.carouselService.navData = this._navData;
  }
  /**
   * Changes active dot if page becomes changed
   */
  _updateDots() {
    let curActiveDotI;
    if (!this.carouselService.settings.dots) {
      return;
    }
    this._dotsData.dots.forEach((item) => {
      if (item.active === true) {
        item.active = false;
      }
    });
    curActiveDotI = this._current();
    if (this._dotsData.dots.length) {
      this._dotsData.dots[curActiveDotI].active = true;
    }
    this.carouselService.dotsData = this._dotsData;
  }
  /**
     * Gets the current page position of the carousel.
     * @returns the current page position of the carousel
     */
  _current() {
    const current = this.carouselService.relative(this.carouselService.current());
    let finalCurrent;
    const pages = this._pages.filter((page, index) => {
      return page.start <= current && page.end >= current;
    }).pop();
    finalCurrent = this._pages.findIndex((page) => {
      return page.start === pages.start && page.end === pages.end;
    });
    return finalCurrent;
  }
  /**
     * Gets the current succesor/predecessor position.
   * @param sussessor position of slide
     * @returns the current succesor/predecessor position
     */
  _getPosition(successor) {
    let position, length;
    const settings = this.carouselService.settings;
    if (settings.slideBy === "page") {
      position = this._current();
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[(position % length + length) % length].start;
    } else {
      position = this.carouselService.relative(this.carouselService.current());
      length = this.carouselService.items().length;
      successor ? position += +settings.slideBy : position -= +settings.slideBy;
    }
    return position;
  }
  /**
     * Slides to the next item or page.
     * @param speed The time in milliseconds for the transition.
     */
  next(speed) {
    this.carouselService.to(this._getPosition(true), speed);
  }
  /**
   * Slides to the previous item or page.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    this.carouselService.to(this._getPosition(false), speed);
  }
  /**
   * Slides to the specified item or page.
   * @param position - The position of the item or page.
   * @param speed - The time in milliseconds for the transition.
   * @param standard - Whether to use the standard behaviour or not. Default meaning false
   */
  to(position, speed, standard) {
    let length;
    if (!standard && this._pages.length) {
      length = this._pages.length;
      this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
    } else {
      this.carouselService.to(position, speed);
    }
  }
  /**
   * Moves carousel after user's clicking on any dots
   */
  moveByDot(dotId) {
    const index = this._dotsData.dots.findIndex((dot) => dotId === dot.id);
    this.to(index, this.carouselService.settings.dotsSpeed);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id id of slide
   */
  toSlideById(id) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.id === id && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  static \u0275fac = function NavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationService,
    factory: _NavigationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var WINDOW = new InjectionToken("WindowToken");
var WindowRef = class {
  get nativeWindow() {
    throw new Error("Not implemented.");
  }
};
var BrowserWindowRef = class _BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }
  /**
   * @returns window object
   */
  get nativeWindow() {
    return window;
  }
  static \u0275fac = function BrowserWindowRef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserWindowRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserWindowRef,
    factory: _BrowserWindowRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserWindowRef, [{
    type: Injectable
  }], () => [], null);
})();
function windowFactory(browserWindowRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  const obj = {
    setTimeout: (func, time) => {
    },
    clearTimeout: (a) => {
    }
  };
  return obj;
}
var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, PLATFORM_ID]
};
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
var DOCUMENT = new InjectionToken("DocumentToken");
var DocumentRef = class {
  get nativeDocument() {
    throw new Error("Not implemented.");
  }
};
var BrowserDocumentRef = class _BrowserDocumentRef extends DocumentRef {
  constructor() {
    super();
  }
  /**
   * @returns Document object
   */
  get nativeDocument() {
    return document;
  }
  static \u0275fac = function BrowserDocumentRef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserDocumentRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserDocumentRef,
    factory: _BrowserDocumentRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserDocumentRef, [{
    type: Injectable
  }], () => [], null);
})();
function documentFactory(browserDocumentRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserDocumentRef.nativeDocument;
  }
  const doc = {
    hidden: false,
    visibilityState: "visible"
  };
  return doc;
}
var browserDocumentProvider = {
  provide: DocumentRef,
  useClass: BrowserDocumentRef
};
var documentProvider = {
  provide: DOCUMENT,
  useFactory: documentFactory,
  deps: [DocumentRef, PLATFORM_ID]
};
var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];
var AutoplayService = class _AutoplayService {
  carouselService;
  ngZone;
  /**
   * Subscrioption to merge Observables from CarouselService
   */
  autoplaySubscription;
  /**
   * The autoplay timeout.
   */
  _timeout = null;
  /**
   * Indicates whenever the autoplay is paused.
   */
  _paused = false;
  /**
   * Shows whether the code (the plugin) changed the option 'AutoplayTimeout' for own needs
   */
  _isArtificialAutoplayTimeout;
  /**
   * Shows whether the autoplay is paused for unlimited time by the developer.
   * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
   */
  _isAutoplayStopped = false;
  get isAutoplayStopped() {
    return this._isAutoplayStopped;
  }
  set isAutoplayStopped(value) {
    this._isAutoplayStopped = value;
  }
  winRef;
  docRef;
  constructor(carouselService, winRef, docRef, ngZone) {
    this.carouselService = carouselService;
    this.ngZone = ngZone;
    this.winRef = winRef;
    this.docRef = docRef;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoplaySubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay) {
        this.play();
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      this._handleChangeObservable(data);
    }));
    const resized$ = this.carouselService.getResizedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay && !this._isAutoplayStopped) {
        this.play();
      } else {
        this.stop();
      }
    }));
    const autoplayMerge$ = merge(initializedCarousel$, changedSettings$, resized$);
    this.autoplaySubscription = autoplayMerge$.subscribe(() => {
    });
  }
  /**
     * Starts the autoplay.
     * @param timeout The interval before the next animation starts.
     * @param speed The animation speed for the animations.
     */
  play(timeout, speed) {
    if (this._paused) {
      this._paused = false;
      this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
    }
    if (this.carouselService.is("rotating")) {
      return;
    }
    this.carouselService.enter("rotating");
    this._setAutoPlayInterval();
  }
  /**
     * Gets a new timeout
     * @param timeout - The interval before the next animation starts.
     * @param speed - The animation speed for the animations.
     * @return
     */
  _getNextTimeout(timeout, speed) {
    if (this._timeout) {
      this.winRef.clearTimeout(this._timeout);
    }
    this._isArtificialAutoplayTimeout = timeout ? true : false;
    return this.ngZone.runOutsideAngular(() => {
      return this.winRef.setTimeout(() => {
        this.ngZone.run(() => {
          if (this._paused || this.carouselService.is("busy") || this.carouselService.is("interacting") || this.docRef.hidden) {
            return;
          }
          this.carouselService.next(speed || this.carouselService.settings.autoplaySpeed);
        });
      }, timeout || this.carouselService.settings.autoplayTimeout);
    });
  }
  /**
     * Sets autoplay in motion.
     */
  _setAutoPlayInterval(timeout) {
    this._timeout = this._getNextTimeout(timeout);
  }
  /**
   * Stops the autoplay.
   */
  stop() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
    this.winRef.clearTimeout(this._timeout);
    this.carouselService.leave("rotating");
  }
  /**
     * Stops the autoplay.
     */
  pause() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
  }
  /**
   * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
   * @param data object with current position of carousel and type of change
   */
  _handleChangeObservable(data) {
    if (data.property.name === "settings") {
      if (this.carouselService.settings.autoplay) {
        this.play();
      } else {
        this.stop();
      }
    } else if (data.property.name === "position") {
      if (this.carouselService.settings.autoplay) {
        this._setAutoPlayInterval();
      }
    }
  }
  /**
   * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
   */
  _playAfterTranslated() {
    of("translated").pipe(switchMap((data) => this.carouselService.getTranslatedState()), first(), filter(() => this._isArtificialAutoplayTimeout), tap(() => this._setAutoPlayInterval())).subscribe(() => {
    });
  }
  /**
   * Starts pausing
   */
  startPausing() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.pause();
    }
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayingMouseLeave() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  /**
   * Starts playing after touch ends
   */
  startPlayingTouchEnd() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  static \u0275fac = function AutoplayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoplayService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(WINDOW), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoplayService,
    factory: _AutoplayService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoplayService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }], null);
})();
var LazyLoadService = class _LazyLoadService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  lazyLoadSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.lazyLoadSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      const isLazyLoad = this.carouselService.settings && !this.carouselService.settings.lazyLoad;
      this.carouselService.slidesData.forEach((item) => item.load = isLazyLoad ? true : false);
    }));
    const changeSettings$ = this.carouselService.getChangeState();
    const resizedCarousel$ = this.carouselService.getResizedState();
    const lazyLoadMerge$ = merge(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(tap((data) => this._defineLazyLoadSlides(data)));
    this.lazyLoadSubscription = lazyLoadMerge$.subscribe(() => {
    });
  }
  _defineLazyLoadSlides(data) {
    if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
      return;
    }
    if (data.property && data.property.name === "position" || data === "initialized" || data === "resized") {
      const settings = this.carouselService.settings, clones = this.carouselService.clones().length;
      let n = settings.center && Math.ceil(settings.items / 2) || settings.items, i = settings.center && n * -1 || 0, position = (data.property && data.property.value !== void 0 ? data.property.value : this.carouselService.current()) + i;
      if (settings.lazyLoadEager > 0) {
        n += settings.lazyLoadEager;
        if (settings.loop) {
          position -= settings.lazyLoadEager;
          n++;
        }
      }
      while (i++ < n) {
        this._load(clones / 2 + this.carouselService.relative(position));
        if (clones) {
          this.carouselService.clones(this.carouselService.relative(position)).forEach((value) => this._load(value));
        }
        position++;
      }
    }
  }
  /**
     * Loads all resources of an item at the specified position.
     * @param position - The absolute position of the item.
     */
  _load(position) {
    if (this.carouselService.slidesData[position].load) {
      return;
    }
    this.carouselService.slidesData[position].load = true;
  }
  static \u0275fac = function LazyLoadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LazyLoadService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LazyLoadService,
    factory: _LazyLoadService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AnimateService = class _AnimateService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  animateSubscription;
  /**
   * s
   */
  swapping = true;
  /**
   * active slide before translating
   */
  previous = void 0;
  /**
   * new active slide after translating
   */
  next = void 0;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.animateSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const changeSettings$ = this.carouselService.getChangeState().pipe(tap((data) => {
      if (data.property.name === "position") {
        this.previous = this.carouselService.current();
        this.next = data.property.value;
      }
    }));
    const dragCarousel$ = this.carouselService.getDragState();
    const draggedCarousel$ = this.carouselService.getDraggedState();
    const translatedCarousel$ = this.carouselService.getTranslatedState();
    const dragTranslatedMerge$ = merge(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(tap((data) => this.swapping = data === "translated"));
    const translateCarousel$ = this.carouselService.getTranslateState().pipe(tap((data) => {
      if (this.swapping && (this.carouselService._options.animateOut || this.carouselService._options.animateIn)) {
        this._swap();
      }
    }));
    const animateMerge$ = merge(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
    this.animateSubscription = animateMerge$.subscribe(() => {
    });
  }
  /**
     * Toggles the animation classes whenever an translations starts.
     * @returns
     */
  _swap() {
    if (this.carouselService.settings.items !== 1) {
      return;
    }
    this.carouselService.speed(0);
    let left;
    const previous = this.carouselService.slidesData[this.previous], next = this.carouselService.slidesData[this.next], incoming = this.carouselService.settings.animateIn, outgoing = this.carouselService.settings.animateOut;
    if (this.carouselService.current() === this.previous) {
      return;
    }
    if (outgoing) {
      left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === previous.id) {
          slide.left = `${left}px`;
          slide.isAnimated = true;
          slide.isDefAnimatedOut = true;
          slide.isCustomAnimatedOut = true;
        }
      });
    }
    if (incoming) {
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === next.id) {
          slide.isAnimated = true;
          slide.isDefAnimatedIn = true;
          slide.isCustomAnimatedIn = true;
        }
      });
    }
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.carouselService.slidesData.forEach((slide) => {
      if (slide.id === id) {
        slide.left = "";
        slide.isAnimated = false;
        slide.isDefAnimatedOut = false;
        slide.isCustomAnimatedOut = false;
        slide.isDefAnimatedIn = false;
        slide.isCustomAnimatedIn = false;
        slide.classes = this.carouselService.setCurSlideClasses(slide);
      }
    });
    this.carouselService.onTransitionEnd();
  }
  static \u0275fac = function AnimateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimateService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimateService,
    factory: _AnimateService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AutoHeightService = class _AutoHeightService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  autoHeightSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoHeightSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      } else {
        this.carouselService.slidesData.forEach((slide) => slide.heightState = "full");
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight && data.property.name === "position") {
        this.update();
      }
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      }
    }));
    const autoHeight$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.autoHeightSubscription = autoHeight$.subscribe(() => {
    });
  }
  /**
   * Updates the prop 'heightState' of slides
   */
  update() {
    const items = this.carouselService.settings.items;
    let start = this.carouselService.current(), end = start + items;
    if (this.carouselService.settings.center) {
      start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
      end = items % 2 === 1 ? start + items : start + items + 1;
    }
    this.carouselService.slidesData.forEach((slide, i) => {
      slide.heightState = i >= start && i < end ? "full" : "nulled";
    });
  }
  static \u0275fac = function AutoHeightService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoHeightService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoHeightService,
    factory: _AutoHeightService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoHeightService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var HashService = class _HashService {
  carouselService;
  route;
  router;
  /**
   * Subscription to merge Observable from CarouselService
   */
  hashSubscription;
  /**
   * Current url fragment (hash)
   */
  currentHashFragment;
  constructor(carouselService, route, router) {
    this.carouselService = carouselService;
    this.route = route;
    this.router = router;
    this.spyDataStreams();
    if (!this.route) {
      this.route = {
        fragment: of("no route").pipe(take(1))
      };
    }
    ;
    if (!this.router) {
      this.router = {
        navigate: (commands, extras) => {
          return;
        }
      };
    }
  }
  ngOnDestroy() {
    this.hashSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => this.listenToRoute()));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.URLhashListener && data.property.name === "position") {
        const newCurSlide = this.carouselService.current();
        const newCurFragment = this.carouselService.slidesData[newCurSlide].hashFragment;
        if (!newCurFragment || newCurFragment === this.currentHashFragment) {
          return;
        }
        this.router.navigate(["./"], {
          fragment: newCurFragment,
          relativeTo: this.route
        });
      }
    }));
    const hashFragment$ = merge(initializedCarousel$, changedSettings$);
    this.hashSubscription = hashFragment$.subscribe(() => {
    });
  }
  /**
   * rewinds carousel to slide which has the same hashFragment as fragment of current url
   * @param fragment fragment of url
   */
  rewind(fragment) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.hashFragment === fragment && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  /**
   * Initiate listening to ActivatedRoute.fragment
   */
  listenToRoute() {
    const count = this.carouselService.settings.startPosition === "URLHash" ? 0 : 2;
    this.route.fragment.pipe(skip(count)).subscribe((fragment) => {
      this.currentHashFragment = fragment;
      this.rewind(fragment);
    });
  }
  static \u0275fac = function HashService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HashService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(ActivatedRoute, 8), \u0275\u0275inject(Router, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HashService,
    factory: _HashService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: ActivatedRoute,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var nextId = 0;
var CarouselSlideDirective = class _CarouselSlideDirective {
  tplRef;
  /**
   * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
   * Will be auto-generated if not provided.
   */
  id = `owl-slide-${nextId++}`;
  /**
   * Defines how much widths of common slide will current slide have
   * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
   */
  _dataMerge = 1;
  set dataMerge(data) {
    this._dataMerge = this.isNumeric(data) ? data : 1;
  }
  get dataMerge() {
    return this._dataMerge;
  }
  /**
   * Width of slide
   */
  width = 0;
  /**
   * Inner content of dot for certain slide; can be html-markup
   */
  dotContent = "";
  /**
   * Hash (fragment) of url which corresponds to certain slide
   */
  dataHash = "";
  constructor(tplRef) {
    this.tplRef = tplRef;
  }
  /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param - The input to be tested
     * @returns - An indication if the input is a Number or can be coerced to a Number
     */
  isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  static \u0275fac = function CarouselSlideDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselSlideDirective)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CarouselSlideDirective,
    selectors: [["ng-template", "carouselSlide", ""]],
    inputs: {
      id: "id",
      dataMerge: "dataMerge",
      width: "width",
      dotContent: "dotContent",
      dataHash: "dataHash"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselSlideDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[carouselSlide]"
    }]
  }], () => [{
    type: TemplateRef
  }], {
    id: [{
      type: Input
    }],
    dataMerge: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    dotContent: [{
      type: Input
    }],
    dataHash: [{
      type: Input
    }]
  });
})();
var ResizeService = class _ResizeService {
  resizeObservable$;
  /**
   * Makes resizeSubject become Observable
   * @returns Observable of resizeSubject
   */
  get onResize$() {
    return this.resizeObservable$;
  }
  constructor(winRef, platformId) {
    this.resizeObservable$ = isPlatformBrowser(platformId) ? fromEvent(winRef, "resize") : new Subject().asObservable();
  }
  static \u0275fac = function ResizeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeService)(\u0275\u0275inject(WINDOW), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ResizeService,
    factory: _ResizeService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var StageComponent = class _StageComponent {
  zone;
  el;
  renderer;
  carouselService;
  animateService;
  /**
   * Object with settings which make carousel draggable by touch or mouse
   */
  owlDraggable;
  /**
   * Data of owl-stage
   */
  stageData;
  /**
   *  Data of every slide
   */
  slidesData;
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerOneMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerOneTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mouseup' event
   */
  listenerMouseUp;
  /**
   * Function wich will be returned after attaching listener to 'touchend' event
   */
  listenerTouchEnd;
  /**
   * Function wich will be returned after attaching listener to 'click' event
   */
  listenerOneClick;
  listenerATag;
  /**
   * Object with data needed for dragging
   */
  _drag = {
    time: null,
    target: null,
    pointer: null,
    stage: {
      start: null,
      current: null
    },
    direction: null,
    active: false,
    moving: false
  };
  /**
   * Subject for notification when the carousel's rebuilding caused by resize event starts
   */
  _oneDragMove$ = new Subject();
  /**
   * Subsctiption to _oneDragMove$ Subject
   */
  _oneMoveSubsription;
  preparePublicSlide = (slide) => {
    const newSlide = __spreadValues({}, slide);
    delete newSlide.tplRef;
    return newSlide;
  };
  constructor(zone, el, renderer, carouselService, animateService) {
    this.zone = zone;
    this.el = el;
    this.renderer = renderer;
    this.carouselService = carouselService;
    this.animateService = animateService;
  }
  onMouseDown(event) {
    if (this.owlDraggable.isMouseDragable) {
      this._onDragStart(event);
    }
  }
  onTouchStart(event) {
    if (event.targetTouches.length >= 2) {
      return false;
    }
    if (this.owlDraggable.isTouchDragable) {
      this._onDragStart(event);
    }
  }
  onTouchCancel(event) {
    this._onDragEnd(event);
  }
  onDragStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  onSelectStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  ngOnInit() {
    this._oneMoveSubsription = this._oneDragMove$.pipe(first()).subscribe(() => {
      this._sendChanges();
    });
  }
  ngOnDestroy() {
    this._oneMoveSubsription.unsubscribe();
  }
  /**
   * Passes this to _oneMouseTouchMove();
   */
  bindOneMouseTouchMove = (ev) => {
    this._oneMouseTouchMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragMove = (ev) => {
    this._onDragMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragEnd = (ev) => {
    this._onDragEnd(ev);
  };
  /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @param event - The event arguments.
     */
  _onDragStart(event) {
    let stage = null;
    if (event.which === 3) {
      return;
    }
    stage = this._prepareDragging(event);
    this._drag.time = (/* @__PURE__ */ new Date()).getTime();
    this._drag.target = event.target;
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this._pointer(event);
    this.listenerMouseUp = this.renderer.listen(document, "mouseup", this.bindOnDragEnd);
    this.listenerTouchEnd = this.renderer.listen(document, "touchend", this.bindOnDragEnd);
    this.zone.runOutsideAngular(() => {
      this.listenerOneMouseMove = this.renderer.listen(document, "mousemove", this.bindOneMouseTouchMove);
      this.listenerOneTouchMove = this.renderer.listen(document, "touchmove", this.bindOneMouseTouchMove);
    });
  }
  /**
   * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
   * @param event event objech of mouse or touch event
   */
  _oneMouseTouchMove(event) {
    const delta = this._difference(this._drag.pointer, this._pointer(event));
    if (this.listenerATag) {
      this.listenerATag();
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is("valid")) {
      return;
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is("valid")) {
      return;
    }
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    this._drag.moving = true;
    this.blockClickAnchorInDragging(event);
    this.listenerMouseMove = this.renderer.listen(document, "mousemove", this.bindOnDragMove);
    this.listenerTouchMove = this.renderer.listen(document, "touchmove", this.bindOnDragMove);
    event.preventDefault();
    this._enterDragging();
    this._oneDragMove$.next(event);
  }
  /**
   * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
   * @param event event object
   */
  blockClickAnchorInDragging(event) {
    let target = event.target;
    while (target && !(target instanceof HTMLAnchorElement)) {
      target = target.parentElement;
    }
    if (target instanceof HTMLAnchorElement) {
      this.listenerATag = this.renderer.listen(target, "click", () => false);
    }
  }
  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @param event - The event arguments.
   */
  _onDragMove(event) {
    let stage;
    const stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
    if (stageOrExit === false) {
      return;
    }
    stage = stageOrExit;
    event.preventDefault();
    this._drag.stage.current = stage;
    this._animate(stage.x - this._drag.stage.start.x);
  }
  /**
   * Moves .owl-stage left-right
   * @param coordinate coordinate to be set to .owl-stage
   */
  _animate(coordinate) {
    this.renderer.setStyle(this.el.nativeElement.children[0], "transform", `translate3d(${coordinate}px,0px,0px`);
    this.renderer.setStyle(this.el.nativeElement.children[0], "transition", "0s");
  }
  /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @param event - The event arguments.
     */
  _onDragEnd(event) {
    this.carouselService.owlDOMData.isGrab = false;
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    if (this._drag.moving) {
      this.renderer.setStyle(this.el.nativeElement.children[0], "transform", ``);
      this.renderer.setStyle(this.el.nativeElement.children[0], "transition", this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1e3 + "s");
      this._finishDragging(event);
      this.listenerMouseMove();
      this.listenerTouchMove();
    }
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null,
      active: false,
      moving: false
    };
    this.listenerMouseUp();
    this.listenerTouchEnd();
  }
  /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * @param event - The event arguments.
     * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
     */
  _prepareDragging(event) {
    return this.carouselService.prepareDragging(event);
  }
  /**
   * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
   */
  _oneClickHandler = () => {
    this.listenerOneClick = this.renderer.listen(this._drag.target, "click", () => false);
    this.listenerOneClick();
  };
  /**
   * Finishes dragging
   * @param event object event of 'mouseUp' of 'touchend' events
   */
  _finishDragging(event) {
    this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
  }
  /**
     * Gets unified pointer coordinates from event.
     * @param event The `mousedown` or `touchstart` event.
     * @returns Contains `x` and `y` coordinates of current pointer position.
     */
  _pointer(event) {
    return this.carouselService.pointer(event);
  }
  /**
     * Gets the difference of two vectors.
     * @param first The first vector.
     * @param second The second vector.
     * @returns The difference.
     */
  _difference(firstC, second) {
    return this.carouselService.difference(firstC, second);
  }
  /**
     * Checks whether the carousel is in a specific state or not.
     * @param specificState The state to check.
     * @returns The flag which indicates if the carousel is busy.
     */
  _is(specificState) {
    return this.carouselService.is(specificState);
  }
  /**
  * Enters a state.
  * @param name The state name.
  */
  _enter(name) {
    this.carouselService.enter(name);
  }
  /**
     * Sends all data needed for View.
     */
  _sendChanges() {
    this.carouselService.sendChanges();
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
     * Enters into a 'dragging' state
     */
  _enterDragging() {
    this.carouselService.enterDragging();
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.animateService.clear(id);
  }
  static \u0275fac = function StageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StageComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(AnimateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StageComponent,
    selectors: [["owl-stage"]],
    hostBindings: function StageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDown($event);
        })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
          return ctx.onTouchCancel($event);
        })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
          return ctx.onDragStart();
        })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
          return ctx.onSelectStart();
        });
      }
    },
    inputs: {
      owlDraggable: "owlDraggable",
      stageData: "stageData",
      slidesData: "slidesData"
    },
    decls: 3,
    vars: 8,
    consts: [[1, "owl-stage", 3, "transitionend", "ngStyle"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "animationend", "ngClass", "ngStyle"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0);
        \u0275\u0275listener("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
          return ctx.onTransitionEnd();
        });
        \u0275\u0275template(2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction5(2, _c0, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.slidesData);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
    encapsulation: 2,
    data: {
      animation: [trigger("autoHeight", [state("nulled", style({
        height: 0
      })), state("full", style({
        height: "*"
      })), transition("full => nulled", [
        // style({height: '*'}),
        animate("700ms 350ms")
      ]), transition("nulled => full", [
        // style({height: 0}),
        animate(350)
      ])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StageComponent, [{
    type: Component,
    args: [{
      selector: "owl-stage",
      template: `
    <div>
      <div class="owl-stage" [ngStyle]="{'width': stageData.width + 'px',
                                        'transform': stageData.transform,
                                        'transition': stageData.transition,
                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',
                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }"
          (transitionend)="onTransitionEnd()">
        <ng-container *ngFor="let slide of slidesData; let i = index">
          <div class="owl-item" [ngClass]="slide.classes"
                                [ngStyle]="{'width': slide.width + 'px',
                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',
                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',
                                            'left': slide.left}"
                                (animationend)="clear(slide.id)"
                                [@autoHeight]="slide.heightState">
            <ng-template *ngIf="slide.load" [ngTemplateOutlet]="slide.tplRef" [ngTemplateOutletContext]="{ $implicit: preparePublicSlide(slide), index: i }"></ng-template>
          </div><!-- /.owl-item -->
        </ng-container>
      </div><!-- /.owl-stage -->
    </div>
  `,
      animations: [trigger("autoHeight", [state("nulled", style({
        height: 0
      })), state("full", style({
        height: "*"
      })), transition("full => nulled", [
        // style({height: '*'}),
        animate("700ms 350ms")
      ]), transition("nulled => full", [
        // style({height: 0}),
        animate(350)
      ])])]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: CarouselService
  }, {
    type: AnimateService
  }], {
    owlDraggable: [{
      type: Input
    }],
    stageData: [{
      type: Input
    }],
    slidesData: [{
      type: Input
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onTouchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    onTouchCancel: [{
      type: HostListener,
      args: ["touchcancel", ["$event"]]
    }],
    onDragStart: [{
      type: HostListener,
      args: ["dragstart"]
    }],
    onSelectStart: [{
      type: HostListener,
      args: ["selectstart"]
    }]
  });
})();
var CarouselComponent = class _CarouselComponent {
  el;
  resizeService;
  carouselService;
  navigationService;
  autoplayService;
  lazyLoadService;
  animateService;
  autoHeightService;
  hashService;
  logger;
  changeDetectorRef;
  slides;
  translated = new EventEmitter();
  dragging = new EventEmitter();
  change = new EventEmitter();
  changed = new EventEmitter();
  initialized = new EventEmitter();
  /**
   * Width of carousel window (tag with class .owl-carousel), in wich we can see moving sliders
   */
  carouselWindowWidth;
  /**
   * Subscription to 'resize' event
   */
  resizeSubscription;
  /**
   * Subscription merge Observable, which merges all Observables in the component except 'resize' Observable and this.slides.changes()
   */
  _allObservSubscription;
  /**
   * Subscription to `this.slides.changes().
   * It could be included in 'this._allObservSubscription', but that subcription get created during the initializing of component
   * and 'this.slides' are undefined at that moment. So it's needed to wait for initialization of content.
   */
  _slidesChangesSubscription;
  /**
   * Current settings for the carousel.
   */
  owlDOMData;
  /**
   * Data of owl-stage
   */
  stageData;
  /**
   *  Data of every slide
   */
  slidesData = [];
  /**
   * Data of navigation block
   */
  navData;
  /**
   * Data of dots block
   */
  dotsData;
  /**
   * Data, wich are passed out of carousel after ending of transioning of carousel
   */
  slidesOutputData;
  /**
   * Shows whether carousel is loaded of not.
   */
  carouselLoaded = false;
  /**
   * User's options
   */
  options;
  prevOptions;
  /**
   * Observable for getting current View Settings
   */
  _viewCurSettings$;
  /**
   * Observable for catching the end of transition of carousel
   */
  _translatedCarousel$;
  /**
   * Observable for catching the start of dragging of the carousel
   */
  _draggingCarousel$;
  /**
   * Observable for catching the start of changing of the carousel
   */
  _changeCarousel$;
  /**
   * Observable for catching the moment when the data about slides changed, more exactly when the position changed.
   */
  _changedCarousel$;
  /**
   * Observable for catching the initialization of changing the carousel
   */
  _initializedCarousel$;
  /**
   * Observable for merging all Observables and creating one subscription
   */
  _carouselMerge$;
  docRef;
  constructor(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
    this.el = el;
    this.resizeService = resizeService;
    this.carouselService = carouselService;
    this.navigationService = navigationService;
    this.autoplayService = autoplayService;
    this.lazyLoadService = lazyLoadService;
    this.animateService = animateService;
    this.autoHeightService = autoHeightService;
    this.hashService = hashService;
    this.logger = logger;
    this.changeDetectorRef = changeDetectorRef;
    this.docRef = docRef;
  }
  onVisibilityChange(ev) {
    if (!this.carouselService.settings.autoplay) return;
    switch (this.docRef.visibilityState) {
      case "visible":
        !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
        break;
      case "hidden":
        this.autoplayService.pause();
        break;
      default:
        break;
    }
  }
  ngOnInit() {
    this.spyDataStreams();
    this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
  }
  ngOnChanges() {
    if (this.prevOptions !== this.options) {
      if (this.prevOptions && this.slides?.toArray().length) {
        this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
        this.carouselService.initialize(this.slides.toArray());
      } else if (this.prevOptions && !this.slides?.toArray().length) {
        this.carouselLoaded = false;
        this.logger.log(`There are no slides to show. So the carousel won't be re-rendered`);
      } else {
        this.carouselLoaded = false;
      }
      this.prevOptions = this.options;
    }
  }
  ngAfterContentInit() {
    if (this.slides.toArray().length) {
      this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
      this.carouselService.initialize(this.slides.toArray());
      this._winResizeWatcher();
    } else {
      this.logger.log(`There are no slides to show. So the carousel won't be rendered`);
    }
    this._slidesChangesSubscription = this.slides.changes.pipe(tap((slides) => {
      this.carouselService.setup(this.carouselWindowWidth, slides.toArray(), this.options);
      this.carouselService.initialize(slides.toArray());
      if (!slides.toArray().length) {
        this.carouselLoaded = false;
      }
      if (slides.toArray().length && !this.resizeSubscription) {
        this._winResizeWatcher();
      }
    })).subscribe(() => {
    });
  }
  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    if (this._slidesChangesSubscription) {
      this._slidesChangesSubscription.unsubscribe();
    }
    if (this._allObservSubscription) {
      this._allObservSubscription.unsubscribe();
    }
  }
  /**
   * Joins the observable login in one place: sets values to some observables, merges this observables and
   * subcribes to merge func
   */
  spyDataStreams() {
    this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(tap((data) => {
      this.owlDOMData = data.owlDOMData;
      this.stageData = data.stageData;
      this.slidesData = data.slidesData;
      if (!this.carouselLoaded) {
        this.carouselLoaded = true;
      }
      this.navData = data.navData;
      this.dotsData = data.dotsData;
      this.changeDetectorRef.markForCheck();
    }));
    this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.initialized.emit(this.slidesOutputData);
    }));
    this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.translated.emit(this.slidesOutputData);
    }));
    this._changeCarousel$ = this.carouselService.getChangeState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.change.emit(this.slidesOutputData);
    }));
    this._changedCarousel$ = this.carouselService.getChangeState().pipe(switchMap((value) => {
      const changedPosition = of(value).pipe(filter(() => value.property.name === "position"), switchMap(() => from(this.slidesData)), skip(value.property.value), take(this.carouselService.settings.items), map((slide) => {
        const clonedIdPrefix = this.carouselService.clonedIdPrefix;
        const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
        return __spreadProps(__spreadValues({}, slide), {
          id,
          isActive: true
        });
      }), toArray(), map((slides) => {
        return {
          slides,
          startPosition: this.carouselService.relative(value.property.value)
        };
      }));
      return merge(changedPosition);
    }), tap((slidesData) => {
      this.gatherTranslatedData();
      this.changed.emit(slidesData.slides.length ? slidesData : this.slidesOutputData);
    }));
    this._draggingCarousel$ = this.carouselService.getDragState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.dragging.emit({
        dragging: true,
        data: this.slidesOutputData
      });
    }), switchMap(() => this.carouselService.getDraggedState().pipe(map(() => !!this.carouselService.is("animating")))), switchMap((anim) => {
      if (anim) {
        return this.carouselService.getTranslatedState().pipe(first());
      } else {
        return of("not animating");
      }
    }), tap(() => {
      this.dragging.emit({
        dragging: false,
        data: this.slidesOutputData
      });
    }));
    this._carouselMerge$ = merge(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
    this._allObservSubscription = this._carouselMerge$.subscribe(() => {
    });
  }
  /**
   * Init subscription to resize event and attaches handler for this event
   */
  _winResizeWatcher() {
    if (Object.keys(this.carouselService._options.responsive).length) {
      this.resizeSubscription = this.resizeService.onResize$.pipe(filter(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector(".owl-carousel").clientWidth), delay(this.carouselService.settings.responsiveRefreshRate)).subscribe(() => {
        this.carouselService.onResize(this.el.nativeElement.querySelector(".owl-carousel").clientWidth);
        this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
      });
    }
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
   * Handler for click event, attached to next button
   */
  next() {
    if (!this.carouselLoaded) return;
    this.navigationService.next(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to prev button
   */
  prev() {
    if (!this.carouselLoaded) return;
    this.navigationService.prev(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to dots
   */
  moveByDot(dotId) {
    if (!this.carouselLoaded) return;
    this.navigationService.moveByDot(dotId);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id fragment of url
   */
  to(id) {
    if (!this.carouselLoaded) return;
    this.navigationService.toSlideById(id);
  }
  /**
   * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
   */
  gatherTranslatedData() {
    let startPosition;
    const clonedIdPrefix = this.carouselService.clonedIdPrefix;
    const activeSlides = this.slidesData.filter((slide) => slide.isActive === true).map((slide) => {
      const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
      return {
        id,
        width: slide.width,
        marginL: slide.marginL,
        marginR: slide.marginR,
        center: slide.isCentered
      };
    });
    startPosition = this.carouselService.relative(this.carouselService.current());
    this.slidesOutputData = {
      startPosition,
      slides: activeSlides
    };
  }
  /**
   * Starts pausing
   */
  startPausing() {
    this.autoplayService.startPausing();
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayML() {
    this.autoplayService.startPlayingMouseLeave();
  }
  /**
   * Starts playing after touch ends
   */
  startPlayTE() {
    this.autoplayService.startPlayingTouchEnd();
  }
  stopAutoplay() {
    this.autoplayService.isAutoplayStopped = true;
    this.autoplayService.stop();
  }
  startAutoplay() {
    this.autoplayService.isAutoplayStopped = false;
    this.autoplayService.play();
  }
  static \u0275fac = function CarouselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ResizeService), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(AutoplayService), \u0275\u0275directiveInject(LazyLoadService), \u0275\u0275directiveInject(AnimateService), \u0275\u0275directiveInject(AutoHeightService), \u0275\u0275directiveInject(HashService), \u0275\u0275directiveInject(OwlLogger), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselComponent,
    selectors: [["owl-carousel-o"]],
    contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CarouselSlideDirective, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slides = _t);
      }
    },
    hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
          return ctx.onVisibilityChange($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      options: "options"
    },
    outputs: {
      translated: "translated",
      dragging: "dragging",
      change: "change",
      changed: "changed",
      initialized: "initialized"
    },
    features: [\u0275\u0275ProvidersFeature([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService]), \u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 9,
    consts: [["owlCarousel", ""], [1, "owl-carousel", "owl-theme", 3, "mouseover", "mouseleave", "touchstart", "touchend", "ngClass"], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "click", "ngClass", "innerHTML"], [1, "owl-next", 3, "click", "ngClass", "innerHTML"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "click", "ngClass"], [3, "innerHTML"]],
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayML());
        })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayTE());
        });
        \u0275\u0275template(2, CarouselComponent_div_2_Template, 2, 6, "div", 2)(3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.carouselLoaded);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.slides.toArray().length);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, StageComponent],
    styles: [".owl-theme[_ngcontent-%COMP%]{display:block}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "owl-carousel-o",
      template: `
    <div class="owl-carousel owl-theme" #owlCarousel
      [ngClass]="{'owl-rtl': owlDOMData?.rtl,
                  'owl-loaded': owlDOMData?.isLoaded,
                  'owl-responsive': owlDOMData?.isResponsive,
                  'owl-drag': owlDOMData?.isMouseDragable,
                  'owl-grab': owlDOMData?.isGrab}"
      (mouseover)="startPausing()"
      (mouseleave)="startPlayML()"
      (touchstart)="startPausing()"
      (touchend)="startPlayTE()">

      <div *ngIf="carouselLoaded" class="owl-stage-outer">
        <owl-stage [owlDraggable]="{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}"
                    [stageData]="stageData"
                    [slidesData]="slidesData"></owl-stage>
      </div> <!-- /.owl-stage-outer -->
      <ng-container *ngIf="slides.toArray().length">
        <div class="owl-nav" [ngClass]="{'disabled': navData?.disabled}">
          <div class="owl-prev" [ngClass]="{'disabled': navData?.prev?.disabled}" (click)="prev()" [innerHTML]="navData?.prev?.htmlText"></div>
          <div class="owl-next" [ngClass]="{'disabled': navData?.next?.disabled}" (click)="next()" [innerHTML]="navData?.next?.htmlText"></div>
        </div> <!-- /.owl-nav -->
        <div class="owl-dots" [ngClass]="{'disabled': dotsData?.disabled}">
          <div *ngFor="let dot of dotsData?.dots" class="owl-dot" [ngClass]="{'active': dot.active, 'owl-dot-text': dot.showInnerContent}" (click)="moveByDot(dot.id)">
            <span [innerHTML]="dot.innerContent"></span>
          </div>
        </div> <!-- /.owl-dots -->
      </ng-container>
    </div> <!-- /.owl-carousel owl-loaded -->
  `,
      providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".owl-theme{display:block}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ResizeService
  }, {
    type: CarouselService
  }, {
    type: NavigationService
  }, {
    type: AutoplayService
  }, {
    type: LazyLoadService
  }, {
    type: AnimateService
  }, {
    type: AutoHeightService
  }, {
    type: HashService
  }, {
    type: OwlLogger
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    slides: [{
      type: ContentChildren,
      args: [CarouselSlideDirective]
    }],
    translated: [{
      type: Output
    }],
    dragging: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    changed: [{
      type: Output
    }],
    initialized: [{
      type: Output
    }],
    options: [{
      type: Input
    }],
    onVisibilityChange: [{
      type: HostListener,
      args: ["document:visibilitychange", ["$event"]]
    }]
  });
})();
var OwlRouterLinkDirective = class _OwlRouterLinkDirective {
  router;
  route;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  // TODO(issue/24571): remove '!'.
  preserve;
  constructor(router, route, tabIndex, renderer, el) {
    this.router = router;
    this.route = route;
    if (tabIndex == null) {
      renderer.setAttribute(el.nativeElement, "tabindex", "0");
    }
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  /**
   * @deprecated 4.0.0 use `queryParamsHandling` instead.
   */
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  onClick() {
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    if (this.stopLink) {
      return false;
    }
    this.router.navigateByUrl(this.urlTree, extras);
    return true;
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwlRouterLinkDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkDirective,
    selectors: [["", "owlRouterLink", "", 5, "a"]],
    hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a)[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var OwlRouterLinkWithHrefDirective = class _OwlRouterLinkWithHrefDirective {
  router;
  route;
  locationStrategy;
  // TODO(issue/24571): remove '!'.
  target;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  subscription;
  // TODO(issue/24571): remove '!'.
  preserve;
  // the url displayed on the anchor element.
  // TODO(issue/24571): remove '!'.
  href;
  constructor(router, route, locationStrategy) {
    this.router = router;
    this.route = route;
    this.locationStrategy = locationStrategy;
    this.subscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.updateTargetUrlAndHref();
      }
    });
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  ngOnChanges(changes) {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClick(button, ctrlKey, metaKey, shiftKey) {
    if (button !== 0 || ctrlKey || metaKey || shiftKey) {
      return true;
    }
    if (typeof this.target === "string" && this.target !== "_self") {
      return true;
    }
    if (this.stopLink) {
      return false;
    }
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    this.router.navigateByUrl(this.urlTree, extras);
    return false;
  }
  updateTargetUrlAndHref() {
    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkWithHrefDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwlRouterLinkWithHrefDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkWithHrefDirective,
    selectors: [["a", "owlRouterLink", ""]],
    hostVars: 2,
    hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("href", ctx.href, \u0275\u0275sanitizeUrl);
        \u0275\u0275attribute("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkWithHrefDirective, [{
    type: Directive,
    args: [{
      selector: "a[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    href: [{
      type: HostBinding
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.metaKey", "$event.shiftKey"]]
    }]
  });
})();
function attrBoolValue(s) {
  return s === "" || !!s;
}
var CarouselModule = class _CarouselModule {
  static \u0275fac = function CarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule
        // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
        // RouterModule.forChild(routes)
      ],
      declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
    }]
  }], null, null);
})();

// src/app/shared/store/action/cart.action.ts
var GetCartItems = class {
  static {
    this.type = "[Cart] Get";
  }
};
var AddToCartLocalStorage = class {
  static {
    this.type = "[Cart] Local Storage Add";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var AddToCart = class {
  static {
    this.type = "[Cart] Add";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateCart = class {
  static {
    this.type = "[Cart] Update";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var ReplaceCart = class {
  static {
    this.type = "[Cart] Replace";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var SyncCart = class {
  static {
    this.type = "[Cart] Sync";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DeleteCart = class {
  static {
    this.type = "[Cart] Delete";
  }
  constructor(id) {
    this.id = id;
  }
};
var CloseStickyCart = class {
  static {
    this.type = "[Cart] Sticky Close";
  }
  constructor() {
  }
};
var ToggleSidebarCart = class {
  static {
    this.type = "[Cart] Toggle Sidebar";
  }
  constructor(value) {
    this.value = value;
  }
};
var ClearCart = class {
  static {
    this.type = "[Cart] Clear";
  }
  constructor() {
  }
};

// src/app/shared/services/cart.service.ts
var CartService = class _CartService {
  constructor(http) {
    this.http = http;
    this.subjectQty = new Subject();
  }
  getCartItems() {
    return this.http.get(`${environment.URL}/cart.json`);
  }
  updateQty() {
    this.subjectQty.next(true);
  }
  getUpdateQtyClickEvent() {
    return this.subjectQty.asObservable();
  }
  static {
    this.\u0275fac = function CartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/cart.state.ts
var CartState = class CartState2 {
  constructor(cartService, notificationService, store) {
    this.cartService = cartService;
    this.notificationService = notificationService;
    this.store = store;
  }
  ngxsOnInit(ctx) {
    ctx.dispatch(new ToggleSidebarCart(false));
    ctx.dispatch(new CloseStickyCart());
  }
  static cartItems(state2) {
    return state2.items;
  }
  static cartTotal(state2) {
    return state2.total;
  }
  static cartHasDigital(state2) {
    return state2.is_digital_only;
  }
  static stickyCart(state2) {
    return state2.stickyCartOpen;
  }
  static sidebarCartOpen(state2) {
    return state2.sidebarCartOpen;
  }
  getCartItems(ctx) {
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return;
    }
    return this.cartService.getCartItems().pipe(tap({
      next: (result) => {
        result.items.filter((item) => {
          if (item?.variation) {
            item.variation.selected_variation = item?.variation?.attribute_values?.map((values) => values.value)?.join("/");
          }
        });
        ctx.patchState(result);
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  add(ctx, action) {
    if (action.payload.id) {
      return this.store.dispatch(new UpdateCart(action.payload));
    }
    return this.store.dispatch(new AddToCartLocalStorage(action.payload));
  }
  addToLocalStorage(ctx, action) {
    let salePrice = action.payload.variation ? action.payload.variation.sale_price : action.payload.product?.sale_price;
    let result = {
      is_digital_only: false,
      items: [{
        id: Number(Math.floor(Math.random() * 1e4).toString().padStart(4, "0")),
        // Generate Random Id
        quantity: action.payload.quantity,
        sub_total: salePrice ? salePrice * action.payload.quantity : 0,
        product: action.payload.product,
        product_id: action.payload.product_id,
        wholesale_price: null,
        variation: action.payload.variation,
        variation_id: action.payload.variation_id
      }]
    };
    const state2 = ctx.getState();
    const cart = [...state2.items];
    const index = cart.findIndex((item) => item.id === result.items[0].id);
    let output = __spreadValues({}, state2);
    if (index == -1) {
      if (!state2.items.length) {
        output.items = [...state2.items, ...result.items];
      } else {
        if (result.items[0].variation) {
          if (state2.items.find((item) => item.variation_id == result.items[0].variation_id)) {
            cart.find((item) => {
              if (item.variation_id) {
                if (item.variation_id == result.items[0].variation_id) {
                  const productQty = item?.variation?.quantity;
                  if (productQty < item?.quantity + action?.payload.quantity) {
                    this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
                    return false;
                  }
                  item.quantity = item?.quantity + result.items[0].quantity;
                  item.sub_total = item?.quantity * item?.variation?.sale_price;
                }
              }
            });
          } else {
            output.items = [...state2.items, ...result.items];
          }
        } else if (state2.items.find((item) => item.product_id == result.items[0].product_id)) {
          cart.find((item) => {
            if (item.product_id == result.items[0].product_id) {
              const productQty = item?.product?.quantity;
              if (productQty < item?.quantity + action?.payload.quantity) {
                this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
                return false;
              }
              item.quantity = item?.quantity + result.items[0].quantity;
              item.sub_total = item?.quantity * item.product.sale_price;
            }
          });
        } else {
          output.items = [...state2.items, ...result.items];
        }
      }
    }
    output.items.filter((item) => {
      if (item?.variation) {
        item.variation.selected_variation = item?.variation?.attribute_values?.map((values) => values.value)?.join("/");
      }
    });
    output.total = output.items.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    output.stickyCartOpen = true;
    output.sidebarCartOpen = true;
    output.is_digital_only = output.items.map((item) => item.product && item?.product?.product_type).every((item) => item == "digital");
    ctx.patchState(output);
    setTimeout(() => {
      this.store.dispatch(new CloseStickyCart());
    }, 1500);
  }
  update(ctx, action) {
    const state2 = ctx.getState();
    const cart = [...state2.items];
    const index = cart.findIndex((item) => Number(item.id) === Number(action.payload.id));
    if (cart[index]?.variation && action.payload.variation_id && Number(cart[index].id) === Number(action.payload.id) && Number(cart[index]?.variation_id) != Number(action.payload.variation_id)) {
      return this.store.dispatch(new ReplaceCart(action.payload));
    }
    const productQty = cart[index]?.variation ? cart[index]?.variation?.quantity : cart[index]?.product?.quantity;
    if (productQty < cart[index]?.quantity + action?.payload.quantity) {
      this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
      return false;
    }
    if (cart[index]?.variation) {
      cart[index].variation.selected_variation = cart[index]?.variation?.attribute_values?.map((values) => values.value)?.join("/");
    }
    cart[index].quantity = cart[index]?.quantity + action?.payload.quantity;
    cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
    if (cart[index].product?.wholesales?.length) {
      let wholesale = cart[index].product.wholesales.find((value) => value.min_qty <= cart[index].quantity && value.max_qty >= cart[index].quantity) || null;
      if (wholesale && cart[index].product.wholesale_price_type == "fixed") {
        cart[index].sub_total = cart[index].quantity * wholesale.value;
        cart[index].wholesale_price = cart[index].sub_total / cart[index].quantity;
      } else if (wholesale && cart[index].product.wholesale_price_type == "percentage") {
        cart[index].sub_total = cart[index].quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
        cart[index].sub_total = cart[index].sub_total - cart[index].sub_total * (wholesale.value / 100);
        cart[index].wholesale_price = cart[index].sub_total / cart[index].quantity;
      } else {
        cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
        cart[index].wholesale_price = null;
      }
    } else {
      cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
      cart[index].wholesale_price = null;
    }
    if (cart[index].quantity < 1) {
      this.store.dispatch(new DeleteCart(action.payload.id));
      return of();
    }
    let total = state2.items.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    ctx.patchState(__spreadProps(__spreadValues({}, state2), {
      is_digital_only: cart.map((item) => item.product && item?.product?.product_type).every((item) => item == "digital"),
      total
    }));
    if (!this.store.selectSnapshot((state3) => state3.auth && state3.auth.access_token)) {
      return;
    }
  }
  replace(ctx, action) {
    const state2 = ctx.getState();
    const cart = [...state2.items];
    const index = cart.findIndex((item) => Number(item.id) === Number(action.payload.id));
    if (cart[index]?.variation && action.payload.variation_id && Number(cart[index].id) === Number(action.payload.id) && Number(cart[index]?.variation_id) != Number(action.payload.variation_id)) {
      cart[index].variation = action.payload.variation;
      cart[index].variation_id = action.payload.variation_id;
      cart[index].variation.selected_variation = cart[index]?.variation?.attribute_values?.map((values) => values.value)?.join("/");
    }
    cart[index].quantity = 0;
    const productQty = cart[index]?.variation ? cart[index]?.variation?.quantity : cart[index]?.product?.quantity;
    if (productQty < cart[index]?.quantity + action?.payload.quantity) {
      this.notificationService.showError(`You can not add more items than available. In stock ${productQty} items.`);
      return false;
    }
    cart[index].quantity = cart[index]?.quantity + action?.payload.quantity;
    cart[index].sub_total = cart[index]?.quantity * (cart[index]?.variation ? cart[index]?.variation?.sale_price : cart[index].product.sale_price);
    if (cart[index].quantity < 1) {
      this.store.dispatch(new DeleteCart(action.payload.id));
      return of();
    }
    let total = state2.items.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    ctx.patchState(__spreadProps(__spreadValues({}, state2), {
      total
    }));
    if (!this.store.selectSnapshot((state3) => state3.auth && state3.auth.access_token)) {
      return;
    }
  }
  delete(ctx, { id }) {
    const state2 = ctx.getState();
    let cart = state2.items.filter((value) => value.id !== id);
    let total = cart.reduce((prev, curr) => {
      return prev + Number(curr.sub_total);
    }, 0);
    ctx.patchState({
      items: cart,
      is_digital_only: state2.items.map((item) => item.product && item?.product?.product_type).every((item) => item == "digital"),
      total
    });
    if (!this.store.selectSnapshot((state3) => state3.auth && state3.auth.access_token)) {
      return;
    }
  }
  syncCart(ctx, action) {
  }
  closeStickyCart(ctx) {
    const state2 = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state2), {
      stickyCartOpen: false
    }));
  }
  toggleSidebarCart(ctx, { value }) {
    const state2 = ctx.getState();
    ctx.patchState(__spreadProps(__spreadValues({}, state2), {
      sidebarCartOpen: value
    }));
  }
  clearCart(ctx) {
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return ctx.patchState({
        items: [],
        total: 0
      });
    } else {
      return ctx.patchState({
        items: [],
        total: 0
      });
    }
  }
  static {
    this.\u0275fac = function CartState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CartState2)(\u0275\u0275inject(CartService), \u0275\u0275inject(NotificationService), \u0275\u0275inject(Store));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CartState2, factory: CartState2.\u0275fac });
  }
};
__decorate([
  Action(GetCartItems)
], CartState.prototype, "getCartItems", null);
__decorate([
  Action(AddToCart)
], CartState.prototype, "add", null);
__decorate([
  Action(AddToCartLocalStorage)
], CartState.prototype, "addToLocalStorage", null);
__decorate([
  Action(UpdateCart)
], CartState.prototype, "update", null);
__decorate([
  Action(ReplaceCart)
], CartState.prototype, "replace", null);
__decorate([
  Action(DeleteCart)
], CartState.prototype, "delete", null);
__decorate([
  Action(SyncCart)
], CartState.prototype, "syncCart", null);
__decorate([
  Action(CloseStickyCart)
], CartState.prototype, "closeStickyCart", null);
__decorate([
  Action(ToggleSidebarCart)
], CartState.prototype, "toggleSidebarCart", null);
__decorate([
  Action(ClearCart)
], CartState.prototype, "clearCart", null);
__decorate([
  Selector()
], CartState, "cartItems", null);
__decorate([
  Selector()
], CartState, "cartTotal", null);
__decorate([
  Selector()
], CartState, "cartHasDigital", null);
__decorate([
  Selector()
], CartState, "stickyCart", null);
__decorate([
  Selector()
], CartState, "sidebarCartOpen", null);
CartState = __decorate([
  State({
    name: "cart",
    defaults: {
      items: [],
      total: 0,
      is_digital_only: null,
      stickyCartOpen: false,
      sidebarCartOpen: false
    }
  })
], CartState);

// src/app/shared/components/widgets/product-box/widgets/product-cart-button/product-cart-button.component.ts
function ProductCartButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275listener("click", function ProductCartButtonComponent_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product, 1));
    });
    \u0275\u0275element(1, "i", 2);
    \u0275\u0275elementEnd();
  }
}
var ProductCartButtonComponent = class _ProductCartButtonComponent {
  constructor(store, modal) {
    this.store = store;
    this.modal = modal;
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product.id);
    });
  }
  openModal(product) {
  }
  addToCart(product, qty) {
    const params = {
      id: this.cartItem ? this.cartItem.id : null,
      product,
      product_id: product?.id,
      variation_id: this.cartItem ? this.cartItem?.variation_id : null,
      variation: this.cartItem ? this.cartItem?.variation : null,
      quantity: qty
    };
    this.store.dispatch(new AddToCart(params));
  }
  static {
    this.\u0275fac = function ProductCartButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductCartButtonComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCartButtonComponent, selectors: [["app-product-cart-button"]], inputs: { product: "product", type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["href", "javascript:void(0)", 1, "cart"], ["href", "javascript:void(0)", 1, "cart", 3, "click"], [1, "ri-shopping-cart-line"]], template: function ProductCartButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductCartButtonComponent_Conditional_0_Template, 2, 0, "a", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.type == "wishlist" ? 0 : -1);
      }
    }, dependencies: [CommonModule, TranslateModule] });
  }
};
__decorate([
  Select(CartState.cartItems)
], ProductCartButtonComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCartButtonComponent, { className: "ProductCartButtonComponent" });
})();

// src/app/shared/store/action/wishlist.action.ts
var GetWishlist = class {
  static {
    this.type = "[Wishlist] Get";
  }
};
var AddToWishlist = class {
  static {
    this.type = "[Wishlist] post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DeleteWishlist = class {
  static {
    this.type = "[Wishlist] delete";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/data/owl-carousel.ts
var homeBannerSlider = {
  loop: true,
  nav: true,
  dots: false,
  autoHeight: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>"
  ],
  responsive: {
    0: {
      items: 1
    }
  }
};
var productSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 6,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    247: {
      items: 2,
      margin: 16
    },
    650: {
      items: 3
    },
    1e3: {
      items: 4
    },
    1199: {
      items: 5
    },
    1400: {
      items: 6
    }
  }
};
var horizontalProductSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 4,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    890: {
      items: 2
    },
    999: {
      items: 3
    }
  }
};
var BlogSlider = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5e3,
  margin: 24,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    668: {
      items: 2
    },
    999: {
      items: 3
    }
  }
};
var SocialMediaSlider = {
  loop: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 3
    },
    480: {
      items: 4
    },
    600: {
      items: 5
    },
    1024: {
      items: 6
    },
    1367: {
      items: 7
    }
  }
};
var BrandSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 20,
  responsive: {
    0: {
      items: 2,
      margin: 12
      // autoHeight:true,
    },
    480: {
      items: 3,
      margin: 12
    },
    767: {
      items: 4,
      margin: 20
    },
    1024: {
      items: 5,
      margin: 20
    },
    1500: {
      items: 6,
      margin: 20
    }
  }
};
var categorySlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 2,
      margin: 12,
      autoHeight: true
    },
    480: {
      items: 3,
      margin: 12,
      autoHeight: true
    },
    576: {
      margin: 12
    },
    668: {
      items: 4
    },
    900: {
      items: 5
    }
  }
};
var FurnitureCategorySlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 2,
      mouseDrag: true
    },
    480: {
      items: 3,
      mouseDrag: true
    },
    768: {
      items: 4,
      mouseDrag: true
    },
    1024: {
      items: 5,
      mouseDrag: true
    },
    1368: {
      items: 6,
      mouseDrag: false
    }
  }
};
var productMainThumbSlider = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  dotsData: true,
  autoplayHoverPause: true,
  nav: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>"
  ],
  autoplay: false,
  navSpeed: 300,
  autoHeight: true,
  responsive: {
    0: {
      items: 1
    }
  }
};
var productThumbSlider = {
  loop: false,
  dots: false,
  margin: 16,
  navSpeed: 300,
  autoHeight: true,
  items: 4,
  responsive: {
    0: {
      items: 2,
      autoHeight: true
    },
    400: {
      items: 3
    },
    485: {
      items: 4
    }
  }
};
var productSliderLayout = {
  items: 4,
  loop: true,
  dots: false,
  margin: 15,
  navSpeed: 300,
  responsive: {
    0: {
      items: 2,
      autoplay: true,
      autoplayTimeout: 4500
    },
    527: {
      items: 3,
      autoplay: true,
      autoplayTimeout: 4500
    },
    750: {
      items: 4
    }
  }
};
var JewelleryCategorySlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 1,
      mouseDrag: true,
      autoHeight: true
    },
    562: {
      items: 2,
      mouseDrag: true
    },
    992: {
      items: 3,
      mouseDrag: true
    },
    1200: {
      items: 4,
      mouseDrag: false
    }
  }
};
var bagsProduct = {
  loop: true,
  dots: false,
  nav: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>"
  ],
  responsive: {
    0: {
      items: 1
    }
  }
};
var collectionCategorySlider = {
  loop: true,
  nav: false,
  dots: false,
  items: 7,
  margin: 20,
  responsive: {
    0: {
      margin: 16,
      items: 2,
      autoHeight: true
    },
    400: {
      margin: 16,
      items: 3
    },
    490: {
      margin: 16,
      items: 4
    },
    680: {
      items: 5
    },
    880: {
      items: 6
    },
    1024: {
      items: 7
    }
  }
};
var toolsCategorySlider = {
  loop: false,
  nav: false,
  dots: false,
  margin: 20,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    586: {
      items: 2
    },
    991: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
var compareSlider = {
  loop: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    668: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
var testimonialSlider = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3e3,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    992: {
      items: 2
    }
  }
};
var teamSlider = {
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3e3,
  margin: 24,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>"
  ],
  responsive: {
    0: {
      items: 2,
      autoHeight: true
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};
var productSlider6 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 6,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    430: {
      items: 2,
      margin: 16
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    991: {
      items: 5
    },
    1296: {
      items: 6
    }
  }
};
var productSlider5 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 6,
  responsive: {
    0: {
      items: 2,
      margin: 16,
      autoHeight: true
    },
    600: {
      items: 3
    },
    1e3: {
      items: 4
    },
    1199: {
      items: 5
    },
    1400: {
      items: 6
    }
  }
};
var productSlider4 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 4,
  responsive: {
    0: {
      items: 2,
      margin: 16,
      autoHeight: true
    },
    576: {
      items: 3
    },
    915: {
      items: 4
    }
  }
};
var productSlider3 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 4,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    576: {
      items: 2
    },
    915: {
      items: 3
    }
  }
};
var productSlider2 = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  items: 2,
  responsive: {
    0: {
      items: 1,
      margin: 16,
      autoHeight: true
    },
    576: {
      items: 2
    }
  }
};
var blogSlider4 = {
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5e3,
  margin: 24,
  responsive: {
    0: {
      items: 1,
      autoHeight: true
    },
    516: {
      items: 2
    },
    700: {
      items: 3
    },
    1115: {
      items: 4
    }
  }
};
var attributeSlider = {
  loop: true,
  nav: false,
  dots: false,
  margin: 24,
  responsive: {
    0: {
      items: 1
    },
    430: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    991: {
      items: 5
    }
  }
};

// src/app/shared/store/action/compare.action.ts
var GetCompare = class {
  static {
    this.type = "[Compare] Get";
  }
};
var AddToCompare = class {
  static {
    this.type = "[Compare] post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var DeleteCompare = class {
  static {
    this.type = "[Compare] delete";
  }
  constructor(id) {
    this.id = id;
  }
};

// src/app/shared/services/wishlist.service.ts
var WishlistService = class _WishlistService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getWishlistItems() {
    return this.http.get(`${environment.URL}/wishlist.json`);
  }
  static {
    this.\u0275fac = function WishlistService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WishlistService, factory: _WishlistService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/wishlist.state.ts
var WishlistState = class WishlistState2 {
  constructor(store, router, wishlistService, authService, notificationService) {
    this.store = store;
    this.router = router;
    this.wishlistService = wishlistService;
    this.authService = authService;
    this.notificationService = notificationService;
  }
  static wishlistItems(state2) {
    return state2.wishlist;
  }
  static wishlistIds(state2) {
    return state2.wishlistIds;
  }
  getWishlistItems(ctx) {
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return;
    }
    this.wishlistService.skeletonLoader = true;
    return this.wishlistService.getWishlistItems().pipe(tap({
      next: (result) => {
        let ids = result.data.map((product) => product.id);
        ctx.patchState({
          wishlist: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          },
          wishlistIds: ids
        });
      },
      complete: () => {
        this.wishlistService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  add(ctx, action) {
    this.router.navigate(["/wishlist"]);
  }
  delete(ctx, { id }) {
    const state2 = ctx.getState();
    let item = state2.wishlist.data.filter((value) => value.id !== id);
    ctx.patchState({
      wishlist: {
        data: item,
        total: state2.wishlist.total - 1
      }
    });
  }
  static {
    this.\u0275fac = function WishlistState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WishlistState2)(\u0275\u0275inject(Store), \u0275\u0275inject(Router), \u0275\u0275inject(WishlistService), \u0275\u0275inject(AuthService), \u0275\u0275inject(NotificationService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: WishlistState2, factory: WishlistState2.\u0275fac });
  }
};
__decorate([
  Action(GetWishlist)
], WishlistState.prototype, "getWishlistItems", null);
__decorate([
  Action(AddToWishlist)
], WishlistState.prototype, "add", null);
__decorate([
  Action(DeleteWishlist)
], WishlistState.prototype, "delete", null);
__decorate([
  Selector()
], WishlistState, "wishlistItems", null);
__decorate([
  Selector()
], WishlistState, "wishlistIds", null);
WishlistState = __decorate([
  State({
    name: "wishlist",
    defaults: {
      wishlist: {
        data: [],
        total: 0
      },
      wishlistIds: []
    }
  })
], WishlistState);

// src/app/shared/services/compare.service.ts
var CompareService = class _CompareService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getComparItems() {
    return this.http.get(`${environment.URL}/compare.json`);
  }
  static {
    this.\u0275fac = function CompareService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompareService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompareService, factory: _CompareService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/compare.state.ts
var CompareState = class CompareState2 {
  constructor(store, router, notificationService, authService, compareService) {
    this.store = store;
    this.router = router;
    this.notificationService = notificationService;
    this.authService = authService;
    this.compareService = compareService;
  }
  static compareItems(state2) {
    return state2.items;
  }
  static compareIds(state2) {
    return state2.comparIds;
  }
  static compareTotal(state2) {
    return state2.total;
  }
  getCompareItems(ctx) {
    if (!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      return;
    }
    this.compareService.skeletonLoader = true;
    return this.compareService.getComparItems().pipe(tap({
      next: (result) => {
        let ids = result.data.map((product) => product.id);
        ctx.patchState({
          items: result.data,
          total: result?.total ? result?.total : result.data?.length,
          comparIds: ids
        });
      },
      complete: () => {
        this.compareService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  add(ctx, action) {
  }
  delete(ctx, { id }) {
  }
  static {
    this.\u0275fac = function CompareState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompareState2)(\u0275\u0275inject(Store), \u0275\u0275inject(Router), \u0275\u0275inject(NotificationService), \u0275\u0275inject(AuthService), \u0275\u0275inject(CompareService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CompareState2, factory: CompareState2.\u0275fac });
  }
};
__decorate([
  Action(GetCompare)
], CompareState.prototype, "getCompareItems", null);
__decorate([
  Action(AddToCompare)
], CompareState.prototype, "add", null);
__decorate([
  Action(DeleteCompare)
], CompareState.prototype, "delete", null);
__decorate([
  Selector()
], CompareState, "compareItems", null);
__decorate([
  Selector()
], CompareState, "compareIds", null);
__decorate([
  Selector()
], CompareState, "compareTotal", null);
CompareState = __decorate([
  State({
    name: "compare",
    defaults: {
      items: [],
      total: 0,
      comparIds: []
    }
  })
], CompareState);

// src/app/shared/components/widgets/modal/size-chart-modal/size-chart-modal.component.ts
var SizeChartModalComponent = class _SizeChartModalComponent {
  constructor(modal) {
    this.modal = modal;
  }
  static {
    this.\u0275fac = function SizeChartModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SizeChartModalComponent)(\u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SizeChartModalComponent, selectors: [["app-size-chart-modal"]], inputs: { image: "image" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 8, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "id", "iconClass"], [1, "modal-body"], ["alt", "chart", 1, "img-fluid", "w-100", 3, "src"]], template: function SizeChartModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function SizeChartModalComponent_Template_app_button_click_4_listener() {
          return ctx.modal.close("Cross click");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275element(6, "img", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "size_chart"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("id", "profile_modal_close_btn")("iconClass", "ri-close-line");
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.image && ctx.image.original_url, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, ButtonComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SizeChartModalComponent, { className: "SizeChartModalComponent" });
})();

// src/app/shared/components/widgets/variant-attributes/variant-attributes.component.ts
var _c02 = (a0) => ({ "disabled": a0 });
var _c12 = (a0) => ({ "background-color": a0 });
function VariantAttributesComponent_For_1_Conditional_3_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const value_r6 = ctx_r4.$implicit;
    const \u0275$index_14_r7 = ctx_r4.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r1.variantIds.includes(value_r6.id) && !ctx_r1.soldOutAttributesIds.includes(value_r6.id))("value", \u0275$index_14_r7)("disabled", ctx_r1.soldOutAttributesIds.includes(value_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r6 == null ? null : value_r6.value, " ");
  }
}
function VariantAttributesComponent_For_1_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VariantAttributesComponent_For_1_Conditional_3_For_6_Conditional_0_Template, 2, 4, "option", 8);
  }
  if (rf & 2) {
    const value_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.attributeValues.includes(value_r6.id) ? 0 : -1);
  }
}
function VariantAttributesComponent_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6, 0);
    \u0275\u0275listener("change", function VariantAttributesComponent_For_1_Conditional_3_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const attribute_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, attribute_r4.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementStart(2, "option", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, VariantAttributesComponent_For_1_Conditional_3_For_6_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const attribute_r4 = ctx_r7.$implicit;
    const \u0275$index_1_r9 = ctx_r7.$index;
    \u0275\u0275propertyInterpolate1("id", "input-state-", \u0275$index_1_r9, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 4, "choose"), " ", attribute_r4 == null ? null : attribute_r4.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(attribute_r4.attribute_values);
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14)(1, "span", 15);
    \u0275\u0275listener("click", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    })("mouseover", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template_span_mouseover_1_listener() {
      \u0275\u0275restoreView(_r10);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c12, value_r11.hex_color));
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "app-button", 16);
    \u0275\u0275listener("click", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_app_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    })("mouseover", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_app_button_mouseover_1_listener() {
      \u0275\u0275restoreView(_r12);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r11 == null ? null : value_r11.value, " ");
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275listener("mouseover", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_li_mouseover_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    })("click", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    });
    \u0275\u0275elementStart(1, "a");
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (value_r11 == null ? null : value_r11.variation_image) ? value_r11 == null ? null : value_r11.variation_image == null ? null : value_r11.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r11.price);
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Conditional_4_Template, 2, 1, "del");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, value_r11.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.product.discount ? 4 : -1);
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 19)(2, "input", 20);
    \u0275\u0275listener("mouseover", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template_input_mouseover_2_listener() {
      \u0275\u0275restoreView(_r14);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    })("change", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const attribute_r4 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, attribute_r4.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Conditional_5_Template, 5, 4, "h5", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r14 = \u0275\u0275nextContext(2);
    const value_r11 = ctx_r14.$implicit;
    const \u0275$index_22_r16 = ctx_r14.$index;
    const \u0275$index_1_r9 = \u0275\u0275nextContext(2).$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "radio-" + \u0275$index_1_r9 + "-" + \u0275$index_22_r16)("name", "radio-group-" + \u0275$index_1_r9)("value", \u0275$index_22_r16)("checked", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id))("disabled", ctx_r1.soldOutAttributesIds.includes(value_r11.id))("ngClass", \u0275\u0275pureFunction1(9, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275property("for", "radio-" + \u0275$index_1_r9 + "-" + \u0275$index_22_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", value_r11 == null ? null : value_r11.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPrice ? 5 : -1);
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 24)(1, "a")(2, "img", 25);
    \u0275\u0275listener("mouseover", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template_img_mouseover_2_listener() {
      \u0275\u0275restoreView(_r17);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    })("click", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r17);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencySymbol");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (value_r11 == null ? null : value_r11.variation_image) ? value_r11 == null ? null : value_r11.variation_image == null ? null : value_r11.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, value_r11.sale_price));
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14)(1, "app-button", 16);
    \u0275\u0275listener("click", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template_app_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setVariant(ctx_r1.product.variations, value_r11));
    })("mouseover", function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template_app_button_mouseover_1_listener() {
      \u0275\u0275restoreView(_r18);
      const value_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r1.soldOutAttributesIds.includes(value_r11.id) && ctx_r1.variant_hover && ctx_r1.setVariant(ctx_r1.product.variations, value_r11, "hover"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.variantIds.includes(value_r11.id) && !ctx_r1.soldOutAttributesIds.includes(value_r11.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c02, ctx_r1.soldOutAttributesIds.includes(value_r11.id)));
    \u0275\u0275advance();
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r11 == null ? null : value_r11.value, " ");
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_0_Template, 2, 8, "li", 10)(1, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template, 3, 9, "li", 11)(2, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template, 3, 6, "li", 11)(3, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_3_Template, 6, 11, "div", 12)(4, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_4_Template, 8, 10, "li", 13)(5, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_5_Template, 3, 9, "li", 10);
  }
  if (rf & 2) {
    const attribute_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275conditional(attribute_r4.style == "color" ? 0 : attribute_r4.style == "circle" ? 1 : attribute_r4.style == "image" ? 2 : (attribute_r4 == null ? null : attribute_r4.style) == "radio" ? 3 : attribute_r4.style == "image_price" ? 4 : 5);
  }
}
function VariantAttributesComponent_For_1_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, VariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Template, 6, 1);
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.attributeValues.includes(value_r11.id) ? 0 : -1);
  }
}
function VariantAttributesComponent_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 9);
    \u0275\u0275repeaterCreate(1, VariantAttributesComponent_For_1_Conditional_4_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(attribute_r4.style == "image" || attribute_r4.style == "image_price" ? "image-box" : "quantity-variant");
    \u0275\u0275property("ngClass", attribute_r4 == null ? null : attribute_r4.style);
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r4.attribute_values);
  }
}
function VariantAttributesComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("mouseleave", function VariantAttributesComponent_For_1_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeVariation());
    });
    \u0275\u0275elementStart(1, "h4", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, VariantAttributesComponent_For_1_Conditional_3_Template, 7, 6, "select", 4)(4, VariantAttributesComponent_For_1_Conditional_4_Template, 3, 3, "ul", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", attribute_r4 == null ? null : attribute_r4.name, ":");
    \u0275\u0275advance();
    \u0275\u0275conditional((attribute_r4 == null ? null : attribute_r4.style) == "dropdown" || ctx_r1.isAllVariantStyleDropdown ? 3 : 4);
  }
}
var VariantAttributesComponent = class _VariantAttributesComponent {
  constructor(modal) {
    this.modal = modal;
    this.attributes = [];
    this.isAllVariantStyleDropdown = false;
    this.showVariableType = ["color", "rectangle", "circle", "radio", "dropdown", "image"];
    this.selectVariation = new EventEmitter();
    this.productQty = 1;
    this.attributeValues = [];
    this.variantIds = [];
    this.hoverVariantIds = [];
    this.soldOutAttributesIds = [];
    this.hoverSoldOutAttributesIds = [];
    this.selectedOptions = [];
    this.break = false;
  }
  ngOnChanges(changes) {
    setTimeout(() => {
      if (changes["product"] && changes["product"].currentValue) {
        this.product = changes["product"]?.currentValue;
      }
      if (changes["attributes"] && changes["attributes"].currentValue) {
        this.attributes = changes["attributes"]?.currentValue;
      }
      this.cartItem$.subscribe((items) => {
        this.cartItem = items.find((item) => item.product.id == this.product.id);
      });
      this.checkVariantAvailability(this.product);
    }, 0);
    if (changes["showPrice"]?.currentValue) {
      this.product.attributes.forEach((attribute) => {
        attribute.attribute_values.forEach((value) => {
          this.product.variations.forEach((variation) => {
            variation.attribute_values.forEach((att) => {
              if (att.id !== value.id)
                value["price"] = variation.price;
              value["sale_price"] = variation.sale_price;
            });
          });
        });
      });
    }
  }
  checkVariantAvailability(product) {
    this.selectedOptions = [];
    this.attributeValues = [];
    this.selectedVariation = null;
    this.hoverVariation = null;
    this.hoverSoldOutAttributesIds = [];
    product?.variations?.forEach((variation) => {
      variation?.attribute_values?.filter((attribute_value) => {
        if (this.attributeValues.indexOf(attribute_value?.id) === -1)
          this.attributeValues.push(attribute_value?.id);
      });
    });
    if (this.cartItem?.variation) {
      this.cartItem?.variation.attribute_values.filter((attribute_val) => {
        this.setVariant(this.product.variations, attribute_val);
      });
    }
    if (!this.cartItem) {
      for (const attribute of product?.attributes) {
        if (this.attributeValues?.length && attribute?.attribute_values?.length) {
          let values = [];
          for (const value of attribute.attribute_values) {
            if (values.indexOf(value.id) === -1)
              values.push(value.id);
            if (this.attributeValues.includes(value.id)) {
              this.setVariant(product.variations, value);
              if (this.break)
                break;
            }
          }
        }
      }
    }
    product.variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      product?.attributes.filter((attribute) => {
        if (attribute.style == "image" || attribute.style == "image_price") {
          attribute.attribute_values.filter((attribute_value) => {
            if (this.attributeValues.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
                attribute_value.name = variation.name;
                attribute_value.price = variation.price;
                attribute_value.sale_price = variation.sale_price;
              }
            }
          });
        }
      });
    });
  }
  setVariant(variations, value, event) {
    const index = this.selectedOptions.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    this.soldOutAttributesIds = [];
    if (index === -1) {
      this.selectedOptions.push({ id: Number(value?.id), attribute_id: Number(value?.attribute_id) });
    } else {
      this.selectedOptions[index].id = value?.id;
    }
    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      this.variantIds = this.selectedOptions?.map((variants) => variants?.id);
      let doValuesMatch = attrValues.length === this.selectedOptions.length && attrValues.every((value2) => this.variantIds.includes(value2));
      if (doValuesMatch) {
        this.selectedVariation = variation;
        this.product["quantity"] = this.selectedVariation ? this.selectedVariation?.quantity : this.product?.quantity;
        this.product["sku"] = this.selectedVariation ? this.selectedVariation?.sku : this.product?.sku;
        this.product["sale_price"] = this.selectedVariation ? this.selectedVariation?.sale_price : this.product?.sale_price;
        if (this.owlCar && this.selectedVariation.variation_image) {
          this.owlCar.to(this.selectedVariation.variation_image.id.toString());
        }
      }
      if (variation.stock_status == "out_of_stock" || (!variation.status || !this.product.status)) {
        variation?.attribute_values.filter((attr_value) => {
          if (attrValues.some((value2) => this.variantIds.includes(value2))) {
            if (attrValues.every((value2) => this.variantIds.includes(value2))) {
              this.soldOutAttributesIds.push(attr_value.id);
            } else if (!this.variantIds.includes(attr_value.id)) {
              this.soldOutAttributesIds.push(attr_value.id);
            }
          } else if (attrValues.length == 1 && attrValues.includes(attr_value.id)) {
            this.soldOutAttributesIds.push(attr_value.id);
          }
        });
      }
    });
    this.product?.attributes.filter((attribute) => {
      attribute.attribute_values.filter((a_value) => {
        if (a_value.id == value.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });
    if (this.selectedVariation && this.selectedVariation?.status && this.selectedVariation.stock_status == "in_stock") {
      this.break = true;
    } else {
      this.break = false;
    }
    if (event !== "hover") {
      this.hoverVariantIds = this.variantIds;
      this.hoverVariation = this.selectedVariation;
      this.hoverSoldOutAttributesIds = this.soldOutAttributesIds;
    }
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  removeVariation() {
    this.variantIds = this.hoverVariantIds;
    this.selectedVariation = this.hoverVariation;
    this.soldOutAttributesIds = this.hoverSoldOutAttributesIds;
    if (this.selectedVariation) {
      if (this.owlCar && this.selectedVariation.variation_image) {
        this.owlCar.to(this.selectedVariation.variation_image.id.toString());
      }
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  openSizeChartModal(image) {
    const sizeChart = this.modal.open(SizeChartModalComponent, { size: "lg", centered: true });
    sizeChart.componentInstance.image = image;
  }
  static {
    this.\u0275fac = function VariantAttributesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantAttributesComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VariantAttributesComponent, selectors: [["app-variant-attributes"]], inputs: { product: "product", attributes: "attributes", isAllVariantStyleDropdown: "isAllVariantStyleDropdown", owlCar: "owlCar", showPrice: "showPrice", showVariableType: "showVariableType", variant_hover: "variant_hover" }, outputs: { selectVariation: "selectVariation" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["selectedValue", ""], [1, "variation-box"], [1, "variation-box", 3, "mouseleave"], [1, "sub-title"], [1, "form-control", "form-select", "select-dropdown", 3, "id"], [3, "ngClass", "class"], [1, "form-control", "form-select", "select-dropdown", 3, "change", "id"], ["selected", "", "disabled", ""], [3, "selected", "value", "disabled"], [3, "ngClass"], [1, "bg-light", 3, "active", "ngClass"], [3, "active", "ngClass"], [1, "d-flex", "digital-price"], [1, "", 3, "active", "ngClass"], [1, "bg-light", 3, "ngClass"], [3, "click", "mouseover", "ngStyle"], [3, "click", "mouseover", "id", "type", "spinner"], [3, "mouseover", "click", "ngClass"], [3, "src"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "mouseover", "change", "id", "name", "value", "checked", "disabled", "ngClass"], [1, "form-check-label", "mb-0", 3, "for"], [1, "sold", "text-content", "ms-auto"], [1, "theme-color", "price"], [1, "", 3, "ngClass"], [3, "mouseover", "click", "src"]], template: function VariantAttributesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, VariantAttributesComponent_For_1_Template, 5, 2, "div", 1, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.attributes);
      }
    }, dependencies: [CommonModule, NgClass, NgStyle, CurrencySymbolPipe, TranslateModule, TranslatePipe, ButtonComponent], styles: ["\n\n.box[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: hidden;\n}\n.box[_ngcontent-%COMP%]   image[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=variant-attributes.component.css.map */"] });
  }
};
__decorate([
  Select(CartState.cartItems)
], VariantAttributesComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VariantAttributesComponent, { className: "VariantAttributesComponent" });
})();

// src/app/components/shop/product/product-details/widgets/product-information/product-information.component.ts
function ProductInformationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "sku"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.product == null ? null : ctx_r0.product.sku, " ");
  }
}
function ProductInformationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "unit"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.product == null ? null : ctx_r0.product.unit, " ");
  }
}
function ProductInformationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "weight"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.product == null ? null : ctx_r0.product.weight, " ", \u0275\u0275pipeBind1(5, 5, "gms"), " ");
  }
}
function ProductInformationComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "stock_status"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 4, ctx_r0.product.stock_status), " ");
  }
}
function ProductInformationComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "quantity"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.product == null ? null : ctx_r0.product.quantity, " ", \u0275\u0275pipeBind1(5, 5, "items_left"), " ");
  }
}
var ProductInformationComponent = class _ProductInformationComponent {
  static {
    this.\u0275fac = function ProductInformationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductInformationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductInformationComponent, selectors: [["app-product-information"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 8, consts: [[1, "bordered-box"], [1, "sub-title"], [1, "shipping-info"]], template: function ProductInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 2);
        \u0275\u0275template(5, ProductInformationComponent_Conditional_5_Template, 5, 4, "li")(6, ProductInformationComponent_Conditional_6_Template, 5, 4, "li")(7, ProductInformationComponent_Conditional_7_Template, 6, 7, "li")(8, ProductInformationComponent_Conditional_8_Template, 6, 6, "li")(9, ProductInformationComponent_Conditional_9_Template, 6, 7, "li");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "product_info"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional((ctx.product == null ? null : ctx.product.sku) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.product == null ? null : ctx.product.unit) ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.product == null ? null : ctx.product.weight) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product && ctx.product.stock_status ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.product == null ? null : ctx.product.quantity) > 0 ? 9 : -1);
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductInformationComponent, { className: "ProductInformationComponent" });
})();

// src/app/shared/components/widgets/modal/delivery-return-modal/delivery-return-modal.component.ts
var DeliveryReturnModalComponent = class _DeliveryReturnModalComponent {
  constructor(modal) {
    this.modal = modal;
  }
  static {
    this.\u0275fac = function DeliveryReturnModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryReturnModalComponent)(\u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeliveryReturnModalComponent, selectors: [["app-delivery-return-modal"]], inputs: { policy: "policy" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 8, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body", "policy-body"], [3, "innerHTML"]], template: function DeliveryReturnModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function DeliveryReturnModalComponent_Template_app_button_click_4_listener() {
          return ctx.modal.close();
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div")(7, "div", 4);
        \u0275\u0275element(8, "p", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "delivery_return"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(4);
        \u0275\u0275property("innerHTML", ctx.policy, \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [TranslateModule, TranslatePipe, ButtonComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeliveryReturnModalComponent, { className: "DeliveryReturnModalComponent" });
})();

// src/app/shared/store/action/questions-answers.action.ts
var GetQuestionAnswers = class {
  static {
    this.type = "[Question] Get";
  }
  constructor(slug) {
    this.slug = slug;
  }
};
var SendQuestion = class {
  static {
    this.type = "[Question] Post";
  }
  constructor(payload) {
    this.payload = payload;
  }
};
var UpdateQuestionAnswers = class {
  static {
    this.type = "[Question] put";
  }
  constructor(payload, id) {
    this.payload = payload;
    this.id = id;
  }
};
var Feedback = class {
  static {
    this.type = "[Question] Feedback Post";
  }
  constructor(payload, type) {
    this.payload = payload;
    this.type = type;
  }
};

// src/app/shared/components/widgets/modal/question-modal/question-modal.component.ts
var QuestionModalComponent = class _QuestionModalComponent {
  constructor(store, modal) {
    this.store = store;
    this.modal = modal;
    this.question = new FormControl();
    this.type = "crate";
  }
  ngOnInit() {
    if (this.qna) {
      this.type = "edit";
      this.id = this.qna.id;
      this.question.patchValue(this.qna.question);
    }
  }
  submit() {
    let data = {
      question: this.question.value,
      product_id: this.product.id,
      answer: ""
    };
    let action = new SendQuestion(data);
    if (data.question || data.product_id) {
      if (this.type == "edit" && this.id) {
        action = new UpdateQuestionAnswers(data, this.id);
      }
      this.store.dispatch(action).subscribe({
        complete: () => {
          this.modal.close();
        }
      });
    }
  }
  static {
    this.\u0275fac = function QuestionModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuestionModalComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionModalComponent, selectors: [["app-question-modal"]], inputs: { product: "product", qna: "qna" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 34, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "id", "iconClass"], [1, "modal-body"], [1, "product-review-form"], [1, "product-wrapper"], [1, "product-image"], [1, "img-fluid", 3, "src", "alt"], [1, "product-content"], [1, "name"], [1, "product-review-rating"], [1, "product-rating"], [1, "price-number"], [1, "review-box", "form-box"], ["for", "content", 1, "form-label"], ["id", "content", "rows", "3", 1, "form-control", 3, "placeholder", "formControl"], [1, "modal-footer"], [3, "click", "type", "id", "spinner"], [3, "click", "id"]], template: function QuestionModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function QuestionModalComponent_Template_app_button_click_4_listener() {
          return ctx.modal.close("Cross click");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "form", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275element(9, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "h5", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11)(15, "h6", 12);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "currencySymbol");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "div", 13)(19, "label", 14);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "textarea", 15);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 16)(25, "app-button", 17);
        \u0275\u0275listener("click", function QuestionModalComponent_Template_app_button_click_25_listener() {
          return ctx.modal.dismiss("Cancel");
        });
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "app-button", 18);
        \u0275\u0275listener("click", function QuestionModalComponent_Template_app_button_click_28_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 22, "ask_a_question"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("id", "profile_modal_close_btn")("iconClass", "ri-close-line");
        \u0275\u0275advance(5);
        \u0275\u0275property("src", ctx.product.product_thumbnail ? ctx.product.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx.product.name);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.product.name);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, ctx.product.sale_price));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 26, "your_questions"), " *");
        \u0275\u0275advance(2);
        \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(23, 28, "your_questions"));
        \u0275\u0275property("formControl", ctx.question);
        \u0275\u0275advance(3);
        \u0275\u0275classMap("btn btn-outline");
        \u0275\u0275property("type", "button")("id", "cancel_profile_btn")("spinner", false);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 30, "cancel"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-solid");
        \u0275\u0275property("id", "submit_profile_btn");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 32, "submit"), " ");
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, ReactiveFormsModule, FormControlDirective, CurrencySymbolPipe, ButtonComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionModalComponent, { className: "QuestionModalComponent" });
})();

// src/app/components/shop/product/product-details/widgets/product-details/product-details.component.ts
var _c03 = (a0) => ["/product", a0];
function ProductDetailsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "h5");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(4, 3, "selling_fast"), "! ", ctx_r0.viewsCount, " ", \u0275\u0275pipeBind1(5, 5, "people_in_this_cart"), ".");
  }
}
function ProductDetailsComponent_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r3 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r3 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r3 === 100);
  }
}
function ProductDetailsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 10)(2, "ngb-rating", 11);
    \u0275\u0275twoWayListener("rateChange", function ProductDetailsComponent_Conditional_4_Template_ngb_rating_rateChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.product.rating_count, $event) || (ctx_r0.product.rating_count = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(3, ProductDetailsComponent_Conditional_4_ng_template_3_Template, 1, 5, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 13);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("rate", ctx_r0.product.rating_count);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.product.reviews_count, " ", \u0275\u0275pipeBind1(8, 3, "review"), "");
  }
}
function ProductDetailsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price));
  }
}
function ProductDetailsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, "% ", \u0275\u0275pipeBind1(2, 2, "off"), "");
  }
}
function ProductDetailsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.short_description, " ");
  }
}
function ProductDetailsComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275listener("click", function ProductDetailsComponent_Conditional_18_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal("sizeChart", ctx_r0.product.size_chart_image));
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "size_chart"), " ");
  }
}
function ProductDetailsComponent_Conditional_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275listener("click", function ProductDetailsComponent_Conditional_18_Conditional_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal("delivery", ctx_r0.policy));
    });
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span");
    \u0275\u0275elementStart(5, "a", 15);
    \u0275\u0275listener("click", function ProductDetailsComponent_Conditional_18_Conditional_3_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openModal("question", ctx_r0.product));
    });
    \u0275\u0275element(6, "i", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "delivery_return"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 4, "ask_a_question"), " ");
  }
}
function ProductDetailsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, ProductDetailsComponent_Conditional_18_Conditional_1_Template, 4, 3, "a", 14);
    \u0275\u0275element(2, "span");
    \u0275\u0275template(3, ProductDetailsComponent_Conditional_18_Conditional_3_Template, 9, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.product.size_chart_image && ctx_r0.product.size_chart_image.original_url ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.policy && ctx_r0.product.is_return ? 3 : -1);
  }
}
var ProductDetailsComponent = class _ProductDetailsComponent {
  constructor(platformId, modal) {
    this.platformId = platformId;
    this.modal = modal;
    this.viewsCount = 30;
    this.ordersCount = 10;
    this.themeOptions$.subscribe((option) => {
      this.policy = option?.product?.shipping_and_return;
    });
  }
  ngOnChanges(changes) {
    if (changes["product"] && changes["product"].currentValue) {
      this.selectedVariation = null;
      this.product = changes["product"].currentValue;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntervals();
    }
  }
  ngOnDestroy() {
    if (this.countsInterval) {
      clearInterval(this.countsInterval);
    }
  }
  setupIntervals() {
    this.countsInterval = setInterval(() => {
      let encourage_max_view_count = this.option?.product?.encourage_max_view_count ?? 100;
      this.viewsCount = Math.floor(Math.random() * encourage_max_view_count) + 1;
    }, 5e4);
    this.countsInterval = setInterval(() => {
      let encourage_max_order_count = this.option?.product?.encourage_max_order_count ?? 100;
      this.ordersCount = Math.floor(Math.random() * encourage_max_order_count) + 1;
    }, 6e4);
  }
  openModal(type, value) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (type == "sizeChart") {
      const sizeChart = this.modal.open(SizeChartModalComponent, { size: "lg", centered: true, windowClass: "theme-modal-2" });
      sizeChart.componentInstance.image = value;
    } else if (type == "delivery") {
      const deliveryModal = this.modal.open(DeliveryReturnModalComponent, { size: "lg", centered: true, windowClass: "theme-modal-2" });
      deliveryModal.componentInstance.policy = value;
    } else if (type == "question") {
      const questionModal = this.modal.open(QuestionModalComponent, { centered: true, windowClass: "theme-modal-2" });
      questionModal.componentInstance.product = value;
    }
  }
  static {
    this.\u0275fac = function ProductDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailsComponent)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailsComponent, selectors: [["app-product-details"]], inputs: { product: "product", option: "option", selectedVariation: "selectedVariation" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 19, vars: 19, consts: [[1, "trending-text"], [3, "routerLink"], [1, "main-title"], [1, "product-rating"], [1, "price-text"], [1, "text-dark", "fw-normal"], [1, "discounted-price"], [1, "description-text"], [1, "size-delivery-info"], ["src", "assets/images/trending.gif", "alt", "", 1, "img-fluid"], [1, "rating-list"], [3, "rateChange", "rate"], [1, "divider"], ["href", "javascript:void(0)"], ["href", "javascript:void(0)", 1, ""], ["href", "javascript:void(0)", 1, "", 3, "click"], [1, "ri-ruler-line"], [1, "ri-truck-line"], [1, "ri-questionnaire-line"]], template: function ProductDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductDetailsComponent_Conditional_0_Template, 6, 7, "div", 0);
        \u0275\u0275elementStart(1, "a", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, ProductDetailsComponent_Conditional_4_Template, 9, 5, "div", 3);
        \u0275\u0275elementStart(5, "div", 4)(6, "h3")(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "currencySymbol");
        \u0275\u0275template(12, ProductDetailsComponent_Conditional_12_Template, 3, 3, "del")(13, ProductDetailsComponent_Conditional_13_Template, 3, 4, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, ProductDetailsComponent_Conditional_17_Template, 2, 1, "p", 7)(18, ProductDetailsComponent_Conditional_18_Template, 4, 2, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.option == null ? null : ctx.option.product == null ? null : ctx.option.product.encourage_view) && ctx.product.encourage_view ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c03, ctx.product.slug));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.selectedVariation ? ctx.selectedVariation.name : ctx.product.name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.product.is_external ? 4 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 11, "mrp"), ":");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 15, "inclusive_text"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.short_description ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.size_chart_image || ctx.policy && ctx.product.is_return ? 18 : -1);
      }
    }, dependencies: [CommonModule, NgbModule, NgbRating, CurrencySymbolPipe, RouterModule, RouterLink, TranslateModule, TranslatePipe] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductDetailsComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailsComponent, { className: "ProductDetailsComponent" });
})();

// src/app/shared/components/widgets/sale-timer/sale-timer.component.ts
function SaleTimerComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 1);
    \u0275\u0275element(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.title, "");
  }
}
function SaleTimerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, SaleTimerComponent_Conditional_0_Conditional_1_Template, 3, 1, "h4", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "p", 3)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 4);
    \u0275\u0275text(14, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 5);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementStart(20, "span", 4);
    \u0275\u0275text(21, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 5);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementStart(27, "span", 5);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.title ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.days);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "days"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.hours);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, "hrs"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.minutes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 13, "min"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.remainingTime.seconds);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 15, "sec"));
  }
}
var SaleTimerComponent = class _SaleTimerComponent {
  constructor() {
    this.remainingTime = null;
  }
  ngOnInit() {
    this.startTimer();
  }
  ngOnChanges() {
    this.startTimer();
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  startTimer() {
    if (this.startDate && this.endDate) {
      const startDateTime = new Date(this.startDate).getTime();
      const endDateTime = new Date(this.endDate).getTime();
      const now = (/* @__PURE__ */ new Date()).getTime();
      this.updateTimer();
      this.timerInterval = setInterval(() => {
        this.updateTimer();
      }, 1e3);
    }
  }
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  updateTimer() {
    if (this.startDate && this.endDate) {
      const startDateTime = new Date(this.startDate).getTime();
      const endDateTime = new Date(this.endDate).getTime();
      const now = (/* @__PURE__ */ new Date()).getTime();
      let targetDate = endDateTime;
      if (now < startDateTime) {
        targetDate = startDateTime;
      } else if (now >= endDateTime) {
        this.remainingTime = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        this.stopTimer();
        return;
      }
      this.calculateTimeDifference(targetDate);
    }
  }
  calculateTimeDifference(targetDate) {
    const now = (/* @__PURE__ */ new Date()).getTime();
    const timeDiff = targetDate - now;
    this.remainingTime = {
      days: Math.floor(timeDiff / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(timeDiff % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
      minutes: Math.floor(timeDiff % (1e3 * 60 * 60) / (1e3 * 60)),
      seconds: Math.floor(timeDiff % (1e3 * 60) / 1e3)
    };
  }
  static {
    this.\u0275fac = function SaleTimerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SaleTimerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SaleTimerComponent, selectors: [["app-sale-timer"]], inputs: { startDate: "startDate", endDate: "endDate", title: "title" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "bordered-box", "sale-timer-box"], [1, "sub-title"], [1, "timer"], ["id", "demo"], [1, "padding-l"], [1, "timer-cal"], [1, "clock"]], template: function SaleTimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SaleTimerComponent_Conditional_0_Template, 30, 17, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.remainingTime ? 0 : -1);
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SaleTimerComponent, { className: "SaleTimerComponent" });
})();

// src/app/components/shop/product/product-details/widgets/product-social-share/product-social-share.component.ts
var ProductSocialShareComponent = class _ProductSocialShareComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.url = environment2.baseURL;
    this.shareText = "";
  }
  ngOnInit() {
    if (this.product) {
      this.shareOnFacebook(this.product.slug);
    }
  }
  ngOnChanges() {
  }
  shareOnFacebook(slug) {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = facebookShareUrl;
  }
  shareOnTwitter(slug) {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = twitterShareUrl;
  }
  shareOnLinkedIn(slug) {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = linkedInShareUrl;
  }
  shareOnWhatsApp(slug) {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.url + "/product/" + slug)}`;
    this.shareText = whatsappShareUrl;
  }
  shareViaEmail(slug) {
    const subject = "Check out this awesome product!";
    const body = `I thought you might be interested in this product: ${this.url + "/product/" + slug}`;
    const emailShareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailShareUrl;
  }
  copyLink() {
    navigator.clipboard.writeText(this.shareText);
  }
  static {
    this.\u0275fac = function ProductSocialShareComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductSocialShareComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductSocialShareComponent, selectors: [["app-product-social-share"]], inputs: { product: "product", option: "option" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 30, vars: 13, consts: [[1, "modal-header"], [1, "fw-semibold"], [3, "click", "spinner", "id"], [1, "ri-close-line"], [1, "modal-body"], [1, "bordered-box"], [1, "product-social"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-facebook-line"], [1, "ri-twitter-line"], [1, "ri-linkedin-line"], [1, "ri-whatsapp-line"], [1, "ri-mail-line"], [1, "gap-3", "input-group", "form-box"], ["type", "email", "id", "exampleInputEmail1", "name", "email", 1, "form-control", 3, "ngModelChange", "value", "ngModel"], ["type", "button", "id", "button-addon1", 1, "btn", "btn-solid", "buy-button", 3, "click", "disabled"]], template: function ProductSocialShareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "app-button", 2);
        \u0275\u0275listener("click", function ProductSocialShareComponent_Template_app_button_click_4_listener() {
          return ctx.modalService.dismissAll("Cancel");
        });
        \u0275\u0275element(5, "i", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "ul", 6)(9, "li")(10, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShareComponent_Template_a_click_10_listener() {
          return ctx.shareOnFacebook(ctx.product.slug);
        });
        \u0275\u0275element(11, "i", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li")(13, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShareComponent_Template_a_click_13_listener() {
          return ctx.shareOnTwitter(ctx.product.slug);
        });
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "li")(16, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShareComponent_Template_a_click_16_listener() {
          return ctx.shareOnLinkedIn(ctx.product.slug);
        });
        \u0275\u0275element(17, "i", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "li")(19, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShareComponent_Template_a_click_19_listener() {
          return ctx.shareOnWhatsApp(ctx.product.slug);
        });
        \u0275\u0275element(20, "i", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "li")(22, "a", 7);
        \u0275\u0275listener("click", function ProductSocialShareComponent_Template_a_click_22_listener() {
          return ctx.shareViaEmail(ctx.product.slug);
        });
        \u0275\u0275element(23, "i", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "form")(25, "div", 13)(26, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function ProductSocialShareComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.shareText, $event) || (ctx.shareText = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 15);
        \u0275\u0275listener("click", function ProductSocialShareComponent_Template_button_click_27_listener() {
          return ctx.copyLink();
        });
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 9, "share_it"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("spinner", false)("id", "profile_modal_close_btn");
        \u0275\u0275advance(22);
        \u0275\u0275property("value", ctx.shareText);
        \u0275\u0275twoWayProperty("ngModel", ctx.shareText);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.shareText);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 11, "copy_link"));
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, ButtonComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, ReactiveFormsModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductSocialShareComponent, { className: "ProductSocialShareComponent" });
})();

// src/app/components/shop/product/product-details/widgets/product-wholesales/product-wholesales.component.ts
function ProductWholesalesComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wholesale_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wholesale_r1.min_qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(wholesale_r1.max_qty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.product == null ? null : ctx_r1.product.wholesale_price_type) == "fixed" ? \u0275\u0275pipeBind1(7, 3, wholesale_r1.value) : wholesale_r1.value + "% Off", " ");
  }
}
var ProductWholesalesComponent = class _ProductWholesalesComponent {
  static {
    this.\u0275fac = function ProductWholesalesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductWholesalesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductWholesalesComponent, selectors: [["app-product-wholesales"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 9, consts: [[1, "table", "mt-2", "mb-4", "modal-table"], [1, "border-top-0"]], template: function ProductWholesalesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "th", 1);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "th", 1);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "tbody");
        \u0275\u0275repeaterCreate(13, ProductWholesalesComponent_For_14_Template, 8, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "min_qty"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "max_qty"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, (ctx.product == null ? null : ctx.product.wholesale_price_type) == "fixed" ? "unit_price" : "percentage"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.product == null ? null : ctx.product.wholesales);
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe, CurrencySymbolPipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductWholesalesComponent, { className: "ProductWholesalesComponent" });
})();

// src/app/components/shop/product/product-details/widgets/product-content/product-content.component.ts
var _c04 = () => [];
var _c13 = (a0, a1) => ({ "danger-progress": a0, "warning-progress": a1 });
var _c22 = (a0) => ({ width: a0 });
function ProductContentComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-wholesales", 9);
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currencySymbol");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("product", ctx_r1.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "total_price"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, ctx_r1.totalPrice));
  }
}
function ProductContentComponent_Conditional_0_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 21);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Conditional_2_Conditional_11_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-animation btn-solid hover-solid scroll-button buy-button");
    \u0275\u0275property("id", "addcartbtnVariation" + ctx_r1.product.id)("spinner", true)("type", "button");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "add_to_cart"), " ");
  }
}
function ProductContentComponent_Conditional_0_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("btn btn-animation btn-solid hover-solid scroll-button buy-button");
    \u0275\u0275property("id", "soldoutbtnproductcontain")("spinner", false)("disabled", true)("spinner", false)("type", "button");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity < ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity < ctx_r1.productQty ? "out_of_stock" : "add_to_cart"), " ");
  }
}
function ProductContentComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "span", 14)(6, "app-button", 15);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Conditional_2_Template_app_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(-1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 16);
    \u0275\u0275elementStart(8, "span", 14)(9, "app-button", 15);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Conditional_2_Template_app_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(1));
    });
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275template(11, ProductContentComponent_Conditional_0_Conditional_2_Conditional_11_Template, 5, 8, "app-button", 18)(12, ProductContentComponent_Conditional_0_Conditional_2_Conditional_12_Template, 3, 10, "app-button", 19);
    \u0275\u0275elementStart(13, "app-button", 20);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Conditional_2_Template_app_button_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView((ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity >= ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity >= ctx_r1.productQty) && ctx_r1.addToCart(ctx_r1.product, true));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classMap("btn quantity-left-minus");
    \u0275\u0275property("id", "quantity-left-minus" + ctx_r1.product.id)("iconClass", "ri-arrow-left-s-line")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.productQty);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn quantity-left-plus");
    \u0275\u0275property("id", "quantity-left-plus" + ctx_r1.product.id)("iconClass", "ri-arrow-right-s-line")("spinner", false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity >= ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity >= ctx_r1.productQty ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn btn-solid buy-button");
    \u0275\u0275property("id", "buynowbtn" + ctx_r1.product.id)("disabled", ctx_r1.selectedVariation && ctx_r1.selectedVariation.status && ctx_r1.selectedVariation.quantity >= ctx_r1.productQty || !ctx_r1.selectedVariation && ctx_r1.product.quantity >= ctx_r1.productQty ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 17, "buy_now"), " ");
  }
}
function ProductContentComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 25);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Conditional_3_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.externalProductLink(ctx_r1.product.external_url));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("btn btn-solid rounded-3");
    \u0275\u0275property("id", "externalBtn" + ctx_r1.product.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.product.external_button_text ? ctx_r1.product.external_button_text : \u0275\u0275pipeBind1(2, 4, "buy_now"), " ");
  }
}
function ProductContentComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Conditional_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToWishlist(ctx_r1.product));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("ri-heart-", ctx_r1.product.is_wishlist ? "fill" : "line", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "add_to_wishlist"));
  }
}
function ProductContentComponent_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Conditional_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal(ctx_r1.product));
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "share"));
  }
}
function ProductContentComponent_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275element(6, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(3, 5, "please_hurry_only"), " ", ctx_r1.product.quantity, " ", \u0275\u0275pipeBind1(4, 7, "left_in_stock"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c13, ctx_r1.product.quantity <= 2, ctx_r1.product.quantity >= 3 && ctx_r1.product.quantity <= 7));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c22, ctx_r1.product.quantity * 100 / 10 + "%"));
  }
}
function ProductContentComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-sale-timer", 8);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("startDate", ctx_r1.product.sale_starts_at)("endDate", ctx_r1.product.sale_expired_at)("title", \u0275\u0275pipeBind1(1, 3, "sales_ends_in"));
  }
}
function ProductContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-variant-attributes", 0);
    \u0275\u0275listener("selectVariation", function ProductContentComponent_Conditional_0_Template_app_variant_attributes_selectVariation_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectVariation($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(1, ProductContentComponent_Conditional_0_Conditional_1_Template, 7, 7)(2, ProductContentComponent_Conditional_0_Conditional_2_Template, 16, 19, "div", 1)(3, ProductContentComponent_Conditional_0_Conditional_3_Template, 3, 6, "app-button", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275template(5, ProductContentComponent_Conditional_0_Conditional_5_Template, 5, 6, "a", 4);
    \u0275\u0275elementStart(6, "a", 5);
    \u0275\u0275listener("click", function ProductContentComponent_Conditional_0_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCompare(ctx_r1.product));
    });
    \u0275\u0275element(7, "i", 6);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ProductContentComponent_Conditional_0_Conditional_11_Template, 5, 3, "a", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProductContentComponent_Conditional_0_Conditional_12_Template, 7, 14, "div", 7)(13, ProductContentComponent_Conditional_0_Conditional_13_Template, 2, 5, "app-sale-timer", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r1.product)("attributes", ctx_r1.product.attributes || \u0275\u0275pureFunction0(13, _c04))("owlCar", ctx_r1.owlCar)("variant_hover", ctx_r1.variant_hover);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.wholesales.length && !ctx_r1.product_variation ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.product.is_external ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.product_variation ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "add_to_compare"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.product.social_share && (ctx_r1.option == null ? null : ctx_r1.option.product == null ? null : ctx_r1.option.product.social_share) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product && ctx_r1.product.quantity && ctx_r1.product.quantity <= 10 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.sale_starts_at && ctx_r1.product.sale_expired_at ? 13 : -1);
  }
}
var ProductContentComponent = class _ProductContentComponent {
  constructor(store, router, modal) {
    this.store = store;
    this.router = router;
    this.modal = modal;
    this.product_variation = false;
    this.variant_hover = true;
    this.selectedVariant = new EventEmitter();
    this.productQty = 1;
    this.shippingFreeAmt = 0;
    this.totalPrice = 0;
    this.setting$.subscribe((setting) => this.shippingFreeAmt = setting?.general?.min_order_free_shipping);
  }
  ngOnChanges(changes) {
    if (changes["product"] && changes["product"].currentValue) {
      this.selectedVariation = null;
      this.product = changes["product"]?.currentValue;
    }
    this.productQty = 1;
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => {
        if (item.variation && item.variation != null && item.variation_id && item.variation_id != null) {
          this.product.variations.find((i) => {
            if (i.id == item.variation_id)
              return i.id == item.variation_id;
          });
          return true;
        } else {
          return item.product.id == this.product.id;
        }
      });
    });
  }
  ngOnInit() {
    this.wholesalePriceCal();
  }
  selectVariation(variation) {
    if (variation) {
      this.selectedVariation = variation;
      this.selectedVariant.emit(this.selectedVariation);
    }
  }
  updateQuantity(qty) {
    if (1 > this.productQty + qty)
      return;
    this.productQty = this.productQty + qty;
    this.wholesalePriceCal();
  }
  externalProductLink(link) {
    if (link) {
      window.open(link, "_blank");
    }
  }
  addToCart(product, buyNow) {
    if (product) {
      const params = {
        id: this.cartItem && (this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id) ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: this.productQty
      };
      this.store.dispatch(new AddToCart(params)).subscribe({
        complete: () => {
          this.modal.dismissAll();
          if (buyNow) {
            this.router.navigate(["/checkout"]);
          }
        }
      });
    }
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] && product["is_wishlist"] && !!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token) ? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  addToCompare(product) {
    this.store.dispatch(new AddToCompare({ product }));
  }
  wholesalePriceCal() {
    let wholesale = this.product.wholesales.find((value) => value.min_qty <= this.productQty && value.max_qty >= this.productQty) || null;
    if (wholesale && this.product.wholesale_price_type == "fixed") {
      this.totalPrice = this.productQty * wholesale.value;
    } else if (wholesale && this.product.wholesale_price_type == "percentage") {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product.sale_price);
      this.totalPrice = this.totalPrice - this.totalPrice * (wholesale.value / 100);
    } else {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product.sale_price);
    }
  }
  openModal(product) {
    const modal = this.modal.open(ProductSocialShareComponent, { centered: true, windowClass: "theme-modal-2" });
    modal.componentInstance.product = product;
  }
  static {
    this.\u0275fac = function ProductContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductContentComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductContentComponent, selectors: [["app-product-content"]], inputs: { product: "product", option: "option", owlCar: "owlCar", product_variation: "product_variation", variant_hover: "variant_hover" }, outputs: { selectedVariant: "selectedVariant" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "selectVariation", "product", "attributes", "owlCar", "variant_hover"], [1, "product-buttons"], [3, "id", "class"], [1, "buy-box", "compare-box"], ["href", "javascript:void(0)"], ["href", "javascript:void(0)", 3, "click"], [1, "ri-refresh-line"], [1, "left-progressbar"], [3, "startDate", "endDate", "title"], [3, "product"], [1, "theme-color"], [1, "qty-section"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], [3, "click", "id", "iconClass", "spinner"], ["type", "text", "name", "quantity", 1, "form-control", "input-number", 3, "value"], [1, "product-buy-btn-group"], [3, "class", "id", "spinner", "type"], [3, "class", "id", "spinner", "disabled", "type"], [3, "click", "id", "disabled"], [3, "click", "id", "spinner", "type"], [1, "d-inline-block", "ring-animation"], [1, "ri-shopping-cart-line", "me-1"], [3, "id", "spinner", "disabled", "type"], [3, "click", "id"], [1, "ri-share-line"], ["role", "progressbar", 1, "progress", 3, "ngClass"], [1, "progress-bar", 3, "ngStyle"]], template: function ProductContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductContentComponent_Conditional_0_Template, 14, 14);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.product.status ? 0 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgStyle,
      NgbModule,
      CurrencySymbolPipe,
      VariantAttributesComponent,
      TranslateModule,
      TranslatePipe,
      SaleTimerComponent,
      ProductWholesalesComponent,
      ButtonComponent
    ] });
  }
};
__decorate([
  Select(SettingState.setting)
], ProductContentComponent.prototype, "setting$", void 0);
__decorate([
  Select(CartState.cartItems)
], ProductContentComponent.prototype, "cartItem$", void 0);
__decorate([
  Select(WishlistState.wishlistIds)
], ProductContentComponent.prototype, "wishlistIds$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductContentComponent, { className: "ProductContentComponent" });
})();

// node_modules/ngx-image-zoom/fesm2020/ngx-image-zoom.mjs
var _c05 = ["zoomContainer"];
var _c14 = ["imageThumbnail"];
var _c23 = ["fullSizeImage"];
var _c32 = (a0) => ({
  ngxImageZoomFullContainer: true,
  ngxImageZoomLensEnabled: a0
});
var NgxImageZoomComponent = class _NgxImageZoomComponent {
  constructor(renderer, changeDetectorRef) {
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.zoomScroll = new EventEmitter();
    this.zoomPosition = new EventEmitter();
    this.imagesLoaded = new EventEmitter();
    this.enableLens = false;
    this.lensBorderRadius = 0;
    this.thumbWidth = 0;
    this.thumbHeight = 0;
    this.fullWidth = 0;
    this.fullHeight = 0;
    this.lensWidth = 100;
    this.lensHeight = 100;
    this.zoomMode = "hover";
    this.magnification = 1;
    this.enableScrollZoom = false;
    this.scrollStepSize = 0.1;
    this.circularLens = false;
    this.minZoomRatio = 1;
    this.maxZoomRatio = 2;
    this.xRatio = 0;
    this.yRatio = 0;
    this.zoomingEnabled = false;
    this.zoomFrozen = false;
    this.isReady = false;
    this.thumbImageLoaded = false;
    this.fullImageLoaded = false;
    this.latestMouseLeft = -1;
    this.latestMouseTop = -1;
    this.eventListeners = [];
    this.altText = "";
    this.titleText = "";
  }
  set setThumbImage(thumbImage) {
    this.thumbImageLoaded = false;
    this.setIsReady(false);
    this.thumbImage = thumbImage;
  }
  set setFullImage(fullImage) {
    this.fullImageLoaded = false;
    this.setIsReady(false);
    this.fullImage = fullImage;
  }
  set setZoomMode(zoomMode) {
    if (_NgxImageZoomComponent.validZoomModes.some((m) => m === zoomMode)) {
      this.zoomMode = zoomMode;
    }
  }
  set setMagnification(magnification) {
    this.magnification = Number(magnification) || this.magnification;
    this.zoomScroll.emit(this.magnification);
  }
  set setMinZoomRatio(minZoomRatio) {
    const ratio = Number(minZoomRatio) || this.minZoomRatio || this.baseRatio || 0;
    this.minZoomRatio = Math.max(ratio, this.baseRatio || 0);
  }
  set setMaxZoomRatio(maxZoomRatio) {
    this.maxZoomRatio = Number(maxZoomRatio) || this.maxZoomRatio;
  }
  set setScrollStepSize(stepSize) {
    this.scrollStepSize = Number(stepSize) || this.scrollStepSize;
  }
  set setEnableLens(enable) {
    this.enableLens = Boolean(enable);
  }
  set setLensWidth(width) {
    this.lensWidth = Number(width) || this.lensWidth;
  }
  set setLensHeight(height) {
    this.lensHeight = Number(height) || this.lensHeight;
  }
  set setCircularLens(enable) {
    this.circularLens = Boolean(enable);
  }
  set setEnableScrollZoom(enable) {
    this.enableScrollZoom = Boolean(enable);
  }
  ngOnInit() {
    this.setUpEventListeners();
  }
  ngOnChanges() {
    if (this.enableLens) {
      if (this.circularLens) {
        this.lensBorderRadius = this.lensWidth / 2;
      } else {
        this.lensBorderRadius = 0;
      }
    }
    this.calculateRatioAndOffset();
    this.calculateImageAndLensPosition();
  }
  ngOnDestroy() {
    this.eventListeners.forEach((destroyFn) => destroyFn());
  }
  /**
   * Template helper methods
   */
  onThumbImageLoaded() {
    this.thumbImageLoaded = true;
    this.checkImagesLoaded();
  }
  onFullImageLoaded() {
    this.fullImageLoaded = true;
    this.checkImagesLoaded();
  }
  setUpEventListeners() {
    const nativeElement = this.zoomContainer.nativeElement;
    switch (this.zoomMode) {
      case "hover":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseenter", (event) => this.hoverMouseEnter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.hoverMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.hoverMouseMove(event)));
        break;
      case "toggle":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.toggleClick(event)));
        break;
      case "toggle-click":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.toggleClick(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.clickMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.clickMouseMove(event)));
        break;
      case "click":
        this.eventListeners.push(this.renderer.listen(nativeElement, "click", (event) => this.clickStarter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.clickMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.clickMouseMove(event)));
        break;
      case "toggle-freeze":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseleave", () => this.toggleFreezeMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.toggleFreezeMouseMove(event)), this.renderer.listen(nativeElement, "click", (event) => this.toggleFreezeClick(event)));
        break;
      case "hover-freeze":
        this.eventListeners.push(this.renderer.listen(nativeElement, "mouseenter", (event) => this.hoverFreezeMouseEnter(event)), this.renderer.listen(nativeElement, "mouseleave", () => this.toggleFreezeMouseLeave()), this.renderer.listen(nativeElement, "mousemove", (event) => this.toggleFreezeMouseMove(event)), this.renderer.listen(nativeElement, "click", (event) => this.hoverFreezeClick(event)));
        break;
    }
    if (this.enableScrollZoom) {
      this.eventListeners.push(this.renderer.listen(nativeElement, "mousewheel", (event) => this.onMouseWheel(event)), this.renderer.listen(nativeElement, "DOMMouseScroll", (event) => this.onMouseWheel(event)), this.renderer.listen(nativeElement, "onmousewheel", (event) => this.onMouseWheel(event)));
    }
    if (this.enableLens && this.circularLens) {
      this.lensBorderRadius = this.lensWidth / 2;
    }
  }
  checkImagesLoaded() {
    this.calculateRatioAndOffset();
    if (this.thumbImageLoaded && this.fullImageLoaded) {
      this.calculateImageAndLensPosition();
      this.setIsReady(true);
    }
  }
  setIsReady(value) {
    this.isReady = value;
    this.imagesLoaded.emit(value);
  }
  /**
   * Zoom position setters
   */
  setZoomPosition(left, top) {
    this.latestMouseLeft = Number(left) || this.latestMouseLeft;
    this.latestMouseTop = Number(top) || this.latestMouseTop;
    const c = {
      x: this.latestMouseLeft,
      y: this.latestMouseTop
    };
    this.zoomPosition.emit(c);
  }
  /**
   * Mouse wheel event
   */
  onMouseWheel(event) {
    if (!this.zoomingEnabled || this.zoomFrozen) {
      return;
    }
    event = window.event || event;
    const direction = Math.max(Math.min(event.wheelDelta || -event.detail, 1), -1);
    if (direction > 0) {
      this.setMagnification = Math.min(this.magnification + this.scrollStepSize, this.maxZoomRatio);
    } else {
      this.setMagnification = Math.max(this.magnification - this.scrollStepSize, this.minZoomRatio);
    }
    this.calculateRatio();
    this.calculateZoomPosition(event);
    event.returnValue = false;
    if (event.preventDefault) {
      event.preventDefault();
    }
  }
  /**
   * Hover mode
   */
  hoverMouseEnter(event) {
    this.zoomOn(event);
  }
  hoverMouseLeave() {
    this.zoomOff();
  }
  hoverMouseMove(event) {
    this.calculateZoomPosition(event);
  }
  /**
   * Toggle mode
   */
  toggleClick(event) {
    if (this.zoomingEnabled) {
      this.zoomOff();
    } else {
      this.zoomOn(event);
    }
  }
  /**
   * Click mode
   */
  clickStarter(event) {
    if (this.zoomingEnabled === false) {
      this.zoomOn(event);
    }
  }
  clickMouseLeave() {
    this.zoomOff();
  }
  clickMouseMove(event) {
    if (this.zoomingEnabled) {
      this.calculateZoomPosition(event);
    }
  }
  /**
   * Toggle freeze mode
   */
  toggleFreezeMouseEnter(event) {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.zoomOn(event);
    }
  }
  hoverFreezeMouseEnter(event) {
    if (!this.zoomFrozen) {
      this.zoomOn(event);
    }
  }
  toggleFreezeMouseLeave() {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.zoomOff();
    }
  }
  toggleFreezeMouseMove(event) {
    if (this.zoomingEnabled && !this.zoomFrozen) {
      this.calculateZoomPosition(event);
    }
  }
  toggleFreezeClick(event) {
    if (this.zoomingEnabled && this.zoomFrozen) {
      this.zoomFrozen = false;
      this.zoomOff();
    } else if (this.zoomingEnabled) {
      this.zoomFrozen = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.zoomOn(event);
    }
  }
  hoverFreezeClick(event) {
    if (this.zoomingEnabled && this.zoomFrozen) {
      this.zoomFrozen = false;
    } else if (this.zoomingEnabled) {
      this.zoomFrozen = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.zoomOn(event);
    }
  }
  /**
   * Private helper methods
   */
  zoomOn(event) {
    if (this.isReady) {
      this.zoomingEnabled = true;
      this.calculateRatioAndOffset();
      this.display = "block";
      this.calculateZoomPosition(event);
      this.changeDetectorRef.markForCheck();
    }
  }
  zoomOff() {
    this.zoomingEnabled = false;
    this.display = "none";
    this.changeDetectorRef.markForCheck();
  }
  calculateZoomPosition(event) {
    const newLeft = Math.max(Math.min(event.offsetX, this.thumbWidth), 0);
    const newTop = Math.max(Math.min(event.offsetY, this.thumbHeight), 0);
    this.setZoomPosition(newLeft, newTop);
    this.calculateImageAndLensPosition();
    this.changeDetectorRef.markForCheck();
  }
  calculateImageAndLensPosition() {
    let lensLeftMod = 0;
    let lensTopMod = 0;
    if (this.enableLens && this.latestMouseLeft > 0) {
      lensLeftMod = this.lensLeft = this.latestMouseLeft - this.lensWidth / 2;
      lensTopMod = this.lensTop = this.latestMouseTop - this.lensHeight / 2;
    }
    this.fullImageLeft = this.latestMouseLeft * -this.xRatio - lensLeftMod;
    this.fullImageTop = this.latestMouseTop * -this.yRatio - lensTopMod;
  }
  calculateRatioAndOffset() {
    this.thumbWidth = this.imageThumbnail.nativeElement.width;
    this.thumbHeight = this.imageThumbnail.nativeElement.height;
    if (!this.enableLens) {
      this.lensWidth = this.thumbWidth;
      this.lensHeight = this.thumbHeight;
      this.lensLeft = 0;
      this.lensTop = 0;
    }
    this.offsetTop = this.imageThumbnail.nativeElement.getBoundingClientRect().top;
    this.offsetLeft = this.imageThumbnail.nativeElement.getBoundingClientRect().left;
    if (this.fullImage === void 0) {
      this.fullImage = this.thumbImage;
    }
    if (this.fullImageLoaded) {
      this.fullWidth = this.fullSizeImage.nativeElement.naturalWidth;
      this.fullHeight = this.fullSizeImage.nativeElement.naturalHeight;
      this.baseRatio = Math.max(this.thumbWidth / this.fullWidth, this.thumbHeight / this.fullHeight);
      this.minZoomRatio = Math.max(this.minZoomRatio || 0, this.baseRatio || 0);
      this.calculateRatio();
    }
  }
  calculateRatio() {
    this.magnifiedWidth = this.fullWidth * this.magnification;
    this.magnifiedHeight = this.fullHeight * this.magnification;
    this.xRatio = (this.magnifiedWidth - this.thumbWidth) / this.thumbWidth;
    this.yRatio = (this.magnifiedHeight - this.thumbHeight) / this.thumbHeight;
  }
};
NgxImageZoomComponent.validZoomModes = ["hover", "toggle", "click", "toggle-click", "toggle-freeze", "hover-freeze"];
NgxImageZoomComponent.\u0275fac = function NgxImageZoomComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxImageZoomComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef));
};
NgxImageZoomComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxImageZoomComponent,
  selectors: [["lib-ngx-image-zoom"]],
  viewQuery: function NgxImageZoomComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 7);
      \u0275\u0275viewQuery(_c14, 7);
      \u0275\u0275viewQuery(_c23, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.zoomContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.imageThumbnail = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fullSizeImage = _t.first);
    }
  },
  inputs: {
    setThumbImage: [0, "thumbImage", "setThumbImage"],
    setFullImage: [0, "fullImage", "setFullImage"],
    setZoomMode: [0, "zoomMode", "setZoomMode"],
    setMagnification: [0, "magnification", "setMagnification"],
    setMinZoomRatio: [0, "minZoomRatio", "setMinZoomRatio"],
    setMaxZoomRatio: [0, "maxZoomRatio", "setMaxZoomRatio"],
    setScrollStepSize: [0, "scrollStepSize", "setScrollStepSize"],
    setEnableLens: [0, "enableLens", "setEnableLens"],
    setLensWidth: [0, "lensWidth", "setLensWidth"],
    setLensHeight: [0, "lensHeight", "setLensHeight"],
    setCircularLens: [0, "circularLens", "setCircularLens"],
    setEnableScrollZoom: [0, "enableScrollZoom", "setEnableScrollZoom"],
    altText: "altText",
    titleText: "titleText"
  },
  outputs: {
    zoomScroll: "zoomScroll",
    zoomPosition: "zoomPosition",
    imagesLoaded: "imagesLoaded"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 7,
  vars: 35,
  consts: [["zoomContainer", ""], ["imageThumbnail", ""], ["fullSizeImage", ""], [1, "ngxImageZoomContainer"], [1, "ngxImageZoomThumbnail", 3, "load", "alt", "title", "src"], [3, "ngClass"], [1, "ngxImageZoomFull", 3, "load", "alt", "title", "src"]],
  template: function NgxImageZoomComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3, 0)(2, "img", 4, 1);
      \u0275\u0275listener("load", function NgxImageZoomComponent_Template_img_load_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onThumbImageLoaded());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "img", 6, 2);
      \u0275\u0275listener("load", function NgxImageZoomComponent_Template_img_load_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFullImageLoaded());
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.thumbWidth, "px")("height", ctx.thumbHeight, "px");
      \u0275\u0275advance(2);
      \u0275\u0275property("alt", ctx.altText)("title", ctx.titleText)("src", ctx.thumbImage, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("display", ctx.display)("top", ctx.lensTop, "px")("left", ctx.lensLeft, "px")("width", ctx.lensWidth, "px")("height", ctx.lensHeight, "px")("border-radius", ctx.lensBorderRadius, "px");
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(33, _c32, ctx.enableLens));
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.display)("top", ctx.fullImageTop, "px")("left", ctx.fullImageLeft, "px")("width", ctx.magnifiedWidth, "px")("height", ctx.magnifiedHeight, "px");
      \u0275\u0275property("alt", ctx.altText)("title", ctx.titleText)("src", ctx.fullImage, \u0275\u0275sanitizeUrl);
    }
  },
  dependencies: [NgClass],
  styles: [".ngxImageZoomContainer[_ngcontent-%COMP%]{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail[_ngcontent-%COMP%]{pointer-events:all}.ngxImageZoomFull[_ngcontent-%COMP%]{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer[_ngcontent-%COMP%]{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled[_ngcontent-%COMP%]{border:2px solid red;cursor:crosshair;pointer-events:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxImageZoomComponent, [{
    type: Component,
    args: [{
      selector: "lib-ngx-image-zoom",
      template: '<div\n    #zoomContainer\n    class="ngxImageZoomContainer"\n    [style.width.px]="this.thumbWidth"\n    [style.height.px]="this.thumbHeight"\n>\n    <img\n        #imageThumbnail\n        class="ngxImageZoomThumbnail"\n        [alt]="altText"\n        [title]="titleText"\n        [src]="thumbImage"\n        (load)="onThumbImageLoaded()"\n    />\n\n    <div\n        [ngClass]="{\n            ngxImageZoomFullContainer: true,\n            ngxImageZoomLensEnabled: this.enableLens\n        }"\n        [style.display]="this.display"\n        [style.top.px]="this.lensTop"\n        [style.left.px]="this.lensLeft"\n        [style.width.px]="this.lensWidth"\n        [style.height.px]="this.lensHeight"\n        [style.border-radius.px]="this.lensBorderRadius"\n    >\n        <img\n            #fullSizeImage\n            class="ngxImageZoomFull"\n            [alt]="altText"\n            [title]="titleText"\n            [src]="fullImage"\n            (load)="onFullImageLoaded()"\n            [style.display]="this.display"\n            [style.top.px]="this.fullImageTop"\n            [style.left.px]="this.fullImageLeft"\n            [style.width.px]="this.magnifiedWidth"\n            [style.height.px]="this.magnifiedHeight"\n        />\n    </div>\n</div>\n',
      styles: [".ngxImageZoomContainer{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail{pointer-events:all}.ngxImageZoomFull{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled{border:2px solid red;cursor:crosshair;pointer-events:none}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    zoomContainer: [{
      type: ViewChild,
      args: ["zoomContainer", {
        static: true
      }]
    }],
    imageThumbnail: [{
      type: ViewChild,
      args: ["imageThumbnail", {
        static: true
      }]
    }],
    fullSizeImage: [{
      type: ViewChild,
      args: ["fullSizeImage", {
        static: true
      }]
    }],
    zoomScroll: [{
      type: Output
    }],
    zoomPosition: [{
      type: Output
    }],
    imagesLoaded: [{
      type: Output
    }],
    setThumbImage: [{
      type: Input,
      args: ["thumbImage"]
    }],
    setFullImage: [{
      type: Input,
      args: ["fullImage"]
    }],
    setZoomMode: [{
      type: Input,
      args: ["zoomMode"]
    }],
    setMagnification: [{
      type: Input,
      args: ["magnification"]
    }],
    setMinZoomRatio: [{
      type: Input,
      args: ["minZoomRatio"]
    }],
    setMaxZoomRatio: [{
      type: Input,
      args: ["maxZoomRatio"]
    }],
    setScrollStepSize: [{
      type: Input,
      args: ["scrollStepSize"]
    }],
    setEnableLens: [{
      type: Input,
      args: ["enableLens"]
    }],
    setLensWidth: [{
      type: Input,
      args: ["lensWidth"]
    }],
    setLensHeight: [{
      type: Input,
      args: ["lensHeight"]
    }],
    setCircularLens: [{
      type: Input,
      args: ["circularLens"]
    }],
    setEnableScrollZoom: [{
      type: Input,
      args: ["enableScrollZoom"]
    }],
    altText: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }]
  });
})();
var NgxImageZoomModule = class {
};
NgxImageZoomModule.\u0275fac = function NgxImageZoomModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxImageZoomModule)();
};
NgxImageZoomModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxImageZoomModule
});
NgxImageZoomModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxImageZoomModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxImageZoomComponent],
      imports: [CommonModule],
      exports: [NgxImageZoomComponent]
    }]
  }], null, null);
})();

// src/app/components/shop/product/product-details/widgets/product-delivery-information/product-delivery-information.component.ts
function ProductDeliveryInformationComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.product == null ? null : ctx_r0.product.estimated_delivery_text, " ");
  }
}
function ProductDeliveryInformationComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.product == null ? null : ctx_r0.product.return_policy_text, " ");
  }
}
function ProductDeliveryInformationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 2);
    \u0275\u0275template(5, ProductDeliveryInformationComponent_Conditional_0_Conditional_5_Template, 3, 1, "li")(6, ProductDeliveryInformationComponent_Conditional_0_Conditional_6_Template, 3, 1, "li");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "delivery_details"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.product == null ? null : ctx_r0.product.estimated_delivery_text) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.product == null ? null : ctx_r0.product.return_policy_text) ? 6 : -1);
  }
}
var ProductDeliveryInformationComponent = class _ProductDeliveryInformationComponent {
  static {
    this.\u0275fac = function ProductDeliveryInformationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDeliveryInformationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDeliveryInformationComponent, selectors: [["app-product-delivery-information"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "bordered-box"], [1, "sub-title"], [1, "product-offer"], [1, "ri-truck-line"], [1, "ri-arrow-left-right-line"]], template: function ProductDeliveryInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductDeliveryInformationComponent_Conditional_0_Template, 7, 5, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.product == null ? null : ctx.product.estimated_delivery_text) || (ctx.product == null ? null : ctx.product.return_policy_text) && (ctx.product == null ? null : ctx.product.is_return) ? 0 : -1);
      }
    }, dependencies: [CommonModule, TranslateModule, TranslatePipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDeliveryInformationComponent, { className: "ProductDeliveryInformationComponent" });
})();

// src/app/shared/components/widgets/modal/product-details-modal/product-details-modal.component.ts
var _c06 = ["thumbnailCarousel"];
var _c15 = (a0) => ({ "active": a0 });
function ProductDetailsModalComponent_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 21);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductDetailsModalComponent_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductDetailsModalComponent_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductDetailsModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 13);
    \u0275\u0275template(1, ProductDetailsModalComponent_Conditional_12_Conditional_1_Template, 3, 3, "li", 21)(2, ProductDetailsModalComponent_Conditional_12_Conditional_2_Template, 3, 3, "li", 22)(3, ProductDetailsModalComponent_Conditional_12_Conditional_3_Template, 3, 3, "li", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.is_sale_enable ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.is_trending ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.is_featured ? 3 : -1);
  }
}
function ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "video", 26);
    \u0275\u0275element(2, "source", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r3 ? image_r3.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r3.mime_type);
  }
}
function ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "audio", 28);
    \u0275\u0275element(2, "source", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r3 ? image_r3.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r3.mime_type);
  }
}
function ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "lib-ngx-image-zoom", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("zoomMode", "click")("thumbImage", image_r3.original_url)("fullImage", image_r3.original_url)("magnification", 2)("enableScrollZoom", true)("enableLens", true)("lensWidth", 300)("lensHeight", 300);
  }
}
function ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_2_Conditional_0_Template, 2, 8, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.isBrowser ? 0 : -1);
  }
}
function ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_0_Template, 3, 2, "div", 25)(1, ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_1_Template, 3, 2, "div", 25)(2, ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Conditional_2_Template, 1, 1);
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.videType.includes(image_r3.mime_type) ? 0 : ctx_r1.audioType.includes(image_r3.mime_type) ? 1 : 2);
  }
}
function ProductDetailsModalComponent_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailsModalComponent_Conditional_15_For_1_ng_template_0_Template, 3, 1, "ng-template", 24);
  }
  if (rf & 2) {
    const image_r3 = ctx.$implicit;
    \u0275\u0275property("id", image_r3.id.toString());
  }
}
function ProductDetailsModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductDetailsModalComponent_Conditional_15_For_1_Template, 1, 1, null, 24, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.product.product_galleries);
  }
}
function ProductDetailsModalComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.product.product_thumbnail ? ctx_r1.product.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "i", 33);
    \u0275\u0275elementStart(1, "video", 34);
    \u0275\u0275listener("click", function ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_2_Template_video_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const image_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      const owlCar_r6 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r6.to(ctx_r1.activeSlide = image_r5.id.toString()));
    });
    \u0275\u0275element(2, "source", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", image_r5 ? image_r5.original_url : "", \u0275\u0275sanitizeUrl)("type", image_r5.mime_type);
  }
}
function ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const image_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      const owlCar_r6 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r6.to(ctx_r1.activeSlide = image_r5.id.toString()));
    });
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementEnd();
  }
}
function ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 37);
    \u0275\u0275listener("click", function ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_4_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const image_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      const owlCar_r6 = \u0275\u0275reference(14);
      return \u0275\u0275resetView(owlCar_r6.to(ctx_r1.activeSlide = image_r5.id.toString()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", image_r5 ? image_r5.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 32);
    \u0275\u0275template(2, ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_2_Template, 3, 2)(3, ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_3_Template, 2, 0, "button")(4, ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Conditional_4_Template, 1, 2, "img", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c15, ctx_r1.activeSlide && image_r5.id.toString() == ctx_r1.activeSlide.toString()));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.videType.includes(image_r5.mime_type) ? 2 : ctx_r1.audioType.includes(image_r5.mime_type) ? 3 : 4);
  }
}
function ProductDetailsModalComponent_Conditional_17_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailsModalComponent_Conditional_17_For_5_ng_template_0_Template, 5, 4, "ng-template", 24);
  }
  if (rf & 2) {
    const image_r5 = ctx.$implicit;
    \u0275\u0275property("id", image_r5.id.toString());
  }
}
function ProductDetailsModalComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 30)(2, "owl-carousel-o", 31, 1);
    \u0275\u0275repeaterCreate(4, ProductDetailsModalComponent_Conditional_17_For_5_Template, 1, 1, null, 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.productThumbSlider);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.product.product_galleries);
  }
}
var ProductDetailsModalComponent = class _ProductDetailsModalComponent {
  constructor(modal, store, platformId) {
    this.modal = modal;
    this.store = store;
    this.platformId = platformId;
    this.modalOpen = false;
    this.videType = ["video/mp4", "video/webm", "video/ogg"];
    this.audioType = ["audio/mpeg", "audio/wav", "audio/ogg"];
    this.videoType = ["mp4", "mov", "avi"];
    this.audio = ["mpeg", "wav", "ogg", "mp3"];
    this.productQty = 1;
    this.totalPrice = 0;
    this.activeSlide = "0";
    this.productMainThumbSlider = productMainThumbSlider;
    this.productThumbSlider = productThumbSlider;
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product.id);
    });
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  selectedVariant(variant) {
    this.selectedVariation = variant;
  }
  onSlideChange(event) {
    if (this.thumbnailCarousel && event && event.slides && event.slides.length > 0) {
      this.activeSlide = event.slides[0].id;
      if (this.activeSlide) {
        this.thumbnailCarousel.to(this.activeSlide);
      }
    }
  }
  updateQuantity(qty) {
    if (1 > this.productQty + qty)
      return;
    this.productQty = this.productQty + qty;
    this.wholesalePriceCal();
  }
  wholesalePriceCal() {
    let wholesale = this.product.wholesales.find((value) => value.min_qty <= this.productQty && value.max_qty >= this.productQty) || null;
    if (wholesale && this.product.wholesale_price_type == "fixed") {
      this.totalPrice = this.productQty * wholesale.value;
    } else if (wholesale && this.product.wholesale_price_type == "percentage") {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product.sale_price);
      this.totalPrice = this.totalPrice - this.totalPrice * (wholesale.value / 100);
    } else {
      this.totalPrice = this.productQty * (this.selectedVariation ? this.selectedVariation.sale_price : this.product.sale_price);
    }
  }
  addToCart(product) {
    if (product) {
      const params = {
        id: this.cartItem && (this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id) ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: this.productQty
      };
      this.store.dispatch(new AddToCart(params)).subscribe({
        complete: () => {
          this.modal.close();
        }
      });
    }
  }
  getImageContent(imageUrl) {
    if (this.videoType.includes(imageUrl.substring(imageUrl.lastIndexOf(".") + 1))) {
      return `<i class="ri-video-line"></i>`;
    } else if (this.audio.includes(imageUrl.substring(imageUrl.lastIndexOf(".") + 1))) {
      return `<i class="ri-headphone-line"></i>`;
    } else {
      return `<img src="${imageUrl}" class="img-fluid">`;
    }
  }
  externalProductLink(link) {
    if (link) {
      window.open(link, "_blank");
    }
  }
  static {
    this.\u0275fac = function ProductDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailsModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailsModalComponent, selectors: [["app-product-details-modal"]], viewQuery: function ProductDetailsModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumbnailCarousel = _t.first);
      }
    }, inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 16, consts: [["owlCar", ""], ["thumbnailCarousel", ""], [1, "modal-content"], [1, "modal-header", "p-0"], [3, "click", "type", "id", "spinner"], [1, "ri-close-line"], [1, "modal-body"], [1, "row", "g-sm-4", "g-3"], [1, "col-lg-6"], [1, "sticky-top-custom"], [1, "thumbnail-image-slider"], [1, "col-12"], [1, "product-slick", "position-relative"], [1, "product-detail-label"], ["id", "thumbnailCarousel", 3, "changed", "options"], [1, "img-fluid", 3, "src", "alt"], [1, "col-lg-6", "rtl-text"], [1, "right-sidebar-modal", "product-page-details"], [3, "product", "selectedVariation"], [3, "selectedVariant", "product", "owlCar", "variant_hover"], [3, "product"], [1, "soldout"], [1, "trending"], [1, "featured"], ["carouselSlide", "", 3, "id"], [1, "slider-main-img"], ["controls", "", 1, "w-100"], [3, "src", "type"], ["controls", ""], [3, "zoomMode", "thumbImage", "fullImage", "magnification", "enableScrollZoom", "enableLens", "lensWidth", "lensHeight"], [1, "slider-nav"], [3, "options"], [1, "slider-image", 3, "ngClass"], [1, "ri-video-line"], ["width", "130", "height", "130", 3, "click"], [3, "click"], [1, "ri-music-2-line"], [1, "img-fluid", 3, "click", "src", "alt"]], template: function ProductDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "app-button", 4);
        \u0275\u0275listener("click", function ProductDetailsModalComponent_Template_app_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.modal.close("Cross click"));
        });
        \u0275\u0275element(3, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9)(8, "div", 10)(9, "div", 7)(10, "div", 11)(11, "div", 12);
        \u0275\u0275template(12, ProductDetailsModalComponent_Conditional_12_Template, 4, 3, "ul", 13);
        \u0275\u0275elementStart(13, "owl-carousel-o", 14, 0);
        \u0275\u0275listener("changed", function ProductDetailsModalComponent_Template_owl_carousel_o_changed_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSlideChange($event));
        });
        \u0275\u0275template(15, ProductDetailsModalComponent_Conditional_15_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, ProductDetailsModalComponent_Conditional_16_Template, 1, 2, "img", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, ProductDetailsModalComponent_Conditional_17_Template, 6, 1, "div", 11);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "div", 16)(19, "div", 17);
        \u0275\u0275element(20, "app-product-details", 18);
        \u0275\u0275elementStart(21, "app-product-content", 19);
        \u0275\u0275listener("selectedVariant", function ProductDetailsModalComponent_Template_app_product_content_selectedVariant_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectedVariant($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "app-product-delivery-information", 20);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const owlCar_r6 = \u0275\u0275reference(14);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("btn btn-close");
        \u0275\u0275property("type", "button")("id", "product_detail_close_modal_btn")("spinner", false);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.product.is_sale_enable || ctx.product.is_trending || ctx.product.is_featured ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.productMainThumbSlider);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length) ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!(ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length) ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product && (ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length) ? 17 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("product", ctx.product)("selectedVariation", ctx.selectedVariation ? ctx.selectedVariation : ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("owlCar", owlCar_r6)("variant_hover", false);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      CarouselModule,
      CarouselComponent,
      CarouselSlideDirective,
      TranslateModule,
      TranslatePipe,
      NgxImageZoomModule,
      NgxImageZoomComponent,
      NgbModule,
      ButtonComponent,
      ProductDetailsComponent,
      ProductContentComponent,
      ProductDeliveryInformationComponent
    ] });
  }
};
__decorate([
  Select(CartState.cartItems)
], ProductDetailsModalComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailsModalComponent, { className: "ProductDetailsModalComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/cart-button/cart-button.component.ts
var _c07 = ["productDetailModal"];
function CartButtonComponent_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 4);
    \u0275\u0275listener("click", function CartButtonComponent_Conditional_0_Conditional_0_Conditional_0_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addToCart(ctx_r1.product, 1));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("add-button add_cart");
    \u0275\u0275property("id", "add-to-cart" + ctx_r1.product.id)("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, ctx_r1.text), " ");
  }
}
function CartButtonComponent_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("add-button add_cart");
    \u0275\u0275property("id", "add-to-cart" + ctx_r1.product.id)("spinner", false)("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "out_of_stock"), " ");
  }
}
function CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "app-button", 4);
    \u0275\u0275listener("click", function CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Template_app_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(ctx_r1.product, -1));
    });
    \u0275\u0275template(3, CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Conditional_3_Template, 1, 0, "i", 8)(4, CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Conditional_4_Template, 1, 0, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 10);
    \u0275\u0275elementStart(6, "app-button", 11);
    \u0275\u0275listener("click", function CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Template_app_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateQuantity(ctx_r1.product, 1));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("open", ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn quantity-left-minus");
    \u0275\u0275property("id", "quantity-left-minus" + ctx_r1.product.id)("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cartItem.quantity > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.cartItem.quantity <= 1 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("value", ctx_r1.cartItem && ctx_r1.cartItem.quantity ? ctx_r1.cartItem.quantity : ctx_r1.cartItem);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn quantity-right-plus");
    \u0275\u0275property("id", "quantity-left-plus" + ctx_r1.product.id)("iconClass", "ri-add-fill")("spinner", false);
  }
}
function CartButtonComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartButtonComponent_Conditional_0_Conditional_0_Conditional_0_Template, 3, 7, "app-button", 1)(1, CartButtonComponent_Conditional_0_Conditional_0_Conditional_1_Template, 3, 8, "app-button", 2)(2, CartButtonComponent_Conditional_0_Conditional_0_Conditional_2_Template, 7, 14, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.product.stock_status == "in_stock" ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0 ? 2 : -1);
  }
}
function CartButtonComponent_Conditional_0_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 14);
    \u0275\u0275listener("click", function CartButtonComponent_Conditional_0_Conditional_1_Conditional_0_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.enableModal ? ctx_r1.product.type === "classified" ? ctx_r1.openModal(ctx_r1.product) : ctx_r1.addToCart(ctx_r1.product, 1) : ctx_r1.addToCart(ctx_r1.product, 1));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.class + " " + (ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0 ? "active" : ""));
    \u0275\u0275property("id", "add-to-cart" + ctx_r1.product.id)("spinner", false)("iconClass", ctx_r1.iconClass ? ctx_r1.iconClass : "ri-shopping-cart-line");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, !(ctx_r1.cartItem && ctx_r1.cartItem.quantity > 0) ? ctx_r1.text : "Added"), "");
  }
}
function CartButtonComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-button", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.class);
    \u0275\u0275property("id", "out-of-stock" + ctx_r1.product.id)("iconClass", ctx_r1.iconClass ? ctx_r1.iconClass : "ri-shopping-cart-line")("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, ctx_r1.text ? "out_of_stock" : ""), " ");
  }
}
function CartButtonComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartButtonComponent_Conditional_0_Conditional_1_Conditional_0_Template, 4, 8, "app-button", 12)(1, CartButtonComponent_Conditional_0_Conditional_1_Conditional_1_Template, 3, 8, "app-button", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.product.stock_status == "in_stock" ? 0 : 1);
  }
}
function CartButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CartButtonComponent_Conditional_0_Conditional_0_Template, 3, 2)(1, CartButtonComponent_Conditional_0_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.quantity ? 0 : 1);
  }
}
function CartButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 11);
    \u0275\u0275listener("click", function CartButtonComponent_Conditional_1_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.externalProductLink(ctx_r1.product.external_url));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.class + "btn btn-add-cart addcart-button");
    \u0275\u0275property("id", "add-to-cart" + ctx_r1.product.id)("iconClass", "ri-add-line")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, ctx_r1.product.external_button_text ? ctx_r1.product.external_button_text : "buy_now"), " ");
  }
}
var CartButtonComponent = class _CartButtonComponent {
  constructor(store, modal) {
    this.store = store;
    this.modal = modal;
    this.iconClass = "";
    this.enableModal = false;
    this.quantity = false;
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => item.product.id == this.product.id);
    });
  }
  addToCart(product, qty) {
    if (product) {
      const params = {
        id: this.cartItem && (this.selectedVariation && this.cartItem?.variation && this.selectedVariation?.id == this.cartItem?.variation?.id) ? this.cartItem.id : null,
        product_id: product?.id,
        product: product ? product : null,
        variation: this.selectedVariation ? this.selectedVariation : null,
        variation_id: this.selectedVariation?.id ? this.selectedVariation?.id : null,
        quantity: qty
      };
      this.store.dispatch(new AddToCart(params));
    }
  }
  updateQuantity(product, qty) {
    const params = {
      id: this.cartItem ? this.cartItem.id : null,
      product,
      product_id: product?.id,
      variation_id: this.cartItem ? this.cartItem?.variation_id : null,
      variation: this.cartItem ? this.cartItem?.variation : null,
      quantity: qty
    };
    this.store.dispatch(new UpdateCart(params));
  }
  externalProductLink(link) {
    if (link) {
      window.open(link, "_blank");
    }
  }
  openModal(product) {
    const modal = this.modal.open(ProductDetailsModalComponent, { centered: true, size: "lg", windowClass: "theme-modal-2 cart-view-modal" });
    modal.componentInstance.product = product;
  }
  static {
    this.\u0275fac = function CartButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartButtonComponent)(\u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartButtonComponent, selectors: [["app-cart-button"]], viewQuery: function CartButtonComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.productDetailModal = _t.first);
      }
    }, inputs: { product: "product", text: "text", class: "class", iconClass: "iconClass", selectedVariation: "selectedVariation", enableModal: "enableModal", quantity: "quantity" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "id", "class", "iconClass", "spinner"], [3, "id", "class", "spinner"], [3, "id", "class", "spinner", "disabled"], [1, "qty-box", 3, "open"], [3, "click", "id", "spinner"], [3, "id", "spinner", "disabled"], [1, "qty-box"], [1, "input-group"], [1, "ri-subtract-line"], [1, "ri-delete-bin-line"], ["type", "text", "name", "quantity", 1, "form-control", "input-number", "qty-input", 3, "value"], [3, "click", "id", "iconClass", "spinner"], [3, "id", "spinner", "class", "iconClass"], [3, "id", "iconClass", "class", "disabled"], [3, "click", "id", "spinner", "iconClass"], [3, "id", "iconClass", "disabled"]], template: function CartButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CartButtonComponent_Conditional_0_Template, 2, 1)(1, CartButtonComponent_Conditional_1_Template, 3, 8, "app-button", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.product && !ctx.product.is_external ? 0 : 1);
      }
    }, dependencies: [ButtonComponent, TranslateModule, TranslatePipe, CommonModule] });
  }
};
__decorate([
  Select(CartState.cartItems)
], CartButtonComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartButtonComponent, { className: "CartButtonComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/wishlist/wishlist.component.ts
var WishlistComponent = class _WishlistComponent {
  constructor(store) {
    this.store = store;
    this.class = "";
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] === !!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token) ? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  static {
    this.\u0275fac = function WishlistComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishlistComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], inputs: { product: "product", class: "class" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 7, consts: [["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"]], template: function WishlistComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275listener("click", function WishlistComponent_Template_a_click_0_listener() {
          return ctx.addToWishlist(ctx.product);
        });
        \u0275\u0275element(1, "i");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class);
        \u0275\u0275classProp("theme-color", ctx.product.is_wishlist);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("ri-heart-", ctx.product.is_wishlist ? "fill" : "line", "");
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/quick-view/quick-view.component.ts
var QuickViewComponent = class _QuickViewComponent {
  constructor(modal) {
    this.modal = modal;
  }
  openModal(product) {
    const modal = this.modal.open(ProductDetailsModalComponent, { centered: true, size: "lg", windowClass: "theme-modal-2 quick-view-modal" });
    modal.componentInstance.product = product;
  }
  static {
    this.\u0275fac = function QuickViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickViewComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickViewComponent, selectors: [["app-quick-view"]], inputs: { product: "product", class: "class" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["href", "javascript:void(0)", "title", "Quick View", 3, "click"], [1, "ri-search-line"]], template: function QuickViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275listener("click", function QuickViewComponent_Template_a_click_0_listener() {
          return ctx.openModal(ctx.product);
        });
        \u0275\u0275element(1, "i", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickViewComponent, { className: "QuickViewComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/compare/compare.component.ts
var CompareComponent = class _CompareComponent {
  constructor(store) {
    this.store = store;
    this.text = "";
  }
  addToCompare(product) {
    this.store.dispatch(new AddToCompare({ product }));
  }
  static {
    this.\u0275fac = function CompareComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CompareComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareComponent, selectors: [["app-compare"]], inputs: { product: "product", text: "text" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [["href", "javascript:void(0)", "title", "Compare", 3, "click"], [1, "ri-loop-right-fill"]], template: function CompareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275listener("click", function CompareComponent_Template_a_click_0_listener() {
          return ctx.addToCompare(ctx.product);
        });
        \u0275\u0275element(1, "i", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, ctx.text ? ctx.text : ""), "\n");
      }
    }, dependencies: [TranslateModule, TranslatePipe, CommonModule, RouterModule] });
  }
};
__decorate([
  Select(CompareState.compareItems)
], CompareComponent.prototype, "compareItems$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareComponent, { className: "CompareComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/product-hover-action/product-hover-action.component.ts
var _c08 = ["*"];
function ProductHoverActionComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-wishlist", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.class);
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductHoverActionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-quick-view", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductHoverActionComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-compare", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var ProductHoverActionComponent = class _ProductHoverActionComponent {
  constructor() {
    this.showAction = ["view", "wishlist", "compare"];
  }
  static {
    this.\u0275fac = function ProductHoverActionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductHoverActionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductHoverActionComponent, selectors: [["app-product-hover-action"]], inputs: { product: "product", showAction: "showAction", class: "class" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c08, decls: 9, vars: 3, consts: [[1, "hover-action"], [3, "product", "class"], [3, "product"]], template: function ProductHoverActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "ul", 0)(1, "li");
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "li");
        \u0275\u0275template(4, ProductHoverActionComponent_Conditional_4_Template, 1, 3, "app-wishlist", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "li");
        \u0275\u0275template(6, ProductHoverActionComponent_Conditional_6_Template, 1, 1, "app-quick-view", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "li");
        \u0275\u0275template(8, ProductHoverActionComponent_Conditional_8_Template, 1, 1, "app-compare", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.showAction.includes("wishlist") ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showAction.includes("view") ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showAction.includes("compare") ? 8 : -1);
      }
    }, dependencies: [WishlistComponent, QuickViewComponent, CompareComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductHoverActionComponent, { className: "ProductHoverActionComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/image-variant/image-variant.component.ts
var _c09 = (a0) => ["/product", a0];
function ProductBoxImageVariantComponent_Conditional_0_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const image_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.thumbnail ? ctx_r1.thumbnail.original_url : (image_r3 == null ? null : image_r3.original_url) ? image_r3 == null ? null : image_r3.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductBoxImageVariantComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxImageVariantComponent_Conditional_0_For_2_ng_template_0_Template, 1, 2, "ng-template", 5);
  }
}
function ProductBoxImageVariantComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "owl-carousel-o", 4);
    \u0275\u0275listener("mouseenter", function ProductBoxImageVariantComponent_Conditional_0_Template_owl_carousel_o_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startAutoplay());
    })("mouseleave", function ProductBoxImageVariantComponent_Conditional_0_Template_owl_carousel_o_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.stopAutoplay());
    });
    \u0275\u0275repeaterCreate(1, ProductBoxImageVariantComponent_Conditional_0_For_2_Template, 1, 0, null, 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r1.customOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.product.product_galleries);
  }
}
function ProductBoxImageVariantComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 3);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const \u0275$index_12_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275$index_12_r5 === 0 ? "front" : "back");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c09, ctx_r1.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r4 ? image_r4 == null ? null : image_r4.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductBoxImageVariantComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275repeaterCreate(1, ProductBoxImageVariantComponent_Conditional_1_For_2_Template, 3, 8, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.flipImage.slice(0, 2));
  }
}
function ProductBoxImageVariantComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "a", 3);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c09, ctx_r1.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.thumbnail ? ctx_r1.thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductBoxImageVariantComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c09, ctx_r1.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.thumbnail ? ctx_r1.thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
var ProductBoxImageVariantComponent = class _ProductBoxImageVariantComponent {
  constructor() {
    this.variant = "image_zoom";
    this.flipImage = [];
    this.imageType = ["image/apng", "image/avif", "image/gif", "image/jpeg", "image/png", "image/svg", "image/svg+xml", "image/webp"];
    this.customOptions = {
      loop: true,
      autoplayTimeout: 1200,
      items: 1,
      autoplay: false
      // Initialize autoplay as false
    };
  }
  ngOnInit() {
    this.themeOptions$.subscribe((options) => {
      this.variant = options.product.image_variant;
    });
    this.flipImage = this.gallery_images.map((image) => {
      let images;
      if (this.imageType.includes(image.mime_type)) {
        images = image;
      }
      return images;
    });
  }
  startAutoplay() {
    this.thumbnail = null;
    this.customOptions = __spreadProps(__spreadValues({}, this.customOptions), { autoplay: true });
  }
  stopAutoplay() {
    this.customOptions = __spreadProps(__spreadValues({}, this.customOptions), { autoplay: false });
  }
  static {
    this.\u0275fac = function ProductBoxImageVariantComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxImageVariantComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxImageVariantComponent, selectors: [["app-image-variant"]], inputs: { thumbnail: "thumbnail", gallery_images: "gallery_images", product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[3, "options"], [1, "flip"], [1, "zoom"], [3, "routerLink"], [3, "mouseenter", "mouseleave", "options"], ["carouselSlide", ""], [1, "img-fluid", "bg-img", 3, "src", "alt"], [3, "class"]], template: function ProductBoxImageVariantComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductBoxImageVariantComponent_Conditional_0_Template, 3, 1, "owl-carousel-o", 0)(1, ProductBoxImageVariantComponent_Conditional_1_Template, 3, 0, "div", 1)(2, ProductBoxImageVariantComponent_Conditional_2_Template, 3, 5, "div", 2)(3, ProductBoxImageVariantComponent_Conditional_3_Template, 2, 5, "a", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.variant === "image_slider" ? 0 : ctx.variant === "image_flip" ? 1 : ctx.variant === "image_zoom" ? 2 : 3);
      }
    }, dependencies: [RouterModule, RouterLink, CarouselModule, CarouselComponent, CarouselSlideDirective, CommonModule] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductBoxImageVariantComponent.prototype, "themeOptions$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxImageVariantComponent, { className: "ProductBoxImageVariantComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-eight/product-box-eight.component.ts
var _c010 = (a0) => ["/product/", a0];
function ProductBoxEightComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r1 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r1 === 100);
  }
}
var ProductBoxEightComponent = class _ProductBoxEightComponent {
  static {
    this.\u0275fac = function ProductBoxEightComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxEightComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxEightComponent, selectors: [["app-product-box-eight"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 21, consts: [[1, "basic-product", "theme-product-7"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [3, "product"], [1, "product-detail"], ["href", "javascript:void(0)", 1, "product-title", "mb-2", 3, "routerLink"], [1, "price"], [1, "rating-w-count", "mb-0"], [1, "rating"], [3, "rateChange", "rate"], [1, "product-action"], [3, "product", "enableModal", "text"]], template: function ProductBoxEightComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2)(3, "app-quick-view", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "a", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h4", 6);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "currencySymbol");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "ngb-rating", 9);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxEightComponent_Template_ngb_rating_rateChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(13, ProductBoxEightComponent_ng_template_13_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "span");
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275element(17, "app-wishlist", 3)(18, "app-cart-button", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status == "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275classMap("quick-option");
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c010, ctx.product.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.product.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 17, ctx.product.sale_price));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.product.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("enableModal", true)("text", "Add to cart");
      }
    }, dependencies: [
      CommonModule,
      NgbModule,
      NgbRating,
      RouterModule,
      RouterLink,
      TranslateModule,
      CurrencySymbolPipe,
      QuickViewComponent,
      WishlistComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxEightComponent, { className: "ProductBoxEightComponent" });
})();

// src/app/shared/components/widgets/display-variant-attributes/display-variant-attributes.component.ts
var _c011 = (a0) => ({ "": a0 });
var _c16 = (a0) => ({ "background-color": a0 });
var _c24 = (a0) => ({ "disabled": a0 });
function DisplayVariantAttributesComponent_For_1_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const value_r5 = ctx_r3.$implicit;
    const \u0275$index_9_r6 = ctx_r3.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r2.variantIds.includes(value_r5.id) && !ctx_r2.soldOutAttributesIds.includes(value_r5.id))("value", \u0275$index_9_r6)("disabled", ctx_r2.soldOutAttributesIds.includes(value_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r5 == null ? null : value_r5.value, " ");
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_0_For_6_Conditional_0_Template, 2, 4, "option", 4);
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r5.id) ? 0 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 2, 0);
    \u0275\u0275listener("change", function DisplayVariantAttributesComponent_For_1_Conditional_0_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const attribute_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementStart(2, "option", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, DisplayVariantAttributesComponent_For_1_Conditional_0_For_6_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const attribute_r2 = ctx_r6.$implicit;
    const \u0275$index_1_r8 = ctx_r6.$index;
    \u0275\u0275propertyInterpolate1("id", "input-state-", \u0275$index_1_r8, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 4, "choose"), " ", attribute_r2 == null ? null : attribute_r2.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r10.price);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Conditional_4_Template, 2, 1, "del");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, value_r10.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.product.discount ? 4 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "input", 9);
    \u0275\u0275listener("change", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const attribute_r2 = \u0275\u0275nextContext(4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Conditional_4_Template, 5, 4, "h5", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const value_r10 = ctx_r10.$implicit;
    const \u0275$index_18_r12 = ctx_r10.$index;
    const \u0275$index_1_r8 = \u0275\u0275nextContext(3).$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_18_r12)("name", "radio-group-" + \u0275$index_1_r8)("value", \u0275$index_18_r12)("checked", ctx_r2.variantIds.includes(value_r10.id) && !ctx_r2.soldOutAttributesIds.includes(value_r10.id))("disabled", ctx_r2.soldOutAttributesIds.includes(value_r10.id))("ngClass", \u0275\u0275pureFunction1(9, _c011, ctx_r2.soldOutAttributesIds.includes(value_r10.id)));
    \u0275\u0275advance();
    \u0275\u0275property("for", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_18_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", value_r10 == null ? null : value_r10.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPrice ? 4 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Conditional_0_Template, 5, 11, "div", 8);
  }
  if (rf & 2) {
    const value_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r10.id) ? 0 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 14);
    \u0275\u0275listener("mouseleave", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    })("click", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r14));
    })("mouseover", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template_li_mouseover_0_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r14, "hover"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r14.id) && !ctx_r2.soldOutAttributesIds.includes(value_r14.id));
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c16, value_r14.hex_color))("ngClass", \u0275\u0275pureFunction1(6, _c24, ctx_r2.soldOutAttributesIds.includes(value_r14.id)));
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_For_2_Conditional_0_Template, 1, 8, "li", 13);
  }
  if (rf & 2) {
    const value_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r14.id) ? 0 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span")(1, "a", 16);
    \u0275\u0275listener("click", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_Conditional_4_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openSizeChartModal(ctx_r2.product.size_chart_image));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "size_chart"));
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("mouseleave", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275elementStart(1, "a", 19);
    \u0275\u0275listener("click", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17));
    })("mouseover", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template_a_mouseover_1_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17, "hover"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r17.id) && !ctx_r2.soldOutAttributesIds.includes(value_r17.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c24, ctx_r2.soldOutAttributesIds.includes(value_r17.id)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r17.value);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_For_7_Conditional_0_Template, 3, 6, "li", 17);
  }
  if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r17.id) ? 0 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h6", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_Conditional_4_Template, 4, 3, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul");
    \u0275\u0275repeaterCreate(6, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_For_7_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 5, "select_size"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.product.size_chart_image ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(attribute_r2 == null ? null : attribute_r2.style);
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a")(1, "img", 25);
    \u0275\u0275listener("click", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template_img_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    })("mouseover", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template_img_mouseover_1_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", (value_r20 == null ? null : value_r20.variation_image) ? value_r20 == null ? null : value_r20.variation_image == null ? null : value_r20.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 26);
    \u0275\u0275listener("click", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    })("mouseover", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template_app_button_mouseover_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r20 == null ? null : value_r20.value, " ");
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 23);
    \u0275\u0275listener("mouseleave", function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275template(1, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_1_Template, 2, 1, "a")(2, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Conditional_2_Template, 2, 4, "app-button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext().$implicit;
    const attribute_r2 = \u0275\u0275nextContext(5).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r20.id) && !ctx_r2.soldOutAttributesIds.includes(value_r20.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c24, ctx_r2.soldOutAttributesIds.includes(value_r20.id)));
    \u0275\u0275advance();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) == "image" ? 1 : 2);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Conditional_0_Template, 3, 6, "li", 22);
  }
  if (rf & 2) {
    const value_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275conditional(ctx_r2.attributeValues.includes(value_r20.id) ? 0 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 21);
    \u0275\u0275repeaterCreate(1, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275classProp("quantity-variant", (attribute_r2 == null ? null : attribute_r2.style) != "image")("image-swatch", (attribute_r2 == null ? null : attribute_r2.style) == "image");
    \u0275\u0275property("ngClass", attribute_r2 == null ? null : attribute_r2.style);
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Conditional_0_Template, 3, 5, "ul", 20);
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.showVariableType.includes(attribute_r2 == null ? null : attribute_r2.style) ? 0 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.showVariableType.includes("rectangle") || ctx_r2.showVariableType.includes("image") ? 0 : -1);
  }
}
function DisplayVariantAttributesComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_0_Template, 3, 0, "div", 5)(1, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_1_Template, 3, 0, "ul", 6)(2, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_2_Template, 8, 7, "div", 7)(3, DisplayVariantAttributesComponent_For_1_Conditional_1_Conditional_3_Template, 1, 1);
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) == "radio" && ctx_r2.showVariableType.includes("radio") ? 0 : attribute_r2.style == "color" && ctx_r2.showVariableType.includes("color") ? 1 : attribute_r2.style == "circle" && ctx_r2.showVariableType.includes("circle") ? 2 : 3);
  }
}
function DisplayVariantAttributesComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DisplayVariantAttributesComponent_For_1_Conditional_0_Template, 7, 6, "select", 1)(1, DisplayVariantAttributesComponent_For_1_Conditional_1_Template, 4, 1);
  }
  if (rf & 2) {
    const attribute_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) == "dropdown" || ctx_r2.isAllVariantStyleDropdown && ctx_r2.showVariableType.includes("dropdown") ? 0 : 1);
  }
}
var DisplayVariantAttributesComponent = class _DisplayVariantAttributesComponent {
  constructor(modal) {
    this.modal = modal;
    this.attributes = [];
    this.isAllVariantStyleDropdown = false;
    this.showVariableType = ["color", "rectangle", "circle", "radio", "dropdown", "image", "color"];
    this.selectVariation = new EventEmitter();
    this.productQty = 1;
    this.attributeValues = [];
    this.variantIds = [];
    this.hoverVariantIds = [];
    this.soldOutAttributesIds = [];
    this.selectedOptions = [];
    this.break = false;
  }
  ngOnChanges(changes) {
    setTimeout(() => {
      if (changes["product"] && changes["product"].currentValue) {
        this.product = changes["product"]?.currentValue;
      }
      if (changes["attributes"] && changes["attributes"].currentValue) {
        this.attributes = changes["attributes"]?.currentValue;
      }
      this.cartItem$.subscribe((items) => {
        this.cartItem = items.find((item) => item.product.id == this.product.id);
      });
      this.checkVariantAvailability(this.product);
    }, 0);
    if (changes["showPrice"]?.currentValue) {
      this.product.attributes.forEach((attribute) => {
        attribute.attribute_values.forEach((value) => {
          this.product.variations.forEach((variation) => {
            variation.attribute_values.forEach((att) => {
              if (att.id !== value.id)
                value["price"] = variation.price;
              value["sale_price"] = variation.sale_price;
            });
          });
        });
      });
    }
  }
  checkVariantAvailability(product) {
    this.selectedOptions = [];
    this.attributeValues = [];
    this.selectedVariation = null;
    this.hoverVariation = null;
    product?.variations?.forEach((variation) => {
      variation?.attribute_values?.filter((attribute_value) => {
        if (this.attributeValues.indexOf(attribute_value?.id) === -1)
          this.attributeValues.push(attribute_value?.id);
      });
    });
    if (this.cartItem?.variation) {
      this.cartItem?.variation.attribute_values.filter((attribute_val) => {
        this.setVariant(this.product.variations, attribute_val);
      });
    }
    if (!this.cartItem) {
      for (const attribute of product?.attributes) {
        if (this.attributeValues?.length && attribute?.attribute_values?.length) {
          let values = [];
          for (const value of attribute.attribute_values) {
            if (values.indexOf(value.id) === -1)
              values.push(value.id);
            if (this.attributeValues.includes(value.id)) {
              this.setVariant(product.variations, value);
              if (this.break)
                break;
            }
          }
        }
      }
    }
    product.variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      product?.attributes.filter((attribute) => {
        if (attribute.style == "image") {
          attribute.attribute_values.filter((attribute_value) => {
            if (this.attributeValues.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
              }
            }
          });
        }
      });
    });
  }
  setVariant(variations, value, event) {
    const index = this.selectedOptions.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    this.soldOutAttributesIds = [];
    if (index === -1) {
      this.selectedOptions.push({ id: Number(value?.id), attribute_id: Number(value?.attribute_id) });
    } else {
      this.selectedOptions[index].id = value?.id;
    }
    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      this.variantIds = this.selectedOptions?.map((variants) => variants?.id);
      let doValuesMatch = attrValues.length === this.selectedOptions.length && attrValues.every((value2) => this.variantIds.includes(value2));
      if (doValuesMatch) {
        this.selectedVariation = variation;
        this.product["quantity"] = this.selectedVariation ? this.selectedVariation?.quantity : this.product?.quantity;
        this.product["sku"] = this.selectedVariation ? this.selectedVariation?.sku : this.product?.sku;
        this.product["sale_price"] = this.selectedVariation ? this.selectedVariation?.sale_price : this.product?.sale_price;
        if (this.owlCar && this.selectedVariation.variation_image) {
          this.owlCar.to(this.selectedVariation.variation_image.id.toString());
        }
        this.checkStockAvailable();
      }
      if (variation.stock_status == "out_of_stock" || (!variation.status || !this.product.status)) {
        variation?.attribute_values.filter((attr_value) => {
          if (attrValues.some((value2) => this.variantIds.includes(value2))) {
            if (attrValues.every((value2) => this.variantIds.includes(value2))) {
              this.soldOutAttributesIds.push(attr_value.id);
            } else if (!this.variantIds.includes(attr_value.id)) {
              this.soldOutAttributesIds.push(attr_value.id);
            }
          } else if (attrValues.length == 1 && attrValues.includes(attr_value.id)) {
            this.soldOutAttributesIds.push(attr_value.id);
          }
        });
      }
    });
    this.product?.attributes.filter((attribute) => {
      attribute.attribute_values.filter((a_value) => {
        if (a_value.id == value.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });
    if (this.selectedVariation && this.selectedVariation?.status && this.selectedVariation.stock_status == "in_stock") {
      this.break = true;
    } else {
      this.break = false;
    }
    if (event !== "hover") {
      this.hoverVariantIds = this.variantIds;
      this.hoverVariation = this.selectedVariation;
    }
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  checkStockAvailable() {
    if (this.selectedVariation) {
      this.selectedVariation["stock_status"] = this.selectedVariation?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    } else {
      this.product["stock_status"] = this.product?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    }
  }
  removeVariation() {
    this.variantIds = this.hoverVariantIds;
    this.selectedVariation = this.hoverVariation;
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  openSizeChartModal(image) {
    const sizeChart = this.modal.open(SizeChartModalComponent, { size: "lg", centered: true });
    sizeChart.componentInstance.image = image;
  }
  static {
    this.\u0275fac = function DisplayVariantAttributesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisplayVariantAttributesComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisplayVariantAttributesComponent, selectors: [["app-display-variant-attributes"]], inputs: { product: "product", attributes: "attributes", isAllVariantStyleDropdown: "isAllVariantStyleDropdown", owlCar: "owlCar", showPrice: "showPrice", showVariableType: "showVariableType" }, outputs: { selectVariation: "selectVariation" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["selectedValue", ""], [1, "form-control", "form-select", 3, "id"], [1, "form-control", "form-select", 3, "change", "id"], ["selected", "", "disabled", ""], [3, "selected", "value", "disabled"], [1, "d-flex", "digital-price"], [1, "color-variant"], [1, "size-box"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "change", "id", "name", "value", "checked", "disabled", "ngClass"], [1, "form-check-label", 3, "for"], [1, "sold", "text-content", "ms-auto"], [1, "theme-color", "price"], [3, "ngStyle", "active", "ngClass"], [3, "mouseleave", "click", "mouseover", "ngStyle", "ngClass"], [1, "product-title", "size-text"], ["href", "javascript:void(0)", 3, "click"], [3, "active", "ngClass"], [3, "mouseleave", "ngClass"], ["href", "javascript:void(0)", 3, "click", "mouseover"], [3, "ngClass", "quantity-variant", "image-swatch"], [3, "ngClass"], [1, "bg-light", 3, "active", "ngClass"], [1, "bg-light", 3, "mouseleave", "ngClass"], [3, "id", "type", "spinner"], [3, "click", "mouseover", "src"], [3, "click", "mouseover", "id", "type", "spinner"]], template: function DisplayVariantAttributesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, DisplayVariantAttributesComponent_For_1_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.attributes);
      }
    }, dependencies: [CommonModule, NgClass, NgStyle, CurrencySymbolPipe, TranslateModule, TranslatePipe, ButtonComponent] });
  }
};
__decorate([
  Select(CartState.cartItems)
], DisplayVariantAttributesComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisplayVariantAttributesComponent, { className: "DisplayVariantAttributesComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/dropdown-variant/dropdown-variant.component.ts
function DropdownVariantComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 3);
    \u0275\u0275pipe(1, "json");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_9_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", \u0275\u0275pipeBind1(1, 4, item_r1.value))("selected", ctx_r2.checkVariant(item_r1.value, \u0275$index_9_r2))("disabled", !item_r1.value.status || item_r1.value.stock_status === "out_of_stock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r1.label, " ");
  }
}
var DropdownVariantComponent = class _DropdownVariantComponent {
  constructor(ref) {
    this.ref = ref;
    this.selectedOption = new EventEmitter();
    this.result = [];
    this.soldOutAttributesIds = [];
  }
  ngOnChanges() {
    setTimeout(() => {
      if (this.product.variations?.length) {
        this.result = this.generateCombinations(this.product);
      }
    }, 1);
  }
  // Select First Attribute
  checkVariant(item, i) {
    if (item.stock_status == "in_stock" && item.status) {
      if (item.stock_status === "in_stock" && item.status && i === this.result.findIndex((obj) => obj.value.stock_status === "in_stock" && obj.value.status)) {
        return true;
      }
    }
  }
  getSelectedVariant(item) {
    if (item && item.target.value) {
      this.selectedOption.emit(JSON.parse(item.target.value));
    }
  }
  // Combination Of Variations
  generateCombinations(attributes) {
    const selectVariations = [];
    attributes.variations.forEach((variation) => {
      const labelAttributes = variation.attribute_values.map((attr) => attr.value)?.join("/");
      const value = variation;
      selectVariations.push({ label: labelAttributes, value });
    });
    selectVariations.forEach((item, i) => {
      if (item.value.stock_status == "in_stock" && !!item.value.status) {
        if (item.value.stock_status === "in_stock" && !!item.value.status && i === selectVariations.findIndex((obj) => obj.value.stock_status === "in_stock" && obj.value.status)) {
          this.selectedVariation = item.value;
          if (this.selectedVariation) {
            this.selectedOption.emit(this.selectedVariation);
          }
          return true;
        }
      }
    });
    return selectVariations;
  }
  static {
    this.\u0275fac = function DropdownVariantComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DropdownVariantComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DropdownVariantComponent, selectors: [["app-dropdown-variant"]], inputs: { product: "product" }, outputs: { selectedOption: "selectedOption" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 7, vars: 3, consts: [[1, "product-right", "product-page-details"], [1, "form-control", "form-select", 3, "change"], ["selected", "", "disabled", ""], [3, "value", "selected", "disabled"]], template: function DropdownVariantComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "select", 1);
        \u0275\u0275listener("change", function DropdownVariantComponent_Template_select_change_1_listener($event) {
          return ctx.getSelectedVariant($event);
        });
        \u0275\u0275elementStart(2, "option", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(5, DropdownVariantComponent_For_6_Template, 3, 6, "option", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "choose"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.result);
      }
    }, dependencies: [CommonModule, JsonPipe, TranslateModule, TranslatePipe] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DropdownVariantComponent, { className: "DropdownVariantComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-eleven/product-box-eleven.component.ts
var _c012 = (a0) => ["/product", a0];
var _c17 = (a0) => ["/brand", a0];
function ProductBoxElevenComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c17, ctx_r0.product.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.brand.name, " ");
  }
}
function ProductBoxElevenComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, "% ", \u0275\u0275pipeBind1(5, 5, "Off"), " ");
  }
}
function ProductBoxElevenComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dropdown-variant", 10);
    \u0275\u0275listener("selectedOption", function ProductBoxElevenComponent_Conditional_15_Template_app_dropdown_variant_selectedOption_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.getSelectedVariant($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
var ProductBoxElevenComponent = class _ProductBoxElevenComponent {
  constructor(config) {
    this.soldOutAttributesIds = [];
    this.result = [];
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit() {
    this.cartItem$.subscribe((items) => {
      this.cartItem = items.find((item) => {
        if (item.variation_id) {
          this.product.variations.find((i) => {
            return i.id == item.variation_id;
          });
        } else {
          return item.product.id == this.product.id;
        }
      });
    });
  }
  // Select First Attribute
  checkVariant(item, i) {
    if (item.stock_status == "in_stock" && item.status) {
      if (item.stock_status === "in_stock" && item.status && i === this.result.findIndex((obj) => obj.value.stock_status === "in_stock" && obj.value.status)) {
        return true;
      }
    }
  }
  // Change Variation
  getSelectedVariant(option) {
    if (option) {
      this.selectedVariation = option;
    }
  }
  static {
    this.\u0275fac = function ProductBoxElevenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxElevenComponent)(\u0275\u0275directiveInject(NgbRatingConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxElevenComponent, selectors: [["app-product-box-eleven"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 22, consts: [[1, "basic-product", "theme-product-10"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [3, "product", "text", "enableModal", "selectedVariation"], [1, "cart-info"], [3, "product"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [1, "price"], [1, "discounted-price"], [3, "selectedOption", "product"]], template: function ProductBoxElevenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2)(3, "app-cart-button", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "app-product-hover-action", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275template(7, ProductBoxElevenComponent_Conditional_7_Template, 2, 4, "a", 7);
        \u0275\u0275elementStart(8, "a", 7)(9, "h6");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "h4", 8);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "currencySymbol");
        \u0275\u0275template(14, ProductBoxElevenComponent_Conditional_14_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, ProductBoxElevenComponent_Conditional_15_Template, 1, 1, "app-dropdown-variant", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.selectedVariation ? ctx.selectedVariation.stock_status == "out_of_stock" || !ctx.selectedVariation.status : ctx.product.stock_status === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275classMap("addto-cart-bottom");
        \u0275\u0275property("product", ctx.product)("text", "Add to cart")("enableModal", !ctx.selectedVariation ? true : false)("selectedVariation", ctx.selectedVariation);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.brand ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c012, ctx.product.slug));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.selectedVariation ? ctx.selectedVariation.name : ctx.product.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 18, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.variations && ctx.product.variations.length > 0 && ctx.product.attributes.length > 0 ? 15 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      NgbModule,
      TranslateModule,
      TranslatePipe,
      CurrencySymbolPipe,
      ProductHoverActionComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent,
      DropdownVariantComponent
    ] });
  }
};
__decorate([
  Select(CartState.cartItems)
], ProductBoxElevenComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxElevenComponent, { className: "ProductBoxElevenComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-five/product-box-five.component.ts
var _c013 = () => [];
var _c18 = () => ["color"];
var _c25 = () => ["compare", "view"];
var _c33 = (a0) => ["/product", a0];
function ProductBoxFiveComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sold_out"));
  }
}
function ProductBoxFiveComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductBoxFiveComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductBoxFiveComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductBoxFiveComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r1 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r1 === 100);
  }
}
function ProductBoxFiveComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.selectedVariation ? ctx_r1.selectedVariation.price : ctx_r1.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedVariation ? ctx_r1.selectedVariation.discount : ctx_r1.product.discount, " % Off ");
  }
}
var ProductBoxFiveComponent = class _ProductBoxFiveComponent {
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxFiveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxFiveComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxFiveComponent, selectors: [["app-product-box-five"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 36, consts: [[1, "basic-product", "theme-product-4"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "trending-label"], [1, "out_of_stock"], [1, "color-panel", "coverflow"], [3, "selectVariation", "product", "attributes", "showVariableType"], [1, "cart-info"], [3, "product"], [3, "product", "showAction"], [3, "text", "product", "selectedVariation", "enableModal"], [1, "product-detail"], [1, "product-title", "mb-2", 3, "routerLink"], [1, "rating-w-count"], [1, "rating"], [3, "rateChange", "rate"], [1, "price"], [1, "discounted-price"]], template: function ProductBoxFiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "ul", 3);
        \u0275\u0275template(4, ProductBoxFiveComponent_Conditional_4_Template, 3, 3, "li", 4)(5, ProductBoxFiveComponent_Conditional_5_Template, 3, 3, "li")(6, ProductBoxFiveComponent_Conditional_6_Template, 3, 3, "li")(7, ProductBoxFiveComponent_Conditional_7_Template, 3, 3, "li");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "app-display-variant-attributes", 6);
        \u0275\u0275listener("selectVariation", function ProductBoxFiveComponent_Template_app_display_variant_attributes_selectVariation_9_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275element(11, "app-wishlist", 8);
        \u0275\u0275elementStart(12, "app-product-hover-action", 9);
        \u0275\u0275element(13, "app-cart-button", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 11)(15, "a", 12);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "ngb-rating", 15);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxFiveComponent_Template_ngb_rating_rateChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(20, ProductBoxFiveComponent_ng_template_20_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "h4", 16);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "currencySymbol");
        \u0275\u0275template(26, ProductBoxFiveComponent_Conditional_26_Template, 5, 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.stock_status === "out_of_stock" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_sale_enable ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_featured ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_trending ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product)("attributes", ctx.product.attributes || \u0275\u0275pureFunction0(31, _c013))("showVariableType", \u0275\u0275pureFunction0(32, _c18));
        \u0275\u0275advance(2);
        \u0275\u0275classMap("wishlist-icon");
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("showAction", \u0275\u0275pureFunction0(33, _c25));
        \u0275\u0275advance();
        \u0275\u0275classMap("add-cart-btn");
        \u0275\u0275property("text", "")("product", ctx.product)("selectedVariation", ctx.selectedVariation)("enableModal", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(34, _c33, ctx.product.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedVariation ? ctx.selectedVariation.name : ctx.product.name, " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.product.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 29, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 26 : -1);
      }
    }, dependencies: [
      CommonModule,
      CurrencySymbolPipe,
      RouterModule,
      RouterLink,
      TranslateModule,
      TranslatePipe,
      ProductHoverActionComponent,
      DisplayVariantAttributesComponent,
      WishlistComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent,
      NgbRating
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxFiveComponent, { className: "ProductBoxFiveComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-four/product-box-four.component.ts
var _c014 = () => ["compare", "view"];
var _c19 = (a0) => ["product", a0];
function ProductBoxFourComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.product.discount, "%");
  }
}
function ProductBoxFourComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c19, ctx_r0.product.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.name, " ");
  }
}
function ProductBoxFourComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxFourComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.product.price), " ");
  }
}
var ProductBoxFourComponent = class _ProductBoxFourComponent {
  constructor(config) {
    this.activeSlide = "0";
    this.options = {
      loop: true,
      nav: true,
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1
        }
      }
    };
    this.productMainThumbSlider = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      items: 1,
      nav: true,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      autoplay: false,
      autoHeight: true,
      autoplayTimeout: 5e3,
      autoplayHoverPause: true,
      navSpeed: 300,
      responsive: {
        0: {
          items: 1
        }
      }
    };
    config.max = 5;
    config.readonly = true;
  }
  selectVariation(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxFourComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxFourComponent)(\u0275\u0275directiveInject(NgbRatingConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxFourComponent, selectors: [["app-product-box-four"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 25, consts: [[1, "basic-product", "theme-product-3"], [1, "img-wrapper"], [1, "ribbon-round"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [3, "product", "showAction"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [1, "rating-w-count"], [1, "rating"], [3, "rateChange", "rate"], [1, "price"], [3, "text", "product", "iconClass", "enableModal"]], template: function ProductBoxFourComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ProductBoxFourComponent_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275element(3, "app-image-variant", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "app-wishlist", 5)(6, "app-product-hover-action", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275template(8, ProductBoxFourComponent_Conditional_8_Template, 2, 4, "a", 8);
        \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "ngb-rating", 11);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxFourComponent_Template_ngb_rating_rateChange_11_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(12, ProductBoxFourComponent_ng_template_12_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "h4", 12);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "currencySymbol");
        \u0275\u0275template(18, ProductBoxFourComponent_Conditional_18_Template, 3, 3, "del");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "app-cart-button", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.discount ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("wishlist-icon");
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("showAction", \u0275\u0275pureFunction0(24, _c014));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product && ctx.product.slug ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.product.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 22, ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.discount ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275classMap("add-cart-btn");
        \u0275\u0275property("text", "add_to_cart")("product", ctx.product)("iconClass", " ")("enableModal", true);
      }
    }, dependencies: [
      CommonModule,
      CarouselModule,
      NgbModule,
      NgbRating,
      TranslateModule,
      CurrencySymbolPipe,
      RouterModule,
      RouterLink,
      ProductHoverActionComponent,
      WishlistComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxFourComponent, { className: "ProductBoxFourComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/product-box-variant-attributes/product-box-variant-attributes.component.ts
var _c015 = (a0) => ({ "disabled": a0 });
var _c110 = (a0) => ({ "background-color": a0 });
function ProductBoxVariantAttributesComponent_For_1_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const value_r5 = ctx_r3.$implicit;
    const \u0275$index_9_r6 = ctx_r3.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("selected", ctx_r2.variantIds.includes(value_r5.id) && !ctx_r2.soldOutAttributesIds.includes(value_r5.id))("value", \u0275$index_9_r6)("disabled", ctx_r2.soldOutAttributesIds.includes(value_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r5 == null ? null : value_r5.value, " ");
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxVariantAttributesComponent_For_1_Conditional_0_For_6_Conditional_0_Template, 2, 4, "option", 7);
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r5.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 5, 0);
    \u0275\u0275listener("change", function ProductBoxVariantAttributesComponent_For_1_Conditional_0_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const attribute_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    });
    \u0275\u0275elementStart(2, "option", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, ProductBoxVariantAttributesComponent_For_1_Conditional_0_For_6_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const attribute_r2 = ctx_r6.$implicit;
    const \u0275$index_1_r8 = ctx_r6.$index;
    \u0275\u0275propertyInterpolate1("id", "input-state-", \u0275$index_1_r8, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 4, "choose"), " ", attribute_r2 == null ? null : attribute_r2.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r10.price);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Conditional_4_Template, 2, 1, "del");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, value_r10.sale_price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.product.discount ? 4 : -1);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("mouseleave", function ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275elementStart(1, "input", 10);
    \u0275\u0275listener("change", function ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const attribute_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, attribute_r2.attribute_values[$event.target.value]));
    })("mouseover", function ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Template_input_mouseover_1_listener() {
      \u0275\u0275restoreView(_r9);
      const value_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r10, "hover"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Conditional_4_Template, 5, 4, "h5", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const value_r10 = ctx_r10.$implicit;
    const \u0275$index_17_r12 = ctx_r10.$index;
    const \u0275$index_1_r8 = \u0275\u0275nextContext(2).$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_17_r12)("name", "radio-group-" + \u0275$index_1_r8)("value", \u0275$index_17_r12)("checked", ctx_r2.variantIds.includes(value_r10.id) && !ctx_r2.soldOutAttributesIds.includes(value_r10.id))("disabled", ctx_r2.soldOutAttributesIds.includes(value_r10.id))("ngClass", \u0275\u0275pureFunction1(9, _c015, ctx_r2.soldOutAttributesIds.includes(value_r10.id)));
    \u0275\u0275advance();
    \u0275\u0275property("for", "radio-" + \u0275$index_1_r8 + "-" + \u0275$index_17_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", value_r10 == null ? null : value_r10.value, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPrice ? 4 : -1);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Conditional_0_Template, 5, 11, "div", 8);
  }
  if (rf & 2) {
    const value_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r10.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, ProductBoxVariantAttributesComponent_For_1_Conditional_1_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
  }
  if (rf & 2) {
    const value_r14 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate2("", value_r14 == null ? null : value_r14.name, " / ", \u0275\u0275pipeBind1(1, 2, value_r14 == null ? null : value_r14.sale_price), "");
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a");
    \u0275\u0275template(2, ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Conditional_0_ng_template_2_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(4, "button", 16)(5, "img", 17);
    \u0275\u0275listener("mouseover", function ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Conditional_0_Template_img_mouseover_5_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(!ctx_r2.soldOutAttributesIds.includes(value_r14.id) && ctx_r2.setVariant(ctx_r2.product.variations, value_r14, "hover"));
    })("click", function ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Conditional_0_Template_img_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const value_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r14));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const tipContent_r15 = \u0275\u0275reference(3);
    const value_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r14.id) && !ctx_r2.soldOutAttributesIds.includes(value_r14.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c015, ctx_r2.soldOutAttributesIds.includes(value_r14.id)));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngbTooltip", tipContent_r15);
    \u0275\u0275advance();
    \u0275\u0275property("src", (value_r14 == null ? null : value_r14.variation_image) ? value_r14 == null ? null : value_r14.variation_image == null ? null : value_r14.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Conditional_0_Template, 6, 7, "li", 14);
  }
  if (rf & 2) {
    const value_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r14.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductBoxVariantAttributesComponent_For_1_Conditional_2_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_3_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275listener("mouseleave", function ProductBoxVariantAttributesComponent_For_1_Conditional_3_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    })("click", function ProductBoxVariantAttributesComponent_For_1_Conditional_3_For_2_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17));
    })("mouseover", function ProductBoxVariantAttributesComponent_For_1_Conditional_3_For_2_Conditional_0_Template_li_mouseover_0_listener() {
      \u0275\u0275restoreView(_r16);
      const value_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r17, "hover"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r17.id) && !ctx_r2.soldOutAttributesIds.includes(value_r17.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c015, ctx_r2.soldOutAttributesIds.includes(value_r17.id)))("ngStyle", \u0275\u0275pureFunction1(6, _c110, value_r17.hex_color));
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxVariantAttributesComponent_For_1_Conditional_3_For_2_Conditional_0_Template, 1, 8, "li", 18);
  }
  if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r17.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ProductBoxVariantAttributesComponent_For_1_Conditional_3_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMapInterpolate1("circle general-variant ", attribute_r2 == null ? null : attribute_r2.style, "");
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 24);
    \u0275\u0275listener("click", function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    })("mouseover", function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template_img_mouseover_0_listener() {
      \u0275\u0275restoreView(_r19);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", (value_r20 == null ? null : value_r20.variation_image) ? value_r20 == null ? null : value_r20.variation_image == null ? null : value_r20.variation_image.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-button", 25);
    \u0275\u0275listener("mouseover", function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_app_button_mouseover_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20, "hover"));
    })("click", function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template_app_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const value_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setVariant(ctx_r2.product.variations, value_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", "value_btn")("type", "button")("spinner", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", value_r20 == null ? null : value_r20.value, " ");
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 21);
    \u0275\u0275listener("mouseleave", function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.removeVariation());
    });
    \u0275\u0275template(1, ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_1_Template, 1, 1, "img", 22)(2, ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Conditional_2_Template, 2, 4, "app-button", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r20 = \u0275\u0275nextContext().$implicit;
    const attribute_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.variantIds.includes(value_r20.id) && !ctx_r2.soldOutAttributesIds.includes(value_r20.id));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c015, ctx_r2.soldOutAttributesIds.includes(value_r20.id)));
    \u0275\u0275advance();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) == "image" ? 1 : 2);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Conditional_0_Template, 3, 6, "li", 20);
  }
  if (rf & 2) {
    const value_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.attributeValues && ctx_r2.attributeValues.includes(value_r20.id) ? 0 : -1);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, ProductBoxVariantAttributesComponent_For_1_Conditional_4_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attribute_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMapInterpolate1("general-variant ", attribute_r2 == null ? null : attribute_r2.style, "");
    \u0275\u0275advance();
    \u0275\u0275repeater(attribute_r2.attribute_values);
  }
}
function ProductBoxVariantAttributesComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductBoxVariantAttributesComponent_For_1_Conditional_0_Template, 7, 6, "select", 2)(1, ProductBoxVariantAttributesComponent_For_1_Conditional_1_Template, 3, 0, "div", 3)(2, ProductBoxVariantAttributesComponent_For_1_Conditional_2_Template, 2, 0)(3, ProductBoxVariantAttributesComponent_For_1_Conditional_3_Template, 3, 3, "ul", 4)(4, ProductBoxVariantAttributesComponent_For_1_Conditional_4_Template, 3, 3, "ul", 4);
  }
  if (rf & 2) {
    const attribute_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((attribute_r2 == null ? null : attribute_r2.style) == "dropdown" || ctx_r2.isAllVariantStyleDropdown ? 0 : (attribute_r2 == null ? null : attribute_r2.style) == "radio" ? 1 : attribute_r2.style == "image_price" ? 2 : (attribute_r2 == null ? null : attribute_r2.style) == "color" ? 3 : 4);
  }
}
var ProductBoxVariantAttributesComponent = class _ProductBoxVariantAttributesComponent {
  constructor(modal) {
    this.modal = modal;
    this.attributes = [];
    this.isAllVariantStyleDropdown = false;
    this.showVariableType = ["color", "rectangle", "circle", "radio", "dropdown", "image"];
    this.selectVariation = new EventEmitter();
    this.productQty = 1;
    this.attributeValues = [];
    this.variantIds = [];
    this.hoverVariantIds = [];
    this.soldOutAttributesIds = [];
    this.selectedOptions = [];
    this.break = false;
  }
  ngOnChanges(changes) {
    setTimeout(() => {
      if (changes["product"] && changes["product"].currentValue) {
        this.product = changes["product"]?.currentValue;
      }
      if (changes["attributes"] && changes["attributes"].currentValue) {
        this.attributes = changes["attributes"]?.currentValue;
      }
      this.cartItem$.subscribe((items) => {
        this.cartItem = items.find((item) => item.product.id == this.product.id);
      });
      this.checkVariantAvailability(this.product);
    }, 0);
    if (changes["showPrice"]?.currentValue) {
      this.product.attributes.forEach((attribute) => {
        attribute.attribute_values.forEach((value) => {
          this.product.variations.forEach((variation) => {
            variation.attribute_values.forEach((att) => {
              if (att.id !== value.id)
                value["price"] = variation.price;
              value["sale_price"] = variation.sale_price;
            });
          });
        });
      });
    }
  }
  checkVariantAvailability(product) {
    this.selectedOptions = [];
    this.attributeValues = [];
    this.selectedVariation = null;
    this.hoverVariation = null;
    product?.variations?.forEach((variation) => {
      variation?.attribute_values?.filter((attribute_value) => {
        if (this.attributeValues.indexOf(attribute_value?.id) === -1)
          this.attributeValues.push(attribute_value?.id);
      });
    });
    if (this.cartItem?.variation) {
      this.cartItem?.variation.attribute_values.filter((attribute_val) => {
        this.setVariant(this.product.variations, attribute_val);
      });
    }
    if (!this.cartItem) {
      for (const attribute of product?.attributes) {
        if (this.attributeValues?.length && attribute?.attribute_values?.length) {
          let values = [];
          for (const value of attribute.attribute_values) {
            if (values.indexOf(value.id) === -1)
              values.push(value.id);
            if (this.attributeValues.includes(value.id)) {
              this.setVariant(product.variations, value);
              if (this.break)
                break;
            }
          }
        }
      }
    }
    product.variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      product?.attributes.filter((attribute) => {
        if (attribute.style == "image" || attribute.style == "image_price") {
          attribute.attribute_values.filter((attribute_value) => {
            if (this.attributeValues.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
                attribute_value.name = variation.name;
                attribute_value.sale_price = variation.sale_price;
              }
            }
          });
        }
      });
    });
  }
  setVariant(variations, value, event) {
    const index = this.selectedOptions.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    this.soldOutAttributesIds = [];
    if (index === -1) {
      this.selectedOptions.push({ id: Number(value?.id), attribute_id: Number(value?.attribute_id) });
    } else {
      this.selectedOptions[index].id = value?.id;
    }
    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      this.variantIds = this.selectedOptions?.map((variants) => variants?.id);
      let doValuesMatch = attrValues.length === this.selectedOptions.length && attrValues.every((value2) => this.variantIds.includes(value2));
      if (doValuesMatch) {
        this.selectedVariation = variation;
        this.product["quantity"] = this.selectedVariation ? this.selectedVariation?.quantity : this.product?.quantity;
        this.product["sku"] = this.selectedVariation ? this.selectedVariation?.sku : this.product?.sku;
        this.product["sale_price"] = this.selectedVariation ? this.selectedVariation?.sale_price : this.product?.sale_price;
        if (this.owlCar && this.selectedVariation.variation_image) {
          this.owlCar.to(this.selectedVariation.variation_image.id.toString());
        }
        this.checkStockAvailable();
      }
      if (variation.stock_status == "out_of_stock" || (!variation.status || !this.product.status)) {
        variation?.attribute_values.filter((attr_value) => {
          if (attrValues.some((value2) => this.variantIds.includes(value2))) {
            if (attrValues.every((value2) => this.variantIds.includes(value2))) {
              this.soldOutAttributesIds.push(attr_value.id);
            } else if (!this.variantIds.includes(attr_value.id)) {
              this.soldOutAttributesIds.push(attr_value.id);
            }
          } else if (attrValues.length == 1 && attrValues.includes(attr_value.id)) {
            this.soldOutAttributesIds.push(attr_value.id);
          }
        });
      }
    });
    this.product?.attributes.filter((attribute) => {
      attribute.attribute_values.filter((a_value) => {
        if (a_value.id == value.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });
    if (this.selectedVariation && this.selectedVariation?.status && this.selectedVariation.stock_status == "in_stock") {
      this.break = true;
    } else {
      this.break = false;
    }
    if (event !== "hover") {
      this.hoverVariantIds = this.variantIds;
      this.hoverVariation = this.selectedVariation;
    }
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  checkStockAvailable() {
    if (this.selectedVariation) {
      this.selectedVariation["stock_status"] = this.selectedVariation?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    } else {
      this.product["stock_status"] = this.product?.quantity < this.productQty ? "out_of_stock" : "in_stock";
    }
  }
  removeVariation() {
    this.variantIds = this.hoverVariantIds;
    this.selectedVariation = this.hoverVariation;
    if (this.selectedVariation) {
      this.selectVariation.emit(this.selectedVariation);
    }
  }
  openSizeChartModal(image) {
    const sizeChart = this.modal.open(SizeChartModalComponent, { size: "lg", centered: true });
    sizeChart.componentInstance.image = image;
  }
  static {
    this.\u0275fac = function ProductBoxVariantAttributesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxVariantAttributesComponent)(\u0275\u0275directiveInject(NgbModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxVariantAttributesComponent, selectors: [["app-product-box-variant-attributes"]], inputs: { product: "product", attributes: "attributes", isAllVariantStyleDropdown: "isAllVariantStyleDropdown", owlCar: "owlCar", showPrice: "showPrice", showVariableType: "showVariableType" }, outputs: { selectVariation: "selectVariation" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [["selectedValue", ""], ["tipContent", ""], [1, "form-control", "form-select", 3, "id"], [1, "d-flex", "digital-price"], [3, "class"], [1, "form-control", "form-select", 3, "change", "id"], ["selected", "", "disabled", ""], [3, "selected", "value", "disabled"], [1, "form-check"], [1, "form-check", 3, "mouseleave"], ["type", "radio", 1, "form-check-input", 3, "change", "mouseover", "id", "name", "value", "checked", "disabled", "ngClass"], [1, "form-check-label", "mb-0", 3, "for"], [1, "sold", "text-content", "ms-auto"], [1, "theme-color", "price"], [1, "", 3, "active", "ngClass"], [1, "", 3, "ngClass"], [3, "ngbTooltip"], [2, "width", "50px", 3, "mouseover", "click", "src"], ["placement", "top", 3, "active", "ngClass", "ngStyle"], ["placement", "top", 3, "mouseleave", "click", "mouseover", "ngClass", "ngStyle"], [3, "active", "ngClass"], [3, "mouseleave", "ngClass"], [3, "src"], [3, "id", "type", "spinner"], [3, "click", "mouseover", "src"], [3, "mouseover", "click", "id", "type", "spinner"]], template: function ProductBoxVariantAttributesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, ProductBoxVariantAttributesComponent_For_1_Template, 5, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.attributes);
      }
    }, dependencies: [CommonModule, NgClass, NgStyle, CurrencySymbolPipe, TranslateModule, TranslatePipe, ButtonComponent, NgbTooltip] });
  }
};
__decorate([
  Select(CartState.cartItems)
], ProductBoxVariantAttributesComponent.prototype, "cartItem$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxVariantAttributesComponent, { className: "ProductBoxVariantAttributesComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-horizontal/product-box-horizontal.component.ts
var _c016 = (a0) => ["/product/", a0];
var _c111 = () => [];
var _c26 = (a0) => ["/brand", a0];
function ProductBoxHorizontalComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "h5", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c26, ctx_r1.product.brand.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product.brand.name);
  }
}
function ProductBoxHorizontalComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.product.short_description);
  }
}
function ProductBoxHorizontalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "app-image-variant", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275template(4, ProductBoxHorizontalComponent_Conditional_0_Conditional_4_Template, 3, 4, "a", 5);
    \u0275\u0275elementStart(5, "a", 6)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ProductBoxHorizontalComponent_Conditional_0_Conditional_8_Template, 2, 1, "p");
    \u0275\u0275elementStart(9, "app-product-box-variant-attributes", 7);
    \u0275\u0275listener("selectVariation", function ProductBoxHorizontalComponent_Conditional_0_Template_app_product_box_variant_attributes_selectVariation_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedVariant($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "app-cart-button", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("thumbnail", ctx_r1.selectedVariation && ctx_r1.selectedVariation.variation_image ? ctx_r1.selectedVariation.variation_image : ctx_r1.product.product_thumbnail)("gallery_images", ctx_r1.selectedVariation && ctx_r1.selectedVariation.variation_image ? ctx_r1.selectedVariation.variation_image : ctx_r1.product.product_galleries)("product", ctx_r1.product);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.product.brand ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c016, ctx_r1.product.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedVariation ? ctx_r1.selectedVariation.name : ctx_r1.product.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.product.short_description ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r1.product)("attributes", ctx_r1.product.attributes || \u0275\u0275pureFunction0(16, _c111));
    \u0275\u0275advance();
    \u0275\u0275classMap("btn gradient-btn");
    \u0275\u0275property("text", "Add To Cart")("product", ctx_r1.product)("selectedVariation", ctx_r1.selectedVariation);
  }
}
function ProductBoxHorizontalComponent_Conditional_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r4 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r4 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r4 === 100);
  }
}
function ProductBoxHorizontalComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
    \u0275\u0275elementStart(2, "del");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 2, ctx_r1.product.sale_price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, ctx_r1.product.price));
  }
}
function ProductBoxHorizontalComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currencySymbol");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r1.product.price), " ");
  }
}
function ProductBoxHorizontalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 10);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13)(5, "ngb-rating", 14);
    \u0275\u0275twoWayListener("rateChange", function ProductBoxHorizontalComponent_Conditional_1_Template_ngb_rating_rateChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.rating_count, $event) || (ctx_r1.product.rating_count = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(6, ProductBoxHorizontalComponent_Conditional_1_ng_template_6_Template, 1, 5, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 6)(8, "h6");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h4");
    \u0275\u0275template(11, ProductBoxHorizontalComponent_Conditional_1_Conditional_11_Template, 5, 6, "del")(12, ProductBoxHorizontalComponent_Conditional_1_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c016, ctx_r1.product.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.product.product_thumbnail ? ctx_r1.product.product_thumbnail.original_url : "assets/images/placeholder/product.png", \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("rate", ctx_r1.product.rating_count);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c016, ctx_r1.product.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.product.discount ? 11 : 12);
  }
}
var ProductBoxHorizontalComponent = class _ProductBoxHorizontalComponent {
  constructor(config) {
    config.max = 5;
    config.readonly = true;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxHorizontalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxHorizontalComponent)(\u0275\u0275directiveInject(NgbRatingConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxHorizontalComponent, selectors: [["app-product-box-horizontal"]], inputs: { product: "product", product_box_style: "product_box_style" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "deal-box"], [1, "media"], [1, "deal-image"], [3, "thumbnail", "gallery_images", "product"], [1, "deal-content"], [1, "product-title", 3, "routerLink"], [3, "routerLink"], [3, "selectVariation", "product", "attributes"], [3, "text", "product", "selectedVariation"], [1, "gradient-text"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "img-fluid", 3, "src", "alt"], [1, "media-body", "align-self-center"], [1, "rating"], [3, "rateChange", "rate"]], template: function ProductBoxHorizontalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductBoxHorizontalComponent_Conditional_0_Template, 11, 17, "div", 0)(1, ProductBoxHorizontalComponent_Conditional_1_Template, 13, 11, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.product_box_style == "single_product" ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      NgbModule,
      NgbRating,
      CurrencySymbolPipe,
      RouterModule,
      RouterLink,
      ProductBoxVariantAttributesComponent,
      ProductBoxImageVariantComponent,
      CartButtonComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxHorizontalComponent, { className: "ProductBoxHorizontalComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-nine/product-box-nine.component.ts
var _c017 = () => ["compare", "view"];
var _c112 = (a0) => ["/product/", a0];
var _c27 = () => [];
var _c34 = () => ["image"];
function ProductBoxNineComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 6)(1, "app-display-variant-attributes", 14);
    \u0275\u0275listener("selectVariation", function ProductBoxNineComponent_Conditional_6_Template_app_display_variant_attributes_selectVariation_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedVariant($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("product", ctx_r1.product)("attributes", ctx_r1.product.attributes || \u0275\u0275pureFunction0(3, _c27))("showVariableType", \u0275\u0275pureFunction0(4, _c34));
  }
}
function ProductBoxNineComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.product.discount, "% Off ");
  }
}
function ProductBoxNineComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r3 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r3 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r3 === 100);
  }
}
var ProductBoxNineComponent = class _ProductBoxNineComponent {
  constructor(config) {
    config.max = 5;
    config.readonly = true;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxNineComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxNineComponent)(\u0275\u0275directiveInject(NgbRatingConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxNineComponent, selectors: [["app-product-box-nine"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 26, consts: [[1, "basic-product", "theme-product-8"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [3, "product", "showAction"], [1, "general-variant", "thumbnail"], [1, "product-detail"], ["href", "javascript:void(0)", 1, "product-title", 3, "routerLink"], [1, "price"], [1, "rating-w-count", "mb-0"], [1, "rating"], [3, "rateChange", "rate"], [3, "product", "enableModal"], [3, "selectVariation", "product", "attributes", "showVariableType"], [1, "discounted-price"]], template: function ProductBoxNineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "app-wishlist", 4)(5, "app-product-hover-action", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ProductBoxNineComponent_Conditional_6_Template, 2, 5, "ul", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "a", 8);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h4", 9);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "currencySymbol");
        \u0275\u0275template(13, ProductBoxNineComponent_Conditional_13_Template, 5, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "ngb-rating", 12);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxNineComponent_Template_ngb_rating_rateChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(17, ProductBoxNineComponent_ng_template_17_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(20, "app-cart-button", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status == "out-of-stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("wishlist-icon");
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("showAction", \u0275\u0275pureFunction0(23, _c017));
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.product.product_galleries == null ? null : ctx.product.product_galleries.length) ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c112, ctx.product.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.product.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 21, ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.discount ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.product.reviews_count, ")");
        \u0275\u0275advance();
        \u0275\u0275classMap("add-round-btn");
        \u0275\u0275property("product", ctx.product)("enableModal", true);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      CurrencySymbolPipe,
      TranslateModule,
      NgbModule,
      NgbRating,
      ProductHoverActionComponent,
      DisplayVariantAttributesComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent,
      WishlistComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxNineComponent, { className: "ProductBoxNineComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-one/product-box-one.component.ts
var _c018 = (a0) => ["/product", a0];
var _c113 = () => [];
var _c28 = (a0) => ["/brand", a0];
function ProductBoxOneComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sold_out"));
  }
}
function ProductBoxOneComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductBoxOneComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductBoxOneComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductBoxOneComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c28, ctx_r0.product.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.brand.name, " ");
  }
}
function ProductBoxOneComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, "% ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxOneComponent = class _ProductBoxOneComponent {
  constructor(config) {
    config.max = 5;
    config.readonly = true;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxOneComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxOneComponent)(\u0275\u0275directiveInject(NgbRatingConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxOneComponent, selectors: [["app-product-box-one"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 25, consts: [[1, "basic-product"], [1, "img-wrapper", "owl-slider"], [3, "thumbnail", "gallery_images", "product"], [1, "rating-label"], [1, "ri-star-s-fill"], [1, "cart-info"], [3, "product", "selectedVariation"], [3, "product"], [1, "trending-label"], [1, "out_of_stock"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [3, "routerLink"], [1, "price"], [3, "selectVariation", "product", "attributes"], [1, "discounted-price"]], template: function ProductBoxOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "app-cart-button", 6)(9, "app-product-hover-action", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "ul", 8);
        \u0275\u0275template(11, ProductBoxOneComponent_Conditional_11_Template, 3, 3, "li", 9)(12, ProductBoxOneComponent_Conditional_12_Template, 3, 3, "li")(13, ProductBoxOneComponent_Conditional_13_Template, 3, 3, "li")(14, ProductBoxOneComponent_Conditional_14_Template, 3, 3, "li");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, ProductBoxOneComponent_Conditional_16_Template, 2, 4, "a", 11);
        \u0275\u0275elementStart(17, "a", 12)(18, "h6");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h4", 13);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currencySymbol");
        \u0275\u0275template(23, ProductBoxOneComponent_Conditional_23_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "app-product-box-variant-attributes", 14);
        \u0275\u0275listener("selectVariation", function ProductBoxOneComponent_Template_app_product_box_variant_attributes_selectVariation_24_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.product.reviews_count);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product)("selectedVariation", ctx.selectedVariation);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.stock_status === "out_of_stock" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_sale_enable ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_featured ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_trending ? 14 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.brand ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c018, ctx.product.slug));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.selectedVariation ? ctx.selectedVariation.name : ctx.product.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 20, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("attributes", ctx.product.attributes || \u0275\u0275pureFunction0(24, _c113));
      }
    }, dependencies: [
      CommonModule,
      NgbModule,
      RouterModule,
      RouterLink,
      TranslateModule,
      TranslatePipe,
      CurrencySymbolPipe,
      ProductHoverActionComponent,
      ProductBoxVariantAttributesComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxOneComponent, { className: "ProductBoxOneComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-seven/product-box-seven.component.ts
var _c019 = (a0) => ["/product/", a0];
function ProductBoxSevenComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.product.unit);
  }
}
function ProductBoxSevenComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sold_out"));
  }
}
function ProductBoxSevenComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sale"));
  }
}
function ProductBoxSevenComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "featured"));
  }
}
function ProductBoxSevenComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trending"));
  }
}
function ProductBoxSevenComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxSevenComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.product.discount, "% ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxSevenComponent = class _ProductBoxSevenComponent {
  static {
    this.\u0275fac = function ProductBoxSevenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxSevenComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxSevenComponent, selectors: [["app-product-box-seven"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 26, consts: [[1, "basic-product", "theme-product-6"], [1, "img-wrapper"], [1, "unit-label"], [1, "trending-label"], [1, "out_of_stock"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [1, "product-detail"], ["href", "javascript:void(0)", 1, "product-title", 3, "routerLink"], [1, "rating-w-count"], [1, "rating"], [3, "rateChange", "rate"], [1, "price"], [1, "addtocart_btn"], [3, "product", "quantity", "text"], [1, "discounted-price"]], template: function ProductBoxSevenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ProductBoxSevenComponent_Conditional_2_Template, 2, 1, "label", 2);
        \u0275\u0275elementStart(3, "ul", 3);
        \u0275\u0275template(4, ProductBoxSevenComponent_Conditional_4_Template, 3, 3, "li", 4)(5, ProductBoxSevenComponent_Conditional_5_Template, 3, 3, "li")(6, ProductBoxSevenComponent_Conditional_6_Template, 3, 3, "li")(7, ProductBoxSevenComponent_Conditional_7_Template, 3, 3, "li");
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "app-image-variant", 5);
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275element(10, "app-product-hover-action", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "ngb-rating", 12);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxSevenComponent_Template_ngb_rating_rateChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(17, ProductBoxSevenComponent_ng_template_17_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h4", 13);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currencySymbol");
        \u0275\u0275template(23, ProductBoxSevenComponent_Conditional_23_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 14);
        \u0275\u0275element(25, "app-cart-button", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status == "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.unit ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.stock_status === "out_of_stock" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_sale_enable ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_featured ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_trending ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c019, ctx.product.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.product.name, " ");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.product.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 22, ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.discount ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("add-button add_cart");
        \u0275\u0275property("product", ctx.product)("quantity", true)("text", "Add to Cart");
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      CurrencySymbolPipe,
      TranslateModule,
      TranslatePipe,
      NgbModule,
      NgbRating,
      ProductHoverActionComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxSevenComponent, { className: "ProductBoxSevenComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-six/product-box-six.component.ts
var _c020 = (a0) => ["/product", a0];
var _c114 = (a0) => ["/brand", a0];
function ProductBoxSixComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "app-sale-timer", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("startDate", ctx_r0.product.sale_starts_at)("endDate", ctx_r0.product.sale_expired_at);
  }
}
function ProductBoxSixComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.product.is_sale_enable ? "sale" : ctx_r0.product.is_featured ? "featured" : ctx_r0.product.is_trending ? "trending" : ""));
  }
}
function ProductBoxSixComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c114, ctx_r0.product.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.brand.name, " ");
  }
}
function ProductBoxSixComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxSixComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, " % ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxSixComponent = class _ProductBoxSixComponent {
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxSixComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxSixComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxSixComponent, selectors: [["app-product-box-six"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 19, consts: [[1, "basic-product", "theme-product-5"], [1, "img-wrapper"], [1, "d-none", "d-sm-flex"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product", "enableModal"], [3, "product"], [1, "rotate-label"], [1, "product-detail"], [1, "brand-w-color"], [1, "product-title", 3, "routerLink"], [1, "rating-w-count", "mb-0", "d-sm-inline-flex", "d-none"], [1, "rating"], [3, "rateChange", "rate"], [3, "routerLink"], [1, "price"], [3, "startDate", "endDate"], [1, "discounted-price"]], template: function ProductBoxSixComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ProductBoxSixComponent_Conditional_2_Template, 2, 2, "div", 2);
        \u0275\u0275element(3, "app-image-variant", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "app-cart-button", 5)(6, "app-product-hover-action", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ProductBoxSixComponent_Conditional_7_Template, 3, 3, "label", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9);
        \u0275\u0275template(10, ProductBoxSixComponent_Conditional_10_Template, 2, 4, "a", 10);
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "ngb-rating", 13);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxSixComponent_Template_ngb_rating_rateChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(14, ProductBoxSixComponent_ng_template_14_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "h6")(18, "a", 14);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h4", 15);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currencySymbol");
        \u0275\u0275template(23, ProductBoxSixComponent_Conditional_23_Template, 6, 7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.sale_starts_at && ctx.product.sale_expired_at ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product)("enableModal", true);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_trending || ctx.product.is_sale_enable || ctx.product.is_featured ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.product.brand ? 10 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.product.reviews_count, ")");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c020, ctx.product.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.product.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 15, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 23 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      CurrencySymbolPipe,
      NgbModule,
      NgbRating,
      ProductHoverActionComponent,
      CartButtonComponent,
      SaleTimerComponent,
      ProductBoxImageVariantComponent,
      TranslateModule,
      TranslatePipe
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxSixComponent, { className: "ProductBoxSixComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-ten/product-box-ten.component.ts
var _c021 = () => ["view", "compare"];
var _c115 = (a0) => ["/product/", a0];
var _c29 = (a0) => ["/brand", a0];
function ProductBoxTenComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.product.is_sale_enable ? "sale-tag" : ctx_r0.product.is_featured ? "featured-tag" : ctx_r0.product.is_trending ? "trending-tag" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r0.product.is_sale_enable ? "sale" : ctx_r0.product.is_featured ? "featured" : ctx_r0.product.is_trending ? "trending" : ""));
  }
}
function ProductBoxTenComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("level2", ctx_r0.product.is_featured);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "on_sale"));
  }
}
function ProductBoxTenComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c29, ctx_r0.product.brand.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.product.brand.name);
  }
}
function ProductBoxTenComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.product.price), " ");
  }
}
function ProductBoxTenComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(4, 3, "save_up_to"), " ", ctx_r0.product.discount, "% ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
var ProductBoxTenComponent = class _ProductBoxTenComponent {
  static {
    this.\u0275fac = function ProductBoxTenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxTenComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxTenComponent, selectors: [["app-product-box-ten"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 27, consts: [[1, "basic-product", "theme-product-9"], [1, "img-wrapper", "overflow-visible"], [1, "ribbon-outer", 3, "ngClass"], [1, "ribbon-outer", 3, "level2"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [3, "product", "showAction"], [1, "product-detail"], [3, "routerLink"], ["href", "javascript:void(0)", 1, "product-title", 3, "routerLink"], [1, "bottom-details"], [1, "rating-label"], [1, "ri-star-fill"], [1, "review-count"], [1, "price-vertical"], [1, "discount-value"], [1, "ribbon-outer"], [1, "offer-icon", "me-2"], [1, "ri-discount-percent-fill"]], template: function ProductBoxTenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ProductBoxTenComponent_Conditional_2_Template, 3, 4, "div", 2)(3, ProductBoxTenComponent_Conditional_3_Template, 3, 5, "div", 3);
        \u0275\u0275element(4, "app-image-variant", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "app-wishlist", 6);
        \u0275\u0275elementStart(7, "app-product-hover-action", 7);
        \u0275\u0275element(8, "app-cart-button", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, ProductBoxTenComponent_Conditional_10_Template, 3, 4, "a", 9);
        \u0275\u0275elementStart(11, "a", 10);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "div")(16, "span");
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275template(23, ProductBoxTenComponent_Conditional_23_Template, 3, 3, "del");
        \u0275\u0275elementStart(24, "h4");
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "currencySymbol");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, ProductBoxTenComponent_Conditional_27_Template, 6, 7, "div", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.is_trending || ctx.product.is_sale_enable || ctx.product.is_featured ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_sale_enable ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275classMap("wishlist-icon");
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("showAction", \u0275\u0275pureFunction0(24, _c021));
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.brand ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(25, _c115, ctx.product.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.product.name, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.product.rating_count ? ctx.product.rating_count : 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("(", ctx.product.reviews_count, " ", \u0275\u0275pipeBind1(21, 20, "reviews"), ")");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.product.discount ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 22, ctx.product.sale_price));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.discount ? 27 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      RouterModule,
      RouterLink,
      CurrencySymbolPipe,
      TranslateModule,
      TranslatePipe,
      NgbModule,
      ProductHoverActionComponent,
      CartButtonComponent,
      ProductBoxImageVariantComponent,
      WishlistComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxTenComponent, { className: "ProductBoxTenComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-three/product-box-three.component.ts
var _c022 = (a0) => ["/product", a0];
var _c116 = () => [];
var _c210 = () => ["color"];
function ProductBoxThreeComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r1 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r1 === 100);
  }
}
function ProductBoxThreeComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 5)(1, "li");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product.unit);
  }
}
function ProductBoxThreeComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r1.selectedVariation ? ctx_r1.selectedVariation.price : ctx_r1.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedVariation ? ctx_r1.selectedVariation.discount : ctx_r1.product.discount, "% Off ");
  }
}
var ProductBoxThreeComponent = class _ProductBoxThreeComponent {
  constructor(store) {
    this.store = store;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  ariaValueText(current, max) {
    return `${current} out of ${max} hearts`;
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] === !!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token) ? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  static {
    this.\u0275fac = function ProductBoxThreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxThreeComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxThreeComponent, selectors: [["app-product-box-three"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 28, consts: [[1, "basic-product", "theme-product-2"], [1, "product-detail", "mt-0"], [1, "product-title", 3, "routerLink"], [1, "rating"], [3, "rateChange", "rate"], [1, "details"], [1, "add-wish"], [3, "product"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "quick-view-part"], [1, "bottom-detail"], [1, "color-panel", "color-lg"], [3, "selectVariation", "product", "attributes", "showVariableType"], [1, "price"], [1, "cart-detail"], [3, "product", "selectedVariation", "enableModal", "text"], [3, "product", "text"], [1, "discounted-price"]], template: function ProductBoxThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "ngb-rating", 4);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxThreeComponent_Template_ngb_rating_rateChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(6, ProductBoxThreeComponent_ng_template_6_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, ProductBoxThreeComponent_Conditional_7_Template, 3, 1, "ul", 5);
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275element(9, "app-wishlist", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275element(11, "app-image-variant", 9);
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275element(13, "app-quick-view", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 11)(15, "div")(16, "div", 12)(17, "app-display-variant-attributes", 13);
        \u0275\u0275listener("selectVariation", function ProductBoxThreeComponent_Template_app_display_variant_attributes_selectVariation_17_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "h4", 14);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "currencySymbol");
        \u0275\u0275template(21, ProductBoxThreeComponent_Conditional_21_Template, 5, 4);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "ul", 15)(23, "li");
        \u0275\u0275element(24, "app-cart-button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275element(26, "app-compare", 17);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status === "out_of_stock");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c022, ctx.product.slug));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedVariation ? ctx.selectedVariation.name : ctx.product.name, " ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.unit ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance(4);
        \u0275\u0275property("product", ctx.product)("attributes", ctx.product.attributes || \u0275\u0275pureFunction0(26, _c116))("showVariableType", \u0275\u0275pureFunction0(27, _c210));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 22, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 21 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("product", ctx.product)("selectedVariation", ctx.selectedVariation)("enableModal", true)("text", "add to cart");
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product)("text", "Compare");
      }
    }, dependencies: [
      CommonModule,
      CurrencySymbolPipe,
      RouterModule,
      RouterLink,
      NgbRating,
      NgbModule,
      QuickViewComponent,
      DisplayVariantAttributesComponent,
      CartButtonComponent,
      CompareComponent,
      ProductBoxImageVariantComponent,
      WishlistComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxThreeComponent, { className: "ProductBoxThreeComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-twelve/product-box-twelve.component.ts
var _c023 = () => [];
var _c117 = (a0) => ["/brand", a0];
function ProductBoxTwelveComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.product.is_sale_enable ? "sale" : ctx_r0.product.is_featured ? "featured" : ctx_r0.product.is_trending ? "trending" : ""));
  }
}
function ProductBoxTwelveComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c117, ctx_r0.product.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.brand.name, " ");
  }
}
function ProductBoxTwelveComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, " % ", \u0275\u0275pipeBind1(5, 5, "off"), " ");
  }
}
function ProductBoxTwelveComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const fill_r2 = ctx.fill;
    \u0275\u0275classMapInterpolate1("ri-star", fill_r2 === 100 ? "-fill" : "-line", "");
    \u0275\u0275classProp("filled", fill_r2 === 100);
  }
}
function ProductBoxTwelveComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c117, ctx_r0.product.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.brand.name, " ");
  }
}
function ProductBoxTwelveComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, "% Off ");
  }
}
var ProductBoxTwelveComponent = class _ProductBoxTwelveComponent {
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  static {
    this.\u0275fac = function ProductBoxTwelveComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxTwelveComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxTwelveComponent, selectors: [["app-product-box-twelve"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 28, consts: [[1, "basic-product", "theme-product-11"], [1, "img-wrapper"], [3, "thumbnail", "gallery_images", "product"], [1, "cart-info"], [3, "product"], [1, "trending-label-product11"], [1, "product-detail"], [1, "product-title", 3, "routerLink"], [1, "price"], [1, "rating-w-count", "mb-0", "mt-2"], [1, "rating"], [3, "rateChange", "rate"], [1, "abs-product"], [1, "product-detail", "mt-0"], [1, "product-title", "mb-2", 3, "routerLink"], [3, "selectVariation", "product", "attributes"], [3, "text", "iconClass", "product", "selectedVariation", "enableModal"], [1, "discounted-price"]], template: function ProductBoxTwelveComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "app-image-variant", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275element(4, "app-product-hover-action", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ProductBoxTwelveComponent_Conditional_5_Template, 3, 3, "label", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275template(7, ProductBoxTwelveComponent_Conditional_7_Template, 2, 4, "a", 7);
        \u0275\u0275elementStart(8, "h6");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h4", 8);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "currencySymbol");
        \u0275\u0275template(13, ProductBoxTwelveComponent_Conditional_13_Template, 6, 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "ngb-rating", 11);
        \u0275\u0275twoWayListener("rateChange", function ProductBoxTwelveComponent_Template_ngb_rating_rateChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.product.rating_count, $event) || (ctx.product.rating_count = $event);
          return $event;
        });
        \u0275\u0275template(17, ProductBoxTwelveComponent_ng_template_17_Template, 1, 5, "ng-template");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
        \u0275\u0275template(22, ProductBoxTwelveComponent_Conditional_22_Template, 2, 4, "a", 14);
        \u0275\u0275elementStart(23, "h4", 8);
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "currencySymbol");
        \u0275\u0275template(26, ProductBoxTwelveComponent_Conditional_26_Template, 5, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "app-product-box-variant-attributes", 15);
        \u0275\u0275listener("selectVariation", function ProductBoxTwelveComponent_Template_app_product_box_variant_attributes_selectVariation_27_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "app-cart-button", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.is_trending || ctx.product.is_sale_enable || ctx.product.is_featured ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.product.brand ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 23, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 13 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("rate", ctx.product.rating_count);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("(", ctx.product.reviews_count, ")");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.product.brand ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 25, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("attributes", ctx.product.attributes || \u0275\u0275pureFunction0(27, _c023));
        \u0275\u0275advance();
        \u0275\u0275classMap("add-cart-btn");
        \u0275\u0275property("text", "Add To Cart")("iconClass", " ")("product", ctx.product)("selectedVariation", ctx.selectedVariation)("enableModal", true);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      NgbModule,
      NgbRating,
      CurrencySymbolPipe,
      ProductHoverActionComponent,
      TranslateModule,
      TranslatePipe,
      ProductBoxVariantAttributesComponent,
      ProductBoxImageVariantComponent,
      CartButtonComponent
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxTwelveComponent, { className: "ProductBoxTwelveComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box-two/product-box-two.component.ts
var _c024 = () => ["compare", "view"];
var _c118 = () => [];
var _c211 = () => ["color", "image"];
var _c35 = (a0) => ["/brand", a0];
var _c42 = (a0) => ["product", a0];
function ProductBoxTwoComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.product.is_sale_enable ? "sale-tag" : ctx_r0.product.is_featured ? "featured-tag" : ctx_r0.product.is_trending ? "trending-tag" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, ctx_r0.product.is_sale_enable ? "sale" : ctx_r0.product.is_featured ? "featured" : ctx_r0.product.is_trending ? "trending" : ""));
  }
}
function ProductBoxTwoComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c35, ctx_r0.product.brand.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.product.brand.name, " ");
  }
}
function ProductBoxTwoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16)(1, "h6");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c42, ctx_r0.product.slug));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.name : ctx_r0.product.name, " ");
  }
}
function ProductBoxTwoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currencySymbol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, ctx_r0.selectedVariation ? ctx_r0.selectedVariation.price : ctx_r0.product.price), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedVariation ? ctx_r0.selectedVariation.discount : ctx_r0.product.discount, "% Off ");
  }
}
var ProductBoxTwoComponent = class _ProductBoxTwoComponent {
  constructor(store) {
    this.store = store;
  }
  selectedVariant(variation) {
    if (variation) {
      this.selectedVariation = variation;
    }
  }
  addToWishlist(product) {
    if (this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token)) {
      product["is_wishlist"] = !product["is_wishlist"];
    }
    let action = product["is_wishlist"] === !!this.store.selectSnapshot((state2) => state2.auth && state2.auth.access_token) ? new AddToWishlist({ product_id: product.id }) : new DeleteWishlist(product.id);
    if (action) {
      this.store.dispatch(action);
    }
  }
  static {
    this.\u0275fac = function ProductBoxTwoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxTwoComponent)(\u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxTwoComponent, selectors: [["app-product-box-two"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 50, consts: [[1, "basic-product", "theme-product-1"], [1, "overflow-hidden"], [1, "img-wrapper"], [1, "ribbon", 3, "ngClass"], [3, "thumbnail", "gallery_images", "product"], [1, "rating-label"], [1, "ri-star-s-fill"], [1, "cart-info"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 1, "wishlist-icon", 3, "click"], [3, "product", "showAction"], [3, "product", "selectedVariation", "enableModal"], [1, "product-detail"], [1, "brand-w-color"], [1, "product-title", 3, "routerLink"], [1, "color-panel"], [3, "selectVariation", "product", "attributes", "showVariableType"], [3, "routerLink"], [1, "price"], [1, "offer-panel"], [1, "offer-icon"], [1, "ri-discount-percent-fill"], [1, "discounted-price"]], template: function ProductBoxTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275template(3, ProductBoxTwoComponent_Conditional_3_Template, 4, 4, "div", 3);
        \u0275\u0275element(4, "app-image-variant", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275element(6, "i", 6);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "a", 8);
        \u0275\u0275listener("click", function ProductBoxTwoComponent_Template_a_click_10_listener() {
          return ctx.addToWishlist(ctx.product);
        });
        \u0275\u0275element(11, "i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "app-product-hover-action", 9);
        \u0275\u0275element(13, "app-cart-button", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 11)(15, "div")(16, "div", 12);
        \u0275\u0275template(17, ProductBoxTwoComponent_Conditional_17_Template, 2, 4, "a", 13);
        \u0275\u0275elementStart(18, "div", 14)(19, "app-display-variant-attributes", 15);
        \u0275\u0275listener("selectVariation", function ProductBoxTwoComponent_Template_app_display_variant_attributes_selectVariation_19_listener($event) {
          return ctx.selectedVariant($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(20, ProductBoxTwoComponent_Conditional_20_Template, 3, 4, "a", 16);
        \u0275\u0275elementStart(21, "h4", 17);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "currencySymbol");
        \u0275\u0275template(24, ProductBoxTwoComponent_Conditional_24_Template, 5, 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "ul", 18)(26, "li")(27, "span", 19);
        \u0275\u0275element(28, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "li")(33, "span", 19);
        \u0275\u0275element(34, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(35);
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "li")(39, "span", 19);
        \u0275\u0275element(40, "i", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sold-out", ctx.product.stock_status === "out_of_stock");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.product.is_trending || ctx.product.is_sale_enable || ctx.product.is_featured ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("thumbnail", ctx.selectedVariation && ctx.selectedVariation.variation_image ? ctx.selectedVariation.variation_image : ctx.product.product_thumbnail)("gallery_images", ctx.product.product_galleries)("product", ctx.product);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.product.reviews_count);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("theme-color", ctx.product.is_wishlist);
        \u0275\u0275advance();
        \u0275\u0275classMapInterpolate1("ri-heart-", ctx.product.is_wishlist ? "fill" : "line", "");
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("showAction", \u0275\u0275pureFunction0(47, _c024));
        \u0275\u0275advance();
        \u0275\u0275property("product", ctx.product)("selectedVariation", ctx.selectedVariation)("enableModal", true);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.product.brand ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("product", ctx.product)("attributes", ctx.product.attributes || \u0275\u0275pureFunction0(48, _c118))("showVariableType", \u0275\u0275pureFunction0(49, _c211));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.product.slug ? 20 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 33, ctx.selectedVariation ? ctx.selectedVariation.sale_price : ctx.product.sale_price), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.selectedVariation ? ctx.selectedVariation.discount : ctx.product.discount) ? 24 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(30, 35, "limited_time_offer"), ": ", ctx.product.discount, "% ", \u0275\u0275pipeBind1(31, 37, "off"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(36, 39, "limited_time_offer"), ": ", ctx.product.discount, "% ", \u0275\u0275pipeBind1(37, 41, "off"), "");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(42, 43, "limited_time_offer"), ": ", ctx.product.discount, "% ", \u0275\u0275pipeBind1(43, 45, "off"), "");
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgbModule,
      CurrencySymbolPipe,
      RouterModule,
      RouterLink,
      ProductHoverActionComponent,
      TranslateModule,
      TranslatePipe,
      CartButtonComponent,
      ProductBoxImageVariantComponent,
      DisplayVariantAttributesComponent
    ], styles: ["\n\n.marquee[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  max-width: 100%;\n  height: 200px;\n  overflow-x: hidden;\n}\n.track[_ngcontent-%COMP%] {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: _ngcontent-%COMP%_marquee 20s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n/*# sourceMappingURL=product-box-two.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxTwoComponent, { className: "ProductBoxTwoComponent" });
})();

// src/app/shared/components/widgets/product-box/product-box.component.ts
function ProductBoxComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-one", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-two", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-three", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-four", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-five", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-six", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-seven", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-eight", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-nine", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-ten", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-eleven", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-twelve", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product);
  }
}
function ProductBoxComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-box-horizontal", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("product", ctx_r0.product)("product_box_style", ctx_r0.product_box_style);
  }
}
var ProductBoxComponent = class _ProductBoxComponent {
  constructor(route, store, themeOptionService) {
    this.route = route;
    this.store = store;
    this.themeOptionService = themeOptionService;
    this.route.queryParams.subscribe((params) => this.path = params["theme"]);
    this.setVariant();
    this.productBox$.subscribe((res) => this.variant = res);
  }
  setVariant() {
    if (this.path == "fashion_one" || this.path == "fashion_two" || this.path == "fashion_three" || this.path == "furniture_two" || this.path == "watch" || this.path == "christmas" || this.path == "single_product") {
      this.variant = "product_box_one";
    } else if (this.path == "fashion_four" || this.path == "fashion_seven" || this.path == "tools") {
      this.variant = "product_box_two";
    } else if (this.path == "bicycle" || this.path == "surfboard") {
      this.variant = "product_box_three";
    } else if (this.path == "medical" || this.path == "fashion_six") {
      this.variant = "product_box_four";
    } else if (this.path == "perfume" || this.path == "furniture_dark" || this.path == "furniture_one" || this.path == "shoes") {
      this.variant = "product_box_five";
    } else if (this.path == "bag" || this.path == "electronics_one" || this.path == "electronics_two" || this.path == "electronics_three" || this.path == "fashion_five") {
      this.variant = "product_box_six";
    } else if (this.path == "marketplace_one" || this.path == "marketplace_two" || this.path == "marketplace_three" || this.path == "marketplace_four") {
      this.variant = "product_box_seven";
    } else if (this.path == "gym" || this.path == "vegetables_one" || this.path == "vegetables_two" || this.path == "vegetables_four") {
      this.variant = "product_box_eight";
    } else if (this.path == "marijuana" || this.path == "jewellery_three" || this.path == "goggles") {
      this.variant = "product_box_nine";
    } else if (this.path == "digital_download") {
      this.variant = "product_box_ten";
    } else if (this.path == "shoes") {
      this.variant = "product_box_fourteen";
    } else if (this.path == "jewellery_one" || this.path == "jewellery_two") {
      this.variant = "product_box_twelve";
    } else {
      this.themeOption$.subscribe((theme) => {
        this.variant = theme?.product ? theme?.product?.product_box_variant : "product_box_one";
      });
    }
    this.store.dispatch(new UpdateProductBox(this.variant));
  }
  static {
    this.\u0275fac = function ProductBoxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductBoxComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(ThemeOptionService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductBoxComponent, selectors: [["app-product-box"]], inputs: { product: "product", style: "style", product_box_style: "product_box_style" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 1, consts: [[3, "product"], [3, "product", "product_box_style"]], template: function ProductBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProductBoxComponent_Conditional_0_Template, 1, 1, "app-product-box-one", 0)(1, ProductBoxComponent_Conditional_1_Template, 1, 1, "app-product-box-two", 0)(2, ProductBoxComponent_Conditional_2_Template, 1, 1, "app-product-box-three", 0)(3, ProductBoxComponent_Conditional_3_Template, 1, 1, "app-product-box-four", 0)(4, ProductBoxComponent_Conditional_4_Template, 1, 1, "app-product-box-five", 0)(5, ProductBoxComponent_Conditional_5_Template, 1, 1, "app-product-box-six", 0)(6, ProductBoxComponent_Conditional_6_Template, 1, 1, "app-product-box-seven", 0)(7, ProductBoxComponent_Conditional_7_Template, 1, 1, "app-product-box-eight", 0)(8, ProductBoxComponent_Conditional_8_Template, 1, 1, "app-product-box-nine", 0)(9, ProductBoxComponent_Conditional_9_Template, 1, 1, "app-product-box-ten", 0)(10, ProductBoxComponent_Conditional_10_Template, 1, 1, "app-product-box-eleven", 0)(11, ProductBoxComponent_Conditional_11_Template, 1, 1, "app-product-box-twelve", 0)(12, ProductBoxComponent_Conditional_12_Template, 1, 2, "app-product-box-horizontal", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.style == "vertical" && ctx.variant == "product_box_one" ? 0 : ctx.style == "vertical" && ctx.variant == "product_box_two" ? 1 : ctx.style == "vertical" && ctx.variant == "product_box_three" ? 2 : ctx.style == "vertical" && ctx.variant == "product_box_four" ? 3 : ctx.style == "vertical" && ctx.variant == "product_box_five" ? 4 : ctx.style == "vertical" && ctx.variant == "product_box_six" ? 5 : ctx.style == "vertical" && ctx.variant == "product_box_seven" ? 6 : ctx.style == "vertical" && ctx.variant == "product_box_eight" ? 7 : ctx.style == "vertical" && ctx.variant == "product_box_nine" ? 8 : ctx.style == "vertical" && ctx.variant == "product_box_ten" ? 9 : ctx.style == "vertical" && ctx.variant == "product_box_eleven" ? 10 : ctx.style == "vertical" && ctx.variant == "product_box_twelve" ? 11 : ctx.style == "horizontal" ? 12 : -1);
      }
    }, dependencies: [
      CommonModule,
      ProductBoxOneComponent,
      ProductBoxHorizontalComponent,
      ProductBoxTwoComponent,
      ProductBoxThreeComponent,
      ProductBoxFourComponent,
      ProductBoxFiveComponent,
      ProductBoxSixComponent,
      ProductBoxSevenComponent,
      ProductBoxEightComponent,
      ProductBoxNineComponent,
      ProductBoxTenComponent,
      ProductBoxElevenComponent,
      ProductBoxTwelveComponent
    ] });
  }
};
__decorate([
  Select(ThemeOptionState.themeOptions)
], ProductBoxComponent.prototype, "themeOption$", void 0);
__decorate([
  Select(ThemeOptionState.productBox)
], ProductBoxComponent.prototype, "productBox$", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductBoxComponent, { className: "ProductBoxComponent" });
})();

// src/app/shared/components/widgets/product-box/widgets/skeleton-product-box/skeleton-product-box.component.ts
function SkeletonProductBoxComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275element(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275elementEnd()();
  }
}
function SkeletonProductBoxComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 7);
    \u0275\u0275element(2, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "a", 10);
    \u0275\u0275elementStart(5, "a", 11);
    \u0275\u0275element(6, "h6");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "h4", 6);
    \u0275\u0275elementEnd()();
  }
}
var SkeletonProductBoxComponent = class _SkeletonProductBoxComponent {
  static {
    this.\u0275fac = function SkeletonProductBoxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkeletonProductBoxComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkeletonProductBoxComponent, selectors: [["app-skeleton-product-box"]], inputs: { style: "style" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "media", "skeleton-media"], [1, "basic-product", "skeleton-basic-product"], [1, "image-wrapper"], [1, "media-body", "align-self-center"], [1, "rating"], [1, "name"], [1, "price"], [1, "img-wrapper", "owl-slider"], [1, "product-image-box"], [1, "product-detail"], ["href", "#!", 1, "product-title"], ["href", "#!"]], template: function SkeletonProductBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SkeletonProductBoxComponent_Conditional_0_Template, 6, 0, "div", 0)(1, SkeletonProductBoxComponent_Conditional_1_Template, 8, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.style == "horizontal" ? 0 : 1);
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkeletonProductBoxComponent, { className: "SkeletonProductBoxComponent" });
})();

// src/app/shared/store/action/coupon.action.ts
var GetCoupons = class {
  static {
    this.type = "[Coupon] Get";
  }
  constructor(payload) {
    this.payload = payload;
  }
};

// src/app/shared/services/coupon.service.ts
var CouponService = class _CouponService {
  constructor(http) {
    this.http = http;
    this.skeletonLoader = false;
  }
  getCoupons(payload) {
    return this.http.get(`${environment.URL}/coupon.json`, { params: payload });
  }
  static {
    this.\u0275fac = function CouponService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CouponService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CouponService, factory: _CouponService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/store/state/coupon.state.ts
var CouponState = class CouponState2 {
  constructor(couponService) {
    this.couponService = couponService;
  }
  static coupon(state2) {
    return state2.coupon;
  }
  getCoupons(ctx, action) {
    this.couponService.skeletonLoader = true;
    return this.couponService.getCoupons(action.payload).pipe(tap({
      next: (result) => {
        ctx.patchState({
          coupon: {
            data: result.data,
            total: result?.total ? result?.total : result.data?.length
          }
        });
      },
      complete: () => {
        this.couponService.skeletonLoader = false;
      },
      error: (err) => {
        throw new Error(err?.error?.message);
      }
    }));
  }
  static {
    this.\u0275fac = function CouponState_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CouponState2)(\u0275\u0275inject(CouponService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: CouponState2, factory: CouponState2.\u0275fac });
  }
};
__decorate([
  Action(GetCoupons)
], CouponState.prototype, "getCoupons", null);
__decorate([
  Selector()
], CouponState, "coupon", null);
CouponState = __decorate([
  State({
    name: "coupon",
    defaults: {
      coupon: {
        data: [],
        total: 0
      }
    }
  })
], CouponState);

export {
  CarouselSlideDirective,
  CarouselComponent,
  CarouselModule,
  GetCartItems,
  AddToCart,
  UpdateCart,
  ReplaceCart,
  SyncCart,
  DeleteCart,
  ToggleSidebarCart,
  ClearCart,
  CartService,
  CartState,
  ProductCartButtonComponent,
  GetWishlist,
  DeleteWishlist,
  VariantAttributesComponent,
  homeBannerSlider,
  productSlider,
  horizontalProductSlider,
  BlogSlider,
  SocialMediaSlider,
  BrandSlider,
  categorySlider,
  FurnitureCategorySlider,
  productMainThumbSlider,
  productThumbSlider,
  productSliderLayout,
  JewelleryCategorySlider,
  bagsProduct,
  collectionCategorySlider,
  toolsCategorySlider,
  compareSlider,
  testimonialSlider,
  teamSlider,
  productSlider6,
  productSlider5,
  productSlider4,
  productSlider3,
  productSlider2,
  blogSlider4,
  attributeSlider,
  ProductInformationComponent,
  GetQuestionAnswers,
  SendQuestion,
  UpdateQuestionAnswers,
  Feedback,
  QuestionModalComponent,
  ProductDetailsComponent,
  GetCompare,
  DeleteCompare,
  WishlistService,
  WishlistState,
  ProductContentComponent,
  NgxImageZoomComponent,
  NgxImageZoomModule,
  ProductDeliveryInformationComponent,
  CompareService,
  CompareState,
  DropdownVariantComponent,
  ProductBoxElevenComponent,
  ProductBoxComponent,
  SkeletonProductBoxComponent,
  GetCoupons,
  CouponService,
  CouponState
};
//# sourceMappingURL=chunk-KDHUGBQL.js.map
