import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CDK_EDIT_TAG_CLASS, CdkDatagridEditManager, } from './cdk-datagrid-edit.manager';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-edit.manager";
export class CdkDatagridEditDirective {
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
}
CdkDatagridEditDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridEditDirective, deps: [{ token: i0.ElementRef }, { token: i1.CdkDatagridEditManager }], target: i0.ɵɵFactoryTarget.Directive });
CdkDatagridEditDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: CdkDatagridEditDirective, selector: "[cdk-datagrid-edit]", inputs: { editable: "editable" }, host: { properties: { "class.cdk-datagrid-edit": "this.hostClass" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridEditDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWVkaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0JBQWtCLEVBRWxCLHNCQUFzQixHQUN2QixNQUFNLDZCQUE2QixDQUFDOzs7QUFNckMsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUNtQixXQUFvQyxFQUNwQyxZQUFvQztRQURwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQXdCO1FBR1gsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNwRCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUxwRCxDQUFDO0lBT0osVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O3FIQXpCVSx3QkFBd0I7eUdBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7c0lBTzZDLFNBQVM7c0JBQXBELFdBQVc7dUJBQUMsU0FBUyxrQkFBa0IsRUFBRTtnQkFDakMsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDREtfRURJVF9UQUdfQ0xBU1MsXG4gIENka0RhdGFncmlkRWRpdCxcbiAgQ2RrRGF0YWdyaWRFZGl0TWFuYWdlcixcbn0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5tYW5hZ2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Nkay1kYXRhZ3JpZC1lZGl0XScsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDZGtEYXRhZ3JpZEVkaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lZGl0TWFuYWdlcjogQ2RrRGF0YWdyaWRFZGl0TWFuYWdlcixcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuJHtDREtfRURJVF9UQUdfQ0xBU1N9YCkgaG9zdENsYXNzID0gdHJ1ZTtcbiAgQElucHV0KCkgZWRpdGFibGUgPSB0cnVlO1xuXG4gIHJlYWRvbmx5IGFjdGl2ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBhY3RpdmVFZGl0KCkge1xuICAgIHRoaXMuZWRpdGFibGUgJiYgdGhpcy5hY3RpdmUkLm5leHQodHJ1ZSk7XG4gIH1cblxuICBpbmFjdGl2ZUVkaXQoKSB7XG4gICAgdGhpcy5lZGl0YWJsZSAmJiB0aGlzLmFjdGl2ZSQubmV4dChmYWxzZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9lZGl0TWFuYWdlci5zZXRFZGl0SXRlbSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZWRpdE1hbmFnZXIuZGVsZXRlRWRpdEl0ZW0odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuIl19