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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridStorageDirective, deps: [{ token: i1.CdkDatagridDataManager }, { token: i2.CdkDatagridFormManager }, { token: i3.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.9", type: CdkDatagridStorageDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { item: "item", key: "key", render: "render", actionType: "actionType" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridStorageDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEcsT0FBTyxFQUFFLHNCQUFzQixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQU9yRSxNQUFNLE9BQU8sMkJBQTJCO0lBS3RDLFlBQ21CLGtCQUFnRCxFQUNoRCxZQUEwQyxFQUMxQyxZQUEwQztRQUYxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQThCO1FBQ2hELGlCQUFZLEdBQVosWUFBWSxDQUE4QjtRQUMxQyxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7SUFDMUQsQ0FBQztJQU1KLElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFF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LENBQUMsQ0FBQztTQUN6RjtJQUNILENBQUM7OEdBMUVVLDJCQUEyQjtrR0FBM0IsMkJBQTJCOzsyRkFBM0IsMkJBQTJCO2tCQUx2QyxTQUFTO21CQUFDO29CQUNULDhEQUE4RDtvQkFDOUQsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO3FLQVlVLElBQUk7c0JBQVosS0FBSztnQkFFRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQWtCTyxVQUFVO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRGb3JtTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWZvcm0ubWFuYWdlcic7XG5pbXBvcnQgeyBnZXRJdGVtRGF0YSwgZ2V0SXRlbVBheWxvYWRWYWx1ZSwgc2V0SXRlbVBheWxvYWQsIHRocm93RXJyb3IgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyLCBJdGVtQWN0aW9uVHlwZSB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlcic7XG5pbXBvcnQgeyBDZGtEYXRhZ3JpZFJ1bGVNYW5hZ2VyIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtcnVsZS5tYW5hZ2VyJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2Nkay1kYXRhZ3JpZC1lZGl0XScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkU3RvcmFnZURpcmVjdGl2ZTxcbiAgSXRlbSxcbiAgSXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0gPSBrZXlvZiBJdGVtLFxuICBJdGVtVmFsdWUgZXh0ZW5kcyBJdGVtW0l0ZW1LZXldID0gSXRlbVtJdGVtS2V5XSxcbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kYXRhU291cmNlTWFuYWdlcjogQ2RrRGF0YWdyaWREYXRhTWFuYWdlcjxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtTWFuYWdlcjogQ2RrRGF0YWdyaWRGb3JtTWFuYWdlcjxJdGVtPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ydWxlTWFuYWdlcjogQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPixcbiAgKSB7fVxuXG4gIEBJbnB1dCgpIGl0ZW0hOiBJdGVtO1xuXG4gIEBJbnB1dCgpIGtleSE6IGtleW9mIEl0ZW07XG4gIEBJbnB1dCgpIHJlbmRlciE6IGtleW9mIEl0ZW07XG4gIGdldCByZW5kZXJLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyIHx8IHRoaXMua2V5IHx8IHRocm93RXJyb3IoJ0BJbnB1dCgpLmtleSBvciBASW5wdXQoKS5yZW5kZXIgaXMgbWlzc2luZycpO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IGdldEl0ZW1QYXlsb2FkVmFsdWUodGhpcy5pdGVtLCAnYWN0aW9uVHlwZScpO1xuICAgIHJldHVybiB0aGlzLl9ydWxlTWFuYWdlci5nZXRSdWxlKHRoaXMuaXRlbSwgdGhpcy5rZXksIGFjdGlvbik/LnBsYWNlaG9sZGVyO1xuICB9XG5cbiAgZ2V0IGdyb3VwSWQoKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1QYXlsb2FkVmFsdWUodGhpcy5pdGVtLCAnZ3JvdXBJZCcpO1xuICB9XG5cbiAgZ2V0IGluZGV4KCkge1xuICAgIHJldHVybiBnZXRJdGVtUGF5bG9hZFZhbHVlKHRoaXMuaXRlbSwgJ2luZGV4Jyk7XG4gIH1cblxuICBASW5wdXQoKSBnZXQgYWN0aW9uVHlwZSgpOiBJdGVtQWN0aW9uVHlwZSB7XG4gICAgcmV0dXJuIGAke2dldEl0ZW1QYXlsb2FkVmFsdWUodGhpcy5pdGVtLCAnYWN0aW9uVHlwZScpfWA7XG4gIH1cblxuICBjcmVhdGVVdWlkKCkge1xuICAgIHJldHVybiBgJHtnZXRJdGVtUGF5bG9hZFZhbHVlKHRoaXMuaXRlbSwgJ2luZGV4Jyl9LSR7U3RyaW5nKHRoaXMua2V5KX1gO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pIHtcbiAgICBsZXQgdmFsdWVCeUtleSA9IHZhbHVlIGFzIHVua25vd24gYXMgSXRlbVZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZUJ5S2V5ID0gKHZhbHVlIGFzIHVua25vd24gYXMgSXRlbSlbdGhpcy5rZXldIGFzIEl0ZW1WYWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvblR5cGUgPSBnZXRJdGVtUGF5bG9hZFZhbHVlKHRoaXMuaXRlbSwgJ2FjdGlvblR5cGUnKTtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9ydWxlTWFuYWdlci5nZXRBY3Rpb25SdWxlKHRoaXMuaXRlbSwgdGhpcy5rZXksIGFjdGlvblR5cGUpO1xuXG4gICAgbGV0IF9pdGVtRGF0YSA9IHsgW3RoaXMua2V5XTogdmFsdWVCeUtleSB9O1xuICAgIGlmIChhY3Rpb24/LnRyYW5zZm9ybSkge1xuICAgICAgX2l0ZW1EYXRhID0gZ2V0SXRlbURhdGEodGhpcy5pdGVtKSBhcyB7IFtrZXk6IHN0cmluZ106IEl0ZW1WYWx1ZSB9O1xuICAgICAgX2l0ZW1EYXRhID0gYWN0aW9uLnRyYW5zZm9ybShfaXRlbURhdGEsIHRoaXMua2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YVNvdXJjZU1hbmFnZXIuc2V0VmFsdWUodGhpcy5rZXksIHZhbHVlQnlLZXksIHRoaXMuaXRlbSwgcGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCBpZCA9IGAke3BheWxvYWQuaW5kZXh9LSR7U3RyaW5nKHRoaXMua2V5KX1gO1xuICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLl9mb3JtTWFuYWdlci5nZXRGb3JtQ29udHJvbChpZCk7XG4gICAgICBpZiAoIWZvcm1Db250cm9sKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBzZXRJdGVtUGF5bG9hZCh7fSBhcyBJdGVtLCBwYXlsb2FkKTtcbiAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSBwYXlsb2FkLmFjdGlvblR5cGU7XG4gICAgICB0aGlzLl9ydWxlTWFuYWdlci5hcHBseVJ1bGVzKGl0ZW0sIHRoaXMua2V5LCBhY3Rpb25UeXBlLCBmb3JtQ29udHJvbCwgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9KTtcblxuICAgIGxldCB2YWx1ZUJ5UmVuZGVyID0gdmFsdWUgYXMgdW5rbm93bjtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWVCeVJlbmRlciA9ICh2YWx1ZSBhcyB1bmtub3duIGFzIEl0ZW0pW3RoaXMucmVuZGVyXTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyS2V5ICYmIHZhbHVlQnlSZW5kZXIpIHtcbiAgICAgIHRoaXMuX2RhdGFTb3VyY2VNYW5hZ2VyLnNldFZhbHVlKHRoaXMucmVuZGVyS2V5LCB2YWx1ZUJ5UmVuZGVyIGFzIEl0ZW1WYWx1ZSwgdGhpcy5pdGVtKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==