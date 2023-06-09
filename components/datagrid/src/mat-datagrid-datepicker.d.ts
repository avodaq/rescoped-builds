import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { EventEmitter } from '@angular/core';
import { CdkDatagridDateAdapter } from './cdk-datagrid-date.adapter';
import * as i0 from "@angular/core";
export declare class MatDatagridDatepickerComponent<Item> {
    private readonly _dateAdapter;
    readonly _common: CdkDatagridCommonDirective;
    readonly _edit: CdkDatagridEditDirective;
    readonly _formControl: CdkDatagridFormControlDirective<Item>;
    readonly _storage: CdkDatagridStorageDirective<Item>;
    constructor(_dateAdapter: CdkDatagridDateAdapter, _common: CdkDatagridCommonDirective, _edit: CdkDatagridEditDirective, _formControl: CdkDatagridFormControlDirective<Item>, _storage: CdkDatagridStorageDirective<Item>);
    hostClass: boolean;
    dateChange: EventEmitter<string | Date>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatagridDatepickerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDatagridDatepickerComponent<any>, "mat-datagrid-datepicker", never, {}, { "dateChange": "dateChange"; }, never, never, false, never>;
}
