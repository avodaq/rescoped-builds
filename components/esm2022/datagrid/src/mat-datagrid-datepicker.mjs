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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridDatepickerComponent, selector: "mat-datagrid-datepicker", outputs: { dateChange: "dateChange" }, host: { properties: { "class.mat-datagrid-datepicker": "this.hostClass" } }, providers: [
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i6.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i6.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i7.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i8.CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWRhdGVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvZGF0YWdyaWQvc3JjL21hdC1kYXRhZ3JpZC1kYXRlcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QiwyQkFBMkIsR0FDNUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFHckUscUZBQXFGO0FBQ3JGLE1BNkRhLDhCQUE4QjtJQUN6QyxZQUNtQixZQUFvQyxFQUVyQyxPQUFtQyxFQUVuQyxLQUErQixFQUUvQixZQUFtRCxFQUVuRCxRQUEyQztRQVIxQyxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFFckMsWUFBTyxHQUFQLE9BQU8sQ0FBNEI7UUFFbkMsVUFBSyxHQUFMLEtBQUssQ0FBMEI7UUFFL0IsaUJBQVksR0FBWixZQUFZLENBQXVDO1FBRW5ELGFBQVEsR0FBUixRQUFRLENBQW1DO1FBR2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVyRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFekQsZ0JBQWdCO1FBQ2hCLHNCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFdkUsZ0JBQWdCO1FBQ2hCLHFCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUM7SUFWckQsQ0FBQztJQVlKLGdCQUFnQjtJQUNoQixJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsVUFBVSxDQUFDLEtBQXVDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSTtZQUFFLE9BQU87UUFFM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQXNCLENBQUMsQ0FBQztJQUMvQyxDQUFDOzhHQTVDVSw4QkFBOEIsd0RBRy9CLHFCQUFxQixhQUVyQixtQkFBbUIsYUFFbkIsMkJBQTJCLGFBRTNCLHNCQUFzQjtrR0FUckIsOEJBQThCLHNLQTFEOUI7WUFDVCx3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLDhCQUE4QjtZQUM5Qix5QkFBeUI7U0FDMUIsMEJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdEVDs7U0FJVSw4QkFBOEI7MkZBQTlCLDhCQUE4QjtrQkE3RDFDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxTQUFTLEVBQUU7d0JBQ1Qsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIseUJBQXlCO3FCQUMxQjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdEVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzswQkFJSSxNQUFNOzJCQUFDLHFCQUFxQjs7MEJBRTVCLE1BQU07MkJBQUMsbUJBQW1COzswQkFFMUIsTUFBTTsyQkFBQywyQkFBMkI7OzBCQUVsQyxNQUFNOzJCQUFDLHNCQUFzQjs0Q0FJYyxTQUFTO3NCQUF0RCxXQUFXO3VCQUFDLCtCQUErQjtnQkFFbEMsVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgREFUQUdSSURfRURJVF9QUk9WSURFUiwgREFUQUdSSURfRURJVF9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQuZmFjdG9yeSc7XG5pbXBvcnQge1xuICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfUFJPVklERVIsXG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTixcbn0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmZhY3RvcnknO1xuaW1wb3J0IHsgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLCBEQVRBR1JJRF9DT01NT05fVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSLCBEQVRBR1JJRF9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1kYXRlLmFkYXB0ZXInO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50L21vbWVudCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvcHJlZmVyLW9uLXB1c2gtY29tcG9uZW50LWNoYW5nZS1kZXRlY3Rpb25cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hdC1kYXRhZ3JpZC1kYXRlcGlja2VyJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0VESVRfUFJPVklERVIsXG4gICAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICAgIERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lclxuICAgICAgKm5nSWY9XCIoX2VkaXQuYWN0aXZlJCB8IGFzeW5jKSA9PT0gdHJ1ZSAmJiAhX2Zvcm1Db250cm9sLmRpc2FibGVkOyBlbHNlIGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgPlxuICAgICAgPGZvcm1cbiAgICAgICAgbm92YWxpZGF0ZVxuICAgICAgICBbZm9ybUdyb3VwXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbEdyb3VwXCJcbiAgICAgICAgKG5nU3VibWl0KT1cIl9kYXRlQ2hhbmdlKG1hdERhdGVwaWNrZXIudmFsdWUpOyBfZm9ybUNvbnRyb2wuZXJyb3JzICYmIHRvb2x0aXAuc2hvdygpXCJcbiAgICAgID5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIlxuICAgICAgICAgICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiX2Zvcm1Db250cm9sLmVycm9ycz8udmFsaWRhdGlvbk1lc3NhZ2VcIlxuICAgICAgICAgIFttYXRUb29sdGlwUG9zaXRpb25dPVwiJ2Fib3ZlJ1wiXG4gICAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCIhX2Zvcm1Db250cm9sLmVycm9yc1wiXG4gICAgICAgICAgW21hdFRvb2x0aXBTaG93RGVsYXldPVwiMFwiXG4gICAgICAgICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwiMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICBjZGtGb2N1c0lucHV0XG4gICAgICAgICAgICAjaW5wdXRcbiAgICAgICAgICAgICNtYXREYXRlcGlja2VyPVwibWF0RGF0ZXBpY2tlcklucHV0XCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJfc3RvcmFnZS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbE5hbWVcIlxuICAgICAgICAgICAgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcbiAgICAgICAgICAgIChkYXRlQ2hhbmdlKT1cIl9kYXRlQ2hhbmdlKG1hdERhdGVwaWNrZXIudmFsdWUpOyBwaWNrZXIuY2xvc2UoKVwiXG4gICAgICAgICAgICBbdHlwZV09XCJfY29tbW9uLnR5cGVcIlxuICAgICAgICAgICAgW2F1dG9jb21wbGV0ZV09XCJfY29tbW9uLmF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiX2Zvcm1Db250cm9sLmVycm9yc1wiPjwvbWF0LWVycm9yPlxuICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgW3RpdGxlXT1cIl9kYXRlUmVuZGVyXCJcbiAgICAgICAgY2xhc3M9XCJjZGstZGVmYXVsdC1maWVsZFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICBkaXNhYmxlZDogX2Zvcm1Db250cm9sLmRpc2FibGVkLFxuICAgICAgICAgICdtYXQtcmVkLTUwMCBtYXQtZXJyb3InOiBfZm9ybUNvbnRyb2wuZXJyb3JzXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8c3Bhbj57eyBfZGF0ZVJlbmRlciB8fCBfc3RvcmFnZS5wbGFjZWhvbGRlciB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRhZ3JpZERhdGVwaWNrZXJDb21wb25lbnQ8SXRlbT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRlQWRhcHRlcjogQ2RrRGF0YWdyaWREYXRlQWRhcHRlcixcbiAgICBASW5qZWN0KERBVEFHUklEX0NPTU1PTl9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2NvbW1vbjogQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9FRElUX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZWRpdDogQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZm9ybUNvbnRyb2w6IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4sXG4gICAgQEluamVjdChEQVRBR1JJRF9TVE9SQUdFX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfc3RvcmFnZTogQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlPEl0ZW0+LFxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtZGF0ZXBpY2tlcicpIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGUgfCBzdHJpbmc+KCk7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZGlzcGxheURhdGVJbnB1dCA9IHRoaXMuX2RhdGVBZGFwdGVyLm1hdERhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUlucHV0O1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Zvcm1hdERhdGVJbnB1dCA9IHRoaXMuX2RhdGVBZGFwdGVyLm1hdEZvcm1hdERhdGVJbnB1dDtcblxuICAvKiogQGludGVybmFsICovXG4gIGdldCBfY29udHJvbFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb3JtQ29udHJvbD8udmFsdWU7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGdldCBfZGF0ZVJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFkYXB0ZXIuZm9ybWF0KHRoaXMuX2NvbnRyb2xWYWx1ZSwgdGhpcy5fZGlzcGxheURhdGVJbnB1dCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9kYXRlVmFsdWUodmFsdWU6IERhdGUgfCBNb21lbnQgfCBzdHJpbmcgfCB1bmtub3duKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVBZGFwdGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5fZm9ybWF0RGF0ZUlucHV0KTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2RhdGVDaGFuZ2UodmFsdWU6IHVua25vd24pIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuX3N0b3JhZ2Uuc2V0VmFsdWUodGhpcy5fZGF0ZVZhbHVlKHZhbHVlKSk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodmFsdWUgYXMgRGF0ZSB8IHN0cmluZyk7XG4gIH1cbn1cbiJdfQ==