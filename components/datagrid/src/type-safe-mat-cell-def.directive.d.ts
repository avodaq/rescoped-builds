import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export declare class TypeSafeMatCellDefDirective<T> {
    matCellDefType: T[] | Observable<T[]> | MatTableDataSource<T>;
    static ngTemplateContextGuard<T>(dir: TypeSafeMatCellDefDirective<T>, ctx: unknown): ctx is {
        $implicit: T;
        count: number;
        even: number;
        first: number;
        index: number;
        last: number;
        odd: number;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<TypeSafeMatCellDefDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TypeSafeMatCellDefDirective<any>, "[matCellDef],[cdkCellDef]", never, { "matCellDefType": { "alias": "matCellDefType"; "required": false; }; }, {}, never, never, true, never>;
}
