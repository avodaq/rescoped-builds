import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Inject, Injector, Output, ViewEncapsulation, } from '@angular/core';
import { DATAGRID_STORAGE_PROVIDER, DATAGRID_STORAGE_TOKEN } from './cdk-datagrid-storage.factory';
import { ComponentPortal } from '@angular/cdk/portal';
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
}
MatDatagridEmptyCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridEmptyCellComponent, deps: [{ token: DATAGRID_STORAGE_TOKEN }, { token: i1.CdkDatagridRuleManager }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
MatDatagridEmptyCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.1", type: MatDatagridEmptyCellComponent, selector: "mat-datagrid-empty-cell", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-empty-cell": "this.hostClass" } }, providers: [DATAGRID_STORAGE_PROVIDER], ngImport: i0, template: '<ng-template [cdkPortalOutlet]="actionPortal"></ng-template>', isInline: true, dependencies: [{ kind: "directive", type: i2.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridEmptyCellComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-empty-cell',
                    providers: [DATAGRID_STORAGE_PROVIDER],
                    template: '<ng-template [cdkPortalOutlet]="actionPortal"></ng-template>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWVtcHR5LWNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1lbXB0eS1jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUVuRCxxRkFBcUY7QUFTckYsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxZQUVtQixRQUEyQyxFQUMzQyxZQUEwQyxFQUMxQyxTQUFtQixFQUNuQixJQUF1QjtRQUh2QixhQUFRLEdBQVIsUUFBUSxDQUFtQztRQUMzQyxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7UUFDMUMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQU1JLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFckQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBUGhELENBQUM7SUFTSixlQUFlO1FBQ2IsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXRFLE1BQU0sYUFBYSxHQUFHLE1BQU0sRUFBRSxhQUFhLENBQUM7UUFDNUMsSUFBSSxNQUFNLElBQUksT0FBTyxhQUFhLEtBQUssVUFBVSxFQUFFO1lBQ2pELE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN0QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7YUFDckUsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7MEhBL0JVLDZCQUE2QixrQkFFOUIsc0JBQXNCOzhHQUZyQiw2QkFBNkIsd0tBTDdCLENBQUMseUJBQXlCLENBQUMsMEJBQzVCLDhEQUE4RDsyRkFJN0QsNkJBQTZCO2tCQVJ6QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3RDLFFBQVEsRUFBRSw4REFBOEQ7b0JBQ3hFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQUdJLE1BQU07MkJBQUMsc0JBQXNCO3dJQVVjLFNBQVM7c0JBQXRELFdBQVc7dUJBQUMsK0JBQStCO2dCQUVsQyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUiwgREFUQUdSSURfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlcic7XG5pbXBvcnQgeyBBQ1RJT05fREFUQSB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWlucHV0JztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWVtcHR5LWNlbGwnLFxuICBwcm92aWRlcnM6IFtEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSXSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJhY3Rpb25Qb3J0YWxcIj48L25nLXRlbXBsYXRlPicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRhZ3JpZEVtcHR5Q2VsbENvbXBvbmVudDxJdGVtPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBVEFHUklEX1NUT1JBR0VfVE9LRU4pXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3RvcmFnZTogQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3J1bGVNYW5hZ2VyOiBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgYWN0aW9uUG9ydGFsITogUG9ydGFsPGFueT47XG4gIGNvbXBvbmVudFBvcnRhbCE6IENvbXBvbmVudFBvcnRhbDx1bmtub3duPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1lbXB0eS1jZWxsJykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgeyBpdGVtLCBrZXksIGFjdGlvblR5cGUgfSA9IHRoaXMuX3N0b3JhZ2U7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5fcnVsZU1hbmFnZXIuZ2V0QWN0aW9uUnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpO1xuXG4gICAgY29uc3QgY29tcG9uZW50VHlwZSA9IGFjdGlvbj8uY29tcG9uZW50VHlwZTtcbiAgICBpZiAoYWN0aW9uICYmIHR5cGVvZiBjb21wb25lbnRUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBhY3Rpb25EYXRhSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yLFxuICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFDVElPTl9EQVRBLCB1c2VWYWx1ZTogYWN0aW9uLmRhdGEgfHwgbnVsbCB9XSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFjdGlvblBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50VHlwZSwgbnVsbCwgYWN0aW9uRGF0YUluamVjdG9yKTtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=