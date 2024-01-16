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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridEditManager, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridEditManager }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: CdkDatagridEditManager, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9kYXRhZ3JpZC9zcmMvY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDO0FBRXREOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztBQTJCM0Q7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBTUU7O1dBRUc7UUFDSCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5COzs7O1lBSUk7UUFDSyxXQUFNLEdBQWUsSUFBSSxHQUFHLEVBQUUsQ0FBQztLQXlJekM7SUE5SUM7Ozs7UUFJSTtJQUNLLE1BQU0sQ0FBeUI7SUFFeEM7Ozs7T0FJRztJQUNILGVBQWUsQ0FBc0I7SUFFckM7Ozs7T0FJRztJQUNILGdCQUFnQixDQUE4QjtJQUU5Qzs7OztPQUlHO0lBQ0gsaUJBQWlCLENBQUMsS0FBWTtRQUM1QixNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzFCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxxQkFBcUIsRUFBRTtZQUNsRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMs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LENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxlQUFlO0lBQ2YseUJBQXlCLENBQUMsT0FBZ0I7UUFDeEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFVLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs4R0F2SlUsc0JBQXNCO2tIQUF0QixzQkFBc0I7OzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhlIENES19FRElUX1RBR19DTEFTUyBpcyBhIHVuaXF1ZSBpZGVudGlmaWVyIHdob3NlIHVzZSBzaG91bGQgbWF0Y2ggdGhlIENka0RhdGFncmlkRWRpdFxuICogaW50ZXJmYWNlIGluIHRoZSBkaXJlY3RpdmUgd2hlcmUgaXQgaXMgdXNlZC5cbiAqXG4gKiBAZXhhbXBsZSBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgaW4gY2RrLWRhdGFncmlkLWVkaXQuZGlyZWN0aXZlLnRzXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfRURJVF9UQUdfQ0xBU1MgPSAnY2RrLWRhdGFncmlkLWVkaXQnO1xuXG4vKipcbiAqIFRoZSBDREtfRURJVF9DU1NfQ0xBU1MgaXMgdXNlZCB0byBxdWVyeSB0aGUgcHJvcGVyIGh0bWwgZG9tIG5vZGUgcmVmZXJlbmNlIGluIG9yZGVyIHRvIGdldCB0aGVcbiAqIGRpcmVjdGl2ZSBpbnN0YW5jZSBvZiBDZGtEYXRhZ3JpZEVkaXQgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY29uc3QgQ0RLX0VESVRfQ1NTX0NMQVNTID0gYC4ke0NES19FRElUX1RBR19DTEFTU31gO1xuXG4vKipcbiAqIFRoZSBDZGtNYXBFZGl0IHN0b3JlcyBhIGNvbGxlY3Rpb24gb2YgaHRtbCBkb20gbm9kZSByZWZlcmVuY2VzIGFuZCBkaXJlY3RpdmUgaW5zdGFuY2VzIG9mXG4gKiBDZGtEYXRhZ3JpZEVkaXQuXG4gKi9cbmV4cG9ydCB0eXBlIENka01hcEVkaXQgPSBNYXA8SFRNTEVsZW1lbnQsIENka0RhdGFncmlkRWRpdD47XG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIHdoaWNoIHNob3VsZCBiZSB1c2VkIGluIHRoZSBjb3JyZXNwb25kaW5nIERpcmVjdGl2ZS5cbiAqXG4gKiBAZXhhbXBsZSBDZGtEYXRhZ3JpZEVkaXREaXJlY3RpdmUgaW4gY2RrLWRhdGFncmlkLWVkaXQuZGlyZWN0aXZlLnRzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrRGF0YWdyaWRFZGl0IHtcbiAgYWN0aXZlRWRpdCgpOiB2b2lkO1xuICBpbmFjdGl2ZUVkaXQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBbiBldmVudCB3aGljaCBob2xkIGluIHRhcmdldCB0aGUgSFRNTEVsZW1lbnQgd2hpY2ggaXMgZXhhY3RseSB0aGUgb25lIGluIENka01hcEVkaXRcbiAqXG4gKiBAc2VlIENka01hcEVkaXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFdmVudFdpdGhUYXJnZXQ8RWxlbWVudD4ge1xuICB0YXJnZXQ6IEVsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2RrRGF0YWdyaWRFZGl0TWFuYWdlciBwcm92aWRlcyBzb21lIHVzZWZ1bCBtZXRob2RzIGZvciB3cml0ZSwgcmVhZCwgZGVsZXRlIG9yIGludGVyYWN0aW5nXG4gKiB3aXRoIGRpcmVjdGl2ZSBpbnN0YW5jZXMgb2YgQ2RrRGF0YWdyaWRFZGl0LlxuICpcbiAqIEBleGFtcGxlIHRlc3QvY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci5zcGVjLnRzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDZGtEYXRhZ3JpZEVkaXRNYW5hZ2VyPFxuICBFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudCxcbiAgX0V2ZW50IGV4dGVuZHMgRXZlbnRXaXRoVGFyZ2V0PEVsZW1lbnQ+ID0gRXZlbnRXaXRoVGFyZ2V0PEVsZW1lbnQ+LFxuICBFZGl0YWJsZSBleHRlbmRzIENka0RhdGFncmlkRWRpdCA9IENka0RhdGFncmlkRWRpdCxcbj4ge1xuICAvKipcbiAgICogaW5DZWxsWm9uZSBpcyBhIGJvb2xlYW4gd2hpY2ggaW5kaWNhdGVzIGlmIHRoZSBtb3VzZSBldmVudCBpcyBpbiB0aGUgY2VsbCB6b25lLlxuICAgKi9cbiAgaW5DZWxsWm9uZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAc2VlIENka01hcEVkaXQgaW4gY2RrLWRhdGFncmlkLWVkaXQubWFuYWdlci50c1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICoqL1xuICByZWFkb25seSAjZWRpdHM6IENka01hcEVkaXQgPSBuZXcgTWFwKCk7XG5cbiAgLyoqXG4gICAqIFRoZSAjbGFzdEVkaXRJdGVtRWwgaXMgdGhlIGxhc3QgZWRpdGVkIGVsZW1lbnQuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgI2xhc3RFZGl0SXRlbUVsOiBFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBUaGUgI2xhc3RFZGl0SXRlbVJlZiBpcyB0aGUgbGFzdCBlZGl0ZWQgQ2RrRGF0YWdyaWRFZGl0IHJlZmVyZW5jZS5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICAjbGFzdEVkaXRJdGVtUmVmOiBDZGtEYXRhZ3JpZEVkaXQgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIHNldEFjdGl2ZUVkaXRJdGVtIGV4dHJhY3RzIGFuZCBmaW5kcyB0aGUgcmlnaHQgQ0RLX0VESVRfQ1NTX0NMQVNTIGRvbU5vZGVcbiAgICogZnJvbSBldmVudC50YXJnZXQgaW4gb3JkZXIgdG8gcHVsbCB0aGUgY29ycmVjdCBkaXJlY3RpdmUgaW5zdGFuY2UgZnJvbSBDZGtNYXBFZGl0IHRvIGludGVyYWN0XG4gICAqIHdpdGggQ2RrRGF0YWdyaWRFZGl0LmFjdGl2ZUVkaXQoKSBhbmQgQ2RrRGF0YWdyaWRFZGl0LmluYWN0aXZlRWRpdCgpLlxuICAgKi9cbiAgc2V0QWN0aXZlRWRpdEl0ZW0oZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgY3VycmVudEVkaXRBYmxlSXRlbUVsID0gdGhpcy5nZXRDdXJyZW50SXRlbShldmVudCk7XG4gICAgaWYgKCFjdXJyZW50RWRpdEFibGVJdGVtRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jbGFzdEVkaXRJdGVtRWwgPT09IGN1cnJlbnRFZGl0QWJsZUl0ZW1FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNsYXN0RWRpdEl0ZW1FbCkge1xuICAgICAgdGhpcy5zZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSgpO1xuICAgIH1cblxuICAgIHRoaXMuI3N0b3JlTGFzdEVkaXRJdGVtKGN1cnJlbnRFZGl0QWJsZUl0ZW1FbCk7XG4gICAgdGhpcy5nZXRFZGl0SXRlbShjdXJyZW50RWRpdEFibGVJdGVtRWwpPy5hY3RpdmVFZGl0KCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0RWRpdEl0ZW0gc2V0cyBlbGVtZW50IGFuZCBlZGl0YWJsZSBpbiBDZGtNYXBFZGl0XG4gICAqL1xuICBzZXRFZGl0SXRlbShlbGVtZW50OiBFbGVtZW50LCBlZGl0YWJsZTogRWRpdGFibGUpIHtcbiAgICB0aGlzLiNlZGl0cy5zZXQoZWxlbWVudCwgZWRpdGFibGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldEVkaXRJdGVtIHJldHVybnMgdGhlIGRpcmVjdGl2ZSBpbnN0YW5jZSBieSBnaXZlbiBlbGVtZW50IHJlZmVyZW5jZVxuICAgKi9cbiAgZ2V0RWRpdEl0ZW0oZWxlbWVudDogRWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLiNlZGl0cy5nZXQoZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0SW5hY3RpdmVFZGl0SXRlbSBzZXRzIHRoZSBpdGVtIHRvIGluYWN0aXZlLlxuICAgKi9cbiAgc2V0SW5hY3RpdmVFZGl0SXRlbShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBjdXJyZW50RWRpdEFibGVJdGVtRWwgPSB0aGlzLmdldEN1cnJlbnRJdGVtKGV2ZW50KTtcbiAgICBpZiAoIWN1cnJlbnRFZGl0QWJsZUl0ZW1FbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0RWRpdEl0ZW0oY3VycmVudEVkaXRBYmxlSXRlbUVsKT8uaW5hY3RpdmVFZGl0KCk7XG4gICAgLy8gQHRvZG86IHJlbW92ZSB0aGlzIGxhdGVyIHdoZW4ga2V5Ym9hcmQgbW92aW5nIGlzIHdvcmtpbmcuIFRoaXMgaXMganVzdCBmb3IgYXZvaWRpbmcgdGFiYmluZyFcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlbGV0ZUVkaXRJdGVtIGRlbGV0ZXMgdGhlIGRpcmVjdGl2ZSBpbnN0YW5jZSBmcm9tIENka01hcEVkaXQgYnkgZ2l2ZW4gZWxlbWVudCByZWZlcmVuY2VcbiAgICovXG4gIGRlbGV0ZUVkaXRJdGVtKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBjb25zdCBkZWxldGVkID0gdGhpcy4jZWRpdHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuZ2V0RWRpdEl0ZW0oZWxlbWVudCk7XG4gICAgaWYgKGRlbGV0ZWQgJiYgZGlyZWN0aXZlKSBkaXJlY3RpdmUuaW5hY3RpdmVFZGl0KCk7XG4gIH1cblxuICBpc0luWm9uZUVkaXRJdGVtKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGN1cnJlbnRFZGl0SXRlbUVsID0gdGhpcy4jZ2V0RWxlbWVudEZyb21FdmVudChldmVudCk7XG4gICAgcmV0dXJuICh0aGlzLmluQ2VsbFpvbmUgPSB0aGlzLiNpc0luWm9uZUVkaXRFbChjdXJyZW50RWRpdEl0ZW1FbCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldEN1cnJlbnRJdGVtIHJldHVybnMgdGhlIGN1cnJlbnQgZWRpdGVkIGVsZW1lbnRcbiAgICovXG4gIGdldEN1cnJlbnRJdGVtKGV2ZW50OiBFdmVudCkge1xuICAgIGxldCBjdXJyZW50RWRpdEl0ZW1FbCA9IHRoaXMuI2dldEVsZW1lbnRGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgY29uc3QgaXNJblpvbmVFZGl0RWwgPSB0aGlzLiNpc0luWm9uZUVkaXRFbChjdXJyZW50RWRpdEl0ZW1FbCk7XG4gICAgaWYgKCFpc0luWm9uZUVkaXRFbCkge1xuICAgICAgdGhpcy5zZXRJbmFjdGl2ZUxhc3RFZGl0SXRlbSgpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZnJvbUlubmVyRWRpdEVsID0gdGhpcy4jZ2V0RnJvbUlubmVyT3JTZWxmRWRpdEVsKGN1cnJlbnRFZGl0SXRlbUVsKTtcbiAgICBpZiAoZnJvbUlubmVyRWRpdEVsKSB7XG4gICAgICBjdXJyZW50RWRpdEl0ZW1FbCA9IGZyb21Jbm5lckVkaXRFbDtcbiAgICB9XG5cbiAgICBpZiAoIWN1cnJlbnRFZGl0SXRlbUVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmb3VuZCAke0NES19FRElUX0NTU19DTEFTU30gZWxlbWVudCFgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEVkaXRJdGVtRWw7XG4gIH1cblxuICAvKipcbiAgICogc2V0SW5hY3RpdmVMYXN0RWRpdEl0ZW0gc2V0cyB0aGUgbGFzdCBlZGl0ZWQgZWxlbWVudCBpbmFjdGl2ZVxuICAgKi9cbiAgc2V0SW5hY3RpdmVMYXN0RWRpdEl0ZW0oKSB7XG4gICAgdGhpcy4jbGFzdEVkaXRJdGVtUmVmPy5pbmFjdGl2ZUVkaXQoKTtcbiAgICB0aGlzLiNsYXN0RWRpdEl0ZW1FbCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICAjc3RvcmVMYXN0RWRpdEl0ZW0oZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuI2xhc3RFZGl0SXRlbUVsID0gZWxlbWVudDtcbiAgICB0aGlzLiNsYXN0RWRpdEl0ZW1SZWYgPSB0aGlzLmdldEVkaXRJdGVtKGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gICNpc0luWm9uZUVkaXRFbChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgcmV0dXJuICEhdGhpcy4jZ2V0RnJvbUlubmVyT3JTZWxmRWRpdEVsKGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gICNnZXRFbGVtZW50RnJvbUV2ZW50KGVsZW1lbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgX2VsZW1lbnQgPSAoZWxlbWVudCBhcyB1bmtub3duIGFzIF9FdmVudCk/LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICghX2VsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXZlbnQudGFyZ2V0IGRvZXMgbm90IGNvbnRhaW4gSFRNTEVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIF9lbGVtZW50O1xuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gICNnZXRGcm9tSW5uZXJPclNlbGZFZGl0RWwoZWxlbWVudDogRWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Q8RWxlbWVudD4oQ0RLX0VESVRfQ1NTX0NMQVNTKTtcbiAgfVxufVxuIl19