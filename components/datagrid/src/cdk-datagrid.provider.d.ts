import { DatagridInputFormats, DatagridInputNumbers } from './mat-datagrid-input';
import { PartialDeep } from './cdk-datagrid.types';
import { EnvironmentProviders, Provider } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
export declare function provideDataGrid(options: DatagridOptions): EnvironmentProviders;
export type DatagridOptions<Item = unknown> = {
    datepicker?: {
        providers?: Provider[];
        formats?: PartialDeep<MatDateFormats>;
    };
    input?: {
        formats?: DatagridInputFormats<Item>;
        numbers?: DatagridInputNumbers<Item>;
    };
};
