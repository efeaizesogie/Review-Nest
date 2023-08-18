import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('pPassword')?.value;
    const confirmPassword = control.get('pConfirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}
