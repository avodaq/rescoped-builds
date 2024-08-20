import { Injectable } from '@angular/core';
import { getItemPayload } from './cdk-datagrid.utils';
import * as i0 from "@angular/core";
export class CdkDatagridRuleManager {
    #globalItemRules;
    setGlobalRules(itemRules) {
        this.#globalItemRules = itemRules;
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
        this.#applyRules(rule, formControl, initialValue);
    }
    #getItemRules(item) {
        return getItemPayload(item)?.rules;
    }
    #getGlobalRules(actionType) {
        return this.#globalItemRules?.[actionType];
    }
    getRule(item, key, actionType) {
        let rules = {};
        // has global one up (e.g. override/../disable) some rules?
        const parentGlobalRules = this.#getGlobalRules(actionType) || {};
        if (parentGlobalRules)
            rules = this.#mergeRules(parentGlobalRules, rules);
        // has global override rules?
        const globalOverrideRules = this.#getGlobalRules(actionType)?.overrides?.[key] || {};
        if (globalOverrideRules)
            rules = this.#mergeRules(globalOverrideRules, rules);
        // has item one up (e.g. override/../disable) some rules?
        const parentItemRules = this.#getItemRules(item) || {};
        if (parentItemRules)
            rules = this.#mergeRules(parentItemRules, rules);
        // has item override rules?
        const itemOverrideRules = this.#getItemRules(item)?.overrides?.[key] || {};
        if (itemOverrideRules)
            rules = this.#mergeRules(itemOverrideRules, rules);
        return rules;
    }
    #mergeRules(intoRule, fromRule) {
        return {
            validate: intoRule.validate ?? fromRule.validate,
            disable: intoRule.disable ?? fromRule.disable,
            render: intoRule.render ?? fromRule.render,
            placeholder: intoRule.placeholder ?? fromRule.placeholder,
            action: intoRule.action ?? fromRule.action,
        };
    }
    #applyRules(rules, formControl, initialValue) {
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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridRuleManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridRuleManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridRuleManager, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLXJ1bGUubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFJdEQsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxnQkFBZ0IsQ0FBcUI7SUFFckMsY0FBYyxDQUFDLFNBQTRCO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVELE9BQU8sQ0FDTCxJQUFVLEVBQ1YsR0FBWSxFQUNaLFVBQXNCO1FBRXRCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLENBQ1QsSUFBVSxFQUNWLEdBQVksRUFDWixVQUFzQjtRQUV0QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDO0lBQ3pELENBQUM7SUFFRCxTQUFTLENBQ1AsSUFBVSxFQUNWLEdBQVksRUFDWixVQUFzQjtRQUV0QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxVQUFVLENBQ1IsSUFBVSxFQUNWLEdBQVksRUFDWixVQUFzQjtRQUV0QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUUsT0FBTyxDQUFDO0lBQ3hELENBQUM7SUFFRCxTQUFTLENBQ1AsSUFBVSxFQUNWLEdBQVksRUFDWixVQUFzQjtRQUV0QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxhQUFhLENBQ1gsSUFBVSxFQUNWLEdBQVksRUFDWixVQUFzQjtRQUV0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELElBQUksT0FBTyxNQUFNLEVBQUUsSUFBSSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDakUsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQzthQUFNLElBQUksT0FBTyxNQUFNLEVBQUUsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3JFLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7YUFBTSxJQUFJLE9BQU8sTUFBTSxFQUFFLElBQUksS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUMvQyxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxVQUFVLENBQ1IsSUFBVSxFQUNWLEdBQVksRUFDWixVQUFzQixFQUN0QixXQUFtQyxFQUNuQyxZQUFvQjtRQUVwQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxhQUFhLENBQUMsSUFBVTtRQUN0QixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWUsQ0FBb0MsVUFBc0I7UUFDdkUsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsT0FBTyxDQUNMLElBQVUsRUFDVixHQUFZLEVBQ1osVUFBc0I7UUFFdEIsSUFBSSxLQUFLLEdBQWMsRUFBRSxDQUFDO1FBRTFCLDJEQUEyRDtRQUMzRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pFLElBQUksaUJBQWlCO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFMUUsNkJBQTZCO1FBQzdCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckYsSUFBSSxtQkFBbUI7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU5RSx5REFBeUQ7UUFDekQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkQsSUFBSSxlQUFlO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRFLDJCQUEyQjtRQUMzQixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNFLElBQUksaUJBQWlCO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFMUUsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQW1CLEVBQUUsUUFBbUI7UUFDbEQsT0FBTztZQUNMLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRO1lBQ2hELE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPO1lBQzdDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNO1lBQzFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxXQUFXO1lBQ3pELE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNO1NBQzNDLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUNULEtBQXlDLEVBQ3pDLFdBQW1DLEVBQ25DLFlBQW9CO1FBRXBCLElBQUksV0FBVyxFQUFFLEtBQUssS0FBSyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxLQUFLLEVBQUUsTUFBTSxLQUFLLFNBQVMsSUFBSSxXQUFXLEVBQUUsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25FLEtBQUssRUFBRSxNQUFNLEtBQUssSUFBSSxJQUFJLFdBQVcsRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVELElBQUksS0FBSyxFQUFFLE1BQU0sS0FBSyxLQUFLLElBQUksV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUN6RCxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRCxJQUFJLEtBQUssRUFBRSxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQ3RELFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDN0MsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssRUFBRSxRQUFRLEtBQUssU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUMzRixXQUFXLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQyxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQzs4R0F0SlUsc0JBQXNCO2tIQUF0QixzQkFBc0I7OzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxSdWxlcywgSXRlbUFjdGlvblR5cGUsIEl0ZW1SdWxlcywgUnVsZVR5cGVzIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZGF0YS5tYW5hZ2VyJztcbmltcG9ydCB7IGdldEl0ZW1QYXlsb2FkIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQudXRpbHMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2RrRGF0YWdyaWRSdWxlTWFuYWdlcjxJdGVtPiB7XG4gICNnbG9iYWxJdGVtUnVsZXMhOiBHbG9iYWxSdWxlczxJdGVtPjtcblxuICBzZXRHbG9iYWxSdWxlcyhpdGVtUnVsZXM6IEdsb2JhbFJ1bGVzPEl0ZW0+KSB7XG4gICAgdGhpcy4jZ2xvYmFsSXRlbVJ1bGVzID0gaXRlbVJ1bGVzO1xuICB9XG5cbiAgY2FuUnVsZTxJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbSwgQWN0aW9uVHlwZSBleHRlbmRzIEl0ZW1BY3Rpb25UeXBlPihcbiAgICBpdGVtOiBJdGVtLFxuICAgIGtleTogSXRlbUtleSxcbiAgICBhY3Rpb25UeXBlOiBBY3Rpb25UeXBlLFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk7XG4gIH1cblxuICBjYW5WYWxpZGF0ZTxJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbSwgQWN0aW9uVHlwZSBleHRlbmRzIEl0ZW1BY3Rpb25UeXBlPihcbiAgICBpdGVtOiBJdGVtLFxuICAgIGtleTogSXRlbUtleSxcbiAgICBhY3Rpb25UeXBlOiBBY3Rpb25UeXBlLFxuICApIHtcbiAgICByZXR1cm4gISF0aGlzLmNhblJ1bGUoaXRlbSwga2V5LCBhY3Rpb25UeXBlKT8udmFsaWRhdGU7XG4gIH1cblxuICBjYW5SZW5kZXI8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0sIEFjdGlvblR5cGUgZXh0ZW5kcyBJdGVtQWN0aW9uVHlwZT4oXG4gICAgaXRlbTogSXRlbSxcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZSxcbiAgKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jYW5SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk/LnJlbmRlcjtcbiAgfVxuXG4gIGNhbkRpc2FibGU8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0sIEFjdGlvblR5cGUgZXh0ZW5kcyBJdGVtQWN0aW9uVHlwZT4oXG4gICAgaXRlbTogSXRlbSxcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZSxcbiAgKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jYW5SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk/LmRpc2FibGU7XG4gIH1cblxuICBjYW5BY3Rpb248SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0sIEFjdGlvblR5cGUgZXh0ZW5kcyBJdGVtQWN0aW9uVHlwZT4oXG4gICAgaXRlbTogSXRlbSxcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZSxcbiAgKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jYW5SdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk/LmFjdGlvbjtcbiAgfVxuXG4gIGdldEFjdGlvblJ1bGU8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0sIEFjdGlvblR5cGUgZXh0ZW5kcyBJdGVtQWN0aW9uVHlwZT4oXG4gICAgaXRlbTogSXRlbSxcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgYWN0aW9uVHlwZTogQWN0aW9uVHlwZSxcbiAgKSB7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5nZXRSdWxlKGl0ZW0sIGtleSwgYWN0aW9uVHlwZSk/LmFjdGlvbjtcbiAgICBpZiAoIWFjdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24/LmNvbmQgPT09ICdmdW5jdGlvbicgJiYgYWN0aW9uLmNvbmQoKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24/LmNvbmQgPT09ICdib29sZWFuJyAmJiBhY3Rpb24uY29uZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24/LmNvbmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBhcHBseVJ1bGVzPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtLCBBY3Rpb25UeXBlIGV4dGVuZHMgSXRlbUFjdGlvblR5cGU+KFxuICAgIGl0ZW06IEl0ZW0sXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGUsXG4gICAgZm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwsXG4gICAgaW5pdGlhbFZhbHVlOiBzdHJpbmcsXG4gICkge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdldFJ1bGUoaXRlbSwga2V5LCBhY3Rpb25UeXBlKTtcbiAgICB0aGlzLiNhcHBseVJ1bGVzKHJ1bGUsIGZvcm1Db250cm9sLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgI2dldEl0ZW1SdWxlcyhpdGVtOiBJdGVtKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1QYXlsb2FkKGl0ZW0pPy5ydWxlcztcbiAgfVxuXG4gICNnZXRHbG9iYWxSdWxlczxBY3Rpb25UeXBlIGV4dGVuZHMgSXRlbUFjdGlvblR5cGU+KGFjdGlvblR5cGU6IEFjdGlvblR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy4jZ2xvYmFsSXRlbVJ1bGVzPy5bYWN0aW9uVHlwZV07XG4gIH1cblxuICBnZXRSdWxlPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtLCBBY3Rpb25UeXBlIGV4dGVuZHMgSXRlbUFjdGlvblR5cGU+KFxuICAgIGl0ZW06IEl0ZW0sXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIGFjdGlvblR5cGU6IEFjdGlvblR5cGUsXG4gICkge1xuICAgIGxldCBydWxlczogUnVsZVR5cGVzID0ge307XG5cbiAgICAvLyBoYXMgZ2xvYmFsIG9uZSB1cCAoZS5nLiBvdmVycmlkZS8uLi9kaXNhYmxlKSBzb21lIHJ1bGVzP1xuICAgIGNvbnN0IHBhcmVudEdsb2JhbFJ1bGVzID0gdGhpcy4jZ2V0R2xvYmFsUnVsZXMoYWN0aW9uVHlwZSkgfHwge307XG4gICAgaWYgKHBhcmVudEdsb2JhbFJ1bGVzKSBydWxlcyA9IHRoaXMuI21lcmdlUnVsZXMocGFyZW50R2xvYmFsUnVsZXMsIHJ1bGVzKTtcblxuICAgIC8vIGhhcyBnbG9iYWwgb3ZlcnJpZGUgcnVsZXM/XG4gICAgY29uc3QgZ2xvYmFsT3ZlcnJpZGVSdWxlcyA9IHRoaXMuI2dldEdsb2JhbFJ1bGVzKGFjdGlvblR5cGUpPy5vdmVycmlkZXM/LltrZXldIHx8IHt9O1xuICAgIGlmIChnbG9iYWxPdmVycmlkZVJ1bGVzKSBydWxlcyA9IHRoaXMuI21lcmdlUnVsZXMoZ2xvYmFsT3ZlcnJpZGVSdWxlcywgcnVsZXMpO1xuXG4gICAgLy8gaGFzIGl0ZW0gb25lIHVwIChlLmcuIG92ZXJyaWRlLy4uL2Rpc2FibGUpIHNvbWUgcnVsZXM/XG4gICAgY29uc3QgcGFyZW50SXRlbVJ1bGVzID0gdGhpcy4jZ2V0SXRlbVJ1bGVzKGl0ZW0pIHx8IHt9O1xuICAgIGlmIChwYXJlbnRJdGVtUnVsZXMpIHJ1bGVzID0gdGhpcy4jbWVyZ2VSdWxlcyhwYXJlbnRJdGVtUnVsZXMsIHJ1bGVzKTtcblxuICAgIC8vIGhhcyBpdGVtIG92ZXJyaWRlIHJ1bGVzP1xuICAgIGNvbnN0IGl0ZW1PdmVycmlkZVJ1bGVzID0gdGhpcy4jZ2V0SXRlbVJ1bGVzKGl0ZW0pPy5vdmVycmlkZXM/LltrZXldIHx8IHt9O1xuICAgIGlmIChpdGVtT3ZlcnJpZGVSdWxlcykgcnVsZXMgPSB0aGlzLiNtZXJnZVJ1bGVzKGl0ZW1PdmVycmlkZVJ1bGVzLCBydWxlcyk7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICAjbWVyZ2VSdWxlcyhpbnRvUnVsZTogUnVsZVR5cGVzLCBmcm9tUnVsZTogUnVsZVR5cGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkYXRlOiBpbnRvUnVsZS52YWxpZGF0ZSA/PyBmcm9tUnVsZS52YWxpZGF0ZSxcbiAgICAgIGRpc2FibGU6IGludG9SdWxlLmRpc2FibGUgPz8gZnJvbVJ1bGUuZGlzYWJsZSxcbiAgICAgIHJlbmRlcjogaW50b1J1bGUucmVuZGVyID8/IGZyb21SdWxlLnJlbmRlcixcbiAgICAgIHBsYWNlaG9sZGVyOiBpbnRvUnVsZS5wbGFjZWhvbGRlciA/PyBmcm9tUnVsZS5wbGFjZWhvbGRlcixcbiAgICAgIGFjdGlvbjogaW50b1J1bGUuYWN0aW9uID8/IGZyb21SdWxlLmFjdGlvbixcbiAgICB9O1xuICB9XG5cbiAgI2FwcGx5UnVsZXMoXG4gICAgcnVsZXM6IEl0ZW1SdWxlczxJdGVtPiB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgZm9ybUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwsXG4gICAgaW5pdGlhbFZhbHVlOiBzdHJpbmcsXG4gICkge1xuICAgIGlmIChmb3JtQ29udHJvbD8udmFsdWUgIT09IGluaXRpYWxWYWx1ZSkge1xuICAgICAgcnVsZXM/LnJlbmRlciA9PT0gdW5kZWZpbmVkICYmIGZvcm1Db250cm9sPy5zZXRWYWx1ZShpbml0aWFsVmFsdWUpO1xuICAgICAgcnVsZXM/LnJlbmRlciA9PT0gdHJ1ZSAmJiBmb3JtQ29udHJvbD8uc2V0VmFsdWUoaW5pdGlhbFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAocnVsZXM/LnJlbmRlciA9PT0gZmFsc2UgJiYgZm9ybUNvbnRyb2w/LnZhbHVlICE9PSAnJykge1xuICAgICAgZm9ybUNvbnRyb2w/LnNldFZhbHVlKCcnKTtcbiAgICB9XG5cbiAgICBpZiAocnVsZXM/LmRpc2FibGUgPT09IHRydWUgJiYgIWZvcm1Db250cm9sPy5kaXNhYmxlZCkge1xuICAgICAgZm9ybUNvbnRyb2w/LmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXJ1bGVzPy5kaXNhYmxlICYmICFmb3JtQ29udHJvbD8uZW5hYmxlZCkge1xuICAgICAgZm9ybUNvbnRyb2w/LmVuYWJsZSgpO1xuICAgIH1cblxuICAgIGlmICghZm9ybUNvbnRyb2w/LmRpc2FibGVkICYmIChydWxlcz8udmFsaWRhdGUgPT09IGZhbHNlIHx8IHJ1bGVzPy52YWxpZGF0ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgZm9ybUNvbnRyb2w/LnNldFZhbGlkYXRvcnMoW10pO1xuICAgICAgZm9ybUNvbnRyb2w/LnNldEFzeW5jVmFsaWRhdG9ycyhbXSk7XG4gICAgICBmb3JtQ29udHJvbD8udXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxufVxuIl19