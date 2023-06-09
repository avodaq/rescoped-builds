import { EventEmitter } from '@angular/core';
import { CdkDatagridDataManager, ItemPayload } from './cdk-datagrid-data.manager';
import * as i0 from "@angular/core";
type ActionData<Item> = {
    item: Item;
};
export declare class CdkDatagridCollapseComponent<Item> {
    readonly _actionData: ActionData<Item>;
    private readonly _datasourceManager;
    constructor(_actionData: ActionData<Item>, _datasourceManager: CdkDatagridDataManager<Item>);
    collapseChange: EventEmitter<ItemPayload<Item>>;
    hostClass: boolean;
    collapsibleClass: boolean;
    get collapsedClass(): boolean | null;
    get collapsed(): boolean | null;
    get getActionType(): import("./cdk-datagrid-data.manager").ItemActionType;
    collapseChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridCollapseComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CdkDatagridCollapseComponent<any>, "cdk-datagrid-collapse", never, {}, { "collapseChange": "collapseChange"; }, never, never, false, never>;
}
export {};
