import { DatagridInputFormats, DatagridInputNumbers } from './mat-datagrid-input';
import { PartialDeep } from './cdk-datagrid.types';
import { ModuleWithProviders, Provider } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid.directive";
import * as i2 from "./cdk-datagrid-collapse";
import * as i3 from "./cdk-datagrid-form-control.directive";
import * as i4 from "./cdk-datagrid-edit.directive";
import * as i5 from "./cdk-datagrid-common.directive";
import * as i6 from "./cdk-datagrid-storage.directive";
import * as i7 from "./mat-datagrid-focus.directives";
import * as i8 from "./cdk-datagrid-connect-with.directive";
import * as i9 from "./mat-datagrid.directive";
import * as i10 from "./mat-datagrid-combobox";
import * as i11 from "./mat-datagrid-datepicker";
import * as i12 from "./mat-datagrid-input";
import * as i13 from "./mat-datagrid-collapse";
import * as i14 from "./mat-datagrid-row.directive";
import * as i15 from "./mat-datagrid-empty-cell";
import * as i16 from "./type-safe-mat-cell-def.directive";
import * as i17 from "@angular/common";
import * as i18 from "@angular/forms";
import * as i19 from "@angular/material/select";
import * as i20 from "@angular/material/input";
import * as i21 from "@angular/material/autocomplete";
import * as i22 from "@angular/material/datepicker";
import * as i23 from "@angular/material/core";
import * as i24 from "@angular/material/tooltip";
import * as i25 from "@angular/material/button";
import * as i26 from "@angular/material/icon";
import * as i27 from "@angular/cdk/scrolling";
import * as i28 from "@angular/cdk/portal";
export declare class CdkDatagridModule {
    static forRoot<Item = unknown>(options: DatagridOptions<Item>): ModuleWithProviders<CdkDatagridModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CdkDatagridModule, [typeof i1.CdkDatagridDirective, typeof i2.CdkDatagridCollapseComponent, typeof i3.CdkDatagridFormControlDirective, typeof i4.CdkDatagridEditDirective, typeof i5.CdkDatagridCommonDirective, typeof i6.CdkDatagridStorageDirective, typeof i7.CdkDatagridFocusInputDirective, typeof i7.CdkDatagridFocusComboboxDirective, typeof i8.CdkDatagridConnectWithDirective, typeof i9.MatDatagridDirective, typeof i10.MatDatagridComboboxComponent, typeof i11.MatDatagridDatepickerComponent, typeof i12.MatDatagridInputComponent, typeof i13.MatDatagridCollapseComponent, typeof i14.MatDatagridRowDirective, typeof i15.MatDatagridEmptyCellComponent, typeof i16.TypeSafeMatCellDefDirective], [typeof i17.CommonModule, typeof i18.FormsModule, typeof i19.MatSelectModule, typeof i20.MatInputModule, typeof i21.MatAutocompleteModule, typeof i22.MatDatepickerModule, typeof i23.MatNativeDateModule, typeof i24.MatTooltipModule, typeof i25.MatButtonModule, typeof i26.MatIconModule, typeof i18.ReactiveFormsModule, typeof i27.ScrollingModule, typeof i28.PortalModule], [typeof i1.CdkDatagridDirective, typeof i2.CdkDatagridCollapseComponent, typeof i3.CdkDatagridFormControlDirective, typeof i4.CdkDatagridEditDirective, typeof i5.CdkDatagridCommonDirective, typeof i6.CdkDatagridStorageDirective, typeof i7.CdkDatagridFocusInputDirective, typeof i7.CdkDatagridFocusComboboxDirective, typeof i8.CdkDatagridConnectWithDirective, typeof i9.MatDatagridDirective, typeof i10.MatDatagridComboboxComponent, typeof i11.MatDatagridDatepickerComponent, typeof i12.MatDatagridInputComponent, typeof i13.MatDatagridCollapseComponent, typeof i14.MatDatagridRowDirective, typeof i15.MatDatagridEmptyCellComponent, typeof i16.TypeSafeMatCellDefDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CdkDatagridModule>;
}
export type DatagridOptions<Item = unknown> = {
    datepicker?: {
        providers?: Provider[];
        formats?: PartialDeep<MatDateFormats>;
    };
    input?: {
        formats?: DatagridInputFormats<Item>;
        numbers?: DatagridInputNumbers<Item>;
    };
};
