import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
export declare const CHECKED_ICON = "bedtime";
export declare const UNCHECKED_ICON = "wb_sunny";
export declare const CHECKED_CSS_VAR = "--avo-toggle-icon-checked";
export declare const UNCHECKED_CSS_VAR = "--avo-toggle-icon-unchecked";
export declare class ToggleIconComponent {
    private readonly _cdr;
    private readonly _sanitizer;
    constructor(_cdr: ChangeDetectorRef, _sanitizer: DomSanitizer);
    private readonly _hostClass;
    private get _valueAsStyle();
    /** Will emit an event when ever the underlying mat-slide-toggle is changed */
    readonly changed: EventEmitter<boolean>;
    /** Material ThemePalette to be used for the underlying mat-slide-toggle */
    set color(color: ThemePalette);
    get color(): ThemePalette;
    /** Checked-Icon to be used for the underlying mat-slide-toggle */
    checkedIcon: string;
    private readonly _checkedIcon;
    /** Unchecked-Icon to be used for the underlying mat-slide-toggle */
    unCheckedIcon: string;
    private readonly _unCheckedIcon;
    /** Checked state to be used for the underlying mat-slide-toggle */
    set checked(checked: boolean);
    get checked(): boolean;
    _toggleChange(event: MatSlideToggleChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleIconComponent, "avo-toggle-icon", never, { "color": { "alias": "color"; "required": false; }; "checkedIcon": { "alias": "checkedIcon"; "required": false; }; "unCheckedIcon": { "alias": "unCheckedIcon"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; }, { "changed": "changed"; }, never, never, false, never>;
}
