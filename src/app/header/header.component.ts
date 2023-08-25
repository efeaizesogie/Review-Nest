import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Company } from '../company.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchInput = new FormControl();
  searchTerm: string = ''; // Store the searchTerm
  allCompaniesData: any[] = [];
  matchingCompanies: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      this.searchTerm = value; // Update the searchTerm
    });
  }

  onSearchButtonClick() {
    if (this.searchTerm) {
      this.searchCompany(this.searchTerm).subscribe((result: any) => {
        console.log(result);
        if (result.success && result.data) {
          this.allCompaniesData = result.data; // Store the response data
          const matchingCompanies = this.allCompaniesData
            .filter((company: Company) =>
              company.company_name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );

            if (matchingCompanies.length > 0) {
              this.matchingCompanies = matchingCompanies.map((company: Company) => ({
                id: company._id,
                name: company.company_name
              }));
          
              console.log("Matching Companies Details:", this.matchingCompanies);
          
              localStorage.setItem('matchingCompanyDetails', JSON.stringify(this.matchingCompanies));
              // Rest of your code...
            }
          }
      });
    }
  }

  onCompanyClick(companyId: string, companyName: string) {
    localStorage.setItem('formID', companyId);
    localStorage.setItem('companyName', companyName);
    console.log(companyId)
    this.router.navigate(['/form-creation']);
  }

  searchCompany(searchTerm: string): Observable<any> {
    return this.http.get(`https://reviewnest.onrender.com/api/v1/user?search=${searchTerm}`);
  }
}
