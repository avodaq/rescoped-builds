import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { ChangeDetectorRef, EventEmitter, InjectionToken, Injector, OnInit } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import * as i0 from "@angular/core";
export declare const ACTION_DATA: InjectionToken<unknown>;
export declare class MatDatagridInputComponent<Item> implements OnInit {
    readonly _common: CdkDatagridCommonDirective;
    readonly _edit: CdkDatagridEditDirective;
    readonly _formControl: CdkDatagridFormControlDirective<Item>;
    readonly _storage: CdkDatagridStorageDirective<Item>;
    private readonly _cdr;
    private readonly _injector;
    private readonly _ruleManager;
    constructor(_common: CdkDatagridCommonDirective, _edit: CdkDatagridEditDirective, _formControl: CdkDatagridFormControlDirective<Item>, _storage: CdkDatagridStorageDirective<Item>, _cdr: ChangeDetectorRef, _injector: Injector, _ruleManager: CdkDatagridRuleManager<Item>);
    index: number;
    override: boolean;
    afterActionPortal: Portal<any>;
    beforeActionPortal: Portal<any>;
    componentPortal: ComponentPortal<unknown>;
    hostClass: boolean;
    inputChange: EventEmitter<string>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatagridInputComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDatagridInputComponent<any>, "mat-datagrid-input", ["matDatagridInput"], {}, { "inputChange": "inputChange"; }, never, never, true, never>;
}
export declare const MAT_FORMAT_INPUT: InjectionToken<DatagridInputFormats<unknown>>;
export declare const MAT_NUMBER_INPUT: InjectionToken<DatagridInputFormats<unknown>>;
export interface DatagridInputFormatsTypes {
    parse?: RegExp;
    display?: RegExp;
}
export interface DatagridInputNumbersTypes {
    round?: number | ((value: number) => number);
}
export interface DatagridInputFormats<Item = unknown> extends DatagridInputFormatsTypes {
    overrides?: {
        [itemKey in keyof Item]?: DatagridInputFormatsTypes;
    };
}
export interface DatagridInputNumbers<Item = unknown> extends DatagridInputNumbersTypes {
    overrides?: {
        [itemKey in keyof Item]?: DatagridInputFormatsTypes;
    };
}
