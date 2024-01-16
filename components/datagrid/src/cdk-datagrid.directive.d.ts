import { CdkDatagridDataManager, GlobalRules, ItemActionType, ValueChange } from './cdk-datagrid-data.manager';
import { CdkDatagridEditManager } from './cdk-datagrid-edit.manager';
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export type Density = 'xs' | 'sm' | 'md' | 'lg';
export type CellGap = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare class CdkDatagridDirective<Item> implements OnInit, OnDestroy {
    #private;
    private readonly _cdr;
    private readonly _dataManager;
    private readonly _ruleManager;
    private readonly _editManager;
    constructor(_cdr: ChangeDetectorRef, _dataManager: CdkDatagridDataManager<Item>, _ruleManager: CdkDatagridRuleManager<Item>, _editManager: CdkDatagridEditManager<HTMLElement>);
    get countSingleItems(): number;
    get countGroupItems(): number;
    get items(): Item[];
    get inCellZone(): boolean;
    readonly valueChange: import("rxjs").Observable<ValueChange | null>;
    currentValueChange: ValueChange | null;
    hostClass: boolean;
    density: Density;
    rowHover: boolean;
    collapsedRows: boolean;
    cellGap: CellGap;
    rowGrouping: boolean;
    groupDesign: 'bm' | '';
    dataSource: TableVirtualScrollDataSource<Item> | MatTableDataSource<Item>;
    set itemRules(rules: GlobalRules<Item>);
    click(e: MouseEvent): void;
    tab(e: KeyboardEvent): void;
    esc(_e: KeyboardEvent): void;
    arrowKey(_e: KeyboardEvent): void;
    enter(_e: KeyboardEvent): void;
    shiftEnter(_e: KeyboardEvent): void;
    shiftTab(_e: KeyboardEvent): void;
    setValue<ItemKey extends keyof Item>(key: ItemKey, value: Item[ItemKey], actionType: ItemActionType, where?: 'dataSource' | 'formSource'): void;
    setValueChange(valueChange: ValueChange | null): void;
    /**
     * This method is useful when you want to add dynamic a runtime an item to the table.
     */
    activeMetaRow(active: boolean, actionType: ItemActionType): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkDatagridDirective<any>, "cdk-table[cdk-datagrid]", ["cdkDatagrid"], { "density": { "alias": "density"; "required": false; }; "rowHover": { "alias": "rowHover"; "required": false; }; "collapsedRows": { "alias": "collapsedRows"; "required": false; }; "cellGap": { "alias": "cellGap"; "required": false; }; "rowGrouping": { "alias": "rowGrouping"; "required": false; }; "groupDesign": { "alias": "groupDesign"; "required": false; }; "dataSource": { "alias": "dataSource"; "required": false; }; "itemRules": { "alias": "itemRules"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
