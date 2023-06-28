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
class MatDatagridInputComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridInputComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: i1.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridInputComponent, selector: "mat-datagrid-input", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-input": "this.hostClass" } }, providers: [
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }, { kind: "directive", type: i8.CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { MatDatagridInputComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: MatDatagridInputComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLGNBQWMsRUFDZCxRQUFRLEVBRVIsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRXRELGdDQUFnQztBQUNoQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdB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QjtZQUM5Qix5QkFBeUI7U0FDMUIsMERBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0NUOztTQUlVLHlCQUF5QjsyRkFBekIseUJBQXlCO2tCQTdEckMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRTt3QkFDVCx3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsOEJBQThCO3dCQUM5Qix5QkFBeUI7cUJBQzFCO29CQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQ1Q7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBR0ksTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBRTFCLE1BQU07MkJBQUMsMkJBQTJCOzswQkFFbEMsTUFBTTsyQkFBQyxzQkFBc0I7d0lBY1MsU0FBUztzQkFBakQsV0FBVzt1QkFBQywwQkFBMEI7Z0JBRTdCLFdBQVc7c0JBQXBCLE1BQU07O0FBd0NULE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUF1QixpQkFBaUIsQ0FBQyxDQUFDO0FBQzVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUF1QixpQkFBaUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLCBEQVRBR1JJRF9DT01NT05fVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgREFUQUdSSURfRURJVF9QUk9WSURFUiwgREFUQUdSSURfRURJVF9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0b3IsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfUFJPVklERVIsXG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTixcbn0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmZhY3RvcnknO1xuaW1wb3J0IHsgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUiwgREFUQUdSSURfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlcic7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcblxuLy8gQHRvZG86IG1vdmUgdG8gc2VwYXJhdGUgZmlsZSFcbmV4cG9ydCBjb25zdCBBQ1RJT05fREFUQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjx1bmtub3duPignQWN0aW9uRGF0YScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L3ByZWZlci1vbi1wdXNoLWNvbXBvbmVudC1jaGFuZ2UtZGV0ZWN0aW9uXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXQtZGF0YWdyaWQtaW5wdXQnLFxuICBleHBvcnRBczogJ21hdERhdGFncmlkSW5wdXQnLFxuICBwcm92aWRlcnM6IFtcbiAgICBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsXG4gICAgREFUQUdSSURfRURJVF9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfUFJPVklERVIsXG4gICAgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUixcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJiZWZvcmVBY3Rpb25Qb3J0YWxcIj48L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhb3ZlcnJpZGVcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCIoX2VkaXQuYWN0aXZlJCB8IGFzeW5jKSA9PT0gdHJ1ZSAmJiAhX2Zvcm1Db250cm9sLmRpc2FibGVkOyBlbHNlIGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICA+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgbm92YWxpZGF0ZVxuICAgICAgICAgIFtmb3JtR3JvdXBdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sR3JvdXBcIlxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJfaW5wdXRDaGFuZ2UoaW5wdXQudmFsdWUpOyBfZm9ybUNvbnRyb2wuZXJyb3JzICYmIHRvb2x0aXAuc2hvdygpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIlxuICAgICAgICAgICAgI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIl9mb3JtQ29udHJvbC5lcnJvcnM/LnZhbGlkYXRpb25NZXNzYWdlXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwUG9zaXRpb25dPVwiJ2Fib3ZlJ1wiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cIiFfZm9ybUNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cIjBcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwiMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgIGNka0ZvY3VzSW5wdXRcbiAgICAgICAgICAgICAgI2lucHV0XG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJfc3RvcmFnZS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sTmFtZVwiXG4gICAgICAgICAgICAgIFt0eXBlXT1cIl9jb21tb24udHlwZVwiXG4gICAgICAgICAgICAgIFthdXRvY29tcGxldGVdPVwiX2NvbW1vbi5hdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJfZm9ybUNvbnRyb2wuZXJyb3JzXCI+PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFt0aXRsZV09XCJfZm9ybUNvbnRyb2wudmFsdWVcIlxuICAgICAgICAgIGNsYXNzPVwiY2RrLWRlZmF1bHQtZmllbGRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgIGRpc2FibGVkOiBfZm9ybUNvbnRyb2wuZGlzYWJsZWQsXG4gICAgICAgICAgICAnbWF0LXJlZC01MDAgbWF0LWVycm9yJzogX2Zvcm1Db250cm9sLmVycm9yc1xuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+e3sgX2Zvcm1Db250cm9sLnZhbHVlIHx8IF9zdG9yYWdlLnBsYWNlaG9sZGVyIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiYWZ0ZXJBY3Rpb25Qb3J0YWxcIj48L25nLXRlbXBsYXRlPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWRJbnB1dENvbXBvbmVudDxJdGVtPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfQ09NTU9OX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfY29tbW9uOiBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0VESVRfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9lZGl0OiBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9mb3JtQ29udHJvbDogQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPixcbiAgICBASW5qZWN0KERBVEFHUklEX1NUT1JBR0VfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9zdG9yYWdlOiBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8SXRlbT4sXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgKSB7fVxuXG4gIGluZGV4ITogbnVtYmVyO1xuICBvdmVycmlkZSA9IGZhbHNlO1xuICBhZnRlckFjdGlvblBvcnRhbCE6IFBvcnRhbDxhbnk+O1xuICBiZWZvcmVBY3Rpb25Qb3J0YWwhOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsITogQ29tcG9uZW50UG9ydGFsPHVua25vd24+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWlucHV0JykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyBAdG9kbzogZXZlcnl0aGluZyBoYXZlIHRvIGJlIG1vdmVkIHRvIGEgZGlyZWN0aXZlXG4gIC8vIC0gaGF2ZSBDZGtEYXRhZ3JpZEFjdGlvbkRpcmVjdGl2ZSBidXQgd29ya3Mgbm90IHdlbGwgYmVjYXVzZSBoYXZlIHRvIHRyaWdnZXJcblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGtleSB9ID0gdGhpcy5fc3RvcmFnZTtcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gZ2V0SXRlbVBheWxvYWQoaXRlbSkuYWN0aW9uVHlwZTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9ydWxlTWFuYWdlci5nZXRBY3Rpb25SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gYWN0aW9uPy5jb21wb25lbnRUeXBlO1xuICAgIGNvbnN0IGNvbXBvbmVudFBvc2l0aW9uID0gYWN0aW9uPy5jb21wb25lbnRQb3NpdGlvbjtcblxuICAgIGlmIChhY3Rpb24gJiYgdHlwZW9mIGNvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFjdGlvbkRhdGFJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3IsXG4gICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQUNUSU9OX0RBVEEsIHVzZVZhbHVlOiBhY3Rpb24uZGF0YSB8fCBudWxsIH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50UG9zaXRpb24gPT09ICdzdHJpbmcnICYmIGNvbXBvbmVudFBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgICB0aGlzLmJlZm9yZUFjdGlvblBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50VHlwZSwgbnVsbCwgYWN0aW9uRGF0YUluamVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbXBvbmVudFBvc2l0aW9uID09PSAnc3RyaW5nJyAmJiBjb21wb25lbnRQb3NpdGlvbiA9PT0gJ2FmdGVyJykge1xuICAgICAgICB0aGlzLmFmdGVyQWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmVmb3JlQWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2lucHV0Q2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlLnNldFZhbHVlKHZhbHVlKTsgLy8gQHRvZG86IHdoZW4gaW5wdXQgdHlwZSBpcyBudW1iZXIgdGhlbiBjb252ZXJ0IHRvIG51bWJlclxuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1BVF9GT1JNQVRfSU5QVVQgPSBuZXcgSW5qZWN0aW9uVG9rZW48RGF0YWdyaWRJbnB1dEZvcm1hdHM+KCdtYXRJbnB1dEZvcm1hdHMnKTtcbmV4cG9ydCBjb25zdCBNQVRfTlVNQkVSX0lOUFVUID0gbmV3IEluamVjdGlvblRva2VuPERhdGFncmlkSW5wdXRGb3JtYXRzPignbWF0SW5wdXROdW1iZXJzJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcyB7XG4gIHBhcnNlPzogUmVnRXhwO1xuICBkaXNwbGF5PzogUmVnRXhwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFncmlkSW5wdXROdW1iZXJzVHlwZXMge1xuICByb3VuZD86IG51bWJlciB8ICgodmFsdWU6IG51bWJlcikgPT4gbnVtYmVyKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0Rm9ybWF0czxJdGVtID0gdW5rbm93bj4gZXh0ZW5kcyBEYXRhZ3JpZElucHV0Rm9ybWF0c1R5cGVzIHtcbiAgb3ZlcnJpZGVzPzoge1xuICAgIFtpdGVtS2V5IGluIGtleW9mIEl0ZW1dPzogRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0TnVtYmVyczxJdGVtID0gdW5rbm93bj4gZXh0ZW5kcyBEYXRhZ3JpZElucHV0TnVtYmVyc1R5cGVzIHtcbiAgb3ZlcnJpZGVzPzoge1xuICAgIFtpdGVtS2V5IGluIGtleW9mIEl0ZW1dPzogRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcztcbiAgfTtcbn1cbiJdfQ==