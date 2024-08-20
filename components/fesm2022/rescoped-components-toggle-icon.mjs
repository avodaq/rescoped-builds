import * as i0 from '@angular/core';
import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Output, Input } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import * as i2 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const CHECKED_ICON = 'bedtime';
const UNCHECKED_ICON = 'wb_sunny';
const CHECKED_CSS_VAR = '--avo-toggle-icon-checked';
const UNCHECKED_CSS_VAR = '--avo-toggle-icon-unchecked';
/** @internal of angular material */
const TOGGLE_THUMB_SEL = '.mdc-switch__icons';
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

/**
 * Generated bundle index. Do not edit.
 */

export { CHECKED_CSS_VAR, CHECKED_ICON, TOGGLE_THUMB_SEL, ToggleIconComponent, UNCHECKED_CSS_VAR, UNCHECKED_ICON };
//# sourceMappingURL=rescoped-components-toggle-icon.mjs.map
