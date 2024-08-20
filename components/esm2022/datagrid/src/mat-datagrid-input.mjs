import { CdkDatagridFormControlDirective } from './cdk-datagrid-form-control.directive';
import { CdkDatagridEditDirective } from './cdk-datagrid-edit.directive';
import { DATAGRID_COMMON_PROVIDER, DATAGRID_COMMON_TOKEN } from './cdk-datagrid-common.factory';
import { CdkDatagridCommonDirective } from './cdk-datagrid-common.directive';
import { DATAGRID_EDIT_PROVIDER, DATAGRID_EDIT_TOKEN } from './cdk-datagrid-edit.factory';
import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Inject, InjectionToken, Injector, Output, ViewEncapsulation, } from '@angular/core';
import { DATAGRID_FORM_CONTROL_PROVIDER, DATAGRID_FORM_CONTROL_TOKEN, } from './cdk-datagrid-form-control.factory';
import { DATAGRID_STORAGE_PROVIDER, DATAGRID_STORAGE_TOKEN } from './cdk-datagrid-storage.factory';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { getItemPayload } from './cdk-datagrid.utils';
import { CdkDatagridFocusInputDirective } from './mat-datagrid-focus.directives';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-rule.manager";
import * as i2 from "@angular/cdk/portal";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/input";
import * as i7 from "./cdk-datagrid-common.directive";
import * as i8 from "./cdk-datagrid-edit.directive";
import * as i9 from "./cdk-datagrid-form-control.directive";
import * as i10 from "./cdk-datagrid-storage.directive";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridInputComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: i1.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.7", type: MatDatagridInputComponent, isStandalone: true, selector: "mat-datagrid-input", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-input": "this.hostClass" } }, providers: [
            DATAGRID_COMMON_PROVIDER,
            DATAGRID_EDIT_PROVIDER,
            DATAGRID_FORM_CONTROL_PROVIDER,
            DATAGRID_STORAGE_PROVIDER,
        ], exportAs: ["matDatagridInput"], ngImport: i0, template: `
    <ng-template [cdkPortalOutlet]="beforeActionPortal"></ng-template>
    @if (!override) {
      @if ((_edit.active$ | async) === true && !_formControl.disabled) {
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
            @if (_formControl.errors) {
              <mat-error></mat-error>
            }
          </mat-form-field>
        </form>
      } @else {
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
      }
    }
    <ng-template [cdkPortalOutlet]="afterActionPortal"></ng-template>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i2.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridInputComponent, decorators: [{
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
    @if (!override) {
      @if ((_edit.active$ | async) === true && !_formControl.disabled) {
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
            @if (_formControl.errors) {
              <mat-error></mat-error>
            }
          </mat-form-field>
        </form>
      } @else {
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
      }
    }
    <ng-template [cdkPortalOutlet]="afterActionPortal"></ng-template>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [
                        PortalModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatTooltipModule,
                        MatInputModule,
                        CdkDatagridFocusInputDirective,
                        NgClass,
                        AsyncPipe,
                    ],
                }]
        }], ctorParameters: () => [{ type: i7.CdkDatagridCommonDirective, decorators: [{
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
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: i1.CdkDatagridRuleManager }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-input']
            }], inputChange: [{
                type: Output
            }] } });
export const MAT_FORMAT_INPUT = new InjectionToken('matInputFormats');
export const MAT_NUMBER_INPUT = new InjectionToken('matInputNumbers');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLGNBQWMsRUFDZCxRQUFRLEVBRVIsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQVUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFD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Q1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCw4QkFBOEI7d0JBQzlCLE9BQU87d0JBQ1AsU0FBUztxQkFDVjtpQkFDRjs7MEJBR0ksTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBRTFCLE1BQU07MkJBQUMsMkJBQTJCOzswQkFFbEMsTUFBTTsyQkFBQyxzQkFBc0I7cUlBY1MsU0FBUztzQkFBakQsV0FBVzt1QkFBQywwQkFBMEI7Z0JBRTdCLFdBQVc7c0JBQXBCLE1BQU07O0FBd0NULE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUF1QixpQkFBaUIsQ0FBQyxDQUFDO0FBQzVGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUF1QixpQkFBaUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0tY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRFZGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLCBEQVRBR1JJRF9DT01NT05fVE9LRU4gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1jb21tb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgREFUQUdSSURfRURJVF9QUk9WSURFUiwgREFUQUdSSURfRURJVF9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWVkaXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1zdG9yYWdlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0b3IsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEQVRBR1JJRF9GT1JNX0NPTlRST0xfUFJPVklERVIsXG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTixcbn0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmZhY3RvcnknO1xuaW1wb3J0IHsgREFUQUdSSURfU1RPUkFHRV9QUk9WSURFUiwgREFUQUdSSURfU1RPUkFHRV9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbCwgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtcnVsZS5tYW5hZ2VyJztcbmltcG9ydCB7IGdldEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb2N1c0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9tYXQtZGF0YWdyaWQtZm9jdXMuZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ0NsYXNzLCBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBAdG9kbzogbW92ZSB0byBzZXBhcmF0ZSBmaWxlIVxuZXhwb3J0IGNvbnN0IEFDVElPTl9EQVRBID0gbmV3IEluamVjdGlvblRva2VuPHVua25vd24+KCdBY3Rpb25EYXRhJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvcHJlZmVyLW9uLXB1c2gtY29tcG9uZW50LWNoYW5nZS1kZXRlY3Rpb25cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hdC1kYXRhZ3JpZC1pbnB1dCcsXG4gIGV4cG9ydEFzOiAnbWF0RGF0YWdyaWRJbnB1dCcsXG4gIHByb3ZpZGVyczogW1xuICAgIERBVEFHUklEX0NPTU1PTl9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9FRElUX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgICBEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cImJlZm9yZUFjdGlvblBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgQGlmICghb3ZlcnJpZGUpIHtcbiAgICAgIEBpZiAoKF9lZGl0LmFjdGl2ZSQgfCBhc3luYykgPT09IHRydWUgJiYgIV9mb3JtQ29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG5vdmFsaWRhdGVcbiAgICAgICAgICBbZm9ybUdyb3VwXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbEdyb3VwXCJcbiAgICAgICAgICAobmdTdWJtaXQpPVwiX2lucHV0Q2hhbmdlKGlucHV0LnZhbHVlKTsgX2Zvcm1Db250cm9sLmVycm9ycyAmJiB0b29sdGlwLnNob3coKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJfZm9ybUNvbnRyb2wuZXJyb3JzPy52YWxpZGF0aW9uTWVzc2FnZVwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cIidhYm92ZSdcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCIhX2Zvcm1Db250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcFNob3dEZWxheV09XCIwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cIjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICBjZGtGb2N1c0lucHV0XG4gICAgICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiX3N0b3JhZ2UucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbE5hbWVcIlxuICAgICAgICAgICAgICBbdHlwZV09XCJfY29tbW9uLnR5cGVcIlxuICAgICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cIl9jb21tb24uYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBAaWYgKF9mb3JtQ29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgPG1hdC1lcnJvcj48L21hdC1lcnJvcj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgPGRpdlxuICAgICAgICAgIFt0aXRsZV09XCJfZm9ybUNvbnRyb2wudmFsdWVcIlxuICAgICAgICAgIGNsYXNzPVwiY2RrLWRlZmF1bHQtZmllbGRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgIGRpc2FibGVkOiBfZm9ybUNvbnRyb2wuZGlzYWJsZWQsXG4gICAgICAgICAgICAnbWF0LXJlZC01MDAgbWF0LWVycm9yJzogX2Zvcm1Db250cm9sLmVycm9yc1xuICAgICAgICAgIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4+e3sgX2Zvcm1Db250cm9sLnZhbHVlIHx8IF9zdG9yYWdlLnBsYWNlaG9sZGVyIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICB9XG4gICAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiYWZ0ZXJBY3Rpb25Qb3J0YWxcIj48L25nLXRlbXBsYXRlPlxuICBgLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIFBvcnRhbE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIENka0RhdGFncmlkRm9jdXNJbnB1dERpcmVjdGl2ZSxcbiAgICBOZ0NsYXNzLFxuICAgIEFzeW5jUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWRJbnB1dENvbXBvbmVudDxJdGVtPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfQ09NTU9OX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfY29tbW9uOiBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0VESVRfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9lZGl0OiBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9mb3JtQ29udHJvbDogQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPixcbiAgICBASW5qZWN0KERBVEFHUklEX1NUT1JBR0VfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9zdG9yYWdlOiBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8SXRlbT4sXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgKSB7fVxuXG4gIGluZGV4ITogbnVtYmVyO1xuICBvdmVycmlkZSA9IGZhbHNlO1xuICBhZnRlckFjdGlvblBvcnRhbCE6IFBvcnRhbDxhbnk+O1xuICBiZWZvcmVBY3Rpb25Qb3J0YWwhOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsITogQ29tcG9uZW50UG9ydGFsPHVua25vd24+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWlucHV0JykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyBAdG9kbzogZXZlcnl0aGluZyBoYXZlIHRvIGJlIG1vdmVkIHRvIGEgZGlyZWN0aXZlXG4gIC8vIC0gaGF2ZSBDZGtEYXRhZ3JpZEFjdGlvbkRpcmVjdGl2ZSBidXQgd29ya3Mgbm90IHdlbGwgYmVjYXVzZSBoYXZlIHRvIHRyaWdnZXJcblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGtleSB9ID0gdGhpcy5fc3RvcmFnZTtcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gZ2V0SXRlbVBheWxvYWQoaXRlbSkuYWN0aW9uVHlwZTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9ydWxlTWFuYWdlci5nZXRBY3Rpb25SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gYWN0aW9uPy5jb21wb25lbnRUeXBlO1xuICAgIGNvbnN0IGNvbXBvbmVudFBvc2l0aW9uID0gYWN0aW9uPy5jb21wb25lbnRQb3NpdGlvbjtcblxuICAgIGlmIChhY3Rpb24gJiYgdHlwZW9mIGNvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFjdGlvbkRhdGFJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3IsXG4gICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQUNUSU9OX0RBVEEsIHVzZVZhbHVlOiBhY3Rpb24uZGF0YSB8fCBudWxsIH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50UG9zaXRpb24gPT09ICdzdHJpbmcnICYmIGNvbXBvbmVudFBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgICB0aGlzLmJlZm9yZUFjdGlvblBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50VHlwZSwgbnVsbCwgYWN0aW9uRGF0YUluamVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbXBvbmVudFBvc2l0aW9uID09PSAnc3RyaW5nJyAmJiBjb21wb25lbnRQb3NpdGlvbiA9PT0gJ2FmdGVyJykge1xuICAgICAgICB0aGlzLmFmdGVyQWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmVmb3JlQWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2lucHV0Q2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlLnNldFZhbHVlKHZhbHVlKTsgLy8gQHRvZG86IHdoZW4gaW5wdXQgdHlwZSBpcyBudW1iZXIgdGhlbiBjb252ZXJ0IHRvIG51bWJlclxuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1BVF9GT1JNQVRfSU5QVVQgPSBuZXcgSW5qZWN0aW9uVG9rZW48RGF0YWdyaWRJbnB1dEZvcm1hdHM+KCdtYXRJbnB1dEZvcm1hdHMnKTtcbmV4cG9ydCBjb25zdCBNQVRfTlVNQkVSX0lOUFVUID0gbmV3IEluamVjdGlvblRva2VuPERhdGFncmlkSW5wdXRGb3JtYXRzPignbWF0SW5wdXROdW1iZXJzJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcyB7XG4gIHBhcnNlPzogUmVnRXhwO1xuICBkaXNwbGF5PzogUmVnRXhwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFncmlkSW5wdXROdW1iZXJzVHlwZXMge1xuICByb3VuZD86IG51bWJlciB8ICgodmFsdWU6IG51bWJlcikgPT4gbnVtYmVyKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0Rm9ybWF0czxJdGVtID0gdW5rbm93bj4gZXh0ZW5kcyBEYXRhZ3JpZElucHV0Rm9ybWF0c1R5cGVzIHtcbiAgb3ZlcnJpZGVzPzoge1xuICAgIFtpdGVtS2V5IGluIGtleW9mIEl0ZW1dPzogRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0TnVtYmVyczxJdGVtID0gdW5rbm93bj4gZXh0ZW5kcyBEYXRhZ3JpZElucHV0TnVtYmVyc1R5cGVzIHtcbiAgb3ZlcnJpZGVzPzoge1xuICAgIFtpdGVtS2V5IGluIGtleW9mIEl0ZW1dPzogRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcztcbiAgfTtcbn1cbiJdfQ==