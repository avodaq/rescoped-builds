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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusInputDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridFocusInputDirective, isStandalone: true, selector: "input[cdkFocusInput]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusInputDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[cdkFocusInput]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i1.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }] });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusComboboxDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i2.MatAutocompleteTrigger }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridFocusComboboxDirective, isStandalone: true, selector: "input[matAutocomplete][cdkFocusCombobox]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusComboboxDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[matAutocomplete][cdkFocusCombobox]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i1.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i2.MatAutocompleteTrigger }, { type: i0.ChangeDetectorRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWZvY3VzLmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1mb2N1cy5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbEYsTUFBTTtBQUNOLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBT3hFLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsWUFFa0IsWUFBbUQsRUFDbEQsV0FBeUMsRUFDekMsSUFBdUI7UUFGeEIsaUJBQVksR0FBWixZQUFZLENBQXVDO1FBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtRQUN6QyxTQUFJLEdBQUosSUFBSSxDQUFtQjtJQUN2QyxDQUFDO0lBRUosZUFBZTtRQUNiLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs4R0FiVSw4QkFBOEIsa0JBRS9CLDJCQUEyQjtrR0FGMUIsOEJBQThCOzsyRkFBOUIsOEJBQThCO2tCQUwxQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFHSSxNQUFNOzJCQUFDLDJCQUEyQjs7QUFtQnZDLE1BQU0sT0FBTyxpQ0FBaUM7SUFDNUMsWUFFa0IsWUFBbUQsRUFDbEQsV0FBeUMsRUFDekMsYUFBcUMsRUFDckMsSUFBdUI7UUFIeEIsaUJBQVksR0FBWixZQUFZLENBQXVDO1FBQ2xELGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtRQUN6QyxrQkFBYSxHQUFiLGFBQWEsQ0FBd0I7UUFDckMsU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFDdkMsQ0FBQztJQUVKLGVBQWU7UUFDYixzQ0FBc0M7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OEdBZlUsaUNBQWlDLGtCQUVsQywyQkFBMkI7a0dBRjFCLGlDQUFpQzs7MkZBQWpDLGlDQUFpQztrQkFMN0MsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSwwQ0FBMEM7b0JBQ3BELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBR0ksTUFBTTsyQkFBQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5mYWN0b3J5JztcblxuLy8gTURDXG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5wdXRbY2RrRm9jdXNJbnB1dF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZEZvY3VzSW5wdXREaXJlY3RpdmU8SXRlbT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9mb3JtQ29udHJvbDogQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gQHRvZG86IGRyeSAoKjEpKG1vdmUgaW50byBmYWN0b3J5KVxuICAgIHRoaXMuX2Zvcm1Db250cm9sLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpbnB1dFttYXRBdXRvY29tcGxldGVdW2Nka0ZvY3VzQ29tYm9ib3hdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRGb2N1c0NvbWJvYm94RGlyZWN0aXZlPEl0ZW0+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZm9ybUNvbnRyb2w6IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdXRvQ29tcGxldGU6IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBAdG9kbzogZHJ5ICgqMSkobW92ZSBpbnRvIGZhY3RvcnkpKVxuICAgIHRoaXMuX2Zvcm1Db250cm9sLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2F1dG9Db21wbGV0ZS5vcGVuUGFuZWwoKSwgMCk7XG4gIH1cbn1cbiJdfQ==