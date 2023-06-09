import { ThemePalette } from '@angular/material/core';
import { ThemeStore } from '@rescoped/services/theme-store';
import * as i0 from "@angular/core";
export declare class ToggleIconThemeComponent {
    private readonly _themeStore;
    /** The active themeStore state */
    readonly _active$: import("rxjs").Observable<boolean>;
    constructor(_themeStore: ThemeStore);
    private readonly _hostClass;
    /** Material ThemePalette to be used for the underlying mat-slide-toggle */
    color: ThemePalette;
    /**
     * Will called when ever the toggle state is changed
     * @docs-private
     */
    _changed(changed: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleIconThemeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleIconThemeComponent, "avo-toggle-icon-theme", never, { "color": "color"; }, {}, never, never, false, never>;
}
