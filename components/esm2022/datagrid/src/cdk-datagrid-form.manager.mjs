import { Injectable } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { batchValidatorFactory } from './cdk-datagrid-batch.validation';
import { Validators } from './cdk-datagrid.validators';
import { tap } from 'rxjs/operators';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { CdkDatagridDataManager } from './cdk-datagrid-data.manager';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./cdk-datagrid-data.manager";
import * as i3 from "./cdk-datagrid-rule.manager";
export class CdkDatagridFormManager {
    constructor(_formBuilder, _dataManger, _ruleManager) {
        this._formBuilder = _formBuilder;
        this._dataManger = _dataManger;
        this._ruleManager = _ruleManager;
        this.#formControlsByIds = new Map();
        this.#formGroup = this._formBuilder.group({});
        this.formGroupControls = this.#formGroup.controls;
        this.#prevValidations = [];
    }
    #formControlsByIds;
    #formGroup;
    #prevValidations;
    #batchValidation$;
    getBatchValidation() {
        return this.#batchValidation$;
    }
    setBatchValidation(batchValidations) {
        this.#batchValidation$ = batchValidations;
    }
    addFormControl(formControlName, value, formControlDir, asyncValidatorFn = Validators.nullAsyncValidator()) {
        this.#formGroup.addControl(formControlName, this._formBuilder.group({
            [formControlName]: this._formBuilder.control(value, {
                validators: [...(formControlDir.validator?.validator || [])],
                asyncValidators: [...(formControlDir.validator?.asyncValidator || []), asyncValidatorFn],
                updateOn: formControlDir.validator?.updateOn ?? 'submit',
            }),
        }));
        this.#formControlsByIds.set(formControlName, formControlDir);
    }
    watchBatchValidations(batchValidation$) {
        this.setBatchValidation(batchValidation$);
        // eslint-disable-next-line rxjs-angular/prefer-takeuntil
        return batchValidation$.pipe(tap((validations = []) => {
            // reset prev errors
            this.#prevValidations.forEach(({ index, field }) => {
                const formControl = this.#formControlsByIds.get(`${index}-${field}`);
                formControl?.setError(null);
            });
            validations.forEach(({ index, field, validationCode, validationMessage }) => {
                const item = this._dataManger.getItemByIndex(index);
                const itemPayload = getItemPayload(item);
                const actionType = itemPayload?.actionType;
                const formControl = this.#formControlsByIds.get(`${index}-${field}`);
                const ruleTypes = this._ruleManager.getRule(item, field, actionType);
                if (ruleTypes.validate && formControl) {
                    formControl?.setError({ validationCode, validationMessage });
                }
            });
            this.#prevValidations = validations;
        }));
    }
    createAsyncBatchValidator(key, index) {
        let batchValidator = Validators.nullAsyncValidator();
        const batchValidation = this.getBatchValidation();
        if (batchValidation) {
            batchValidator = batchValidatorFactory(batchValidation, key, index);
        }
        return batchValidator;
    }
    getFormControlGroup(uuid) {
        return this.#formGroup.get(uuid);
    }
    getFormControl(uuid) {
        return this.getFormControlGroup(uuid)?.get(uuid);
    }
    removeFormControl(uuid) {
        this.#formGroup.removeControl(uuid);
        this.#formControlsByIds.delete(uuid);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridFormManager, deps: [{ token: i1.UntypedFormBuilder }, { token: i2.CdkDatagridDataManager }, { token: i3.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridFormManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridFormManager, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.UntypedFormBuilder }, { type: i2.CdkDatagridDataManager }, { type: i3.CdkDatagridRuleManager }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWZvcm0ubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWZvcm0ubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQWMsTUFBTSxpQ0FBaUMsQ0FBQztBQUVwRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFLdEQsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQyxZQUNtQixZQUFnQyxFQUNoQyxXQUF5QyxFQUN6QyxZQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQThCO1FBQ3pDLGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUdwRCx1QkFBa0IsR0FBd0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVwRCxlQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbEQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFFN0MscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztJQVJqQyxDQUFDO0lBRUssa0JBQWtCLENBQWtDO0lBRXBELFVBQVUs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QUcsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDckQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbEQsSUFBSSxlQUFlLEVBQUU7WUFDbkIsY0FBYyxHQUFHLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxHQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBWTtRQUM5QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBcUIsQ0FBQztJQUN2RCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDekIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFZO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs4R0FsR1Usc0JBQXNCO2tIQUF0QixzQkFBc0I7OzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUJ1aWxkZXIsIFVudHlwZWRGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBiYXRjaFZhbGlkYXRvckZhY3RvcnksIFZhbGlkYXRpb24gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1iYXRjaC52YWxpZGF0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC52YWxpZGF0b3JzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREYXRhTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlcic7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcblxuZXhwb3J0IHR5cGUgRGF0YWdyaWRGb3JtczxJdGVtPiA9IE1hcDxzdHJpbmcsIENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4+O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRGb3JtTWFuYWdlcjxcbiAgSXRlbSxcbiAgSXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0gPSBrZXlvZiBJdGVtLFxuICBJdGVtVmFsdWUgZXh0ZW5kcyBJdGVtW0l0ZW1LZXldID0gSXRlbVtJdGVtS2V5XSxcbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtQnVpbGRlcjogVW50eXBlZEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGFNYW5nZXI6IENka0RhdGFncmlkRGF0YU1hbmFnZXI8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcnVsZU1hbmFnZXI6IENka0RhdGFncmlkUnVsZU1hbmFnZXI8SXRlbT4sXG4gICkge31cblxuICByZWFkb25seSAjZm9ybUNvbnRyb2xzQnlJZHM6IERhdGFncmlkRm9ybXM8SXRlbT4gPSBuZXcgTWFwKCk7XG5cbiAgcmVhZG9ubHkgI2Zvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHt9KTtcblxuICBmb3JtR3JvdXBDb250cm9scyA9IHRoaXMuI2Zvcm1Hcm91cC5jb250cm9scztcblxuICAjcHJldlZhbGlkYXRpb25zOiBWYWxpZGF0aW9uW10gPSBbXTtcblxuICAjYmF0Y2hWYWxpZGF0aW9uJCE6IE9ic2VydmFibGU8VmFsaWRhdGlvbltdPjtcblxuICBnZXRCYXRjaFZhbGlkYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JhdGNoVmFsaWRhdGlvbiQ7XG4gIH1cblxuICBzZXRCYXRjaFZhbGlkYXRpb24oYmF0Y2hWYWxpZGF0aW9uczogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uW10+KSB7XG4gICAgdGhpcy4jYmF0Y2hWYWxpZGF0aW9uJCA9IGJhdGNoVmFsaWRhdGlvbnM7XG4gIH1cblxuICBhZGRGb3JtQ29udHJvbChcbiAgICBmb3JtQ29udHJvbE5hbWU6IHN0cmluZyxcbiAgICB2YWx1ZTogSXRlbVZhbHVlLFxuICAgIGZvcm1Db250cm9sRGlyOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIGFzeW5jVmFsaWRhdG9yRm4gPSBWYWxpZGF0b3JzLm51bGxBc3luY1ZhbGlkYXRvcigpLFxuICApIHtcbiAgICB0aGlzLiNmb3JtR3JvdXAuYWRkQ29udHJvbChcbiAgICAgIGZvcm1Db250cm9sTmFtZSxcbiAgICAgIHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV06IHRoaXMuX2Zvcm1CdWlsZGVyLmNvbnRyb2wodmFsdWUsIHtcbiAgICAgICAgICB2YWxpZGF0b3JzOiBbLi4uKGZvcm1Db250cm9sRGlyLnZhbGlkYXRvcj8udmFsaWRhdG9yIHx8IFtdKV0sXG4gICAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBbLi4uKGZvcm1Db250cm9sRGlyLnZhbGlkYXRvcj8uYXN5bmNWYWxpZGF0b3IgfHwgW10pLCBhc3luY1ZhbGlkYXRvckZuXSxcbiAgICAgICAgICB1cGRhdGVPbjogZm9ybUNvbnRyb2xEaXIudmFsaWRhdG9yPy51cGRhdGVPbiA/PyAnc3VibWl0JyxcbiAgICAgICAgfSksXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgdGhpcy4jZm9ybUNvbnRyb2xzQnlJZHMuc2V0KGZvcm1Db250cm9sTmFtZSwgZm9ybUNvbnRyb2xEaXIpO1xuICB9XG5cbiAgd2F0Y2hCYXRjaFZhbGlkYXRpb25zKGJhdGNoVmFsaWRhdGlvbiQ6IE9ic2VydmFibGU8VmFsaWRhdGlvbltdPikge1xuICAgIHRoaXMuc2V0QmF0Y2hWYWxpZGF0aW9uKGJhdGNoVmFsaWRhdGlvbiQpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJ4anMtYW5ndWxhci9wcmVmZXItdGFrZXVudGlsXG4gICAgcmV0dXJuIGJhdGNoVmFsaWRhdGlvbiQucGlwZShcbiAgICAgIHRhcCgodmFsaWRhdGlvbnMgPSBbXSkgPT4ge1xuICAgICAgICAvLyByZXNldCBwcmV2IGVycm9yc1xuICAgICAgICB0aGlzLiNwcmV2VmFsaWRhdGlvbnMuZm9yRWFjaCgoeyBpbmRleCwgZmllbGQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gdGhpcy4jZm9ybUNvbnRyb2xzQnlJZHMuZ2V0KGAke2luZGV4fS0ke2ZpZWxkfWApO1xuICAgICAgICAgIGZvcm1Db250cm9sPy5zZXRFcnJvcihudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdGlvbnMuZm9yRWFjaCgoeyBpbmRleCwgZmllbGQsIHZhbGlkYXRpb25Db2RlLCB2YWxpZGF0aW9uTWVzc2FnZSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2RhdGFNYW5nZXIuZ2V0SXRlbUJ5SW5kZXgoaW5kZXgpO1xuICAgICAgICAgIGNvbnN0IGl0ZW1QYXlsb2FkID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgICAgICAgY29uc3QgYWN0aW9uVHlwZSA9IGl0ZW1QYXlsb2FkPy5hY3Rpb25UeXBlO1xuXG4gICAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLiNmb3JtQ29udHJvbHNCeUlkcy5nZXQoYCR7aW5kZXh9LSR7ZmllbGR9YCk7XG4gICAgICAgICAgY29uc3QgcnVsZVR5cGVzID0gdGhpcy5fcnVsZU1hbmFnZXIuZ2V0UnVsZShpdGVtLCA8SXRlbUtleT5maWVsZCwgYWN0aW9uVHlwZSk7XG4gICAgICAgICAgaWYgKHJ1bGVUeXBlcy52YWxpZGF0ZSAmJiBmb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgZm9ybUNvbnRyb2w/LnNldEVycm9yKHsgdmFsaWRhdGlvbkNvZGUsIHZhbGlkYXRpb25NZXNzYWdlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jcHJldlZhbGlkYXRpb25zID0gdmFsaWRhdGlvbnM7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgY3JlYXRlQXN5bmNCYXRjaFZhbGlkYXRvcihrZXk6IEl0ZW1LZXksIGluZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgYmF0Y2hWYWxpZGF0b3IgPSBWYWxpZGF0b3JzLm51bGxBc3luY1ZhbGlkYXRvcigpO1xuICAgIGNvbnN0IGJhdGNoVmFsaWRhdGlvbiA9IHRoaXMuZ2V0QmF0Y2hWYWxpZGF0aW9uKCk7XG4gICAgaWYgKGJhdGNoVmFsaWRhdGlvbikge1xuICAgICAgYmF0Y2hWYWxpZGF0b3IgPSBiYXRjaFZhbGlkYXRvckZhY3RvcnkoYmF0Y2hWYWxpZGF0aW9uLCBrZXkgYXMgbmV2ZXIsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGJhdGNoVmFsaWRhdG9yO1xuICB9XG5cbiAgZ2V0Rm9ybUNvbnRyb2xHcm91cCh1dWlkOiBzdHJpbmcpOiBVbnR5cGVkRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy4jZm9ybUdyb3VwLmdldCh1dWlkKSBhcyBVbnR5cGVkRm9ybUdyb3VwO1xuICB9XG5cbiAgZ2V0Rm9ybUNvbnRyb2wodXVpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybUNvbnRyb2xHcm91cCh1dWlkKT8uZ2V0KHV1aWQpO1xuICB9XG5cbiAgcmVtb3ZlRm9ybUNvbnRyb2wodXVpZDogc3RyaW5nKSB7XG4gICAgdGhpcy4jZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2wodXVpZCk7XG4gICAgdGhpcy4jZm9ybUNvbnRyb2xzQnlJZHMuZGVsZXRlKHV1aWQpO1xuICB9XG59XG4iXX0=