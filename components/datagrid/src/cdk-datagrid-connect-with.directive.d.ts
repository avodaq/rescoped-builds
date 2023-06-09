import { EventEmitter, OnInit } from '@angular/core';
import { CdkDatagridDirective } from './cdk-datagrid.directive';
import * as i0 from "@angular/core";
export declare class CdkDatagridConnectWithDirective<Item> implements OnInit {
    connectWithDatagrid: CdkDatagridDirective<Item> | null;
    clickForDatagridItems: EventEmitter<Item[]>;
    clickDatagridAction(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridConnectWithDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkDatagridConnectWithDirective<any>, "[connectWithDatagrid]", never, { "connectWithDatagrid": "connectWithDatagrid"; }, { "clickForDatagridItems": "clickForDatagridItems"; }, never, never, false, never>;
}
