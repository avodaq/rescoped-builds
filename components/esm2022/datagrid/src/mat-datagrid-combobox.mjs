// MDC
import { MatAutocompleteModule, } from '@angular/material/autocomplete';
import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Inject, Input, Output, ViewEncapsulation, } from '@angular/core';
import { DATAGRID_EDIT_PROVIDER, DATAGRID_EDIT_TOKEN } from './cdk-datagrid-edit.factory';
import { DATAGRID_FORM_CONTROL_PROVIDER, DATAGRID_FORM_CONTROL_TOKEN, } from './cdk-datagrid-form-control.factory';
import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { merge, of, Subject } from 'rxjs';
import { debounceTime, mergeMap, startWith } from 'rxjs/operators';
import { DATAGRID_COMMON_PROVIDER, DATAGRID_COMMON_TOKEN } from './cdk-datagrid-common.factory';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { DATAGRID_STORAGE_PROVIDER, DATAGRID_STORAGE_TOKEN } from './cdk-datagrid-storage.factory';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkDatagridFocusComboboxDirective } from './mat-datagrid-focus.directives';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
import * as i9 from "./cdk-datagrid-common.directive";
import * as i10 from "./cdk-datagrid-edit.directive";
import * as i11 from "./cdk-datagrid-form-control.directive";
import * as i12 from "./cdk-datagrid-storage.directive";
// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
export class MatDatagridComboboxComponent {
    constructor(_common, _edit, _formControl, _storage) {
        this._common = _common;
        this._edit = _edit;
        this._formControl = _formControl;
        this._storage = _storage;
        this.hostClass = true;
        // @Input() options!: Options[];
        this.selectionChange = new EventEmitter();
        this.selectionAdded = new EventEmitter();
        this.selectionAdd = false;
        this.selectionAddIcon = 'add';
        this.selectionAddIconColor = 'primary';
        /** @internal */
        this._search$ = new Subject();
        /** @internal */
        this._addedOption$ = new Subject();
        /** @internal */
        this._filteredOptions$ = this._search$.pipe(startWith(''), debounceTime(300), mergeMap(search => merge(of(this._filterOptions(search)), this._addedOption$)));
    }
    get autocomplete() {
        return this._common.autocomplete;
    }
    /** @internal */
    _selectionChange(change) {
        this._selectChange = change.option.value;
        this._storage.setValue(this._selectChange);
        this.selectionChange.emit(change);
    }
    /** @internal */
    _addSelection(value) {
        if (!value)
            return;
        this._addedOption$.next([{ [this._storage.key]: value }]);
        this.selectionAdded.emit(value);
    }
    /** @internal */
    _displayForAutoCompleteOption(option) {
        return option?.[this._storage.renderKey];
    }
    /** @internal */
    get _renderForDefaultView() {
        const value = this._formControl?.value?.[this._storage.renderKey];
        return value ? value : this._formControl?.value || '';
    }
    /** @internal */
    _filterOptions(search) {
        return (this.options?.filter(option => option[this._storage.renderKey]
            .toLowerCase()
            .includes(search.toLowerCase())) || []);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridComboboxComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.7", type: MatDatagridComboboxComponent, isStandalone: true, selector: "mat-datagrid-combobox", inputs: { options: "options", selectionAdd: "selectionAdd", selectionAddIcon: "selectionAddIcon", selectionAddIconColor: "selectionAddIconColor", autocomplete: "autocomplete" }, outputs: { selectionChange: "selectionChange", selectionAdded: "selectionAdded" }, host: { properties: { "class.mat-datagrid-combobox": "this.hostClass" } }, providers: [
            DATAGRID_COMMON_PROVIDER,
            DATAGRID_EDIT_PROVIDER,
            DATAGRID_FORM_CONTROL_PROVIDER,
            DATAGRID_STORAGE_PROVIDER,
        ], ngImport: i0, template: `
    @if ((_edit.active$ | async) === true && !_formControl.disabled) {
      <form
        novalidate
        [formGroup]="_formControl.formControlGroup"
        (keydown.enter)="$event.preventDefault()"
        (ngSubmit)="_addSelection(input.value)"
      >
        <mat-form-field
          [appearance]="'outline'"
          #tooltip="matTooltip"
          [matTooltip]="_formControl.errors?.validationMessage"
          [matTooltipPosition]="'above'"
          [matTooltipDisabled]="!_formControl.errors"
          [matTooltipShowDelay]="0"
          [matTooltipHideDelay]="0"
        >
          <input
            matInput
            cdkFocusCombobox
            #input
            [placeholder]="_storage.placeholder"
            (keyup)="_search$.next(input.value)"
            [formControlName]="_formControl.formControlName"
            [title]="_renderForDefaultView"
            [matAutocomplete]="auto"
            [autocomplete]="autocomplete"
            [type]="_common.type"
          />
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          @if (selectionAdd) {
            <button
              matSuffix
              mat-icon-button
              aria-label="add item button"
              class="add-item-icon"
              (click)="_addSelection(input.value.trim()); input.value = ''"
              [color]="selectionAddIconColor"
            >
              <mat-icon>{{ selectionAddIcon }}</mat-icon>
            </button>
          }

          <mat-autocomplete
            #auto="matAutocomplete"
            [panelWidth]="'auto'"
            [displayWith]="_displayForAutoCompleteOption.bind(this)"
            (optionSelected)="
              _selectionChange($event); input.blur(); _formControl.errors && tooltip.show()
            "
          >
            @for (option of _filteredOptions$ | async; track option) {
              <mat-option [value]="option">
                <div>{{ option[this._storage.renderKey] }}</div>
              </mat-option>
            }
          </mat-autocomplete>
        </mat-form-field>
      </form>
    } @else {
      <div
        [title]="_renderForDefaultView"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _renderForDefaultView || _storage.placeholder }}</span>
      </div>
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i5.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i5.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: CdkDatagridFocusComboboxDirective, selector: "input[matAutocomplete][cdkFocusCombobox]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridComboboxComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-combobox',
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
        (keydown.enter)="$event.preventDefault()"
        (ngSubmit)="_addSelection(input.value)"
      >
        <mat-form-field
          [appearance]="'outline'"
          #tooltip="matTooltip"
          [matTooltip]="_formControl.errors?.validationMessage"
          [matTooltipPosition]="'above'"
          [matTooltipDisabled]="!_formControl.errors"
          [matTooltipShowDelay]="0"
          [matTooltipHideDelay]="0"
        >
          <input
            matInput
            cdkFocusCombobox
            #input
            [placeholder]="_storage.placeholder"
            (keyup)="_search$.next(input.value)"
            [formControlName]="_formControl.formControlName"
            [title]="_renderForDefaultView"
            [matAutocomplete]="auto"
            [autocomplete]="autocomplete"
            [type]="_common.type"
          />
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          @if (selectionAdd) {
            <button
              matSuffix
              mat-icon-button
              aria-label="add item button"
              class="add-item-icon"
              (click)="_addSelection(input.value.trim()); input.value = ''"
              [color]="selectionAddIconColor"
            >
              <mat-icon>{{ selectionAddIcon }}</mat-icon>
            </button>
          }

          <mat-autocomplete
            #auto="matAutocomplete"
            [panelWidth]="'auto'"
            [displayWith]="_displayForAutoCompleteOption.bind(this)"
            (optionSelected)="
              _selectionChange($event); input.blur(); _formControl.errors && tooltip.show()
            "
          >
            @for (option of _filteredOptions$ | async; track option) {
              <mat-option [value]="option">
                <div>{{ option[this._storage.renderKey] }}</div>
              </mat-option>
            }
          </mat-autocomplete>
        </mat-form-field>
      </form>
    } @else {
      <div
        [title]="_renderForDefaultView"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _renderForDefaultView || _storage.placeholder }}</span>
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
                        MatAutocompleteModule,
                        CdkDatagridFocusComboboxDirective,
                        MatButtonModule,
                        MatIconModule,
                        MatOptionModule,
                        NgClass,
                        AsyncPipe,
                    ],
                }]
        }], ctorParameters: () => [{ type: i9.CdkDatagridCommonDirective, decorators: [{
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
                }] }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-combobox']
            }], options: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], selectionAdded: [{
                type: Output
            }], selectionAdd: [{
                type: Input
            }], selectionAddIcon: [{
                type: Input
            }], selectionAddIconColor: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbWJvYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29tYm9ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFFTCxxQkFBcUIsR0FDdEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWdCLGVBQWUs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LEVBQUU7d0JBQ1Qsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIseUJBQXlCO3FCQUMxQjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5RVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGlDQUFpQzt3QkFDakMsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsT0FBTzt3QkFDUCxTQUFTO3FCQUNWO2lCQUNGOzswQkFHSSxNQUFNOzJCQUFDLHFCQUFxQjs7MEJBRTVCLE1BQU07MkJBQUMsbUJBQW1COzswQkFFMUIsTUFBTTsyQkFBQywyQkFBMkI7OzBCQUVsQyxNQUFNOzJCQUFDLHNCQUFzQjt5Q0FJWSxTQUFTO3NCQUFwRCxXQUFXO3VCQUFDLDZCQUE2QjtnQkFFakMsT0FBTztzQkFBZixLQUFLO2dCQUdJLGVBQWU7c0JBQXhCLE1BQU07Z0JBQ0csY0FBYztzQkFBdkIsTUFBTTtnQkFFRSxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBZU8sWUFBWTtzQkFBeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1EQ1xuaW1wb3J0IHtcbiAgTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCxcbiAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuXG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERBVEFHUklEX0VESVRfUFJPVklERVIsIERBVEFHUklEX0VESVRfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmZhY3RvcnknO1xuaW1wb3J0IHtcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4sXG59IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtZXJnZU1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLCBEQVRBR1JJRF9DT01NT05fVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUiwgREFUQUdSSURfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUsIE1hdE9wdGlvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9jdXNDb21ib2JveERpcmVjdGl2ZSB9IGZyb20gJy4vbWF0LWRhdGFncmlkLWZvY3VzLmRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdDbGFzcywgQXN5bmNQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWNvbWJvYm94JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0VESVRfUFJPVklERVIsXG4gICAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICAgIERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICgoX2VkaXQuYWN0aXZlJCB8IGFzeW5jKSA9PT0gdHJ1ZSAmJiAhX2Zvcm1Db250cm9sLmRpc2FibGVkKSB7XG4gICAgICA8Zm9ybVxuICAgICAgICBub3ZhbGlkYXRlXG4gICAgICAgIFtmb3JtR3JvdXBdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sR3JvdXBcIlxuICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJfYWRkU2VsZWN0aW9uKGlucHV0LnZhbHVlKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgIFthcHBlYXJhbmNlXT1cIidvdXRsaW5lJ1wiXG4gICAgICAgICAgI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcF09XCJfZm9ybUNvbnRyb2wuZXJyb3JzPy52YWxpZGF0aW9uTWVzc2FnZVwiXG4gICAgICAgICAgW21hdFRvb2x0aXBQb3NpdGlvbl09XCInYWJvdmUnXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cIiFfZm9ybUNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFNob3dEZWxheV09XCIwXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcEhpZGVEZWxheV09XCIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgIGNka0ZvY3VzQ29tYm9ib3hcbiAgICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIl9zdG9yYWdlLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIChrZXl1cCk9XCJfc2VhcmNoJC5uZXh0KGlucHV0LnZhbHVlKVwiXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbE5hbWVcIlxuICAgICAgICAgICAgW3RpdGxlXT1cIl9yZW5kZXJGb3JEZWZhdWx0Vmlld1wiXG4gICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgICAgICAgICAgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgW3R5cGVdPVwiX2NvbW1vbi50eXBlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIEBpZiAoX2Zvcm1Db250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgPG1hdC1lcnJvcj48L21hdC1lcnJvcj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGlmIChzZWxlY3Rpb25BZGQpIHtcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbWF0U3VmZml4XG4gICAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWRkIGl0ZW0gYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJhZGQtaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIl9hZGRTZWxlY3Rpb24oaW5wdXQudmFsdWUudHJpbSgpKTsgaW5wdXQudmFsdWUgPSAnJ1wiXG4gICAgICAgICAgICAgIFtjb2xvcl09XCJzZWxlY3Rpb25BZGRJY29uQ29sb3JcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWF0LWljb24+e3sgc2VsZWN0aW9uQWRkSWNvbiB9fTwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8bWF0LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgW3BhbmVsV2lkdGhdPVwiJ2F1dG8nXCJcbiAgICAgICAgICAgIFtkaXNwbGF5V2l0aF09XCJfZGlzcGxheUZvckF1dG9Db21wbGV0ZU9wdGlvbi5iaW5kKHRoaXMpXCJcbiAgICAgICAgICAgIChvcHRpb25TZWxlY3RlZCk9XCJcbiAgICAgICAgICAgICAgX3NlbGVjdGlvbkNoYW5nZSgkZXZlbnQpOyBpbnB1dC5ibHVyKCk7IF9mb3JtQ29udHJvbC5lcnJvcnMgJiYgdG9vbHRpcC5zaG93KClcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQGZvciAob3B0aW9uIG9mIF9maWx0ZXJlZE9wdGlvbnMkIHwgYXN5bmM7IHRyYWNrIG9wdGlvbikge1xuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdj57eyBvcHRpb25bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXldIH19PC9kaXY+XG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8L2Zvcm0+XG4gICAgfSBAZWxzZSB7XG4gICAgICA8ZGl2XG4gICAgICAgIFt0aXRsZV09XCJfcmVuZGVyRm9yRGVmYXVsdFZpZXdcIlxuICAgICAgICBjbGFzcz1cImNkay1kZWZhdWx0LWZpZWxkXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgIGRpc2FibGVkOiBfZm9ybUNvbnRyb2wuZGlzYWJsZWQsXG4gICAgICAgICAgJ21hdC1yZWQtNTAwIG1hdC1lcnJvcic6IF9mb3JtQ29udHJvbC5lcnJvcnNcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuPnt7IF9yZW5kZXJGb3JEZWZhdWx0VmlldyB8fCBfc3RvcmFnZS5wbGFjZWhvbGRlciB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBDZGtEYXRhZ3JpZEZvY3VzQ29tYm9ib3hEaXJlY3RpdmUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgIE5nQ2xhc3MsXG4gICAgQXN5bmNQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRhZ3JpZENvbWJvYm94Q29tcG9uZW50PEl0ZW0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQVRBR1JJRF9DT01NT05fVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21tb246IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRURJVF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2VkaXQ6IENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2Zvcm1Db250cm9sOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIEBJbmplY3QoREFUQUdSSURfU1RPUkFHRV9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3N0b3JhZ2U6IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxJdGVtPixcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWNvbWJvYm94JykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBASW5wdXQoKSBvcHRpb25zITogSXRlbVtdO1xuICAvLyBASW5wdXQoKSBvcHRpb25zITogT3B0aW9uc1tdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25BZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGlvbkFkZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3Rpb25BZGRJY29uID0gJ2FkZCc7XG4gIEBJbnB1dCgpIHNlbGVjdGlvbkFkZEljb25Db2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NlYXJjaCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkZWRPcHRpb24kID0gbmV3IFN1YmplY3Q8SXRlbVtdPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2ZpbHRlcmVkT3B0aW9ucyQgPSB0aGlzLl9zZWFyY2gkLnBpcGUoXG4gICAgc3RhcnRXaXRoKCcnKSxcbiAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICBtZXJnZU1hcChzZWFyY2ggPT4gbWVyZ2Uob2YodGhpcy5fZmlsdGVyT3B0aW9ucyhzZWFyY2gpKSwgdGhpcy5fYWRkZWRPcHRpb24kKSksXG4gICk7XG5cbiAgQElucHV0KCkgZ2V0IGF1dG9jb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbW9uLmF1dG9jb21wbGV0ZSBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NlbGVjdENoYW5nZSE6IEl0ZW07XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VsZWN0aW9uQ2hhbmdlKGNoYW5nZTogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCkge1xuICAgIHRoaXMuX3NlbGVjdENoYW5nZSA9IGNoYW5nZS5vcHRpb24udmFsdWUgYXMgSXRlbTtcblxuICAgIHRoaXMuX3N0b3JhZ2Uuc2V0VmFsdWUodGhpcy5fc2VsZWN0Q2hhbmdlKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGNoYW5nZSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRTZWxlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgIHRoaXMuX2FkZGVkT3B0aW9uJC5uZXh0KFt7IFt0aGlzLl9zdG9yYWdlLmtleV06IHZhbHVlIH1dIGFzIHVua25vd24gYXMgSXRlbVtdKTtcbiAgICB0aGlzLnNlbGVjdGlvbkFkZGVkLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZGlzcGxheUZvckF1dG9Db21wbGV0ZU9wdGlvbihvcHRpb246IEl0ZW0pIHtcbiAgICByZXR1cm4gb3B0aW9uPy5bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXldIGFzIHVua25vd24gYXMgc3RyaW5nO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXQgX3JlbmRlckZvckRlZmF1bHRWaWV3KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZm9ybUNvbnRyb2w/LnZhbHVlPy5bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXldO1xuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogdGhpcy5fZm9ybUNvbnRyb2w/LnZhbHVlIHx8ICcnO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZmlsdGVyT3B0aW9ucyhzZWFyY2g6IHN0cmluZykge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm9wdGlvbnM/LmZpbHRlcihvcHRpb24gPT5cbiAgICAgICAgKG9wdGlvblt0aGlzLl9zdG9yYWdlLnJlbmRlcktleV0gYXMgdW5rbm93biBhcyBzdHJpbmcpXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgKSB8fCBbXVxuICAgICk7XG4gIH1cbn1cbiJdfQ==