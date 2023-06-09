import { GlobalRules, ItemActionType, RuleTypes } from './cdk-datagrid-data.manager';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CdkDatagridRuleManager<Item> {
    #private;
    setGlobalRules(itemRules: GlobalRules<Item>): void;
    canRule<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType): RuleTypes;
    canValidate<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType): boolean;
    canRender<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType): boolean;
    canDisable<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType): boolean;
    canAction<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType): boolean;
    getActionRule<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType): {
        componentType?: import("@angular/cdk/portal").ComponentType<unknown> | undefined;
        componentPosition?: "before" | "after" | "override" | undefined;
        cond?: boolean | (() => boolean) | undefined;
        data?: unknown;
        transform?: ((item: any, key: any, value: any) => any) | undefined;
    } | null;
    applyRules<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType, formControl: AbstractControl | null, initialValue: string): void;
    getRule<ItemKey extends keyof Item, ActionType extends ItemActionType>(item: Item, key: ItemKey, actionType: ActionType): RuleTypes;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridRuleManager<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CdkDatagridRuleManager<any>>;
}
