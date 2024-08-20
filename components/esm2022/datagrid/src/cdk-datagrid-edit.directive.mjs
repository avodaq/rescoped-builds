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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridEditDirective, deps: [{ token: i0.ElementRef }, { token: i1.CdkDatagridEditManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridEditDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { editable: "editable" }, host: { properties: { "class.cdk-datagrid-edit": "this.hostClass" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridEditDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.CdkDatagridEditManager }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: [`class.${CDK_EDIT_TAG_CLASS}`]
            }], editable: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWVkaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0JBQWtCLEVBRWxCLHNCQUFzQixHQUN2QixNQUFNLDZCQUE2QixDQUFDOzs7QUFPckMsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUNtQixXQUFvQyxFQUNwQyxZQUFvQztRQURwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQXdCO1FBR1gsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNwRCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQUxwRCxDQUFDO0lBT0osVUFBVTtRQUNSLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OEdBekJVLHdCQUF3QjtrR0FBeEIsd0JBQXdCOzsyRkFBeEIsd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO29IQU82QyxTQUFTO3NCQUFwRCxXQUFXO3VCQUFDLFNBQVMsa0JBQWtCLEVBQUU7Z0JBQ2pDLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgQ0RLX0VESVRfVEFHX0NMQVNTLFxuICBDZGtEYXRhZ3JpZEVkaXQsXG4gIENka0RhdGFncmlkRWRpdE1hbmFnZXIsXG59IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlcic7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjZGstZGF0YWdyaWQtZWRpdF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ2RrRGF0YWdyaWRFZGl0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZWRpdE1hbmFnZXI6IENka0RhdGFncmlkRWRpdE1hbmFnZXIsXG4gICkge31cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLiR7Q0RLX0VESVRfVEFHX0NMQVNTfWApIGhvc3RDbGFzcyA9IHRydWU7XG4gIEBJbnB1dCgpIGVkaXRhYmxlID0gdHJ1ZTtcblxuICByZWFkb25seSBhY3RpdmUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgYWN0aXZlRWRpdCgpIHtcbiAgICB0aGlzLmVkaXRhYmxlICYmIHRoaXMuYWN0aXZlJC5uZXh0KHRydWUpO1xuICB9XG5cbiAgaW5hY3RpdmVFZGl0KCkge1xuICAgIHRoaXMuZWRpdGFibGUgJiYgdGhpcy5hY3RpdmUkLm5leHQoZmFsc2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZWRpdE1hbmFnZXIuc2V0RWRpdEl0ZW0odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2VkaXRNYW5hZ2VyLmRlbGV0ZUVkaXRJdGVtKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==