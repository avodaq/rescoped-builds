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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridCollapseComponent, isStandalone: true, selector: "cdk-datagrid-collapse", outputs: { collapseChange: "collapseChange" }, host: { properties: { "class.cdk-datagrid-collapse": "this.hostClass", "class.cdk-datagrid-collapsible": "this.collapsibleClass", "class.cdk-datagrid-collapsed": "this.collapsedClass" } }, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
                    standalone: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWNvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFJbkQsTUFRYSw0QkFBNEI7SUFDdkMsWUFDdUMsV0FBNkIsRUFDakQsa0JBQWdEO1FBRDVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUNqRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQThCO1FBR3pELG1CQUFjLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNkLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQUxwRSxDQUFDO0lBTUosSUFBaUQsY0FBYztRQUM3RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3pELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs4R0ExQlUsNEJBQTRCLGtCQUU3QixXQUFXO2tHQUZWLDRCQUE0Qiw2VEFMN0IsRUFBRTs7U0FLRCw0QkFBNEI7MkZBQTVCLDRCQUE0QjtrQkFSeEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO29CQUNaLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFHSSxNQUFNOzJCQUFDLFdBQVc7aUZBSVgsY0FBYztzQkFBdkIsTUFBTTtnQkFFcUMsU0FBUztzQkFBcEQsV0FBVzt1QkFBQyw2QkFBNkI7Z0JBQ0ssZ0JBQWdCO3NCQUE5RCxXQUFXO3VCQUFDLGdDQUFnQztnQkFDSSxjQUFjO3NCQUE5RCxXQUFXO3VCQUFDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcbmltcG9ydCB7IENka0RhdGFncmlkRGF0YU1hbmFnZXIsIEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0YS5tYW5hZ2VyJztcbmltcG9ydCB7IEFDVElPTl9EQVRBIH0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtaW5wdXQnO1xuXG50eXBlIEFjdGlvbkRhdGE8SXRlbT4gPSB7IGl0ZW06IEl0ZW0gfTtcblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnY2RrLWRhdGFncmlkLWNvbGxhcHNlJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRDb2xsYXBzZUNvbXBvbmVudDxJdGVtPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQUNUSU9OX0RBVEEpIHB1YmxpYyByZWFkb25seSBfYWN0aW9uRGF0YTogQWN0aW9uRGF0YTxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhc291cmNlTWFuYWdlcjogQ2RrRGF0YWdyaWREYXRhTWFuYWdlcjxJdGVtPixcbiAgKSB7fVxuXG4gIEBPdXRwdXQoKSBjb2xsYXBzZUNoYW5nZTogRXZlbnRFbWl0dGVyPEl0ZW1QYXlsb2FkPEl0ZW0+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNkay1kYXRhZ3JpZC1jb2xsYXBzZScpIGhvc3RDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2RrLWRhdGFncmlkLWNvbGxhcHNpYmxlJykgY29sbGFwc2libGVDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2RrLWRhdGFncmlkLWNvbGxhcHNlZCcpIGdldCBjb2xsYXBzZWRDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWQ7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkKCkge1xuICAgIHJldHVybiBnZXRJdGVtUGF5bG9hZCh0aGlzLl9hY3Rpb25EYXRhLml0ZW0pLmNvbGxhcHNlZDtcbiAgfVxuXG4gIGdldCBnZXRBY3Rpb25UeXBlKCkge1xuICAgIHJldHVybiBnZXRJdGVtUGF5bG9hZCh0aGlzLl9hY3Rpb25EYXRhLml0ZW0pLmFjdGlvblR5cGU7XG4gIH1cblxuICBjb2xsYXBzZUNoYW5nZWQoKSB7XG4gICAgY29uc3QgaXRlbVBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZCh0aGlzLl9hY3Rpb25EYXRhLml0ZW0pO1xuICAgIHRoaXMuX2RhdGFzb3VyY2VNYW5hZ2VyLnRvZ2dsZUdyb3VwKGl0ZW1QYXlsb2FkKTtcbiAgICB0aGlzLmNvbGxhcHNlQ2hhbmdlLmVtaXQoaXRlbVBheWxvYWQpO1xuICB9XG59XG4iXX0=