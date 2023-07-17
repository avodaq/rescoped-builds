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
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: MatDatagridInputComponent, isStandalone: true, selector: "mat-datagrid-input", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-input": "this.hostClass" } }, providers: [
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
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i2.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
                    standalone: true,
                    imports: [
                        PortalModule,
                        NgIf,
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
        }], ctorParameters: function () { return [{ type: i7.CdkDatagridCommonDirective, decorators: [{
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
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: i1.CdkDatagridRuleManager }]; }, propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-input']
            }], inputChange: [{
                type: Output
            }] } });
export const MAT_FORMAT_INPUT = new InjectionToken('matInputFormats');
export const MAT_NUMBER_INPUT = new InjectionToken('matInputNumbers');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGFncmlkLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9tYXQtZGF0YWdyaWQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLGNBQWMsRUFDZCxRQUFRLEVBRVIsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDJCQUEyQixHQUM1QixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQVUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFD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QkFDWCxtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLDhCQUE4Qjt3QkFDOUIsT0FBTzt3QkFDUCxTQUFTO3FCQUNWO2lCQUNGOzswQkFHSSxNQUFNOzJCQUFDLHFCQUFxQjs7MEJBRTVCLE1BQU07MkJBQUMsbUJBQW1COzswQkFFMUIsTUFBTTsyQkFBQywyQkFBMkI7OzBCQUVsQyxNQUFNOzJCQUFDLHNCQUFzQjt3SUFjUyxTQUFTO3NCQUFqRCxXQUFXO3VCQUFDLDBCQUEwQjtnQkFFN0IsV0FBVztzQkFBcEIsTUFBTTs7QUF3Q1QsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQXVCLGlCQUFpQixDQUFDLENBQUM7QUFDNUYsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQXVCLGlCQUFpQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1lZGl0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9DT01NT05fUFJPVklERVIsIERBVEFHUklEX0NPTU1PTl9UT0tFTiB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWNvbW1vbi5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkQ29tbW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtY29tbW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9FRElUX1BST1ZJREVSLCBEQVRBR1JJRF9FRElUX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZWRpdC5mYWN0b3J5JztcbmltcG9ydCB7IENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERBVEFHUklEX0ZPUk1fQ09OVFJPTF9QUk9WSURFUixcbiAgREFUQUdSSURfRk9STV9DT05UUk9MX1RPS0VOLFxufSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZmFjdG9yeSc7XG5pbXBvcnQgeyBEQVRBR1JJRF9TVE9SQUdFX1BST1ZJREVSLCBEQVRBR1JJRF9TVE9SQUdFX1RPS0VOIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtc3RvcmFnZS5mYWN0b3J5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0SXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvY3VzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL21hdC1kYXRhZ3JpZC1mb2N1cy5kaXJlY3RpdmVzJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nSWYsIE5nQ2xhc3MsIEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8vIEB0b2RvOiBtb3ZlIHRvIHNlcGFyYXRlIGZpbGUhXG5leHBvcnQgY29uc3QgQUNUSU9OX0RBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48dW5rbm93bj4oJ0FjdGlvbkRhdGEnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9wcmVmZXItb24tcHVzaC1jb21wb25lbnQtY2hhbmdlLWRldGVjdGlvblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWF0LWRhdGFncmlkLWlucHV0JyxcbiAgZXhwb3J0QXM6ICdtYXREYXRhZ3JpZElucHV0JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQUdSSURfQ09NTU9OX1BST1ZJREVSLFxuICAgIERBVEFHUklEX0VESVRfUFJPVklERVIsXG4gICAgREFUQUdSSURfRk9STV9DT05UUk9MX1BST1ZJREVSLFxuICAgIERBVEFHUklEX1NUT1JBR0VfUFJPVklERVIsXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiYmVmb3JlQWN0aW9uUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW92ZXJyaWRlXCI+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiKF9lZGl0LmFjdGl2ZSQgfCBhc3luYykgPT09IHRydWUgJiYgIV9mb3JtQ29udHJvbC5kaXNhYmxlZDsgZWxzZSBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG5vdmFsaWRhdGVcbiAgICAgICAgICBbZm9ybUdyb3VwXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbEdyb3VwXCJcbiAgICAgICAgICAobmdTdWJtaXQpPVwiX2lucHV0Q2hhbmdlKGlucHV0LnZhbHVlKTsgX2Zvcm1Db250cm9sLmVycm9ycyAmJiB0b29sdGlwLnNob3coKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJfZm9ybUNvbnRyb2wuZXJyb3JzPy52YWxpZGF0aW9uTWVzc2FnZVwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cIidhYm92ZSdcIlxuICAgICAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCIhX2Zvcm1Db250cm9sLmVycm9yc1wiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcFNob3dEZWxheV09XCIwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cIjBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgICBjZGtGb2N1c0lucHV0XG4gICAgICAgICAgICAgICNpbnB1dFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiX3N0b3JhZ2UucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIl9mb3JtQ29udHJvbC5mb3JtQ29udHJvbE5hbWVcIlxuICAgICAgICAgICAgICBbdHlwZV09XCJfY29tbW9uLnR5cGVcIlxuICAgICAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cIl9jb21tb24uYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiX2Zvcm1Db250cm9sLmVycm9yc1wiPjwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBbdGl0bGVdPVwiX2Zvcm1Db250cm9sLnZhbHVlXCJcbiAgICAgICAgICBjbGFzcz1cImNkay1kZWZhdWx0LWZpZWxkXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICBkaXNhYmxlZDogX2Zvcm1Db250cm9sLmRpc2FibGVkLFxuICAgICAgICAgICAgJ21hdC1yZWQtNTAwIG1hdC1lcnJvcic6IF9mb3JtQ29udHJvbC5lcnJvcnNcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuPnt7IF9mb3JtQ29udHJvbC52YWx1ZSB8fCBfc3RvcmFnZS5wbGFjZWhvbGRlciB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cImFmdGVyQWN0aW9uUG9ydGFsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgTmdJZixcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIENka0RhdGFncmlkRm9jdXNJbnB1dERpcmVjdGl2ZSxcbiAgICBOZ0NsYXNzLFxuICAgIEFzeW5jUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0YWdyaWRJbnB1dENvbXBvbmVudDxJdGVtPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFUQUdSSURfQ09NTU9OX1RPS0VOKVxuICAgIHB1YmxpYyByZWFkb25seSBfY29tbW9uOiBDZGtEYXRhZ3JpZENvbW1vbkRpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERBVEFHUklEX0VESVRfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9lZGl0OiBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUsXG4gICAgQEluamVjdChEQVRBR1JJRF9GT1JNX0NPTlRST0xfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9mb3JtQ29udHJvbDogQ2RrRGF0YWdyaWRGb3JtQ29udHJvbERpcmVjdGl2ZTxJdGVtPixcbiAgICBASW5qZWN0KERBVEFHUklEX1NUT1JBR0VfVE9LRU4pXG4gICAgcHVibGljIHJlYWRvbmx5IF9zdG9yYWdlOiBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8SXRlbT4sXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgKSB7fVxuXG4gIGluZGV4ITogbnVtYmVyO1xuICBvdmVycmlkZSA9IGZhbHNlO1xuICBhZnRlckFjdGlvblBvcnRhbCE6IFBvcnRhbDxhbnk+O1xuICBiZWZvcmVBY3Rpb25Qb3J0YWwhOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsITogQ29tcG9uZW50UG9ydGFsPHVua25vd24+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWRhdGFncmlkLWlucHV0JykgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyBAdG9kbzogZXZlcnl0aGluZyBoYXZlIHRvIGJlIG1vdmVkIHRvIGEgZGlyZWN0aXZlXG4gIC8vIC0gaGF2ZSBDZGtEYXRhZ3JpZEFjdGlvbkRpcmVjdGl2ZSBidXQgd29ya3Mgbm90IHdlbGwgYmVjYXVzZSBoYXZlIHRvIHRyaWdnZXJcblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGtleSB9ID0gdGhpcy5fc3RvcmFnZTtcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gZ2V0SXRlbVBheWxvYWQoaXRlbSkuYWN0aW9uVHlwZTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9ydWxlTWFuYWdlci5nZXRBY3Rpb25SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk7XG5cbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gYWN0aW9uPy5jb21wb25lbnRUeXBlO1xuICAgIGNvbnN0IGNvbXBvbmVudFBvc2l0aW9uID0gYWN0aW9uPy5jb21wb25lbnRQb3NpdGlvbjtcblxuICAgIGlmIChhY3Rpb24gJiYgdHlwZW9mIGNvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGFjdGlvbkRhdGFJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3IsXG4gICAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQUNUSU9OX0RBVEEsIHVzZVZhbHVlOiBhY3Rpb24uZGF0YSB8fCBudWxsIH1dLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50UG9zaXRpb24gPT09ICdzdHJpbmcnICYmIGNvbXBvbmVudFBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgICB0aGlzLmJlZm9yZUFjdGlvblBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50VHlwZSwgbnVsbCwgYWN0aW9uRGF0YUluamVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbXBvbmVudFBvc2l0aW9uID09PSAnc3RyaW5nJyAmJiBjb21wb25lbnRQb3NpdGlvbiA9PT0gJ2FmdGVyJykge1xuICAgICAgICB0aGlzLmFmdGVyQWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmVmb3JlQWN0aW9uUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRUeXBlLCBudWxsLCBhY3Rpb25EYXRhSW5qZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2lucHV0Q2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdG9yYWdlLnNldFZhbHVlKHZhbHVlKTsgLy8gQHRvZG86IHdoZW4gaW5wdXQgdHlwZSBpcyBudW1iZXIgdGhlbiBjb252ZXJ0IHRvIG51bWJlclxuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1BVF9GT1JNQVRfSU5QVVQgPSBuZXcgSW5qZWN0aW9uVG9rZW48RGF0YWdyaWRJbnB1dEZvcm1hdHM+KCdtYXRJbnB1dEZvcm1hdHMnKTtcbmV4cG9ydCBjb25zdCBNQVRfTlVNQkVSX0lOUFVUID0gbmV3IEluamVjdGlvblRva2VuPERhdGFncmlkSW5wdXRGb3JtYXRzPignbWF0SW5wdXROdW1iZXJzJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcyB7XG4gIHBhcnNlPzogUmVnRXhwO1xuICBkaXNwbGF5PzogUmVnRXhwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFncmlkSW5wdXROdW1iZXJzVHlwZXMge1xuICByb3VuZD86IG51bWJlciB8ICgodmFsdWU6IG51bWJlcikgPT4gbnVtYmVyKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0Rm9ybWF0czxJdGVtID0gdW5rbm93bj4gZXh0ZW5kcyBEYXRhZ3JpZElucHV0Rm9ybWF0c1R5cGVzIHtcbiAgb3ZlcnJpZGVzPzoge1xuICAgIFtpdGVtS2V5IGluIGtleW9mIEl0ZW1dPzogRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhZ3JpZElucHV0TnVtYmVyczxJdGVtID0gdW5rbm93bj4gZXh0ZW5kcyBEYXRhZ3JpZElucHV0TnVtYmVyc1R5cGVzIHtcbiAgb3ZlcnJpZGVzPzoge1xuICAgIFtpdGVtS2V5IGluIGtleW9mIEl0ZW1dPzogRGF0YWdyaWRJbnB1dEZvcm1hdHNUeXBlcztcbiAgfTtcbn1cbiJdfQ==