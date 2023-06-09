import { InjectionToken } from '@angular/core';
import { DateAdapter, MatDateFormats } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare const MAT_FORMAT_DATE_INPUT: InjectionToken<string>;
export declare const MAT_DATE_CLASS: InjectionToken<MatDateClass>;
export type MatDateClass = (value: unknown) => unknown;
interface DateAdapterFormatter extends Pick<DateAdapter<unknown>, 'format'> {
}
export declare const matDateFormatsDefaults: MatDateFormats;
export declare class CdkDatagridDateAdapter implements DateAdapterFormatter {
    private readonly matDateClass;
    readonly matDateFormats: MatDateFormats;
    readonly matFormatDateInput: string;
    private readonly _dateAdapter;
    constructor(matDateClass: MatDateClass, matDateFormats: MatDateFormats, matFormatDateInput: string, _dateAdapter: DateAdapter<unknown>);
    format(date: Date | string | unknown, format: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CdkDatagridDateAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CdkDatagridDateAdapter>;
}
export {};
