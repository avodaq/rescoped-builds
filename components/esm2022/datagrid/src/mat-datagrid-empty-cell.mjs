import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Inject, Injector, Output, ViewEncapsulation, } from '@angular/core';
import { DATAGRID_STORAGE_PROVIDER, DATAGRID_STORAGE_TOKEN } from './cdk-datagrid-storage.factory';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { ACTION_DATA } from './mat-datagrid-input';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-rule.manager";
import * as i2 from "@angular/cdk/portal";
import * as i3 from "./cdk-datagrid-storage.directive";
// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
export class MatDatagridEmptyCellComponent {
    constructor(_storage, _ruleManager, _injector, _cdr) {
        this._storage = _storage;
        this._ruleManager = _ruleManager;
        this._injector = _injector;
        this._cdr = _cdr;
        this.hostClass = true;
        this.inputChange = new EventEmitter();
    }
    ngAfterViewInit() {
        const { item, key, actionType } = this._storage;
        const action = this._ruleManager.getActionRule(item, key, actionType);
        const componentType = action?.componentType;
        if (action && typeof componentType === 'function') {
            const actionDataInjector = Injector.create({
                parent: this._injector,
                providers: [{ provide: ACTION_DATA, useValue: action.data || null }],
            });
            this.actionPortal = new ComponentPortal(componentType, null, actionDataInjector);
            this._cdr.markForCheck();
            this._cdr.detectChanges();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridEmptyCellComponent, deps: [{ token: DATAGRID_STORAGE_TOKEN }, { token: i1.CdkDatagridRuleManager }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.7", type: MatDatagridEmptyCellComponent, isStandalone: true, selector: "mat-datagrid-empty-cell", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-empty-cell": "this.hostClass" } }, providers: [DATAGRID_STORAGE_PROVIDER], ngImport: i0, template: '<ng-template [cdkPortalOutlet]="actionPortal"></ng-template>', isInline: true, dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i2.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridEmptyCellComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-empty-cell',
                    providers: [DATAGRID_STORAGE_PROVIDER],
                    template: '<ng-template [cdkPortalOutlet]="actionPortal"></ng-template>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [PortalModule],
                }]
        }], ctorParameters: () => [{ type: i3.CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }, { type: i1.CdkDatagridRuleManager }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-empty-cell']
            }], inputChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWVtcHR5LWNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1lbXB0eS1jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFVLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFbkQscUZBQXFGO0FBV3JGLE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFFbUIsUUFBMkMsRUFDM0MsWUFBMEMsRUFDMUMsU0FBbUIsRUFDbkIsSUFBdUI7UUFIdkIsYUFBUSxHQUFSLFFBQVEsQ0FBbUM7UUFDM0MsaUJBQVksR0FBWixZQUFZLENBQThCO1FBQzFDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFNSSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQVBoRCxDQUFDO0lBU0osZUFBZTtRQUNiLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV0RSxNQUFNLGFBQWEsR0FBRyxNQUFNLEVBQUUsYUFBYSxDQUFDO1FBQzVDLElBQUksTUFBTSxJQUFJLE9BQU8sYUFBYSxLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQ2xELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN0QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7YUFDckUsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDOzhHQS9CVSw2QkFBNkIsa0JBRTlCLHNCQUFzQjtrR0FGckIsNkJBQTZCLDRMQVA3QixDQUFDLHlCQUF5QixDQUFDLDBCQUM1Qiw4REFBOEQsMkRBSTlELFlBQVk7OzJGQUVYLDZCQUE2QjtrQkFWekMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN0QyxRQUFRLEVBQUUsOERBQThEO29CQUN4RSxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOzswQkFHSSxNQUFNOzJCQUFDLHNCQUFzQjtxSUFVYyxTQUFTO3NCQUF0RCxXQUFXO3VCQUFDLCtCQUErQjtnQkFFbEMsV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsIERBVEFHUklEX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlcic7XG5pbXBvcnQgeyBBQ1RJT05fREFUQSB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWlucHV0JztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWVtcHR5LWNlbGwnLFxuICBwcm92aWRlcnM6IFtEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSXSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJhY3Rpb25Qb3J0YWxcIj48L25nLXRlbXBsYXRlPicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUG9ydGFsTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWRFbXB0eUNlbGxDb21wb25lbnQ8SXRlbT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQVRBR1JJRF9TVE9SQUdFX1RPS0VOKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3N0b3JhZ2U6IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIGFjdGlvblBvcnRhbCE6IFBvcnRhbDxhbnk+O1xuICBjb21wb25lbnRQb3J0YWwhOiBDb21wb25lbnRQb3J0YWw8dW5rbm93bj47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtZW1wdHktY2VsbCcpIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHsgaXRlbSwga2V5LCBhY3Rpb25UeXBlIH0gPSB0aGlzLl9zdG9yYWdlO1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX3J1bGVNYW5hZ2VyLmdldEFjdGlvblJ1bGUoaXRlbSwga2V5LCBhY3Rpb25UeXBlKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSBhY3Rpb24/LmNvbXBvbmVudFR5cGU7XG4gICAgaWYgKGFjdGlvbiAmJiB0eXBlb2YgY29tcG9uZW50VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgYWN0aW9uRGF0YUluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvcixcbiAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBQ1RJT05fREFUQSwgdXNlVmFsdWU6IGFjdGlvbi5kYXRhIHx8IG51bGwgfV0sXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hY3Rpb25Qb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudFR5cGUsIG51bGwsIGFjdGlvbkRhdGFJbmplY3Rvcik7XG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIl19