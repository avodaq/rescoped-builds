import { CdkDatagridStorageDirective } from './cdk-datagrid-storage.directive';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, Injector } from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { CdkDatagridRuleManager } from './cdk-datagrid-rule.manager';
import * as i0 from "@angular/core";
export declare class MatDatagridEmptyCellComponent<Item> implements AfterViewInit {
    private readonly _storage;
    private readonly _ruleManager;
    private readonly _injector;
    private readonly _cdr;
    constructor(_storage: CdkDatagridStorageDirective<Item>, _ruleManager: CdkDatagridRuleManager<Item>, _injector: Injector, _cdr: ChangeDetectorRef);
    actionPortal: Portal<any>;
    componentPortal: ComponentPortal<unknown>;
    hostClass: boolean;
    inputChange: EventEmitter<string>;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatDatagridEmptyCellComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatDatagridEmptyCellComponent<any>, "mat-datagrid-empty-cell", never, {}, { "inputChange": "inputChange"; }, never, never, false, never>;
}
