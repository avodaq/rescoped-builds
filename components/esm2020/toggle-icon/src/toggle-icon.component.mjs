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
}
ToggleIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ToggleIconComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
ToggleIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.1", type: ToggleIconComponent, selector: "avo-toggle-icon", inputs: { color: "color", checkedIcon: "checkedIcon", unCheckedIcon: "unCheckedIcon", checked: "checked" }, outputs: { changed: "changed" }, host: { properties: { "class": "this._hostClass", "attr.style": "this._valueAsStyle" } }, ngImport: i0, template: "<mat-slide-toggle [color]=\"color\" [checked]=\"_checked\" (change)=\"_toggleChange($event)\">\n</mat-slide-toggle>\n", styles: [".dbg{border:1px solid deeppink}.dbg2{border:1px solid dodgerblue}.dbg3{border:1px solid orange}.avo-toggle-icon .mdc-switch__icons svg{display:none}.avo-toggle-icon .mdc-switch .mdc-switch__icons:before{position:absolute;top:3px;left:3px;font-size:.85rem;transition:color .5s ease}.avo-toggle-icon .mdc-switch--unselected .mdc-switch__icons:before{content:var(--avo-toggle-icon-unchecked);font-family:Material Icons,serif;color:#ffeb3b}.avo-toggle-icon .mdc-switch--selected .mdc-switch__icons:before{content:var(--avo-toggle-icon-checked);font-family:Material Icons,serif;color:#000}\n"], dependencies: [{ kind: "component", type: i2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.1", ngImport: i0, type: ToggleIconComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uL3NyYy90b2dnbGUtaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24vc3JjL3RvZ2dsZS1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU16RCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUM7QUFDekMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLDJCQUEyQixDQUFDO0FBQzNELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLDZCQUE2QixDQUFDO0FBQy9ELG9DQUFvQztBQUNwQyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztBQVNyRCxNQUFNLE9BQU8sbUJBQW1CO0lBYTlCLFlBQ21CLElBQXVCLEVBQ3ZCLFVBQXdCO1FBRHhCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFkM0MsaUJBQWlCO1FBQ1IscUJBQWdCLEdBQUcsZUFBZSxDQUFDO1FBRTVDLGlCQUFpQjtRQUNSLHVCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBRWhELGlCQUFpQjtRQUNqQixXQUFNLEdBQWlCLFNBQVMsQ0FBQztRQUVqQyxpQkFBaUI7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFBLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQVFoRCw4RUFBOEU7UUFDM0QsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFVekQsa0VBQWtFO1FBQ3pELGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLE1BQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO1FBRWxGLG9FQUFvRTtRQUMzRCxrQkFBYSxHQUFHLGNBQWMsQ0FBQztRQUN2QixtQkFBYyxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixNQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztJQTVCckYsQ0FBQztJQUtKLElBQ1ksYUFBYTtRQUN2QixNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUtELDJFQUEyRTtJQUMzRSxJQUFhLEtBQUssQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQVVELG1FQUFtRTtJQUNuRSxJQUFhLE9BQU8sQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUEyQjtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0hBekRVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDhSQzlCaEMsdUhBRUE7MkZENEJhLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxpQkFBaUIsaUJBR1osaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTttSUFxQjlCLFVBQVU7c0JBRDFCLFdBQVc7dUJBQUMsT0FBTztnQkFJUixhQUFhO3NCQUR4QixXQUFXO3VCQUFDLFlBQVk7Z0JBT04sT0FBTztzQkFBekIsTUFBTTtnQkFHTSxLQUFLO3NCQUFqQixLQUFLO2dCQVFHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBSUcsYUFBYTtzQkFBckIsS0FBSztnQkFJTyxPQUFPO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIE1EQ1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tFRF9JQ09OID0gJ2JlZHRpbWUnO1xuZXhwb3J0IGNvbnN0IFVOQ0hFQ0tFRF9JQ09OID0gJ3diX3N1bm55JztcbmV4cG9ydCBjb25zdCBDSEVDS0VEX0NTU19WQVIgPSAnLS1hdm8tdG9nZ2xlLWljb24tY2hlY2tlZCc7XG5leHBvcnQgY29uc3QgVU5DSEVDS0VEX0NTU19WQVIgPSAnLS1hdm8tdG9nZ2xlLWljb24tdW5jaGVja2VkJztcbi8qKiBAaW50ZXJuYWwgb2YgYW5ndWxhciBtYXRlcmlhbCAqL1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9USFVNQl9TRUwgPSAnLm1kYy1zd2l0Y2hfX2ljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZvLXRvZ2dsZS1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZ2dsZS1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9nZ2xlLWljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUljb25Db21wb25lbnQge1xuICAvKiogQGludGVybmFsICAqL1xuICByZWFkb25seSBfY2hlY2tlZF9jc3NfdmFyID0gQ0hFQ0tFRF9DU1NfVkFSO1xuXG4gIC8qKiBAaW50ZXJuYWwgICovXG4gIHJlYWRvbmx5IF91bmNoZWNrZWRfY3NzX3ZhciA9IFVOQ0hFQ0tFRF9DU1NfVkFSO1xuXG4gIC8qKiBAaW50ZXJuYWwgICovXG4gIF9jb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuXG4gIC8qKiBAaW50ZXJuYWwgICovXG4gIF9jaGVja2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBwcml2YXRlIHJlYWRvbmx5IF9ob3N0Q2xhc3MgPSAnYXZvLXRvZ2dsZS1pY29uJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuc3R5bGUnKVxuICBwcml2YXRlIGdldCBfdmFsdWVBc1N0eWxlKCkge1xuICAgIGNvbnN0IHN0eWxlID0gW3RoaXMuX2NoZWNrZWRJY29uLCB0aGlzLl91bkNoZWNrZWRJY29uXTtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShzdHlsZS5qb2luKCc7JykpO1xuICB9XG5cbiAgLyoqIFdpbGwgZW1pdCBhbiBldmVudCB3aGVuIGV2ZXIgdGhlIHVuZGVybHlpbmcgbWF0LXNsaWRlLXRvZ2dsZSBpcyBjaGFuZ2VkICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKiBNYXRlcmlhbCBUaGVtZVBhbGV0dGUgdG8gYmUgdXNlZCBmb3IgdGhlIHVuZGVybHlpbmcgbWF0LXNsaWRlLXRvZ2dsZSAqL1xuICBASW5wdXQoKSBzZXQgY29sb3IoY29sb3I6IFRoZW1lUGFsZXR0ZSkge1xuICAgIHRoaXMuX2NvbG9yID0gY29sb3IgPyBjb2xvciA6IHRoaXMuX2NvbG9yO1xuICB9XG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICAvKiogQ2hlY2tlZC1JY29uIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgKi9cbiAgQElucHV0KCkgY2hlY2tlZEljb24gPSBDSEVDS0VEX0lDT047XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NoZWNrZWRJY29uID0gYCR7dGhpcy5fY2hlY2tlZF9jc3NfdmFyfTogXCIke3RoaXMuY2hlY2tlZEljb259XCJgO1xuXG4gIC8qKiBVbmNoZWNrZWQtSWNvbiB0byBiZSB1c2VkIGZvciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlICovXG4gIEBJbnB1dCgpIHVuQ2hlY2tlZEljb24gPSBVTkNIRUNLRURfSUNPTjtcbiAgcHJpdmF0ZSByZWFkb25seSBfdW5DaGVja2VkSWNvbiA9IGAke3RoaXMuX3VuY2hlY2tlZF9jc3NfdmFyfTogXCIke3RoaXMudW5DaGVja2VkSWNvbn1cImA7XG5cbiAgLyoqIENoZWNrZWQgc3RhdGUgdG8gYmUgdXNlZCBmb3IgdGhlIHVuZGVybHlpbmcgbWF0LXNsaWRlLXRvZ2dsZSAqL1xuICBASW5wdXQoKSBzZXQgY2hlY2tlZChjaGVja2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5fY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuXG4gIF90b2dnbGVDaGFuZ2UoZXZlbnQ6IE1hdFNsaWRlVG9nZ2xlQ2hhbmdlKSB7XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQoZXZlbnQuY2hlY2tlZCk7XG4gIH1cbn1cbiIsIjxtYXQtc2xpZGUtdG9nZ2xlIFtjb2xvcl09XCJjb2xvclwiIFtjaGVja2VkXT1cIl9jaGVja2VkXCIgKGNoYW5nZSk9XCJfdG9nZ2xlQ2hhbmdlKCRldmVudClcIj5cbjwvbWF0LXNsaWRlLXRvZ2dsZT5cbiJdfQ==