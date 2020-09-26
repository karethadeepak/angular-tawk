import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-tawk.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTawkComponent {
    /**
     * @param {?} renderer
     * @param {?} document
     */
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.isMobile = false;
        this.script = this.renderer.createElement('script');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            this.isMobile = true;
        }
        if (window[`$_Tawk`] && window[`$_Tawk`].downloaded) {
            if (this.isMobile && this.isVisibleOnMobile === 'no') {
                window[`$_Tawk`].hideWidget();
            }
            else {
                window[`$_Tawk`].showWidget();
            }
        }
        else {
            this.script.text = `var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date(), isVisible = '${this.isVisibleOnMobile}';
                (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/${this.id}/default';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
                })();
                    Tawk_API.onLoad = function() {
                        if (${this.isMobile} && isVisible === 'no') {
                            Tawk_API.hideWidget();
                        }
                    };
                `;
            this.renderer.appendChild(this.document.body, this.script);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (window[`$_Tawk`] && window[`$_Tawk`].ready) {
            window[`$_Tawk`].hideWidget();
        }
    }
}
AngularTawkComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-tawk',
                template: ``
            }] }
];
/** @nocollapse */
AngularTawkComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
AngularTawkComponent.propDecorators = {
    id: [{ type: Input }],
    isVisibleOnMobile: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-tawk.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTawkModule {
}
AngularTawkModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AngularTawkComponent],
                imports: [],
                exports: [AngularTawkComponent]
            },] }
];

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