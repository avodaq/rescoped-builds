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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridComboboxComponent, selector: "mat-datagrid-combobox", inputs: { options: "options", selectionAdd: "selectionAdd", selectionAddIcon: "selectionAddIcon", selectionAddIconColor: "selectionAddIconColor", autocomplete: "autocomplete" }, outputs: { selectionChange: "selectionChange", selectionAdded: "selectionAdded" }, host: { properties: { "class.mat-datagrid-combobox": "this.hostClass" } }, providers: [
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i6.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: i7.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: i8.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i10.CdkDatagridFocusComboboxDirective, selector: "input[matAutocomplete][cdkFocusCombobox]" }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWNvbWJvYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtY29tYm9ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QiwyQkFBMkIsR0FDNUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHL0UscUZBQXFGO0FBQ3JGLE1Bb0ZhLDRCQUE0QjtJQUN2QyxZQUVrQixPQUFtQyxFQUVuQyxLQUErQixF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QkFBbUIsYUFFbkIsMkJBQTJCLGFBRTNCLHNCQUFzQjtrR0FSckIsNEJBQTRCLGdZQWpGNUI7WUFDVCx3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLDhCQUE4QjtZQUM5Qix5QkFBeUI7U0FDMUIsMEJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUVUOztTQUlVLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQXBGeEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFNBQVMsRUFBRTt3QkFDVCx3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsOEJBQThCO3dCQUM5Qix5QkFBeUI7cUJBQzFCO29CQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1RVQ7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBR0ksTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBRTFCLE1BQU07MkJBQUMsMkJBQTJCOzswQkFFbEMsTUFBTTsyQkFBQyxzQkFBc0I7NENBSVksU0FBUztzQkFBcEQsV0FBVzt1QkFBQyw2QkFBNkI7Z0JBRWpDLE9BQU87c0JBQWYsS0FBSztnQkFHSSxlQUFlO3NCQUF4QixNQUFNO2dCQUNHLGNBQWM7c0JBQXZCLE1BQU07Z0JBRUUsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQWVPLFlBQVk7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNRENcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuXG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERBVEFHUklEX0VESVRfUFJPVklERVIsIERBVEFHUklEX0VESVRfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmZhY3RvcnknO1xuaW1wb3J0IHtcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4sXG59IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtZXJnZU1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLCBEQVRBR1JJRF9DT01NT05fVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUiwgREFUQUdSSURfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWNvbWJvYm94JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0VESVRfUFJPVklERVIsXG4gICAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICAgIERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lclxuICAgICAgKm5nSWY9XCIoX2VkaXQuYWN0aXZlJCB8IGFzeW5jKSA9PT0gdHJ1ZSAmJiAhX2Zvcm1Db250cm9sLmRpc2FibGVkOyBlbHNlIGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgPlxuICAgICAgPGZvcm1cbiAgICAgICAgbm92YWxpZGF0ZVxuICAgICAgICBbZm9ybUdyb3VwXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbEdyb3VwXCJcbiAgICAgICAgKGtleWRvd24uZW50ZXIpPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuICAgICAgICAobmdTdWJtaXQpPVwiX2FkZFNlbGVjdGlvbihpbnB1dC52YWx1ZSlcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICBbYXBwZWFyYW5jZV09XCInb3V0bGluZSdcIlxuICAgICAgICAgICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiX2Zvcm1Db250cm9sLmVycm9ycz8udmFsaWRhdGlvbk1lc3NhZ2VcIlxuICAgICAgICAgIFttYXRUb29sdGlwUG9zaXRpb25dPVwiJ2Fib3ZlJ1wiXG4gICAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCIhX2Zvcm1Db250cm9sLmVycm9yc1wiXG4gICAgICAgICAgW21hdFRvb2x0aXBTaG93RGVsYXldPVwiMFwiXG4gICAgICAgICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwiMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICBjZGtGb2N1c0NvbWJvYm94XG4gICAgICAgICAgICAjaW5wdXRcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJfc3RvcmFnZS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAoa2V5dXApPVwiX3NlYXJjaCQubmV4dChpbnB1dC52YWx1ZSlcIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJfZm9ybUNvbnRyb2wuZm9ybUNvbnRyb2xOYW1lXCJcbiAgICAgICAgICAgIFt0aXRsZV09XCJfcmVuZGVyRm9yRGVmYXVsdFZpZXdcIlxuICAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgICAgICAgIFthdXRvY29tcGxldGVdPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIFt0eXBlXT1cIl9jb21tb24udHlwZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiX2Zvcm1Db250cm9sLmVycm9yc1wiPjwvbWF0LWVycm9yPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdFN1ZmZpeFxuICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWRkIGl0ZW0gYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYWRkLWl0ZW0taWNvblwiXG4gICAgICAgICAgICAqbmdJZj1cInNlbGVjdGlvbkFkZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiX2FkZFNlbGVjdGlvbihpbnB1dC52YWx1ZS50cmltKCkpOyBpbnB1dC52YWx1ZSA9ICcnXCJcbiAgICAgICAgICAgIFtjb2xvcl09XCJzZWxlY3Rpb25BZGRJY29uQ29sb3JcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtaWNvbj57eyBzZWxlY3Rpb25BZGRJY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxtYXQtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICBbcGFuZWxXaWR0aF09XCInYXV0bydcIlxuICAgICAgICAgICAgW2Rpc3BsYXlXaXRoXT1cIl9kaXNwbGF5Rm9yQXV0b0NvbXBsZXRlT3B0aW9uLmJpbmQodGhpcylcIlxuICAgICAgICAgICAgKG9wdGlvblNlbGVjdGVkKT1cIlxuICAgICAgICAgICAgICBfc2VsZWN0aW9uQ2hhbmdlKCRldmVudCk7IGlucHV0LmJsdXIoKTsgX2Zvcm1Db250cm9sLmVycm9ycyAmJiB0b29sdGlwLnNob3coKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9maWx0ZXJlZE9wdGlvbnMkIHwgYXN5bmNcIiBbdmFsdWVdPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXY+e3sgb3B0aW9uW3RoaXMuX3N0b3JhZ2UucmVuZGVyS2V5XSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgIDxkaXZcbiAgICAgICAgW3RpdGxlXT1cIl9yZW5kZXJGb3JEZWZhdWx0Vmlld1wiXG4gICAgICAgIGNsYXNzPVwiY2RrLWRlZmF1bHQtZmllbGRcIlxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgZGlzYWJsZWQ6IF9mb3JtQ29udHJvbC5kaXNhYmxlZCxcbiAgICAgICAgICAnbWF0LXJlZC01MDAgbWF0LWVycm9yJzogX2Zvcm1Db250cm9sLmVycm9yc1xuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4+e3sgX3JlbmRlckZvckRlZmF1bHRWaWV3IHx8IF9zdG9yYWdlLnBsYWNlaG9sZGVyIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkQ29tYm9ib3hDb21wb25lbnQ8SXRlbSwgT3B0aW9ucz4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBVEFHUklEX0NPTU1PTl9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2NvbW1vbjogQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9FRElUX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZWRpdDogQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZm9ybUNvbnRyb2w6IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4sXG4gICAgQEluamVjdChEQVRBR1JJRF9TVE9SQUdFX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfc3RvcmFnZTogQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlPEl0ZW0+LFxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtY29tYm9ib3gnKSBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnMhOiBJdGVtW107XG4gIC8vIEBJbnB1dCgpIG9wdGlvbnMhOiBPcHRpb25zW107XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkFkZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQElucHV0KCkgc2VsZWN0aW9uQWRkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdGlvbkFkZEljb24gPSAnYWRkJztcbiAgQElucHV0KCkgc2VsZWN0aW9uQWRkSWNvbkNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VhcmNoJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9hZGRlZE9wdGlvbiQgPSBuZXcgU3ViamVjdDxJdGVtW10+KCk7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZmlsdGVyZWRPcHRpb25zJCA9IHRoaXMuX3NlYXJjaCQucGlwZShcbiAgICBzdGFydFdpdGgoJycpLFxuICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgIG1lcmdlTWFwKHNlYXJjaCA9PiBtZXJnZShvZih0aGlzLl9maWx0ZXJPcHRpb25zKHNlYXJjaCkpLCB0aGlzLl9hZGRlZE9wdGlvbiQpKSxcbiAgKTtcblxuICBASW5wdXQoKSBnZXQgYXV0b2NvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21tb24uYXV0b2NvbXBsZXRlIGFzIHVua25vd24gYXMgc3RyaW5nO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfc2VsZWN0Q2hhbmdlITogSXRlbTtcblxuICAvKiogQGludGVybmFsICovXG4gIF9zZWxlY3Rpb25DaGFuZ2UoY2hhbmdlOiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KSB7XG4gICAgdGhpcy5fc2VsZWN0Q2hhbmdlID0gY2hhbmdlLm9wdGlvbi52YWx1ZSBhcyBJdGVtO1xuXG4gICAgdGhpcy5fc3RvcmFnZS5zZXRWYWx1ZSh0aGlzLl9zZWxlY3RDaGFuZ2UpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoY2hhbmdlKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZFNlbGVjdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fYWRkZWRPcHRpb24kLm5leHQoW3sgW3RoaXMuX3N0b3JhZ2Uua2V5XTogdmFsdWUgfV0gYXMgdW5rbm93biBhcyBJdGVtW10pO1xuICAgIHRoaXMuc2VsZWN0aW9uQWRkZWQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9kaXNwbGF5Rm9yQXV0b0NvbXBsZXRlT3B0aW9uKG9wdGlvbjogSXRlbSkge1xuICAgIHJldHVybiBvcHRpb24/Llt0aGlzLl9zdG9yYWdlLnJlbmRlcktleV0gYXMgdW5rbm93biBhcyBzdHJpbmc7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIGdldCBfcmVuZGVyRm9yRGVmYXVsdFZpZXcoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9mb3JtQ29udHJvbD8udmFsdWU/Llt0aGlzLl9zdG9yYWdlLnJlbmRlcktleV07XG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgOiB0aGlzLl9mb3JtQ29udHJvbD8udmFsdWUgfHwgJyc7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9maWx0ZXJPcHRpb25zKHNlYXJjaDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMub3B0aW9ucz8uZmlsdGVyKG9wdGlvbiA9PlxuICAgICAgICAob3B0aW9uW3RoaXMuX3N0b3JhZ2UucmVuZGVyS2V5XSBhcyB1bmtub3duIGFzIHN0cmluZylcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSksXG4gICAgICApIHx8IFtdXG4gICAgKTtcbiAgfVxufVxuIl19