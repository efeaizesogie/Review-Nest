import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Review-Nest-app';

  showLandingPage: boolean = true;
  showSignUpPage: boolean = false;
  showSignInPage: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: NavigationEvent): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.showLandingPage = event.urlAfterRedirects === '/landing-page';
        this.showSignUpPage = event.urlAfterRedirects === '/sign-up';
        this.showSignInPage = event.urlAfterRedirects === '/sign-in';
      });
  }
}
