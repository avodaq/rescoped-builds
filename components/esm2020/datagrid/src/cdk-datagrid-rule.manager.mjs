var _CdkDatagridRuleManager_instances, _CdkDatagridRuleManager_globalItemRules, _CdkDatagridRuleManager_getItemRules, _CdkDatagridRuleManager_getGlobalRules, _CdkDatagridRuleManager_mergeRules, _CdkDatagridRuleManager_applyRules;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Injectable } from '@angular/core';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
export class CdkDatagridRuleManager {
    constructor() {
        _CdkDatagridRuleManager_instances.add(this);
        _CdkDatagridRuleManager_globalItemRules.set(this, void 0);
    }
    setGlobalRules(itemRules) {
        __classPrivateFieldSet(this, _CdkDatagridRuleManager_globalItemRules, itemRules, "f");
    }
    canRule(item, key, actionType) {
        return this.getRule(item, key, actionType);
    }
    canValidate(item, key, actionType) {
        return !!this.canRule(item, key, actionType)?.validate;
    }
    canRender(item, key, actionType) {
        return !!this.canRule(item, key, actionType)?.render;
    }
    canDisable(item, key, actionType) {
        return !!this.canRule(item, key, actionType)?.disable;
    }
    canAction(item, key, actionType) {
        return !!this.canRule(item, key, actionType)?.action;
    }
    getActionRule(item, key, actionType) {
        const action = this.getRule(item, key, actionType)?.action;
        if (!action) {
            return null;
        }
        if (typeof action?.cond === 'function' && action.cond() === true) {
            return action;
        }
        else if (typeof action?.cond === 'boolean' && action.cond === true) {
            return action;
        }
        else if (typeof action?.cond === 'undefined') {
            return action;
        }
        else {
            return null;
        }
    }
    applyRules(item, key, actionType, formControl, initialValue) {
        const rule = this.getRule(item, key, actionType);
        __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_applyRules).call(this, rule, formControl, initialValue);
    }
    getRule(item, key, actionType) {
        let rules = {};
        // has global one up (e.g. override/../disable) some rules?
        const parentGlobalRules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_getGlobalRules).call(this, actionType) || {};
        if (parentGlobalRules)
            rules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_mergeRules).call(this, parentGlobalRules, rules);
        // has global override rules?
        const globalOverrideRules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_getGlobalRules).call(this, actionType)?.overrides?.[key] || {};
        if (globalOverrideRules)
            rules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_mergeRules).call(this, globalOverrideRules, rules);
        // has item one up (e.g. override/../disable) some rules?
        const parentItemRules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_getItemRules).call(this, item) || {};
        if (parentItemRules)
            rules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_mergeRules).call(this, parentItemRules, rules);
        // has item override rules?
        const itemOverrideRules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_getItemRules).call(this, item)?.overrides?.[key] || {};
        if (itemOverrideRules)
            rules = __classPrivateFieldGet(this, _CdkDatagridRuleManager_instances, "m", _CdkDatagridRuleManager_mergeRules).call(this, itemOverrideRules, rules);
        return rules;
    }
}
_CdkDatagridRuleManager_globalItemRules = new WeakMap(), _CdkDatagridRuleManager_instances = new WeakSet(), _CdkDatagridRuleManager_getItemRules = function _CdkDatagridRuleManager_getItemRules(item) {
    return getItemPayload(item)?.rules;
}, _CdkDatagridRuleManager_getGlobalRules = function _CdkDatagridRuleManager_getGlobalRules(actionType) {
    return __classPrivateFieldGet(this, _CdkDatagridRuleManager_globalItemRules, "f")?.[actionType];
}, _CdkDatagridRuleManager_mergeRules = function _CdkDatagridRuleManager_mergeRules(intoRule, fromRule) {
    return {
        validate: intoRule.validate ?? fromRule.validate,
        disable: intoRule.disable ?? fromRule.disable,
        render: intoRule.render ?? fromRule.render,
        placeholder: intoRule.placeholder ?? fromRule.placeholder,
        action: intoRule.action ?? fromRule.action,
    };
}, _CdkDatagridRuleManager_applyRules = function _CdkDatagridRuleManager_applyRules(rules, formControl, initialValue) {
    if (formControl?.value !== initialValue) {
        rules?.render === undefined && formControl?.setValue(initialValue);
        rules?.render === true && formControl?.setValue(initialValue);
    }
    if (rules?.render === false && formControl?.value !== '') {
        formControl?.setValue('');
    }
    if (rules?.disable === true && !formControl?.disabled) {
        formControl?.disable();
    }
    if (!rules?.disable && !formControl?.enabled) {
        formControl?.enable();
    }
    if (!formControl?.disabled && (rules?.validate === false || rules?.validate === undefined)) {
        formControl?.setValidators([]);
        formControl?.setAsyncValidators([]);
        formControl?.updateValueAndValidity();
    }
};
CdkDatagridRuleManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridRuleManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CdkDatagridRuleManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridRuleManager });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridRuleManager, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUl0RCxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DOztRQUVFLDBEQUFxQztLQXNKdEM7SUFwSkMsY0FBYyxDQUFDLFNBQTRCO1FBQ3pDLHVCQUFBLElBQUksMkNBQW9CLFNBQVMsTUFBQSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxPQUFPLENBQ0wsSUFBVSxFQUNWLEdBQVksRUFDWixVQUFzQjtRQUV0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsV0FBVyxDQUNULElBQVUsRUFDVixHQUFZLEVBQ1osVUFBc0I7UUFFdEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFLFFBQVEsQ0FBQztJQUN6RCxDQUFDO0lBRUQsU0FBUyxDQUNQLElBQVUsRUFDVixHQUFZLEVBQ1osVUFBc0I7UUFFdEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztJQUN2RCxDQUFDO0lBRUQsVUFBVSxDQUNSLElBQVUsRUFDVixHQUFZLEVBQ1osVUFBc0I7UUFFdEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFFLE9B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Q0FBQyxLQUFLLEVBQUUsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRTtRQUM1QyxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7S0FDdkI7SUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssRUFBRSxRQUFRLEtBQUssU0FBUyxDQUFDLEVBQUU7UUFDMUYsV0FBVyxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixXQUFXLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsV0FBVyxFQUFFLHNCQUFzQixFQUFFLENBQUM7S0FDdkM7QUFDSCxDQUFDO21IQXRKVSxzQkFBc0I7dUhBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsUnVsZXMsIEl0ZW1BY3Rpb25UeXBlLCBJdGVtUnVsZXMsIFJ1bGVUeXBlcyB9IGZyb20gJy4vY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlcic7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkUnVsZU1hbmFnZXI8SXRlbT4ge1xuICAjZ2xvYmFsSXRlbVJ1bGVzITogR2xvYmFsUnVsZXM8SXRlbT47XG5cbiAgc2V0R2xvYmFsUnVsZXMoaXRlbVJ1bGVzOiBHbG9iYWxSdWxlczxJdGVtPikge1xuICAgIHRoaXMuI2dsb2JhbEl0ZW1SdWxlcyA9IGl0ZW1SdWxlcztcbiAgfVxuXG4gIGNhblJ1bGU8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0sIEFjdGlvblR5cGUgZXh0ZW5kcyBJdGVtQWN0aW9uVHlwZT4oXG4gICAgaXRlbTogSXRlbSxcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZSxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpO1xuICB9XG5cbiAgY2FuVmFsaWRhdGU8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0sIEFjdGlvblR5cGUgZXh0ZW5kcyBJdGVtQWN0aW9uVHlwZT4oXG4gICAgaXRlbTogSXRlbSxcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZSxcbiAgKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jYW5SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk/LnZhbGlkYXRlO1xuICB9XG5cbiAgY2FuUmVuZGVyPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtLCBBY3Rpb25UeXBlIGV4dGVuZHMgSXRlbUFjdGlvblR5cGU+KFxuICAgIGl0ZW06IEl0ZW0sXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGUsXG4gICkge1xuICAgIHJldHVybiAhIXRoaXMuY2FuUnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpPy5yZW5kZXI7XG4gIH1cblxuICBjYW5EaXNhYmxlPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtLCBBY3Rpb25UeXBlIGV4dGVuZHMgSXRlbUFjdGlvblR5cGU+KFxuICAgIGl0ZW06IEl0ZW0sXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGUsXG4gICkge1xuICAgIHJldHVybiAhIXRoaXMuY2FuUnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpPy5kaXNhYmxlO1xuICB9XG5cbiAgY2FuQWN0aW9uPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtLCBBY3Rpb25UeXBlIGV4dGVuZHMgSXRlbUFjdGlvblR5cGU+KFxuICAgIGl0ZW06IEl0ZW0sXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGUsXG4gICkge1xuICAgIHJldHVybiAhIXRoaXMuY2FuUnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpPy5hY3Rpb247XG4gIH1cblxuICBnZXRBY3Rpb25SdWxlPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtLCBBY3Rpb25UeXBlIGV4dGVuZHMgSXRlbUFjdGlvblR5cGU+KFxuICAgIGl0ZW06IEl0ZW0sXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGUsXG4gICkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuZ2V0UnVsZShpdGVtLCBrZXksIGFjdGlvblR5cGUpPy5hY3Rpb247XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uPy5jb25kID09PSAnZnVuY3Rpb24nICYmIGFjdGlvbi5jb25kKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uPy5jb25kID09PSAnYm9vbGVhbicgJiYgYWN0aW9uLmNvbmQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uPy5jb25kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlSdWxlczxJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbSwgQWN0aW9uVHlwZSBleHRlbmRzIEl0ZW1BY3Rpb25UeXBlPihcbiAgICBpdGVtOiBJdGVtLFxuICAgIGtleTogSXRlbUtleSxcbiAgICBhY3Rpb25UeXBlOiBBY3Rpb25UeXBlLFxuICAgIGZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsLFxuICAgIGluaXRpYWxWYWx1ZTogc3RyaW5nLFxuICApIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5nZXRSdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk7XG4gICAgdGhpcy4jYXBwbHlSdWxlcyhydWxlLCBmb3JtQ29udHJvbCwgaW5pdGlhbFZhbHVlKTtcbiAgfVxuXG4gICNnZXRJdGVtUnVsZXMoaXRlbTogSXRlbSkge1xuICAgIHJldHVybiBnZXRJdGVtUGF5bG9hZChpdGVtKT8ucnVsZXM7XG4gIH1cblxuICAjZ2V0R2xvYmFsUnVsZXM8QWN0aW9uVHlwZSBleHRlbmRzIEl0ZW1BY3Rpb25UeXBlPihhY3Rpb25UeXBlOiBBY3Rpb25UeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuI2dsb2JhbEl0ZW1SdWxlcz8uW2FjdGlvblR5cGVdO1xuICB9XG5cbiAgZ2V0UnVsZTxJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbSwgQWN0aW9uVHlwZSBleHRlbmRzIEl0ZW1BY3Rpb25UeXBlPihcbiAgICBpdGVtOiBJdGVtLFxuICAgIGtleTogSXRlbUtleSxcbiAgICBhY3Rpb25UeXBlOiBBY3Rpb25UeXBlLFxuICApIHtcbiAgICBsZXQgcnVsZXM6IFJ1bGVUeXBlcyA9IHt9O1xuXG4gICAgLy8gaGFzIGdsb2JhbCBvbmUgdXAgKGUuZy4gb3ZlcnJpZGUvLi4vZGlzYWJsZSkgc29tZSBydWxlcz9cbiAgICBjb25zdCBwYXJlbnRHbG9iYWxSdWxlcyA9IHRoaXMuI2dldEdsb2JhbFJ1bGVzKGFjdGlvblR5cGUpIHx8IHt9O1xuICAgIGlmIChwYXJlbnRHbG9iYWxSdWxlcykgcnVsZXMgPSB0aGlzLiNtZXJnZVJ1bGVzKHBhcmVudEdsb2JhbFJ1bGVzLCBydWxlcyk7XG5cbiAgICAvLyBoYXMgZ2xvYmFsIG92ZXJyaWRlIHJ1bGVzP1xuICAgIGNvbnN0IGdsb2JhbE92ZXJyaWRlUnVsZXMgPSB0aGlzLiNnZXRHbG9iYWxSdWxlcyhhY3Rpb25UeXBlKT8ub3ZlcnJpZGVzPy5ba2V5XSB8fCB7fTtcbiAgICBpZiAoZ2xvYmFsT3ZlcnJpZGVSdWxlcykgcnVsZXMgPSB0aGlzLiNtZXJnZVJ1bGVzKGdsb2JhbE92ZXJyaWRlUnVsZXMsIHJ1bGVzKTtcblxuICAgIC8vIGhhcyBpdGVtIG9uZSB1cCAoZS5nLiBvdmVycmlkZS8uLi9kaXNhYmxlKSBzb21lIHJ1bGVzP1xuICAgIGNvbnN0IHBhcmVudEl0ZW1SdWxlcyA9IHRoaXMuI2dldEl0ZW1SdWxlcyhpdGVtKSB8fCB7fTtcbiAgICBpZiAocGFyZW50SXRlbVJ1bGVzKSBydWxlcyA9IHRoaXMuI21lcmdlUnVsZXMocGFyZW50SXRlbVJ1bGVzLCBydWxlcyk7XG5cbiAgICAvLyBoYXMgaXRlbSBvdmVycmlkZSBydWxlcz9cbiAgICBjb25zdCBpdGVtT3ZlcnJpZGVSdWxlcyA9IHRoaXMuI2dldEl0ZW1SdWxlcyhpdGVtKT8ub3ZlcnJpZGVzPy5ba2V5XSB8fCB7fTtcbiAgICBpZiAoaXRlbU92ZXJyaWRlUnVsZXMpIHJ1bGVzID0gdGhpcy4jbWVyZ2VSdWxlcyhpdGVtT3ZlcnJpZGVSdWxlcywgcnVsZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgI21lcmdlUnVsZXMoaW50b1J1bGU6IFJ1bGVUeXBlcywgZnJvbVJ1bGU6IFJ1bGVUeXBlcykge1xuICAgIHJldHVybiB7XG4gICAgICB2YWxpZGF0ZTogaW50b1J1bGUudmFsaWRhdGUgPz8gZnJvbVJ1bGUudmFsaWRhdGUsXG4gICAgICBkaXNhYmxlOiBpbnRvUnVsZS5kaXNhYmxlID8/IGZyb21SdWxlLmRpc2FibGUsXG4gICAgICByZW5kZXI6IGludG9SdWxlLnJlbmRlciA/PyBmcm9tUnVsZS5yZW5kZXIsXG4gICAgICBwbGFjZWhvbGRlcjogaW50b1J1bGUucGxhY2Vob2xkZXIgPz8gZnJvbVJ1bGUucGxhY2Vob2xkZXIsXG4gICAgICBhY3Rpb246IGludG9SdWxlLmFjdGlvbiA/PyBmcm9tUnVsZS5hY3Rpb24sXG4gICAgfTtcbiAgfVxuXG4gICNhcHBseVJ1bGVzKFxuICAgIHJ1bGVzOiBJdGVtUnVsZXM8SXRlbT4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIGZvcm1Db250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBudWxsLFxuICAgIGluaXRpYWxWYWx1ZTogc3RyaW5nLFxuICApIHtcbiAgICBpZiAoZm9ybUNvbnRyb2w/LnZhbHVlICE9PSBpbml0aWFsVmFsdWUpIHtcbiAgICAgIHJ1bGVzPy5yZW5kZXIgPT09IHVuZGVmaW5lZCAmJiBmb3JtQ29udHJvbD8uc2V0VmFsdWUoaW5pdGlhbFZhbHVlKTtcbiAgICAgIHJ1bGVzPy5yZW5kZXIgPT09IHRydWUgJiYgZm9ybUNvbnRyb2w/LnNldFZhbHVlKGluaXRpYWxWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGVzPy5yZW5kZXIgPT09IGZhbHNlICYmIGZvcm1Db250cm9sPy52YWx1ZSAhPT0gJycpIHtcbiAgICAgIGZvcm1Db250cm9sPy5zZXRWYWx1ZSgnJyk7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGVzPy5kaXNhYmxlID09PSB0cnVlICYmICFmb3JtQ29udHJvbD8uZGlzYWJsZWQpIHtcbiAgICAgIGZvcm1Db250cm9sPy5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFydWxlcz8uZGlzYWJsZSAmJiAhZm9ybUNvbnRyb2w/LmVuYWJsZWQpIHtcbiAgICAgIGZvcm1Db250cm9sPy5lbmFibGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1Db250cm9sPy5kaXNhYmxlZCAmJiAocnVsZXM/LnZhbGlkYXRlID09PSBmYWxzZSB8fCBydWxlcz8udmFsaWRhdGUgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgIGZvcm1Db250cm9sPy5zZXRWYWxpZGF0b3JzKFtdKTtcbiAgICAgIGZvcm1Db250cm9sPy5zZXRBc3luY1ZhbGlkYXRvcnMoW10pO1xuICAgICAgZm9ybUNvbnRyb2w/LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==