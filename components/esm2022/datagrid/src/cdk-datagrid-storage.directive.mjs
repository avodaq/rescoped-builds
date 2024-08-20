import { Directive, Input } from '@angular/core';
import { CdkDatagridFormManager } from './cdk-datagrid-form.manager';
import { getItemData, getItemPayloadValue, setItemPayload, throwError } from './cdk-datagrid.utils';
import { CdkDatagridDataManager } from './cdk-datagrid-data.manager';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-data.manager";
import * as i2 from "./cdk-datagrid-form.manager";
import * as i3 from "./cdk-datagrid-rule.manager";
export class CdkDatagridStorageDirective {
    constructor(_dataSourceManager, _formManager, _ruleManager) {
        this._dataSourceManager = _dataSourceManager;
        this._formManager = _formManager;
        this._ruleManager = _ruleManager;
    }
    get renderKey() {
        return this.render || this.key || throwError('@Input().key or @Input().render is missing');
    }
    get placeholder() {
        const action = getItemPayloadValue(this.item, 'actionType');
        return this._ruleManager.getRule(this.item, this.key, action)?.placeholder;
    }
    get groupId() {
        return getItemPayloadValue(this.item, 'groupId');
    }
    get index() {
        return getItemPayloadValue(this.item, 'index');
    }
    get actionType() {
        return `${getItemPayloadValue(this.item, 'actionType')}`;
    }
    createUuid() {
        return `${getItemPayloadValue(this.item, 'index')}-${String(this.key)}`;
    }
    setValue(value) {
        let valueByKey = value;
        if (typeof value === 'object') {
            valueByKey = value[this.key];
        }
        else if (typeof value === 'string') {
            value = value.trim();
        }
        const actionType = getItemPayloadValue(this.item, 'actionType');
        const action = this._ruleManager.getActionRule(this.item, this.key, actionType);
        let _itemData = { [this.key]: valueByKey };
        if (action?.transform) {
            _itemData = getItemData(this.item);
            _itemData = action.transform(_itemData, this.key, value);
        }
        this._dataSourceManager.setValue(this.key, valueByKey, this.item, payload => {
            const id = `${payload.index}-${String(this.key)}`;
            const formControl = this._formManager.getFormControl(id);
            if (!formControl)
                return;
            const item = setItemPayload({}, payload);
            const actionType = payload.actionType;
            this._ruleManager.applyRules(item, this.key, actionType, formControl, value);
        });
        let valueByRender = value;
        if (typeof value === 'object') {
            valueByRender = value[this.render];
        }
        if (this.renderKey && valueByRender) {
            this._dataSourceManager.setValue(this.renderKey, valueByRender, this.item);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridStorageDirective, deps: [{ token: i1.CdkDatagridDataManager }, { token: i2.CdkDatagridFormManager }, { token: i3.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridStorageDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { item: "item", key: "key", render: "render", actionType: "actionType" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridStorageDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i1.CdkDatagridDataManager }, { type: i2.CdkDatagridFormManager }, { type: i3.CdkDatagridRuleManager }], propDecorators: { item: [{
                type: Input
            }], key: [{
                type: Input
            }], render: [{
                type: Input
            }], actionType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEcsT0FBTyxFQUFFLHNCQUFzQixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQU9yRSxNQUFNLE9BQU8sMkJBQTJCO0lBS3RDLFlBQ21CLGtCQUFnRCxFQUNoRCxZQUEwQyxFQUMxQyxZQUEwQztRQUYxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQThCO1FBQ2hELGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7SUFDMUQsQ0FBQztJQU1KLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFF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SUFBSSxDQUFDLFNBQVMsRUFBRSxhQUEwQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRixDQUFDO0lBQ0gsQ0FBQzs4R0ExRVUsMkJBQTJCO2tHQUEzQiwyQkFBMkI7OzJGQUEzQiwyQkFBMkI7a0JBTHZDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7cUtBWVUsSUFBSTtzQkFBWixLQUFLO2dCQUVHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBa0JPLFVBQVU7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZEZvcm1NYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS5tYW5hZ2VyJztcbmltcG9ydCB7IGdldEl0ZW1EYXRhLCBnZXRJdGVtUGF5bG9hZFZhbHVlLCBzZXRJdGVtUGF5bG9hZCwgdGhyb3dFcnJvciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcbmltcG9ydCB7IENka0RhdGFncmlkRGF0YU1hbmFnZXIsIEl0ZW1BY3Rpb25UeXBlIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0YS5tYW5hZ2VyJztcbmltcG9ydCB7IENka0RhdGFncmlkUnVsZU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1ydWxlLm1hbmFnZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbY2RrLWRhdGFncmlkLWVkaXRdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRTdG9yYWdlRGlyZWN0aXZlPFxuICBJdGVtLFxuICBJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbSA9IGtleW9mIEl0ZW0sXG4gIEl0ZW1WYWx1ZSBleHRlbmRzIEl0ZW1bSXRlbUtleV0gPSBJdGVtW0l0ZW1LZXldLFxuPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RhdGFTb3VyY2VNYW5hZ2VyOiBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1NYW5hZ2VyOiBDZGtEYXRhZ3JpZEZvcm1NYW5hZ2VyPEl0ZW0+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3J1bGVNYW5hZ2VyOiBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyPEl0ZW0+LFxuICApIHt9XG5cbiAgQElucHV0KCkgaXRlbSE6IEl0ZW07XG5cbiAgQElucHV0KCkga2V5IToga2V5b2YgSXRlbTtcbiAgQElucHV0KCkgcmVuZGVyIToga2V5b2YgSXRlbTtcbiAgZ2V0IHJlbmRlcktleSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIgfHwgdGhpcy5rZXkgfHwgdGhyb3dFcnJvcignQElucHV0KCkua2V5IG9yIEBJbnB1dCgpLnJlbmRlciBpcyBtaXNzaW5nJyk7XG4gIH1cblxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgY29uc3QgYWN0aW9uID0gZ2V0SXRlbVBheWxvYWRWYWx1ZSh0aGlzLml0ZW0sICdhY3Rpb25UeXBlJyk7XG4gICAgcmV0dXJuIHRoaXMuX3J1bGVNYW5hZ2VyLmdldFJ1bGUodGhpcy5pdGVtLCB0aGlzLmtleSwgYWN0aW9uKT8ucGxhY2Vob2xkZXI7XG4gIH1cblxuICBnZXQgZ3JvdXBJZCgpIHtcbiAgICByZXR1cm4gZ2V0SXRlbVBheWxvYWRWYWx1ZSh0aGlzLml0ZW0sICdncm91cElkJyk7XG4gIH1cblxuICBnZXQgaW5kZXgoKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1QYXlsb2FkVmFsdWUodGhpcy5pdGVtLCAnaW5kZXgnKTtcbiAgfVxuXG4gIEBJbnB1dCgpIGdldCBhY3Rpb25UeXBlKCk6IEl0ZW1BY3Rpb25UeXBlIHtcbiAgICByZXR1cm4gYCR7Z2V0SXRlbVBheWxvYWRWYWx1ZSh0aGlzLml0ZW0sICdhY3Rpb25UeXBlJyl9YDtcbiAgfVxuXG4gIGNyZWF0ZVV1aWQoKSB7XG4gICAgcmV0dXJuIGAke2dldEl0ZW1QYXlsb2FkVmFsdWUodGhpcy5pdGVtLCAnaW5kZXgnKX0tJHtTdHJpbmcodGhpcy5rZXkpfWA7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bikge1xuICAgIGxldCB2YWx1ZUJ5S2V5ID0gdmFsdWUgYXMgdW5rbm93biBhcyBJdGVtVmFsdWU7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlQnlLZXkgPSAodmFsdWUgYXMgdW5rbm93biBhcyBJdGVtKVt0aGlzLmtleV0gYXMgSXRlbVZhbHVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uVHlwZSA9IGdldEl0ZW1QYXlsb2FkVmFsdWUodGhpcy5pdGVtLCAnYWN0aW9uVHlwZScpO1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX3J1bGVNYW5hZ2VyLmdldEFjdGlvblJ1bGUodGhpcy5pdGVtLCB0aGlzLmtleSwgYWN0aW9uVHlwZSk7XG5cbiAgICBsZXQgX2l0ZW1EYXRhID0geyBbdGhpcy5rZXldOiB2YWx1ZUJ5S2V5IH07XG4gICAgaWYgKGFjdGlvbj8udHJhbnNmb3JtKSB7XG4gICAgICBfaXRlbURhdGEgPSBnZXRJdGVtRGF0YSh0aGlzLml0ZW0pIGFzIHsgW2tleTogc3RyaW5nXTogSXRlbVZhbHVlIH07XG4gICAgICBfaXRlbURhdGEgPSBhY3Rpb24udHJhbnNmb3JtKF9pdGVtRGF0YSwgdGhpcy5rZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhU291cmNlTWFuYWdlci5zZXRWYWx1ZSh0aGlzLmtleSwgdmFsdWVCeUtleSwgdGhpcy5pdGVtLCBwYXlsb2FkID0+IHtcbiAgICAgIGNvbnN0IGlkID0gYCR7cGF5bG9hZC5pbmRleH0tJHtTdHJpbmcodGhpcy5rZXkpfWA7XG4gICAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuX2Zvcm1NYW5hZ2VyLmdldEZvcm1Db250cm9sKGlkKTtcbiAgICAgIGlmICghZm9ybUNvbnRyb2wpIHJldHVybjtcblxuICAgICAgY29uc3QgaXRlbSA9IHNldEl0ZW1QYXlsb2FkKHt9IGFzIEl0ZW0sIHBheWxvYWQpO1xuICAgICAgY29uc3QgYWN0aW9uVHlwZSA9IHBheWxvYWQuYWN0aW9uVHlwZTtcbiAgICAgIHRoaXMuX3J1bGVNYW5hZ2VyLmFwcGx5UnVsZXMoaXRlbSwgdGhpcy5rZXksIGFjdGlvblR5cGUsIGZvcm1Db250cm9sLCB2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIH0pO1xuXG4gICAgbGV0IHZhbHVlQnlSZW5kZXIgPSB2YWx1ZSBhcyB1bmtub3duO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZUJ5UmVuZGVyID0gKHZhbHVlIGFzIHVua25vd24gYXMgSXRlbSlbdGhpcy5yZW5kZXJdO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXJLZXkgJiYgdmFsdWVCeVJlbmRlcikge1xuICAgICAgdGhpcy5fZGF0YVNvdXJjZU1hbmFnZXIuc2V0VmFsdWUodGhpcy5yZW5kZXJLZXksIHZhbHVlQnlSZW5kZXIgYXMgSXRlbVZhbHVlLCB0aGlzLml0ZW0pO1xuICAgIH1cbiAgfVxufVxuIl19