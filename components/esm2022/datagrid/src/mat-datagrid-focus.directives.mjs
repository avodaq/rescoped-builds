import { ChangeDetectorRef, Directive, ElementRef, Inject } from '@angular/core';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { DATAGRID_FORM_CONTROL_TOKEN } from './cdk-datagrid-form-control.factory';
// MDC
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-form-control.directive";
import * as i2 from "@angular/material/autocomplete";
class CdkDatagridFocusInputDirective {
    constructor(_formControl, _elementRef, _cdr) {
        this._formControl = _formControl;
        this._elementRef = _elementRef;
        this._cdr = _cdr;
    }
    ngAfterViewInit() {
        // @todo: dry (*1)(move into factory)
        this._formControl.validate();
        this._elementRef.nativeElement.focus();
        this._cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFocusInputDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]", ngImport: i0 }); }
}
export { CdkDatagridFocusInputDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFocusInputDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[cdkFocusInput]',
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });
class CdkDatagridFocusComboboxDirective {
    constructor(_formControl, _elementRef, _autoComplete, _cdr) {
        this._formControl = _formControl;
        this._elementRef = _elementRef;
        this._autoComplete = _autoComplete;
        this._cdr = _cdr;
    }
    ngAfterViewInit() {
        // @todo: dry (*1)(move into factory))
        this._formControl.validate();
        this._elementRef.nativeElement.focus();
        this._cdr.detectChanges();
        setTimeout(() => this._autoComplete.openPanel(), 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFocusComboboxDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i2.MatAutocompleteTrigger }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridFocusComboboxDirective, selector: "input[matAutocomplete][cdkFocusCombobox]", ngImport: i0 }); }
}
export { CdkDatagridFocusComboboxDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFocusComboboxDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[matAutocomplete][cdkFocusCombobox]',
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i2.MatAutocompleteTrigger }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWZvY3VzLmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1mb2N1cy5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBRXhFLE1BSWEsOEJBQThCO0lBQ3pDLFlBRWtCLFlBQW1ELEVBQ2xELFdBQXlDLEVBQ3pDLElBQXVCO1FBRnhCLGlCQUFZLEdBQVosWUFBWSxDQUF1QztRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7UUFDekMsU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFDdkMsQ0FBQztJQUVKLGVBQWU7UUFDYixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7OEdBYlUsOEJBQThCLGtCQUUvQiwyQkFBMkI7a0dBRjFCLDhCQUE4Qjs7U0FBOUIsOEJBQThCOzJGQUE5Qiw4QkFBOEI7a0JBSjFDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzs7MEJBR0ksTUFBTTsyQkFBQywyQkFBMkI7O0FBY3ZDLE1BSWEsaUNBQWlDO0lBQzVDLFlBRWtCLFlBQW1ELEVBQ2xELFdBQXlDLEVBQ3pDLGFBQXFDLEVBQ3JDLElBQXVCO1FBSHhCLGlCQUFZLEdBQVosWUFBWSxDQUF1QztRQUNsRCxnQkFBVyxHQUFYLFdBQVcsQ0FBOEI7UUFDekMsa0JBQWEsR0FBYixhQUFhLENBQXdCO1FBQ3JDLFNBQUksR0FBSixJQUFJLENBQW1CO0lBQ3ZDLENBQUM7SUFFSixlQUFlO1FBQ2Isc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzhHQWZVLGlDQUFpQyxrQkFFbEMsMkJBQTJCO2tHQUYxQixpQ0FBaUM7O1NBQWpDLGlDQUFpQzsyRkFBakMsaUNBQWlDO2tCQUo3QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLDBDQUEwQztpQkFDckQ7OzBCQUdJLE1BQU07MkJBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5cbi8vIE1EQ1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W2Nka0ZvY3VzSW5wdXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRGb2N1c0lucHV0RGlyZWN0aXZlPEl0ZW0+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZm9ybUNvbnRyb2w6IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEB0b2RvOiBkcnkgKCoxKShtb3ZlIGludG8gZmFjdG9yeSlcbiAgICB0aGlzLl9mb3JtQ29udHJvbC52YWxpZGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5wdXRbbWF0QXV0b2NvbXBsZXRlXVtjZGtGb2N1c0NvbWJvYm94XScsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRm9jdXNDb21ib2JveERpcmVjdGl2ZTxJdGVtPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2Zvcm1Db250cm9sOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gQHRvZG86IGRyeSAoKjEpKG1vdmUgaW50byBmYWN0b3J5KSlcbiAgICB0aGlzLl9mb3JtQ29udHJvbC52YWxpZGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9hdXRvQ29tcGxldGUub3BlblBhbmVsKCksIDApO1xuICB9XG59XG4iXX0=