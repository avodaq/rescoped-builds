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
import { NgClass, AsyncPipe } from '@angular/common';
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
export class MatDatagridDatepickerComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDatepickerComponent, deps: [{ token: i1.CdkDatagridDateAdapter }, { token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.7", type: MatDatagridDatepickerComponent, isStandalone: true, selector: "mat-datagrid-datepicker", outputs: { dateChange: "dateChange" }, host: { properties: { "class.mat-datagrid-datepicker": "this.hostClass" } }, providers: [
            DATAGRID_COMMON_PROVIDER,
            DATAGRID_EDIT_PROVIDER,
            DATAGRID_FORM_CONTROL_PROVIDER,
            DATAGRID_STORAGE_PROVIDER,
        ], ngImport: i0, template: `
    @if ((_edit.active$ | async) === true && !_formControl.disabled) {
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
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </form>
    } @else {
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
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i6.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i6.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i6.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDatepickerComponent, decorators: [{
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
    @if ((_edit.active$ | async) === true && !_formControl.disabled) {
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
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </form>
    } @else {
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
    }
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [
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
        }], ctorParameters: () => [{ type: i1.CdkDatagridDateAdapter }, { type: i7.CdkDatagridCommonDirective, decorators: [{
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
                }] }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-datepicker']
            }], dateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWRhdGVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QiwyQkFBMkIsR0FDNUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1B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QUNoQixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLDhCQUE4Qjt3QkFDOUIsbUJBQW1CO3dCQUNuQixPQUFPO3dCQUNQLFNBQVM7cUJBQ1Y7aUJBQ0Y7OzBCQUlJLE1BQU07MkJBQUMscUJBQXFCOzswQkFFNUIsTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUUxQixNQUFNOzJCQUFDLDJCQUEyQjs7MEJBRWxDLE1BQU07MkJBQUMsc0JBQXNCO3lDQUljLFNBQVM7c0JBQXRELFdBQVc7dUJBQUMsK0JBQStCO2dCQUVsQyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9FRElUX1BST1ZJREVSLCBEQVRBR1JJRF9FRElUX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5mYWN0b3J5JztcbmltcG9ydCB7XG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsIERBVEFHUklEX0NPTU1PTl9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5mYWN0b3J5JztcbmltcG9ydCB7IERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsIERBVEFHUklEX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREYXRlQWRhcHRlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQvbW9tZW50JztcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9jdXNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWZvY3VzLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdDbGFzcywgQXN5bmNQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWRhdGVwaWNrZXInLFxuICBwcm92aWRlcnM6IFtcbiAgICBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsXG4gICAgREFUQUdSSURfRURJVF9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfUFJPVklERVIsXG4gICAgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUixcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICBAaWYgKChfZWRpdC5hY3RpdmUkIHwgYXN5bmMpID09PSB0cnVlICYmICFfZm9ybUNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgIDxmb3JtXG4gICAgICAgIG5vdmFsaWRhdGVcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJfZm9ybUNvbnRyb2wuZm9ybUNvbnRyb2xHcm91cFwiXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJfZGF0ZUNoYW5nZShtYXREYXRlcGlja2VyLnZhbHVlKTsgX2Zvcm1Db250cm9sLmVycm9ycyAmJiB0b29sdGlwLnNob3coKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICAgICAgICAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxuICAgICAgICAgIFttYXRUb29sdGlwXT1cIl9mb3JtQ29udHJvbC5lcnJvcnM/LnZhbGlkYXRpb25NZXNzYWdlXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cIidhYm92ZSdcIlxuICAgICAgICAgIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiIV9mb3JtQ29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cIjBcIlxuICAgICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cIjBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgY2RrRm9jdXNJbnB1dFxuICAgICAgICAgICAgI2lucHV0XG4gICAgICAgICAgICAjbWF0RGF0ZXBpY2tlcj1cIm1hdERhdGVwaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiX3N0b3JhZ2UucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJfZm9ybUNvbnRyb2wuZm9ybUNvbnRyb2xOYW1lXCJcbiAgICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgICAgICAgICAoZGF0ZUNoYW5nZSk9XCJfZGF0ZUNoYW5nZShtYXREYXRlcGlja2VyLnZhbHVlKTsgcGlja2VyLmNsb3NlKClcIlxuICAgICAgICAgICAgW3R5cGVdPVwiX2NvbW1vbi50eXBlXCJcbiAgICAgICAgICAgIFthdXRvY29tcGxldGVdPVwiX2NvbW1vbi5hdXRvY29tcGxldGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgQGlmIChfZm9ybUNvbnRyb2wuZXJyb3JzKSB7XG4gICAgICAgICAgICA8bWF0LWVycm9yPjwvbWF0LWVycm9yPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8L2Zvcm0+XG4gICAgfSBAZWxzZSB7XG4gICAgICA8ZGl2XG4gICAgICAgIFt0aXRsZV09XCJfZGF0ZVJlbmRlclwiXG4gICAgICAgIGNsYXNzPVwiY2RrLWRlZmF1bHQtZmllbGRcIlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgZGlzYWJsZWQ6IF9mb3JtQ29udHJvbC5kaXNhYmxlZCxcbiAgICAgICAgICAnbWF0LXJlZC01MDAgbWF0LWVycm9yJzogX2Zvcm1Db250cm9sLmVycm9yc1xuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4+e3sgX2RhdGVSZW5kZXIgfHwgX3N0b3JhZ2UucGxhY2Vob2xkZXIgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBDZGtEYXRhZ3JpZEZvY3VzSW5wdXREaXJlY3RpdmUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBOZ0NsYXNzLFxuICAgIEFzeW5jUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWREYXRlcGlja2VyQ29tcG9uZW50PEl0ZW0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0ZUFkYXB0ZXI6IENka0RhdGFncmlkRGF0ZUFkYXB0ZXIsXG4gICAgQEluamVjdChEQVRBR1JJRF9DT01NT05fVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21tb246IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRURJVF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2VkaXQ6IENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2Zvcm1Db250cm9sOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIEBJbmplY3QoREFUQUdSSURfU1RPUkFHRV9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3N0b3JhZ2U6IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxJdGVtPixcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWRhdGVwaWNrZXInKSBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlIHwgc3RyaW5nPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Rpc3BsYXlEYXRlSW5wdXQgPSB0aGlzLl9kYXRlQWRhcHRlci5tYXREYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVJbnB1dDtcblxuICAvKiogQGludGVybmFsICovXG4gIF9mb3JtYXREYXRlSW5wdXQgPSB0aGlzLl9kYXRlQWRhcHRlci5tYXRGb3JtYXREYXRlSW5wdXQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXQgX2NvbnRyb2xWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybUNvbnRyb2w/LnZhbHVlO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXQgX2RhdGVSZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyLmZvcm1hdCh0aGlzLl9jb250cm9sVmFsdWUsIHRoaXMuX2Rpc3BsYXlEYXRlSW5wdXQpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZGF0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgTW9tZW50IHwgc3RyaW5nIHwgdW5rbm93bikge1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlci5mb3JtYXQodmFsdWUsIHRoaXMuX2Zvcm1hdERhdGVJbnB1dCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9kYXRlQ2hhbmdlKHZhbHVlOiB1bmtub3duKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLl9zdG9yYWdlLnNldFZhbHVlKHRoaXMuX2RhdGVWYWx1ZSh2YWx1ZSkpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHZhbHVlIGFzIERhdGUgfCBzdHJpbmcpO1xuICB9XG59XG4iXX0=