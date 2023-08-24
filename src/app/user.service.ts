import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private companyName: string = '';

  setCompanyName(name: string): void {
    this.companyName = name;
    console.log('Company Name set to:', this.companyName);
  }

  getCompanyName(): string {
    console.log('Getting Company Name:', this.companyName);
    return this.companyName;
  }
}
