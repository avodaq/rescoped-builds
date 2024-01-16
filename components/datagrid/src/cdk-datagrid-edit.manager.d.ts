import * as i0 from "@angular/core";
/**
 * The CDK_EDIT_TAG_CLASS is a unique identifier whose use should match the CdkDatagridEdit
 * interface in the directive where it is used.
 *
 * @example CdkDatagridEditDirective in cdk-datagrid-edit.directive.ts
 */
export declare const CDK_EDIT_TAG_CLASS = "cdk-datagrid-edit";
/**
 * The CDK_EDIT_CSS_CLASS is used to query the proper html dom node reference in order to get the
 * directive instance of CdkDatagridEdit interface.
 */
export declare const CDK_EDIT_CSS_CLASS = ".cdk-datagrid-edit";
/**
 * The CdkMapEdit stores a collection of html dom node references and directive instances of
 * CdkDatagridEdit.
 */
export type CdkMapEdit = Map<HTMLElement, CdkDatagridEdit>;
/**
 * An interface which should be used in the corresponding Directive.
 *
 * @example CdkDatagridEditDirective in cdk-datagrid-edit.directive.ts
 */
export interface CdkDatagridEdit {
    activeEdit(): void;
    inactiveEdit(): void;
}
/**
 * An event which hold in target the HTMLElement which is exactly the one in CdkMapEdit
 *
 * @see CdkMapEdit
 */
export interface EventWithTarget<Element> {
    target: Element;
}
/**
 * CdkDatagridEditManager provides some useful methods for write, read, delete or interacting
 * with directive instances of CdkDatagridEdit.
 *
 * @example test/cdk-datagrid-edit.manager.spec.ts
 */
export declare class CdkDatagridEditManager<Element extends HTMLElement = HTMLElement, _Event extends EventWithTarget<Element> = EventWithTarget<Element>, Editable extends CdkDatagridEdit = CdkDatagridEdit> {
    #private;
    /**
     * inCellZone is a boolean which indicates if the mouse event is in the cell zone.
     */
    inCellZone: boolean;
    /**
     * setActiveEditItem extracts and finds the right CDK_EDIT_CSS_CLASS domNode
     * from event.target in order to pull the correct directive instance from CdkMapEdit to interact
     * with CdkDatagridEdit.activeEdit() and CdkDatagridEdit.inactiveEdit().
     */
    setActiveEditItem(event: Event): void;
    /**
     * setEditItem sets element and editable in CdkMapEdit
     */
    setEditItem(element: Element, editable: Editable): void;
    /**
     * getEditItem returns the directive instance by given element reference
     */
    getEditItem(element: Element): CdkDatagridEdit | undefined;
    /**
     * setInactiveEditItem sets the item to inactive.
     */
    setInactiveEditItem(event: Event): void;
    /**
     * deleteEditItem deletes the directive instance from CdkMapEdit by given element reference
     */
    deleteEditItem(element: Element): void;
    isInZoneEditItem(event: Event): boolean;
    /**
     * getCurrentItem returns the current edited element
     */
    getCurrentItem(event: Event): Element | null;
    /**
     * setInactiveLastEditItem sets the last edited element inactive
     */
    setInactiveLastEditItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridEditManager<any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CdkDatagridEditManager<any, any, any>>;
}
