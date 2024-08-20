import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// MDC
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/material/slide-toggle";
export const CHECKED_ICON = 'bedtime';
export const UNCHECKED_ICON = 'wb_sunny';
export const CHECKED_CSS_VAR = '--avo-toggle-icon-checked';
export const UNCHECKED_CSS_VAR = '--avo-toggle-icon-unchecked';
/** @internal of angular material */
export const TOGGLE_THUMB_SEL = '.mdc-switch__icons';
export class ToggleIconComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ToggleIconComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.7", type: ToggleIconComponent, isStandalone: true, selector: "avo-toggle-icon", inputs: { color: "color", checkedIcon: "checkedIcon", unCheckedIcon: "unCheckedIcon", checked: "checked" }, outputs: { changed: "changed" }, host: { properties: { "class": "this._hostClass", "attr.style": "this._valueAsStyle" } }, ngImport: i0, template: "<mat-slide-toggle [color]=\"color\" [checked]=\"_checked\" (change)=\"_toggleChange($event)\">\n</mat-slide-toggle>\n", styles: [".dbg{border:1px solid deeppink}.dbg2{border:1px solid dodgerblue}.dbg3{border:1px solid orange}.avo-toggle-icon .mdc-switch__icons svg{display:none}.avo-toggle-icon .mdc-switch .mdc-switch__icons:before{position:absolute;top:3px;left:3px;font-size:.85rem;transition:color .5s ease}.avo-toggle-icon .mdc-switch--unselected .mdc-switch__icons:before{content:var(--avo-toggle-icon-unchecked);font-family:Material Icons,serif;color:#ffeb3b}.avo-toggle-icon .mdc-switch--selected .mdc-switch__icons:before{content:var(--avo-toggle-icon-checked);font-family:Material Icons,serif;color:#000}\n"], dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "color", "disabled", "disableRipple", "tabIndex", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ToggleIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatSlideToggleModule], template: "<mat-slide-toggle [color]=\"color\" [checked]=\"_checked\" (change)=\"_toggleChange($event)\">\n</mat-slide-toggle>\n", styles: [".dbg{border:1px solid deeppink}.dbg2{border:1px solid dodgerblue}.dbg3{border:1px solid orange}.avo-toggle-icon .mdc-switch__icons svg{display:none}.avo-toggle-icon .mdc-switch .mdc-switch__icons:before{position:absolute;top:3px;left:3px;font-size:.85rem;transition:color .5s ease}.avo-toggle-icon .mdc-switch--unselected .mdc-switch__icons:before{content:var(--avo-toggle-icon-unchecked);font-family:Material Icons,serif;color:#ffeb3b}.avo-toggle-icon .mdc-switch--selected .mdc-switch__icons:before{content:var(--avo-toggle-icon-checked);font-family:Material Icons,serif;color:#000}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }], propDecorators: { _hostClass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uL3NyYy90b2dnbGUtaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24vc3JjL3RvZ2dsZS1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RCxNQUFNO0FBQ04sT0FBTyxFQUF3QixvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBRTVGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDdEMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsMkJBQTJCLENBQUM7QUFDM0QsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsNkJBQTZCLENBQUM7QUFDL0Qsb0NBQW9DO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO0FBV3JELE1BQU0sT0FBTyxtQkFBbUI7SUFhOUIsWUFDbUIsSUFBdUIsRUFDdkIsVUFBd0I7UUFEeEIsU0FBSSxHQUFKLElBQUksQ0FBbUI7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQWQzQyxpQkFBaUI7UUFDUixxQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFFNUMsaUJBQWlCO1FBQ1IsdUJBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFFaEQsaUJBQWlCO1FBQ2pCLFdBQU0sR0FBaUIsU0FBUyxDQUFDO1FBRWpDLGlCQUFpQjtRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBUUEsZUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBUWhELDhFQUE4RTtRQUMzRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVV6RCxrRUFBa0U7UUFDekQsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFDbkIsaUJBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7UUFFbEYsb0VBQW9FO1FBQzNELGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLE1BQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDO0lBNUJyRixDQUFDO0lBS0osSUFDWSxhQUFhO1FBQ3ZCLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBS0QsMkVBQTJFO0lBQzNFLElBQWEsS0FBSyxDQUFDLEtBQW1CO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBVUQsbUVBQW1FO0lBQ25FLElBQWEsT0FBTyxDQUFDLE9BQWdCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQTJCO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDOzhHQXpEVSxtQkFBbUI7a0dBQW5CLG1CQUFtQixrVENoQ2hDLHVIQUVBLG1vQkQ0Qlksb0JBQW9COzsyRkFFbkIsbUJBQW1CO2tCQVQvQixTQUFTOytCQUNFLGlCQUFpQixpQkFHWixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDO2lIQXFCZCxVQUFVO3NCQUQxQixXQUFXO3VCQUFDLE9BQU87Z0JBSVIsYUFBYTtzQkFEeEIsV0FBVzt1QkFBQyxZQUFZO2dCQU9OLE9BQU87c0JBQXpCLE1BQU07Z0JBR00sS0FBSztzQkFBakIsS0FBSztnQkFRRyxXQUFXO3NCQUFuQixLQUFLO2dCQUlHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBSU8sT0FBTztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vLyBNRENcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlQ2hhbmdlLCBNYXRTbGlkZVRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0VEX0lDT04gPSAnYmVkdGltZSc7XG5leHBvcnQgY29uc3QgVU5DSEVDS0VEX0lDT04gPSAnd2Jfc3VubnknO1xuZXhwb3J0IGNvbnN0IENIRUNLRURfQ1NTX1ZBUiA9ICctLWF2by10b2dnbGUtaWNvbi1jaGVja2VkJztcbmV4cG9ydCBjb25zdCBVTkNIRUNLRURfQ1NTX1ZBUiA9ICctLWF2by10b2dnbGUtaWNvbi11bmNoZWNrZWQnO1xuLyoqIEBpbnRlcm5hbCBvZiBhbmd1bGFyIG1hdGVyaWFsICovXG5leHBvcnQgY29uc3QgVE9HR0xFX1RIVU1CX1NFTCA9ICcubWRjLXN3aXRjaF9faWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdm8tdG9nZ2xlLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUtaWNvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFNsaWRlVG9nZ2xlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlSWNvbkNvbXBvbmVudCB7XG4gIC8qKiBAaW50ZXJuYWwgICovXG4gIHJlYWRvbmx5IF9jaGVja2VkX2Nzc192YXIgPSBDSEVDS0VEX0NTU19WQVI7XG5cbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgcmVhZG9ubHkgX3VuY2hlY2tlZF9jc3NfdmFyID0gVU5DSEVDS0VEX0NTU19WQVI7XG5cbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgX2NvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgX2NoZWNrZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHByaXZhdGUgcmVhZG9ubHkgX2hvc3RDbGFzcyA9ICdhdm8tdG9nZ2xlLWljb24nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5zdHlsZScpXG4gIHByaXZhdGUgZ2V0IF92YWx1ZUFzU3R5bGUoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBbdGhpcy5fY2hlY2tlZEljb24sIHRoaXMuX3VuQ2hlY2tlZEljb25dO1xuICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKHN0eWxlLmpvaW4oJzsnKSk7XG4gIH1cblxuICAvKiogV2lsbCBlbWl0IGFuIGV2ZW50IHdoZW4gZXZlciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlIGlzIGNoYW5nZWQgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqIE1hdGVyaWFsIFRoZW1lUGFsZXR0ZSB0byBiZSB1c2VkIGZvciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlICovXG4gIEBJbnB1dCgpIHNldCBjb2xvcihjb2xvcjogVGhlbWVQYWxldHRlKSB7XG4gICAgdGhpcy5fY29sb3IgPSBjb2xvciA/IGNvbG9yIDogdGhpcy5fY29sb3I7XG4gIH1cbiAgZ2V0IGNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIC8qKiBDaGVja2VkLUljb24gdG8gYmUgdXNlZCBmb3IgdGhlIHVuZGVybHlpbmcgbWF0LXNsaWRlLXRvZ2dsZSAqL1xuICBASW5wdXQoKSBjaGVja2VkSWNvbiA9IENIRUNLRURfSUNPTjtcbiAgcHJpdmF0ZSByZWFkb25seSBfY2hlY2tlZEljb24gPSBgJHt0aGlzLl9jaGVja2VkX2Nzc192YXJ9OiBcIiR7dGhpcy5jaGVja2VkSWNvbn1cImA7XG5cbiAgLyoqIFVuY2hlY2tlZC1JY29uIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgKi9cbiAgQElucHV0KCkgdW5DaGVja2VkSWNvbiA9IFVOQ0hFQ0tFRF9JQ09OO1xuICBwcml2YXRlIHJlYWRvbmx5IF91bkNoZWNrZWRJY29uID0gYCR7dGhpcy5fdW5jaGVja2VkX2Nzc192YXJ9OiBcIiR7dGhpcy51bkNoZWNrZWRJY29ufVwiYDtcblxuICAvKiogQ2hlY2tlZCBzdGF0ZSB0byBiZSB1c2VkIGZvciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlICovXG4gIEBJbnB1dCgpIHNldCBjaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLl9jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIGdldCBjaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG5cbiAgX3RvZ2dsZUNoYW5nZShldmVudDogTWF0U2xpZGVUb2dnbGVDaGFuZ2UpIHtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdChldmVudC5jaGVja2VkKTtcbiAgfVxufVxuIiwiPG1hdC1zbGlkZS10b2dnbGUgW2NvbG9yXT1cImNvbG9yXCIgW2NoZWNrZWRdPVwiX2NoZWNrZWRcIiAoY2hhbmdlKT1cIl90b2dnbGVDaGFuZ2UoJGV2ZW50KVwiPlxuPC9tYXQtc2xpZGUtdG9nZ2xlPlxuIl19