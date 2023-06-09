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
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-date.adapter";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/datepicker";
import * as i7 from "@angular/material/tooltip";
import * as i8 from "./mat-datagrid-focus.directives";
import * as i9 from "./cdk-datagrid-common.directive";
import * as i10 from "./cdk-datagrid-edit.directive";
import * as i11 from "./cdk-datagrid-form-control.directive";
import * as i12 from "./cdk-datagrid-storage.directive";
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
}
MatDatagridDatepickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridDatepickerComponent, deps: [{ token: i1.CdkDatagridDateAdapter }, { token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
MatDatagridDatepickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.1", type: MatDatagridDatepickerComponent, selector: "mat-datagrid-datepicker", outputs: { dateChange: "dateChange" }, host: { properties: { "class.mat-datagrid-datepicker": "this.hostClass" } }, providers: [
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i6.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i6.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i7.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i8.CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridDatepickerComponent, decorators: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkDatagridDateAdapter }, { type: i9.CdkDatagridCommonDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_COMMON_TOKEN]
                }] }, { type: i10.CdkDatagridEditDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_EDIT_TOKEN]
                }] }, { type: i11.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i12.CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-datepicker']
            }], dateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWRhdGVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QiwyQkFBMkIsR0FDNUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFHckUscUZBQXFGO0FBOERyRixNQUFNLE9BQU8sOEJBQThCO0lBQ3pDLFlBQ21CLFlBQW9DLEVBRXJDLE9BQW1DLEVBRW5DLEtBQStCLEVBRS9CLFlBQW1ELEVBRW5ELFFBQTJDO1FBUjFDLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtRQUVyQyxZQUFPLEdBQVAsT0FBTyxDQUE0QjtRQUVuQyxVQUFLLEdBQUwsS0FBSyxDQUEwQjtRQUUvQixpQkFBWSxHQUFaLFlBQVksQ0FBdUM7UUFFbkQsYUFBUSxHQUFSLFFBQVEsQ0FBbUM7UUFHZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUV6RCxnQkFBZ0I7UUFDaEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUV2RSxnQkFBZ0I7UUFDaEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQVZyRCxDQUFDO0lBWUosZ0JBQWdCO0lBQ2hCLElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixVQUFVLENBQUMsS0FBdUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixXQUFXLENBQUMsS0FBYztRQUN4QixJQUFJLEtBQUssS0FBSyxJQUFJO1lBQUUsT0FBTztRQUUzQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBc0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OzJIQTVDVSw4QkFBOEIsd0RBRy9CLHFCQUFxQixhQUVyQixtQkFBbUIsYUFFbkIsMkJBQTJCLGFBRTNCLHNCQUFzQjsrR0FUckIsOEJBQThCLHNLQTFEOUI7UUFDVCx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5Qix5QkFBeUI7S0FDMUIsMEJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdEVDsyRkFJVSw4QkFBOEI7a0JBN0QxQyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFO3dCQUNULHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0Qiw4QkFBOEI7d0JBQzlCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRFQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBSUksTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBRTFCLE1BQU07MkJBQUMsMkJBQTJCOzswQkFFbEMsTUFBTTsyQkFBQyxzQkFBc0I7NENBSWMsU0FBUztzQkFBdEQsV0FBVzt1QkFBQywrQkFBK0I7Z0JBRWxDLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERBVEFHUklEX0VESVRfUFJPVklERVIsIERBVEFHUklEX0VESVRfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmZhY3RvcnknO1xuaW1wb3J0IHtcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4sXG59IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5mYWN0b3J5JztcbmltcG9ydCB7IERBVEFHUklEX0NPTU1PTl9QUk9WSURFUiwgREFUQUdSSURfQ09NTU9OX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUiwgREFUQUdSSURfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERhdGVBZGFwdGVyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0ZS5hZGFwdGVyJztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudC9tb21lbnQnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L3ByZWZlci1vbi1wdXNoLWNvbXBvbmVudC1jaGFuZ2UtZGV0ZWN0aW9uXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXQtZGF0YWdyaWQtZGF0ZXBpY2tlcicsXG4gIHByb3ZpZGVyczogW1xuICAgIERBVEFHUklEX0NPTU1PTl9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9FRElUX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ0lmPVwiKF9lZGl0LmFjdGl2ZSQgfCBhc3luYykgPT09IHRydWUgJiYgIV9mb3JtQ29udHJvbC5kaXNhYmxlZDsgZWxzZSBkZWZhdWx0VGVtcGxhdGVcIlxuICAgID5cbiAgICAgIDxmb3JtXG4gICAgICAgIG5vdmFsaWRhdGVcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJfZm9ybUNvbnRyb2wuZm9ybUNvbnRyb2xHcm91cFwiXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJfZGF0ZUNoYW5nZShtYXREYXRlcGlja2VyLnZhbHVlKTsgX2Zvcm1Db250cm9sLmVycm9ycyAmJiB0b29sdGlwLnNob3coKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICAgICAgICAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxuICAgICAgICAgIFttYXRUb29sdGlwXT1cIl9mb3JtQ29udHJvbC5lcnJvcnM/LnZhbGlkYXRpb25NZXNzYWdlXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cIidhYm92ZSdcIlxuICAgICAgICAgIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiIV9mb3JtQ29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cIjBcIlxuICAgICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cIjBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgY2RrRm9jdXNJbnB1dFxuICAgICAgICAgICAgI2lucHV0XG4gICAgICAgICAgICAjbWF0RGF0ZXBpY2tlcj1cIm1hdERhdGVwaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiX3N0b3JhZ2UucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJfZm9ybUNvbnRyb2wuZm9ybUNvbnRyb2xOYW1lXCJcbiAgICAgICAgICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgICAgICAgICAoZGF0ZUNoYW5nZSk9XCJfZGF0ZUNoYW5nZShtYXREYXRlcGlja2VyLnZhbHVlKTsgcGlja2VyLmNsb3NlKClcIlxuICAgICAgICAgICAgW3R5cGVdPVwiX2NvbW1vbi50eXBlXCJcbiAgICAgICAgICAgIFthdXRvY29tcGxldGVdPVwiX2NvbW1vbi5hdXRvY29tcGxldGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIl9mb3JtQ29udHJvbC5lcnJvcnNcIj48L21hdC1lcnJvcj5cbiAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIFt0aXRsZV09XCJfZGF0ZVJlbmRlclwiXG4gICAgICAgIGNsYXNzPVwiY2RrLWRlZmF1bHQtZmllbGRcIlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgZGlzYWJsZWQ6IF9mb3JtQ29udHJvbC5kaXNhYmxlZCxcbiAgICAgICAgICAnbWF0LXJlZC01MDAgbWF0LWVycm9yJzogX2Zvcm1Db250cm9sLmVycm9yc1xuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4+e3sgX2RhdGVSZW5kZXIgfHwgX3N0b3JhZ2UucGxhY2Vob2xkZXIgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWREYXRlcGlja2VyQ29tcG9uZW50PEl0ZW0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0ZUFkYXB0ZXI6IENka0RhdGFncmlkRGF0ZUFkYXB0ZXIsXG4gICAgQEluamVjdChEQVRBR1JJRF9DT01NT05fVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21tb246IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRURJVF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2VkaXQ6IENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2Zvcm1Db250cm9sOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIEBJbmplY3QoREFUQUdSSURfU1RPUkFHRV9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3N0b3JhZ2U6IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxJdGVtPixcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWRhdGVwaWNrZXInKSBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlIHwgc3RyaW5nPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Rpc3BsYXlEYXRlSW5wdXQgPSB0aGlzLl9kYXRlQWRhcHRlci5tYXREYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGVJbnB1dDtcblxuICAvKiogQGludGVybmFsICovXG4gIF9mb3JtYXREYXRlSW5wdXQgPSB0aGlzLl9kYXRlQWRhcHRlci5tYXRGb3JtYXREYXRlSW5wdXQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXQgX2NvbnRyb2xWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybUNvbnRyb2w/LnZhbHVlO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXQgX2RhdGVSZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyLmZvcm1hdCh0aGlzLl9jb250cm9sVmFsdWUsIHRoaXMuX2Rpc3BsYXlEYXRlSW5wdXQpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZGF0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgTW9tZW50IHwgc3RyaW5nIHwgdW5rbm93bikge1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWRhcHRlci5mb3JtYXQodmFsdWUsIHRoaXMuX2Zvcm1hdERhdGVJbnB1dCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9kYXRlQ2hhbmdlKHZhbHVlOiB1bmtub3duKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLl9zdG9yYWdlLnNldFZhbHVlKHRoaXMuX2RhdGVWYWx1ZSh2YWx1ZSkpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHZhbHVlIGFzIERhdGUgfCBzdHJpbmcpO1xuICB9XG59XG4iXX0=