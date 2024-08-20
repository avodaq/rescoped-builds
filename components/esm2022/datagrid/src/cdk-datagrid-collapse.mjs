import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Output, ViewEncapsulation, } from '@angular/core';
import { getItemPayload } from './cdk-datagrid.utils';
import { CdkDatagridDataManager } from './cdk-datagrid-data.manager';
import { ACTION_DATA } from './mat-datagrid-input';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-data.manager";
export class CdkDatagridCollapseComponent {
    constructor(_actionData, _datasourceManager) {
        this._actionData = _actionData;
        this._datasourceManager = _datasourceManager;
        this.collapseChange = new EventEmitter();
        this.hostClass = true;
        this.collapsibleClass = true;
    }
    get collapsedClass() {
        return this.collapsed;
    }
    get collapsed() {
        return getItemPayload(this._actionData.item).collapsed;
    }
    get getActionType() {
        return getItemPayload(this._actionData.item).actionType;
    }
    collapseChanged() {
        const itemPayload = getItemPayload(this._actionData.item);
        this._datasourceManager.toggleGroup(itemPayload);
        this.collapseChange.emit(itemPayload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridCollapseComponent, deps: [{ token: ACTION_DATA }, { token: i1.CdkDatagridDataManager }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridCollapseComponent, isStandalone: true, selector: "cdk-datagrid-collapse", outputs: { collapseChange: "collapseChange" }, host: { properties: { "class.cdk-datagrid-collapse": "this.hostClass", "class.cdk-datagrid-collapsible": "this.collapsibleClass", "class.cdk-datagrid-collapsed": "this.collapsedClass" } }, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'cdk-datagrid-collapse',
                    template: ``,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ACTION_DATA]
                }] }, { type: i1.CdkDatagridDataManager }], propDecorators: { collapseChange: [{
                type: Output
            }], hostClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid-collapse']
            }], collapsibleClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid-collapsible']
            }], collapsedClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid-collapsed']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFZbkQsTUFBTSxPQUFPLDRCQUE0QjtJQUN2QyxZQUN1QyxXQUE2QixFQUNqRCxrQkFBZ0Q7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQ2pELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBOEI7UUFHekQsbUJBQWMsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2QscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0lBTHBFLENBQUM7SUFNSixJQUFpRCxjQUFjO1FBQzdELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekQsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzFELENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDOzhHQTFCVSw0QkFBNEIsa0JBRTdCLFdBQVc7a0dBRlYsNEJBQTRCLDZUQUw3QixFQUFFOzsyRkFLRCw0QkFBNEI7a0JBUnhDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsRUFBRTtvQkFDWixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBR0ksTUFBTTsyQkFBQyxXQUFXOzhFQUlYLGNBQWM7c0JBQXZCLE1BQU07Z0JBRXFDLFNBQVM7c0JBQXBELFdBQVc7dUJBQUMsNkJBQTZCO2dCQUNLLGdCQUFnQjtzQkFBOUQsV0FBVzt1QkFBQyxnQ0FBZ0M7Z0JBQ0ksY0FBYztzQkFBOUQsV0FBVzt1QkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0SXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyLCBJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlcic7XG5pbXBvcnQgeyBBQ1RJT05fREFUQSB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWlucHV0JztcblxudHlwZSBBY3Rpb25EYXRhPEl0ZW0+ID0geyBpdGVtOiBJdGVtIH07XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2Nkay1kYXRhZ3JpZC1jb2xsYXBzZScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkQ29sbGFwc2VDb21wb25lbnQ8SXRlbT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFDVElPTl9EQVRBKSBwdWJsaWMgcmVhZG9ubHkgX2FjdGlvbkRhdGE6IEFjdGlvbkRhdGE8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0YXNvdXJjZU1hbmFnZXI6IENka0RhdGFncmlkRGF0YU1hbmFnZXI8SXRlbT4sXG4gICkge31cblxuICBAT3V0cHV0KCkgY29sbGFwc2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJdGVtUGF5bG9hZDxJdGVtPj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jZGstZGF0YWdyaWQtY29sbGFwc2UnKSBob3N0Q2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNkay1kYXRhZ3JpZC1jb2xsYXBzaWJsZScpIGNvbGxhcHNpYmxlQ2xhc3MgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNkay1kYXRhZ3JpZC1jb2xsYXBzZWQnKSBnZXQgY29sbGFwc2VkQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpIHtcbiAgICByZXR1cm4gZ2V0SXRlbVBheWxvYWQodGhpcy5fYWN0aW9uRGF0YS5pdGVtKS5jb2xsYXBzZWQ7XG4gIH1cblxuICBnZXQgZ2V0QWN0aW9uVHlwZSgpIHtcbiAgICByZXR1cm4gZ2V0SXRlbVBheWxvYWQodGhpcy5fYWN0aW9uRGF0YS5pdGVtKS5hY3Rpb25UeXBlO1xuICB9XG5cbiAgY29sbGFwc2VDaGFuZ2VkKCkge1xuICAgIGNvbnN0IGl0ZW1QYXlsb2FkID0gZ2V0SXRlbVBheWxvYWQodGhpcy5fYWN0aW9uRGF0YS5pdGVtKTtcbiAgICB0aGlzLl9kYXRhc291cmNlTWFuYWdlci50b2dnbGVHcm91cChpdGVtUGF5bG9hZCk7XG4gICAgdGhpcy5jb2xsYXBzZUNoYW5nZS5lbWl0KGl0ZW1QYXlsb2FkKTtcbiAgfVxufVxuIl19