import * as i0 from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DOCUMENT } from '@angular/common';
import { map, exhaustMap, tap, takeUntil, mapTo } from 'rxjs/operators';
import * as i1 from '@ngx-pwa/local-storage';
import { Subject } from 'rxjs';

const THEME = 'dark';
const defaultThemeState = {
    active: false,
    theme: THEME,
};
const LS_THEME_KEY = '@rescoped/theme-switcher';

class ThemeStore extends ComponentStore {
    constructor(_storage, _doc) {
        // support APP_INITIALIZER work with observable
        // https://github.com/angular/angular/pull/33222
        super(defaultThemeState);
        this._storage = _storage;
        this._doc = _doc;
        this._classList = this._doc.body.classList;
        this._unsub$ = new Subject();
        /** Active selected stream state */
        this.active$ = this.select(({ active }) => active);
        /** Storage stream which holds the ThemeState */
        this._storage$ = this._storage
            .get(LS_THEME_KEY)
            .pipe(map(value => value ?? defaultThemeState));
        /** Should be used for setting the theme state for true or false */
        this.setActive = this.effect(themeActive$ => themeActive$.pipe(exhaustMap(active => this._setStorage({ active, theme: 'dark' })), tap(state => this._set(state))));
        this._init();
    }
    _init() {
        this._storage$.pipe(takeUntil(this._unsub$)).subscribe(state => this._set(state));
    }
    /** Sets theme and patches state */
    _set(state) {
        this._setTheme(state);
        this.patchState(state);
    }
    /** Adds or removes the theme css class to body node */
    _setTheme(state) {
        state.active ? this._classList.add('dark') : this._classList.remove('dark');
    }
    /** Writes ThemeState into storage */
    _setStorage(state) {
        return this._storage.set(LS_THEME_KEY, state).pipe(mapTo(state));
    }
    /** Clears the storage and removes the .dark class */
    clear() {
        const storage$ = this._storage.clear().pipe(tap(() => this._classList.remove('dark')));
        this._unsub$.next();
        this._unsub$.complete();
        return storage$.toPromise();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ThemeStore, deps: [{ token: i1.StorageMap }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ThemeStore, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.7", ngImport: i0, type: ThemeStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.StorageMap }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });

/**
 * Generated bundle index. Do not edit.
 */

export { LS_THEME_KEY, THEME, ThemeStore, defaultThemeState };
//# sourceMappingURL=rescoped-services-theme-store.mjs.map
