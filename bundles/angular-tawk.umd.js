(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-tawk', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['angular-tawk'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-tawk.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTawkComponent = /** @class */ (function () {
        function AngularTawkComponent(renderer, document) {
            this.renderer = renderer;
            this.document = document;
            this.isMobile = false;
            this.script = this.renderer.createElement('script');
        }
        /**
         * @return {?}
         */
        AngularTawkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i)) {
                    this.isMobile = true;
                }
                if (window["$_Tawk"] && window["$_Tawk"].downloaded) {
                    if (this.isMobile && this.isVisibleOnMobile === 'no') {
                        window["$_Tawk"].hideWidget();
                    }
                    else {
                        window["$_Tawk"].showWidget();
                    }
                }
                else {
                    this.script.text = "var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date(), isVisible = '" + this.isVisibleOnMobile + "';\n                (function () {\n                var s1 = document.createElement(\"script\"), s0 = document.getElementsByTagName(\"script\")[0];\n                s1.async = true;\n                s1.src = 'https://embed.tawk.to/" + this.id + "/default';\n                s1.charset = 'UTF-8';\n                s1.setAttribute('crossorigin', '*');\n                s0.parentNode.insertBefore(s1, s0);\n                })();\n                    Tawk_API.onLoad = function() {\n                        if (" + this.isMobile + " && isVisible === 'no') {\n                            Tawk_API.hideWidget();\n                        }\n                    };\n                ";
                    this.renderer.appendChild(this.document.body, this.script);
                }
            };
        /**
         * @return {?}
         */
        AngularTawkComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (window["$_Tawk"] && window["$_Tawk"].ready) {
                    window["$_Tawk"].hideWidget();
                }
            };
        AngularTawkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'angular-tawk',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        AngularTawkComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        AngularTawkComponent.propDecorators = {
            id: [{ type: core.Input }],
            isVisibleOnMobile: [{ type: core.Input }]
        };
        return AngularTawkComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-tawk.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularTawkModule = /** @class */ (function () {
        function AngularTawkModule() {
        }
        AngularTawkModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AngularTawkComponent],
                        imports: [],
                        exports: [AngularTawkComponent]
                    },] }
        ];
        return AngularTawkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-tawk.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AngularTawkComponent = AngularTawkComponent;
    exports.AngularTawkModule = AngularTawkModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=angular-tawk.umd.js.map