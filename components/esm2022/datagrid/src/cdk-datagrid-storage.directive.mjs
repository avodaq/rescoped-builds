import { Directive, Input } from '@angular/core';
import { CdkDatagridFormManager } from './cdk-datagrid-form.manager';
import { getItemData, getItemPayloadValue, setItemPayload, throwError } from './cdk-datagrid.utils';
import { CdkDatagridDataManager } from './cdk-datagrid-data.manager';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import * as i0 from "@angular/core";
import * as i1 from "./cdk-datagrid-data.manager";
import * as i2 from "./cdk-datagrid-form.manager";
import * as i3 from "./cdk-datagrid-rule.manager";
class CdkDatagridStorageDirective {
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
        let itemData = { [this.key]: valueByKey };
        if (action?.transform) {
            itemData = getItemData(this.item);
            itemData = action.transform(itemData, this.key, value);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridStorageDirective, deps: [{ token: i1.CdkDatagridDataManager }, { token: i2.CdkDatagridFormManager }, { token: i3.CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.6", type: CdkDatagridStorageDirective, selector: "[cdk-datagrid-edit]", inputs: { item: "item", key: "key", render: "render", actionType: "actionType" }, ngImport: i0 }); }
}
export { CdkDatagridStorageDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridStorageDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                }]
        }], ctorParameters: function () { return [{ type: i1.CdkDatagridDataManager }, { type: i2.CdkDatagridFormManager }, { type: i3.CdkDatagridRuleManager }]; }, propDecorators: { item: [{
                type: Input
            }], key: [{
                type: Input
            }], render: [{
                type: Input
            }], actionType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLXN0b3JhZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL2RhdGFncmlkL3NyYy9jZGstZGF0YWdyaWQtc3RvcmFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEcsT0FBTyxFQUFFLHNCQUFzQixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQUVyRSxNQUlhLDJCQUEyQjtJQUt0QyxZQUNtQixrQkFBZ0QsRUFDaEQsWUFBMEMsRUFDMUMsWUFBMEM7UUFGMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUE4QjtRQUNoRCxpQkFBWSxHQUFaLFlBQVksQ0FBOEI7UUFDMUMsaUJBQVksR0FBWixZQUFZLENBQThCO0lBQzFELENBQUM7SUFNSixJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsTUFBTSxNQUFNLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxXQUFX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LENBQUM7U0FDekY7SUFDSCxDQUFDOzhHQTFFVSwyQkFBMkI7a0dBQTNCLDJCQUEyQjs7U0FBM0IsMkJBQTJCOzJGQUEzQiwyQkFBMkI7a0JBSnZDLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzt1TEFZVSxJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsR0FBRztzQkFBWCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFrQk8sVUFBVTtzQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RhdGFncmlkRm9ybU1hbmFnZXIgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLm1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0SXRlbURhdGEsIGdldEl0ZW1QYXlsb2FkVmFsdWUsIHNldEl0ZW1QYXlsb2FkLCB0aHJvd0Vycm9yIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWREYXRhTWFuYWdlciwgSXRlbUFjdGlvblR5cGUgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1kYXRhLm1hbmFnZXInO1xuaW1wb3J0IHsgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlciB9IGZyb20gJy4vY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlcic7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tjZGstZGF0YWdyaWQtZWRpdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZFN0b3JhZ2VEaXJlY3RpdmU8XG4gIEl0ZW0sXG4gIEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtID0ga2V5b2YgSXRlbSxcbiAgSXRlbVZhbHVlIGV4dGVuZHMgSXRlbVtJdGVtS2V5XSA9IEl0ZW1bSXRlbUtleV0sXG4+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGF0YVNvdXJjZU1hbmFnZXI6IENka0RhdGFncmlkRGF0YU1hbmFnZXI8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZm9ybU1hbmFnZXI6IENka0RhdGFncmlkRm9ybU1hbmFnZXI8SXRlbT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcnVsZU1hbmFnZXI6IENka0RhdGFncmlkUnVsZU1hbmFnZXI8SXRlbT4sXG4gICkge31cblxuICBASW5wdXQoKSBpdGVtITogSXRlbTtcblxuICBASW5wdXQoKSBrZXkhOiBrZXlvZiBJdGVtO1xuICBASW5wdXQoKSByZW5kZXIhOiBrZXlvZiBJdGVtO1xuICBnZXQgcmVuZGVyS2V5KCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlciB8fCB0aGlzLmtleSB8fCB0aHJvd0Vycm9yKCdASW5wdXQoKS5rZXkgb3IgQElucHV0KCkucmVuZGVyIGlzIG1pc3NpbmcnKTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICBjb25zdCBhY3Rpb24gPSBnZXRJdGVtUGF5bG9hZFZhbHVlKHRoaXMuaXRlbSwgJ2FjdGlvblR5cGUnKTtcbiAgICByZXR1cm4gdGhpcy5fcnVsZU1hbmFnZXIuZ2V0UnVsZSh0aGlzLml0ZW0sIHRoaXMua2V5LCBhY3Rpb24pPy5wbGFjZWhvbGRlcjtcbiAgfVxuXG4gIGdldCBncm91cElkKCkge1xuICAgIHJldHVybiBnZXRJdGVtUGF5bG9hZFZhbHVlKHRoaXMuaXRlbSwgJ2dyb3VwSWQnKTtcbiAgfVxuXG4gIGdldCBpbmRleCgpIHtcbiAgICByZXR1cm4gZ2V0SXRlbVBheWxvYWRWYWx1ZSh0aGlzLml0ZW0sICdpbmRleCcpO1xuICB9XG5cbiAgQElucHV0KCkgZ2V0IGFjdGlvblR5cGUoKTogSXRlbUFjdGlvblR5cGUge1xuICAgIHJldHVybiBgJHtnZXRJdGVtUGF5bG9hZFZhbHVlKHRoaXMuaXRlbSwgJ2FjdGlvblR5cGUnKX1gO1xuICB9XG5cbiAgY3JlYXRlVXVpZCgpIHtcbiAgICByZXR1cm4gYCR7Z2V0SXRlbVBheWxvYWRWYWx1ZSh0aGlzLml0ZW0sICdpbmRleCcpfS0ke1N0cmluZyh0aGlzLmtleSl9YDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKSB7XG4gICAgbGV0IHZhbHVlQnlLZXkgPSB2YWx1ZSBhcyB1bmtub3duIGFzIEl0ZW1WYWx1ZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWVCeUtleSA9ICh2YWx1ZSBhcyB1bmtub3duIGFzIEl0ZW0pW3RoaXMua2V5XSBhcyBJdGVtVmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25UeXBlID0gZ2V0SXRlbVBheWxvYWRWYWx1ZSh0aGlzLml0ZW0sICdhY3Rpb25UeXBlJyk7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5fcnVsZU1hbmFnZXIuZ2V0QWN0aW9uUnVsZSh0aGlzLml0ZW0sIHRoaXMua2V5LCBhY3Rpb25UeXBlKTtcblxuICAgIGxldCBpdGVtRGF0YSA9IHsgW3RoaXMua2V5XTogdmFsdWVCeUtleSB9O1xuICAgIGlmIChhY3Rpb24/LnRyYW5zZm9ybSkge1xuICAgICAgaXRlbURhdGEgPSBnZXRJdGVtRGF0YSh0aGlzLml0ZW0pIGFzIHsgW2tleTogc3RyaW5nXTogSXRlbVZhbHVlIH07XG4gICAgICBpdGVtRGF0YSA9IGFjdGlvbi50cmFuc2Zvcm0oaXRlbURhdGEsIHRoaXMua2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YVNvdXJjZU1hbmFnZXIuc2V0VmFsdWUodGhpcy5rZXksIHZhbHVlQnlLZXksIHRoaXMuaXRlbSwgcGF5bG9hZCA9PiB7XG4gICAgICBjb25zdCBpZCA9IGAke3BheWxvYWQuaW5kZXh9LSR7U3RyaW5nKHRoaXMua2V5KX1gO1xuICAgICAgY29uc3QgZm9ybUNvbnRyb2wgPSB0aGlzLl9mb3JtTWFuYWdlci5nZXRGb3JtQ29udHJvbChpZCk7XG4gICAgICBpZiAoIWZvcm1Db250cm9sKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBzZXRJdGVtUGF5bG9hZCh7fSBhcyBJdGVtLCBwYXlsb2FkKTtcbiAgICAgIGNvbnN0IGFjdGlvblR5cGUgPSBwYXlsb2FkLmFjdGlvblR5cGU7XG4gICAgICB0aGlzLl9ydWxlTWFuYWdlci5hcHBseVJ1bGVzKGl0ZW0sIHRoaXMua2V5LCBhY3Rpb25UeXBlLCBmb3JtQ29udHJvbCwgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9KTtcblxuICAgIGxldCB2YWx1ZUJ5UmVuZGVyID0gdmFsdWUgYXMgdW5rbm93bjtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFsdWVCeVJlbmRlciA9ICh2YWx1ZSBhcyB1bmtub3duIGFzIEl0ZW0pW3RoaXMucmVuZGVyXTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyS2V5ICYmIHZhbHVlQnlSZW5kZXIpIHtcbiAgICAgIHRoaXMuX2RhdGFTb3VyY2VNYW5hZ2VyLnNldFZhbHVlKHRoaXMucmVuZGVyS2V5LCB2YWx1ZUJ5UmVuZGVyIGFzIEl0ZW1WYWx1ZSwgdGhpcy5pdGVtKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==