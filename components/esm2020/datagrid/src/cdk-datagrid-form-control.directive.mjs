var _CdkDatagridFormControlDirective_unsub$;
import { __classPrivateFieldGet } from "tslib";
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
export class CdkDatagridFormControlDirective {
    constructor(_cdr, _storage, _formManager, _ruleManager) {
        this._cdr = _cdr;
        this._storage = _storage;
        this._formManager = _formManager;
        this._ruleManager = _ruleManager;
        _CdkDatagridFormControlDirective_unsub$.set(this, new Subject());
        this.validator = {
            validator: [],
            asyncValidator: [],
            updateOn: 'submit',
        };
    }
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
            .pipe(tap(() => this._cdr.markForCheck()), takeUntil(__classPrivateFieldGet(this, _CdkDatagridFormControlDirective_unsub$, "f")))
            .subscribe();
    }
    ngOnDestroy() {
        if (this._formManager.formGroupControls[this.formControlName]) {
            this._formManager.removeFormControl(this.formControlName);
        }
        __classPrivateFieldGet(this, _CdkDatagridFormControlDirective_unsub$, "f").next();
        __classPrivateFieldGet(this, _CdkDatagridFormControlDirective_unsub$, "f").complete();
    }
}
_CdkDatagridFormControlDirective_unsub$ = new WeakMap();
CdkDatagridFormControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridFormControlDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: DATAGRID_STORAGE_TOKEN }, { token: i1.CdkDatagridFormManager }, { token: i2.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Directive });
CdkDatagridFormControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.1.1", type: CdkDatagridFormControlDirective, selector: "[cdk-datagrid-edit]", inputs: { validator: "validator" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridFormControlDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQU8vRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztBQVl0RCxNQUFNLE9BQU8sK0JBQStCO0lBQzFDLFlBQ21CLElBQXVCLEVBRXZCLFFBQTJDLEVBQzNDLFlBQTBDLEVBQzFDLFlBQTBDO1FBSjFDLFNBQUksR0FBSixJQUFJLENBQW1CO1FBRXZCLGFBQVEsR0FBUixRQUFRLENBQW1DO1FBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7UUFHN0Qsa0RBQW1CLElBQUksT0FBTyxFQUFRLEVBQUM7UUFlOUIsY0FBUyxHQUF1QjtZQUN2QyxTQUFTLEVBQUUsRUFBRTtZQUNiLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1NBQ25C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SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMzRDtRQUVELHVCQUFBLElBQUksK0NBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQix1QkFBQSxJQUFJLCtDQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OzRIQTVGVSwrQkFBK0IsbURBR2hDLHNCQUFzQjtnSEFIckIsK0JBQStCOzJGQUEvQiwrQkFBK0I7a0JBSjNDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7MEJBSUksTUFBTTsyQkFBQyxzQkFBc0I7c0hBcUJ2QixTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbE9wdGlvbnMsXG4gIEFzeW5jVmFsaWRhdG9yRm4sXG4gIFZhbGlkYXRpb25FcnJvcnMsXG4gIFZhbGlkYXRvckZuLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1NYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS5tYW5hZ2VyJztcbmltcG9ydCB7IERBVEFHUklEX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC52YWxpZGF0b3JzJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0SXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWdyaWRWYWxpZGF0aW9uIHtcbiAgdmFsaWRhdG9yPzogVmFsaWRhdG9yRm5bXTtcbiAgYXN5bmNWYWxpZGF0b3I/OiBBc3luY1ZhbGlkYXRvckZuW107XG4gIHVwZGF0ZU9uPzogQWJzdHJhY3RDb250cm9sT3B0aW9uc1sndXBkYXRlT24nXTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Nkay1kYXRhZ3JpZC1lZGl0XScsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChEQVRBR1JJRF9TVE9SQUdFX1RPS0VOKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3N0b3JhZ2U6IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtTWFuYWdlcjogQ2RrRGF0YWdyaWRGb3JtTWFuYWdlcjxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgKSB7fVxuXG4gIHJlYWRvbmx5ICN1bnN1YiQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGdldCBjYW5SZW5kZXIoKSB7XG4gICAgY29uc3QgeyBrZXksIGFjdGlvblR5cGUsIGl0ZW0gfSA9IHRoaXMuX3N0b3JhZ2U7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVNYW5hZ2VyLmdldFJ1bGUoaXRlbSwga2V5LCBhY3Rpb25UeXBlKT8ucmVuZGVyO1xuICB9XG5cbiAgZ2V0IGZvcm1Db250cm9sR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1NYW5hZ2VyLmdldEZvcm1Db250cm9sR3JvdXAodGhpcy5mb3JtQ29udHJvbE5hbWUpO1xuICB9XG5cbiAgZ2V0IGZvcm1Db250cm9sTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZS5jcmVhdGVVdWlkKCk7XG4gIH1cblxuICBASW5wdXQoKSB2YWxpZGF0b3I6IERhdGFncmlkVmFsaWRhdGlvbiA9IHtcbiAgICB2YWxpZGF0b3I6IFtdLFxuICAgIGFzeW5jVmFsaWRhdG9yOiBbXSxcbiAgICB1cGRhdGVPbjogJ3N1Ym1pdCcsXG4gIH07XG5cbiAgZ2V0IGluaXRpYWxWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZS5pdGVtW3RoaXMuX3N0b3JhZ2UucmVuZGVyS2V5IHx8IHRoaXMuX3N0b3JhZ2Uua2V5XTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sPy52YWx1ZTtcbiAgfVxuXG4gIGdldCBjb250cm9sKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtTWFuYWdlcj8uZ2V0Rm9ybUNvbnRyb2wodGhpcy5fc3RvcmFnZS5jcmVhdGVVdWlkKCkpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w/LmRpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w/LnZhbGlkO1xuICB9XG5cbiAgZ2V0IGVycm9ycygpOiBGaWVsZFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sPy5lcnJvcnMgYXMgRmllbGRWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbDtcbiAgfVxuXG4gIHNldEVycm9yKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sPy5zZXRFcnJvcnMoZXJyb3JzKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGlmICh0aGlzLnZhbGlkKSB7XG4gICAgICB0aGlzLmNvbnRyb2w/Lm1hcmtBc1VudG91Y2hlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2w/Lm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGtleSwgaW5kZXgsIGl0ZW0gfSA9IHRoaXMuX3N0b3JhZ2U7XG4gICAgY29uc3QgYWN0aW9uVHlwZSA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pLmFjdGlvblR5cGU7XG4gICAgY29uc3QgYmF0Y2hWYWxpZGF0b3IgPSB0aGlzLl9mb3JtTWFuYWdlci5jcmVhdGVBc3luY0JhdGNoVmFsaWRhdG9yKGtleSwgaW5kZXgpO1xuXG4gICAgdGhpcy5fZm9ybU1hbmFnZXIuYWRkRm9ybUNvbnRyb2wodGhpcy5mb3JtQ29udHJvbE5hbWUsIHRoaXMuaW5pdGlhbFZhbHVlLCB0aGlzLCBiYXRjaFZhbGlkYXRvcik7XG4gICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLl9mb3JtTWFuYWdlcj8uZ2V0Rm9ybUNvbnRyb2wodGhpcy5mb3JtQ29udHJvbE5hbWUpO1xuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gdGhpcy5pbml0aWFsVmFsdWUgYXMgdW5rbm93biBhcyBzdHJpbmc7XG4gICAgdGhpcy5fcnVsZU1hbmFnZXIuYXBwbHlSdWxlcyhpdGVtLCBrZXksIGFjdGlvblR5cGUsIGZvcm1Db250cm9sLCBpbml0aWFsVmFsdWUpO1xuXG4gICAgZm9ybUNvbnRyb2w/LnN0YXR1c0NoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuI3Vuc3ViJCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZm9ybU1hbmFnZXIuZm9ybUdyb3VwQ29udHJvbHNbdGhpcy5mb3JtQ29udHJvbE5hbWVdKSB7XG4gICAgICB0aGlzLl9mb3JtTWFuYWdlci5yZW1vdmVGb3JtQ29udHJvbCh0aGlzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy4jdW5zdWIkLm5leHQoKTtcbiAgICB0aGlzLiN1bnN1YiQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19