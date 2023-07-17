import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
import * as i1 from '@rescoped/services/theme-store';
import { AsyncPipe } from '@angular/common';
import { ToggleIconComponent } from '@rescoped/components/toggle-icon';

class ToggleIconThemeComponent {
    constructor(_themeStore) {
        this._themeStore = _themeStore;
        /** The active themeStore state */
        this._active$ = this._themeStore.active$;
        this._hostClass = 'avo-toggle-icon-theme';
        /** Material ThemePalette to be used for the underlying mat-slide-toggle */
        this.color = 'primary';
    }
    /**
     * Will called when ever the toggle state is changed
     * @docs-private
     */
    _changed(changed) {
        this._themeStore.setActive(changed);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeComponent, deps: [{ token: i1.ThemeStore }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.6", type: ToggleIconThemeComponent, isStandalone: true, selector: "avo-toggle-icon-theme", inputs: { color: "color" }, host: { properties: { "class": "this._hostClass" } }, ngImport: i0, template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"], dependencies: [{ kind: "component", type: ToggleIconComponent, selector: "avo-toggle-icon", inputs: ["color", "checkedIcon", "unCheckedIcon", "checked"], outputs: ["changed"] }, { kind: "pipe", type: AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ToggleIconThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'avo-toggle-icon-theme', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ToggleIconComponent, AsyncPipe], template: "<avo-toggle-icon\n  [color]=\"color\"\n  [checked]=\"(_active$ | async)!\"\n  (changed)=\"_changed($event)\"\n></avo-toggle-icon>\n", styles: [".avo-toggle-icon-theme{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ThemeStore }]; }, propDecorators: { _hostClass: [{
                type: HostBinding,
                args: ['class']
            }], color: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { ToggleIconThemeComponent };
//# sourceMappingURL=rescoped-components-toggle-icon-theme.mjs.map
