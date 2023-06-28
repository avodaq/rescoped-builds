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
class CdkDatagridEditManager {
    constructor() {
        /**
         * inCellZone is a boolean which indicates if the mouse event is in the cell zone.
         */
        this.inCellZone = false;
        /**
         * @see CdkMapEdit in cdk-datagrid-edit.manager.ts
         *
         * @internal
         **/
        this.#edits = new Map();
    }
    /**
     * @see CdkMapEdit in cdk-datagrid-edit.manager.ts
     *
     * @internal
     **/
    #edits;
    /**
     * The #lastEditItemEl is the last edited element.
     *
     * @internal
     */
    #lastEditItemEl;
    /**
     * The #lastEditItemRef is the last edited CdkDatagridEdit reference.
     *
     * @internal
     */
    #lastEditItemRef;
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
        if (this.#lastEditItemEl === currentEditAbleItemEl) {
            return;
        }
        if (this.#lastEditItemEl) {
            this.setInactiveLastEditItem();
        }
        this.#storeLastEditItem(currentEditAbleItemEl);
        this.getEditItem(currentEditAbleItemEl)?.activeEdit();
    }
    /**
     * setEditItem sets element and editable in CdkMapEdit
     */
    setEditItem(element, editable) {
        this.#edits.set(element, editable);
    }
    /**
     * getEditItem returns the directive instance by given element reference
     */
    getEditItem(element) {
        return this.#edits.get(element);
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
        const deleted = this.#edits.delete(element);
        const directive = this.getEditItem(element);
        if (deleted && directive)
            directive.inactiveEdit();
    }
    isInZoneEditItem(event) {
        const currentEditItemEl = this.#getElementFromEvent(event);
        return (this.inCellZone = this.#isInZoneEditEl(currentEditItemEl));
    }
    /**
     * getCurrentItem returns the current edited element
     */
    getCurrentItem(event) {
        let currentEditItemEl = this.#getElementFromEvent(event);
        const isInZoneEditEl = this.#isInZoneEditEl(currentEditItemEl);
        if (!isInZoneEditEl) {
            this.setInactiveLastEditItem();
            return null;
        }
        const fromInnerEditEl = this.#getFromInnerOrSelfEditEl(currentEditItemEl);
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
        this.#lastEditItemRef?.inactiveEdit();
        this.#lastEditItemEl = undefined;
    }
    /** @private */
    #storeLastEditItem(element) {
        this.#lastEditItemEl = element;
        this.#lastEditItemRef = this.getEditItem(element);
    }
    /** @private */
    #isInZoneEditEl(element) {
        return !!this.#getFromInnerOrSelfEditEl(element);
    }
    /** @private */
    #getElementFromEvent(element) {
        const _element = element?.target;
        if (!_element) {
            throw new Error('Event.target does not contain HTMLElement');
        }
        return _element;
    }
    /** @private */
    #getFromInnerOrSelfEditEl(element) {
        return element.closest(CDK_EDIT_CSS_CLASS);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridEditManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridEditManager }); }
}
export { CdkDatagridEditManager };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: CdkDatagridEditManager, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBRXREOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQTJCM0Q7Ozs7O0dBS0c7QUFDSCxNQUNhLHNCQUFzQjtJQURuQztRQU1FOztXQUVHO1FBQ0gsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQjs7OztZQUlJO1FBQ0ssV0FBTSxHQUFlLElBQUksR0FBRyxFQUFFLENBQUM7S0F5SXpDO0lBOUlDOzs7O1FBSUk7SUFDSyxNQUFNLENBQXlCO0lBRXhDOzs7O09BSUc7SUFDSCxlQUFlLENBQXNCO0lBRXJDOzs7O09BSUc7SUFDSCxnQkFBZ0IsQ0FBOEI7SUFFOUM7Ozs7T0FJRztJQUNILGlCQUFpQixDQUFDLEtBQVk7UUFDNUIsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUsscUJBQXFCLEVBQUU7WUFDbEQsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcs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O1FBQ25FLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsZUFBZTtJQUNmLHlCQUF5QixDQUFDLE9BQWdCO1FBQ3hDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBVSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OEdBdkpVLHNCQUFzQjtrSEFBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgQ0RLX0VESVRfVEFHX0NMQVNTIGlzIGEgdW5pcXVlIGlkZW50aWZpZXIgd2hvc2UgdXNlIHNob3VsZCBtYXRjaCB0aGUgQ2RrRGF0YWdyaWRFZGl0XG4gKiBpbnRlcmZhY2UgaW4gdGhlIGRpcmVjdGl2ZSB3aGVyZSBpdCBpcyB1c2VkLlxuICpcbiAqIEBleGFtcGxlIENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSBpbiBjZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUudHNcbiAqL1xuZXhwb3J0IGNvbnN0IENES19FRElUX1RBR19DTEFTUyA9ICdjZGstZGF0YWdyaWQtZWRpdCc7XG5cbi8qKlxuICogVGhlIENES19FRElUX0NTU19DTEFTUyBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBwcm9wZXIgaHRtbCBkb20gbm9kZSByZWZlcmVuY2UgaW4gb3JkZXIgdG8gZ2V0IHRoZVxuICogZGlyZWN0aXZlIGluc3RhbmNlIG9mIENka0RhdGFncmlkRWRpdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfRURJVF9DU1NfQ0xBU1MgPSBgLiR7Q0RLX0VESVRfVEFHX0NMQVNTfWA7XG5cbi8qKlxuICogVGhlIENka01hcEVkaXQgc3RvcmVzIGEgY29sbGVjdGlvbiBvZiBodG1sIGRvbSBub2RlIHJlZmVyZW5jZXMgYW5kIGRpcmVjdGl2ZSBpbnN0YW5jZXMgb2ZcbiAqIENka0RhdGFncmlkRWRpdC5cbiAqL1xuZXhwb3J0IHR5cGUgQ2RrTWFwRWRpdCA9IE1hcDxIVE1MRWxlbWVudCwgQ2RrRGF0YWdyaWRFZGl0PjtcblxuLyoqXG4gKiBBbiBpbnRlcmZhY2Ugd2hpY2ggc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGNvcnJlc3BvbmRpbmcgRGlyZWN0aXZlLlxuICpcbiAqIEBleGFtcGxlIENka0RhdGFncmlkRWRpdERpcmVjdGl2ZSBpbiBjZGstZGF0YWdyaWQtZWRpdC5kaXJlY3RpdmUudHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtEYXRhZ3JpZEVkaXQge1xuICBhY3RpdmVFZGl0KCk6IHZvaWQ7XG4gIGluYWN0aXZlRWRpdCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEFuIGV2ZW50IHdoaWNoIGhvbGQgaW4gdGFyZ2V0IHRoZSBIVE1MRWxlbWVudCB3aGljaCBpcyBleGFjdGx5IHRoZSBvbmUgaW4gQ2RrTWFwRWRpdFxuICpcbiAqIEBzZWUgQ2RrTWFwRWRpdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50V2l0aFRhcmdldDxFbGVtZW50PiB7XG4gIHRhcmdldDogRWxlbWVudDtcbn1cblxuLyoqXG4gKiBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyIHByb3ZpZGVzIHNvbWUgdXNlZnVsIG1ldGhvZHMgZm9yIHdyaXRlLCByZWFkLCBkZWxldGUgb3IgaW50ZXJhY3RpbmdcbiAqIHdpdGggZGlyZWN0aXZlIGluc3RhbmNlcyBvZiBDZGtEYXRhZ3JpZEVkaXQuXG4gKlxuICogQGV4YW1wbGUgdGVzdC9jZGstZGF0YWdyaWQtZWRpdC5tYW5hZ2VyLnNwZWMudHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENka0RhdGFncmlkRWRpdE1hbmFnZXI8XG4gIEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50LFxuICBfRXZlbnQgZXh0ZW5kcyBFdmVudFdpdGhUYXJnZXQ8RWxlbWVudD4gPSBFdmVudFdpdGhUYXJnZXQ8RWxlbWVudD4sXG4gIEVkaXRhYmxlIGV4dGVuZHMgQ2RrRGF0YWdyaWRFZGl0ID0gQ2RrRGF0YWdyaWRFZGl0LFxuPiB7XG4gIC8qKlxuICAgKiBpbkNlbGxab25lIGlzIGEgYm9vbGVhbiB3aGljaCBpbmRpY2F0ZXMgaWYgdGhlIG1vdXNlIGV2ZW50IGlzIGluIHRoZSBjZWxsIHpvbmUuXG4gICAqL1xuICBpbkNlbGxab25lID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBzZWUgQ2RrTWFwRWRpdCBpbiBjZGstZGF0YWdyaWQtZWRpdC5tYW5hZ2VyLnRzXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKiovXG4gIHJlYWRvbmx5ICNlZGl0czogQ2RrTWFwRWRpdCA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogVGhlICNsYXN0RWRpdEl0ZW1FbCBpcyB0aGUgbGFzdCBlZGl0ZWQgZWxlbWVudC5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICAjbGFzdEVkaXRJdGVtRWw6IEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFRoZSAjbGFzdEVkaXRJdGVtUmVmIGlzIHRoZSBsYXN0IGVkaXRlZCBDZGtEYXRhZ3JpZEVkaXQgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gICNsYXN0RWRpdEl0ZW1SZWY6IENka0RhdGFncmlkRWRpdCB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogc2V0QWN0aXZlRWRpdEl0ZW0gZXh0cmFjdHMgYW5kIGZpbmRzIHRoZSByaWdodCBDREtfRURJVF9DU1NfQ0xBU1MgZG9tTm9kZVxuICAgKiBmcm9tIGV2ZW50LnRhcmdldCBpbiBvcmRlciB0byBwdWxsIHRoZSBjb3JyZWN0IGRpcmVjdGl2ZSBpbnN0YW5jZSBmcm9tIENka01hcEVkaXQgdG8gaW50ZXJhY3RcbiAgICogd2l0aCBDZGtEYXRhZ3JpZEVkaXQuYWN0aXZlRWRpdCgpIGFuZCBDZGtEYXRhZ3JpZEVkaXQuaW5hY3RpdmVFZGl0KCkuXG4gICAqL1xuICBzZXRBY3RpdmVFZGl0SXRlbShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBjdXJyZW50RWRpdEFibGVJdGVtRWwgPSB0aGlzLmdldEN1cnJlbnRJdGVtKGV2ZW50KTtcbiAgICBpZiAoIWN1cnJlbnRFZGl0QWJsZUl0ZW1FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNsYXN0RWRpdEl0ZW1FbCA9PT0gY3VycmVudEVkaXRBYmxlSXRlbUVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI2xhc3RFZGl0SXRlbUVsKSB7XG4gICAgICB0aGlzLnNldEluYWN0aXZlTGFzdEVkaXRJdGVtKCk7XG4gICAgfVxuXG4gICAgdGhpcy4jc3RvcmVMYXN0RWRpdEl0ZW0oY3VycmVudEVkaXRBYmxlSXRlbUVsKTtcbiAgICB0aGlzLmdldEVkaXRJdGVtKGN1cnJlbnRFZGl0QWJsZUl0ZW1FbCk/LmFjdGl2ZUVkaXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRFZGl0SXRlbSBzZXRzIGVsZW1lbnQgYW5kIGVkaXRhYmxlIGluIENka01hcEVkaXRcbiAgICovXG4gIHNldEVkaXRJdGVtKGVsZW1lbnQ6IEVsZW1lbnQsIGVkaXRhYmxlOiBFZGl0YWJsZSkge1xuICAgIHRoaXMuI2VkaXRzLnNldChlbGVtZW50LCBlZGl0YWJsZSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RWRpdEl0ZW0gcmV0dXJucyB0aGUgZGlyZWN0aXZlIGluc3RhbmNlIGJ5IGdpdmVuIGVsZW1lbnQgcmVmZXJlbmNlXG4gICAqL1xuICBnZXRFZGl0SXRlbShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuI2VkaXRzLmdldChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRJbmFjdGl2ZUVkaXRJdGVtIHNldHMgdGhlIGl0ZW0gdG8gaW5hY3RpdmUuXG4gICAqL1xuICBzZXRJbmFjdGl2ZUVkaXRJdGVtKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGN1cnJlbnRFZGl0QWJsZUl0ZW1FbCA9IHRoaXMuZ2V0Q3VycmVudEl0ZW0oZXZlbnQpO1xuICAgIGlmICghY3VycmVudEVkaXRBYmxlSXRlbUVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5nZXRFZGl0SXRlbShjdXJyZW50RWRpdEFibGVJdGVtRWwpPy5pbmFjdGl2ZUVkaXQoKTtcbiAgICAvLyBAdG9kbzogcmVtb3ZlIHRoaXMgbGF0ZXIgd2hlbiBrZXlib2FyZCBtb3ZpbmcgaXMgd29ya2luZy4gVGhpcyBpcyBqdXN0IGZvciBhdm9pZGluZyB0YWJiaW5nIVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogZGVsZXRlRWRpdEl0ZW0gZGVsZXRlcyB0aGUgZGlyZWN0aXZlIGluc3RhbmNlIGZyb20gQ2RrTWFwRWRpdCBieSBnaXZlbiBlbGVtZW50IHJlZmVyZW5jZVxuICAgKi9cbiAgZGVsZXRlRWRpdEl0ZW0oZWxlbWVudDogRWxlbWVudCkge1xuICAgIGNvbnN0IGRlbGV0ZWQgPSB0aGlzLiNlZGl0cy5kZWxldGUoZWxlbWVudCk7XG4gICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5nZXRFZGl0SXRlbShlbGVtZW50KTtcbiAgICBpZiAoZGVsZXRlZCAmJiBkaXJlY3RpdmUpIGRpcmVjdGl2ZS5pbmFjdGl2ZUVkaXQoKTtcbiAgfVxuXG4gIGlzSW5ab25lRWRpdEl0ZW0oZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgY3VycmVudEVkaXRJdGVtRWwgPSB0aGlzLiNnZXRFbGVtZW50RnJvbUV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gKHRoaXMuaW5DZWxsWm9uZSA9IHRoaXMuI2lzSW5ab25lRWRpdEVsKGN1cnJlbnRFZGl0SXRlbUVsKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0Q3VycmVudEl0ZW0gcmV0dXJucyB0aGUgY3VycmVudCBlZGl0ZWQgZWxlbWVudFxuICAgKi9cbiAgZ2V0Q3VycmVudEl0ZW0oZXZlbnQ6IEV2ZW50KSB7XG4gICAgbGV0IGN1cnJlbnRFZGl0SXRlbUVsID0gdGhpcy4jZ2V0RWxlbWVudEZyb21FdmVudChldmVudCk7XG5cbiAgICBjb25zdCBpc0luWm9uZUVkaXRFbCA9IHRoaXMuI2lzSW5ab25lRWRpdEVsKGN1cnJlbnRFZGl0SXRlbUVsKTtcbiAgICBpZiAoIWlzSW5ab25lRWRpdEVsKSB7XG4gICAgICB0aGlzLnNldEluYWN0aXZlTGFzdEVkaXRJdGVtKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmcm9tSW5uZXJFZGl0RWwgPSB0aGlzLiNnZXRGcm9tSW5uZXJPclNlbGZFZGl0RWwoY3VycmVudEVkaXRJdGVtRWwpO1xuICAgIGlmIChmcm9tSW5uZXJFZGl0RWwpIHtcbiAgICAgIGN1cnJlbnRFZGl0SXRlbUVsID0gZnJvbUlubmVyRWRpdEVsO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudEVkaXRJdGVtRWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZvdW5kICR7Q0RLX0VESVRfQ1NTX0NMQVNTfSBlbGVtZW50IWApO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50RWRpdEl0ZW1FbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSBzZXRzIHRoZSBsYXN0IGVkaXRlZCBlbGVtZW50IGluYWN0aXZlXG4gICAqL1xuICBzZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSgpIHtcbiAgICB0aGlzLiNsYXN0RWRpdEl0ZW1SZWY/LmluYWN0aXZlRWRpdCgpO1xuICAgIHRoaXMuI2xhc3RFZGl0SXRlbUVsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gICNzdG9yZUxhc3RFZGl0SXRlbShlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy4jbGFzdEVkaXRJdGVtRWwgPSBlbGVtZW50O1xuICAgIHRoaXMuI2xhc3RFZGl0SXRlbVJlZiA9IHRoaXMuZ2V0RWRpdEl0ZW0oZWxlbWVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgI2lzSW5ab25lRWRpdEVsKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICByZXR1cm4gISF0aGlzLiNnZXRGcm9tSW5uZXJPclNlbGZFZGl0RWwoZWxlbWVudCk7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgI2dldEVsZW1lbnRGcm9tRXZlbnQoZWxlbWVudDogRXZlbnQpIHtcbiAgICBjb25zdCBfZWxlbWVudCA9IChlbGVtZW50IGFzIHVua25vd24gYXMgX0V2ZW50KT8udGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKCFfZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudC50YXJnZXQgZG9lcyBub3QgY29udGFpbiBIVE1MRWxlbWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gX2VsZW1lbnQ7XG4gIH1cblxuICAvKiogQHByaXZhdGUgKi9cbiAgI2dldEZyb21Jbm5lck9yU2VsZkVkaXRFbChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdDxFbGVtZW50PihDREtfRURJVF9DU1NfQ0xBU1MpO1xuICB9XG59XG4iXX0=