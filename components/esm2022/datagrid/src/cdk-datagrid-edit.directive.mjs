import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CDK_EDIT_TAG_CLASS, CdkDatagridEditManager, } from './cdk-datagrid-edit.manager';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-edit.manager";
class CdkDatagridEditDirective {
    constructor(_elementRef, _editManager) {
        this._elementRef = _elementRef;
        this._editManager = _editManager;
        this.hostClass = true;
        this.editable = true;
        this.active$ = new BehaviorSubject(false);
    }
    activeEdit() {
        this.editable && this.active$.next(true);
    }
    inactiveEdit() {
        this.editable && this.active$.next(false);
    }
    ngOnInit() {
        this._editManager.setEditItem(this._elementRef.nativeElement, this);
    }
    ngOnDestroy() {
        this._editManager.deleteEditItem(this._elementRef.nativeElement);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridEditDirective, deps: [{ token: i0.ElementRef }, { token: i1.CdkDatagridEditManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridEditDirective, selector: "[cdk-datagrid-edit]", inputs: { editable: "editable" }, host: { properties: { "class.cdk-datagrid-edit": "this.hostClass" } }, ngImport: i0 }); }
}
export { CdkDatagridEditDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridEditDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.CdkDatagridEditManager }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: [`class.${CDK_EDIT_TAG_CLASS}`]
            }], editable: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWVkaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0JBQWtCLEVBRWxCLHNCQUFzQixHQUN2QixNQUFNLDZCQUE2QixDQUFDOzs7QUFFckMsTUFJYSx3QkFBd0I7SUFDbkMsWUFDbUIsV0FBb0MsRUFDcEMsWUFBb0M7UUFEcEMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtRQUdYLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDcEQsYUFBUSxHQUFHLElBQUksQ0FBQztRQUVoQixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFMcEQsQ0FBQztJQU9KLFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRSxDQUFDOzhHQXpCVSx3QkFBd0I7a0dBQXhCLHdCQUF3Qjs7U0FBeEIsd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBSnBDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQztzSUFPNkMsU0FBUztzQkFBcEQsV0FBVzt1QkFBQyxTQUFTLGtCQUFrQixFQUFFO2dCQUNqQyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIENES19FRElUX1RBR19DTEFTUyxcbiAgQ2RrRGF0YWdyaWRFZGl0LFxuICBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0Lm1hbmFnZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY2RrLWRhdGFncmlkLWVkaXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENka0RhdGFncmlkRWRpdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VkaXRNYW5hZ2VyOiBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyLFxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy4ke0NES19FRElUX1RBR19DTEFTU31gKSBob3N0Q2xhc3MgPSB0cnVlO1xuICBASW5wdXQoKSBlZGl0YWJsZSA9IHRydWU7XG5cbiAgcmVhZG9ubHkgYWN0aXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGFjdGl2ZUVkaXQoKSB7XG4gICAgdGhpcy5lZGl0YWJsZSAmJiB0aGlzLmFjdGl2ZSQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGluYWN0aXZlRWRpdCgpIHtcbiAgICB0aGlzLmVkaXRhYmxlICYmIHRoaXMuYWN0aXZlJC5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2VkaXRNYW5hZ2VyLnNldEVkaXRJdGVtKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9lZGl0TWFuYWdlci5kZWxldGVFZGl0SXRlbSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=