import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControlOptions, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CdkDatagridFormManager } from './cdk-datagrid-form.manager';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { FieldValidationErrors } from './cdk-datagrid.validators';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import * as i0 from "@angular/core";
export interface DatagridValidation {
    validator?: ValidatorFn[];
    asyncValidator?: AsyncValidatorFn[];
    updateOn?: AbstractControlOptions['updateOn'];
}
export declare class CdkDatagridFormControlDirective<Item> implements OnInit, OnDestroy {
    #private;
    private readonly _cdr;
    private readonly _storage;
    private readonly _formManager;
    private readonly _ruleManager;
    constructor(_cdr: ChangeDetectorRef, _storage: CdkDatagridStorageDirective<Item>, _formManager: CdkDatagridFormManager<Item>, _ruleManager: CdkDatagridRuleManager<Item>);
    get canRender(): boolean | undefined;
    get formControlGroup(): import("@angular/forms").UntypedFormGroup;
    get formControlName(): string;
    validator: DatagridValidation;
    get initialValue(): Item[keyof Item];
    get value(): any;
    get control(): import("@angular/forms").AbstractControl<any, any> | null;
    get disabled(): boolean | undefined;
    get valid(): boolean | undefined;
    get errors(): FieldValidationErrors | null;
    setError(errors: ValidationErrors | null): void | undefined;
    validate(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridFormControlDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkDatagridFormControlDirective<any>, "[cdk-datagrid-edit]", never, { "validator": { "alias": "validator"; "required": false; }; }, {}, never, never, true, never>;
}
