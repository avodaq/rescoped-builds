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
        if (item[key] === undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWRhdGEubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFPM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQXdCO0lBQ3JELEVBQUUsRUFBRSxFQUFFO0lBQ04sS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxJQUFJO0lBQ2IsTUFBTSxFQUFFLEtBQUs7SUFDYixTQUFTLEVBQUUsS0FBSztJQUNoQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxLQUFLO0lBQ2YsVUFBVSxFQUFFLFlBQVk7SUFDeEIsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxDQUFOLElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUN6QixpRUFBZSxDQUFBO0lBQ2YsK0RBQVEsQ0FBQTtJQUNSLGlFQUFTLENBQUE7SUFDVCwrRUFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUErREQsTUFBTSxPQUFPLHNCQUFzQjtJQURuQzs7UUFPRSwrQ0FBeUIsSUFBSSxPQUFPLEVBQXNCLEVBQUM7UUFDbEQsaUJBQVksR0FBRyx1QkFBQSxJQUFJLDRDQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWpFLGdE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LGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkQsVUFBVSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RCxVQUFVLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7bUhBbFNVLHNCQUFzQjt1SEFBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRJdGVtUGF5bG9hZCwgc2V0SXRlbVBheWxvYWQgfSBmcm9tICcuL2Nkay1kYXRhZ3JpZC51dGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRGF0YWdyaWRWYWxpZGF0aW9uIH0gZnJvbSAnLi9jZGstZGF0YWdyaWQtZm9ybS1jb250cm9sLmRpcmVjdGl2ZSc7XG5cbi8vIE1EQ1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgY29uc3QgaXRlbVBheWxvYWREZWZhdWx0OiBJdGVtUGF5bG9hZDxvYmplY3Q+ID0ge1xuICBpZDogJycsXG4gIGluZGV4OiAwLFxuICBhY3RpdmU6IHRydWUsXG4gIGdyb3VwSWQ6IG51bGwsXG4gIHBhcmVudDogZmFsc2UsXG4gIGNvbGxhcHNlZDogZmFsc2UsXG4gIHNlbGVjdGVkOiBmYWxzZSxcbiAgZmlsdGVyZWQ6IGZhbHNlLFxuICBhY3Rpb25UeXBlOiAncm93LXNpbmdsZScsXG4gIHJ1bGVzOiBudWxsLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBIaWRkZW5JdGVtUGF5bG9hZDxJdGVtPiB7XG4gIF8kaGlkZGVuSXRlbVBheWxvYWQ6IEl0ZW1QYXlsb2FkPEl0ZW0+O1xufVxuXG5leHBvcnQgZW51bSBJdGVtQWN0aW9uSW5kZXgge1xuICByb3dHbG9iYWwgPSAtOTksXG4gIHJvd0dyb3VwLFxuICByb3dTaW5nbGUsXG4gIHJvd1NlYXJjaFJlcGxhY2UsXG59XG5cbmV4cG9ydCB0eXBlIEl0ZW1BY3Rpb25UeXBlID1cbiAgfCAncm93LWdsb2JhbCdcbiAgfCAncm93LWdyb3VwJ1xuICB8ICdyb3ctc2luZ2xlJ1xuICB8ICdyb3ctc2VhcmNoLXJlcGxhY2UnXG4gIHwgJ3Jvdy1maWx0ZXInXG4gIHwgJ3Jvdy1lbXB0eSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVsZVR5cGVzIHtcbiAgdmFsaWRhdGU/OiBib29sZWFuO1xuICAvLyBAdG9kbzogaGF2ZSB0byBiZSBpbXBsZW1lbnRlZCBpbiBvcmRlciB0byBwYXNzIHZhbGlkYXRpb24gd2hpbGUgZGF0YSBhZ2dyZWdhdGlvblxuICB2YWxpZGF0b3JzPzogRGF0YWdyaWRWYWxpZGF0aW9uO1xuICBkaXNhYmxlPzogYm9vbGVhbjtcbiAgcmVuZGVyPzogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGFjdGlvbj86IHtcbiAgICBjb21wb25lbnRUeXBlPzogQ29tcG9uZW50VHlwZTx1bmtub3duPjtcbiAgICBjb21wb25lbnRQb3NpdGlvbj86ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdvdmVycmlkZSc7XG4gICAgY29uZD86IGJvb2xlYW4gfCAoKCkgPT4gYm9vbGVhbik7XG4gICAgZGF0YT86IHVua25vd247XG4gICAgdHJhbnNmb3JtPzogKGl0ZW06IGFueSwga2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IGFueTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJdGVtUnVsZXM8SXRlbT4gZXh0ZW5kcyBSdWxlVHlwZXMge1xuICBvdmVycmlkZXM/OiB7XG4gICAgW2l0ZW1LZXlzIGluIGtleW9mIEl0ZW1dPzogUnVsZVR5cGVzO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBHbG9iYWxSdWxlczxJdGVtLCBfSXRlbUFjdGlvblR5cGUgZXh0ZW5kcyBJdGVtQWN0aW9uVHlwZSA9IEl0ZW1BY3Rpb25UeXBlPiA9IHtcbiAgW2FjdGlvblR5cGUgaW4gX0l0ZW1BY3Rpb25UeXBlXT86IEl0ZW1SdWxlczxJdGVtPjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbVBheWxvYWQ8SXRlbT4ge1xuICBpZDogc3RyaW5nOyAvLyBodHRwczovL2dpdGh1Yi5jb20vYWkvbmFub2lkXG4gIGluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgcGFyZW50OiBib29sZWFuO1xuICBjb2xsYXBzZWQ6IGJvb2xlYW4gfCBudWxsO1xuICBncm91cElkOiBudW1iZXIgfCBudWxsO1xuICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgZmlsdGVyZWQ6IGJvb2xlYW47XG4gIGFjdGlvblR5cGU6IEl0ZW1BY3Rpb25UeXBlO1xuICBydWxlczogSXRlbVJ1bGVzPEl0ZW0+IHwgbnVsbDtcbn1cblxuZXhwb3J0IHR5cGUgSXRlbVNsb3RJZCA9IG51bWJlciB8IHN0cmluZztcbmV4cG9ydCB0eXBlIF9JdGVtUGF5bG9hZDxJdGVtPiA9IEl0ZW1QYXlsb2FkPEl0ZW0+O1xuZXhwb3J0IHR5cGUgSXRlbVNsb3Q8SXRlbT4gPSBNYXA8SXRlbVNsb3RJZCwgSXRlbT47XG5leHBvcnQgdHlwZSBfQWZmZWN0ZWRQYXlsb2FkPEl0ZW0+ID0gKHBheWxvYWQ6IEl0ZW1QYXlsb2FkPEl0ZW0+KSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgR3JvdXBJZCA9IEl0ZW1QYXlsb2FkPG9iamVjdD5bJ2dyb3VwSWQnXTtcblxuZXhwb3J0IHR5cGUgVmFsdWVDaGFuZ2UgPSB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBhY3Rpb25UeXBlOiBJdGVtQWN0aW9uVHlwZTtcbiAgZ3JvdXBJZDogR3JvdXBJZDtcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZERhdGFNYW5hZ2VyPFxuICBJdGVtLFxuICBJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbSA9IGtleW9mIEl0ZW0sXG4gIEl0ZW1QYXlsb2FkIGV4dGVuZHMgX0l0ZW1QYXlsb2FkPEl0ZW0+ID0gX0l0ZW1QYXlsb2FkPEl0ZW0+LFxuICBBZmZlY3RlZFBheWxvYWQgZXh0ZW5kcyBfQWZmZWN0ZWRQYXlsb2FkPEl0ZW0+ID0gX0FmZmVjdGVkUGF5bG9hZDxJdGVtPixcbj4ge1xuICByZWFkb25seSAjdmFsdWVDaGFuZ2UkID0gbmV3IFN1YmplY3Q8VmFsdWVDaGFuZ2UgfCBudWxsPigpO1xuICByZWFkb25seSB2YWx1ZUNoYW5nZSQgPSB0aGlzLiN2YWx1ZUNoYW5nZSQucGlwZShzdGFydFdpdGgobnVsbCkpO1xuXG4gIHJlYWRvbmx5ICNkYXRhVGFibGVTbG90OiBJdGVtU2xvdDxJdGVtIHwgSXRlbVBheWxvYWQ+ID0gbmV3IE1hcDxJdGVtU2xvdElkLCBJdGVtPigpO1xuXG4gIGNvdW50U2luZ2xlSXRlbXMgPSAwO1xuICBjb3VudEdyb3VwSXRlbXMgPSAwO1xuXG4gICNkYXRhU291cmNlITogTWF0VGFibGVEYXRhU291cmNlPEl0ZW0+O1xuXG4gICNvcmlnaW5hbERhdGE6IEl0ZW1bXSA9IFtdO1xuXG4gIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxJdGVtPikge1xuICAgIHRoaXMuI2RhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICAgIHRoaXMuI29yaWdpbmFsRGF0YSA9IGRhdGFTb3VyY2UuZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgdGhpcy4jY291bnRBY3Rpb25UeXBlKHNldEl0ZW1QYXlsb2FkKGl0ZW0sIHsgaW5kZXggfSkpLFxuICAgICk7XG4gIH1cblxuICBnZXQgZGF0YSgpOiBJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLiNvcmlnaW5hbERhdGE7XG4gIH1cblxuICBzZXRWYWx1ZUNoYW5nZSh2YWx1ZTogVmFsdWVDaGFuZ2UgfCBudWxsKSB7XG4gICAgdGhpcy4jdmFsdWVDaGFuZ2UkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgc3BsaWNlKHN0YXJ0OiBudW1iZXIsIGRlbGV0ZUNvdW50ID0gMCwgaXRlbXM6IEl0ZW1bXSkge1xuICAgIHRoaXMuI29yaWdpbmFsRGF0YS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtcyk7XG4gICAgdGhpcy4jb3JpZ2luYWxEYXRhID0gdGhpcy5jbG9uZUl0ZW1BbGwoKTtcbiAgICB0aGlzLiNkYXRhU291cmNlLmRhdGEgPSB0aGlzLiNvcmlnaW5hbERhdGE7XG4gIH1cblxuICBkZWxldGUoaXRlbTogSXRlbSwgaW5jbHVkZUNoaWxkcmVuID0gZmFsc2UpIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgY29uc3QgX2luZGV4ID0gcGF5bG9hZC5pbmRleDtcbiAgICBjb25zdCBncm91cElkID0gcGF5bG9hZC5ncm91cElkO1xuICAgIGNvbnN0IHBhcmVudCA9IHBheWxvYWQucGFyZW50O1xuXG4gICAgdGhpcy4jb3JpZ2luYWxEYXRhID0gdGhpcy4jb3JpZ2luYWxEYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICghcGFyZW50ICYmIGdldEl0ZW1QYXlsb2FkKGl0ZW0pLmluZGV4ICE9PSBfaW5kZXgpIHx8XG4gICAgICAgIChpbmNsdWRlQ2hpbGRyZW4gJiYgcGFyZW50ICYmIGdldEl0ZW1QYXlsb2FkKGl0ZW0pLmdyb3VwSWQgIT09IGdyb3VwSWQpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy4jb3JpZ2luYWxEYXRhID0gdGhpcy5jbG9uZUl0ZW1BbGwoKTtcbiAgICB0aGlzLiNkYXRhU291cmNlLmRhdGEgPSB0aGlzLiNvcmlnaW5hbERhdGE7XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIGFkZCBkeW5hbWljIGEgcnVudGltZSBhbiBpdGVtIHRvIHRoZSB0YWJsZS5cbiAgICovXG4gIGFkZERhdGFTbG90SXRlbShpdGVtUGF5bG9hZDogUGFydGlhbDxJdGVtUGF5bG9hZD4sIGl0ZW0/OiBJdGVtKSB7XG4gICAgY29uc3QgeyBpZCwgYWN0aW9uVHlwZSwgYWN0aXZlIH0gPSBpdGVtUGF5bG9hZDtcblxuICAgIGlmICghaWQpIHRocm93IG5ldyBFcnJvcignaWQgaXMgcmVxdWlyZWQnKTtcbiAgICBpZiAoIWFjdGlvblR5cGUpIHRocm93IG5ldyBFcnJvcignYWN0aW9uVHlwZSBpcyByZXF1aXJlZCcpO1xuXG4gICAgbGV0IF9pdGVtID0gdGhpcy5nZXREYXRhVGFibGVJdGVtKGlkKTtcbiAgICBpZiAoIV9pdGVtKSB7XG4gICAgICBfaXRlbSA9IHNldEl0ZW1QYXlsb2FkKF9pdGVtID8/IChpdGVtIHx8ICh7fSBhcyBJdGVtKSksIGl0ZW1QYXlsb2FkKTtcbiAgICAgIHRoaXMuI2RhdGFUYWJsZVNsb3Quc2V0KGlkLCBfaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9pdGVtID0gc2V0SXRlbVBheWxvYWQoX2l0ZW0sIHsgYWN0aXZlIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHRoaXMuI29yaWdpbmFsRGF0YS5zcGxpY2UoMCwgMCwgX2l0ZW0pO1xuICAgIH0gZWxzZSBpZiAoIWFjdGl2ZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNkYXRhU291cmNlLmRhdGEuaW5kZXhPZihfaXRlbSk7XG4gICAgICB0aGlzLiNvcmlnaW5hbERhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLiNkYXRhU291cmNlLmRhdGEgPSB0aGlzLiNvcmlnaW5hbERhdGEuZmlsdGVyKFxuICAgICAgaXRlbSA9PiAhZ2V0SXRlbVBheWxvYWQoaXRlbSkuY29sbGFwc2VkIHx8IGdldEl0ZW1QYXlsb2FkKGl0ZW0pLnBhcmVudCxcbiAgICApO1xuICB9XG5cbiAgZ2V0RGF0YVRhYmxlSXRlbShpZDogSXRlbVNsb3RJZCkge1xuICAgIHJldHVybiB0aGlzLiNkYXRhVGFibGVTbG90LmdldChpZCkgYXMgSXRlbTtcbiAgfVxuXG4gIGdldENoaWxkSXRlbXMoaXRlbTogSXRlbSkge1xuICAgIGNvbnN0IHsgZ3JvdXBJZCB9ID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMuI29yaWdpbmFsRGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBwYXlsb2FkLmdyb3VwSWQgPT09IGdyb3VwSWQgJiZcbiAgICAgICAgcGF5bG9hZC5wYXJlbnQgPT09IGZhbHNlICYmXG4gICAgICAgIHBheWxvYWQuYWN0aW9uVHlwZSA9PT0gJ3Jvdy1zaW5nbGUnXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2luZ2xlSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI29yaWdpbmFsRGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBjb25zdCB7IGFjdGlvblR5cGUgfSA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pO1xuICAgICAgcmV0dXJuIGFjdGlvblR5cGUgPT09ICdyb3ctc2luZ2xlJztcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBhcmVudEl0ZW0oaXRlbTogSXRlbSkge1xuICAgIGNvbnN0IHsgZ3JvdXBJZCB9ID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG4gICAgcmV0dXJuIHRoaXMuI29yaWdpbmFsRGF0YS5maW5kKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pO1xuICAgICAgcmV0dXJuIHBheWxvYWQuZ3JvdXBJZCA9PT0gZ3JvdXBJZCAmJiBwYXlsb2FkLnBhcmVudCA9PT0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEdyb3VwQ2hpbGRyZW4oZ3JvdXBJZDogR3JvdXBJZCkge1xuICAgIHJldHVybiB0aGlzLiNvcmlnaW5hbERhdGEuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBncm91cElkOiBfZ3JvdXBJZCwgcGFyZW50LCBhY3Rpb25UeXBlIH0gPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICAgIHJldHVybiBfZ3JvdXBJZCA9PT0gZ3JvdXBJZCAmJiAhcGFyZW50ICYmIGFjdGlvblR5cGUgPT09ICdyb3ctc2luZ2xlJztcbiAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlPEl0ZW1LZXkgZXh0ZW5kcyBrZXlvZiBJdGVtPihcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgdmFsdWU6IEl0ZW1bSXRlbUtleV0sXG4gICAgaXRlbTogSXRlbSxcbiAgICBhZmZlY3RlZEl0ZW1zRm4/OiBBZmZlY3RlZFBheWxvYWQsXG4gICkge1xuICAgIGNvbnN0IHsgYWN0aW9uVHlwZSwgZ3JvdXBJZCB9ID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk7XG5cbiAgICBpZiAoYWN0aW9uVHlwZSA9PT0gJ3Jvdy1zaW5nbGUnKSB7XG4gICAgICB0aGlzLnNldFNpbmdsZVZhbHVlKGl0ZW0sIGtleSwgdmFsdWUsIGFmZmVjdGVkSXRlbXNGbik7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAncm93LWdyb3VwJyAmJiB0eXBlb2YgZ3JvdXBJZCA9PT0gJ251bWJlcicgJiYgZ3JvdXBJZCA+PSAwKSB7XG4gICAgICB0aGlzLnNldEdyb3VwVmFsdWVzKGtleSwgdmFsdWUsIGdyb3VwSWQsIGFmZmVjdGVkSXRlbXNGbik7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25UeXBlID09PSAncm93LWdsb2JhbCcpIHtcbiAgICAgIHRoaXMuc2V0R2xvYmFsVmFsdWVzKGtleSwgdmFsdWUsIGFmZmVjdGVkSXRlbXNGbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb25UeXBlOiBcIiR7YWN0aW9uVHlwZX1cIiBvciBncm91cElkOiBcIiR7Z3JvdXBJZH1cImApO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlQ2hhbmdlID0geyBrZXksIHZhbHVlLCBhY3Rpb25UeXBlLCBncm91cElkIH0gYXMgdW5rbm93biBhcyBWYWx1ZUNoYW5nZTtcbiAgICB0aGlzLiN2YWx1ZUNoYW5nZSQubmV4dCh2YWx1ZUNoYW5nZSk7XG4gIH1cblxuICBzZXRJdGVtQnlLZXlWYWx1ZTxJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbT4oaXRlbTogSXRlbSwga2V5OiBJdGVtS2V5LCB2YWx1ZTogSXRlbVtJdGVtS2V5XSkge1xuICAgIGlmIChpdGVtW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGtleTogJHtrZXkudG9TdHJpbmcoKX0gb3Igbm8gZGVmYXVsdCBpdGVtIG9iamVjdCBpcyBwcm92aWRlZGApO1xuICAgIH1cbiAgICBpdGVtW2tleV0gPSB2YWx1ZTtcbiAgfVxuICBzZXRTaW5nbGVWYWx1ZTxJdGVtS2V5IGV4dGVuZHMga2V5b2YgSXRlbT4oXG4gICAgaXRlbTogSXRlbSxcbiAgICBrZXk6IEl0ZW1LZXksXG4gICAgdmFsdWU6IEl0ZW1bSXRlbUtleV0sXG4gICAgYWZmZWN0ZWRJdGVtcz86IEFmZmVjdGVkUGF5bG9hZCxcbiAgKSB7XG4gICAgdGhpcy5zZXRJdGVtQnlLZXlWYWx1ZShpdGVtLCBrZXksIHZhbHVlKTtcbiAgICBhZmZlY3RlZEl0ZW1zPy4oZ2V0SXRlbVBheWxvYWQoaXRlbSkpO1xuICB9XG5cbiAgc2V0R3JvdXBWYWx1ZXM8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0+KFxuICAgIGtleTogSXRlbUtleSxcbiAgICB2YWx1ZTogSXRlbVtJdGVtS2V5XSxcbiAgICBncm91cElkOiBHcm91cElkLFxuICAgIGFmZmVjdGVkSXRlbXM/OiBBZmZlY3RlZFBheWxvYWQsXG4gICkge1xuICAgIHRoaXMuI29yaWdpbmFsRGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgaXRlbVBheWxvYWQgPSBnZXRJdGVtUGF5bG9hZChpdGVtKTtcbiAgICAgIGlmIChpdGVtUGF5bG9hZC5ncm91cElkID09PSBncm91cElkKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbUJ5S2V5VmFsdWUoaXRlbSwga2V5LCB2YWx1ZSk7XG4gICAgICAgIGFmZmVjdGVkSXRlbXM/LihpdGVtUGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRHbG9iYWxWYWx1ZXM8SXRlbUtleSBleHRlbmRzIGtleW9mIEl0ZW0+KFxuICAgIGtleTogSXRlbUtleSxcbiAgICB2YWx1ZTogSXRlbVtJdGVtS2V5XSxcbiAgICBhZmZlY3RlZEl0ZW1zPzogQWZmZWN0ZWRQYXlsb2FkLFxuICApIHtcbiAgICB0aGlzLiNvcmlnaW5hbERhdGEuZm9yRWFjaChJdGVtID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1QYXlsb2FkID0gZ2V0SXRlbVBheWxvYWQoSXRlbSk7XG4gICAgICB0aGlzLnNldEl0ZW1CeUtleVZhbHVlKEl0ZW0sIGtleSwgdmFsdWUpO1xuICAgICAgYWZmZWN0ZWRJdGVtcz8uKGl0ZW1QYXlsb2FkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZUdyb3VwKGl0ZW1QYXlsb2FkOiBJdGVtUGF5bG9hZCkge1xuICAgIHRoaXMuI2RhdGFTb3VyY2UuZGF0YSA9IHRoaXMuI29yaWdpbmFsRGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICBjb25zdCBfaXRlbSA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pO1xuICAgICAgaWYgKGl0ZW1QYXlsb2FkLmdyb3VwSWQgPT09IF9pdGVtLmdyb3VwSWQpIHtcbiAgICAgICAgaXRlbSA9IHNldEl0ZW1QYXlsb2FkKGl0ZW0sIHsgY29sbGFwc2VkOiAhX2l0ZW0uY29sbGFwc2VkIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuICFnZXRJdGVtUGF5bG9hZChpdGVtKS5jb2xsYXBzZWQgfHwgZ2V0SXRlbVBheWxvYWQoaXRlbSkucGFyZW50O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLiNvcmlnaW5hbERhdGFbaW5kZXhdO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgSXRlbSB3aXRoIGluZGV4IFwiJHtpbmRleH1cIiBub3QgZm91bmQuXG4gICAgICAgIEhpbnQ6IHVwZGF0ZSB0aGUgaW5kZXggdmFsdWUgaWYgeW91IGhhdmUgYWRkZWQgb3IgcmVtb3ZlZCBpdGVtcyFcbiAgICAgIGApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLiNvcmlnaW5hbERhdGFbaW5kZXhdO1xuICB9XG5cbiAgZ2V0UGFyZW50SXRlbUJ5R3JvdXBJZChncm91cElkOiBudW1iZXIpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy4jb3JpZ2luYWxEYXRhLmZpbmQoaXRlbSA9PiB7XG4gICAgICBjb25zdCBfaXRlbSA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pO1xuICAgICAgcmV0dXJuIF9pdGVtLmdyb3VwSWQgPT09IGdyb3VwSWQgJiYgX2l0ZW0ucGFyZW50O1xuICAgIH0pO1xuXG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEl0ZW0gd2l0aCBncm91cElkIFwiJHtncm91cElkfVwiIG5vdCBmb3VuZGApO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgY2xvbmVJdGVtQWxsKGl0ZW1QYXlsb2FkOiBQYXJ0aWFsPEl0ZW1QYXlsb2FkPiA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuI29yaWdpbmFsRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgdGhpcy5jbG9uZUl0ZW0oaXRlbSwgeyAuLi5pdGVtUGF5bG9hZCwgaW5kZXggfSBhcyBQYXJ0aWFsPEl0ZW1QYXlsb2FkPiksXG4gICAgKTtcbiAgfVxuXG4gIGNsb25lSXRlbShpdGVtOiBJdGVtLCBpdGVtUGF5bG9hZDogUGFydGlhbDxJdGVtUGF5bG9hZD4gPSB7fSkge1xuICAgIGNvbnN0IG92ZXJyaWRlcyA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pPy5ydWxlcz8ub3ZlcnJpZGVzO1xuICAgIGNvbnN0IGtleU1hcHM6IE1hcDxcbiAgICAgIEl0ZW1LZXksXG4gICAgICB7XG4gICAgICAgIGNvbXBvbmVudD86IENvbXBvbmVudFR5cGU8dW5rbm93bj47XG4gICAgICAgIGNvbmQ/OiAoKCkgPT4gYm9vbGVhbikgfCBib29sZWFuO1xuICAgICAgICB0cmFuc2Zvcm0/OiAoaXRlbTogYW55LCBrZXk6IGFueSwgdmFsdWU6IGFueSkgPT4gYW55O1xuICAgICAgfVxuICAgID4gPSBuZXcgTWFwKCk7XG5cbiAgICBpZiAodHlwZW9mIG92ZXJyaWRlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IG92ZXJyaWRlc0tleXMgPSA8SXRlbUtleVtdPk9iamVjdC5rZXlzKG92ZXJyaWRlcyk7XG4gICAgICBvdmVycmlkZXNLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZ2V0SXRlbVBheWxvYWQoaXRlbSk/LnJ1bGVzPy5vdmVycmlkZXM/LltrZXldPy5hY3Rpb247XG5cbiAgICAgICAgLy8gYWN0aW9uLmNvbXBvbmVudFR5cGVcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gYWN0aW9uPy5jb21wb25lbnRUeXBlO1xuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAga2V5TWFwcy5zZXQoa2V5LCB7IC4uLmtleU1hcHMuZ2V0KGtleSksIGNvbXBvbmVudCB9KTtcbiAgICAgICAgICBhY3Rpb24uY29tcG9uZW50VHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFjdGlvbi5jb25kXG4gICAgICAgIGNvbnN0IGNvbmQgPSBhY3Rpb24/LmNvbmQ7XG4gICAgICAgIGlmIChjb25kKSB7XG4gICAgICAgICAga2V5TWFwcy5zZXQoa2V5LCB7IC4uLmtleU1hcHMuZ2V0KGtleSksIGNvbmQgfSk7XG4gICAgICAgICAgYWN0aW9uLmNvbmQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY3Rpb24udHJhbnNmb3JtXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGFjdGlvbj8udHJhbnNmb3JtO1xuICAgICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgICAga2V5TWFwcy5zZXQoa2V5LCB7IC4uLmtleU1hcHMuZ2V0KGtleSksIHRyYW5zZm9ybSB9KTtcbiAgICAgICAgICBhY3Rpb24udHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpdGVtID0gc3RydWN0dXJlZENsb25lKGl0ZW0pO1xuXG4gICAga2V5TWFwcy5mb3JFYWNoKChjb21wb25lbnRUeXBlLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGdldEl0ZW1QYXlsb2FkKGl0ZW0pPy5ydWxlcz8ub3ZlcnJpZGVzPy5ba2V5XT8uYWN0aW9uO1xuICAgICAgaWYgKGFjdGlvbiAmJiBjb21wb25lbnRUeXBlLmNvbXBvbmVudCkge1xuICAgICAgICBhY3Rpb24uY29tcG9uZW50VHlwZSA9IGNvbXBvbmVudFR5cGUuY29tcG9uZW50O1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvbiAmJiBjb21wb25lbnRUeXBlLmNvbmQpIHtcbiAgICAgICAgYWN0aW9uLmNvbmQgPSBjb21wb25lbnRUeXBlLmNvbmQ7XG4gICAgICB9XG4gICAgICBpZiAoYWN0aW9uICYmIGNvbXBvbmVudFR5cGUudHJhbnNmb3JtKSB7XG4gICAgICAgIGFjdGlvbi50cmFuc2Zvcm0gPSBjb21wb25lbnRUeXBlLnRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzZXRJdGVtUGF5bG9hZChpdGVtLCBpdGVtUGF5bG9hZCk7XG4gIH1cblxuICAjY291bnRBY3Rpb25UeXBlKGl0ZW06IEl0ZW0pIHtcbiAgICBjb25zdCBhY3Rpb25UeXBlID0gZ2V0SXRlbVBheWxvYWQoaXRlbSkuYWN0aW9uVHlwZTtcbiAgICBhY3Rpb25UeXBlID09PSAncm93LXNpbmdsZScgPyB0aGlzLmNvdW50U2luZ2xlSXRlbXMrKyA6IG51bGw7XG4gICAgYWN0aW9uVHlwZSA9PT0gJ3Jvdy1ncm91cCcgPyB0aGlzLmNvdW50R3JvdXBJdGVtcysrIDogbnVsbDtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy4jZGF0YVNvdXJjZS5kYXRhID0gW107XG4gICAgdGhpcy4jb3JpZ2luYWxEYXRhID0gW107XG4gIH1cbn1cbiJdfQ==