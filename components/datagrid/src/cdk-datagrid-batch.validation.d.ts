import { AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
export interface Validation {
    index: number;
    field: string;
    validationCode: string;
    validationMessage: string;
    validationType?: 'error' | 'warning';
}
export declare function batchValidatorFactory(validations: Observable<Validation[]>, field: Validation['field'], index: Validation['index']): AsyncValidatorFn;
