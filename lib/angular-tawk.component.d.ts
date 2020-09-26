import { OnDestroy, OnInit, Renderer2 } from '@angular/core';
export declare class AngularTawkComponent implements OnInit, OnDestroy {
    private renderer;
    private document;
    id: string;
    isVisibleOnMobile: string;
    isMobile: boolean;
    script: any;
    constructor(renderer: Renderer2, document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
