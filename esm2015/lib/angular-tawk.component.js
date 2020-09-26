/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-tawk.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class AngularTawkComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci10YXdrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdGF3ay8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXRhd2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTzNDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBTTdCLFlBQW9CLFFBQW1CLEVBQTRCLFFBQVE7UUFBdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBSDNFLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWdDLENBQUM7Ozs7SUFFaEYsUUFBUTtRQUNKLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2VBQ2xDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztlQUNuQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7ZUFDcEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2VBQ2xDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztlQUNsQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7ZUFDeEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFDaEQ7WUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNqQztpQkFBTTtnQkFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDakM7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsNEVBQTRFLElBQUksQ0FBQyxpQkFBaUI7Ozs7a0RBSS9FLElBQUksQ0FBQyxFQUFFOzs7Ozs7OEJBTTNCLElBQUksQ0FBQyxRQUFROzs7O2lCQUkxQixDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzVDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNqQztJQUNMLENBQUM7OztZQXZESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxFQUFFO2FBRWY7Ozs7WUFQcUQsU0FBUzs0Q0FjakIsTUFBTSxTQUFDLFFBQVE7OztpQkFMeEQsS0FBSztnQ0FDTCxLQUFLOzs7O0lBRE4sa0NBQW9COztJQUNwQixpREFBbUM7O0lBQ25DLHdDQUFpQjs7SUFDakIsc0NBQStDOzs7OztJQUVuQyx3Q0FBMkI7Ozs7O0lBQUUsd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYW5ndWxhci10YXdrJyxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyVGF3a0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlzVmlzaWJsZU9uTW9iaWxlOiBzdHJpbmc7XG4gICAgaXNNb2JpbGUgPSBmYWxzZTtcbiAgICBzY3JpcHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50KSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKVxuICAgICAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSlcbiAgICAgICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKVxuICAgICAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKVxuICAgICAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV2luZG93cyBQaG9uZS9pKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvd1tgJF9UYXdrYF0gJiYgd2luZG93W2AkX1Rhd2tgXS5kb3dubG9hZGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSAmJiB0aGlzLmlzVmlzaWJsZU9uTW9iaWxlID09PSAnbm8nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93W2AkX1Rhd2tgXS5oaWRlV2lkZ2V0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvd1tgJF9UYXdrYF0uc2hvd1dpZGdldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQudGV4dCA9IGB2YXIgVGF3a19BUEkgPSBUYXdrX0FQSSB8fCB7fSwgVGF3a19Mb2FkU3RhcnQgPSBuZXcgRGF0ZSgpLCBpc1Zpc2libGUgPSAnJHt0aGlzLmlzVmlzaWJsZU9uTW9iaWxlfSc7XG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLCBzMCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgICAgICAgICAgICAgIHMxLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzMS5zcmMgPSAnaHR0cHM6Ly9lbWJlZC50YXdrLnRvLyR7dGhpcy5pZH0vZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgczEuY2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICAgICAgICAgICAgczEuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICcqJyk7XG4gICAgICAgICAgICAgICAgczAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoczEsIHMwKTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICBUYXdrX0FQSS5vbkxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgke3RoaXMuaXNNb2JpbGV9ICYmIGlzVmlzaWJsZSA9PT0gJ25vJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhd2tfQVBJLmhpZGVXaWRnZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuc2NyaXB0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAod2luZG93W2AkX1Rhd2tgXSAmJiB3aW5kb3dbYCRfVGF3a2BdLnJlYWR5KSB7XG4gICAgICAgICAgICB3aW5kb3dbYCRfVGF3a2BdLmhpZGVXaWRnZXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==