import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { DATAGRID_COMMON_PROVIDER, DATAGRID_COMMON_TOKEN } from './cdk-datagrid-common.factory';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { DATAGRID_EDIT_PROVIDER, DATAGRID_EDIT_TOKEN } from './cdk-datagrid-edit.factory';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Inject, InjectionToken, Injector, Output, ViewEncapsulation, } from '@angular/core';
import { DATAGRID_FORM_CONTROL_PROVIDER, DATAGRID_FORM_CONTROL_TOKEN, } from './cdk-datagrid-form-control.factory';
import { DATAGRID_STORAGE_PROVIDER, DATAGRID_STORAGE_TOKEN } from './cdk-datagrid-storage.factory';
import { ComponentPortal } from '@angular/cdk/portal';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-rule.manager";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/cdk/portal";
import * as i8 from "./mat-datagrid-focus.directives";
import * as i9 from "./cdk-datagrid-common.directive";
import * as i10 from "./cdk-datagrid-edit.directive";
import * as i11 from "./cdk-datagrid-form-control.directive";
import * as i12 from "./cdk-datagrid-storage.directive";
// @todo: move to separate file!
export const ACTION_DATA = new InjectionToken('ActionData');
// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
export class MatDatagridInputComponent {
    constructor(_common, _edit, _formControl, _storage, _cdr, _injector, _ruleManager) {
        this._common = _common;
        this._edit = _edit;
        this._formControl = _formControl;
        this._storage = _storage;
        this._cdr = _cdr;
        this._injector = _injector;
        this._ruleManager = _ruleManager;
        this.override = false;
        this.hostClass = true;
        this.inputChange = new EventEmitter();
    }
    // @todo: everything have to be moved to a directive
    // - have CdkDatagridActionDirective but works not well because have to trigger
    ngOnInit() {
        const { item, key } = this._storage;
        const actionType = getItemPayload(item).actionType;
        const action = this._ruleManager.getActionRule(item, key, actionType);
        const componentType = action?.componentType;
        const componentPosition = action?.componentPosition;
        if (action && typeof componentType === 'function') {
            const actionDataInjector = Injector.create({
                parent: this._injector,
                providers: [{ provide: ACTION_DATA, useValue: action.data || null }],
            });
            if (typeof componentPosition === 'string' && componentPosition === 'before') {
                this.beforeActionPortal = new ComponentPortal(componentType, null, actionDataInjector);
            }
            else if (typeof componentPosition === 'string' && componentPosition === 'after') {
                this.afterActionPortal = new ComponentPortal(componentType, null, actionDataInjector);
            }
            else {
                this.override = true;
                this.beforeActionPortal = new ComponentPortal(componentType, null, actionDataInjector);
            }
            this._cdr.markForCheck();
            this._cdr.detectChanges();
        }
    }
    /** @internal */
    _inputChange(value) {
        this._storage.setValue(value); // @todo: when input type is number then convert to number
        this.inputChange.emit(value);
    }
}
MatDatagridInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridInputComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: i1.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Component });
MatDatagridInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.1", type: MatDatagridInputComponent, selector: "mat-datagrid-input", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-input": "this.hostClass" } }, providers: [
        DATAGRID_COMMON_PROVIDER,
        DATAGRID_EDIT_PROVIDER,
        DATAGRID_FORM_CONTROL_PROVIDER,
        DATAGRID_STORAGE_PROVIDER,
    ], exportAs: ["matDatagridInput"], ngImport: i0, template: `
    <ng-template [cdkPortalOutlet]="beforeActionPortal"></ng-template>
    <ng-container *ngIf="!override">
      <ng-container
        *ngIf="(_edit.active$ | async) === true && !_formControl.disabled; else defaultTemplate"
      >
        <form
          novalidate
          [formGroup]="_formControl.formControlGroup"
          (ngSubmit)="_inputChange(input.value); _formControl.errors && tooltip.show()"
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
              [placeholder]="_storage.placeholder"
              [formControlName]="_formControl.formControlName"
              [type]="_common.type"
              [autocomplete]="_common.autocomplete"
            />
            <mat-error *ngIf="_formControl.errors"></mat-error>
          </mat-form-field>
        </form>
      </ng-container>
      <ng-template #defaultTemplate>
        <div
          [title]="_formControl.value"
          class="cdk-default-field"
          [ngClass]="{
            disabled: _formControl.disabled,
            'mat-red-500 mat-error': _formControl.errors
          }"
        >
          <span>{{ _formControl.value || _storage.placeholder }}</span>
        </div>
      </ng-template>
    </ng-container>
    <ng-template [cdkPortalOutlet]="afterActionPortal"></ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }, { kind: "directive", type: i8.CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: MatDatagridInputComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-input',
                    exportAs: 'matDatagridInput',
                    providers: [
                        DATAGRID_COMMON_PROVIDER,
                        DATAGRID_EDIT_PROVIDER,
                        DATAGRID_FORM_CONTROL_PROVIDER,
                        DATAGRID_STORAGE_PROVIDER,
                    ],
                    template: `
    <ng-template [cdkPortalOutlet]="beforeActionPortal"></ng-template>
    <ng-container *ngIf="!override">
      <ng-container
        *ngIf="(_edit.active$ | async) === true && !_formControl.disabled; else defaultTemplate"
      >
        <form
          novalidate
          [formGroup]="_formControl.formControlGroup"
          (ngSubmit)="_inputChange(input.value); _formControl.errors && tooltip.show()"
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
              [placeholder]="_storage.placeholder"
              [formControlName]="_formControl.formControlName"
              [type]="_common.type"
              [autocomplete]="_common.autocomplete"
            />
            <mat-error *ngIf="_formControl.errors"></mat-error>
          </mat-form-field>
        </form>
      </ng-container>
      <ng-template #defaultTemplate>
        <div
          [title]="_formControl.value"
          class="cdk-default-field"
          [ngClass]="{
            disabled: _formControl.disabled,
            'mat-red-500 mat-error': _formControl.errors
          }"
        >
          <span>{{ _formControl.value || _storage.placeholder }}</span>
        </div>
      </ng-template>
    </ng-container>
    <ng-template [cdkPortalOutlet]="afterActionPortal"></ng-template>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
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
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: i1.CdkDatagridRuleManager }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-input']
            }], inputChange: [{
                type: Output
            }] } });
export const MAT_FORMAT_INPUT = new InjectionToken('matInputFormats');
export const MAT_NUMBER_INPUT = new InjectionToken('matInputNumbers');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLGNBQWMsRUFDZCxRQUFRLEVBRVIsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRXRELGdDQUFnQztBQUNoQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdB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LDhCQUE4QjtRQUM5Qix5QkFBeUI7S0FDMUIsMERBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NUOzJGQUlVLHlCQUF5QjtrQkE3RHJDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUU7d0JBQ1Qsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIseUJBQXlCO3FCQUMxQjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQUdJLE1BQU07MkJBQUMscUJBQXFCOzswQkFFNUIsTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUUxQixNQUFNOzJCQUFDLDJCQUEyQjs7MEJBRWxDLE1BQU07MkJBQUMsc0JBQXNCO3dJQWNTLFNBQVM7c0JBQWpELFdBQVc7dUJBQUMsMEJBQTBCO2dCQUU3QixXQUFXO3NCQUFwQixNQUFNOztBQXdDVCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBdUIsaUJBQWlCLENBQUMsQ0FBQztBQUM1RixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBdUIsaUJBQWlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IERBVEFHUklEX0NPTU1PTl9QUk9WSURFUiwgREFUQUdSSURfQ09NTU9OX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IERBVEFHUklEX0VESVRfUFJPVklERVIsIERBVEFHUklEX0VESVRfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmZhY3RvcnknO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdG9yLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4sXG59IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5mYWN0b3J5JztcbmltcG9ydCB7IERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsIERBVEFHUklEX1NUT1JBR0VfVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0SXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5cbi8vIEB0b2RvOiBtb3ZlIHRvIHNlcGFyYXRlIGZpbGUhXG5leHBvcnQgY29uc3QgQUNUSU9OX0RBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48dW5rbm93bj4oJ0FjdGlvbkRhdGEnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWlucHV0JyxcbiAgZXhwb3J0QXM6ICdtYXREYXRhZ3JpZElucHV0JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0VESVRfUFJPVklERVIsXG4gICAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICAgIERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiYmVmb3JlQWN0aW9uUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW92ZXJyaWRlXCI+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiKF9lZGl0LmFjdGl2ZSQgfCBhc3luYykgPT09IHRydWUgJiYgIV9mb3JtQ29udHJvbC5kaXNhYmxlZDsgZWxzZSBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG5vdmFsaWRhdGVcbiAgICAgICAgICBbZm9ybUdyb3VwXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbEdyb3VwXCJcbiAgICAgICAgICAobmdTdWJtaXQpPVwiX2lucHV0Q2hhbmdlKGlucHV0LnZhbHVlKTsgX2Zvcm1Db250cm9sLmVycm9ycyAmJiB0b29sdGlwLnNob3coKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJfZm9ybUNvbnRyb2wuZXJyb3JzPy52YWxpZGF0aW9uTWVzc2FnZVwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cIidhYm92ZSdcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCIhX2Zvcm1Db250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcFNob3dEZWxheV09XCIwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cIjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICBjZGtGb2N1c0lucHV0XG4gICAgICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiX3N0b3JhZ2UucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbE5hbWVcIlxuICAgICAgICAgICAgICBbdHlwZV09XCJfY29tbW9uLnR5cGVcIlxuICAgICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cIl9jb21tb24uYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiX2Zvcm1Db250cm9sLmVycm9yc1wiPjwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbdGl0bGVdPVwiX2Zvcm1Db250cm9sLnZhbHVlXCJcbiAgICAgICAgICBjbGFzcz1cImNkay1kZWZhdWx0LWZpZWxkXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICBkaXNhYmxlZDogX2Zvcm1Db250cm9sLmRpc2FibGVkLFxuICAgICAgICAgICAgJ21hdC1yZWQtNTAwIG1hdC1lcnJvcic6IF9mb3JtQ29udHJvbC5lcnJvcnNcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPnt7IF9mb3JtQ29udHJvbC52YWx1ZSB8fCBfc3RvcmFnZS5wbGFjZWhvbGRlciB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cImFmdGVyQWN0aW9uUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGFncmlkSW5wdXRDb21wb25lbnQ8SXRlbT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBVEFHUklEX0NPTU1PTl9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2NvbW1vbjogQ2RrRGF0YWdyaWRDb21tb25EaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9FRElUX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZWRpdDogQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfZm9ybUNvbnRyb2w6IENka0RhdGFncmlkRm9ybUNvbnRyb2xEaXJlY3RpdmU8SXRlbT4sXG4gICAgQEluamVjdChEQVRBR1JJRF9TVE9SQUdFX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfc3RvcmFnZTogQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlPEl0ZW0+LFxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcnVsZU1hbmFnZXI6IENka0RhdGFncmlkUnVsZU1hbmFnZXI8SXRlbT4sXG4gICkge31cblxuICBpbmRleCE6IG51bWJlcjtcbiAgb3ZlcnJpZGUgPSBmYWxzZTtcbiAgYWZ0ZXJBY3Rpb25Qb3J0YWwhOiBQb3J0YWw8YW55PjtcbiAgYmVmb3JlQWN0aW9uUG9ydGFsITogUG9ydGFsPGFueT47XG4gIGNvbXBvbmVudFBvcnRhbCE6IENvbXBvbmVudFBvcnRhbDx1bmtub3duPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1kYXRhZ3JpZC1pbnB1dCcpIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLy8gQHRvZG86IGV2ZXJ5dGhpbmcgaGF2ZSB0byBiZSBtb3ZlZCB0byBhIGRpcmVjdGl2ZVxuICAvLyAtIGhhdmUgQ2RrRGF0YWdyaWRBY3Rpb25EaXJlY3RpdmUgYnV0IHdvcmtzIG5vdCB3ZWxsIGJlY2F1c2UgaGF2ZSB0byB0cmlnZ2VyXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgeyBpdGVtLCBrZXkgfSA9IHRoaXMuX3N0b3JhZ2U7XG4gICAgY29uc3QgYWN0aW9uVHlwZSA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pLmFjdGlvblR5cGU7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5fcnVsZU1hbmFnZXIuZ2V0QWN0aW9uUnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpO1xuXG4gICAgY29uc3QgY29tcG9uZW50VHlwZSA9IGFjdGlvbj8uY29tcG9uZW50VHlwZTtcbiAgICBjb25zdCBjb21wb25lbnRQb3NpdGlvbiA9IGFjdGlvbj8uY29tcG9uZW50UG9zaXRpb247XG5cbiAgICBpZiAoYWN0aW9uICYmIHR5cGVvZiBjb21wb25lbnRUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBhY3Rpb25EYXRhSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwYXJlbnQ6IHRoaXMuX2luamVjdG9yLFxuICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFDVElPTl9EQVRBLCB1c2VWYWx1ZTogYWN0aW9uLmRhdGEgfHwgbnVsbCB9XSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFBvc2l0aW9uID09PSAnc3RyaW5nJyAmJiBjb21wb25lbnRQb3NpdGlvbiA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgdGhpcy5iZWZvcmVBY3Rpb25Qb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudFR5cGUsIG51bGwsIGFjdGlvbkRhdGFJbmplY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb21wb25lbnRQb3NpdGlvbiA9PT0gJ3N0cmluZycgJiYgY29tcG9uZW50UG9zaXRpb24gPT09ICdhZnRlcicpIHtcbiAgICAgICAgdGhpcy5hZnRlckFjdGlvblBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50VHlwZSwgbnVsbCwgYWN0aW9uRGF0YUluamVjdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJlZm9yZUFjdGlvblBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50VHlwZSwgbnVsbCwgYWN0aW9uRGF0YUluamVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9pbnB1dENoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RvcmFnZS5zZXRWYWx1ZSh2YWx1ZSk7IC8vIEB0b2RvOiB3aGVuIGlucHV0IHR5cGUgaXMgbnVtYmVyIHRoZW4gY29udmVydCB0byBudW1iZXJcbiAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNQVRfRk9STUFUX0lOUFVUID0gbmV3IEluamVjdGlvblRva2VuPERhdGFncmlkSW5wdXRGb3JtYXRzPignbWF0SW5wdXRGb3JtYXRzJyk7XG5leHBvcnQgY29uc3QgTUFUX05VTUJFUl9JTlBVVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYXRhZ3JpZElucHV0Rm9ybWF0cz4oJ21hdElucHV0TnVtYmVycycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFncmlkSW5wdXRGb3JtYXRzVHlwZXMge1xuICBwYXJzZT86IFJlZ0V4cDtcbiAgZGlzcGxheT86IFJlZ0V4cDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0TnVtYmVyc1R5cGVzIHtcbiAgcm91bmQ/OiBudW1iZXIgfCAoKHZhbHVlOiBudW1iZXIpID0+IG51bWJlcik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWdyaWRJbnB1dEZvcm1hdHM8SXRlbSA9IHVua25vd24+IGV4dGVuZHMgRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcyB7XG4gIG92ZXJyaWRlcz86IHtcbiAgICBbaXRlbUtleSBpbiBrZXlvZiBJdGVtXT86IERhdGFncmlkSW5wdXRGb3JtYXRzVHlwZXM7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWdyaWRJbnB1dE51bWJlcnM8SXRlbSA9IHVua25vd24+IGV4dGVuZHMgRGF0YWdyaWRJbnB1dE51bWJlcnNUeXBlcyB7XG4gIG92ZXJyaWRlcz86IHtcbiAgICBbaXRlbUtleSBpbiBrZXlvZiBJdGVtXT86IERhdGFncmlkSW5wdXRGb3JtYXRzVHlwZXM7XG4gIH07XG59XG4iXX0=