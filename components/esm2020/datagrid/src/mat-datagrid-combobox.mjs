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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/autocomplete";
import * as i7 from "@angular/material/tooltip";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "./mat-datagrid-focus.directives";
import * as i11 from "./cdk-datagrid-common.directive";
import * as i12 from "./cdk-datagrid-edit.directive";
import * as i13 from "./cdk-datagrid-form-control.directive";
import * as i14 from "./cdk-datagrid-storage.directive";
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
}
MatDatagridComboboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridComboboxComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component });
MatDatagridComboboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.1", type: MatDatagridComboboxComponent, selector: "mat-datagrid-combobox", inputs: { options: "options", selectionAdd: "selectionAdd", selectionAddIcon: "selectionAddIcon", selectionAddIconColor: "selectionAddIconColor", autocomplete: "autocomplete" }, outputs: { selectionChange: "selectionChange", selectionAdded: "selectionAdded" }, host: { properties: { "class.mat-datagrid-combobox": "this.hostClass" } }, providers: [
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i6.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: i7.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: i8.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i10.CdkDatagridFocusComboboxDirective, selector: "input[matAutocomplete][cdkFocusCombobox]" }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridComboboxComponent, decorators: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i11.CdkDatagridCommonDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_COMMON_TOKEN]
                }] }, { type: i12.CdkDatagridEditDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_EDIT_TOKEN]
                }] }, { type: i13.CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i14.CdkDatagridStorageDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbWJvYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29tYm9ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QiwyQkFBMkIsR0FDNUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHL0UscUZBQXFGO0FBcUZyRixNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLFlBRWtCLE9BQW1DLEVBRW5DLEtB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QUVyQixtQkFBbUIsYUFFbkIsMkJBQTJCLGFBRTNCLHNCQUFzQjs2R0FSckIsNEJBQTRCLGdZQWpGNUI7UUFDVCx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5Qix5QkFBeUI7S0FDMUIsMEJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUVUOzJGQUlVLDRCQUE0QjtrQkFwRnhDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxTQUFTLEVBQUU7d0JBQ1Qsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIseUJBQXlCO3FCQUMxQjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUVUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQUdJLE1BQU07MkJBQUMscUJBQXFCOzswQkFFNUIsTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUUxQixNQUFNOzJCQUFDLDJCQUEyQjs7MEJBRWxDLE1BQU07MkJBQUMsc0JBQXNCOzRDQUlZLFNBQVM7c0JBQXBELFdBQVc7dUJBQUMsNkJBQTZCO2dCQUVqQyxPQUFPO3NCQUFmLEtBQUs7Z0JBR0ksZUFBZTtzQkFBeEIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUVFLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFlTyxZQUFZO3NCQUF4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTURDXG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcblxuaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9FRElUX1BST1ZJREVSLCBEQVRBR1JJRF9FRElUX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5mYWN0b3J5JztcbmltcG9ydCB7XG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBtZXJnZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERBVEFHUklEX0NPTU1PTl9QUk9WSURFUiwgREFUQUdSSURfQ09NTU9OX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsIERBVEFHUklEX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvcHJlZmVyLW9uLXB1c2gtY29tcG9uZW50LWNoYW5nZS1kZXRlY3Rpb25cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hdC1kYXRhZ3JpZC1jb21ib2JveCcsXG4gIHByb3ZpZGVyczogW1xuICAgIERBVEFHUklEX0NPTU1PTl9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9FRElUX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ0lmPVwiKF9lZGl0LmFjdGl2ZSQgfCBhc3luYykgPT09IHRydWUgJiYgIV9mb3JtQ29udHJvbC5kaXNhYmxlZDsgZWxzZSBkZWZhdWx0VGVtcGxhdGVcIlxuICAgID5cbiAgICAgIDxmb3JtXG4gICAgICAgIG5vdmFsaWRhdGVcbiAgICAgICAgW2Zvcm1Hcm91cF09XCJfZm9ybUNvbnRyb2wuZm9ybUNvbnRyb2xHcm91cFwiXG4gICAgICAgIChrZXlkb3duLmVudGVyKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcbiAgICAgICAgKG5nU3VibWl0KT1cIl9hZGRTZWxlY3Rpb24oaW5wdXQudmFsdWUpXCJcbiAgICAgID5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICAgICAgW2FwcGVhcmFuY2VdPVwiJ291dGxpbmUnXCJcbiAgICAgICAgICAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxuICAgICAgICAgIFttYXRUb29sdGlwXT1cIl9mb3JtQ29udHJvbC5lcnJvcnM/LnZhbGlkYXRpb25NZXNzYWdlXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cIidhYm92ZSdcIlxuICAgICAgICAgIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiIV9mb3JtQ29udHJvbC5lcnJvcnNcIlxuICAgICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cIjBcIlxuICAgICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cIjBcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgY2RrRm9jdXNDb21ib2JveFxuICAgICAgICAgICAgI2lucHV0XG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiX3N0b3JhZ2UucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgKGtleXVwKT1cIl9zZWFyY2gkLm5leHQoaW5wdXQudmFsdWUpXCJcbiAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sTmFtZVwiXG4gICAgICAgICAgICBbdGl0bGVdPVwiX3JlbmRlckZvckRlZmF1bHRWaWV3XCJcbiAgICAgICAgICAgIFttYXRBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICBbdHlwZV09XCJfY29tbW9uLnR5cGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIl9mb3JtQ29udHJvbC5lcnJvcnNcIj48L21hdC1lcnJvcj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBtYXRTdWZmaXhcbiAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFkZCBpdGVtIGJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cImFkZC1pdGVtLWljb25cIlxuICAgICAgICAgICAgKm5nSWY9XCJzZWxlY3Rpb25BZGRcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9hZGRTZWxlY3Rpb24oaW5wdXQudmFsdWUudHJpbSgpKTsgaW5wdXQudmFsdWUgPSAnJ1wiXG4gICAgICAgICAgICBbY29sb3JdPVwic2VsZWN0aW9uQWRkSWNvbkNvbG9yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bWF0LWljb24+e3sgc2VsZWN0aW9uQWRkSWNvbiB9fTwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8bWF0LWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgW3BhbmVsV2lkdGhdPVwiJ2F1dG8nXCJcbiAgICAgICAgICAgIFtkaXNwbGF5V2l0aF09XCJfZGlzcGxheUZvckF1dG9Db21wbGV0ZU9wdGlvbi5iaW5kKHRoaXMpXCJcbiAgICAgICAgICAgIChvcHRpb25TZWxlY3RlZCk9XCJcbiAgICAgICAgICAgICAgX3NlbGVjdGlvbkNoYW5nZSgkZXZlbnQpOyBpbnB1dC5ibHVyKCk7IF9mb3JtQ29udHJvbC5lcnJvcnMgJiYgdG9vbHRpcC5zaG93KClcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfZmlsdGVyZWRPcHRpb25zJCB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2Pnt7IG9wdGlvblt0aGlzLl9zdG9yYWdlLnJlbmRlcktleV0gfX08L2Rpdj5cbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIFt0aXRsZV09XCJfcmVuZGVyRm9yRGVmYXVsdFZpZXdcIlxuICAgICAgICBjbGFzcz1cImNkay1kZWZhdWx0LWZpZWxkXCJcbiAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgIGRpc2FibGVkOiBfZm9ybUNvbnRyb2wuZGlzYWJsZWQsXG4gICAgICAgICAgJ21hdC1yZWQtNTAwIG1hdC1lcnJvcic6IF9mb3JtQ29udHJvbC5lcnJvcnNcbiAgICAgICAgfVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuPnt7IF9yZW5kZXJGb3JEZWZhdWx0VmlldyB8fCBfc3RvcmFnZS5wbGFjZWhvbGRlciB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRhZ3JpZENvbWJvYm94Q29tcG9uZW50PEl0ZW0sIE9wdGlvbnM+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQVRBR1JJRF9DT01NT05fVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21tb246IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRURJVF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2VkaXQ6IENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2Zvcm1Db250cm9sOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIEBJbmplY3QoREFUQUdSSURfU1RPUkFHRV9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3N0b3JhZ2U6IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxJdGVtPixcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWNvbWJvYm94JykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBASW5wdXQoKSBvcHRpb25zITogSXRlbVtdO1xuICAvLyBASW5wdXQoKSBvcHRpb25zITogT3B0aW9uc1tdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25BZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBJbnB1dCgpIHNlbGVjdGlvbkFkZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3Rpb25BZGRJY29uID0gJ2FkZCc7XG4gIEBJbnB1dCgpIHNlbGVjdGlvbkFkZEljb25Db2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NlYXJjaCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkZWRPcHRpb24kID0gbmV3IFN1YmplY3Q8SXRlbVtdPigpO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2ZpbHRlcmVkT3B0aW9ucyQgPSB0aGlzLl9zZWFyY2gkLnBpcGUoXG4gICAgc3RhcnRXaXRoKCcnKSxcbiAgICBkZWJvdW5jZVRpbWUoMzAwKSxcbiAgICBtZXJnZU1hcChzZWFyY2ggPT4gbWVyZ2Uob2YodGhpcy5fZmlsdGVyT3B0aW9ucyhzZWFyY2gpKSwgdGhpcy5fYWRkZWRPcHRpb24kKSksXG4gICk7XG5cbiAgQElucHV0KCkgZ2V0IGF1dG9jb21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tbW9uLmF1dG9jb21wbGV0ZSBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NlbGVjdENoYW5nZSE6IEl0ZW07XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VsZWN0aW9uQ2hhbmdlKGNoYW5nZTogTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCkge1xuICAgIHRoaXMuX3NlbGVjdENoYW5nZSA9IGNoYW5nZS5vcHRpb24udmFsdWUgYXMgSXRlbTtcblxuICAgIHRoaXMuX3N0b3JhZ2Uuc2V0VmFsdWUodGhpcy5fc2VsZWN0Q2hhbmdlKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGNoYW5nZSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRTZWxlY3Rpb24odmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgIHRoaXMuX2FkZGVkT3B0aW9uJC5uZXh0KFt7IFt0aGlzLl9zdG9yYWdlLmtleV06IHZhbHVlIH1dIGFzIHVua25vd24gYXMgSXRlbVtdKTtcbiAgICB0aGlzLnNlbGVjdGlvbkFkZGVkLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZGlzcGxheUZvckF1dG9Db21wbGV0ZU9wdGlvbihvcHRpb246IEl0ZW0pIHtcbiAgICByZXR1cm4gb3B0aW9uPy5bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXldIGFzIHVua25vd24gYXMgc3RyaW5nO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBnZXQgX3JlbmRlckZvckRlZmF1bHRWaWV3KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZm9ybUNvbnRyb2w/LnZhbHVlPy5bdGhpcy5fc3RvcmFnZS5yZW5kZXJLZXldO1xuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogdGhpcy5fZm9ybUNvbnRyb2w/LnZhbHVlIHx8ICcnO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZmlsdGVyT3B0aW9ucyhzZWFyY2g6IHN0cmluZykge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm9wdGlvbnM/LmZpbHRlcihvcHRpb24gPT5cbiAgICAgICAgKG9wdGlvblt0aGlzLl9zdG9yYWdlLnJlbmRlcktleV0gYXMgdW5rbm93biBhcyBzdHJpbmcpXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpLFxuICAgICAgKSB8fCBbXVxuICAgICk7XG4gIH1cbn1cbiJdfQ==