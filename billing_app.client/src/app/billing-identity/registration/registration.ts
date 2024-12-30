export interface Iregistration {
    Password: string;
    ConfirmPassword: string;
    Email: string;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
  }
  
  export class registration implements Iregistration {
    Password: string = '';
    ConfirmPassword: string = '';
    Email: string = '';
    FirstName: string = '';
    LastName: string = '';
    PhoneNumber: string = '';
  }
  
  export class errRegistration {
    ErrPassword: string = '';
    ErrConfirmPassword: string = '';
    ErrEmail: string = '';
    ErrFirstName: string = '';
    ErrLastName: string = '';
    ErrPhoneNumber: string = '';
  }