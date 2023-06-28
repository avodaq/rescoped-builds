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
class CdkDatagridFormManager {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFormManager, deps: [{ token: i1.UntypedFormBuilder }, { token: i2.CdkDatagridDataManager }, { token: i3.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFormManager }); }
}
export { CdkDatagridFormManager };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridFormManager, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.UntypedFormBuilder }, { type: i2.CdkDatagridDataManager }, { type: i3.CdkDatagridRuleManager }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWZvcm0ubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWZvcm0ubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUscUJBQXFCLEVBQWMsTUFBTSxpQ0FBaUMsQ0FBQztBQUVwRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFJdEQsTUFDYSxzQkFBc0I7SUFLakMsWUFDbUIsWUFBZ0MsRUFDaEMsV0FBeUMsRUFDekMsWUFBMEM7UUFGMUMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUE4QjtRQUN6QyxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7UUFHN0QsdUJBQWtCLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFcEQsZUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLHNCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBRTdDLHFCQUFnQixHQUFpQixFQUFFLENBQUM7SUFSakMsQ0FBQztJQUVKLGtCQUFrQixDQUFrQztJQUVwRCxVQUFVLENBQStC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QVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ2xELElBQUksZUFBZSxFQUFFO1lBQ25CLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsR0FBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQVk7UUFDOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQXFCLENBQUM7SUFDdkQsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OEdBbEdVLHNCQUFzQjtrSEFBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQnVpbGRlciwgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IGJhdGNoVmFsaWRhdG9yRmFjdG9yeSwgVmFsaWRhdGlvbiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWJhdGNoLnZhbGlkYXRpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnZhbGlkYXRvcnMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlcic7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0YS5tYW5hZ2VyJztcbmltcG9ydCB7IGdldEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuXG5leHBvcnQgdHlwZSBEYXRhZ3JpZEZvcm1zPEl0ZW0+ID0gTWFwPHN0cmluZywgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPj47XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZEZvcm1NYW5hZ2VyPFxuICBJdGVtLFxuICBJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbSA9IGtleW9mIEl0ZW0sXG4gIEl0ZW1WYWx1ZSBleHRlbmRzIEl0ZW1bSXRlbUtleV0gPSBJdGVtW0l0ZW1LZXldLFxuPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1CdWlsZGVyOiBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0YU1hbmdlcjogQ2RrRGF0YWdyaWREYXRhTWFuYWdlcjxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgKSB7fVxuXG4gICNmb3JtQ29udHJvbHNCeUlkczogRGF0YWdyaWRGb3JtczxJdGVtPiA9IG5ldyBNYXAoKTtcblxuICAjZm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuXG4gIGZvcm1Hcm91cENvbnRyb2xzID0gdGhpcy4jZm9ybUdyb3VwLmNvbnRyb2xzO1xuXG4gICNwcmV2VmFsaWRhdGlvbnM6IFZhbGlkYXRpb25bXSA9IFtdO1xuXG4gICNiYXRjaFZhbGlkYXRpb24kITogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uW10+O1xuXG4gIGdldEJhdGNoVmFsaWRhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jYmF0Y2hWYWxpZGF0aW9uJDtcbiAgfVxuXG4gIHNldEJhdGNoVmFsaWRhdGlvbihiYXRjaFZhbGlkYXRpb25zOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25bXT4pIHtcbiAgICB0aGlzLiNiYXRjaFZhbGlkYXRpb24kID0gYmF0Y2hWYWxpZGF0aW9ucztcbiAgfVxuXG4gIGFkZEZvcm1Db250cm9sKFxuICAgIGZvcm1Db250cm9sTmFtZTogc3RyaW5nLFxuICAgIHZhbHVlOiBJdGVtVmFsdWUsXG4gICAgZm9ybUNvbnRyb2xEaXI6IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4sXG4gICAgYXN5bmNWYWxpZGF0b3JGbiA9IFZhbGlkYXRvcnMubnVsbEFzeW5jVmFsaWRhdG9yKCksXG4gICkge1xuICAgIHRoaXMuI2Zvcm1Hcm91cC5hZGRDb250cm9sKFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXTogdGhpcy5fZm9ybUJ1aWxkZXIuY29udHJvbCh2YWx1ZSwge1xuICAgICAgICAgIHZhbGlkYXRvcnM6IFsuLi4oZm9ybUNvbnRyb2xEaXIudmFsaWRhdG9yPy52YWxpZGF0b3IgfHwgW10pXSxcbiAgICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IFsuLi4oZm9ybUNvbnRyb2xEaXIudmFsaWRhdG9yPy5hc3luY1ZhbGlkYXRvciB8fCBbXSksIGFzeW5jVmFsaWRhdG9yRm5dLFxuICAgICAgICAgIHVwZGF0ZU9uOiBmb3JtQ29udHJvbERpci52YWxpZGF0b3I/LnVwZGF0ZU9uID8/ICdzdWJtaXQnLFxuICAgICAgICB9KSxcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICB0aGlzLiNmb3JtQ29udHJvbHNCeUlkcy5zZXQoZm9ybUNvbnRyb2xOYW1lLCBmb3JtQ29udHJvbERpcik7XG4gIH1cblxuICB3YXRjaEJhdGNoVmFsaWRhdGlvbnMoYmF0Y2hWYWxpZGF0aW9uJDogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uW10+KSB7XG4gICAgdGhpcy5zZXRCYXRjaFZhbGlkYXRpb24oYmF0Y2hWYWxpZGF0aW9uJCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcnhqcy1hbmd1bGFyL3ByZWZlci10YWtldW50aWxcbiAgICByZXR1cm4gYmF0Y2hWYWxpZGF0aW9uJC5waXBlKFxuICAgICAgdGFwKCh2YWxpZGF0aW9ucyA9IFtdKSA9PiB7XG4gICAgICAgIC8vIHJlc2V0IHByZXYgZXJyb3JzXG4gICAgICAgIHRoaXMuI3ByZXZWYWxpZGF0aW9ucy5mb3JFYWNoKCh7IGluZGV4LCBmaWVsZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLiNmb3JtQ29udHJvbHNCeUlkcy5nZXQoYCR7aW5kZXh9LSR7ZmllbGR9YCk7XG4gICAgICAgICAgZm9ybUNvbnRyb2w/LnNldEVycm9yKG51bGwpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0aW9ucy5mb3JFYWNoKCh7IGluZGV4LCBmaWVsZCwgdmFsaWRhdGlvbkNvZGUsIHZhbGlkYXRpb25NZXNzYWdlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fZGF0YU1hbmdlci5nZXRJdGVtQnlJbmRleChpbmRleCk7XG4gICAgICAgICAgY29uc3QgaXRlbVBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICAgICAgICBjb25zdCBhY3Rpb25UeXBlID0gaXRlbVBheWxvYWQ/LmFjdGlvblR5cGU7XG5cbiAgICAgICAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuI2Zvcm1Db250cm9sc0J5SWRzLmdldChgJHtpbmRleH0tJHtmaWVsZH1gKTtcbiAgICAgICAgICBjb25zdCBydWxlVHlwZXMgPSB0aGlzLl9ydWxlTWFuYWdlci5nZXRSdWxlKGl0ZW0sIDxJdGVtS2V5PmZpZWxkLCBhY3Rpb25UeXBlKTtcbiAgICAgICAgICBpZiAocnVsZVR5cGVzLnZhbGlkYXRlICYmIGZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICBmb3JtQ29udHJvbD8uc2V0RXJyb3IoeyB2YWxpZGF0aW9uQ29kZSwgdmFsaWRhdGlvbk1lc3NhZ2UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNwcmV2VmFsaWRhdGlvbnMgPSB2YWxpZGF0aW9ucztcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBjcmVhdGVBc3luY0JhdGNoVmFsaWRhdG9yKGtleTogSXRlbUtleSwgaW5kZXg6IG51bWJlcikge1xuICAgIGxldCBiYXRjaFZhbGlkYXRvciA9IFZhbGlkYXRvcnMubnVsbEFzeW5jVmFsaWRhdG9yKCk7XG4gICAgY29uc3QgYmF0Y2hWYWxpZGF0aW9uID0gdGhpcy5nZXRCYXRjaFZhbGlkYXRpb24oKTtcbiAgICBpZiAoYmF0Y2hWYWxpZGF0aW9uKSB7XG4gICAgICBiYXRjaFZhbGlkYXRvciA9IGJhdGNoVmFsaWRhdG9yRmFjdG9yeShiYXRjaFZhbGlkYXRpb24sIGtleSBhcyBuZXZlciwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gYmF0Y2hWYWxpZGF0b3I7XG4gIH1cblxuICBnZXRGb3JtQ29udHJvbEdyb3VwKHV1aWQ6IHN0cmluZyk6IFVudHlwZWRGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLiNmb3JtR3JvdXAuZ2V0KHV1aWQpIGFzIFVudHlwZWRGb3JtR3JvdXA7XG4gIH1cblxuICBnZXRGb3JtQ29udHJvbCh1dWlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGb3JtQ29udHJvbEdyb3VwKHV1aWQpPy5nZXQodXVpZCk7XG4gIH1cblxuICByZW1vdmVGb3JtQ29udHJvbCh1dWlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLiNmb3JtR3JvdXAucmVtb3ZlQ29udHJvbCh1dWlkKTtcbiAgICB0aGlzLiNmb3JtQ29udHJvbHNCeUlkcy5kZWxldGUodXVpZCk7XG4gIH1cbn1cbiJdfQ==