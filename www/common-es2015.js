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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-auth-guard.js.map

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4b76b5c3.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
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
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => buttonToModify.classList.remove('ion-activated'));
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

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
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
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-img [src]=\"logo\" style=\"height: 3.2rem;\" class=\"p-1\"></ion-img>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t<ion-slide>\n\t\t<app-logo></app-logo>\n\t\t<h2>Hello</h2>\n\t\t<p>Slide 1</p>\n\t</ion-slide>\n\t<ion-slide>\n\t\t<h2>Hello there</h2>\n\t\t<p>Slide 2</p>\n\t</ion-slide>\n\t<ion-slide>\n\t\t<h2>Hello Agian</h2>\n\t\t<p>Slide 3</p>\n\t</ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\" color=\"warning\" (click)=\"navigateToLogin()\">\n\tStart\n</ion-button>\n");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/components/slides/slides.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/components/logo/logo.component.ts");








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_4__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_4__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() {
        this.logo = "assets/images/banners/scroadslight.svg";
    }
    ngOnInit() { }
};
LogoComponent.ctorParameters = () => [];
LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")).default]
    })
], LogoComponent);



/***/ }),

/***/ "./src/app/components/slides/slides.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  padding: 160px 20px;\n  display: block;\n}\nion-slide h2 {\n  font-size: 36px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBQ0Q7QUFBQztFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcblx0cGFkZGluZzogMTYwcHggMjBweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGgyIHtcblx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/slides/slides.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SlidesComponent = class SlidesComponent {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
    }
    ngOnInit() { }
};
SlidesComponent.ctorParameters = () => [];
SlidesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slides',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./slides.component.scss */ "./src/app/components/slides/slides.component.scss")).default]
    })
], SlidesComponent);



/***/ }),

/***/ "./src/app/components/start/start.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLogin() {
        this.router.navigate(['login']);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start.component.scss */ "./src/app/components/start/start.component.scss")).default]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showToast(message) {
        this.myToast = this.toast
            .create({
            message,
            duration: 2500,
        })
            .then((toastData) => {
            toastData.present();
        });
    }
    HideToast() {
        this.myToast = this.toast.dismiss();
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ToastService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map