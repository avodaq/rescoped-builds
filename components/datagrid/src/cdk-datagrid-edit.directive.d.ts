import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CdkDatagridEdit, CdkDatagridEditManager } from './cdk-datagrid-edit.manager';
import * as i0 from "@angular/core";
export declare class CdkDatagridEditDirective implements OnInit, OnDestroy, CdkDatagridEdit {
    private readonly _elementRef;
    private readonly _editManager;
    constructor(_elementRef: ElementRef<HTMLElement>, _editManager: CdkDatagridEditManager);
    hostClass: boolean;
    editable: boolean;
    readonly active$: BehaviorSubject<boolean>;
    activeEdit(): void;
    inactiveEdit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridEditDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CdkDatagridEditDirective, "[cdk-datagrid-edit]", never, { "editable": "editable"; }, {}, never, never, false, never>;
}
