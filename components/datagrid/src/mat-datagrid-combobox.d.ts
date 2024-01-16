import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { EventEmitter } from '@angular/core';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class MatDatagridComboboxComponent<Item> {
    readonly _common: CdkDatagridCommonDirective;
    readonly _edit: CdkDatagridEditDirective;
    readonly _formControl: CdkDatagridFormControlDirective<Item>;
    readonly _storage: CdkDatagridStorageDirective<Item>;
    constructor(_common: CdkDatagridCommonDirective, _edit: CdkDatagridEditDirective, _formControl: CdkDatagridFormControlDirective<Item>, _storage: CdkDatagridStorageDirective<Item>);
    hostClass: boolean;
    options: Item[];
    selectionChange: EventEmitter<MatAutocompleteSelectedEvent>;
    selectionAdded: EventEmitter<string>;
    selectionAdd: boolean;
    selectionAddIcon: string;
    selectionAddIconColor: ThemePalette;
    get autocomplete(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatagridComboboxComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDatagridComboboxComponent<any>, "mat-datagrid-combobox", never, { "options": { "alias": "options"; "required": false; }; "selectionAdd": { "alias": "selectionAdd"; "required": false; }; "selectionAddIcon": { "alias": "selectionAddIcon"; "required": false; }; "selectionAddIconColor": { "alias": "selectionAddIconColor"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; }, { "selectionChange": "selectionChange"; "selectionAdded": "selectionAdded"; }, never, never, true, never>;
}
