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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: MatDatagridInputComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: i1.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: MatDatagridInputComponent, isStandalone: true, selector: "mat-datagrid-input", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-input": "this.hostClass" } }, providers: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: MatDatagridInputComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLGNBQWMsRUFDZCxRQUFRLEVBRVIsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQVUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFD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QUNoQixjQUFjO3dCQUNkLDhCQUE4Qjt3QkFDOUIsT0FBTzt3QkFDUCxTQUFTO3FCQUNWO2lCQUNGOzswQkFHSSxNQUFNOzJCQUFDLHFCQUFxQjs7MEJBRTVCLE1BQU07MkJBQUMsbUJBQW1COzswQkFFMUIsTUFBTTsyQkFBQywyQkFBMkI7OzBCQUVsQyxNQUFNOzJCQUFDLHNCQUFzQjtxSUFjUyxTQUFTO3NCQUFqRCxXQUFXO3VCQUFDLDBCQUEwQjtnQkFFN0IsV0FBVztzQkFBcEIsTUFBTTs7QUF3Q1QsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQXVCLGlCQUFpQixDQUFDLENBQUM7QUFDNUYsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQXVCLGlCQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsIERBVEFHUklEX0NPTU1PTl9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9FRElUX1BST1ZJREVSLCBEQVRBR1JJRF9FRElUX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSLCBEQVRBR1JJRF9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0SXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvY3VzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1mb2N1cy5kaXJlY3RpdmVzJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nQ2xhc3MsIEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIEB0b2RvOiBtb3ZlIHRvIHNlcGFyYXRlIGZpbGUhXG5leHBvcnQgY29uc3QgQUNUSU9OX0RBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48dW5rbm93bj4oJ0FjdGlvbkRhdGEnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWlucHV0JyxcbiAgZXhwb3J0QXM6ICdtYXREYXRhZ3JpZElucHV0JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0VESVRfUFJPVklERVIsXG4gICAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICAgIERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiYmVmb3JlQWN0aW9uUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICBAaWYgKCFvdmVycmlkZSkge1xuICAgICAgQGlmICgoX2VkaXQuYWN0aXZlJCB8IGFzeW5jKSA9PT0gdHJ1ZSAmJiAhX2Zvcm1Db250cm9sLmRpc2FibGVkKSB7XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgbm92YWxpZGF0ZVxuICAgICAgICAgIFtmb3JtR3JvdXBdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sR3JvdXBcIlxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJfaW5wdXRDaGFuZ2UoaW5wdXQudmFsdWUpOyBfZm9ybUNvbnRyb2wuZXJyb3JzICYmIHRvb2x0aXAuc2hvdygpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIlxuICAgICAgICAgICAgI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwXT1cIl9mb3JtQ29udHJvbC5lcnJvcnM/LnZhbGlkYXRpb25NZXNzYWdlXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwUG9zaXRpb25dPVwiJ2Fib3ZlJ1wiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cIiFfZm9ybUNvbnRyb2wuZXJyb3JzXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cIjBcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwiMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgICAgIGNka0ZvY3VzSW5wdXRcbiAgICAgICAgICAgICAgI2lucHV0XG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJfc3RvcmFnZS5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiX2Zvcm1Db250cm9sLmZvcm1Db250cm9sTmFtZVwiXG4gICAgICAgICAgICAgIFt0eXBlXT1cIl9jb21tb24udHlwZVwiXG4gICAgICAgICAgICAgIFthdXRvY29tcGxldGVdPVwiX2NvbW1vbi5hdXRvY29tcGxldGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIEBpZiAoX2Zvcm1Db250cm9sLmVycm9ycykge1xuICAgICAgICAgICAgICA8bWF0LWVycm9yPjwvbWF0LWVycm9yPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8ZGl2XG4gICAgICAgICAgW3RpdGxlXT1cIl9mb3JtQ29udHJvbC52YWx1ZVwiXG4gICAgICAgICAgY2xhc3M9XCJjZGstZGVmYXVsdC1maWVsZFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgZGlzYWJsZWQ6IF9mb3JtQ29udHJvbC5kaXNhYmxlZCxcbiAgICAgICAgICAgICdtYXQtcmVkLTUwMCBtYXQtZXJyb3InOiBfZm9ybUNvbnRyb2wuZXJyb3JzXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj57eyBfZm9ybUNvbnRyb2wudmFsdWUgfHwgX3N0b3JhZ2UucGxhY2Vob2xkZXIgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIH1cbiAgICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJhZnRlckFjdGlvblBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgUG9ydGFsTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgQ2RrRGF0YWdyaWRGb2N1c0lucHV0RGlyZWN0aXZlLFxuICAgIE5nQ2xhc3MsXG4gICAgQXN5bmNQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRhZ3JpZElucHV0Q29tcG9uZW50PEl0ZW0+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQVRBR1JJRF9DT01NT05fVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9jb21tb246IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlLFxuICAgIEBJbmplY3QoREFUQUdSSURfRURJVF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2VkaXQ6IENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0ZPUk1fQ09OVFJPTF9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2Zvcm1Db250cm9sOiBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlPEl0ZW0+LFxuICAgIEBJbmplY3QoREFUQUdSSURfU1RPUkFHRV9UT0tFTilcbiAgICBwdWJsaWMgcmVhZG9ubHkgX3N0b3JhZ2U6IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxJdGVtPixcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3J1bGVNYW5hZ2VyOiBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyPEl0ZW0+LFxuICApIHt9XG5cbiAgaW5kZXghOiBudW1iZXI7XG4gIG92ZXJyaWRlID0gZmFsc2U7XG4gIGFmdGVyQWN0aW9uUG9ydGFsITogUG9ydGFsPGFueT47XG4gIGJlZm9yZUFjdGlvblBvcnRhbCE6IFBvcnRhbDxhbnk+O1xuICBjb21wb25lbnRQb3J0YWwhOiBDb21wb25lbnRQb3J0YWw8dW5rbm93bj47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZGF0YWdyaWQtaW5wdXQnKSBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8vIEB0b2RvOiBldmVyeXRoaW5nIGhhdmUgdG8gYmUgbW92ZWQgdG8gYSBkaXJlY3RpdmVcbiAgLy8gLSBoYXZlIENka0RhdGFncmlkQWN0aW9uRGlyZWN0aXZlIGJ1dCB3b3JrcyBub3Qgd2VsbCBiZWNhdXNlIGhhdmUgdG8gdHJpZ2dlclxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHsgaXRlbSwga2V5IH0gPSB0aGlzLl9zdG9yYWdlO1xuICAgIGNvbnN0IGFjdGlvblR5cGUgPSBnZXRJdGVtUGF5bG9hZChpdGVtKS5hY3Rpb25UeXBlO1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX3J1bGVNYW5hZ2VyLmdldEFjdGlvblJ1bGUoaXRlbSwga2V5LCBhY3Rpb25UeXBlKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSBhY3Rpb24/LmNvbXBvbmVudFR5cGU7XG4gICAgY29uc3QgY29tcG9uZW50UG9zaXRpb24gPSBhY3Rpb24/LmNvbXBvbmVudFBvc2l0aW9uO1xuXG4gICAgaWYgKGFjdGlvbiAmJiB0eXBlb2YgY29tcG9uZW50VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgYWN0aW9uRGF0YUluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvcixcbiAgICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBQ1RJT05fREFUQSwgdXNlVmFsdWU6IGFjdGlvbi5kYXRhIHx8IG51bGwgfV0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRQb3NpdGlvbiA9PT0gJ3N0cmluZycgJiYgY29tcG9uZW50UG9zaXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgICAgIHRoaXMuYmVmb3JlQWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29tcG9uZW50UG9zaXRpb24gPT09ICdzdHJpbmcnICYmIGNvbXBvbmVudFBvc2l0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJBY3Rpb25Qb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudFR5cGUsIG51bGwsIGFjdGlvbkRhdGFJbmplY3Rvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm92ZXJyaWRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iZWZvcmVBY3Rpb25Qb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudFR5cGUsIG51bGwsIGFjdGlvbkRhdGFJbmplY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfaW5wdXRDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N0b3JhZ2Uuc2V0VmFsdWUodmFsdWUpOyAvLyBAdG9kbzogd2hlbiBpbnB1dCB0eXBlIGlzIG51bWJlciB0aGVuIGNvbnZlcnQgdG8gbnVtYmVyXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTUFUX0ZPUk1BVF9JTlBVVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEYXRhZ3JpZElucHV0Rm9ybWF0cz4oJ21hdElucHV0Rm9ybWF0cycpO1xuZXhwb3J0IGNvbnN0IE1BVF9OVU1CRVJfSU5QVVQgPSBuZXcgSW5qZWN0aW9uVG9rZW48RGF0YWdyaWRJbnB1dEZvcm1hdHM+KCdtYXRJbnB1dE51bWJlcnMnKTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0Rm9ybWF0c1R5cGVzIHtcbiAgcGFyc2U/OiBSZWdFeHA7XG4gIGRpc3BsYXk/OiBSZWdFeHA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWdyaWRJbnB1dE51bWJlcnNUeXBlcyB7XG4gIHJvdW5kPzogbnVtYmVyIHwgKCh2YWx1ZTogbnVtYmVyKSA9PiBudW1iZXIpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFncmlkSW5wdXRGb3JtYXRzPEl0ZW0gPSB1bmtub3duPiBleHRlbmRzIERhdGFncmlkSW5wdXRGb3JtYXRzVHlwZXMge1xuICBvdmVycmlkZXM/OiB7XG4gICAgW2l0ZW1LZXkgaW4ga2V5b2YgSXRlbV0/OiBEYXRhZ3JpZElucHV0Rm9ybWF0c1R5cGVzO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFncmlkSW5wdXROdW1iZXJzPEl0ZW0gPSB1bmtub3duPiBleHRlbmRzIERhdGFncmlkSW5wdXROdW1iZXJzVHlwZXMge1xuICBvdmVycmlkZXM/OiB7XG4gICAgW2l0ZW1LZXkgaW4ga2V5b2YgSXRlbV0/OiBEYXRhZ3JpZElucHV0Rm9ybWF0c1R5cGVzO1xuICB9O1xufVxuIl19