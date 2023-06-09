import { CdkDatagridFormManager } from './cdk-datagrid-form.manager';
import { CdkDatagridDataManager, ItemActionType } from './cdk-datagrid-data.manager';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import * as i0 from "@angular/core";
export declare class CdkDatagridStorageDirective<Item, ItemKey extends keyof Item = keyof Item, ItemValue extends Item[ItemKey] = Item[ItemKey]> {
    private readonly _dataSourceManager;
    private readonly _formManager;
    private readonly _ruleManager;
    constructor(_dataSourceManager: CdkDatagridDataManager<Item>, _formManager: CdkDatagridFormManager<Item>, _ruleManager: CdkDatagridRuleManager<Item>);
    item: Item;
    key: keyof Item;
    render: keyof Item;
    get renderKey(): keyof Item;
    get placeholder(): string | undefined;
    get groupId(): number | null;
    get index(): number;
    get actionType(): ItemActionType;
    createUuid(): string;
    setValue(value: unknown): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridStorageDirective<any, any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkDatagridStorageDirective<any, any, any>, "[cdk-datagrid-edit]", never, { "item": "item"; "key": "key"; "render": "render"; "actionType": "actionType"; }, {}, never, never, false, never>;
}
