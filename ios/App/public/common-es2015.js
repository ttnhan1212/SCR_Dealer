(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js ***!
  \*************************************************************************************/
/*! exports provided: AngularFireAuthGuard, AngularFireAuthGuardModule, canActivate, customClaims, emailVerified, hasCustomClaim, idTokenResult, isNotAnonymous, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function() { return AngularFireAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function() { return AngularFireAuthGuardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canActivate", function() { return canActivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customClaims", function() { return customClaims; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailVerified", function() { return emailVerified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function() { return hasCustomClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idTokenResult", function() { return idTokenResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function() { return isNotAnonymous; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedIn", function() { return loggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function() { return redirectLoggedInTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function() { return redirectUnauthorizedTo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");






/**
 * @fileoverview added by tsickle
 * Generated from: auth-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const ɵ0 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user;
/** @type {?} */
const loggedIn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ0));
class AngularFireAuthGuard {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} zone
     * @param {?} router
     */
    constructor(options, nameOrConfig, zone, router) {
        this.router = router;
        this.canActivate = (/**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        (next, state) => {
            /** @type {?} */
            const authPipeFactory = (/** @type {?} */ (next.data.authGuardPipe)) || ((/**
             * @return {?}
             */
            () => loggedIn));
            return this.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), authPipeFactory(next, state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
             * @param {?} can
             * @return {?}
             */
            can => typeof can === 'boolean' ? can : this.router.createUrlTree((/** @type {?} */ (can))))));
        });
        /** @type {?} */
        const schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵAngularFireSchedulers"](zone);
        /** @type {?} */
        const keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵkeepUnstableUntilFirstFactory"])(schedulers);
        /** @type {?} */
        const auth = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(new _angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵAngularFireSchedulers"](zone).outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @return {?}
         */
        () => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => __webpack_require__.e(/*! import() | firebase-auth */ "firebase-auth").then(__webpack_require__.bind(null, /*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js")))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @return {?}
         */
        () => Object(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @param {?} app
         * @return {?}
         */
        app => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => app.auth())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])({ bufferSize: 1, refCount: false }));
        this.authState = auth.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @param {?} auth
         * @return {?}
         */
        auth => new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](auth.onAuthStateChanged.bind(auth)))), keepUnstableUntilFirst);
    }
}
AngularFireAuthGuard.ɵfac = function AngularFireAuthGuard_Factory(t) { return new (t || AngularFireAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
/** @nocollapse */
AngularFireAuthGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
/** @nocollapse */ AngularFireAuthGuard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularFireAuthGuard_Factory() { return new AngularFireAuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); }, token: AngularFireAuthGuard, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_4__["FIREBASE_APP_NAME"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();
if (false) {}
/** @type {?} */
const canActivate = (/**
 * @param {?} pipe
 * @return {?}
 */
(pipe) => ({
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: pipe }
}));
const ɵ1 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user && !user.isAnonymous;
/** @type {?} */
const isNotAnonymous = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ1));
const ɵ2 = /**
 * @param {?} user
 * @return {?}
 */
(user) => user ? user.getIdTokenResult() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
/** @type {?} */
const idTokenResult = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((ɵ2));
const ɵ3 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user && user.emailVerified;
/** @type {?} */
const emailVerified = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ3));
const ɵ4 = /**
 * @param {?} idTokenResult
 * @return {?}
 */
idTokenResult => idTokenResult ? idTokenResult.claims : [];
/** @type {?} */
const customClaims = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(idTokenResult, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((ɵ4)));
/** @type {?} */
const hasCustomClaim = (/**
 * @param {?} claim
 * @return {?}
 */
(claim) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(customClaims, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
 * @param {?} claims
 * @return {?}
 */
claims => claims.hasOwnProperty(claim)))));
/** @type {?} */
const redirectUnauthorizedTo = (/**
 * @param {?} redirect
 * @return {?}
 */
(redirect) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
 * @param {?} loggedIn
 * @return {?}
 */
loggedIn => loggedIn || redirect))));
/** @type {?} */
const redirectLoggedInTo = (/**
 * @param {?} redirect
 * @return {?}
 */
(redirect) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
 * @param {?} loggedIn
 * @return {?}
 */
loggedIn => loggedIn && redirect || true))));

/**
 * @fileoverview added by tsickle
 * Generated from: auth-guard.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAuthGuardModule {
}
AngularFireAuthGuardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFireAuthGuardModule });
AngularFireAuthGuardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularFireAuthGuardModule_Factory(t) { return new (t || AngularFireAuthGuardModule)(); }, providers: [AngularFireAuthGuard] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFireAuthGuard]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-auth-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-auth-guard.js.map

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-5da929d4.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-5641d27f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-5641d27f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
    return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/privatepolicy/privatepolicy.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/privatepolicy/privatepolicy.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"title\">{{'signup.privacy_policy' | translate}}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"closePrivatePolicyModal()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"checkmark-done-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-item lines=\"none\">\n\t\t모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 공무원의 신분과 정치적\n\t\t중립성은 법률이 정하는 바에 의하여 보장된다, 국가는 지역간의 균형있는 발전을\n\t\t위하여 지역경제를 육성할 의무를 진다. 국가안전보장회의의 조직·직무범위 기타\n\t\t필요한 사항은 법률로 정한다. 대통령은 국무회의의 의장이 되고. 강화조약.\n\t\t국가는 이를 보장한다, 국회는 국무총리 또는 국무위원의 해임을 대통령에게\n\t\t건의할 수 있다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은\n\t\t법률로 정한다, 대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에\n\t\t있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가\n\t\t필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한\n\t\t재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수\n\t\t있다, 다만, 재판의 전심절차로서 행정심판을 할 수 있다. 대한민국은 통일을\n\t\t지향하며. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.\n\t\t경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할\n\t\t수 있다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그\n\t\t결과를 보고하여야 한다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은\n\t\t확정되며. 대한민국은 민주공화국이다, 대법원장과 대법관이 아닌 법관의 임기는\n\t\t10년으로 하며. 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을\n\t\t보조할 수 있다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과\n\t\t국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의\n\t\t직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다, 군사법원의 조직·권한\n\t\t및 재판관의 자격은 법률로 정한다. 이를 규제·조정할 수 있다, 모든 국민은\n\t\t신체의 자유를 가진다. 그 내용과 한계는 법률로 정한다. 중요한 국제조직에 관한\n\t\t조약, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수\n\t\t있다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다.\n\t\t대법원에 대법관을 둔다, 모든 국민은 법률이 정하는 바에 의하여 선거권을\n\t\t가진다. 그 임기는 4년으로 하며, 대통령의 임기가 만료되는 때에는 임기만료\n\t\t70일 내지 40일전에 후임자를 선거한다. 1차에 한하여 중임할 수 있다. 교육의\n\t\t자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여\n\t\t보장된다, 3인은 대법원장이 지명하는 자를 임명한다. 정당의 설립은 자유이며.\n\t\t공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써\n\t\t하되, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 주권의 제약에 관한\n\t\t조약, 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차.\n\t</ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/puagreement/puagreement.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/puagreement/puagreement.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"title\"\n\t\t\t>{{'signup.privacy_usage_agreement'| translate}}</ion-title\n\t\t>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"closePuaModal()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"checkmark-done-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-item lines=\"none\">\n\t\t모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 공무원의 신분과 정치적\n\t\t중립성은 법률이 정하는 바에 의하여 보장된다, 국가는 지역간의 균형있는 발전을\n\t\t위하여 지역경제를 육성할 의무를 진다. 국가안전보장회의의 조직·직무범위 기타\n\t\t필요한 사항은 법률로 정한다. 대통령은 국무회의의 의장이 되고. 강화조약.\n\t\t국가는 이를 보장한다, 국회는 국무총리 또는 국무위원의 해임을 대통령에게\n\t\t건의할 수 있다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은\n\t\t법률로 정한다, 대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에\n\t\t있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가\n\t\t필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한\n\t\t재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수\n\t\t있다, 다만, 재판의 전심절차로서 행정심판을 할 수 있다. 대한민국은 통일을\n\t\t지향하며. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.\n\t\t경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할\n\t\t수 있다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그\n\t\t결과를 보고하여야 한다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은\n\t\t확정되며. 대한민국은 민주공화국이다, 대법원장과 대법관이 아닌 법관의 임기는\n\t\t10년으로 하며. 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을\n\t\t보조할 수 있다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과\n\t\t국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의\n\t\t직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다, 군사법원의 조직·권한\n\t\t및 재판관의 자격은 법률로 정한다. 이를 규제·조정할 수 있다, 모든 국민은\n\t\t신체의 자유를 가진다. 그 내용과 한계는 법률로 정한다. 중요한 국제조직에 관한\n\t\t조약, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수\n\t\t있다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다.\n\t\t대법원에 대법관을 둔다, 모든 국민은 법률이 정하는 바에 의하여 선거권을\n\t\t가진다. 그 임기는 4년으로 하며, 대통령의 임기가 만료되는 때에는 임기만료\n\t\t70일 내지 40일전에 후임자를 선거한다. 1차에 한하여 중임할 수 있다. 교육의\n\t\t자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여\n\t\t보장된다, 3인은 대법원장이 지명하는 자를 임명한다. 정당의 설립은 자유이며.\n\t\t공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써\n\t\t하되, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 주권의 제약에 관한\n\t\t조약, 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차.\n\t</ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/termcondition/termcondition.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/termcondition/termcondition.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"title\"\n\t\t\t>{{'signup.terms_conditions' | translate}}</ion-title\n\t\t>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"closeTermCondition()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"checkmark-done-outline\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-item lines=\"none\">\n\t\t모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 공무원의 신분과 정치적\n\t\t중립성은 법률이 정하는 바에 의하여 보장된다, 국가는 지역간의 균형있는 발전을\n\t\t위하여 지역경제를 육성할 의무를 진다. 국가안전보장회의의 조직·직무범위 기타\n\t\t필요한 사항은 법률로 정한다. 대통령은 국무회의의 의장이 되고. 강화조약.\n\t\t국가는 이를 보장한다, 국회는 국무총리 또는 국무위원의 해임을 대통령에게\n\t\t건의할 수 있다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은\n\t\t법률로 정한다, 대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에\n\t\t있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가\n\t\t필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한\n\t\t재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수\n\t\t있다, 다만, 재판의 전심절차로서 행정심판을 할 수 있다. 대한민국은 통일을\n\t\t지향하며. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.\n\t\t경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할\n\t\t수 있다. 감사원은 세입·세출의 결산을 매년 검사하여 대통령과 차년도국회에 그\n\t\t결과를 보고하여야 한다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은\n\t\t확정되며. 대한민국은 민주공화국이다, 대법원장과 대법관이 아닌 법관의 임기는\n\t\t10년으로 하며. 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을\n\t\t보조할 수 있다. 나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과\n\t\t국민의 자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의\n\t\t직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다, 군사법원의 조직·권한\n\t\t및 재판관의 자격은 법률로 정한다. 이를 규제·조정할 수 있다, 모든 국민은\n\t\t신체의 자유를 가진다. 그 내용과 한계는 법률로 정한다. 중요한 국제조직에 관한\n\t\t조약, 법률에 저촉되지 아니하는 범위안에서 내부규율에 관한 규칙을 제정할 수\n\t\t있다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다.\n\t\t대법원에 대법관을 둔다, 모든 국민은 법률이 정하는 바에 의하여 선거권을\n\t\t가진다. 그 임기는 4년으로 하며, 대통령의 임기가 만료되는 때에는 임기만료\n\t\t70일 내지 40일전에 후임자를 선거한다. 1차에 한하여 중임할 수 있다. 교육의\n\t\t자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여\n\t\t보장된다, 3인은 대법원장이 지명하는 자를 임명한다. 정당의 설립은 자유이며.\n\t\t공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써\n\t\t하되, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 주권의 제약에 관한\n\t\t조약, 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차.\n\t</ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/index/modals/privatepolicy/privatepolicy.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/index/modals/privatepolicy/privatepolicy.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-top: 10px;\n}\n\n.title {\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvbW9kYWxzL3ByaXZhdGVwb2xpY3kvcHJpdmF0ZXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtBQUNEOztBQUVBO0VBQ0MsbUJBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L21vZGFscy9wcml2YXRlcG9saWN5L3ByaXZhdGVwb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuXHQtLXBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udGl0bGUge1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/index/modals/privatepolicy/privatepolicy.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/index/modals/privatepolicy/privatepolicy.page.ts ***!
  \************************************************************************/
/*! exports provided: PrivatepolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatepolicyPage", function() { return PrivatepolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let PrivatepolicyPage = class PrivatepolicyPage {
    constructor(modalController, translate) {
        this.modalController = modalController;
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
    }
    ngOnInit() { }
    closePrivatePolicyModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
PrivatepolicyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
PrivatepolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-privatepolicy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./privatepolicy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/privatepolicy/privatepolicy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./privatepolicy.page.scss */ "./src/app/pages/index/modals/privatepolicy/privatepolicy.page.scss")).default]
    })
], PrivatepolicyPage);



/***/ }),

/***/ "./src/app/pages/index/modals/puagreement/puagreement.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/index/modals/puagreement/puagreement.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-top: 10px;\n}\n\n.title {\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvbW9kYWxzL3B1YWdyZWVtZW50L3B1YWdyZWVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvbW9kYWxzL3B1YWdyZWVtZW50L3B1YWdyZWVtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcblx0LS1wYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnRpdGxlIHtcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/index/modals/puagreement/puagreement.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/index/modals/puagreement/puagreement.page.ts ***!
  \********************************************************************/
/*! exports provided: PuagreementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuagreementPage", function() { return PuagreementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let PuagreementPage = class PuagreementPage {
    constructor(modalController, translate) {
        this.modalController = modalController;
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
    }
    ngOnInit() { }
    closePuaModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
PuagreementPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
PuagreementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-puagreement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./puagreement.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/puagreement/puagreement.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./puagreement.page.scss */ "./src/app/pages/index/modals/puagreement/puagreement.page.scss")).default]
    })
], PuagreementPage);



/***/ }),

/***/ "./src/app/pages/index/modals/termcondition/termcondition.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/index/modals/termcondition/termcondition.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --padding-top: 10px;\n}\n\n.title {\n  line-height: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvbW9kYWxzL3Rlcm1jb25kaXRpb24vdGVybWNvbmRpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBQTtBQUNEOztBQUVBO0VBQ0MsbUJBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L21vZGFscy90ZXJtY29uZGl0aW9uL3Rlcm1jb25kaXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuXHQtLXBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4udGl0bGUge1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/index/modals/termcondition/termcondition.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/index/modals/termcondition/termcondition.page.ts ***!
  \************************************************************************/
/*! exports provided: TermconditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermconditionPage", function() { return TermconditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




let TermconditionPage = class TermconditionPage {
    constructor(modalController, translate) {
        this.modalController = modalController;
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
    }
    ngOnInit() { }
    closeTermCondition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
TermconditionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
TermconditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-termcondition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./termcondition.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/modals/termcondition/termcondition.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./termcondition.page.scss */ "./src/app/pages/index/modals/termcondition/termcondition.page.scss")).default]
    })
], TermconditionPage);



/***/ }),

/***/ "./src/app/services/dealer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dealer.service.ts ***!
  \********************************************/
/*! exports provided: DealerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerService", function() { return DealerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let DealerService = class DealerService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getDealer(id) {
        return this.firestore.collection('Dealer').doc(id).get();
    }
    createDealer(dealer, id) {
        return this.firestore.collection('Dealer').doc(id).set(dealer);
    }
    updateDealer(content, id) {
        return this.firestore.collection('Dealer').doc(id).update(content);
    }
    updateDealerImage(content, id) {
        return this.firestore
            .collection('Dealer')
            .doc(id)
            .collection('Images')
            .add(content);
    }
};
DealerService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
DealerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], DealerService);



/***/ }),

/***/ "./src/app/services/result.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/result.service.ts ***!
  \********************************************/
/*! exports provided: ResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ResultService = class ResultService {
    constructor(fireStore) {
        this.fireStore = fireStore;
    }
    createResult(content) {
        this.fireStore.collection('Result').add(content);
    }
};
ResultService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
ResultService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], ResultService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map