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
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridFormControlDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { validator: "validator" }, ngImport: i0 }); }
}
export { CdkDatagridFormControlDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFormControlDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }, { type: i1.CdkDatagridFormManager }, { type: i2.CdkDatagridRuleManager }]; }, propDecorators: { validator: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFPL0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFRdEQsTUFLYSwrQkFBK0I7SUFDMUMsWUFDbUIsSUFBdUIsRUFFdkIsUUFBMkMsRUFDM0MsWUFBMEMsRUFDMUMsWUFBMEM7UUFKMUMsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFFdkIsYUFBUSxHQUFSLFFBQVEsQ0FBbUM7UUFDM0MsaUJBQVksR0FBWixZQUFZLENBQThCO1FBQzFDLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUdwRCxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWU5QixjQUFTLEdBQXVCO1lBQ3ZDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsY0FBYyxFQUFFLEVBQUU7WUFDbEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FB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SUFDakIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ25GLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7OEdBNUZVLCtCQUErQixtREFHaEMsc0JBQXNCO2tHQUhyQiwrQkFBK0I7O1NBQS9CLCtCQUErQjsyRkFBL0IsK0JBQStCO2tCQUwzQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFJSSxNQUFNOzJCQUFDLHNCQUFzQjtzSEFxQnZCLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sT3B0aW9ucyxcbiAgQXN5bmNWYWxpZGF0b3JGbixcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yRm4sXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9ybU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLm1hbmFnZXInO1xuaW1wb3J0IHsgREFUQUdSSURfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnZhbGlkYXRvcnMnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlcic7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZFZhbGlkYXRpb24ge1xuICB2YWxpZGF0b3I/OiBWYWxpZGF0b3JGbltdO1xuICBhc3luY1ZhbGlkYXRvcj86IEFzeW5jVmFsaWRhdG9yRm5bXTtcbiAgdXBkYXRlT24/OiBBYnN0cmFjdENvbnRyb2xPcHRpb25zWyd1cGRhdGVPbiddO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY2RrLWRhdGFncmlkLWVkaXRdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KERBVEFHUklEX1NUT1JBR0VfVE9LRU4pXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3RvcmFnZTogQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1NYW5hZ2VyOiBDZGtEYXRhZ3JpZEZvcm1NYW5hZ2VyPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3J1bGVNYW5hZ2VyOiBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyPEl0ZW0+LFxuICApIHt9XG5cbiAgcmVhZG9ubHkgI3Vuc3ViJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGNhblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGtleSwgYWN0aW9uVHlwZSwgaXRlbSB9ID0gdGhpcy5fc3RvcmFnZTtcbiAgICByZXR1cm4gdGhpcy5fcnVsZU1hbmFnZXIuZ2V0UnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpPy5yZW5kZXI7XG4gIH1cblxuICBnZXQgZm9ybUNvbnRyb2xHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybU1hbmFnZXIuZ2V0Rm9ybUNvbnRyb2xHcm91cCh0aGlzLmZvcm1Db250cm9sTmFtZSk7XG4gIH1cblxuICBnZXQgZm9ybUNvbnRyb2xOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLmNyZWF0ZVV1aWQoKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHZhbGlkYXRvcjogRGF0YWdyaWRWYWxpZGF0aW9uID0ge1xuICAgIHZhbGlkYXRvcjogW10sXG4gICAgYXN5bmNWYWxpZGF0b3I6IFtdLFxuICAgIHVwZGF0ZU9uOiAnc3VibWl0JyxcbiAgfTtcblxuICBnZXQgaW5pdGlhbFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLml0ZW1bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXkgfHwgdGhpcy5fc3RvcmFnZS5rZXldO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w/LnZhbHVlO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1NYW5hZ2VyPy5nZXRGb3JtQ29udHJvbCh0aGlzLl9zdG9yYWdlLmNyZWF0ZVV1aWQoKSk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8uZGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgdmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbD8udmFsaWQ7XG4gIH1cblxuICBnZXQgZXJyb3JzKCk6IEZpZWxkVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w/LmVycm9ycyBhcyBGaWVsZFZhbGlkYXRpb25FcnJvcnMgfCBudWxsO1xuICB9XG5cbiAgc2V0RXJyb3IoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w/LnNldEVycm9ycyhlcnJvcnMpO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgaWYgKHRoaXMudmFsaWQpIHtcbiAgICAgIHRoaXMuY29udHJvbD8ubWFya0FzVW50b3VjaGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbD8ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHsga2V5LCBpbmRleCwgaXRlbSB9ID0gdGhpcy5fc3RvcmFnZTtcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gZ2V0SXRlbVBheWxvYWQoaXRlbSkuYWN0aW9uVHlwZTtcbiAgICBjb25zdCBiYXRjaFZhbGlkYXRvciA9IHRoaXMuX2Zvcm1NYW5hZ2VyLmNyZWF0ZUFzeW5jQmF0Y2hWYWxpZGF0b3Ioa2V5LCBpbmRleCk7XG5cbiAgICB0aGlzLl9mb3JtTWFuYWdlci5hZGRGb3JtQ29udHJvbCh0aGlzLmZvcm1Db250cm9sTmFtZSwgdGhpcy5pbml0aWFsVmFsdWUsIHRoaXMsIGJhdGNoVmFsaWRhdG9yKTtcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuX2Zvcm1NYW5hZ2VyPy5nZXRGb3JtQ29udHJvbCh0aGlzLmZvcm1Db250cm9sTmFtZSk7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLmluaXRpYWxWYWx1ZSBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgICB0aGlzLl9ydWxlTWFuYWdlci5hcHBseVJ1bGVzKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSwgZm9ybUNvbnRyb2wsIGluaXRpYWxWYWx1ZSk7XG5cbiAgICBmb3JtQ29udHJvbD8uc3RhdHVzQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy4jdW5zdWIkKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9zdG9yYWdlLml0ZW0gJiYgdGhpcy5fZm9ybU1hbmFnZXIuZm9ybUdyb3VwQ29udHJvbHNbdGhpcy5mb3JtQ29udHJvbE5hbWVdKSB7XG4gICAgICB0aGlzLl9mb3JtTWFuYWdlci5yZW1vdmVGb3JtQ29udHJvbCh0aGlzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy4jdW5zdWIkLm5leHQoKTtcbiAgICB0aGlzLiN1bnN1YiQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19