import { ChangeDetectorRef, Directive, Inject, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { CdkDatagridFormManager } from './cdk-datagrid-form.manager';
import { DATAGRID_STORAGE_TOKEN } from './cdk-datagrid-storage.factory';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { takeUntil, tap } from 'rxjs/operators';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-form.manager";
import * as i2 from "./cdk-datagrid-rule.manager";
import * as i3 from "./cdk-datagrid-storage.directive";
class CdkDatagridFormControlDirective {
    constructor(_cdr, _storage, _formManager, _ruleManager) {
        this._cdr = _cdr;
        this._storage = _storage;
        this._formManager = _formManager;
        this._ruleManager = _ruleManager;
        this.#unsub$ = new Subject();
        this.validator = {
            validator: [],
            asyncValidator: [],
            updateOn: 'submit',
        };
    }
    #unsub$;
    get canRender() {
        const { key, actionType, item } = this._storage;
        return this._ruleManager.getRule(item, key, actionType)?.render;
    }
    get formControlGroup() {
        return this._formManager.getFormControlGroup(this.formControlName);
    }
    get formControlName() {
        return this._storage.createUuid();
    }
    get initialValue() {
        return this._storage.item[this._storage.renderKey || this._storage.key];
    }
    get value() {
        return this.control?.value;
    }
    get control() {
        return this._formManager?.getFormControl(this._storage.createUuid());
    }
    get disabled() {
        return this.control?.disabled;
    }
    get valid() {
        return this.control?.valid;
    }
    get errors() {
        return this.control?.errors;
    }
    setError(errors) {
        return this.control?.setErrors(errors);
    }
    validate() {
        if (this.valid) {
            this.control?.markAsUntouched();
        }
        else {
            this.control?.markAsTouched();
        }
    }
    ngOnInit() {
        const { key, index, item } = this._storage;
        const actionType = getItemPayload(item).actionType;
        const batchValidator = this._formManager.createAsyncBatchValidator(key, index);
        this._formManager.addFormControl(this.formControlName, this.initialValue, this, batchValidator);
        const formControl = this._formManager?.getFormControl(this.formControlName);
        const initialValue = this.initialValue;
        this._ruleManager.applyRules(item, key, actionType, formControl, initialValue);
        formControl?.statusChanges
            .pipe(tap(() => this._cdr.markForCheck()), takeUntil(this.#unsub$))
            .subscribe();
    }
    ngOnDestroy() {
        if (this._storage.item && this._formManager.formGroupControls[this.formControlName]) {
            this._formManager.removeFormControl(this.formControlName);
        }
        this.#unsub$.next();
        this.#unsub$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFormControlDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: DATAGRID_STORAGE_TOKEN }, { token: i1.CdkDatagridFormManager }, { token: i2.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridFormControlDirective, selector: "[cdk-datagrid-edit]", inputs: { validator: "validator" }, ngImport: i0 }); }
}
export { CdkDatagridFormControlDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFormControlDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }, { type: i1.CdkDatagridFormManager }, { type: i2.CdkDatagridRuleManager }]; }, propDecorators: { validator: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPL0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFRdEQsTUFJYSwrQkFBK0I7SUFDMUMsWUFDbUIsSUFBdUIsRUFFdkIsUUFBMkMsRUFDM0MsWUFBMEMsRUFDMUMsWUFBMEM7UUFKMUMsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFFdkIsYUFBUSxHQUFSLFFBQVEsQ0FBbUM7UUFDM0MsaUJBQVksR0FBWixZQUFZLENBQThCO1FBQzFDLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUdwRCxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWU5QixjQUFTLEdBQXVCO1lBQ3ZDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsY0FBYyxFQUFFLEVBQUU7WUFDbEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FB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SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7OEdBNUZVLCtCQUErQixtREFHaEMsc0JBQXNCO2tHQUhyQiwrQkFBK0I7O1NBQS9CLCtCQUErQjsyRkFBL0IsK0JBQStCO2tCQUozQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7OzBCQUlJLE1BQU07MkJBQUMsc0JBQXNCO3NIQXFCdkIsU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2xPcHRpb25zLFxuICBBc3luY1ZhbGlkYXRvckZuLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3JGbixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0ubWFuYWdlcic7XG5pbXBvcnQgeyBEQVRBR1JJRF9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRmllbGRWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudmFsaWRhdG9ycyc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtcnVsZS5tYW5hZ2VyJztcbmltcG9ydCB7IGdldEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFncmlkVmFsaWRhdGlvbiB7XG4gIHZhbGlkYXRvcj86IFZhbGlkYXRvckZuW107XG4gIGFzeW5jVmFsaWRhdG9yPzogQXN5bmNWYWxpZGF0b3JGbltdO1xuICB1cGRhdGVPbj86IEFic3RyYWN0Q29udHJvbE9wdGlvbnNbJ3VwZGF0ZU9uJ107XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjZGstZGF0YWdyaWQtZWRpdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoREFUQUdSSURfU1RPUkFHRV9UT0tFTilcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zdG9yYWdlOiBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZm9ybU1hbmFnZXI6IENka0RhdGFncmlkRm9ybU1hbmFnZXI8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcnVsZU1hbmFnZXI6IENka0RhdGFncmlkUnVsZU1hbmFnZXI8SXRlbT4sXG4gICkge31cblxuICByZWFkb25seSAjdW5zdWIkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgY2FuUmVuZGVyKCkge1xuICAgIGNvbnN0IHsga2V5LCBhY3Rpb25UeXBlLCBpdGVtIH0gPSB0aGlzLl9zdG9yYWdlO1xuICAgIHJldHVybiB0aGlzLl9ydWxlTWFuYWdlci5nZXRSdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk/LnJlbmRlcjtcbiAgfVxuXG4gIGdldCBmb3JtQ29udHJvbEdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtTWFuYWdlci5nZXRGb3JtQ29udHJvbEdyb3VwKHRoaXMuZm9ybUNvbnRyb2xOYW1lKTtcbiAgfVxuXG4gIGdldCBmb3JtQ29udHJvbE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UuY3JlYXRlVXVpZCgpO1xuICB9XG5cbiAgQElucHV0KCkgdmFsaWRhdG9yOiBEYXRhZ3JpZFZhbGlkYXRpb24gPSB7XG4gICAgdmFsaWRhdG9yOiBbXSxcbiAgICBhc3luY1ZhbGlkYXRvcjogW10sXG4gICAgdXBkYXRlT246ICdzdWJtaXQnLFxuICB9O1xuXG4gIGdldCBpbml0aWFsVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2UuaXRlbVt0aGlzLl9zdG9yYWdlLnJlbmRlcktleSB8fCB0aGlzLl9zdG9yYWdlLmtleV07XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8udmFsdWU7XG4gIH1cblxuICBnZXQgY29udHJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybU1hbmFnZXI/LmdldEZvcm1Db250cm9sKHRoaXMuX3N0b3JhZ2UuY3JlYXRlVXVpZCgpKTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sPy5kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCB2YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sPy52YWxpZDtcbiAgfVxuXG4gIGdldCBlcnJvcnMoKTogRmllbGRWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8uZXJyb3JzIGFzIEZpZWxkVmFsaWRhdGlvbkVycm9ycyB8IG51bGw7XG4gIH1cblxuICBzZXRFcnJvcihlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8uc2V0RXJyb3JzKGVycm9ycyk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBpZiAodGhpcy52YWxpZCkge1xuICAgICAgdGhpcy5jb250cm9sPy5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sPy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgeyBrZXksIGluZGV4LCBpdGVtIH0gPSB0aGlzLl9zdG9yYWdlO1xuICAgIGNvbnN0IGFjdGlvblR5cGUgPSBnZXRJdGVtUGF5bG9hZChpdGVtKS5hY3Rpb25UeXBlO1xuICAgIGNvbnN0IGJhdGNoVmFsaWRhdG9yID0gdGhpcy5fZm9ybU1hbmFnZXIuY3JlYXRlQXN5bmNCYXRjaFZhbGlkYXRvcihrZXksIGluZGV4KTtcblxuICAgIHRoaXMuX2Zvcm1NYW5hZ2VyLmFkZEZvcm1Db250cm9sKHRoaXMuZm9ybUNvbnRyb2xOYW1lLCB0aGlzLmluaXRpYWxWYWx1ZSwgdGhpcywgYmF0Y2hWYWxpZGF0b3IpO1xuICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy5fZm9ybU1hbmFnZXI/LmdldEZvcm1Db250cm9sKHRoaXMuZm9ybUNvbnRyb2xOYW1lKTtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlIGFzIHVua25vd24gYXMgc3RyaW5nO1xuICAgIHRoaXMuX3J1bGVNYW5hZ2VyLmFwcGx5UnVsZXMoaXRlbSwga2V5LCBhY3Rpb25UeXBlLCBmb3JtQ29udHJvbCwgaW5pdGlhbFZhbHVlKTtcblxuICAgIGZvcm1Db250cm9sPy5zdGF0dXNDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLiN1bnN1YiQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JhZ2UuaXRlbSAmJiB0aGlzLl9mb3JtTWFuYWdlci5mb3JtR3JvdXBDb250cm9sc1t0aGlzLmZvcm1Db250cm9sTmFtZV0pIHtcbiAgICAgIHRoaXMuX2Zvcm1NYW5hZ2VyLnJlbW92ZUZvcm1Db250cm9sKHRoaXMuZm9ybUNvbnRyb2xOYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLiN1bnN1YiQubmV4dCgpO1xuICAgIHRoaXMuI3Vuc3ViJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=