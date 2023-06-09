import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { Validation } from './cdk-datagrid-batch.validation';
import { Observable } from 'rxjs';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { CdkDatagridDataManager } from './cdk-datagrid-data.manager';
import * as i0 from "@angular/core";
export type DatagridForms<Item> = Map<string, CdkDatagridFormControlDirective<Item>>;
export declare class CdkDatagridFormManager<Item, ItemKey extends keyof Item = keyof Item, ItemValue extends Item[ItemKey] = Item[ItemKey]> {
    #private;
    private readonly _formBuilder;
    private readonly _dataManger;
    private readonly _ruleManager;
    constructor(_formBuilder: UntypedFormBuilder, _dataManger: CdkDatagridDataManager<Item>, _ruleManager: CdkDatagridRuleManager<Item>);
    formGroupControls: {
        [key: string]: import("@angular/forms").AbstractControl<any, any>;
    };
    getBatchValidation(): Observable<Validation[]>;
    setBatchValidation(batchValidations: Observable<Validation[]>): void;
    addFormControl(formControlName: string, value: ItemValue, formControlDir: CdkDatagridFormControlDirective<Item>, asyncValidatorFn?: import("@angular/forms").AsyncValidatorFn): void;
    watchBatchValidations(batchValidation$: Observable<Validation[]>): Observable<Validation[]>;
    createAsyncBatchValidator(key: ItemKey, index: number): import("@angular/forms").AsyncValidatorFn;
    getFormControlGroup(uuid: string): UntypedFormGroup;
    getFormControl(uuid: string): import("@angular/forms").AbstractControl<any, any> | null;
    removeFormControl(uuid: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridFormManager<any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CdkDatagridFormManager<any, any, any>>;
}
