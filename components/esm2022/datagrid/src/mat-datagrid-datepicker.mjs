import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Output, ViewEncapsulation, } from '@angular/core';
import { DATAGRID_EDIT_PROVIDER, DATAGRID_EDIT_TOKEN } from './cdk-datagrid-edit.factory';
import { DATAGRID_FORM_CONTROL_PROVIDER, DATAGRID_FORM_CONTROL_TOKEN, } from './cdk-datagrid-form-control.factory';
import { DATAGRID_COMMON_PROVIDER, DATAGRID_COMMON_TOKEN } from './cdk-datagrid-common.factory';
import { DATAGRID_STORAGE_PROVIDER, DATAGRID_STORAGE_TOKEN } from './cdk-datagrid-storage.factory';
import { CdkDatagridDateAdapter } from './cdk-datagrid-date.adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkDatagridFocusInputDirective } from './mat-datagrid-focus.directives';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-date.adapter";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/datepicker";
import * as i7 from "./cdk-datagrid-common.directive";
import * as i8 from "./cdk-datagrid-edit.directive";
import * as i9 from "./cdk-datagrid-form-control.directive";
import * as i10 from "./cdk-datagrid-storage.directive";
// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
class MatDatagridDatepickerComponent {
    constructor(_dateAdapter, _common, _edit, _formControl, _storage) {
        this._dateAdapter = _dateAdapter;
        this._common = _common;
        this._edit = _edit;
        this._formControl = _formControl;
        this._storage = _storage;
        this.hostClass = true;
        this.dateChange = new EventEmitter();
        /** @internal */
        this._displayDateInput = this._dateAdapter.matDateFormats.display.dateInput;
        /** @internal */
        this._formatDateInput = this._dateAdapter.matFormatDateInput;
    }
    /** @internal */
    get _controlValue() {
        return this._formControl?.value;
    }
    /** @internal */
    get _dateRender() {
        return this._dateAdapter.format(this._controlValue, this._displayDateInput);
    }
    /** @internal */
    _dateValue(value) {
        return this._dateAdapter.format(value, this._formatDateInput);
    }
    /** @internal */
    _dateChange(value) {
        if (value === null)
            return;
        this._storage.setValue(this._dateValue(value));
        this.dateChange.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridDatepickerComponent, deps: [{ token: i1.CdkDatagridDateAdapter }, { token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridDatepickerComponent, isStandalone: true, selector: "mat-datagrid-datepicker", outputs: { dateChange: "dateChange" }, host: { properties: { "class.mat-datagrid-datepicker": "this.hostClass" } }, providers: [
            DATAGRID_COMMON_PROVIDER,
            DATAGRID_EDIT_PROVIDER,
            DATAGRID_FORM_CONTROL_PROVIDER,
            DATAGRID_STORAGE_PROVIDER,
        ], ngImport: i0, template: `
    <ng-container
      *ngIf="(_edit.active$ | async) === true && !_formControl.disabled; else defaultTemplate"
    >
      <form
        novalidate
        [formGroup]="_formControl.formControlGroup"
        (ngSubmit)="_dateChange(matDatepicker.value); _formControl.errors && tooltip.show()"
      >
        <mat-form-field
          appearance="outline"
          #tooltip="matTooltip"
          [matTooltip]="_formControl.errors?.validationMessage"
          [matTooltipPosition]="'above'"
          [matTooltipDisabled]="!_formControl.errors"
          [matTooltipShowDelay]="0"
          [matTooltipHideDelay]="0"
        >
          <input
            matInput
            cdkFocusInput
            #input
            #matDatepicker="matDatepickerInput"
            [placeholder]="_storage.placeholder"
            [formControlName]="_formControl.formControlName"
            [matDatepicker]="picker"
            (dateChange)="_dateChange(matDatepicker.value); picker.close()"
            [type]="_common.type"
            [autocomplete]="_common.autocomplete"
          />
          <mat-error *ngIf="_formControl.errors"></mat-error>
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </form>
    </ng-container>
    <ng-template #defaultTemplate>
      <div
        [title]="_dateRender"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _dateRender || _storage.placeholder }}</span>
      </div>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i6.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i6.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i6.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { MatDatagridDatepickerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridDatepickerComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-datepicker',
                    providers: [
                        DATAGRID_COMMON_PROVIDER,
                        DATAGRID_EDIT_PROVIDER,
                        DATAGRID_FORM_CONTROL_PROVIDER,
                        DATAGRID_STORAGE_PROVIDER,
                    ],
                    template: `
    <ng-container
      *ngIf="(_edit.active$ | async) === true && !_formControl.disabled; else defaultTemplate"
    >
      <form
        novalidate
        [formGroup]="_formControl.formControlGroup"
        (ngSubmit)="_dateChange(matDatepicker.value); _formControl.errors && tooltip.show()"
      >
        <mat-form-field
          appearance="outline"
          #tooltip="matTooltip"
          [matTooltip]="_formControl.errors?.validationMessage"
          [matTooltipPosition]="'above'"
          [matTooltipDisabled]="!_formControl.errors"
          [matTooltipShowDelay]="0"
          [matTooltipHideDelay]="0"
        >
          <input
            matInput
            cdkFocusInput
            #input
            #matDatepicker="matDatepickerInput"
            [placeholder]="_storage.placeholder"
            [formControlName]="_formControl.formControlName"
            [matDatepicker]="picker"
            (dateChange)="_dateChange(matDatepicker.value); picker.close()"
            [type]="_common.type"
            [autocomplete]="_common.autocomplete"
          />
          <mat-error *ngIf="_formControl.errors"></mat-error>
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </form>
    </ng-container>
    <ng-template #defaultTemplate>
      <div
        [title]="_dateRender"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _dateRender || _storage.placeholder }}</span>
      </div>
    </ng-template>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [
                        NgIf,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatTooltipModule,
                        MatInputModule,
                        CdkDatagridFocusInputDirective,
                        MatDatepickerModule,
                        NgClass,
                        AsyncPipe,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkDatagridDateAdapter }, { type: i7.CdkDatagridCommonDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_COMMON_TOKEN]
                }] }, { type: i8.CdkDatagridEditDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_EDIT_TOKEN]
                }] }, { type: i9.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i10.CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-datepicker']
            }], dateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWRhdGVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QiwyQkFBMkIsR0FDNUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1B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QyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLElBQUk7d0JBQ0osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLDhCQUE4Qjt3QkFDOUIsbUJBQW1CO3dCQUNuQixPQUFPO3dCQUNQLFNBQVM7cUJBQ1Y7aUJBQ0Y7OzBCQUlJLE1BQU07MkJBQUMscUJBQXFCOzswQkFFNUIsTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUUxQixNQUFNOzJCQUFDLDJCQUEyQjs7MEJBRWxDLE1BQU07MkJBQUMsc0JBQXNCOzRDQUljLFNBQVM7c0JBQXRELFdBQVc7dUJBQUMsK0JBQStCO2dCQUVsQyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9FRElUX1BST1ZJREVSLCBEQVRBR1JJRF9FRElUX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5mYWN0b3J5JztcbmltcG9ydCB7XG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsIERBVEFHUklEX0NPTU1PTl9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5mYWN0b3J5JztcbmltcG9ydCB7IERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsIERBVEFHUklEX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREYXRlQWRhcHRlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQvbW9tZW50JztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9jdXNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWZvY3VzLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdJZiwgTmdDbGFzcywgQXN5bmNQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWRhdGVwaWNrZXInLFxuICBwcm92aWRlcnM6IFtcbiAgICBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsXG4gICAgREFUQUdSSURfRURJVF9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfUFJPVklERVIsXG4gICAgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUixcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyXG4gICAgICAqbmdJZj1cIihfZWRpdC5hY3RpdmUkIHwgYXN5bmMpID09PSB0cnVlICYmICFfZm9ybUNvbnRyb2wuZGlzYWJsZWQ7IGVsc2UgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICA+XG4gICAgICA8Zm9ybVxuICAgICAgICBub3ZhbGlkYXRlXG4gICAgICAgIFtmb3JtR3JvdXBdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sR3JvdXBcIlxuICAgICAgICAobmdTdWJtaXQpPVwiX2RhdGVDaGFuZ2UobWF0RGF0ZXBpY2tlci52YWx1ZSk7IF9mb3JtQ29udHJvbC5lcnJvcnMgJiYgdG9vbHRpcC5zaG93KClcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiXG4gICAgICAgICAgI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcF09XCJfZm9ybUNvbnRyb2wuZXJyb3JzPy52YWxpZGF0aW9uTWVzc2FnZVwiXG4gICAgICAgICAgW21hdFRvb2x0aXBQb3NpdGlvbl09XCInYWJvdmUnXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cIiFfZm9ybUNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFNob3dEZWxheV09XCIwXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcEhpZGVEZWxheV09XCIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgIGNka0ZvY3VzSW5wdXRcbiAgICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICAgI21hdERhdGVwaWNrZXI9XCJtYXREYXRlcGlja2VySW5wdXRcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIl9zdG9yYWdlLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sTmFtZVwiXG4gICAgICAgICAgICBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxuICAgICAgICAgICAgKGRhdGVDaGFuZ2UpPVwiX2RhdGVDaGFuZ2UobWF0RGF0ZXBpY2tlci52YWx1ZSk7IHBpY2tlci5jbG9zZSgpXCJcbiAgICAgICAgICAgIFt0eXBlXT1cIl9jb21tb24udHlwZVwiXG4gICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cIl9jb21tb24uYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJfZm9ybUNvbnRyb2wuZXJyb3JzXCI+PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPC9mb3JtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBbdGl0bGVdPVwiX2RhdGVSZW5kZXJcIlxuICAgICAgICBjbGFzcz1cImNkay1kZWZhdWx0LWZpZWxkXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgIGRpc2FibGVkOiBfZm9ybUNvbnRyb2wuZGlzYWJsZWQsXG4gICAgICAgICAgJ21hdC1yZWQtNTAwIG1hdC1lcnJvcic6IF9mb3JtQ29udHJvbC5lcnJvcnNcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuPnt7IF9kYXRlUmVuZGVyIHx8IF9zdG9yYWdlLnBsYWNlaG9sZGVyIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgQ2RrRGF0YWdyaWRGb2N1c0lucHV0RGlyZWN0aXZlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTmdDbGFzcyxcbiAgICBBc3luY1BpcGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkRGF0ZXBpY2tlckNvbXBvbmVudDxJdGVtPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGVBZGFwdGVyOiBDZGtEYXRhZ3JpZERhdGVBZGFwdGVyLFxuICAgIEBJbmplY3QoREFUQUdSSURfQ09NTU9OX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfY29tbW9uOiBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0VESVRfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9lZGl0OiBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9mb3JtQ29udHJvbDogQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPixcbiAgICBASW5qZWN0KERBVEFHUklEX1NUT1JBR0VfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9zdG9yYWdlOiBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8SXRlbT4sXG4gICkge31cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1kYXRlcGlja2VyJykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZSB8IHN0cmluZz4oKTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9kaXNwbGF5RGF0ZUlucHV0ID0gdGhpcy5fZGF0ZUFkYXB0ZXIubWF0RGF0ZUZvcm1hdHMuZGlzcGxheS5kYXRlSW5wdXQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZm9ybWF0RGF0ZUlucHV0ID0gdGhpcy5fZGF0ZUFkYXB0ZXIubWF0Rm9ybWF0RGF0ZUlucHV0O1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZ2V0IF9jb250cm9sVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1Db250cm9sPy52YWx1ZTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZ2V0IF9kYXRlUmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlci5mb3JtYXQodGhpcy5fY29udHJvbFZhbHVlLCB0aGlzLl9kaXNwbGF5RGF0ZUlucHV0KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2RhdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IE1vbWVudCB8IHN0cmluZyB8IHVua25vd24pIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXIuZm9ybWF0KHZhbHVlLCB0aGlzLl9mb3JtYXREYXRlSW5wdXQpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZGF0ZUNoYW5nZSh2YWx1ZTogdW5rbm93bikge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5fc3RvcmFnZS5zZXRWYWx1ZSh0aGlzLl9kYXRlVmFsdWUodmFsdWUpKTtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh2YWx1ZSBhcyBEYXRlIHwgc3RyaW5nKTtcbiAgfVxufVxuIl19