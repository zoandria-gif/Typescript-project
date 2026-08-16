export class student {
  id: number;
  firstName: string;
  lastName: string;
  number: string;
  password: string;

  constructor(id: number, firstName: string, lastName: string, number: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.password = password; // Initialize password as an empty string
  }
}