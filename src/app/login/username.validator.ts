import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null  {

      if ((control.value as string).indexOf(' ') > 0) {
        return  {cannotContainSpace: true};
      }
      return null;
   }

   static mustBeValidateEmail(control: AbstractControl): ValidationErrors | null  {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const  value = (control.value as string);
    if(!value.match(mailformat)) {
      return {mustBeValidateEmail: true};
    }
    return null;
   }
}
