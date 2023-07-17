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
class MatDatagridEmptyCellComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridEmptyCellComponent, deps: [{ token: DATAGRID_STORAGE_TOKEN }, { token: i1.CdkDatagridRuleManager }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridEmptyCellComponent, isStandalone: true, selector: "mat-datagrid-empty-cell", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-empty-cell": "this.hostClass" } }, providers: [DATAGRID_STORAGE_PROVIDER], ngImport: i0, template: '<ng-template [cdkPortalOutlet]="actionPortal"></ng-template>', isInline: true, dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i2.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { MatDatagridEmptyCellComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridEmptyCellComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: i3.CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }, { type: i1.CdkDatagridRuleManager }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-empty-cell']
            }], inputChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWVtcHR5LWNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1lbXB0eS1jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFVLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFbkQscUZBQXFGO0FBQ3JGLE1BVWEsNkJBQTZCO0lBQ3hDLFlBRW1CLFFBQTJDLEVBQzNDLFlBQTBDLEVBQzFDLFNBQW1CLEVBQ25CLElBQXVCO1FBSHZCLGFBQVEsR0FBUixRQUFRLENBQW1DO1FBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUMxQyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQW1CO1FBTUksY0FBUyxHQUFHLElBQUksQ0FBQztRQUVyRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFQaEQsQ0FBQztJQVNKLGVBQWU7UUFDYixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdEUsTUFBTSxhQUFhLEdBQUcsTUFBTSxFQUFFLGFBQWEsQ0FBQztRQUM1QyxJQUFJLE1BQU0sSUFBSSxPQUFPLGFBQWEsS0FBSyxVQUFVLEVBQUU7WUFDakQsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUNyRSxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzhHQS9CVSw2QkFBNkIsa0JBRTlCLHNCQUFzQjtrR0FGckIsNkJBQTZCLDRMQVA3QixDQUFDLHlCQUF5QixDQUFDLDBCQUM1Qiw4REFBOEQsMkRBSTlELFlBQVk7O1NBRVgsNkJBQTZCOzJGQUE3Qiw2QkFBNkI7a0JBVnpDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDdEMsUUFBUSxFQUFFLDhEQUE4RDtvQkFDeEUsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4Qjs7MEJBR0ksTUFBTTsyQkFBQyxzQkFBc0I7d0lBVWMsU0FBUztzQkFBdEQsV0FBVzt1QkFBQywrQkFBK0I7Z0JBRWxDLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSLCBEQVRBR1JJRF9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgQUNUSU9OX0RBVEEgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1pbnB1dCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvcHJlZmVyLW9uLXB1c2gtY29tcG9uZW50LWNoYW5nZS1kZXRlY3Rpb25cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hdC1kYXRhZ3JpZC1lbXB0eS1jZWxsJyxcbiAgcHJvdmlkZXJzOiBbREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUl0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiYWN0aW9uUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT4nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1BvcnRhbE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkRW1wdHlDZWxsQ29tcG9uZW50PEl0ZW0+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfU1RPUkFHRV9UT0tFTilcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zdG9yYWdlOiBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcnVsZU1hbmFnZXI6IENka0RhdGFncmlkUnVsZU1hbmFnZXI8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBhY3Rpb25Qb3J0YWwhOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsITogQ29tcG9uZW50UG9ydGFsPHVua25vd24+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWVtcHR5LWNlbGwnKSBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGtleSwgYWN0aW9uVHlwZSB9ID0gdGhpcy5fc3RvcmFnZTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9ydWxlTWFuYWdlci5nZXRBY3Rpb25SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gYWN0aW9uPy5jb21wb25lbnRUeXBlO1xuICAgIGlmIChhY3Rpb24gJiYgdHlwZW9mIGNvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFjdGlvbkRhdGFJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3IsXG4gICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQUNUSU9OX0RBVEEsIHVzZVZhbHVlOiBhY3Rpb24uZGF0YSB8fCBudWxsIH1dLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==