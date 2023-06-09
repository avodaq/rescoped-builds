import { ComponentStore } from '@ngrx/component-store';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { ThemeState } from './theme-store.models';
import * as i0 from "@angular/core";
export declare class ThemeStore extends ComponentStore<ThemeState> {
    private readonly _storage;
    private readonly _doc;
    private readonly _classList;
    private readonly _unsub$;
    /** Active selected stream state */
    readonly active$: Observable<boolean>;
    /** Storage stream which holds the ThemeState */
    readonly _storage$: Observable<ThemeState>;
    constructor(_storage: StorageMap, _doc: Document);
    /** Should be used for setting the theme state for true or false */
    readonly setActive: (observableOrValue: boolean | Observable<boolean>) => import("rxjs").Subscription;
    private _init;
    /** Sets theme and patches state */
    private _set;
    /** Adds or removes the theme css class to body node */
    private _setTheme;
    /** Writes ThemeState into storage */
    private _setStorage;
    /** Clears the storage and removes the .dark class */
    clear(): Promise<undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeStore>;
}
