import { ComponentType } from '@angular/cdk/overlay';
import { DatagridValidation } from './cdk-datagrid-form-control.directive';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export declare const itemPayloadDefault: ItemPayload<object>;
export interface HiddenItemPayload<Item> {
    _$hiddenItemPayload: ItemPayload<Item>;
}
export declare enum ItemActionIndex {
    rowGlobal = -99,
    rowGroup = -98,
    rowSingle = -97,
    rowSearchReplace = -96
}
export type ItemActionType = 'row-global' | 'row-group' | 'row-single' | 'row-search-replace' | 'row-filter' | 'row-empty';
export interface RuleTypes {
    validate?: boolean;
    validators?: DatagridValidation;
    disable?: boolean;
    render?: boolean;
    placeholder?: string;
    action?: {
        componentType?: ComponentType<unknown>;
        componentPosition?: 'before' | 'after' | 'override';
        cond?: boolean | (() => boolean);
        data?: unknown;
        transform?: (item: any, key: any, value: any) => any;
    };
}
export interface ItemRules<Item> extends RuleTypes {
    overrides?: {
        [itemKeys in keyof Item]?: RuleTypes;
    };
}
export type GlobalRules<Item, _ItemActionType extends ItemActionType = ItemActionType> = {
    [actionType in _ItemActionType]?: ItemRules<Item>;
};
export interface ItemPayload<Item> {
    id: string;
    index: number;
    active: boolean;
    parent: boolean;
    collapsed: boolean | null;
    groupId: number | null;
    selected: boolean;
    filtered: boolean;
    actionType: ItemActionType;
    rules: ItemRules<Item> | null;
}
export type ItemSlotId = number | string;
export type _ItemPayload<Item> = ItemPayload<Item>;
export type ItemSlot<Item> = Map<ItemSlotId, Item>;
export type _AffectedPayload<Item> = (payload: ItemPayload<Item>) => void;
export type GroupId = ItemPayload<object>['groupId'];
export type ValueChange = {
    key: string;
    value: string;
    actionType: ItemActionType;
    groupId: GroupId;
};
export declare class CdkDatagridDataManager<Item, ItemKey extends keyof Item = keyof Item, ItemPayload extends _ItemPayload<Item> = _ItemPayload<Item>, AffectedPayload extends _AffectedPayload<Item> = _AffectedPayload<Item>> {
    #private;
    readonly valueChange$: import("rxjs").Observable<ValueChange | null>;
    countSingleItems: number;
    countGroupItems: number;
    set dataSource(dataSource: MatTableDataSource<Item>);
    get data(): Item[];
    setValueChange(value: ValueChange | null): void;
    splice(start: number, deleteCount: number | undefined, items: Item[]): void;
    delete(item: Item, includeChildren?: boolean): void;
    /**
     * This method is useful when you want to add dynamic a runtime an item to the table.
     */
    addDataSlotItem(itemPayload: Partial<ItemPayload>, item?: Item): void;
    getDataTableItem(id: ItemSlotId): Item;
    getChildItems(item: Item): Item[];
    getSingleItems(): Item[];
    getParentItem(item: Item): Item | undefined;
    getGroupChildren(groupId: GroupId): Item[];
    setValue<ItemKey extends keyof Item>(key: ItemKey, value: Item[ItemKey], item: Item, affectedItemsFn?: AffectedPayload): void;
    setItemByKeyValue<ItemKey extends keyof Item>(item: Item, key: ItemKey, value: Item[ItemKey]): void;
    setSingleValue<ItemKey extends keyof Item>(item: Item, key: ItemKey, value: Item[ItemKey], affectedItems?: AffectedPayload): void;
    setGroupValues<ItemKey extends keyof Item>(key: ItemKey, value: Item[ItemKey], groupId: GroupId, affectedItems?: AffectedPayload): void;
    setGlobalValues<ItemKey extends keyof Item>(key: ItemKey, value: Item[ItemKey], affectedItems?: AffectedPayload): void;
    toggleGroup(itemPayload: ItemPayload): void;
    getItemByIndex(index: number): Item;
    getParentItemByGroupId(groupId: number): NonNullable<Item>;
    cloneItemAll(itemPayload?: Partial<ItemPayload>): Item[];
    cloneItem(item: Item, itemPayload?: Partial<ItemPayload>): Item;
    destroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridDataManager<any, any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CdkDatagridDataManager<any, any, any, any>>;
}
