var _CdkDatagridEditManager_instances, _CdkDatagridEditManager_edits, _CdkDatagridEditManager_lastEditItemEl, _CdkDatagridEditManager_lastEditItemRef, _CdkDatagridEditManager_storeLastEditItem, _CdkDatagridEditManager_isInZoneEditEl, _CdkDatagridEditManager_getElementFromEvent, _CdkDatagridEditManager_getFromInnerOrSelfEditEl;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * The CDK_EDIT_TAG_CLASS is a unique identifier whose use should match the CdkDatagridEdit
 * interface in the directive where it is used.
 *
 * @example CdkDatagridEditDirective in cdk-datagrid-edit.directive.ts
 */
export const CDK_EDIT_TAG_CLASS = 'cdk-datagrid-edit';
/**
 * The CDK_EDIT_CSS_CLASS is used to query the proper html dom node reference in order to get the
 * directive instance of CdkDatagridEdit interface.
 */
export const CDK_EDIT_CSS_CLASS = `.${CDK_EDIT_TAG_CLASS}`;
/**
 * CdkDatagridEditManager provides some useful methods for write, read, delete or interacting
 * with directive instances of CdkDatagridEdit.
 *
 * @example test/cdk-datagrid-edit.manager.spec.ts
 */
export class CdkDatagridEditManager {
    constructor() {
        _CdkDatagridEditManager_instances.add(this);
        /**
         * inCellZone is a boolean which indicates if the mouse event is in the cell zone.
         */
        this.inCellZone = false;
        /**
         * @see CdkMapEdit in cdk-datagrid-edit.manager.ts
         *
         * @internal
         **/
        _CdkDatagridEditManager_edits.set(this, new Map());
        /**
         * The #lastEditItemEl is the last edited element.
         *
         * @internal
         */
        _CdkDatagridEditManager_lastEditItemEl.set(this, void 0);
        /**
         * The #lastEditItemRef is the last edited CdkDatagridEdit reference.
         *
         * @internal
         */
        _CdkDatagridEditManager_lastEditItemRef.set(this, void 0);
    }
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
        if (__classPrivateFieldGet(this, _CdkDatagridEditManager_lastEditItemEl, "f") === currentEditAbleItemEl) {
            return;
        }
        if (__classPrivateFieldGet(this, _CdkDatagridEditManager_lastEditItemEl, "f")) {
            this.setInactiveLastEditItem();
        }
        __classPrivateFieldGet(this, _CdkDatagridEditManager_instances, "m", _CdkDatagridEditManager_storeLastEditItem).call(this, currentEditAbleItemEl);
        this.getEditItem(currentEditAbleItemEl)?.activeEdit();
    }
    /**
     * setEditItem sets element and editable in CdkMapEdit
     */
    setEditItem(element, editable) {
        __classPrivateFieldGet(this, _CdkDatagridEditManager_edits, "f").set(element, editable);
    }
    /**
     * getEditItem returns the directive instance by given element reference
     */
    getEditItem(element) {
        return __classPrivateFieldGet(this, _CdkDatagridEditManager_edits, "f").get(element);
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
        const deleted = __classPrivateFieldGet(this, _CdkDatagridEditManager_edits, "f").delete(element);
        const directive = this.getEditItem(element);
        if (deleted && directive)
            directive.inactiveEdit();
    }
    isInZoneEditItem(event) {
        const currentEditItemEl = __classPrivateFieldGet(this, _CdkDatagridEditManager_instances, "m", _CdkDatagridEditManager_getElementFromEvent).call(this, event);
        return (this.inCellZone = __classPrivateFieldGet(this, _CdkDatagridEditManager_instances, "m", _CdkDatagridEditManager_isInZoneEditEl).call(this, currentEditItemEl));
    }
    /**
     * getCurrentItem returns the current edited element
     */
    getCurrentItem(event) {
        let currentEditItemEl = __classPrivateFieldGet(this, _CdkDatagridEditManager_instances, "m", _CdkDatagridEditManager_getElementFromEvent).call(this, event);
        const isInZoneEditEl = __classPrivateFieldGet(this, _CdkDatagridEditManager_instances, "m", _CdkDatagridEditManager_isInZoneEditEl).call(this, currentEditItemEl);
        if (!isInZoneEditEl) {
            this.setInactiveLastEditItem();
            return null;
        }
        const fromInnerEditEl = __classPrivateFieldGet(this, _CdkDatagridEditManager_instances, "m", _CdkDatagridEditManager_getFromInnerOrSelfEditEl).call(this, currentEditItemEl);
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
        __classPrivateFieldGet(this, _CdkDatagridEditManager_lastEditItemRef, "f")?.inactiveEdit();
        __classPrivateFieldSet(this, _CdkDatagridEditManager_lastEditItemEl, undefined, "f");
    }
}
_CdkDatagridEditManager_edits = new WeakMap(), _CdkDatagridEditManager_lastEditItemEl = new WeakMap(), _CdkDatagridEditManager_lastEditItemRef = new WeakMap(), _CdkDatagridEditManager_instances = new WeakSet(), _CdkDatagridEditManager_storeLastEditItem = function _CdkDatagridEditManager_storeLastEditItem(element) {
    __classPrivateFieldSet(this, _CdkDatagridEditManager_lastEditItemEl, element, "f");
    __classPrivateFieldSet(this, _CdkDatagridEditManager_lastEditItemRef, this.getEditItem(element), "f");
}, _CdkDatagridEditManager_isInZoneEditEl = function _CdkDatagridEditManager_isInZoneEditEl(element) {
    return !!__classPrivateFieldGet(this, _CdkDatagridEditManager_instances, "m", _CdkDatagridEditManager_getFromInnerOrSelfEditEl).call(this, element);
}, _CdkDatagridEditManager_getElementFromEvent = function _CdkDatagridEditManager_getElementFromEvent(element) {
    const _element = element?.target;
    if (!_element) {
        throw new Error('Event.target does not contain HTMLElement');
    }
    return _element;
}, _CdkDatagridEditManager_getFromInnerOrSelfEditEl = function _CdkDatagridEditManager_getFromInnerOrSelfEditEl(element) {
    return element.closest(CDK_EDIT_CSS_CLASS);
};
CdkDatagridEditManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridEditManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CdkDatagridEditManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridEditManager });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: CdkDatagridEditManager, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7QUFFdEQ7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0FBMkIzRDs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxzQkFBc0I7SUFEbkM7O1FBTUU7O1dBRUc7UUFDSCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5COzs7O1lBSUk7UUFDSix3Q0FBOEIsSUFBSSxHQUFHLEVBQUUsRUFBQztRQUV4Qzs7OztXQUlHO1FBQ0gseURBQXFDO1FBRXJDOzs7O1dBSUc7UUFDSCwwREFBOEM7S0EySC9DO0lBekhDOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxLQUFZO1FBQzVCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBRUQsSUFBSSx1QkFBQSxJQUFJLDhDQUFnQixLQUFLLHFCQUFxQixFQUFFO1lBQ2xELE9BQU87U0FDUjtRQUVELElBQUksdUJBQUEsSUFBSSw4Q0FBZ0IsRUFBRTtZQUN4QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQztRQUVELHVCQUFBLElBQUksb0ZBQW1CLE1BQXZCLElBQUksRUFBb0IscUJBQXFCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFD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LE9BQTZCLEVBQUUsTUFBaUIsQ0FBQztJQUNuRSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQywrR0FHeUIsT0FBZ0I7SUFDeEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFVLGtCQUFrQixDQUFDLENBQUM7QUFDdEQsQ0FBQzttSEF2SlUsc0JBQXNCO3VIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgQ0RLX0VESVRfVEFHX0NMQVNTIGlzIGEgdW5pcXVlIGlkZW50aWZpZXIgd2hvc2UgdXNlIHNob3VsZCBtYXRjaCB0aGUgQ2RrRGF0YWdyaWRFZGl0XG4gKiBpbnRlcmZhY2UgaW4gdGhlIGRpcmVjdGl2ZSB3aGVyZSBpdCBpcyB1c2VkLlxuICpcbiAqIEBleGFtcGxlIENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSBpbiBjZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUudHNcbiAqL1xuZXhwb3J0IGNvbnN0IENES19FRElUX1RBR19DTEFTUyA9ICdjZGstZGF0YWdyaWQtZWRpdCc7XG5cbi8qKlxuICogVGhlIENES19FRElUX0NTU19DTEFTUyBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBwcm9wZXIgaHRtbCBkb20gbm9kZSByZWZlcmVuY2UgaW4gb3JkZXIgdG8gZ2V0IHRoZVxuICogZGlyZWN0aXZlIGluc3RhbmNlIG9mIENka0RhdGFncmlkRWRpdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfRURJVF9DU1NfQ0xBU1MgPSBgLiR7Q0RLX0VESVRfVEFHX0NMQVNTfWA7XG5cbi8qKlxuICogVGhlIENka01hcEVkaXQgc3RvcmVzIGEgY29sbGVjdGlvbiBvZiBodG1sIGRvbSBub2RlIHJlZmVyZW5jZXMgYW5kIGRpcmVjdGl2ZSBpbnN0YW5jZXMgb2ZcbiAqIENka0RhdGFncmlkRWRpdC5cbiAqL1xuZXhwb3J0IHR5cGUgQ2RrTWFwRWRpdCA9IE1hcDxIVE1MRWxlbWVudCwgQ2RrRGF0YWdyaWRFZGl0PjtcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2Ugd2hpY2ggc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGNvcnJlc3BvbmRpbmcgRGlyZWN0aXZlLlxuICpcbiAqIEBleGFtcGxlIENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSBpbiBjZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUudHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtEYXRhZ3JpZEVkaXQge1xuICBhY3RpdmVFZGl0KCk6IHZvaWQ7XG4gIGluYWN0aXZlRWRpdCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEFuIGV2ZW50IHdoaWNoIGhvbGQgaW4gdGFyZ2V0IHRoZSBIVE1MRWxlbWVudCB3aGljaCBpcyBleGFjdGx5IHRoZSBvbmUgaW4gQ2RrTWFwRWRpdFxuICpcbiAqIEBzZWUgQ2RrTWFwRWRpdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50V2l0aFRhcmdldDxFbGVtZW50PiB7XG4gIHRhcmdldDogRWxlbWVudDtcbn1cblxuLyoqXG4gKiBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyIHByb3ZpZGVzIHNvbWUgdXNlZnVsIG1ldGhvZHMgZm9yIHdyaXRlLCByZWFkLCBkZWxldGUgb3IgaW50ZXJhY3RpbmdcbiAqIHdpdGggZGlyZWN0aXZlIGluc3RhbmNlcyBvZiBDZGtEYXRhZ3JpZEVkaXQuXG4gKlxuICogQGV4YW1wbGUgdGVzdC9jZGstZGF0YWdyaWQtZWRpdC5tYW5hZ2VyLnNwZWMudHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRWRpdE1hbmFnZXI8XG4gIEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50LFxuICBfRXZlbnQgZXh0ZW5kcyBFdmVudFdpdGhUYXJnZXQ8RWxlbWVudD4gPSBFdmVudFdpdGhUYXJnZXQ8RWxlbWVudD4sXG4gIEVkaXRhYmxlIGV4dGVuZHMgQ2RrRGF0YWdyaWRFZGl0ID0gQ2RrRGF0YWdyaWRFZGl0LFxuPiB7XG4gIC8qKlxuICAgKiBpbkNlbGxab25lIGlzIGEgYm9vbGVhbiB3aGljaCBpbmRpY2F0ZXMgaWYgdGhlIG1vdXNlIGV2ZW50IGlzIGluIHRoZSBjZWxsIHpvbmUuXG4gICAqL1xuICBpbkNlbGxab25lID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBzZWUgQ2RrTWFwRWRpdCBpbiBjZGstZGF0YWdyaWQtZWRpdC5tYW5hZ2VyLnRzXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKiovXG4gIHJlYWRvbmx5ICNlZGl0czogQ2RrTWFwRWRpdCA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogVGhlICNsYXN0RWRpdEl0ZW1FbCBpcyB0aGUgbGFzdCBlZGl0ZWQgZWxlbWVudC5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICAjbGFzdEVkaXRJdGVtRWw6IEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFRoZSAjbGFzdEVkaXRJdGVtUmVmIGlzIHRoZSBsYXN0IGVkaXRlZCBDZGtEYXRhZ3JpZEVkaXQgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gICNsYXN0RWRpdEl0ZW1SZWY6IENka0RhdGFncmlkRWRpdCB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogc2V0QWN0aXZlRWRpdEl0ZW0gZXh0cmFjdHMgYW5kIGZpbmRzIHRoZSByaWdodCBDREtfRURJVF9DU1NfQ0xBU1MgZG9tTm9kZVxuICAgKiBmcm9tIGV2ZW50LnRhcmdldCBpbiBvcmRlciB0byBwdWxsIHRoZSBjb3JyZWN0IGRpcmVjdGl2ZSBpbnN0YW5jZSBmcm9tIENka01hcEVkaXQgdG8gaW50ZXJhY3RcbiAgICogd2l0aCBDZGtEYXRhZ3JpZEVkaXQuYWN0aXZlRWRpdCgpIGFuZCBDZGtEYXRhZ3JpZEVkaXQuaW5hY3RpdmVFZGl0KCkuXG4gICAqL1xuICBzZXRBY3RpdmVFZGl0SXRlbShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBjdXJyZW50RWRpdEFibGVJdGVtRWwgPSB0aGlzLmdldEN1cnJlbnRJdGVtKGV2ZW50KTtcbiAgICBpZiAoIWN1cnJlbnRFZGl0QWJsZUl0ZW1FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNsYXN0RWRpdEl0ZW1FbCA9PT0gY3VycmVudEVkaXRBYmxlSXRlbUVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI2xhc3RFZGl0SXRlbUVsKSB7XG4gICAgICB0aGlzLnNldEluYWN0aXZlTGFzdEVkaXRJdGVtKCk7XG4gICAgfVxuXG4gICAgdGhpcy4jc3RvcmVMYXN0RWRpdEl0ZW0oY3VycmVudEVkaXRBYmxlSXRlbUVsKTtcbiAgICB0aGlzLmdldEVkaXRJdGVtKGN1cnJlbnRFZGl0QWJsZUl0ZW1FbCk/LmFjdGl2ZUVkaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRFZGl0SXRlbSBzZXRzIGVsZW1lbnQgYW5kIGVkaXRhYmxlIGluIENka01hcEVkaXRcbiAgICovXG4gIHNldEVkaXRJdGVtKGVsZW1lbnQ6IEVsZW1lbnQsIGVkaXRhYmxlOiBFZGl0YWJsZSkge1xuICAgIHRoaXMuI2VkaXRzLnNldChlbGVtZW50LCBlZGl0YWJsZSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RWRpdEl0ZW0gcmV0dXJucyB0aGUgZGlyZWN0aXZlIGluc3RhbmNlIGJ5IGdpdmVuIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAqL1xuICBnZXRFZGl0SXRlbShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuI2VkaXRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRJbmFjdGl2ZUVkaXRJdGVtIHNldHMgdGhlIGl0ZW0gdG8gaW5hY3RpdmUuXG4gICAqL1xuICBzZXRJbmFjdGl2ZUVkaXRJdGVtKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGN1cnJlbnRFZGl0QWJsZUl0ZW1FbCA9IHRoaXMuZ2V0Q3VycmVudEl0ZW0oZXZlbnQpO1xuICAgIGlmICghY3VycmVudEVkaXRBYmxlSXRlbUVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nZXRFZGl0SXRlbShjdXJyZW50RWRpdEFibGVJdGVtRWwpPy5pbmFjdGl2ZUVkaXQoKTtcbiAgICAvLyBAdG9kbzogcmVtb3ZlIHRoaXMgbGF0ZXIgd2hlbiBrZXlib2FyZCBtb3ZpbmcgaXMgd29ya2luZy4gVGhpcyBpcyBqdXN0IGZvciBhdm9pZGluZyB0YWJiaW5nIVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogZGVsZXRlRWRpdEl0ZW0gZGVsZXRlcyB0aGUgZGlyZWN0aXZlIGluc3RhbmNlIGZyb20gQ2RrTWFwRWRpdCBieSBnaXZlbiBlbGVtZW50IHJlZmVyZW5jZVxuICAgKi9cbiAgZGVsZXRlRWRpdEl0ZW0oZWxlbWVudDogRWxlbWVudCkge1xuICAgIGNvbnN0IGRlbGV0ZWQgPSB0aGlzLiNlZGl0cy5kZWxldGUoZWxlbWVudCk7XG4gICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5nZXRFZGl0SXRlbShlbGVtZW50KTtcbiAgICBpZiAoZGVsZXRlZCAmJiBkaXJlY3RpdmUpIGRpcmVjdGl2ZS5pbmFjdGl2ZUVkaXQoKTtcbiAgfVxuXG4gIGlzSW5ab25lRWRpdEl0ZW0oZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgY3VycmVudEVkaXRJdGVtRWwgPSB0aGlzLiNnZXRFbGVtZW50RnJvbUV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gKHRoaXMuaW5DZWxsWm9uZSA9IHRoaXMuI2lzSW5ab25lRWRpdEVsKGN1cnJlbnRFZGl0SXRlbUVsKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0Q3VycmVudEl0ZW0gcmV0dXJucyB0aGUgY3VycmVudCBlZGl0ZWQgZWxlbWVudFxuICAgKi9cbiAgZ2V0Q3VycmVudEl0ZW0oZXZlbnQ6IEV2ZW50KSB7XG4gICAgbGV0IGN1cnJlbnRFZGl0SXRlbUVsID0gdGhpcy4jZ2V0RWxlbWVudEZyb21FdmVudChldmVudCk7XG5cbiAgICBjb25zdCBpc0luWm9uZUVkaXRFbCA9IHRoaXMuI2lzSW5ab25lRWRpdEVsKGN1cnJlbnRFZGl0SXRlbUVsKTtcbiAgICBpZiAoIWlzSW5ab25lRWRpdEVsKSB7XG4gICAgICB0aGlzLnNldEluYWN0aXZlTGFzdEVkaXRJdGVtKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmcm9tSW5uZXJFZGl0RWwgPSB0aGlzLiNnZXRGcm9tSW5uZXJPclNlbGZFZGl0RWwoY3VycmVudEVkaXRJdGVtRWwpO1xuICAgIGlmIChmcm9tSW5uZXJFZGl0RWwpIHtcbiAgICAgIGN1cnJlbnRFZGl0SXRlbUVsID0gZnJvbUlubmVyRWRpdEVsO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudEVkaXRJdGVtRWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZvdW5kICR7Q0RLX0VESVRfQ1NTX0NMQVNTfSBlbGVtZW50IWApO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50RWRpdEl0ZW1FbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSBzZXRzIHRoZSBsYXN0IGVkaXRlZCBlbGVtZW50IGluYWN0aXZlXG4gICAqL1xuICBzZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSgpIHtcbiAgICB0aGlzLiNsYXN0RWRpdEl0ZW1SZWY/LmluYWN0aXZlRWRpdCgpO1xuICAgIHRoaXMuI2xhc3RFZGl0SXRlbUVsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gICNzdG9yZUxhc3RFZGl0SXRlbShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy4jbGFzdEVkaXRJdGVtRWwgPSBlbGVtZW50O1xuICAgIHRoaXMuI2xhc3RFZGl0SXRlbVJlZiA9IHRoaXMuZ2V0RWRpdEl0ZW0oZWxlbWVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgI2lzSW5ab25lRWRpdEVsKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICByZXR1cm4gISF0aGlzLiNnZXRGcm9tSW5uZXJPclNlbGZFZGl0RWwoZWxlbWVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgI2dldEVsZW1lbnRGcm9tRXZlbnQoZWxlbWVudDogRXZlbnQpIHtcbiAgICBjb25zdCBfZWxlbWVudCA9IChlbGVtZW50IGFzIHVua25vd24gYXMgX0V2ZW50KT8udGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKCFfZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudC50YXJnZXQgZG9lcyBub3QgY29udGFpbiBIVE1MRWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gX2VsZW1lbnQ7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgI2dldEZyb21Jbm5lck9yU2VsZkVkaXRFbChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdDxFbGVtZW50PihDREtfRURJVF9DU1NfQ0xBU1MpO1xuICB9XG59XG4iXX0=