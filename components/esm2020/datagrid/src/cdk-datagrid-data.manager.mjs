var _CdkDatagridDataManager_instances, _CdkDatagridDataManager_valueChange$, _CdkDatagridDataManager_dataTableSlot, _CdkDatagridDataManager_dataSource, _CdkDatagridDataManager_originalData, _CdkDatagridDataManager_countActionType;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Injectable } from '@angular/core';
import { getItemPayload, setItemPayload } from './cdk-datagrid.utils';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
export const itemPayloadDefault = {
    id: '',
    index: 0,
    active: true,
    groupId: null,
    parent: false,
    collapsed: false,
    selected: false,
    filtered: false,
    actionType: 'row-single',
    rules: null,
};
export var ItemActionIndex;
(function (ItemActionIndex) {
    ItemActionIndex[ItemActionIndex["rowGlobal"] = -99] = "rowGlobal";
    ItemActionIndex[ItemActionIndex["rowGroup"] = -98] = "rowGroup";
    ItemActionIndex[ItemActionIndex["rowSingle"] = -97] = "rowSingle";
    ItemActionIndex[ItemActionIndex["rowSearchReplace"] = -96] = "rowSearchReplace";
})(ItemActionIndex || (ItemActionIndex = {}));
export class CdkDatagridDataManager {
    constructor() {
        _CdkDatagridDataManager_instances.add(this);
        _CdkDatagridDataManager_valueChange$.set(this, new Subject());
        this.valueChange$ = __classPrivateFieldGet(this, _CdkDatagridDataManager_valueChange$, "f").pipe(startWith(null));
        _CdkDatagridDataManager_dataTableSlot.set(this, new Map());
        this.countSingleItems = 0;
        this.countGroupItems = 0;
        _CdkDatagridDataManager_dataSource.set(this, void 0);
        _CdkDatagridDataManager_originalData.set(this, []);
    }
    set dataSource(dataSource) {
        __classPrivateFieldSet(this, _CdkDatagridDataManager_dataSource, dataSource, "f");
        __classPrivateFieldSet(this, _CdkDatagridDataManager_originalData, dataSource.data.map((item, index) => __classPrivateFieldGet(this, _CdkDatagridDataManager_instances, "m", _CdkDatagridDataManager_countActionType).call(this, setItemPayload(item, { index }))), "f");
    }
    get data() {
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f");
    }
    setValueChange(value) {
        __classPrivateFieldGet(this, _CdkDatagridDataManager_valueChange$, "f").next(value);
    }
    splice(start, deleteCount = 0, items) {
        __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").splice(start, deleteCount, ...items);
        __classPrivateFieldSet(this, _CdkDatagridDataManager_originalData, this.cloneItemAll(), "f");
        __classPrivateFieldGet(this, _CdkDatagridDataManager_dataSource, "f").data = __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f");
    }
    delete(item, includeChildren = false) {
        const payload = getItemPayload(item);
        const _index = payload.index;
        const groupId = payload.groupId;
        const parent = payload.parent;
        __classPrivateFieldSet(this, _CdkDatagridDataManager_originalData, __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").filter(item => {
            return ((!parent && getItemPayload(item).index !== _index) ||
                (includeChildren && parent && getItemPayload(item).groupId !== groupId));
        }), "f");
        __classPrivateFieldSet(this, _CdkDatagridDataManager_originalData, this.cloneItemAll(), "f");
        __classPrivateFieldGet(this, _CdkDatagridDataManager_dataSource, "f").data = __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f");
    }
    /**
     * This method is useful when you want to add dynamic a runtime an item to the table.
     */
    addDataSlotItem(itemPayload, item) {
        const { id, actionType, active } = itemPayload;
        if (!id)
            throw new Error('id is required');
        if (!actionType)
            throw new Error('actionType is required');
        let _item = this.getDataTableItem(id);
        if (!_item) {
            _item = setItemPayload(_item ?? (item || {}), itemPayload);
            __classPrivateFieldGet(this, _CdkDatagridDataManager_dataTableSlot, "f").set(id, _item);
        }
        else {
            _item = setItemPayload(_item, { active });
        }
        if (active) {
            __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").splice(0, 0, _item);
        }
        else if (!active) {
            const index = __classPrivateFieldGet(this, _CdkDatagridDataManager_dataSource, "f").data.indexOf(_item);
            __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").splice(index, 1);
        }
        __classPrivateFieldGet(this, _CdkDatagridDataManager_dataSource, "f").data = __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").filter(item => !getItemPayload(item).collapsed || getItemPayload(item).parent);
    }
    getDataTableItem(id) {
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_dataTableSlot, "f").get(id);
    }
    getChildItems(item) {
        const { groupId } = getItemPayload(item);
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").filter(item => {
            const payload = getItemPayload(item);
            return (payload.groupId === groupId &&
                payload.parent === false &&
                payload.actionType === 'row-single');
        });
    }
    getSingleItems() {
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").filter(item => {
            const { actionType } = getItemPayload(item);
            return actionType === 'row-single';
        });
    }
    getParentItem(item) {
        const { groupId } = getItemPayload(item);
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").find(item => {
            const payload = getItemPayload(item);
            return payload.groupId === groupId && payload.parent === true;
        });
    }
    getGroupChildren(groupId) {
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").filter(item => {
            const { groupId: _groupId, parent, actionType } = getItemPayload(item);
            return _groupId === groupId && !parent && actionType === 'row-single';
        });
    }
    setValue(key, value, item, affectedItemsFn) {
        const { actionType, groupId } = getItemPayload(item);
        if (actionType === 'row-single') {
            this.setSingleValue(item, key, value, affectedItemsFn);
        }
        else if (actionType === 'row-group' && typeof groupId === 'number' && groupId >= 0) {
            this.setGroupValues(key, value, groupId, affectedItemsFn);
        }
        else if (actionType === 'row-global') {
            this.setGlobalValues(key, value, affectedItemsFn);
        }
        else {
            throw new Error(`Unknown actionType: "${actionType}" or groupId: "${groupId}"`);
        }
        const valueChange = { key, value, actionType, groupId };
        __classPrivateFieldGet(this, _CdkDatagridDataManager_valueChange$, "f").next(valueChange);
    }
    setItemByKeyValue(item, key, value) {
        if (!Object.getOwnPropertyDescriptor(item, key)) {
            throw new Error(`Invalid key: ${key.toString()} or no default item object is provided`);
        }
        item[key] = value;
    }
    setSingleValue(item, key, value, affectedItems) {
        this.setItemByKeyValue(item, key, value);
        affectedItems?.(getItemPayload(item));
    }
    setGroupValues(key, value, groupId, affectedItems) {
        __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").forEach(item => {
            const itemPayload = getItemPayload(item);
            if (itemPayload.groupId === groupId) {
                this.setItemByKeyValue(item, key, value);
                affectedItems?.(itemPayload);
            }
        });
    }
    setGlobalValues(key, value, affectedItems) {
        __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").forEach(Item => {
            const itemPayload = getItemPayload(Item);
            this.setItemByKeyValue(Item, key, value);
            affectedItems?.(itemPayload);
        });
    }
    toggleGroup(itemPayload) {
        __classPrivateFieldGet(this, _CdkDatagridDataManager_dataSource, "f").data = __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").filter(item => {
            const _item = getItemPayload(item);
            if (itemPayload.groupId === _item.groupId) {
                item = setItemPayload(item, { collapsed: !_item.collapsed });
            }
            return !getItemPayload(item).collapsed || getItemPayload(item).parent;
        });
    }
    getItemByIndex(index) {
        const item = __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f")[index];
        if (!item) {
            throw new Error(`
        Item with index "${index}" not found.
        Hint: update the index value if you have added or removed items!
      `);
        }
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f")[index];
    }
    getParentItemByGroupId(groupId) {
        const item = __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").find(item => {
            const _item = getItemPayload(item);
            return _item.groupId === groupId && _item.parent;
        });
        if (!item) {
            throw new Error(`Item with groupId "${groupId}" not found`);
        }
        return item;
    }
    cloneItemAll(itemPayload = {}) {
        return __classPrivateFieldGet(this, _CdkDatagridDataManager_originalData, "f").map((item, index) => this.cloneItem(item, { ...itemPayload, index }));
    }
    cloneItem(item, itemPayload = {}) {
        const overrides = getItemPayload(item)?.rules?.overrides;
        const keyMaps = new Map();
        if (typeof overrides === 'object') {
            const overridesKeys = Object.keys(overrides);
            overridesKeys.forEach(key => {
                const action = getItemPayload(item)?.rules?.overrides?.[key]?.action;
                // action.componentType
                const component = action?.componentType;
                if (component) {
                    keyMaps.set(key, { ...keyMaps.get(key), component });
                    action.componentType = undefined;
                }
                // action.cond
                const cond = action?.cond;
                if (cond) {
                    keyMaps.set(key, { ...keyMaps.get(key), cond });
                    action.cond = undefined;
                }
                // action.transform
                const transform = action?.transform;
                if (transform) {
                    keyMaps.set(key, { ...keyMaps.get(key), transform });
                    action.transform = undefined;
                }
            });
        }
        item = structuredClone(item);
        keyMaps.forEach((componentType, key) => {
            const action = getItemPayload(item)?.rules?.overrides?.[key]?.action;
            if (action && componentType.component) {
                action.componentType = componentType.component;
            }
            if (action && componentType.cond) {
                action.cond = componentType.cond;
            }
            if (action && componentType.transform) {
                action.transform = componentType.transform;
            }
        });
        return setItemPayload(item, itemPayload);
    }
    destroy() {
        __classPrivateFieldGet(this, _CdkDatagridDataManager_dataSource, "f").data = [];
        __classPrivateFieldSet(this, _CdkDatagridDataManager_originalData, [], "f");
    }
}
_CdkDatagridDataManager_valueChange$ = new WeakMap(), _CdkDatagridDataManager_dataTableSlot = new WeakMap(), _CdkDatagridDataManager_dataSource = new WeakMap(), _CdkDatagridDataManager_originalData = new WeakMap(), _CdkDatagridDataManager_instances = new WeakSet(), _CdkDatagridDataManager_countActionType = function _CdkDatagridDataManager_countActionType(item) {
    const actionType = getItemPayload(item).actionType;
    actionType === 'row-single' ? this.countSingleItems++ : null;
    actionType === 'row-group' ? this.countGroupItems++ : null;
    return item;
};
CdkDatagridDataManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridDataManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CdkDatagridDataManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridDataManager });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridDataManager, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFPM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQXdCO0lBQ3JELEVBQUUsRUFBRSxFQUFFO0lBQ04sS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxJQUFJO0lBQ2IsTUFBTSxFQUFFLEtBQUs7SUFDYixTQUFTLEVBQUUsS0FBSztJQUNoQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxLQUFLO0lBQ2YsVUFBVSxFQUFFLFlBQVk7SUFDeEIsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxDQUFOLElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUN6QixpRUFBZSxDQUFBO0lBQ2YsK0RBQVEsQ0FBQTtJQUNSLGlFQUFTLENBQUE7SUFDVCwrRUFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUErREQsTUFBTSxPQUFPLHNCQUFzQjtJQURuQzs7UUFPRSwrQ0FBeUIsSUFBSSxPQUFPLEVBQXNCLEVBQUM7UUFDbEQsaUJBQVksR0FBRyx1QkFBQSxJQUFJLDRDQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWpFLGdE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ekIsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNuRCxVQUFVLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdELFVBQVUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzttSEFsU1Usc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldEl0ZW1QYXlsb2FkLCBzZXRJdGVtUGF5bG9hZCB9IGZyb20gJy4vY2RrLWRhdGFncmlkLnV0aWxzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBEYXRhZ3JpZFZhbGlkYXRpb24gfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC1mb3JtLWNvbnRyb2wuZGlyZWN0aXZlJztcblxuLy8gTURDXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBjb25zdCBpdGVtUGF5bG9hZERlZmF1bHQ6IEl0ZW1QYXlsb2FkPG9iamVjdD4gPSB7XG4gIGlkOiAnJyxcbiAgaW5kZXg6IDAsXG4gIGFjdGl2ZTogdHJ1ZSxcbiAgZ3JvdXBJZDogbnVsbCxcbiAgcGFyZW50OiBmYWxzZSxcbiAgY29sbGFwc2VkOiBmYWxzZSxcbiAgc2VsZWN0ZWQ6IGZhbHNlLFxuICBmaWx0ZXJlZDogZmFsc2UsXG4gIGFjdGlvblR5cGU6ICdyb3ctc2luZ2xlJyxcbiAgcnVsZXM6IG51bGwsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEhpZGRlbkl0ZW1QYXlsb2FkPEl0ZW0+IHtcbiAgXyRoaWRkZW5JdGVtUGF5bG9hZDogSXRlbVBheWxvYWQ8SXRlbT47XG59XG5cbmV4cG9ydCBlbnVtIEl0ZW1BY3Rpb25JbmRleCB7XG4gIHJvd0dsb2JhbCA9IC05OSxcbiAgcm93R3JvdXAsXG4gIHJvd1NpbmdsZSxcbiAgcm93U2VhcmNoUmVwbGFjZSxcbn1cblxuZXhwb3J0IHR5cGUgSXRlbUFjdGlvblR5cGUgPVxuICB8ICdyb3ctZ2xvYmFsJ1xuICB8ICdyb3ctZ3JvdXAnXG4gIHwgJ3Jvdy1zaW5nbGUnXG4gIHwgJ3Jvdy1zZWFyY2gtcmVwbGFjZSdcbiAgfCAncm93LWZpbHRlcidcbiAgfCAncm93LWVtcHR5JztcblxuZXhwb3J0IGludGVyZmFjZSBSdWxlVHlwZXMge1xuICB2YWxpZGF0ZT86IGJvb2xlYW47XG4gIC8vIEB0b2RvOiBoYXZlIHRvIGJlIGltcGxlbWVudGVkIGluIG9yZGVyIHRvIHBhc3MgdmFsaWRhdGlvbiB3aGlsZSBkYXRhIGFnZ3JlZ2F0aW9uXG4gIHZhbGlkYXRvcnM/OiBEYXRhZ3JpZFZhbGlkYXRpb247XG4gIGRpc2FibGU/OiBib29sZWFuO1xuICByZW5kZXI/OiBib29sZWFuO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgYWN0aW9uPzoge1xuICAgIGNvbXBvbmVudFR5cGU/OiBDb21wb25lbnRUeXBlPHVua25vd24+O1xuICAgIGNvbXBvbmVudFBvc2l0aW9uPzogJ2JlZm9yZScgfCAnYWZ0ZXInIHwgJ292ZXJyaWRlJztcbiAgICBjb25kPzogYm9vbGVhbiB8ICgoKSA9PiBib29sZWFuKTtcbiAgICBkYXRhPzogdW5rbm93bjtcbiAgICB0cmFuc2Zvcm0/OiAoaXRlbTogYW55LCBrZXk6IGFueSwgdmFsdWU6IGFueSkgPT4gYW55O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1SdWxlczxJdGVtPiBleHRlbmRzIFJ1bGVUeXBlcyB7XG4gIG92ZXJyaWRlcz86IHtcbiAgICBbaXRlbUtleXMgaW4ga2V5b2YgSXRlbV0/OiBSdWxlVHlwZXM7XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIEdsb2JhbFJ1bGVzPEl0ZW0sIF9JdGVtQWN0aW9uVHlwZSBleHRlbmRzIEl0ZW1BY3Rpb25UeXBlID0gSXRlbUFjdGlvblR5cGU+ID0ge1xuICBbYWN0aW9uVHlwZSBpbiBfSXRlbUFjdGlvblR5cGVdPzogSXRlbVJ1bGVzPEl0ZW0+O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtUGF5bG9hZDxJdGVtPiB7XG4gIGlkOiBzdHJpbmc7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9haS9uYW5vaWRcbiAgaW5kZXg6IG51bWJlcjtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBwYXJlbnQ6IGJvb2xlYW47XG4gIGNvbGxhcHNlZDogYm9vbGVhbiB8IG51bGw7XG4gIGdyb3VwSWQ6IG51bWJlciB8IG51bGw7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xuICBmaWx0ZXJlZDogYm9vbGVhbjtcbiAgYWN0aW9uVHlwZTogSXRlbUFjdGlvblR5cGU7XG4gIHJ1bGVzOiBJdGVtUnVsZXM8SXRlbT4gfCBudWxsO1xufVxuXG5leHBvcnQgdHlwZSBJdGVtU2xvdElkID0gbnVtYmVyIHwgc3RyaW5nO1xuZXhwb3J0IHR5cGUgX0l0ZW1QYXlsb2FkPEl0ZW0+ID0gSXRlbVBheWxvYWQ8SXRlbT47XG5leHBvcnQgdHlwZSBJdGVtU2xvdDxJdGVtPiA9IE1hcDxJdGVtU2xvdElkLCBJdGVtPjtcbmV4cG9ydCB0eXBlIF9BZmZlY3RlZFBheWxvYWQ8SXRlbT4gPSAocGF5bG9hZDogSXRlbVBheWxvYWQ8SXRlbT4pID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBHcm91cElkID0gSXRlbVBheWxvYWQ8b2JqZWN0PlsnZ3JvdXBJZCddO1xuXG5leHBvcnQgdHlwZSBWYWx1ZUNoYW5nZSA9IHtcbiAga2V5OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGFjdGlvblR5cGU6IEl0ZW1BY3Rpb25UeXBlO1xuICBncm91cElkOiBHcm91cElkO1xufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRGF0YU1hbmFnZXI8XG4gIEl0ZW0sXG4gIEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtID0ga2V5b2YgSXRlbSxcbiAgSXRlbVBheWxvYWQgZXh0ZW5kcyBfSXRlbVBheWxvYWQ8SXRlbT4gPSBfSXRlbVBheWxvYWQ8SXRlbT4sXG4gIEFmZmVjdGVkUGF5bG9hZCBleHRlbmRzIF9BZmZlY3RlZFBheWxvYWQ8SXRlbT4gPSBfQWZmZWN0ZWRQYXlsb2FkPEl0ZW0+LFxuPiB7XG4gIHJlYWRvbmx5ICN2YWx1ZUNoYW5nZSQgPSBuZXcgU3ViamVjdDxWYWx1ZUNoYW5nZSB8IG51bGw+KCk7XG4gIHJlYWRvbmx5IHZhbHVlQ2hhbmdlJCA9IHRoaXMuI3ZhbHVlQ2hhbmdlJC5waXBlKHN0YXJ0V2l0aChudWxsKSk7XG5cbiAgcmVhZG9ubHkgI2RhdGFUYWJsZVNsb3Q6IEl0ZW1TbG90PEl0ZW0gfCBJdGVtUGF5bG9hZD4gPSBuZXcgTWFwPEl0ZW1TbG90SWQsIEl0ZW0+KCk7XG5cbiAgY291bnRTaW5nbGVJdGVtcyA9IDA7XG4gIGNvdW50R3JvdXBJdGVtcyA9IDA7XG5cbiAgI2RhdGFTb3VyY2UhOiBNYXRUYWJsZURhdGFTb3VyY2U8SXRlbT47XG5cbiAgI29yaWdpbmFsRGF0YTogSXRlbVtdID0gW107XG5cbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPEl0ZW0+KSB7XG4gICAgdGhpcy4jZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgdGhpcy4jb3JpZ2luYWxEYXRhID0gZGF0YVNvdXJjZS5kYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+XG4gICAgICB0aGlzLiNjb3VudEFjdGlvblR5cGUoc2V0SXRlbVBheWxvYWQoaXRlbSwgeyBpbmRleCB9KSksXG4gICAgKTtcbiAgfVxuXG4gIGdldCBkYXRhKCk6IEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuI29yaWdpbmFsRGF0YTtcbiAgfVxuXG4gIHNldFZhbHVlQ2hhbmdlKHZhbHVlOiBWYWx1ZUNoYW5nZSB8IG51bGwpIHtcbiAgICB0aGlzLiN2YWx1ZUNoYW5nZSQubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBzcGxpY2Uoc3RhcnQ6IG51bWJlciwgZGVsZXRlQ291bnQgPSAwLCBpdGVtczogSXRlbVtdKSB7XG4gICAgdGhpcy4jb3JpZ2luYWxEYXRhLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIC4uLml0ZW1zKTtcbiAgICB0aGlzLiNvcmlnaW5hbERhdGEgPSB0aGlzLmNsb25lSXRlbUFsbCgpO1xuICAgIHRoaXMuI2RhdGFTb3VyY2UuZGF0YSA9IHRoaXMuI29yaWdpbmFsRGF0YTtcbiAgfVxuXG4gIGRlbGV0ZShpdGVtOiBJdGVtLCBpbmNsdWRlQ2hpbGRyZW4gPSBmYWxzZSkge1xuICAgIGNvbnN0IHBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICBjb25zdCBfaW5kZXggPSBwYXlsb2FkLmluZGV4O1xuICAgIGNvbnN0IGdyb3VwSWQgPSBwYXlsb2FkLmdyb3VwSWQ7XG4gICAgY29uc3QgcGFyZW50ID0gcGF5bG9hZC5wYXJlbnQ7XG5cbiAgICB0aGlzLiNvcmlnaW5hbERhdGEgPSB0aGlzLiNvcmlnaW5hbERhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKCFwYXJlbnQgJiYgZ2V0SXRlbVBheWxvYWQoaXRlbSkuaW5kZXggIT09IF9pbmRleCkgfHxcbiAgICAgICAgKGluY2x1ZGVDaGlsZHJlbiAmJiBwYXJlbnQgJiYgZ2V0SXRlbVBheWxvYWQoaXRlbSkuZ3JvdXBJZCAhPT0gZ3JvdXBJZClcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiNvcmlnaW5hbERhdGEgPSB0aGlzLmNsb25lSXRlbUFsbCgpO1xuICAgIHRoaXMuI2RhdGFTb3VyY2UuZGF0YSA9IHRoaXMuI29yaWdpbmFsRGF0YTtcbiAgfVxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gYWRkIGR5bmFtaWMgYSBydW50aW1lIGFuIGl0ZW0gdG8gdGhlIHRhYmxlLlxuICAgKi9cbiAgYWRkRGF0YVNsb3RJdGVtKGl0ZW1QYXlsb2FkOiBQYXJ0aWFsPEl0ZW1QYXlsb2FkPiwgaXRlbT86IEl0ZW0pIHtcbiAgICBjb25zdCB7IGlkLCBhY3Rpb25UeXBlLCBhY3RpdmUgfSA9IGl0ZW1QYXlsb2FkO1xuXG4gICAgaWYgKCFpZCkgdGhyb3cgbmV3IEVycm9yKCdpZCBpcyByZXF1aXJlZCcpO1xuICAgIGlmICghYWN0aW9uVHlwZSkgdGhyb3cgbmV3IEVycm9yKCdhY3Rpb25UeXBlIGlzIHJlcXVpcmVkJyk7XG5cbiAgICBsZXQgX2l0ZW0gPSB0aGlzLmdldERhdGFUYWJsZUl0ZW0oaWQpO1xuICAgIGlmICghX2l0ZW0pIHtcbiAgICAgIF9pdGVtID0gc2V0SXRlbVBheWxvYWQoX2l0ZW0gPz8gKGl0ZW0gfHwgKHt9IGFzIEl0ZW0pKSwgaXRlbVBheWxvYWQpO1xuICAgICAgdGhpcy4jZGF0YVRhYmxlU2xvdC5zZXQoaWQsIF9pdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2l0ZW0gPSBzZXRJdGVtUGF5bG9hZChfaXRlbSwgeyBhY3RpdmUgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgdGhpcy4jb3JpZ2luYWxEYXRhLnNwbGljZSgwLCAwLCBfaXRlbSk7XG4gICAgfSBlbHNlIGlmICghYWN0aXZlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2RhdGFTb3VyY2UuZGF0YS5pbmRleE9mKF9pdGVtKTtcbiAgICAgIHRoaXMuI29yaWdpbmFsRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHRoaXMuI2RhdGFTb3VyY2UuZGF0YSA9IHRoaXMuI29yaWdpbmFsRGF0YS5maWx0ZXIoXG4gICAgICBpdGVtID0+ICFnZXRJdGVtUGF5bG9hZChpdGVtKS5jb2xsYXBzZWQgfHwgZ2V0SXRlbVBheWxvYWQoaXRlbSkucGFyZW50LFxuICAgICk7XG4gIH1cblxuICBnZXREYXRhVGFibGVJdGVtKGlkOiBJdGVtU2xvdElkKSB7XG4gICAgcmV0dXJuIHRoaXMuI2RhdGFUYWJsZVNsb3QuZ2V0KGlkKSBhcyBJdGVtO1xuICB9XG5cbiAgZ2V0Q2hpbGRJdGVtcyhpdGVtOiBJdGVtKSB7XG4gICAgY29uc3QgeyBncm91cElkIH0gPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICByZXR1cm4gdGhpcy4jb3JpZ2luYWxEYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHBheWxvYWQuZ3JvdXBJZCA9PT0gZ3JvdXBJZCAmJlxuICAgICAgICBwYXlsb2FkLnBhcmVudCA9PT0gZmFsc2UgJiZcbiAgICAgICAgcGF5bG9hZC5hY3Rpb25UeXBlID09PSAncm93LXNpbmdsZSdcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTaW5nbGVJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy4jb3JpZ2luYWxEYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGNvbnN0IHsgYWN0aW9uVHlwZSB9ID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgICByZXR1cm4gYWN0aW9uVHlwZSA9PT0gJ3Jvdy1zaW5nbGUnO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UGFyZW50SXRlbShpdGVtOiBJdGVtKSB7XG4gICAgY29uc3QgeyBncm91cElkIH0gPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICByZXR1cm4gdGhpcy4jb3JpZ2luYWxEYXRhLmZpbmQoaXRlbSA9PiB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgICByZXR1cm4gcGF5bG9hZC5ncm91cElkID09PSBncm91cElkICYmIHBheWxvYWQucGFyZW50ID09PSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0R3JvdXBDaGlsZHJlbihncm91cElkOiBHcm91cElkKSB7XG4gICAgcmV0dXJuIHRoaXMuI29yaWdpbmFsRGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBjb25zdCB7IGdyb3VwSWQ6IF9ncm91cElkLCBwYXJlbnQsIGFjdGlvblR5cGUgfSA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pO1xuICAgICAgcmV0dXJuIF9ncm91cElkID09PSBncm91cElkICYmICFwYXJlbnQgJiYgYWN0aW9uVHlwZSA9PT0gJ3Jvdy1zaW5nbGUnO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWU8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0+KFxuICAgIGtleTogSXRlbUtleSxcbiAgICB2YWx1ZTogSXRlbVtJdGVtS2V5XSxcbiAgICBpdGVtOiBJdGVtLFxuICAgIGFmZmVjdGVkSXRlbXNGbj86IEFmZmVjdGVkUGF5bG9hZCxcbiAgKSB7XG4gICAgY29uc3QgeyBhY3Rpb25UeXBlLCBncm91cElkIH0gPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcblxuICAgIGlmIChhY3Rpb25UeXBlID09PSAncm93LXNpbmdsZScpIHtcbiAgICAgIHRoaXMuc2V0U2luZ2xlVmFsdWUoaXRlbSwga2V5LCB2YWx1ZSwgYWZmZWN0ZWRJdGVtc0ZuKTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdyb3ctZ3JvdXAnICYmIHR5cGVvZiBncm91cElkID09PSAnbnVtYmVyJyAmJiBncm91cElkID49IDApIHtcbiAgICAgIHRoaXMuc2V0R3JvdXBWYWx1ZXMoa2V5LCB2YWx1ZSwgZ3JvdXBJZCwgYWZmZWN0ZWRJdGVtc0ZuKTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvblR5cGUgPT09ICdyb3ctZ2xvYmFsJykge1xuICAgICAgdGhpcy5zZXRHbG9iYWxWYWx1ZXMoa2V5LCB2YWx1ZSwgYWZmZWN0ZWRJdGVtc0ZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvblR5cGU6IFwiJHthY3Rpb25UeXBlfVwiIG9yIGdyb3VwSWQ6IFwiJHtncm91cElkfVwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVDaGFuZ2UgPSB7IGtleSwgdmFsdWUsIGFjdGlvblR5cGUsIGdyb3VwSWQgfSBhcyB1bmtub3duIGFzIFZhbHVlQ2hhbmdlO1xuICAgIHRoaXMuI3ZhbHVlQ2hhbmdlJC5uZXh0KHZhbHVlQ2hhbmdlKTtcbiAgfVxuXG4gIHNldEl0ZW1CeUtleVZhbHVlPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtPihpdGVtOiBJdGVtLCBrZXk6IEl0ZW1LZXksIHZhbHVlOiBJdGVtW0l0ZW1LZXldKSB7XG4gICAgaWYgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0ZW0sIGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBrZXk6ICR7a2V5LnRvU3RyaW5nKCl9IG9yIG5vIGRlZmF1bHQgaXRlbSBvYmplY3QgaXMgcHJvdmlkZWRgKTtcbiAgICB9XG4gICAgaXRlbVtrZXldID0gdmFsdWU7XG4gIH1cbiAgc2V0U2luZ2xlVmFsdWU8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0+KFxuICAgIGl0ZW06IEl0ZW0sXG4gICAga2V5OiBJdGVtS2V5LFxuICAgIHZhbHVlOiBJdGVtW0l0ZW1LZXldLFxuICAgIGFmZmVjdGVkSXRlbXM/OiBBZmZlY3RlZFBheWxvYWQsXG4gICkge1xuICAgIHRoaXMuc2V0SXRlbUJ5S2V5VmFsdWUoaXRlbSwga2V5LCB2YWx1ZSk7XG4gICAgYWZmZWN0ZWRJdGVtcz8uKGdldEl0ZW1QYXlsb2FkKGl0ZW0pKTtcbiAgfVxuXG4gIHNldEdyb3VwVmFsdWVzPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtPihcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgdmFsdWU6IEl0ZW1bSXRlbUtleV0sXG4gICAgZ3JvdXBJZDogR3JvdXBJZCxcbiAgICBhZmZlY3RlZEl0ZW1zPzogQWZmZWN0ZWRQYXlsb2FkLFxuICApIHtcbiAgICB0aGlzLiNvcmlnaW5hbERhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1QYXlsb2FkID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgICBpZiAoaXRlbVBheWxvYWQuZ3JvdXBJZCA9PT0gZ3JvdXBJZCkge1xuICAgICAgICB0aGlzLnNldEl0ZW1CeUtleVZhbHVlKGl0ZW0sIGtleSwgdmFsdWUpO1xuICAgICAgICBhZmZlY3RlZEl0ZW1zPy4oaXRlbVBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0R2xvYmFsVmFsdWVzPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtPihcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgdmFsdWU6IEl0ZW1bSXRlbUtleV0sXG4gICAgYWZmZWN0ZWRJdGVtcz86IEFmZmVjdGVkUGF5bG9hZCxcbiAgKSB7XG4gICAgdGhpcy4jb3JpZ2luYWxEYXRhLmZvckVhY2goSXRlbSA9PiB7XG4gICAgICBjb25zdCBpdGVtUGF5bG9hZCA9IGdldEl0ZW1QYXlsb2FkKEl0ZW0pO1xuICAgICAgdGhpcy5zZXRJdGVtQnlLZXlWYWx1ZShJdGVtLCBrZXksIHZhbHVlKTtcbiAgICAgIGFmZmVjdGVkSXRlbXM/LihpdGVtUGF5bG9hZCk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVHcm91cChpdGVtUGF5bG9hZDogSXRlbVBheWxvYWQpIHtcbiAgICB0aGlzLiNkYXRhU291cmNlLmRhdGEgPSB0aGlzLiNvcmlnaW5hbERhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgX2l0ZW0gPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICAgIGlmIChpdGVtUGF5bG9hZC5ncm91cElkID09PSBfaXRlbS5ncm91cElkKSB7XG4gICAgICAgIGl0ZW0gPSBzZXRJdGVtUGF5bG9hZChpdGVtLCB7IGNvbGxhcHNlZDogIV9pdGVtLmNvbGxhcHNlZCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhZ2V0SXRlbVBheWxvYWQoaXRlbSkuY29sbGFwc2VkIHx8IGdldEl0ZW1QYXlsb2FkKGl0ZW0pLnBhcmVudDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy4jb3JpZ2luYWxEYXRhW2luZGV4XTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgIEl0ZW0gd2l0aCBpbmRleCBcIiR7aW5kZXh9XCIgbm90IGZvdW5kLlxuICAgICAgICBIaW50OiB1cGRhdGUgdGhlIGluZGV4IHZhbHVlIGlmIHlvdSBoYXZlIGFkZGVkIG9yIHJlbW92ZWQgaXRlbXMhXG4gICAgICBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy4jb3JpZ2luYWxEYXRhW2luZGV4XTtcbiAgfVxuXG4gIGdldFBhcmVudEl0ZW1CeUdyb3VwSWQoZ3JvdXBJZDogbnVtYmVyKSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuI29yaWdpbmFsRGF0YS5maW5kKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgX2l0ZW0gPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICAgIHJldHVybiBfaXRlbS5ncm91cElkID09PSBncm91cElkICYmIF9pdGVtLnBhcmVudDtcbiAgICB9KTtcblxuICAgIGlmICghaXRlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJdGVtIHdpdGggZ3JvdXBJZCBcIiR7Z3JvdXBJZH1cIiBub3QgZm91bmRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGNsb25lSXRlbUFsbChpdGVtUGF5bG9hZDogUGFydGlhbDxJdGVtUGF5bG9hZD4gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLiNvcmlnaW5hbERhdGEubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgIHRoaXMuY2xvbmVJdGVtKGl0ZW0sIHsgLi4uaXRlbVBheWxvYWQsIGluZGV4IH0gYXMgUGFydGlhbDxJdGVtUGF5bG9hZD4pLFxuICAgICk7XG4gIH1cblxuICBjbG9uZUl0ZW0oaXRlbTogSXRlbSwgaXRlbVBheWxvYWQ6IFBhcnRpYWw8SXRlbVBheWxvYWQ+ID0ge30pIHtcbiAgICBjb25zdCBvdmVycmlkZXMgPSBnZXRJdGVtUGF5bG9hZChpdGVtKT8ucnVsZXM/Lm92ZXJyaWRlcztcbiAgICBjb25zdCBrZXlNYXBzOiBNYXA8XG4gICAgICBJdGVtS2V5LFxuICAgICAge1xuICAgICAgICBjb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPHVua25vd24+O1xuICAgICAgICBjb25kPzogKCgpID0+IGJvb2xlYW4pIHwgYm9vbGVhbjtcbiAgICAgICAgdHJhbnNmb3JtPzogKGl0ZW06IGFueSwga2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IGFueTtcbiAgICAgIH1cbiAgICA+ID0gbmV3IE1hcCgpO1xuXG4gICAgaWYgKHR5cGVvZiBvdmVycmlkZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBvdmVycmlkZXNLZXlzID0gPEl0ZW1LZXlbXT5PYmplY3Qua2V5cyhvdmVycmlkZXMpO1xuICAgICAgb3ZlcnJpZGVzS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pPy5ydWxlcz8ub3ZlcnJpZGVzPy5ba2V5XT8uYWN0aW9uO1xuXG4gICAgICAgIC8vIGFjdGlvbi5jb21wb25lbnRUeXBlXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGFjdGlvbj8uY29tcG9uZW50VHlwZTtcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgIGtleU1hcHMuc2V0KGtleSwgeyAuLi5rZXlNYXBzLmdldChrZXkpLCBjb21wb25lbnQgfSk7XG4gICAgICAgICAgYWN0aW9uLmNvbXBvbmVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY3Rpb24uY29uZFxuICAgICAgICBjb25zdCBjb25kID0gYWN0aW9uPy5jb25kO1xuICAgICAgICBpZiAoY29uZCkge1xuICAgICAgICAgIGtleU1hcHMuc2V0KGtleSwgeyAuLi5rZXlNYXBzLmdldChrZXkpLCBjb25kIH0pO1xuICAgICAgICAgIGFjdGlvbi5jb25kID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWN0aW9uLnRyYW5zZm9ybVxuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBhY3Rpb24/LnRyYW5zZm9ybTtcbiAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICAgIGtleU1hcHMuc2V0KGtleSwgeyAuLi5rZXlNYXBzLmdldChrZXkpLCB0cmFuc2Zvcm0gfSk7XG4gICAgICAgICAgYWN0aW9uLnRyYW5zZm9ybSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXRlbSA9IHN0cnVjdHVyZWRDbG9uZShpdGVtKTtcblxuICAgIGtleU1hcHMuZm9yRWFjaCgoY29tcG9uZW50VHlwZSwga2V5KSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBnZXRJdGVtUGF5bG9hZChpdGVtKT8ucnVsZXM/Lm92ZXJyaWRlcz8uW2tleV0/LmFjdGlvbjtcbiAgICAgIGlmIChhY3Rpb24gJiYgY29tcG9uZW50VHlwZS5jb21wb25lbnQpIHtcbiAgICAgICAgYWN0aW9uLmNvbXBvbmVudFR5cGUgPSBjb21wb25lbnRUeXBlLmNvbXBvbmVudDtcbiAgICAgIH1cbiAgICAgIGlmIChhY3Rpb24gJiYgY29tcG9uZW50VHlwZS5jb25kKSB7XG4gICAgICAgIGFjdGlvbi5jb25kID0gY29tcG9uZW50VHlwZS5jb25kO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvbiAmJiBjb21wb25lbnRUeXBlLnRyYW5zZm9ybSkge1xuICAgICAgICBhY3Rpb24udHJhbnNmb3JtID0gY29tcG9uZW50VHlwZS50cmFuc2Zvcm07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2V0SXRlbVBheWxvYWQoaXRlbSwgaXRlbVBheWxvYWQpO1xuICB9XG5cbiAgI2NvdW50QWN0aW9uVHlwZShpdGVtOiBJdGVtKSB7XG4gICAgY29uc3QgYWN0aW9uVHlwZSA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pLmFjdGlvblR5cGU7XG4gICAgYWN0aW9uVHlwZSA9PT0gJ3Jvdy1zaW5nbGUnID8gdGhpcy5jb3VudFNpbmdsZUl0ZW1zKysgOiBudWxsO1xuICAgIGFjdGlvblR5cGUgPT09ICdyb3ctZ3JvdXAnID8gdGhpcy5jb3VudEdyb3VwSXRlbXMrKyA6IG51bGw7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuI2RhdGFTb3VyY2UuZGF0YSA9IFtdO1xuICAgIHRoaXMuI29yaWdpbmFsRGF0YSA9IFtdO1xuICB9XG59XG4iXX0=