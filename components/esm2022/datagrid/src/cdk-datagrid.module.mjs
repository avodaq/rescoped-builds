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
class CdkDatagridModule {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridModule, declarations: [CdkDatagridDirective,
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
            TypeSafeMatCellDefDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridModule, imports: [CommonModule,
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
            PortalModule] }); }
}
export { CdkDatagridModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQix5QkFBeUIsR0FHMUIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RSxLQUFLO0FBQ0wsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLCtCQUEr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Q25CLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLFlBQVksYUFoQ2Qsb0JBQW9CO1lBQ3BCLDRCQUE0QjtZQUM1QiwrQkFBK0I7WUFDL0Isd0JBQXdCO1lBQ3hCLDBCQUEwQjtZQUMxQiwyQkFBMkI7WUFDM0IsOEJBQThCO1lBQzlCLGlDQUFpQztZQUNqQywrQkFBK0I7WUFDL0Isb0JBQW9CO1lBQ3BCLDRCQUE0QjtZQUM1Qiw4QkFBOEI7WUFDOUIseUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1Qix1QkFBdUI7WUFDdkIsNkJBQTZCO1lBQzdCLDJCQUEyQjsrR0FxQmhCLGlCQUFpQixZQWpCMUIsWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1lBQ2YsY0FBYztZQUNkLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsWUFBWTs7U0FLSCxpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFuQjdCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztvQkFDckMsT0FBTyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXREYXRhZ3JpZERpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LWRhdGFncmlkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREYXRhZ3JpZENvbWJvYm94Q29tcG9uZW50IH0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtY29tYm9ib3gnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtcbiAgTUFUX0ZPUk1BVF9JTlBVVCxcbiAgTUFUX05VTUJFUl9JTlBVVCxcbiAgTWF0RGF0YWdyaWRJbnB1dENvbXBvbmVudCxcbiAgRGF0YWdyaWRJbnB1dEZvcm1hdHMsXG4gIERhdGFncmlkSW5wdXROdW1iZXJzLFxufSBmcm9tICcuL21hdC1kYXRhZ3JpZC1pbnB1dCc7XG5pbXBvcnQgeyBNYXREYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtY29sbGFwc2UnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb2xsYXBzZUNvbXBvbmVudCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbGxhcHNlJztcblxuLy9NRENcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTY3JvbGxpbmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IFBhcnRpYWxEZWVwIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudHlwZXMnO1xuaW1wb3J0IHsgTE9DQUxFX0lELCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNYXREYXRhZ3JpZERhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1kYXRlcGlja2VyJztcbmltcG9ydCB7XG4gIENka0RhdGFncmlkRGF0ZUFkYXB0ZXIsXG4gIE1BVF9EQVRFX0NMQVNTLFxuICBtYXREYXRlRm9ybWF0c0RlZmF1bHRzLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1kYXRlLmFkYXB0ZXInO1xuaW1wb3J0IHsgTWF0RGF0YWdyaWRSb3dEaXJlY3RpdmUgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFR5cGVTYWZlTWF0Q2VsbERlZkRpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZS1zYWZlLW1hdC1jZWxsLWRlZi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb25uZWN0V2l0aERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbm5lY3Qtd2l0aC5kaXJlY3RpdmUnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtcbiAgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyxcbiAgTW9tZW50RGF0ZUFkYXB0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7XG4gIENka0RhdGFncmlkRm9jdXNDb21ib2JveERpcmVjdGl2ZSxcbiAgQ2RrRGF0YWdyaWRGb2N1c0lucHV0RGlyZWN0aXZlLFxufSBmcm9tICcuL21hdC1kYXRhZ3JpZC1mb2N1cy5kaXJlY3RpdmVzJztcbmltcG9ydCB7XG4gIERhdGVBZGFwdGVyLFxuICBNQVRfREFURV9GT1JNQVRTLFxuICBNQVRfREFURV9MT0NBTEUsXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gIE1hdERhdGVGb3JtYXRzLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0RGF0YWdyaWRFbXB0eUNlbGxDb21wb25lbnQgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1lbXB0eS1jZWxsJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0TWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlcic7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1NYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS5tYW5hZ2VyJztcbmltcG9ydCB7IENka0RhdGFncmlkRGF0YU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1kYXRhLm1hbmFnZXInO1xuXG5jb25zdCBEQVRBR1JJRF9DT1JFX0RFUFMgPSBbXG4gIENka0RhdGFncmlkRGlyZWN0aXZlLFxuICBDZGtEYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50LFxuICBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlLFxuICBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUsXG4gIENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlLFxuICBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUsXG4gIENka0RhdGFncmlkRm9jdXNJbnB1dERpcmVjdGl2ZSxcbiAgQ2RrRGF0YWdyaWRGb2N1c0NvbWJvYm94RGlyZWN0aXZlLFxuICBDZGtEYXRhZ3JpZENvbm5lY3RXaXRoRGlyZWN0aXZlLFxuICBNYXREYXRhZ3JpZERpcmVjdGl2ZSxcbiAgTWF0RGF0YWdyaWRDb21ib2JveENvbXBvbmVudCxcbiAgTWF0RGF0YWdyaWREYXRlcGlja2VyQ29tcG9uZW50LFxuICBNYXREYXRhZ3JpZElucHV0Q29tcG9uZW50LFxuICBNYXREYXRhZ3JpZENvbGxhcHNlQ29tcG9uZW50LFxuICBNYXREYXRhZ3JpZFJvd0RpcmVjdGl2ZSxcbiAgTWF0RGF0YWdyaWRFbXB0eUNlbGxDb21wb25lbnQsXG4gIFR5cGVTYWZlTWF0Q2VsbERlZkRpcmVjdGl2ZSxcbl07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTY3JvbGxpbmdNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5EQVRBR1JJRF9DT1JFX0RFUFNdLFxuICBleHBvcnRzOiBbLi4uREFUQUdSSURfQ09SRV9ERVBTXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdDxJdGVtID0gdW5rbm93bj4oXG4gICAgb3B0aW9uczogRGF0YWdyaWRPcHRpb25zPEl0ZW0+LFxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENka0RhdGFncmlkTW9kdWxlPiB7XG4gICAgY29uc3Qgb3B0aW9uRGF0ZUZvcm1hdHMgPSBvcHRpb25zPy5kYXRlcGlja2VyPy5mb3JtYXRzIHx8IHt9O1xuICAgIGNvbnN0IG9wdGlvbklucHV0Rm9ybWF0cyA9IG9wdGlvbnM/LmlucHV0Py5mb3JtYXRzIHx8IHt9O1xuICAgIGNvbnN0IG9wdGlvbklucHV0TnVtYmVycyA9IG9wdGlvbnM/LmlucHV0Py5udW1iZXJzIHx8IHt9O1xuICAgIC8vIEB0b2RvOiB1c2UgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3N0cnVjdHVyZWRDbG9uZSBpbnN0ZWFkb2YgZGVlcG1lcmdlXG4gICAgY29uc3QgX21hdERhdGVGb3JtYXRzRGVmYXVsdHMgPSBkZWVwbWVyZ2UobWF0RGF0ZUZvcm1hdHNEZWZhdWx0cywgb3B0aW9uRGF0ZUZvcm1hdHMpO1xuICAgIF9tYXREYXRlRm9ybWF0c0RlZmF1bHRzLnBhcnNlLmRhdGVJbnB1dCA9IG9wdGlvbkRhdGVGb3JtYXRzPy5kaXNwbGF5Py5kYXRlSW5wdXQgfHwgJ1lZWVktTU0tREQnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDZGtEYXRhZ3JpZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDZGtEYXRhZ3JpZEZvcm1NYW5hZ2VyLFxuICAgICAgICBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyLFxuICAgICAgICBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyLFxuICAgICAgICBDZGtEYXRhZ3JpZERhdGVBZGFwdGVyLFxuICAgICAgICBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxuICAgICAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdLFxuICAgICAgICB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1BVF9GT1JNQVRfSU5QVVQsIHVzZVZhbHVlOiBvcHRpb25JbnB1dEZvcm1hdHMgfSxcbiAgICAgICAgeyBwcm92aWRlOiBNQVRfTlVNQkVSX0lOUFVULCB1c2VWYWx1ZTogb3B0aW9uSW5wdXROdW1iZXJzIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IF9tYXREYXRlRm9ybWF0c0RlZmF1bHRzIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTUFUX0RBVEVfTE9DQUxFLCB1c2VWYWx1ZTogJ2VuLUdCJyB9LFxuICAgICAgICB7IHByb3ZpZGU6IExPQ0FMRV9JRCwgdXNlVmFsdWU6ICdlbi1HQicgfSxcbiAgICAgICAgeyBwcm92aWRlOiBNQVRfREFURV9DTEFTUywgdXNlVmFsdWU6IG1vbWVudCB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMsIHVzZVZhbHVlOiB7IHVzZVV0YzogdHJ1ZSB9IH0sXG4gICAgICAgIC4uLihvcHRpb25zPy5kYXRlcGlja2VyPy5wcm92aWRlcnMgfHwgW10pLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIERhdGFncmlkT3B0aW9uczxJdGVtID0gdW5rbm93bj4gPSB7XG4gIGRhdGVwaWNrZXI/OiB7XG4gICAgcHJvdmlkZXJzPzogUHJvdmlkZXJbXTtcbiAgICBmb3JtYXRzPzogUGFydGlhbERlZXA8TWF0RGF0ZUZvcm1hdHM+O1xuICB9O1xuICBpbnB1dD86IHtcbiAgICAvLyBAc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9kZS9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsL051bWJlckZvcm1hdFxuICAgIGZvcm1hdHM/OiBEYXRhZ3JpZElucHV0Rm9ybWF0czxJdGVtPjtcbiAgICBudW1iZXJzPzogRGF0YWdyaWRJbnB1dE51bWJlcnM8SXRlbT47XG4gIH07XG59O1xuIl19