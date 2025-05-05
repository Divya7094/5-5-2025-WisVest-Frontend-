// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-landing-page',
//   imports: [],
//   templateUrl: './landing-page.component.html',
//   styleUrl: './landing-page.component.css'
// })
// export class LandingPageComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone:true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']); 
  }
  products() {
    this.router.navigate(['/products']);
  }
  input() {
    this.router.navigate(['/input']); 
  }

}
