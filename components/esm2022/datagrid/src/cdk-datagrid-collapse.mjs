import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Output, ViewEncapsulation, } from '@angular/core';
import { getItemPayload } from './cdk-datagrid.utils';
import { CdkDatagridDataManager } from './cdk-datagrid-data.manager';
import { ACTION_DATA } from './mat-datagrid-input';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-data.manager";
class CdkDatagridCollapseComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridCollapseComponent, deps: [{ token: ACTION_DATA }, { token: i1.CdkDatagridDataManager }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridCollapseComponent, selector: "cdk-datagrid-collapse", outputs: { collapseChange: "collapseChange" }, host: { properties: { "class.cdk-datagrid-collapse": "this.hostClass", "class.cdk-datagrid-collapsible": "this.collapsibleClass", "class.cdk-datagrid-collapsed": "this.collapsedClass" } }, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { CdkDatagridCollapseComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'cdk-datagrid-collapse',
                    template: ``,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ACTION_DATA]
                }] }, { type: i1.CdkDatagridDataManager }]; }, propDecorators: { collapseChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJbkQsTUFPYSw0QkFBNEI7SUFDdkMsWUFDdUMsV0FBNkIsRUFDakQsa0JBQWdEO1FBRDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUNqRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQThCO1FBR3pELG1CQUFjLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNkLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQUxwRSxDQUFDO0lBTUosSUFBaUQsY0FBYztRQUM3RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs4R0ExQlUsNEJBQTRCLGtCQUU3QixXQUFXO2tHQUZWLDRCQUE0Qix5U0FKN0IsRUFBRTs7U0FJRCw0QkFBNEI7MkZBQTVCLDRCQUE0QjtrQkFQeEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO29CQUNaLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQUdJLE1BQU07MkJBQUMsV0FBVztpRkFJWCxjQUFjO3NCQUF2QixNQUFNO2dCQUVxQyxTQUFTO3NCQUFwRCxXQUFXO3VCQUFDLDZCQUE2QjtnQkFDSyxnQkFBZ0I7c0JBQTlELFdBQVc7dUJBQUMsZ0NBQWdDO2dCQUNJLGNBQWM7c0JBQTlELFdBQVc7dUJBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREYXRhTWFuYWdlciwgSXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1kYXRhLm1hbmFnZXInO1xuaW1wb3J0IHsgQUNUSU9OX0RBVEEgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1pbnB1dCc7XG5cbnR5cGUgQWN0aW9uRGF0YTxJdGVtPiA9IHsgaXRlbTogSXRlbSB9O1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdjZGstZGF0YWdyaWQtY29sbGFwc2UnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50PEl0ZW0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChBQ1RJT05fREFUQSkgcHVibGljIHJlYWRvbmx5IF9hY3Rpb25EYXRhOiBBY3Rpb25EYXRhPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGFzb3VyY2VNYW5hZ2VyOiBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyPEl0ZW0+LFxuICApIHt9XG5cbiAgQE91dHB1dCgpIGNvbGxhcHNlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SXRlbVBheWxvYWQ8SXRlbT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2RrLWRhdGFncmlkLWNvbGxhcHNlJykgaG9zdENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jZGstZGF0YWdyaWQtY29sbGFwc2libGUnKSBjb2xsYXBzaWJsZUNsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jZGstZGF0YWdyaWQtY29sbGFwc2VkJykgZ2V0IGNvbGxhcHNlZENsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZDtcbiAgfVxuXG4gIGdldCBjb2xsYXBzZWQoKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1QYXlsb2FkKHRoaXMuX2FjdGlvbkRhdGEuaXRlbSkuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGdldEFjdGlvblR5cGUoKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1QYXlsb2FkKHRoaXMuX2FjdGlvbkRhdGEuaXRlbSkuYWN0aW9uVHlwZTtcbiAgfVxuXG4gIGNvbGxhcHNlQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBpdGVtUGF5bG9hZCA9IGdldEl0ZW1QYXlsb2FkKHRoaXMuX2FjdGlvbkRhdGEuaXRlbSk7XG4gICAgdGhpcy5fZGF0YXNvdXJjZU1hbmFnZXIudG9nZ2xlR3JvdXAoaXRlbVBheWxvYWQpO1xuICAgIHRoaXMuY29sbGFwc2VDaGFuZ2UuZW1pdChpdGVtUGF5bG9hZCk7XG4gIH1cbn1cbiJdfQ==