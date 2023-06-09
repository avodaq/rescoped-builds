import { MatDatagridDirective } from './mat-datagrid.directive';
import { CdkDatagridDirective } from './cdk-datagrid.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatagridComboboxComponent } from './mat-datagrid-combobox';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_FORMAT_INPUT, MAT_NUMBER_INPUT, MatDatagridInputComponent, } from './mat-datagrid-input';
import { MatDatagridCollapseComponent } from './mat-datagrid-collapse';
import { CdkDatagridCollapseComponent } from './cdk-datagrid-collapse';
//MDC
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { MatDatagridDatepickerComponent } from './mat-datagrid-datepicker';
import { CdkDatagridDateAdapter, MAT_DATE_CLASS, matDateFormatsDefaults, } from './cdk-datagrid-date.adapter';
import { MatDatagridRowDirective } from './mat-datagrid-row.directive';
import { TypeSafeMatCellDefDirective } from './type-safe-mat-cell-def.directive';
import { CdkDatagridConnectWithDirective } from './cdk-datagrid-connect-with.directive';
import deepmerge from 'deepmerge';
import moment from 'moment';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, } from '@angular/material-moment-adapter';
import { CdkDatagridFocusComboboxDirective, CdkDatagridFocusInputDirective, } from './mat-datagrid-focus.directives';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, } from '@angular/material/core';
import { PortalModule } from '@angular/cdk/portal';
import { MatDatagridEmptyCellComponent } from './mat-datagrid-empty-cell';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { CdkDatagridEditManager } from './cdk-datagrid-edit.manager';
import { CdkDatagridFormManager } from './cdk-datagrid-form.manager';
import { CdkDatagridDataManager } from './cdk-datagrid-data.manager';
import * as i0 from "@angular/core";
const DATAGRID_CORE_DEPS = [
    CdkDatagridDirective,
    CdkDatagridCollapseComponent,
    CdkDatagridFormControlDirective,
    CdkDatagridEditDirective,
    CdkDatagridCommonDirective,
    CdkDatagridStorageDirective,
    CdkDatagridFocusInputDirective,
    CdkDatagridFocusComboboxDirective,
    CdkDatagridConnectWithDirective,
    MatDatagridDirective,
    MatDatagridComboboxComponent,
    MatDatagridDatepickerComponent,
    MatDatagridInputComponent,
    MatDatagridCollapseComponent,
    MatDatagridRowDirective,
    MatDatagridEmptyCellComponent,
    TypeSafeMatCellDefDirective,
];
export class CdkDatagridModule {
    static forRoot(options) {
        const optionDateFormats = options?.datepicker?.formats || {};
        const optionInputFormats = options?.input?.formats || {};
        const optionInputNumbers = options?.input?.numbers || {};
        // @todo: use https://developer.mozilla.org/en-US/docs/Web/API/structuredClone insteadof deepmerge
        const _matDateFormatsDefaults = deepmerge(matDateFormatsDefaults, optionDateFormats);
        _matDateFormatsDefaults.parse.dateInput = optionDateFormats?.display?.dateInput || 'YYYY-MM-DD';
        return {
            ngModule: CdkDatagridModule,
            providers: [
                CdkDatagridFormManager,
                CdkDatagridRuleManager,
                CdkDatagridDataManager,
                CdkDatagridDateAdapter,
                CdkDatagridEditManager,
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                },
                { provide: MAT_FORMAT_INPUT, useValue: optionInputFormats },
                { provide: MAT_NUMBER_INPUT, useValue: optionInputNumbers },
                { provide: MAT_DATE_FORMATS, useValue: _matDateFormatsDefaults },
                { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
                { provide: LOCALE_ID, useValue: 'en-GB' },
                { provide: MAT_DATE_CLASS, useValue: moment },
                { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
                ...(options?.datepicker?.providers || []),
            ],
        };
    }
}
CdkDatagridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkDatagridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridModule, declarations: [CdkDatagridDirective,
        CdkDatagridCollapseComponent,
        CdkDatagridFormControlDirective,
        CdkDatagridEditDirective,
        CdkDatagridCommonDirective,
        CdkDatagridStorageDirective,
        CdkDatagridFocusInputDirective,
        CdkDatagridFocusComboboxDirective,
        CdkDatagridConnectWithDirective,
        MatDatagridDirective,
        MatDatagridComboboxComponent,
        MatDatagridDatepickerComponent,
        MatDatagridInputComponent,
        MatDatagridCollapseComponent,
        MatDatagridRowDirective,
        MatDatagridEmptyCellComponent,
        TypeSafeMatCellDefDirective], imports: [CommonModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        ScrollingModule,
        PortalModule], exports: [CdkDatagridDirective,
        CdkDatagridCollapseComponent,
        CdkDatagridFormControlDirective,
        CdkDatagridEditDirective,
        CdkDatagridCommonDirective,
        CdkDatagridStorageDirective,
        CdkDatagridFocusInputDirective,
        CdkDatagridFocusComboboxDirective,
        CdkDatagridConnectWithDirective,
        MatDatagridDirective,
        MatDatagridComboboxComponent,
        MatDatagridDatepickerComponent,
        MatDatagridInputComponent,
        MatDatagridCollapseComponent,
        MatDatagridRowDirective,
        MatDatagridEmptyCellComponent,
        TypeSafeMatCellDefDirective] });
CdkDatagridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridModule, imports: [CommonModule,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        ScrollingModule,
        PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatSelectModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatTooltipModule,
                        MatButtonModule,
                        MatIconModule,
                        ReactiveFormsModule,
                        ScrollingModule,
                        PortalModule,
                    ],
                    declarations: [...DATAGRID_CORE_DEPS],
                    exports: [...DATAGRID_CORE_DEPS],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQix5QkFBeUIsR0FHMUIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RSxLQUFLO0FBQ0wsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLCtCQUEr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QW1CO1FBQ25CLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFlBQVksYUFoQ2Qsb0JBQW9CO1FBQ3BCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLGlDQUFpQztRQUNqQywrQkFBK0I7UUFDL0Isb0JBQW9CO1FBQ3BCLDRCQUE0QjtRQUM1Qiw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLDJCQUEyQjsrR0FxQmhCLGlCQUFpQixZQWpCMUIsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsWUFBWTsyRkFLSCxpQkFBaUI7a0JBbkI3QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUM7b0JBQ3JDLE9BQU8sRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUM7aUJBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0RGF0YWdyaWREaXJlY3RpdmUgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGF0YWdyaWRDb21ib2JveENvbXBvbmVudCB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWNvbWJvYm94JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7XG4gIE1BVF9GT1JNQVRfSU5QVVQsXG4gIE1BVF9OVU1CRVJfSU5QVVQsXG4gIE1hdERhdGFncmlkSW5wdXRDb21wb25lbnQsXG4gIERhdGFncmlkSW5wdXRGb3JtYXRzLFxuICBEYXRhZ3JpZElucHV0TnVtYmVycyxcbn0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtaW5wdXQnO1xuaW1wb3J0IHsgTWF0RGF0YWdyaWRDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWNvbGxhcHNlJztcbmltcG9ydCB7IENka0RhdGFncmlkQ29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb2xsYXBzZSc7XG5cbi8vTURDXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2Nyb2xsaW5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBQYXJ0aWFsRGVlcCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnR5cGVzJztcbmltcG9ydCB7IExPQ0FMRV9JRCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWF0RGF0YWdyaWREYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtZGF0ZXBpY2tlcic7XG5pbXBvcnQge1xuICBDZGtEYXRhZ3JpZERhdGVBZGFwdGVyLFxuICBNQVRfREFURV9DTEFTUyxcbiAgbWF0RGF0ZUZvcm1hdHNEZWZhdWx0cyxcbn0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0ZS5hZGFwdGVyJztcbmltcG9ydCB7IE1hdERhdGFncmlkUm93RGlyZWN0aXZlIH0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUeXBlU2FmZU1hdENlbGxEZWZEaXJlY3RpdmUgfSBmcm9tICcuL3R5cGUtc2FmZS1tYXQtY2VsbC1kZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IENka0RhdGFncmlkQ29ubmVjdFdpdGhEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb25uZWN0LXdpdGguZGlyZWN0aXZlJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7XG4gIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMsXG4gIE1vbWVudERhdGVBZGFwdGVyLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQge1xuICBDZGtEYXRhZ3JpZEZvY3VzQ29tYm9ib3hEaXJlY3RpdmUsXG4gIENka0RhdGFncmlkRm9jdXNJbnB1dERpcmVjdGl2ZSxcbn0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtZm9jdXMuZGlyZWN0aXZlcyc7XG5pbXBvcnQge1xuICBEYXRlQWRhcHRlcixcbiAgTUFUX0RBVEVfRk9STUFUUyxcbiAgTUFUX0RBVEVfTE9DQUxFLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXREYXRlRm9ybWF0cyxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE1hdERhdGFncmlkRW1wdHlDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtZW1wdHktY2VsbCc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtcnVsZS5tYW5hZ2VyJztcbmltcG9ydCB7IENka0RhdGFncmlkRWRpdE1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0Lm1hbmFnZXInO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0ubWFuYWdlcic7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0YS5tYW5hZ2VyJztcblxuY29uc3QgREFUQUdSSURfQ09SRV9ERVBTID0gW1xuICBDZGtEYXRhZ3JpZERpcmVjdGl2ZSxcbiAgQ2RrRGF0YWdyaWRDb2xsYXBzZUNvbXBvbmVudCxcbiAgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZSxcbiAgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlLFxuICBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSxcbiAgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlLFxuICBDZGtEYXRhZ3JpZEZvY3VzSW5wdXREaXJlY3RpdmUsXG4gIENka0RhdGFncmlkRm9jdXNDb21ib2JveERpcmVjdGl2ZSxcbiAgQ2RrRGF0YWdyaWRDb25uZWN0V2l0aERpcmVjdGl2ZSxcbiAgTWF0RGF0YWdyaWREaXJlY3RpdmUsXG4gIE1hdERhdGFncmlkQ29tYm9ib3hDb21wb25lbnQsXG4gIE1hdERhdGFncmlkRGF0ZXBpY2tlckNvbXBvbmVudCxcbiAgTWF0RGF0YWdyaWRJbnB1dENvbXBvbmVudCxcbiAgTWF0RGF0YWdyaWRDb2xsYXBzZUNvbXBvbmVudCxcbiAgTWF0RGF0YWdyaWRSb3dEaXJlY3RpdmUsXG4gIE1hdERhdGFncmlkRW1wdHlDZWxsQ29tcG9uZW50LFxuICBUeXBlU2FmZU1hdENlbGxEZWZEaXJlY3RpdmUsXG5dO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU2Nyb2xsaW5nTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uREFUQUdSSURfQ09SRV9ERVBTXSxcbiAgZXhwb3J0czogWy4uLkRBVEFHUklEX0NPUkVfREVQU10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Q8SXRlbSA9IHVua25vd24+KFxuICAgIG9wdGlvbnM6IERhdGFncmlkT3B0aW9uczxJdGVtPixcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDZGtEYXRhZ3JpZE1vZHVsZT4ge1xuICAgIGNvbnN0IG9wdGlvbkRhdGVGb3JtYXRzID0gb3B0aW9ucz8uZGF0ZXBpY2tlcj8uZm9ybWF0cyB8fCB7fTtcbiAgICBjb25zdCBvcHRpb25JbnB1dEZvcm1hdHMgPSBvcHRpb25zPy5pbnB1dD8uZm9ybWF0cyB8fCB7fTtcbiAgICBjb25zdCBvcHRpb25JbnB1dE51bWJlcnMgPSBvcHRpb25zPy5pbnB1dD8ubnVtYmVycyB8fCB7fTtcbiAgICAvLyBAdG9kbzogdXNlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9zdHJ1Y3R1cmVkQ2xvbmUgaW5zdGVhZG9mIGRlZXBtZXJnZVxuICAgIGNvbnN0IF9tYXREYXRlRm9ybWF0c0RlZmF1bHRzID0gZGVlcG1lcmdlKG1hdERhdGVGb3JtYXRzRGVmYXVsdHMsIG9wdGlvbkRhdGVGb3JtYXRzKTtcbiAgICBfbWF0RGF0ZUZvcm1hdHNEZWZhdWx0cy5wYXJzZS5kYXRlSW5wdXQgPSBvcHRpb25EYXRlRm9ybWF0cz8uZGlzcGxheT8uZGF0ZUlucHV0IHx8ICdZWVlZLU1NLUREJztcblxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2RrRGF0YWdyaWRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2RrRGF0YWdyaWRGb3JtTWFuYWdlcixcbiAgICAgICAgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcixcbiAgICAgICAgQ2RrRGF0YWdyaWREYXRhTWFuYWdlcixcbiAgICAgICAgQ2RrRGF0YWdyaWREYXRlQWRhcHRlcixcbiAgICAgICAgQ2RrRGF0YWdyaWRFZGl0TWFuYWdlcixcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgICAgICBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBNQVRfRk9STUFUX0lOUFVULCB1c2VWYWx1ZTogb3B0aW9uSW5wdXRGb3JtYXRzIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTUFUX05VTUJFUl9JTlBVVCwgdXNlVmFsdWU6IG9wdGlvbklucHV0TnVtYmVycyB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBfbWF0RGF0ZUZvcm1hdHNEZWZhdWx0cyB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdlbi1HQicgfSxcbiAgICAgICAgeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiAnZW4tR0InIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTUFUX0RBVEVfQ0xBU1MsIHVzZVZhbHVlOiBtb21lbnQgfSxcbiAgICAgICAgeyBwcm92aWRlOiBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLCB1c2VWYWx1ZTogeyB1c2VVdGM6IHRydWUgfSB9LFxuICAgICAgICAuLi4ob3B0aW9ucz8uZGF0ZXBpY2tlcj8ucHJvdmlkZXJzIHx8IFtdKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBEYXRhZ3JpZE9wdGlvbnM8SXRlbSA9IHVua25vd24+ID0ge1xuICBkYXRlcGlja2VyPzoge1xuICAgIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG4gICAgZm9ybWF0cz86IFBhcnRpYWxEZWVwPE1hdERhdGVGb3JtYXRzPjtcbiAgfTtcbiAgaW5wdXQ/OiB7XG4gICAgLy8gQHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZGUvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSW50bC9OdW1iZXJGb3JtYXRcbiAgICBmb3JtYXRzPzogRGF0YWdyaWRJbnB1dEZvcm1hdHM8SXRlbT47XG4gICAgbnVtYmVycz86IERhdGFncmlkSW5wdXROdW1iZXJzPEl0ZW0+O1xuICB9O1xufTtcbiJdfQ==