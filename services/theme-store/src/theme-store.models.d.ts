export declare const THEME = "dark";
export interface ThemeState {
    active: boolean;
    theme: typeof THEME;
}
export declare const defaultThemeState: ThemeState;
export declare const LS_THEME_KEY = "@rescoped/theme-switcher";
