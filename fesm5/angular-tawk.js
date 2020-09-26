import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2, NgModule } from '@angular/core';

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
        { type: Component, args: [{
                    selector: 'angular-tawk',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    AngularTawkComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    AngularTawkComponent.propDecorators = {
        id: [{ type: Input }],
        isVisibleOnMobile: [{ type: Input }]
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
        { type: NgModule, args: [{
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

export { AngularTawkComponent, AngularTawkModule };

//# sourceMappingURL=angular-tawk.js.map