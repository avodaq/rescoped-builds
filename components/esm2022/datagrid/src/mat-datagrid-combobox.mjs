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
import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
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
class MatDatagridComboboxComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridComboboxComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridComboboxComponent, isStandalone: true, selector: "mat-datagrid-combobox", inputs: { options: "options", selectionAdd: "selectionAdd", selectionAddIcon: "selectionAddIcon", selectionAddIconColor: "selectionAddIconColor", autocomplete: "autocomplete" }, outputs: { selectionChange: "selectionChange", selectionAdded: "selectionAdded" }, host: { properties: { "class.mat-datagrid-combobox": "this.hostClass" } }, providers: [
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
          <mat-error *ngIf="_formControl.errors"></mat-error>
          <button
            matSuffix
            mat-icon-button
            aria-label="add item button"
            class="add-item-icon"
            *ngIf="selectionAdd"
            (click)="_addSelection(input.value.trim()); input.value = ''"
            [color]="selectionAddIconColor"
          >
            <mat-icon>{{ selectionAddIcon }}</mat-icon>
          </button>

          <mat-autocomplete
            #auto="matAutocomplete"
            [panelWidth]="'auto'"
            [displayWith]="_displayForAutoCompleteOption.bind(this)"
            (optionSelected)="
              _selectionChange($event); input.blur(); _formControl.errors && tooltip.show()
            "
          >
            <mat-option *ngFor="let option of _filteredOptions$ | async" [value]="option">
              <div>{{ option[this._storage.renderKey] }}</div>
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>
      </form>
    </ng-container>
    <ng-template #defaultTemplate>
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
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i5.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i5.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: CdkDatagridFocusComboboxDirective, selector: "input[matAutocomplete][cdkFocusCombobox]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { MatDatagridComboboxComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridComboboxComponent, decorators: [{
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
    <ng-container
      *ngIf="(_edit.active$ | async) === true && !_formControl.disabled; else defaultTemplate"
    >
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
          <mat-error *ngIf="_formControl.errors"></mat-error>
          <button
            matSuffix
            mat-icon-button
            aria-label="add item button"
            class="add-item-icon"
            *ngIf="selectionAdd"
            (click)="_addSelection(input.value.trim()); input.value = ''"
            [color]="selectionAddIconColor"
          >
            <mat-icon>{{ selectionAddIcon }}</mat-icon>
          </button>

          <mat-autocomplete
            #auto="matAutocomplete"
            [panelWidth]="'auto'"
            [displayWith]="_displayForAutoCompleteOption.bind(this)"
            (optionSelected)="
              _selectionChange($event); input.blur(); _formControl.errors && tooltip.show()
            "
          >
            <mat-option *ngFor="let option of _filteredOptions$ | async" [value]="option">
              <div>{{ option[this._storage.renderKey] }}</div>
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>
      </form>
    </ng-container>
    <ng-template #defaultTemplate>
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
                        MatAutocompleteModule,
                        CdkDatagridFocusComboboxDirective,
                        MatButtonModule,
                        MatIconModule,
                        NgFor,
                        MatOptionModule,
                        NgClass,
                        AsyncPipe,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i9.CdkDatagridCommonDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbWJvYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29tYm9ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFFTCxxQkFBcUIsR0FDdEIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQWdCLGVBQWUs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QkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFNBQVMsRUFBRTt3QkFDVCx3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsOEJBQThCO3dCQUM5Qix5QkFBeUI7cUJBQzFCO29CQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1RVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLElBQUk7d0JBQ0osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsaUNBQWlDO3dCQUNqQyxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsS0FBSzt3QkFDTCxlQUFlO3dCQUNmLE9BQU87d0JBQ1AsU0FBUztxQkFDVjtpQkFDRjs7MEJBR0ksTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBRTFCLE1BQU07MkJBQUMsMkJBQTJCOzswQkFFbEMsTUFBTTsyQkFBQyxzQkFBc0I7NENBSVksU0FBUztzQkFBcEQsV0FBVzt1QkFBQyw2QkFBNkI7Z0JBRWpDLE9BQU87c0JBQWYsS0FBSztnQkFHSSxlQUFlO3NCQUF4QixNQUFNO2dCQUNHLGNBQWM7c0JBQXZCLE1BQU07Z0JBRUUsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQWVPLFlBQVk7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNRENcbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQsXG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9FRElUX1BST1ZJREVSLCBEQVRBR1JJRF9FRElUX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5mYWN0b3J5JztcbmltcG9ydCB7XG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBtZXJnZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERBVEFHUklEX0NPTU1PTl9QUk9WSURFUiwgREFUQUdSSURfQ09NTU9OX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsIERBVEFHUklEX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlLCBNYXRPcHRpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvY3VzQ29tYm9ib3hEaXJlY3RpdmUgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1mb2N1cy5kaXJlY3RpdmVzJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nSWYsIE5nRm9yLCBOZ0NsYXNzLCBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L3ByZWZlci1vbi1wdXNoLWNvbXBvbmVudC1jaGFuZ2UtZGV0ZWN0aW9uXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXQtZGF0YWdyaWQtY29tYm9ib3gnLFxuICBwcm92aWRlcnM6IFtcbiAgICBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsXG4gICAgREFUQUdSSURfRURJVF9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfUFJPVklERVIsXG4gICAgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUixcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyXG4gICAgICAqbmdJZj1cIihfZWRpdC5hY3RpdmUkIHwgYXN5bmMpID09PSB0cnVlICYmICFfZm9ybUNvbnRyb2wuZGlzYWJsZWQ7IGVsc2UgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICA+XG4gICAgICA8Zm9ybVxuICAgICAgICBub3ZhbGlkYXRlXG4gICAgICAgIFtmb3JtR3JvdXBdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sR3JvdXBcIlxuICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJfYWRkU2VsZWN0aW9uKGlucHV0LnZhbHVlKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgIFthcHBlYXJhbmNlXT1cIidvdXRsaW5lJ1wiXG4gICAgICAgICAgI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcF09XCJfZm9ybUNvbnRyb2wuZXJyb3JzPy52YWxpZGF0aW9uTWVzc2FnZVwiXG4gICAgICAgICAgW21hdFRvb2x0aXBQb3NpdGlvbl09XCInYWJvdmUnXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cIiFfZm9ybUNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFNob3dEZWxheV09XCIwXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcEhpZGVEZWxheV09XCIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgIGNka0ZvY3VzQ29tYm9ib3hcbiAgICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIl9zdG9yYWdlLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIChrZXl1cCk9XCJfc2VhcmNoJC5uZXh0KGlucHV0LnZhbHVlKVwiXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbE5hbWVcIlxuICAgICAgICAgICAgW3RpdGxlXT1cIl9yZW5kZXJGb3JEZWZhdWx0Vmlld1wiXG4gICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgICAgICAgICAgW2F1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgW3R5cGVdPVwiX2NvbW1vbi50eXBlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJfZm9ybUNvbnRyb2wuZXJyb3JzXCI+PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbWF0U3VmZml4XG4gICAgICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhZGQgaXRlbSBidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJhZGQtaXRlbS1pY29uXCJcbiAgICAgICAgICAgICpuZ0lmPVwic2VsZWN0aW9uQWRkXCJcbiAgICAgICAgICAgIChjbGljayk9XCJfYWRkU2VsZWN0aW9uKGlucHV0LnZhbHVlLnRyaW0oKSk7IGlucHV0LnZhbHVlID0gJydcIlxuICAgICAgICAgICAgW2NvbG9yXT1cInNlbGVjdGlvbkFkZEljb25Db2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1hdC1pY29uPnt7IHNlbGVjdGlvbkFkZEljb24gfX08L21hdC1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPG1hdC1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIFtwYW5lbFdpZHRoXT1cIidhdXRvJ1wiXG4gICAgICAgICAgICBbZGlzcGxheVdpdGhdPVwiX2Rpc3BsYXlGb3JBdXRvQ29tcGxldGVPcHRpb24uYmluZCh0aGlzKVwiXG4gICAgICAgICAgICAob3B0aW9uU2VsZWN0ZWQpPVwiXG4gICAgICAgICAgICAgIF9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KTsgaW5wdXQuYmx1cigpOyBfZm9ybUNvbnRyb2wuZXJyb3JzICYmIHRvb2x0aXAuc2hvdygpXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX2ZpbHRlcmVkT3B0aW9ucyQgfCBhc3luY1wiIFt2YWx1ZV09XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgPGRpdj57eyBvcHRpb25bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXldIH19PC9kaXY+XG4gICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgPC9tYXQtYXV0b2NvbXBsZXRlPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPC9mb3JtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlPlxuICAgICAgPGRpdlxuICAgICAgICBbdGl0bGVdPVwiX3JlbmRlckZvckRlZmF1bHRWaWV3XCJcbiAgICAgICAgY2xhc3M9XCJjZGstZGVmYXVsdC1maWVsZFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICBkaXNhYmxlZDogX2Zvcm1Db250cm9sLmRpc2FibGVkLFxuICAgICAgICAgICdtYXQtcmVkLTUwMCBtYXQtZXJyb3InOiBfZm9ybUNvbnRyb2wuZXJyb3JzXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8c3Bhbj57eyBfcmVuZGVyRm9yRGVmYXVsdFZpZXcgfHwgX3N0b3JhZ2UucGxhY2Vob2xkZXIgfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgQ2RrRGF0YWdyaWRGb2N1c0NvbWJvYm94RGlyZWN0aXZlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE5nRm9yLFxuICAgIE1hdE9wdGlvbk1vZHVsZSxcbiAgICBOZ0NsYXNzLFxuICAgIEFzeW5jUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWRDb21ib2JveENvbXBvbmVudDxJdGVtLCBPcHRpb25zPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfQ09NTU9OX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfY29tbW9uOiBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0VESVRfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9lZGl0OiBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9mb3JtQ29udHJvbDogQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPixcbiAgICBASW5qZWN0KERBVEFHUklEX1NUT1JBR0VfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9zdG9yYWdlOiBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8SXRlbT4sXG4gICkge31cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1jb21ib2JveCcpIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgQElucHV0KCkgb3B0aW9ucyE6IEl0ZW1bXTtcbiAgLy8gQElucHV0KCkgb3B0aW9ucyE6IE9wdGlvbnNbXTtcblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0aW9uQWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBASW5wdXQoKSBzZWxlY3Rpb25BZGQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0aW9uQWRkSWNvbiA9ICdhZGQnO1xuICBASW5wdXQoKSBzZWxlY3Rpb25BZGRJY29uQ29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICAvKiogQGludGVybmFsICovXG4gIF9zZWFyY2gkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZGVkT3B0aW9uJCA9IG5ldyBTdWJqZWN0PEl0ZW1bXT4oKTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9maWx0ZXJlZE9wdGlvbnMkID0gdGhpcy5fc2VhcmNoJC5waXBlKFxuICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgbWVyZ2VNYXAoc2VhcmNoID0+IG1lcmdlKG9mKHRoaXMuX2ZpbHRlck9wdGlvbnMoc2VhcmNoKSksIHRoaXMuX2FkZGVkT3B0aW9uJCkpLFxuICApO1xuXG4gIEBJbnB1dCgpIGdldCBhdXRvY29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbW1vbi5hdXRvY29tcGxldGUgYXMgdW5rbm93biBhcyBzdHJpbmc7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zZWxlY3RDaGFuZ2UhOiBJdGVtO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NlbGVjdGlvbkNoYW5nZShjaGFuZ2U6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpIHtcbiAgICB0aGlzLl9zZWxlY3RDaGFuZ2UgPSBjaGFuZ2Uub3B0aW9uLnZhbHVlIGFzIEl0ZW07XG5cbiAgICB0aGlzLl9zdG9yYWdlLnNldFZhbHVlKHRoaXMuX3NlbGVjdENoYW5nZSk7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChjaGFuZ2UpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkU2VsZWN0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICB0aGlzLl9hZGRlZE9wdGlvbiQubmV4dChbeyBbdGhpcy5fc3RvcmFnZS5rZXldOiB2YWx1ZSB9XSBhcyB1bmtub3duIGFzIEl0ZW1bXSk7XG4gICAgdGhpcy5zZWxlY3Rpb25BZGRlZC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Rpc3BsYXlGb3JBdXRvQ29tcGxldGVPcHRpb24ob3B0aW9uOiBJdGVtKSB7XG4gICAgcmV0dXJuIG9wdGlvbj8uW3RoaXMuX3N0b3JhZ2UucmVuZGVyS2V5XSBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZ2V0IF9yZW5kZXJGb3JEZWZhdWx0VmlldygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2Zvcm1Db250cm9sPy52YWx1ZT8uW3RoaXMuX3N0b3JhZ2UucmVuZGVyS2V5XTtcbiAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IHRoaXMuX2Zvcm1Db250cm9sPy52YWx1ZSB8fCAnJztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2ZpbHRlck9wdGlvbnMoc2VhcmNoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5vcHRpb25zPy5maWx0ZXIob3B0aW9uID0+XG4gICAgICAgIChvcHRpb25bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXldIGFzIHVua25vd24gYXMgc3RyaW5nKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICkgfHwgW11cbiAgICApO1xuICB9XG59XG4iXX0=