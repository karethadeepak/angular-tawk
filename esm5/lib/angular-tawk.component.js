/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-tawk.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
export { AngularTawkComponent };
if (false) {
    /** @type {?} */
    AngularTawkComponent.prototype.id;
    /** @type {?} */
    AngularTawkComponent.prototype.isVisibleOnMobile;
    /** @type {?} */
    AngularTawkComponent.prototype.isMobile;
    /** @type {?} */
    AngularTawkComponent.prototype.script;
    /**
     * @type {?}
     * @private
     */
    AngularTawkComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    AngularTawkComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10YXdrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdGF3ay8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXRhd2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBV0ksOEJBQW9CLFFBQW1CLEVBQTRCLFFBQVE7UUFBdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBSDNFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWdDLENBQUM7Ozs7SUFFaEYsdUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7ZUFDbEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2VBQ25DLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztlQUNwQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7ZUFDbEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2VBQ2xDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztlQUN4QyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNoRDtZQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLElBQUksRUFBRTtnQkFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNqQztTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyw4RUFBNEUsSUFBSSxDQUFDLGlCQUFpQiwrT0FJL0UsSUFBSSxDQUFDLEVBQUUsNlFBTTNCLElBQUksQ0FBQyxRQUFRLHVKQUkxQixDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNJLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7Z0JBdkRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLEVBQUU7aUJBRWY7Ozs7Z0JBUHFELFNBQVM7Z0RBY2pCLE1BQU0sU0FBQyxRQUFROzs7cUJBTHhELEtBQUs7b0NBQ0wsS0FBSzs7SUFpRFYsMkJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQW5EWSxvQkFBb0I7OztJQUM3QixrQ0FBb0I7O0lBQ3BCLGlEQUFtQzs7SUFDbkMsd0NBQWlCOztJQUNqQixzQ0FBK0M7Ozs7O0lBRW5DLHdDQUEyQjs7Ozs7SUFBRSx3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhbmd1bGFyLXRhd2snLFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJUYXdrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXNWaXNpYmxlT25Nb2JpbGU6IHN0cmluZztcbiAgICBpc01vYmlsZSA9IGZhbHNlO1xuICAgIHNjcmlwdCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKVxuICAgICAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lL2kpXG4gICAgICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpXG4gICAgICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpXG4gICAgICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93W2AkX1Rhd2tgXSAmJiB3aW5kb3dbYCRfVGF3a2BdLmRvd25sb2FkZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlICYmIHRoaXMuaXNWaXNpYmxlT25Nb2JpbGUgPT09ICdubycpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbYCRfVGF3a2BdLmhpZGVXaWRnZXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93W2AkX1Rhd2tgXS5zaG93V2lkZ2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC50ZXh0ID0gYHZhciBUYXdrX0FQSSA9IFRhd2tfQVBJIHx8IHt9LCBUYXdrX0xvYWRTdGFydCA9IG5ldyBEYXRlKCksIGlzVmlzaWJsZSA9ICcke3RoaXMuaXNWaXNpYmxlT25Nb2JpbGV9JztcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksIHMwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgICAgICAgICAgICAgczEuYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHMxLnNyYyA9ICdodHRwczovL2VtYmVkLnRhd2sudG8vJHt0aGlzLmlkfS9kZWZhdWx0JztcbiAgICAgICAgICAgICAgICBzMS5jaGFyc2V0ID0gJ1VURi04JztcbiAgICAgICAgICAgICAgICBzMS5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJyonKTtcbiAgICAgICAgICAgICAgICBzMC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzMSwgczApO1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIFRhd2tfQVBJLm9uTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR7dGhpcy5pc01vYmlsZX0gJiYgaXNWaXNpYmxlID09PSAnbm8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGF3a19BUEkuaGlkZVdpZGdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5zY3JpcHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh3aW5kb3dbYCRfVGF3a2BdICYmIHdpbmRvd1tgJF9UYXdrYF0ucmVhZHkpIHtcbiAgICAgICAgICAgIHdpbmRvd1tgJF9UYXdrYF0uaGlkZVdpZGdldCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19