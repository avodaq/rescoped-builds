import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/material/slide-toggle";
export const CHECKED_ICON = 'bedtime';
export const UNCHECKED_ICON = 'wb_sunny';
export const CHECKED_CSS_VAR = '--avo-toggle-icon-checked';
export const UNCHECKED_CSS_VAR = '--avo-toggle-icon-unchecked';
/** @internal of angular material */
export const TOGGLE_THUMB_SEL = '.mdc-switch__icons';
class ToggleIconComponent {
    constructor(_cdr, _sanitizer) {
        this._cdr = _cdr;
        this._sanitizer = _sanitizer;
        /** @internal  */
        this._checked_css_var = CHECKED_CSS_VAR;
        /** @internal  */
        this._unchecked_css_var = UNCHECKED_CSS_VAR;
        /** @internal  */
        this._color = 'primary';
        /** @internal  */
        this._checked = false;
        this._hostClass = 'avo-toggle-icon';
        /** Will emit an event when ever the underlying mat-slide-toggle is changed */
        this.changed = new EventEmitter();
        /** Checked-Icon to be used for the underlying mat-slide-toggle */
        this.checkedIcon = CHECKED_ICON;
        this._checkedIcon = `${this._checked_css_var}: "${this.checkedIcon}"`;
        /** Unchecked-Icon to be used for the underlying mat-slide-toggle */
        this.unCheckedIcon = UNCHECKED_ICON;
        this._unCheckedIcon = `${this._unchecked_css_var}: "${this.unCheckedIcon}"`;
    }
    get _valueAsStyle() {
        const style = [this._checkedIcon, this._unCheckedIcon];
        return this._sanitizer.bypassSecurityTrustStyle(style.join(';'));
    }
    /** Material ThemePalette to be used for the underlying mat-slide-toggle */
    set color(color) {
        this._color = color ? color : this._color;
    }
    get color() {
        return this._color;
    }
    /** Checked state to be used for the underlying mat-slide-toggle */
    set checked(checked) {
        this._checked = checked;
        this._cdr.detectChanges();
    }
    get checked() {
        return this._checked;
    }
    _toggleChange(event) {
        this.changed.emit(event.checked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: ToggleIconComponent, selector: "avo-toggle-icon", inputs: { color: "color", checkedIcon: "checkedIcon", unCheckedIcon: "unCheckedIcon", checked: "checked" }, outputs: { changed: "changed" }, host: { properties: { "class": "this._hostClass", "attr.style": "this._valueAsStyle" } }, ngImport: i0, template: "<mat-slide-toggle [color]=\"color\" [checked]=\"_checked\" (change)=\"_toggleChange($event)\">\n</mat-slide-toggle>\n", styles: [".dbg{border:1px solid deeppink}.dbg2{border:1px solid dodgerblue}.dbg3{border:1px solid orange}.avo-toggle-icon .mdc-switch__icons svg{display:none}.avo-toggle-icon .mdc-switch .mdc-switch__icons:before{position:absolute;top:3px;left:3px;font-size:.85rem;transition:color .5s ease}.avo-toggle-icon .mdc-switch--unselected .mdc-switch__icons:before{content:var(--avo-toggle-icon-unchecked);font-family:Material Icons,serif;color:#ffeb3b}.avo-toggle-icon .mdc-switch--selected .mdc-switch__icons:before{content:var(--avo-toggle-icon-checked);font-family:Material Icons,serif;color:#000}\n"], dependencies: [{ kind: "component", type: i2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { ToggleIconComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-slide-toggle [color]=\"color\" [checked]=\"_checked\" (change)=\"_toggleChange($event)\">\n</mat-slide-toggle>\n", styles: [".dbg{border:1px solid deeppink}.dbg2{border:1px solid dodgerblue}.dbg3{border:1px solid orange}.avo-toggle-icon .mdc-switch__icons svg{display:none}.avo-toggle-icon .mdc-switch .mdc-switch__icons:before{position:absolute;top:3px;left:3px;font-size:.85rem;transition:color .5s ease}.avo-toggle-icon .mdc-switch--unselected .mdc-switch__icons:before{content:var(--avo-toggle-icon-unchecked);font-family:Material Icons,serif;color:#ffeb3b}.avo-toggle-icon .mdc-switch--selected .mdc-switch__icons:before{content:var(--avo-toggle-icon-checked);font-family:Material Icons,serif;color:#000}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }]; }, propDecorators: { _hostClass: [{
                type: HostBinding,
                args: ['class']
            }], _valueAsStyle: [{
                type: HostBinding,
                args: ['attr.style']
            }], changed: [{
                type: Output
            }], color: [{
                type: Input
            }], checkedIcon: [{
                type: Input
            }], unCheckedIcon: [{
                type: Input
            }], checked: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uL3NyYy90b2dnbGUtaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24vc3JjL3RvZ2dsZS1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU16RCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUM7QUFDekMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLDJCQUEyQixDQUFDO0FBQzNELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLDZCQUE2QixDQUFDO0FBQy9ELG9DQUFvQztBQUNwQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztBQUVyRCxNQU9hLG1CQUFtQjtJQWE5QixZQUNtQixJQUF1QixFQUN2QixVQUF3QjtRQUR4QixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFjO1FBZDNDLGlCQUFpQjtRQUNSLHFCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUU1QyxpQkFBaUI7UUFDUix1QkFBa0IsR0FBRyxpQkFBaUIsQ0FBQztRQUVoRCxpQkFBaUI7UUFDakIsV0FBTSxHQUFpQixTQUFTLENBQUM7UUFFakMsaUJBQWlCO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFRQSxlQUFVLEdBQUcsaUJBQWlCLENBQUM7UUFRaEQsOEVBQThFO1FBQzNELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBVXpELGtFQUFrRTtRQUN6RCxnQkFBVyxHQUFHLFlBQVksQ0FBQztRQUNuQixpQkFBWSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixNQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQztRQUVsRixvRUFBb0U7UUFDM0Qsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDdkIsbUJBQWMsR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsTUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUM7SUE1QnJGLENBQUM7SUFLSixJQUNZLGFBQWE7UUFDdkIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFLRCwyRUFBMkU7SUFDM0UsSUFBYSxLQUFLLENBQUMsS0FBbUI7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFVRCxtRUFBbUU7SUFDbkUsSUFBYSxPQUFPLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBMkI7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7OEdBekRVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLDhSQzlCaEMsdUhBRUE7O1NENEJhLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGlCQUFpQixpQkFHWixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO21JQXFCOUIsVUFBVTtzQkFEMUIsV0FBVzt1QkFBQyxPQUFPO2dCQUlSLGFBQWE7c0JBRHhCLFdBQVc7dUJBQUMsWUFBWTtnQkFPTixPQUFPO3NCQUF6QixNQUFNO2dCQUdNLEtBQUs7c0JBQWpCLEtBQUs7Z0JBUUcsV0FBVztzQkFBbkIsS0FBSztnQkFJRyxhQUFhO3NCQUFyQixLQUFLO2dCQUlPLE9BQU87c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLy8gTURDXG5pbXBvcnQgeyBNYXRTbGlkZVRvZ2dsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0VEX0lDT04gPSAnYmVkdGltZSc7XG5leHBvcnQgY29uc3QgVU5DSEVDS0VEX0lDT04gPSAnd2Jfc3VubnknO1xuZXhwb3J0IGNvbnN0IENIRUNLRURfQ1NTX1ZBUiA9ICctLWF2by10b2dnbGUtaWNvbi1jaGVja2VkJztcbmV4cG9ydCBjb25zdCBVTkNIRUNLRURfQ1NTX1ZBUiA9ICctLWF2by10b2dnbGUtaWNvbi11bmNoZWNrZWQnO1xuLyoqIEBpbnRlcm5hbCBvZiBhbmd1bGFyIG1hdGVyaWFsICovXG5leHBvcnQgY29uc3QgVE9HR0xFX1RIVU1CX1NFTCA9ICcubWRjLXN3aXRjaF9faWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdm8tdG9nZ2xlLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlSWNvbkNvbXBvbmVudCB7XG4gIC8qKiBAaW50ZXJuYWwgICovXG4gIHJlYWRvbmx5IF9jaGVja2VkX2Nzc192YXIgPSBDSEVDS0VEX0NTU19WQVI7XG5cbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgcmVhZG9ubHkgX3VuY2hlY2tlZF9jc3NfdmFyID0gVU5DSEVDS0VEX0NTU19WQVI7XG5cbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgX2NvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgX2NoZWNrZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHByaXZhdGUgcmVhZG9ubHkgX2hvc3RDbGFzcyA9ICdhdm8tdG9nZ2xlLWljb24nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5zdHlsZScpXG4gIHByaXZhdGUgZ2V0IF92YWx1ZUFzU3R5bGUoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBbdGhpcy5fY2hlY2tlZEljb24sIHRoaXMuX3VuQ2hlY2tlZEljb25dO1xuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlLmpvaW4oJzsnKSk7XG4gIH1cblxuICAvKiogV2lsbCBlbWl0IGFuIGV2ZW50IHdoZW4gZXZlciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlIGlzIGNoYW5nZWQgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqIE1hdGVyaWFsIFRoZW1lUGFsZXR0ZSB0byBiZSB1c2VkIGZvciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlICovXG4gIEBJbnB1dCgpIHNldCBjb2xvcihjb2xvcjogVGhlbWVQYWxldHRlKSB7XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvciA/IGNvbG9yIDogdGhpcy5fY29sb3I7XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8qKiBDaGVja2VkLUljb24gdG8gYmUgdXNlZCBmb3IgdGhlIHVuZGVybHlpbmcgbWF0LXNsaWRlLXRvZ2dsZSAqL1xuICBASW5wdXQoKSBjaGVja2VkSWNvbiA9IENIRUNLRURfSUNPTjtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2hlY2tlZEljb24gPSBgJHt0aGlzLl9jaGVja2VkX2Nzc192YXJ9OiBcIiR7dGhpcy5jaGVja2VkSWNvbn1cImA7XG5cbiAgLyoqIFVuY2hlY2tlZC1JY29uIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgKi9cbiAgQElucHV0KCkgdW5DaGVja2VkSWNvbiA9IFVOQ0hFQ0tFRF9JQ09OO1xuICBwcml2YXRlIHJlYWRvbmx5IF91bkNoZWNrZWRJY29uID0gYCR7dGhpcy5fdW5jaGVja2VkX2Nzc192YXJ9OiBcIiR7dGhpcy51bkNoZWNrZWRJY29ufVwiYDtcblxuICAvKiogQ2hlY2tlZCBzdGF0ZSB0byBiZSB1c2VkIGZvciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlICovXG4gIEBJbnB1dCgpIHNldCBjaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIGdldCBjaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG5cbiAgX3RvZ2dsZUNoYW5nZShldmVudDogTWF0U2xpZGVUb2dnbGVDaGFuZ2UpIHtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdChldmVudC5jaGVja2VkKTtcbiAgfVxufVxuIiwiPG1hdC1zbGlkZS10b2dnbGUgW2NvbG9yXT1cImNvbG9yXCIgW2NoZWNrZWRdPVwiX2NoZWNrZWRcIiAoY2hhbmdlKT1cIl90b2dnbGVDaGFuZ2UoJGV2ZW50KVwiPlxuPC9tYXQtc2xpZGUtdG9nZ2xlPlxuIl19