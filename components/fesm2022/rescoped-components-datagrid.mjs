import * as i0 from '@angular/core';
import { Injectable, Directive, Input, Self, Inject, HostBinding, InjectionToken, EventEmitter, Injector, Component, ViewEncapsulation, ChangeDetectionStrategy, Output, makeEnvironmentProviders, importProvidersFrom, LOCALE_ID, HostListener } from '@angular/core';
import { Subject, BehaviorSubject, merge, of } from 'rxjs';
import * as i1 from '@angular/forms';
import { Validators as Validators$1, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, take, startWith, tap, takeUntil, debounceTime, mergeMap } from 'rxjs/operators';
import { providerTokenFactory } from '@rescoped/provider/factory';
import * as i2$1 from '@angular/cdk/portal';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import * as i2 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i5 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgClass, AsyncPipe, NgIf } from '@angular/common';
import * as i1$1 from '@angular/material/core';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import deepmerge from 'deepmerge';
import moment from 'moment';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i6$1 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i8 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i7 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

function batchValidatorFactory(validations, field, index) {
    return () => validations.pipe(map(validations => validations?.find(validation => {
        return validation.field === field && validation.index === index;
    })), map(validation => (validation ? validation : null)), take(1));
}

const defaultValidationError = {
    validationMessage: 'unknown error',
    validationCode: 'DEFAULT_UNKNOWN_ERROR',
};
const mergeValidationErrors = (validationError1, validationError2 = defaultValidationError) => {
    return validationError1 ? { ...validationError1, ...validationError2 } : validationError1;
};
class Validators {
    static min(min, validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.min(min)(control), validationError);
    }
    static max(max, validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.max(max)(control), validationError);
    }
    static required(validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.required(control), validationError);
    }
    static requiredTrue(validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.requiredTrue(control), validationError);
    }
    static email(validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.email(control), validationError);
    }
    static minLength(minLength, validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.minLength(minLength)(control), validationError);
    }
    static maxLength(maxLength, validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.maxLength(maxLength)(control), validationError);
    }
    static pattern(pattern, validationError = {}) {
        return (control) => mergeValidationErrors(Validators$1.pattern(pattern)(control), validationError);
    }
    static nullValidator() {
        return (control) => mergeValidationErrors(Validators$1.nullValidator(control), {});
    }
    static nullAsyncValidator() {
        return _control => {
            return new Promise(resolve => {
                resolve(null);
                // null validators does nothing!
                // so no control handling needed!
                // control.updateValueAndValidity();
            });
        };
    }
}

const itemPayloadDefault = {
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
var ItemActionIndex;
(function (ItemActionIndex) {
    ItemActionIndex[ItemActionIndex["rowGlobal"] = -99] = "rowGlobal";
    ItemActionIndex[ItemActionIndex["rowGroup"] = -98] = "rowGroup";
    ItemActionIndex[ItemActionIndex["rowSingle"] = -97] = "rowSingle";
    ItemActionIndex[ItemActionIndex["rowSearchReplace"] = -96] = "rowSearchReplace";
})(ItemActionIndex || (ItemActionIndex = {}));
class CdkDatagridDataManager {
    constructor() {
        this.#valueChange$ = new Subject();
        this.valueChange$ = this.#valueChange$.pipe(startWith(null));
        this.#dataTableSlot = new Map();
        this.countSingleItems = 0;
        this.countGroupItems = 0;
        this.#originalData = [];
    }
    #valueChange$;
    #dataTableSlot;
    #dataSource;
    #originalData;
    set dataSource(dataSource) {
        this.#dataSource = dataSource;
        this.#originalData = dataSource.data.map((item, index) => this.#countActionType(setItemPayload(item, { index })));
    }
    get data() {
        return this.#originalData;
    }
    setValueChange(value) {
        this.#valueChange$.next(value);
    }
    splice(start, deleteCount = 0, items) {
        this.#originalData.splice(start, deleteCount, ...items);
        this.#originalData = this.cloneItemAll();
        this.#dataSource.data = this.#originalData;
    }
    delete(item, includeChildren = false) {
        const payload = getItemPayload(item);
        const _index = payload.index;
        const groupId = payload.groupId;
        const parent = payload.parent;
        this.#originalData = this.#originalData.filter(item => {
            const toNotDeleteItem = (!parent && getItemPayload(item).index !== _index) ||
                (includeChildren && parent && getItemPayload(item).groupId !== groupId);
            if (!toNotDeleteItem && typeof getItemPayload(item).groupId !== 'number') {
                console.error('ItemPayload.groupId is missing when includeChildren on', item);
                throw new Error('ItemPayload.groupId is required and must be a number!');
            }
            return toNotDeleteItem;
        });
        this.#originalData = this.cloneItemAll();
        this.#dataSource.data = this.#originalData;
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
            this.#dataTableSlot.set(id, _item);
        }
        else {
            _item = setItemPayload(_item, { active });
        }
        if (active) {
            this.#originalData.splice(0, 0, _item);
        }
        else if (!active) {
            const index = this.#dataSource.data.indexOf(_item);
            this.#originalData.splice(index, 1);
        }
        this.#dataSource.data = this.#originalData.filter(item => !getItemPayload(item).collapsed || getItemPayload(item).parent);
    }
    getDataTableItem(id) {
        return this.#dataTableSlot.get(id);
    }
    getChildItems(item) {
        const { groupId } = getItemPayload(item);
        return this.#originalData.filter(item => {
            const payload = getItemPayload(item);
            return (payload.groupId === groupId &&
                payload.parent === false &&
                payload.actionType === 'row-single');
        });
    }
    getSingleItems() {
        return this.#originalData.filter(item => {
            const { actionType } = getItemPayload(item);
            return actionType === 'row-single';
        });
    }
    getParentItem(item) {
        const { groupId } = getItemPayload(item);
        return this.#originalData.find(item => {
            const payload = getItemPayload(item);
            return payload.groupId === groupId && payload.parent === true;
        });
    }
    getGroupChildren(groupId) {
        return this.#originalData.filter(item => {
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
        this.#valueChange$.next(valueChange);
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
        this.#originalData.forEach(item => {
            const itemPayload = getItemPayload(item);
            if (itemPayload.groupId === groupId) {
                this.setItemByKeyValue(item, key, value);
                affectedItems?.(itemPayload);
            }
        });
    }
    setGlobalValues(key, value, affectedItems) {
        this.#originalData.forEach(Item => {
            const itemPayload = getItemPayload(Item);
            this.setItemByKeyValue(Item, key, value);
            affectedItems?.(itemPayload);
        });
    }
    toggleGroup(itemPayload) {
        this.#dataSource.data = this.#originalData.filter(item => {
            const _item = getItemPayload(item);
            if (itemPayload.groupId === _item.groupId) {
                item = setItemPayload(item, { collapsed: !_item.collapsed });
            }
            return !getItemPayload(item).collapsed || getItemPayload(item).parent;
        });
    }
    getItemByIndex(index) {
        const item = this.#originalData[index];
        if (!item) {
            throw new Error(`
        Item with index "${index}" not found.
        Hint: update the index value if you have added or removed items!
      `);
        }
        return this.#originalData[index];
    }
    getParentItemByGroupId(groupId) {
        const item = this.#originalData.find(item => {
            const _item = getItemPayload(item);
            return _item.groupId === groupId && _item.parent;
        });
        if (!item) {
            throw new Error(`Item with groupId "${groupId}" not found`);
        }
        return item;
    }
    cloneItemAll(itemPayload = {}) {
        return this.#originalData.map((item, index) => this.cloneItem(item, { ...itemPayload, index }));
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
    #countActionType(item) {
        const actionType = getItemPayload(item).actionType;
        actionType === 'row-single' ? this.countSingleItems++ : null;
        actionType === 'row-group' ? this.countGroupItems++ : null;
        return item;
    }
    destroy() {
        this.#dataSource.data = [];
        this.#originalData = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDataManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDataManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDataManager, decorators: [{
            type: Injectable
        }] });

/**
 * experimental
 * @param itemDefault
 * @param itemPayloadDefault
 */
const itemPayloadFactory = (itemDefault, itemPayloadDefault = {}) => (item, itemPayload = {}) => {
    return setItemPayload(
    // item // works!
    { ...itemDefault, ...item }, // does not work!
    Object.keys(itemPayloadDefault).length ? itemPayloadDefault : itemPayload);
};
/**
 * setItemPayload sets an itemPayload on item in hidden-type-mode.
 * This means there is no direct access to itemPayload on returned item with TypeScript.
 * The advantage of this approach is that you can put implementation details
 * at type level in a hidden-type-mode so that it allows carry payload with an item.
 *
 * To get the itemPayload you should use getItemPayloadValue or getItemPayload.
 */
// prettier-ignore
const setItemPayload = (item, itemPayload = {}) => {
    const _item = item;
    _item._$hiddenItemPayload = Object.assign({ ...itemPayloadDefault }, { ..._item?._$hiddenItemPayload ?? {} }, { ...itemPayload });
    return _item;
};
/**
 * getItemPayloadValue returns a specific itemPayloadValue of an item by given key.
 */
// prettier-ignore
const getItemPayloadValue = (item, key) => {
    const _item = item;
    if (!_item?._$hiddenItemPayload) {
        console.log(_item);
        throw ErrorItemPayload(item);
    }
    return _item._$hiddenItemPayload[key];
};
/**
 * getItemPayload returns itemPayload which is in hidden-type-mode
 */
// prettier-ignore
const getItemPayload = (item) => {
    const _item = item;
    if (!_item?._$hiddenItemPayload) {
        console.log(_item);
        throw ErrorItemPayload(item);
    }
    return _item._$hiddenItemPayload;
};
const getItemData = (item) => {
    const _item = item;
    if (!_item?._$hiddenItemPayload)
        throw ErrorItemPayload(item);
    const hiddenItemPayload = _item._$hiddenItemPayload;
    delete _item._$hiddenItemPayload;
    const clonedData = structuredClone(_item);
    _item._$hiddenItemPayload = hiddenItemPayload;
    return clonedData;
};
/**
 * deleteItemPayload deletes the hidden item payload
 */
const deleteItemPayload = (item) => {
    delete item?._$hiddenItemPayload;
    return item;
};
/**
 * hasItemPayload returns true if item has hidden item payload
 */
const hasItemPayload = (item) => {
    const _item = item;
    return !!_item?._$hiddenItemPayload;
};
const throwError = (message) => {
    throw new Error(message);
};
const ErrorItemPayload = (item) => {
    return new Error(`HiddenItemPayload does not exists on "${JSON.stringify(item)}".` +
        'Please make sure it is set by using setItemPayload.');
};

class CdkDatagridRuleManager {
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

class CdkDatagridFormManager {
    constructor(_formBuilder, _dataManger, _ruleManager) {
        this._formBuilder = _formBuilder;
        this._dataManger = _dataManger;
        this._ruleManager = _ruleManager;
        this.#formControlsByIds = new Map();
        this.#formGroup = this._formBuilder.group({});
        this.formGroupControls = this.#formGroup.controls;
        this.#prevValidations = [];
    }
    #formControlsByIds;
    #formGroup;
    #prevValidations;
    #batchValidation$;
    getBatchValidation() {
        return this.#batchValidation$;
    }
    setBatchValidation(batchValidations) {
        this.#batchValidation$ = batchValidations;
    }
    addFormControl(formControlName, value, formControlDir, asyncValidatorFn = Validators.nullAsyncValidator()) {
        this.#formGroup.addControl(formControlName, this._formBuilder.group({
            [formControlName]: this._formBuilder.control(value, {
                validators: [...(formControlDir.validator?.validator || [])],
                asyncValidators: [...(formControlDir.validator?.asyncValidator || []), asyncValidatorFn],
                updateOn: formControlDir.validator?.updateOn ?? 'submit',
            }),
        }));
        this.#formControlsByIds.set(formControlName, formControlDir);
    }
    watchBatchValidations(batchValidation$) {
        this.setBatchValidation(batchValidation$);
        // eslint-disable-next-line rxjs-angular/prefer-takeuntil
        return batchValidation$.pipe(tap((validations = []) => {
            // reset prev errors
            this.#prevValidations.forEach(({ index, field }) => {
                const formControl = this.#formControlsByIds.get(`${index}-${field}`);
                formControl?.setError(null);
            });
            validations.forEach(({ index, field, validationCode, validationMessage }) => {
                const item = this._dataManger.getItemByIndex(index);
                const itemPayload = getItemPayload(item);
                const actionType = itemPayload?.actionType;
                const formControl = this.#formControlsByIds.get(`${index}-${field}`);
                const ruleTypes = this._ruleManager.getRule(item, field, actionType);
                if (ruleTypes.validate && formControl) {
                    formControl?.setError({ validationCode, validationMessage });
                }
            });
            this.#prevValidations = validations;
        }));
    }
    createAsyncBatchValidator(key, index) {
        let batchValidator = Validators.nullAsyncValidator();
        const batchValidation = this.getBatchValidation();
        if (batchValidation) {
            batchValidator = batchValidatorFactory(batchValidation, key, index);
        }
        return batchValidator;
    }
    getFormControlGroup(uuid) {
        return this.#formGroup.get(uuid);
    }
    getFormControl(uuid) {
        return this.getFormControlGroup(uuid)?.get(uuid);
    }
    removeFormControl(uuid) {
        this.#formGroup.removeControl(uuid);
        this.#formControlsByIds.delete(uuid);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFormManager, deps: [{ token: i1.UntypedFormBuilder }, { token: CdkDatagridDataManager }, { token: CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFormManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFormManager, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.UntypedFormBuilder }, { type: CdkDatagridDataManager }, { type: CdkDatagridRuleManager }] });

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridStorageDirective, deps: [{ token: CdkDatagridDataManager }, { token: CdkDatagridFormManager }, { token: CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridStorageDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { item: "item", key: "key", render: "render", actionType: "actionType" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridStorageDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: CdkDatagridDataManager }, { type: CdkDatagridFormManager }, { type: CdkDatagridRuleManager }], propDecorators: { item: [{
                type: Input
            }], key: [{
                type: Input
            }], render: [{
                type: Input
            }], actionType: [{
                type: Input
            }] } });

const { DATAGRID_STORAGE_PROVIDER, DATAGRID_STORAGE_TOKEN } = providerTokenFactory('DATAGRID_STORAGE', CdkDatagridStorageDirective, [Self]);

class CdkDatagridFormControlDirective {
    constructor(_cdr, _storage, _formManager, _ruleManager) {
        this._cdr = _cdr;
        this._storage = _storage;
        this._formManager = _formManager;
        this._ruleManager = _ruleManager;
        this.#unsub$ = new Subject();
        this.validator = {
            validator: [],
            asyncValidator: [],
            updateOn: 'submit',
        };
    }
    #unsub$;
    get canRender() {
        const { key, actionType, item } = this._storage;
        return this._ruleManager.getRule(item, key, actionType)?.render;
    }
    get formControlGroup() {
        return this._formManager.getFormControlGroup(this.formControlName);
    }
    get formControlName() {
        return this._storage.createUuid();
    }
    get initialValue() {
        return this._storage.item[this._storage.renderKey || this._storage.key];
    }
    get value() {
        return this.control?.value;
    }
    get control() {
        return this._formManager?.getFormControl(this._storage.createUuid());
    }
    get disabled() {
        return this.control?.disabled;
    }
    get valid() {
        return this.control?.valid;
    }
    get errors() {
        return this.control?.errors;
    }
    setError(errors) {
        return this.control?.setErrors(errors);
    }
    validate() {
        if (this.valid) {
            this.control?.markAsUntouched();
        }
        else {
            this.control?.markAsTouched();
        }
    }
    ngOnInit() {
        const { key, index, item } = this._storage;
        const actionType = getItemPayload(item).actionType;
        const batchValidator = this._formManager.createAsyncBatchValidator(key, index);
        this._formManager.addFormControl(this.formControlName, this.initialValue, this, batchValidator);
        const formControl = this._formManager?.getFormControl(this.formControlName);
        const initialValue = this.initialValue;
        this._ruleManager.applyRules(item, key, actionType, formControl, initialValue);
        formControl?.statusChanges
            .pipe(tap(() => this._cdr.markForCheck()), takeUntil(this.#unsub$))
            .subscribe();
    }
    ngOnDestroy() {
        if (this._storage.item && this._formManager.formGroupControls[this.formControlName]) {
            this._formManager.removeFormControl(this.formControlName);
        }
        this.#unsub$.next();
        this.#unsub$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFormControlDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: DATAGRID_STORAGE_TOKEN }, { token: CdkDatagridFormManager }, { token: CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridFormControlDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { validator: "validator" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFormControlDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }, { type: CdkDatagridFormManager }, { type: CdkDatagridRuleManager }], propDecorators: { validator: [{
                type: Input
            }] } });

/**
 * The CDK_EDIT_TAG_CLASS is a unique identifier whose use should match the CdkDatagridEdit
 * interface in the directive where it is used.
 *
 * @example CdkDatagridEditDirective in cdk-datagrid-edit.directive.ts
 */
const CDK_EDIT_TAG_CLASS = 'cdk-datagrid-edit';
/**
 * The CDK_EDIT_CSS_CLASS is used to query the proper html dom node reference in order to get the
 * directive instance of CdkDatagridEdit interface.
 */
const CDK_EDIT_CSS_CLASS = `.${CDK_EDIT_TAG_CLASS}`;
/**
 * CdkDatagridEditManager provides some useful methods for write, read, delete or interacting
 * with directive instances of CdkDatagridEdit.
 *
 * @example test/cdk-datagrid-edit.manager.spec.ts
 */
class CdkDatagridEditManager {
    constructor() {
        /**
         * inCellZone is a boolean which indicates if the mouse event is in the cell zone.
         */
        this.inCellZone = false;
        /**
         * @see CdkMapEdit in cdk-datagrid-edit.manager.ts
         *
         * @internal
         **/
        this.#edits = new Map();
    }
    /**
     * @see CdkMapEdit in cdk-datagrid-edit.manager.ts
     *
     * @internal
     **/
    #edits;
    /**
     * The #lastEditItemEl is the last edited element.
     *
     * @internal
     */
    #lastEditItemEl;
    /**
     * The #lastEditItemRef is the last edited CdkDatagridEdit reference.
     *
     * @internal
     */
    #lastEditItemRef;
    /**
     * setActiveEditItem extracts and finds the right CDK_EDIT_CSS_CLASS domNode
     * from event.target in order to pull the correct directive instance from CdkMapEdit to interact
     * with CdkDatagridEdit.activeEdit() and CdkDatagridEdit.inactiveEdit().
     */
    setActiveEditItem(event) {
        const currentEditAbleItemEl = this.getCurrentItem(event);
        if (!currentEditAbleItemEl) {
            return;
        }
        if (this.#lastEditItemEl === currentEditAbleItemEl) {
            return;
        }
        if (this.#lastEditItemEl) {
            this.setInactiveLastEditItem();
        }
        this.#storeLastEditItem(currentEditAbleItemEl);
        this.getEditItem(currentEditAbleItemEl)?.activeEdit();
    }
    /**
     * setEditItem sets element and editable in CdkMapEdit
     */
    setEditItem(element, editable) {
        this.#edits.set(element, editable);
    }
    /**
     * getEditItem returns the directive instance by given element reference
     */
    getEditItem(element) {
        return this.#edits.get(element);
    }
    /**
     * setInactiveEditItem sets the item to inactive.
     */
    setInactiveEditItem(event) {
        const currentEditAbleItemEl = this.getCurrentItem(event);
        if (!currentEditAbleItemEl) {
            return;
        }
        this.getEditItem(currentEditAbleItemEl)?.inactiveEdit();
        // @todo: remove this later when keyboard moving is working. This is just for avoiding tabbing!
        event.preventDefault();
    }
    /**
     * deleteEditItem deletes the directive instance from CdkMapEdit by given element reference
     */
    deleteEditItem(element) {
        const deleted = this.#edits.delete(element);
        const directive = this.getEditItem(element);
        if (deleted && directive)
            directive.inactiveEdit();
    }
    isInZoneEditItem(event) {
        const currentEditItemEl = this.#getElementFromEvent(event);
        return (this.inCellZone = this.#isInZoneEditEl(currentEditItemEl));
    }
    /**
     * getCurrentItem returns the current edited element
     */
    getCurrentItem(event) {
        let currentEditItemEl = this.#getElementFromEvent(event);
        const isInZoneEditEl = this.#isInZoneEditEl(currentEditItemEl);
        if (!isInZoneEditEl) {
            this.setInactiveLastEditItem();
            return null;
        }
        const fromInnerEditEl = this.#getFromInnerOrSelfEditEl(currentEditItemEl);
        if (fromInnerEditEl) {
            currentEditItemEl = fromInnerEditEl;
        }
        if (!currentEditItemEl) {
            throw new Error(`Could not found ${CDK_EDIT_CSS_CLASS} element!`);
        }
        return currentEditItemEl;
    }
    /**
     * setInactiveLastEditItem sets the last edited element inactive
     */
    setInactiveLastEditItem() {
        this.#lastEditItemRef?.inactiveEdit();
        this.#lastEditItemEl = undefined;
    }
    /** @private */
    #storeLastEditItem(element) {
        this.#lastEditItemEl = element;
        this.#lastEditItemRef = this.getEditItem(element);
    }
    /** @private */
    #isInZoneEditEl(element) {
        return !!this.#getFromInnerOrSelfEditEl(element);
    }
    /** @private */
    #getElementFromEvent(element) {
        const _element = element?.target;
        if (!_element) {
            throw new Error('Event.target does not contain HTMLElement');
        }
        return _element;
    }
    /** @private */
    #getFromInnerOrSelfEditEl(element) {
        return element.closest(CDK_EDIT_CSS_CLASS);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridEditManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridEditManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridEditManager, decorators: [{
            type: Injectable
        }] });

class CdkDatagridEditDirective {
    constructor(_elementRef, _editManager) {
        this._elementRef = _elementRef;
        this._editManager = _editManager;
        this.hostClass = true;
        this.editable = true;
        this.active$ = new BehaviorSubject(false);
    }
    activeEdit() {
        this.editable && this.active$.next(true);
    }
    inactiveEdit() {
        this.editable && this.active$.next(false);
    }
    ngOnInit() {
        this._editManager.setEditItem(this._elementRef.nativeElement, this);
    }
    ngOnDestroy() {
        this._editManager.deleteEditItem(this._elementRef.nativeElement);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridEditDirective, deps: [{ token: i0.ElementRef }, { token: CdkDatagridEditManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridEditDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { editable: "editable" }, host: { properties: { "class.cdk-datagrid-edit": "this.hostClass" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridEditDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: CdkDatagridEditManager }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: [`class.${CDK_EDIT_TAG_CLASS}`]
            }], editable: [{
                type: Input
            }] } });

class CdkDatagridCommonDirective {
    constructor() {
        this.type = 'text';
        this.#autocomplete = 'off';
    }
    #autocomplete;
    get autocomplete() {
        return this.#autocomplete;
    }
    set autocomplete(value) {
        this.#autocomplete = value ? 'on' : 'off';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridCommonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridCommonDirective, isStandalone: true, selector: "[cdk-datagrid-edit]", inputs: { type: "type", autocomplete: "autocomplete" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridCommonDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-edit]',
                    standalone: true,
                }]
        }], propDecorators: { type: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }] } });

// @todo: rename to providerFactory
const { DATAGRID_COMMON_PROVIDER, DATAGRID_COMMON_TOKEN } = providerTokenFactory('DATAGRID_COMMON', CdkDatagridCommonDirective, [Self]);

const { DATAGRID_EDIT_PROVIDER, DATAGRID_EDIT_TOKEN } = providerTokenFactory('DATAGRID_EDIT', CdkDatagridEditDirective, [Self]);

const { DATAGRID_FORM_CONTROL_PROVIDER, DATAGRID_FORM_CONTROL_TOKEN } = providerTokenFactory('DATAGRID_FORM_CONTROL', CdkDatagridFormControlDirective, [Self]);

class CdkDatagridFocusInputDirective {
    constructor(_formControl, _elementRef, _cdr) {
        this._formControl = _formControl;
        this._elementRef = _elementRef;
        this._cdr = _cdr;
    }
    ngAfterViewInit() {
        // @todo: dry (*1)(move into factory)
        this._formControl.validate();
        this._elementRef.nativeElement.focus();
        this._cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusInputDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridFocusInputDirective, isStandalone: true, selector: "input[cdkFocusInput]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusInputDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[cdkFocusInput]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }] });
class CdkDatagridFocusComboboxDirective {
    constructor(_formControl, _elementRef, _autoComplete, _cdr) {
        this._formControl = _formControl;
        this._elementRef = _elementRef;
        this._autoComplete = _autoComplete;
        this._cdr = _cdr;
    }
    ngAfterViewInit() {
        // @todo: dry (*1)(move into factory))
        this._formControl.validate();
        this._elementRef.nativeElement.focus();
        this._cdr.detectChanges();
        setTimeout(() => this._autoComplete.openPanel(), 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusComboboxDirective, deps: [{ token: DATAGRID_FORM_CONTROL_TOKEN }, { token: i0.ElementRef }, { token: i2.MatAutocompleteTrigger }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridFocusComboboxDirective, isStandalone: true, selector: "input[matAutocomplete][cdkFocusCombobox]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridFocusComboboxDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'input[matAutocomplete][cdkFocusCombobox]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: i0.ElementRef }, { type: i2.MatAutocompleteTrigger }, { type: i0.ChangeDetectorRef }] });

// @todo: move to separate file!
const ACTION_DATA = new InjectionToken('ActionData');
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridInputComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }, { token: CdkDatagridRuleManager }], target: i0.ɵɵFactoryTarget.Component }); }
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
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i2$1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
        }], ctorParameters: () => [{ type: CdkDatagridCommonDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_COMMON_TOKEN]
                }] }, { type: CdkDatagridEditDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_EDIT_TOKEN]
                }] }, { type: CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }, { type: CdkDatagridRuleManager }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-input']
            }], inputChange: [{
                type: Output
            }] } });
const MAT_FORMAT_INPUT = new InjectionToken('matInputFormats');
const MAT_NUMBER_INPUT = new InjectionToken('matInputNumbers');

const MAT_FORMAT_DATE_INPUT = new InjectionToken('dateFormatValue');
const MAT_DATE_CLASS = new InjectionToken('matDateAdapter');
const matDateFormatsDefaults = {
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
    parse: {
        dateInput: ['YYYY-MM-DD'],
    },
};
class CdkDatagridDateAdapter {
    constructor(matDateClass, matDateFormats, matFormatDateInput, _dateAdapter) {
        this.matDateClass = matDateClass;
        this.matDateFormats = matDateFormats;
        this.matFormatDateInput = matFormatDateInput;
        this._dateAdapter = _dateAdapter;
    }
    format(date, format) {
        if (!date)
            return '';
        return this._dateAdapter.format(this.matDateClass(date), format);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDateAdapter, deps: [{ token: MAT_DATE_CLASS }, { token: MAT_DATE_FORMATS }, { token: MAT_FORMAT_DATE_INPUT }, { token: i1$1.DateAdapter }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDateAdapter }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDateAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_CLASS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_FORMATS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_FORMAT_DATE_INPUT]
                }] }, { type: i1$1.DateAdapter }] });

function provideDataGrid(options) {
    const optionDateFormats = options?.datepicker?.formats || {};
    const optionInputFormats = options?.input?.formats || {};
    const optionInputNumbers = options?.input?.numbers || {};
    // @todo: use https://developer.mozilla.org/en-US/docs/Web/API/structuredClone insteadof deepmerge
    const _matDateFormatsDefaults = deepmerge(matDateFormatsDefaults, optionDateFormats);
    _matDateFormatsDefaults.parse.dateInput = optionDateFormats?.display?.dateInput || 'YYYY-MM-DD';
    return makeEnvironmentProviders([
        importProvidersFrom(ScrollingModule),
        CdkDatagridFormManager,
        CdkDatagridRuleManager,
        CdkDatagridDataManager,
        CdkDatagridDateAdapter,
        CdkDatagridEditManager,
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        { provide: MAT_FORMAT_INPUT, useValue: optionInputFormats },
        { provide: MAT_NUMBER_INPUT, useValue: optionInputNumbers },
        { provide: MAT_DATE_FORMATS, useValue: _matDateFormatsDefaults },
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: LOCALE_ID, useValue: 'en-GB' },
        { provide: MAT_DATE_CLASS, useValue: moment },
        { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
        ...(options?.datepicker?.providers || []),
    ]);
}

class CdkDatagridCollapseComponent {
    constructor(_actionData, _datasourceManager) {
        this._actionData = _actionData;
        this._datasourceManager = _datasourceManager;
        this.collapseChange = new EventEmitter();
        this.hostClass = true;
        this.collapsibleClass = true;
    }
    get collapsedClass() {
        return this.collapsed;
    }
    get collapsed() {
        return getItemPayload(this._actionData.item).collapsed;
    }
    get getActionType() {
        return getItemPayload(this._actionData.item).actionType;
    }
    collapseChanged() {
        const itemPayload = getItemPayload(this._actionData.item);
        this._datasourceManager.toggleGroup(itemPayload);
        this.collapseChange.emit(itemPayload);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridCollapseComponent, deps: [{ token: ACTION_DATA }, { token: CdkDatagridDataManager }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridCollapseComponent, isStandalone: true, selector: "cdk-datagrid-collapse", outputs: { collapseChange: "collapseChange" }, host: { properties: { "class.cdk-datagrid-collapse": "this.hostClass", "class.cdk-datagrid-collapsible": "this.collapsibleClass", "class.cdk-datagrid-collapsed": "this.collapsedClass" } }, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'cdk-datagrid-collapse',
                    template: ``,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ACTION_DATA]
                }] }, { type: CdkDatagridDataManager }], propDecorators: { collapseChange: [{
                type: Output
            }], hostClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid-collapse']
            }], collapsibleClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid-collapsible']
            }], collapsedClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid-collapsed']
            }] } });

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
class MatDatagridDatepickerComponent {
    constructor(_dateAdapter, _common, _edit, _formControl, _storage) {
        this._dateAdapter = _dateAdapter;
        this._common = _common;
        this._edit = _edit;
        this._formControl = _formControl;
        this._storage = _storage;
        this.hostClass = true;
        this.dateChange = new EventEmitter();
        /** @internal */
        this._displayDateInput = this._dateAdapter.matDateFormats.display.dateInput;
        /** @internal */
        this._formatDateInput = this._dateAdapter.matFormatDateInput;
    }
    /** @internal */
    get _controlValue() {
        return this._formControl?.value;
    }
    /** @internal */
    get _dateRender() {
        return this._dateAdapter.format(this._controlValue, this._displayDateInput);
    }
    /** @internal */
    _dateValue(value) {
        return this._dateAdapter.format(value, this._formatDateInput);
    }
    /** @internal */
    _dateChange(value) {
        if (value === null)
            return;
        this._storage.setValue(this._dateValue(value));
        this.dateChange.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDatepickerComponent, deps: [{ token: CdkDatagridDateAdapter }, { token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.7", type: MatDatagridDatepickerComponent, isStandalone: true, selector: "mat-datagrid-datepicker", outputs: { dateChange: "dateChange" }, host: { properties: { "class.mat-datagrid-datepicker": "this.hostClass" } }, providers: [
            DATAGRID_COMMON_PROVIDER,
            DATAGRID_EDIT_PROVIDER,
            DATAGRID_FORM_CONTROL_PROVIDER,
            DATAGRID_STORAGE_PROVIDER,
        ], ngImport: i0, template: `
    @if ((_edit.active$ | async) === true && !_formControl.disabled) {
      <form
        novalidate
        [formGroup]="_formControl.formControlGroup"
        (ngSubmit)="_dateChange(matDatepicker.value); _formControl.errors && tooltip.show()"
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
            #matDatepicker="matDatepickerInput"
            [placeholder]="_storage.placeholder"
            [formControlName]="_formControl.formControlName"
            [matDatepicker]="picker"
            (dateChange)="_dateChange(matDatepicker.value); picker.close()"
            [type]="_common.type"
            [autocomplete]="_common.autocomplete"
          />
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </form>
    } @else {
      <div
        [title]="_dateRender"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _dateRender || _storage.placeholder }}</span>
      </div>
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: CdkDatagridFocusInputDirective, selector: "input[cdkFocusInput]" }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i6$1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i6$1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i6$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDatepickerComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-datepicker',
                    providers: [
                        DATAGRID_COMMON_PROVIDER,
                        DATAGRID_EDIT_PROVIDER,
                        DATAGRID_FORM_CONTROL_PROVIDER,
                        DATAGRID_STORAGE_PROVIDER,
                    ],
                    template: `
    @if ((_edit.active$ | async) === true && !_formControl.disabled) {
      <form
        novalidate
        [formGroup]="_formControl.formControlGroup"
        (ngSubmit)="_dateChange(matDatepicker.value); _formControl.errors && tooltip.show()"
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
            #matDatepicker="matDatepickerInput"
            [placeholder]="_storage.placeholder"
            [formControlName]="_formControl.formControlName"
            [matDatepicker]="picker"
            (dateChange)="_dateChange(matDatepicker.value); picker.close()"
            [type]="_common.type"
            [autocomplete]="_common.autocomplete"
          />
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
      </form>
    } @else {
      <div
        [title]="_dateRender"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _dateRender || _storage.placeholder }}</span>
      </div>
    }
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatTooltipModule,
                        MatInputModule,
                        CdkDatagridFocusInputDirective,
                        MatDatepickerModule,
                        NgClass,
                        AsyncPipe,
                    ],
                }]
        }], ctorParameters: () => [{ type: CdkDatagridDateAdapter }, { type: CdkDatagridCommonDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_COMMON_TOKEN]
                }] }, { type: CdkDatagridEditDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_EDIT_TOKEN]
                }] }, { type: CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-datepicker']
            }], dateChange: [{
                type: Output
            }] } });

class CdkDatagridDirective {
    constructor(_cdr, _dataManager, _ruleManager, _editManager) {
        this._cdr = _cdr;
        this._dataManager = _dataManager;
        this._ruleManager = _ruleManager;
        this._editManager = _editManager;
        this.#unsub = new Subject();
        this.valueChange = this._dataManager.valueChange$;
        this.currentValueChange = null;
        this.#valueChange = this._dataManager.valueChange$.pipe(tap(valueChange => (this.currentValueChange = valueChange)), tap(() => this._cdr.markForCheck()));
        this.hostClass = true;
        // @todo: implement this!!!!
        this.density = 'xs';
        this.rowHover = true;
        this.collapsedRows = true;
        this.cellGap = 2;
        this.rowGrouping = false;
        this.groupDesign = '';
    }
    #unsub;
    get countSingleItems() {
        return this._dataManager.countSingleItems;
    }
    get countGroupItems() {
        return this._dataManager.countGroupItems;
    }
    get items() {
        return this._dataManager.data;
    }
    get inCellZone() {
        return this._editManager.inCellZone;
    }
    #valueChange;
    set itemRules(rules) {
        this._ruleManager.setGlobalRules(rules);
    }
    // on click outside of datagrid, the last edited item will be inactivated.
    // @todo: this breaks the skygrid! Dont know why. But we dont need this because
    // setting the last item inactive will be made bey see @HostListener('click', ['$event']) click(e: MouseEvent
    // @HostListener('document:click', ['$event']) documentClick(e: MouseEvent) {
    //   if (!this._editManager.isInZoneEditItem(e)) {
    //     this._editManager.setInactiveLastEditItem();
    //   }
    // }
    click(e) {
        this._editManager.setActiveEditItem(e);
    }
    tab(e) {
        this._editManager.setInactiveLastEditItem();
        e.preventDefault(); // @todo: remove this later when keyboard navigation is implemented!
    }
    esc(_e) {
        // console.log('keyup.esc', e);
    }
    arrowKey(_e) {
        // console.log('keydown', e);
    }
    enter(_e) {
        // console.log('keydown.enter', e);
    }
    shiftEnter(_e) {
        // console.log('keydown.shift.enter', e);
    }
    shiftTab(_e) {
        // console.log('keydown.shift.tab', e);
    }
    setValue(key, value, actionType, where = 'dataSource') {
        const item = setItemPayload({}, { actionType });
        if (where === 'dataSource') {
            this._dataManager.setValue(key, value, item);
        }
    }
    setValueChange(valueChange) {
        this._dataManager.setValueChange(valueChange);
    }
    /**
     * This method is useful when you want to add dynamic a runtime an item to the table.
     */
    activeMetaRow(active, actionType) {
        this._dataManager.addDataSlotItem({
            index: ItemActionIndex.rowGlobal,
            id: actionType,
            active,
            actionType,
        });
    }
    ngOnInit() {
        this._dataManager.dataSource = this.dataSource;
        this.#valueChange.pipe(takeUntil(this.#unsub)).subscribe();
    }
    ngOnDestroy() {
        this.#unsub.next();
        this.#unsub.complete();
        this._dataManager.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: CdkDatagridDataManager }, { token: CdkDatagridRuleManager }, { token: CdkDatagridEditManager }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridDirective, isStandalone: true, selector: "cdk-table[cdk-datagrid]", inputs: { density: "density", rowHover: "rowHover", collapsedRows: "collapsedRows", cellGap: "cellGap", rowGrouping: "rowGrouping", groupDesign: "groupDesign", dataSource: "dataSource", itemRules: "itemRules" }, outputs: { valueChange: "valueChange" }, host: { listeners: { "click": "click($event)", "keydown.tab": "tab($event)", "keyup.esc": "esc($event)", "keydown": "arrowKey($event)", "keydown.enter": "enter($event)", "keydown.shift.enter": "shiftEnter($event)", "keydown.shift.tab": "shiftTab($event)" }, properties: { "class.cdk-datagrid": "this.hostClass" } }, exportAs: ["cdkDatagrid"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'cdk-table[cdk-datagrid]',
                    exportAs: 'cdkDatagrid',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: CdkDatagridDataManager }, { type: CdkDatagridRuleManager }, { type: CdkDatagridEditManager }], propDecorators: { valueChange: [{
                type: Output
            }], hostClass: [{
                type: HostBinding,
                args: ['class.cdk-datagrid']
            }], density: [{
                type: Input
            }], rowHover: [{
                type: Input
            }], collapsedRows: [{
                type: Input
            }], cellGap: [{
                type: Input
            }], rowGrouping: [{
                type: Input
            }], groupDesign: [{
                type: Input
            }], dataSource: [{
                type: Input
            }], itemRules: [{
                type: Input
            }], click: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], tab: [{
                type: HostListener,
                args: ['keydown.tab', ['$event']]
            }], esc: [{
                type: HostListener,
                args: ['keyup.esc', ['$event']]
            }], arrowKey: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], enter: [{
                type: HostListener,
                args: ['keydown.enter', ['$event']]
            }], shiftEnter: [{
                type: HostListener,
                args: ['keydown.shift.enter', ['$event']]
            }], shiftTab: [{
                type: HostListener,
                args: ['keydown.shift.tab', ['$event']]
            }] } });

class MatDatagridDirective extends CdkDatagridDirective {
    constructor() {
        super(...arguments);
        this.hostClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: MatDatagridDirective, isStandalone: true, selector: "mat-table[mat-datagrid]", host: { properties: { "class.mat-datagrid": "this.hostClass" } }, exportAs: ["matDatagrid"], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'mat-table[mat-datagrid]',
                    exportAs: 'matDatagrid',
                    standalone: true,
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid']
            }] } });

class CdkDatagridConnectWithDirective {
    constructor() {
        this.connectWithDatagrid = null;
        this.clickForDatagridItems = new EventEmitter();
    }
    clickDatagridAction() {
        if (this.connectWithDatagrid) {
            this.clickForDatagridItems.emit(this.connectWithDatagrid.items);
            this.connectWithDatagrid.setValueChange(null);
        }
    }
    ngOnInit() {
        if (!this.connectWithDatagrid) {
            throw new Error('[cdk-datagrid-action] must have a [connectWithDatagrid] input');
        }
        const instanceOfDatagrid = this.connectWithDatagrid instanceof CdkDatagridDirective;
        if (this.connectWithDatagrid && !instanceOfDatagrid) {
            throw new Error('[connectWithDatagrid] input must of type CdkDatagridDirective');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridConnectWithDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: CdkDatagridConnectWithDirective, isStandalone: true, selector: "[connectWithDatagrid]", inputs: { connectWithDatagrid: "connectWithDatagrid" }, outputs: { clickForDatagridItems: "clickForDatagridItems" }, host: { listeners: { "click": "clickDatagridAction()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: CdkDatagridConnectWithDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[connectWithDatagrid]',
                    standalone: true,
                }]
        }], propDecorators: { connectWithDatagrid: [{
                type: Input
            }], clickForDatagridItems: [{
                type: Output
            }], clickDatagridAction: [{
                type: HostListener,
                args: ['click']
            }] } });

// MDC
// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
class MatDatagridComboboxComponent {
    constructor(_common, _edit, _formControl, _storage) {
        this._common = _common;
        this._edit = _edit;
        this._formControl = _formControl;
        this._storage = _storage;
        this.hostClass = true;
        // @Input() options!: Options[];
        this.selectionChange = new EventEmitter();
        this.selectionAdded = new EventEmitter();
        this.selectionAdd = false;
        this.selectionAddIcon = 'add';
        this.selectionAddIconColor = 'primary';
        /** @internal */
        this._search$ = new Subject();
        /** @internal */
        this._addedOption$ = new Subject();
        /** @internal */
        this._filteredOptions$ = this._search$.pipe(startWith(''), debounceTime(300), mergeMap(search => merge(of(this._filterOptions(search)), this._addedOption$)));
    }
    get autocomplete() {
        return this._common.autocomplete;
    }
    /** @internal */
    _selectionChange(change) {
        this._selectChange = change.option.value;
        this._storage.setValue(this._selectChange);
        this.selectionChange.emit(change);
    }
    /** @internal */
    _addSelection(value) {
        if (!value)
            return;
        this._addedOption$.next([{ [this._storage.key]: value }]);
        this.selectionAdded.emit(value);
    }
    /** @internal */
    _displayForAutoCompleteOption(option) {
        return option?.[this._storage.renderKey];
    }
    /** @internal */
    get _renderForDefaultView() {
        const value = this._formControl?.value?.[this._storage.renderKey];
        return value ? value : this._formControl?.value || '';
    }
    /** @internal */
    _filterOptions(search) {
        return (this.options?.filter(option => option[this._storage.renderKey]
            .toLowerCase()
            .includes(search.toLowerCase())) || []);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridComboboxComponent, deps: [{ token: DATAGRID_COMMON_TOKEN }, { token: DATAGRID_EDIT_TOKEN }, { token: DATAGRID_FORM_CONTROL_TOKEN }, { token: DATAGRID_STORAGE_TOKEN }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.7", type: MatDatagridComboboxComponent, isStandalone: true, selector: "mat-datagrid-combobox", inputs: { options: "options", selectionAdd: "selectionAdd", selectionAddIcon: "selectionAddIcon", selectionAddIconColor: "selectionAddIconColor", autocomplete: "autocomplete" }, outputs: { selectionChange: "selectionChange", selectionAdded: "selectionAdded" }, host: { properties: { "class.mat-datagrid-combobox": "this.hostClass" } }, providers: [
            DATAGRID_COMMON_PROVIDER,
            DATAGRID_EDIT_PROVIDER,
            DATAGRID_FORM_CONTROL_PROVIDER,
            DATAGRID_STORAGE_PROVIDER,
        ], ngImport: i0, template: `
    @if ((_edit.active$ | async) === true && !_formControl.disabled) {
      <form
        novalidate
        [formGroup]="_formControl.formControlGroup"
        (keydown.enter)="$event.preventDefault()"
        (ngSubmit)="_addSelection(input.value)"
      >
        <mat-form-field
          [appearance]="'outline'"
          #tooltip="matTooltip"
          [matTooltip]="_formControl.errors?.validationMessage"
          [matTooltipPosition]="'above'"
          [matTooltipDisabled]="!_formControl.errors"
          [matTooltipShowDelay]="0"
          [matTooltipHideDelay]="0"
        >
          <input
            matInput
            cdkFocusCombobox
            #input
            [placeholder]="_storage.placeholder"
            (keyup)="_search$.next(input.value)"
            [formControlName]="_formControl.formControlName"
            [title]="_renderForDefaultView"
            [matAutocomplete]="auto"
            [autocomplete]="autocomplete"
            [type]="_common.type"
          />
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          @if (selectionAdd) {
            <button
              matSuffix
              mat-icon-button
              aria-label="add item button"
              class="add-item-icon"
              (click)="_addSelection(input.value.trim()); input.value = ''"
              [color]="selectionAddIconColor"
            >
              <mat-icon>{{ selectionAddIcon }}</mat-icon>
            </button>
          }

          <mat-autocomplete
            #auto="matAutocomplete"
            [panelWidth]="'auto'"
            [displayWith]="_displayForAutoCompleteOption.bind(this)"
            (optionSelected)="
              _selectionChange($event); input.blur(); _formControl.errors && tooltip.show()
            "
          >
            @for (option of _filteredOptions$ | async; track option) {
              <mat-option [value]="option">
                <div>{{ option[this._storage.renderKey] }}</div>
              </mat-option>
            }
          </mat-autocomplete>
        </mat-form-field>
      </form>
    } @else {
      <div
        [title]="_renderForDefaultView"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _renderForDefaultView || _storage.placeholder }}</span>
      </div>
    }
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i5.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i1$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "directive", type: CdkDatagridFocusComboboxDirective, selector: "input[matAutocomplete][cdkFocusCombobox]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatOptionModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridComboboxComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-combobox',
                    providers: [
                        DATAGRID_COMMON_PROVIDER,
                        DATAGRID_EDIT_PROVIDER,
                        DATAGRID_FORM_CONTROL_PROVIDER,
                        DATAGRID_STORAGE_PROVIDER,
                    ],
                    template: `
    @if ((_edit.active$ | async) === true && !_formControl.disabled) {
      <form
        novalidate
        [formGroup]="_formControl.formControlGroup"
        (keydown.enter)="$event.preventDefault()"
        (ngSubmit)="_addSelection(input.value)"
      >
        <mat-form-field
          [appearance]="'outline'"
          #tooltip="matTooltip"
          [matTooltip]="_formControl.errors?.validationMessage"
          [matTooltipPosition]="'above'"
          [matTooltipDisabled]="!_formControl.errors"
          [matTooltipShowDelay]="0"
          [matTooltipHideDelay]="0"
        >
          <input
            matInput
            cdkFocusCombobox
            #input
            [placeholder]="_storage.placeholder"
            (keyup)="_search$.next(input.value)"
            [formControlName]="_formControl.formControlName"
            [title]="_renderForDefaultView"
            [matAutocomplete]="auto"
            [autocomplete]="autocomplete"
            [type]="_common.type"
          />
          @if (_formControl.errors) {
            <mat-error></mat-error>
          }
          @if (selectionAdd) {
            <button
              matSuffix
              mat-icon-button
              aria-label="add item button"
              class="add-item-icon"
              (click)="_addSelection(input.value.trim()); input.value = ''"
              [color]="selectionAddIconColor"
            >
              <mat-icon>{{ selectionAddIcon }}</mat-icon>
            </button>
          }

          <mat-autocomplete
            #auto="matAutocomplete"
            [panelWidth]="'auto'"
            [displayWith]="_displayForAutoCompleteOption.bind(this)"
            (optionSelected)="
              _selectionChange($event); input.blur(); _formControl.errors && tooltip.show()
            "
          >
            @for (option of _filteredOptions$ | async; track option) {
              <mat-option [value]="option">
                <div>{{ option[this._storage.renderKey] }}</div>
              </mat-option>
            }
          </mat-autocomplete>
        </mat-form-field>
      </form>
    } @else {
      <div
        [title]="_renderForDefaultView"
        class="cdk-default-field"
        [ngClass]="{
          disabled: _formControl.disabled,
          'mat-red-500 mat-error': _formControl.errors
        }"
      >
        <span>{{ _renderForDefaultView || _storage.placeholder }}</span>
      </div>
    }
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        CdkDatagridFocusComboboxDirective,
                        MatButtonModule,
                        MatIconModule,
                        MatOptionModule,
                        NgClass,
                        AsyncPipe,
                    ],
                }]
        }], ctorParameters: () => [{ type: CdkDatagridCommonDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_COMMON_TOKEN]
                }] }, { type: CdkDatagridEditDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_EDIT_TOKEN]
                }] }, { type: CdkDatagridFormControlDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_FORM_CONTROL_TOKEN]
                }] }, { type: CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-combobox']
            }], options: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], selectionAdded: [{
                type: Output
            }], selectionAdd: [{
                type: Input
            }], selectionAddIcon: [{
                type: Input
            }], selectionAddIconColor: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }] } });

class MatDatagridCollapseComponent extends CdkDatagridCollapseComponent {
    constructor() {
        super(...arguments);
        this.hostClass = true;
        this.collapsibleClass = true;
    }
    get collapsedClass() {
        return this.collapsed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridCollapseComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.7", type: MatDatagridCollapseComponent, isStandalone: true, selector: "mat-datagrid-collapse", host: { properties: { "class.mat-datagrid-collapse": "this.hostClass", "class.mat-datagrid-collapsible": "this.collapsibleClass", "class.mat-datagrid-collapsed": "this.collapsedClass" } }, usesInheritance: true, ngImport: i0, template: `
    <div class="cdk-datagrid-collapse">
      @if (getActionType === 'row-global') {
        <div class="row-global flex">
          <mat-icon class="m-auto">edit_note</mat-icon>
        </div>
      }
      @if (getActionType === 'row-group') {
        <button (click)="collapseChanged()" mat-icon-button aria-label="Collapse this group">
          <mat-icon>
            {{ collapsed ? 'expand_more' : 'expand_less' }}
          </mat-icon>
        </button>
      }
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-collapse',
                    template: `
    <div class="cdk-datagrid-collapse">
      @if (getActionType === 'row-global') {
        <div class="row-global flex">
          <mat-icon class="m-auto">edit_note</mat-icon>
        </div>
      }
      @if (getActionType === 'row-group') {
        <button (click)="collapseChanged()" mat-icon-button aria-label="Collapse this group">
          <mat-icon>
            {{ collapsed ? 'expand_more' : 'expand_less' }}
          </mat-icon>
        </button>
      }
    </div>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [NgIf, MatIconModule, MatButtonModule],
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-collapse']
            }], collapsibleClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-collapsible']
            }], collapsedClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-collapsed']
            }] } });

const HOST_CLASS_PREFIX = 'cdk-datagrid';
class MatDatagridRowDirective {
    #itemPayload;
    get actionType() {
        return `${HOST_CLASS_PREFIX}-${this.#itemPayload.actionType} ${HOST_CLASS_PREFIX}-group-id-${this.#itemPayload.groupId} ${HOST_CLASS_PREFIX}-parent-${this.#itemPayload.parent}`;
    }
    set item(item) {
        this.#itemPayload = getItemPayload(item);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridRowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: MatDatagridRowDirective, isStandalone: true, selector: "[cdk-datagrid-row]", inputs: { item: "item" }, host: { properties: { "class": "this.actionType" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridRowDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[cdk-datagrid-row]',
                    standalone: true,
                }]
        }], propDecorators: { actionType: [{
                type: HostBinding,
                args: ['class']
            }], item: [{
                type: Input
            }] } });

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
class MatDatagridEmptyCellComponent {
    constructor(_storage, _ruleManager, _injector, _cdr) {
        this._storage = _storage;
        this._ruleManager = _ruleManager;
        this._injector = _injector;
        this._cdr = _cdr;
        this.hostClass = true;
        this.inputChange = new EventEmitter();
    }
    ngAfterViewInit() {
        const { item, key, actionType } = this._storage;
        const action = this._ruleManager.getActionRule(item, key, actionType);
        const componentType = action?.componentType;
        if (action && typeof componentType === 'function') {
            const actionDataInjector = Injector.create({
                parent: this._injector,
                providers: [{ provide: ACTION_DATA, useValue: action.data || null }],
            });
            this.actionPortal = new ComponentPortal(componentType, null, actionDataInjector);
            this._cdr.markForCheck();
            this._cdr.detectChanges();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridEmptyCellComponent, deps: [{ token: DATAGRID_STORAGE_TOKEN }, { token: CdkDatagridRuleManager }, { token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.7", type: MatDatagridEmptyCellComponent, isStandalone: true, selector: "mat-datagrid-empty-cell", outputs: { inputChange: "inputChange" }, host: { properties: { "class.mat-datagrid-empty-cell": "this.hostClass" } }, providers: [DATAGRID_STORAGE_PROVIDER], ngImport: i0, template: '<ng-template [cdkPortalOutlet]="actionPortal"></ng-template>', isInline: true, dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i2$1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: MatDatagridEmptyCellComponent, decorators: [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: 'mat-datagrid-empty-cell',
                    providers: [DATAGRID_STORAGE_PROVIDER],
                    template: '<ng-template [cdkPortalOutlet]="actionPortal"></ng-template>',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                    imports: [PortalModule],
                }]
        }], ctorParameters: () => [{ type: CdkDatagridStorageDirective, decorators: [{
                    type: Inject,
                    args: [DATAGRID_STORAGE_TOKEN]
                }] }, { type: CdkDatagridRuleManager }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.mat-datagrid-empty-cell']
            }], inputChange: [{
                type: Output
            }] } });

// @credits: https://nartc.me/blog/typed-mat-cell-def
class TypeSafeMatCellDefDirective {
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: TypeSafeMatCellDefDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.7", type: TypeSafeMatCellDefDirective, isStandalone: true, selector: "[matCellDef],[cdkCellDef]", inputs: { matCellDefType: "matCellDefType" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: TypeSafeMatCellDefDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[matCellDef],[cdkCellDef]',
                    standalone: true,
                }]
        }], propDecorators: { matCellDefType: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { ACTION_DATA, CdkDatagridCollapseComponent, CdkDatagridCommonDirective, CdkDatagridConnectWithDirective, CdkDatagridDataManager, CdkDatagridDateAdapter, CdkDatagridDirective, CdkDatagridEditDirective, CdkDatagridFocusComboboxDirective, CdkDatagridFocusInputDirective, CdkDatagridFormControlDirective, CdkDatagridFormManager, CdkDatagridStorageDirective, ErrorItemPayload, ItemActionIndex, MAT_DATE_CLASS, MAT_FORMAT_DATE_INPUT, MAT_FORMAT_INPUT, MAT_NUMBER_INPUT, MatDatagridCollapseComponent, MatDatagridComboboxComponent, MatDatagridDatepickerComponent, MatDatagridDirective, MatDatagridEmptyCellComponent, MatDatagridInputComponent, MatDatagridRowDirective, TypeSafeMatCellDefDirective, Validators, batchValidatorFactory, defaultValidationError, deleteItemPayload, getItemData, getItemPayload, getItemPayloadValue, hasItemPayload, itemPayloadDefault, itemPayloadFactory, matDateFormatsDefaults, mergeValidationErrors, provideDataGrid, setItemPayload, throwError };
//# sourceMappingURL=rescoped-components-datagrid.mjs.map
