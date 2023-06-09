import { ChangeDetectorRef, Directive, ElementRef, Inject } from '@angular/core';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { DATAGRID_FORM_CONTROL_TOKEN } from './cdk-datagrid-form-control.factory';
// MDC
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-form-control.directive";
import * as i2 from "@angular/material/autocomplete";
export class CdkDatagridFocusInputDirective {
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
}
CdkDatagridFocusInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridFocusInputDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
CdkDatagridFocusInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridFocusInputDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[cdkFocusInput]',
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; } });
export class CdkDatagridFocusComboboxDirective {
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
}
CdkDatagridFocusComboboxDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridFocusComboboxDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i2.MatAutocompleteTrigger }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
CdkDatagridFocusComboboxDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: CdkDatagridFocusComboboxDirective, selector: "input[matAutocomplete][cdkFocusCombobox]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridFocusComboboxDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[matAutocomplete][cdkFocusCombobox]',
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i2.MatAutocompleteTrigger }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWZvY3VzLmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1mb2N1cy5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBTXhFLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsWUFFa0IsWUFBbUQsRUFDbEQsV0FBeUMsRUFDekMsSUFBdUI7UUFGeEIsaUJBQVksR0FBWixZQUFZLENBQXVDO1FBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtRQUN6QyxTQUFJLEdBQUosSUFBSSxDQUFtQjtJQUN2QyxDQUFDO0lBRUosZUFBZTtRQUNiLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7MkhBYlUsOEJBQThCLGtCQUUvQiwyQkFBMkI7K0dBRjFCLDhCQUE4QjsyRkFBOUIsOEJBQThCO2tCQUoxQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7OzBCQUdJLE1BQU07MkJBQUMsMkJBQTJCOztBQWtCdkMsTUFBTSxPQUFPLGlDQUFpQztJQUM1QyxZQUVrQixZQUFtRCxFQUNsRCxXQUF5QyxFQUN6QyxhQUFxQyxFQUNyQyxJQUF1QjtRQUh4QixpQkFBWSxHQUFaLFlBQVksQ0FBdUM7UUFDbEQsZ0JBQVcsR0FBWCxXQUFXLENBQThCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQUNyQyxTQUFJLEdBQUosSUFBSSxDQUFtQjtJQUN2QyxDQUFDO0lBRUosZUFBZTtRQUNiLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OEhBZlUsaUNBQWlDLGtCQUVsQywyQkFBMkI7a0hBRjFCLGlDQUFpQzsyRkFBakMsaUNBQWlDO2tCQUo3QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLDBDQUEwQztpQkFDckQ7OzBCQUdJLE1BQU07MkJBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5cbi8vIE1EQ1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlVHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W2Nka0ZvY3VzSW5wdXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRGb2N1c0lucHV0RGlyZWN0aXZlPEl0ZW0+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZm9ybUNvbnRyb2w6IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIEB0b2RvOiBkcnkgKCoxKShtb3ZlIGludG8gZmFjdG9yeSlcbiAgICB0aGlzLl9mb3JtQ29udHJvbC52YWxpZGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5wdXRbbWF0QXV0b2NvbXBsZXRlXVtjZGtGb2N1c0NvbWJvYm94XScsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRm9jdXNDb21ib2JveERpcmVjdGl2ZTxJdGVtPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2Zvcm1Db250cm9sOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gQHRvZG86IGRyeSAoKjEpKG1vdmUgaW50byBmYWN0b3J5KSlcbiAgICB0aGlzLl9mb3JtQ29udHJvbC52YWxpZGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9hdXRvQ29tcGxldGUub3BlblBhbmVsKCksIDApO1xuICB9XG59XG4iXX0=