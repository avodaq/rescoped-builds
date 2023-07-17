import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
export declare class CdkDatagridFocusInputDirective<Item> implements AfterViewInit {
    readonly _formControl: CdkDatagridFormControlDirective<Item>;
    private readonly _elementRef;
    private readonly _cdr;
    constructor(_formControl: CdkDatagridFormControlDirective<Item>, _elementRef: ElementRef<HTMLInputElement>, _cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridFocusInputDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkDatagridFocusInputDirective<any>, "input[cdkFocusInput]", never, {}, {}, never, never, true, never>;
}
export declare class CdkDatagridFocusComboboxDirective<Item> implements AfterViewInit {
    readonly _formControl: CdkDatagridFormControlDirective<Item>;
    private readonly _elementRef;
    private readonly _autoComplete;
    private readonly _cdr;
    constructor(_formControl: CdkDatagridFormControlDirective<Item>, _elementRef: ElementRef<HTMLInputElement>, _autoComplete: MatAutocompleteTrigger, _cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridFocusComboboxDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkDatagridFocusComboboxDirective<any>, "input[matAutocomplete][cdkFocusCombobox]", never, {}, {}, never, never, true, never>;
}
