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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: ToggleIconComponent, isStandalone: true, selector: "avo-toggle-icon", inputs: { color: "color", checkedIcon: "checkedIcon", unCheckedIcon: "unCheckedIcon", checked: "checked" }, outputs: { changed: "changed" }, host: { properties: { "class": "this._hostClass", "attr.style": "this._valueAsStyle" } }, ngImport: i0, template: "<mat-slide-toggle [color]=\"color\" [checked]=\"_checked\" (change)=\"_toggleChange($event)\">\n</mat-slide-toggle>\n", styles: [".dbg{border:1px solid deeppink}.dbg2{border:1px solid dodgerblue}.dbg3{border:1px solid orange}.avo-toggle-icon .mdc-switch__icons svg{display:none}.avo-toggle-icon .mdc-switch .mdc-switch__icons:before{position:absolute;top:3px;left:3px;font-size:.85rem;transition:color .5s ease}.avo-toggle-icon .mdc-switch--unselected .mdc-switch__icons:before{content:var(--avo-toggle-icon-unchecked);font-family:Material Icons,serif;color:#ffeb3b}.avo-toggle-icon .mdc-switch--selected .mdc-switch__icons:before{content:var(--avo-toggle-icon-checked);font-family:Material Icons,serif;color:#000}\n"], dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { ToggleIconComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [MatSlideToggleModule], template: "<mat-slide-toggle [color]=\"color\" [checked]=\"_checked\" (change)=\"_toggleChange($event)\">\n</mat-slide-toggle>\n", styles: [".dbg{border:1px solid deeppink}.dbg2{border:1px solid dodgerblue}.dbg3{border:1px solid orange}.avo-toggle-icon .mdc-switch__icons svg{display:none}.avo-toggle-icon .mdc-switch .mdc-switch__icons:before{position:absolute;top:3px;left:3px;font-size:.85rem;transition:color .5s ease}.avo-toggle-icon .mdc-switch--unselected .mdc-switch__icons:before{content:var(--avo-toggle-icon-unchecked);font-family:Material Icons,serif;color:#ffeb3b}.avo-toggle-icon .mdc-switch--selected .mdc-switch__icons:before{content:var(--avo-toggle-icon-checked);font-family:Material Icons,serif;color:#000}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3RvZ2dsZS1pY29uL3NyYy90b2dnbGUtaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvdG9nZ2xlLWljb24vc3JjL3RvZ2dsZS1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RCxNQUFNO0FBQ04sT0FBTyxFQUF3QixvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBRTVGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDdEMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQztBQUN6QyxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsMkJBQTJCLENBQUM7QUFDM0QsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsNkJBQTZCLENBQUM7QUFDL0Qsb0NBQW9DO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO0FBRXJELE1BU2EsbUJBQW1CO0lBYTlCLFlBQ21CLElBQXVCLEVBQ3ZCLFVBQXdCO1FBRHhCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFkM0MsaUJBQWlCO1FBQ1IscUJBQWdCLEdBQUcsZUFBZSxDQUFDO1FBRTVDLGlCQUFpQjtRQUNSLHVCQUFrQixHQUFHLGlCQUFpQixDQUFDO1FBRWhELGlCQUFpQjtRQUNqQixXQUFNLEdBQWlCLFNBQVMsQ0FBQztRQUVqQyxpQkFBaUI7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFBLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQVFoRCw4RUFBOEU7UUFDM0QsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFVekQsa0VBQWtFO1FBQ3pELGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLE1BQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO1FBRWxGLG9FQUFvRTtRQUMzRCxrQkFBYSxHQUFHLGNBQWMsQ0FBQztRQUN2QixtQkFBYyxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixNQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztJQTVCckYsQ0FBQztJQUtKLElBQ1ksYUFBYTtRQUN2QixNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUtELDJFQUEyRTtJQUMzRSxJQUFhLEtBQUssQ0FBQyxLQUFtQjtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQVVELG1FQUFtRTtJQUNuRSxJQUFhLE9BQU8sQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUEyQjtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs4R0F6RFUsbUJBQW1CO2tHQUFuQixtQkFBbUIsa1RDaENoQyx1SEFFQSxtb0JENEJZLG9CQUFvQjs7U0FFbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBVC9CLFNBQVM7K0JBQ0UsaUJBQWlCLGlCQUdaLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQLENBQUMsb0JBQW9CLENBQUM7bUlBcUJkLFVBQVU7c0JBRDFCLFdBQVc7dUJBQUMsT0FBTztnQkFJUixhQUFhO3NCQUR4QixXQUFXO3VCQUFDLFlBQVk7Z0JBT04sT0FBTztzQkFBekIsTUFBTTtnQkFHTSxLQUFLO3NCQUFqQixLQUFLO2dCQVFHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBSUcsYUFBYTtzQkFBckIsS0FBSztnQkFJTyxPQUFPO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIE1EQ1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVDaGFuZ2UsIE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcblxuZXhwb3J0IGNvbnN0IENIRUNLRURfSUNPTiA9ICdiZWR0aW1lJztcbmV4cG9ydCBjb25zdCBVTkNIRUNLRURfSUNPTiA9ICd3Yl9zdW5ueSc7XG5leHBvcnQgY29uc3QgQ0hFQ0tFRF9DU1NfVkFSID0gJy0tYXZvLXRvZ2dsZS1pY29uLWNoZWNrZWQnO1xuZXhwb3J0IGNvbnN0IFVOQ0hFQ0tFRF9DU1NfVkFSID0gJy0tYXZvLXRvZ2dsZS1pY29uLXVuY2hlY2tlZCc7XG4vKiogQGludGVybmFsIG9mIGFuZ3VsYXIgbWF0ZXJpYWwgKi9cbmV4cG9ydCBjb25zdCBUT0dHTEVfVEhVTUJfU0VMID0gJy5tZGMtc3dpdGNoX19pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F2by10b2dnbGUtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGUtaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS1pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0U2xpZGVUb2dnbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVJY29uQ29tcG9uZW50IHtcbiAgLyoqIEBpbnRlcm5hbCAgKi9cbiAgcmVhZG9ubHkgX2NoZWNrZWRfY3NzX3ZhciA9IENIRUNLRURfQ1NTX1ZBUjtcblxuICAvKiogQGludGVybmFsICAqL1xuICByZWFkb25seSBfdW5jaGVja2VkX2Nzc192YXIgPSBVTkNIRUNLRURfQ1NTX1ZBUjtcblxuICAvKiogQGludGVybmFsICAqL1xuICBfY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcblxuICAvKiogQGludGVybmFsICAqL1xuICBfY2hlY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgcHJpdmF0ZSByZWFkb25seSBfaG9zdENsYXNzID0gJ2F2by10b2dnbGUtaWNvbic7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnN0eWxlJylcbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlQXNTdHlsZSgpIHtcbiAgICBjb25zdCBzdHlsZSA9IFt0aGlzLl9jaGVja2VkSWNvbiwgdGhpcy5fdW5DaGVja2VkSWNvbl07XG4gICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoc3R5bGUuam9pbignOycpKTtcbiAgfVxuXG4gIC8qKiBXaWxsIGVtaXQgYW4gZXZlbnQgd2hlbiBldmVyIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgaXMgY2hhbmdlZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKiogTWF0ZXJpYWwgVGhlbWVQYWxldHRlIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgKi9cbiAgQElucHV0KCkgc2V0IGNvbG9yKGNvbG9yOiBUaGVtZVBhbGV0dGUpIHtcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yID8gY29sb3IgOiB0aGlzLl9jb2xvcjtcbiAgfVxuICBnZXQgY29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqIENoZWNrZWQtSWNvbiB0byBiZSB1c2VkIGZvciB0aGUgdW5kZXJseWluZyBtYXQtc2xpZGUtdG9nZ2xlICovXG4gIEBJbnB1dCgpIGNoZWNrZWRJY29uID0gQ0hFQ0tFRF9JQ09OO1xuICBwcml2YXRlIHJlYWRvbmx5IF9jaGVja2VkSWNvbiA9IGAke3RoaXMuX2NoZWNrZWRfY3NzX3Zhcn06IFwiJHt0aGlzLmNoZWNrZWRJY29ufVwiYDtcblxuICAvKiogVW5jaGVja2VkLUljb24gdG8gYmUgdXNlZCBmb3IgdGhlIHVuZGVybHlpbmcgbWF0LXNsaWRlLXRvZ2dsZSAqL1xuICBASW5wdXQoKSB1bkNoZWNrZWRJY29uID0gVU5DSEVDS0VEX0lDT047XG4gIHByaXZhdGUgcmVhZG9ubHkgX3VuQ2hlY2tlZEljb24gPSBgJHt0aGlzLl91bmNoZWNrZWRfY3NzX3Zhcn06IFwiJHt0aGlzLnVuQ2hlY2tlZEljb259XCJgO1xuXG4gIC8qKiBDaGVja2VkIHN0YXRlIHRvIGJlIHVzZWQgZm9yIHRoZSB1bmRlcmx5aW5nIG1hdC1zbGlkZS10b2dnbGUgKi9cbiAgQElucHV0KCkgc2V0IGNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuX2Nkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgZ2V0IGNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICBfdG9nZ2xlQ2hhbmdlKGV2ZW50OiBNYXRTbGlkZVRvZ2dsZUNoYW5nZSkge1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KGV2ZW50LmNoZWNrZWQpO1xuICB9XG59XG4iLCI8bWF0LXNsaWRlLXRvZ2dsZSBbY29sb3JdPVwiY29sb3JcIiBbY2hlY2tlZF09XCJfY2hlY2tlZFwiIChjaGFuZ2UpPVwiX3RvZ2dsZUNoYW5nZSgkZXZlbnQpXCI+XG48L21hdC1zbGlkZS10b2dnbGU+XG4iXX0=