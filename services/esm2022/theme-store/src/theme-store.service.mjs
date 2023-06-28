import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DOCUMENT } from '@angular/common';
import { exhaustMap, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subject } from 'rxjs';
import { defaultThemeState, LS_THEME_KEY } from './theme-store.models';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-pwa/local-storage";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ThemeStore, deps: [{ token: i1.StorageMap }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ThemeStore, providedIn: 'root' }); }
}
export { ThemeStore };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.6", ngImport: i0, type: ThemeStore, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageMap }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtc3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2VydmljZXMvdGhlbWUtc3RvcmUvc3JjL3RoZW1lLXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRW5GLE1BR2EsVUFBVyxTQUFRLGNBQTBCO0lBWXhELFlBQ21CLFFBQW9CLEVBQ0YsSUFBYztRQUVqRCwrQ0FBK0M7UUFDL0MsZ0RBQWdEO1FBQ2hELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBTFIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNGLFNBQUksR0FBSixJQUFJLENBQVU7UUFibEMsZUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUUvQyxtQ0FBbUM7UUFDMUIsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2RCxnREFBZ0Q7UUFDdkMsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUM7YUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxpQkFBaUIsQ0FBQyxDQUFzQyxDQUFDO1FBWXZGLG1FQUFtRTtRQUMxRCxjQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBdUIsWUFBWSxDQUFDLEVBQUUsQ0FDcEUsWUFBWSxDQUFDLElBQUksQ0FDZixVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQ2pFLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0IsQ0FDRixDQUFDO1FBVEEsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQVVPLEtBQUs7UUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxtQ0FBbUM7SUFDM0IsSUFBSSxDQUFDLEtBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsdURBQXVEO0lBQy9DLFNBQVMsQ0FBQyxLQUFpQjtRQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHFDQUFxQztJQUM3QixXQUFXLENBQUMsS0FBaUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxxREFBcUQ7SUFDckQsS0FBSztRQUNILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhCLE9BQU8sUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7OEdBekRVLFVBQVUsNENBY1gsUUFBUTtrSEFkUCxVQUFVLGNBRlQsTUFBTTs7U0FFUCxVQUFVOzJGQUFWLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFlSSxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFN0b3JlIH0gZnJvbSAnQG5ncngvY29tcG9uZW50LXN0b3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGV4aGF1c3RNYXAsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RvcmFnZU1hcCB9IGZyb20gJ0BuZ3gtcHdhL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lU3RhdGUsIExTX1RIRU1FX0tFWSwgVGhlbWVTdGF0ZSB9IGZyb20gJy4vdGhlbWUtc3RvcmUubW9kZWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lU3RvcmUgZXh0ZW5kcyBDb21wb25lbnRTdG9yZTxUaGVtZVN0YXRlPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NsYXNzTGlzdCA9IHRoaXMuX2RvYy5ib2R5LmNsYXNzTGlzdDtcbiAgcHJpdmF0ZSByZWFkb25seSBfdW5zdWIkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogQWN0aXZlIHNlbGVjdGVkIHN0cmVhbSBzdGF0ZSAqL1xuICByZWFkb25seSBhY3RpdmUkID0gdGhpcy5zZWxlY3QoKHsgYWN0aXZlIH0pID0+IGFjdGl2ZSk7XG5cbiAgLyoqIFN0b3JhZ2Ugc3RyZWFtIHdoaWNoIGhvbGRzIHRoZSBUaGVtZVN0YXRlICovXG4gIHJlYWRvbmx5IF9zdG9yYWdlJCA9IHRoaXMuX3N0b3JhZ2VcbiAgICAuZ2V0KExTX1RIRU1FX0tFWSlcbiAgICAucGlwZShtYXAodmFsdWUgPT4gdmFsdWUgPz8gZGVmYXVsdFRoZW1lU3RhdGUpKSBhcyB1bmtub3duIGFzIE9ic2VydmFibGU8VGhlbWVTdGF0ZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3RvcmFnZTogU3RvcmFnZU1hcCxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IF9kb2M6IERvY3VtZW50LFxuICApIHtcbiAgICAvLyBzdXBwb3J0IEFQUF9JTklUSUFMSVpFUiB3b3JrIHdpdGggb2JzZXJ2YWJsZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC8zMzIyMlxuICAgIHN1cGVyKGRlZmF1bHRUaGVtZVN0YXRlKTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICAvKiogU2hvdWxkIGJlIHVzZWQgZm9yIHNldHRpbmcgdGhlIHRoZW1lIHN0YXRlIGZvciB0cnVlIG9yIGZhbHNlICovXG4gIHJlYWRvbmx5IHNldEFjdGl2ZSA9IHRoaXMuZWZmZWN0PFRoZW1lU3RhdGVbJ2FjdGl2ZSddPih0aGVtZUFjdGl2ZSQgPT5cbiAgICB0aGVtZUFjdGl2ZSQucGlwZShcbiAgICAgIGV4aGF1c3RNYXAoYWN0aXZlID0+IHRoaXMuX3NldFN0b3JhZ2UoeyBhY3RpdmUsIHRoZW1lOiAnZGFyaycgfSkpLFxuICAgICAgdGFwKHN0YXRlID0+IHRoaXMuX3NldChzdGF0ZSkpLFxuICAgICksXG4gICk7XG5cbiAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICB0aGlzLl9zdG9yYWdlJC5waXBlKHRha2VVbnRpbCh0aGlzLl91bnN1YiQpKS5zdWJzY3JpYmUoc3RhdGUgPT4gdGhpcy5fc2V0KHN0YXRlKSk7XG4gIH1cblxuICAvKiogU2V0cyB0aGVtZSBhbmQgcGF0Y2hlcyBzdGF0ZSAqL1xuICBwcml2YXRlIF9zZXQoc3RhdGU6IFRoZW1lU3RhdGUpIHtcbiAgICB0aGlzLl9zZXRUaGVtZShzdGF0ZSk7XG4gICAgdGhpcy5wYXRjaFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIC8qKiBBZGRzIG9yIHJlbW92ZXMgdGhlIHRoZW1lIGNzcyBjbGFzcyB0byBib2R5IG5vZGUgKi9cbiAgcHJpdmF0ZSBfc2V0VGhlbWUoc3RhdGU6IFRoZW1lU3RhdGUpIHtcbiAgICBzdGF0ZS5hY3RpdmUgPyB0aGlzLl9jbGFzc0xpc3QuYWRkKCdkYXJrJykgOiB0aGlzLl9jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gIH1cblxuICAvKiogV3JpdGVzIFRoZW1lU3RhdGUgaW50byBzdG9yYWdlICovXG4gIHByaXZhdGUgX3NldFN0b3JhZ2Uoc3RhdGU6IFRoZW1lU3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZS5zZXQoTFNfVEhFTUVfS0VZLCBzdGF0ZSkucGlwZShtYXBUbyhzdGF0ZSkpO1xuICB9XG5cbiAgLyoqIENsZWFycyB0aGUgc3RvcmFnZSBhbmQgcmVtb3ZlcyB0aGUgLmRhcmsgY2xhc3MgKi9cbiAgY2xlYXIoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSQgPSB0aGlzLl9zdG9yYWdlLmNsZWFyKCkucGlwZSh0YXAoKCkgPT4gdGhpcy5fY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpKSk7XG4gICAgdGhpcy5fdW5zdWIkLm5leHQoKTtcbiAgICB0aGlzLl91bnN1YiQuY29tcGxldGUoKTtcblxuICAgIHJldHVybiBzdG9yYWdlJC50b1Byb21pc2UoKTtcbiAgfVxufVxuIl19