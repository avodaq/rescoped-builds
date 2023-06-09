import { AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
export interface FieldValidationErrors {
    validationMessage?: string;
    validationCode?: string;
    validationType?: 'error' | 'warning';
}
export declare const defaultValidationError: FieldValidationErrors;
export declare const mergeValidationErrors: (validationError1: ValidationErrors | null, validationError2?: FieldValidationErrors) => FieldValidationErrors | null;
export declare class Validators {
    static min(min: number, validationError?: FieldValidationErrors): ValidatorFn;
    static max(max: number, validationError?: FieldValidationErrors): ValidatorFn;
    static required(validationError?: FieldValidationErrors): ValidatorFn;
    static requiredTrue(validationError?: FieldValidationErrors): ValidatorFn;
    static email(validationError?: FieldValidationErrors): ValidatorFn;
    static minLength(minLength: number, validationError?: FieldValidationErrors): ValidatorFn;
    static maxLength(maxLength: number, validationError?: FieldValidationErrors): ValidatorFn;
    static pattern(pattern: string | RegExp, validationError?: FieldValidationErrors): ValidatorFn;
    static nullValidator(): ValidatorFn;
    static nullAsyncValidator(): AsyncValidatorFn;
}
