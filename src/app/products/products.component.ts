// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   imports: [],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.css'
// })

// import { CommonModule } from '@angular/common';
// import { Component, NgModule, NgModuleRef } from '@angular/core';
// import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-products',
//   imports: [CommonModule,  RouterLink, FormsModule],
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
//   standalone: true,
//   providers: []
// })
// export class ProductsComponent {
//   searchTerm: string = '';
//   constructor(private router: Router) {}
//   products = [
//     { name: 'Growth Equity Fund', type: 'Equity', return: '12%', assetClass: 'equity', description: 'Focused on long-term capital appreciation by investing in high-growth companies.' },
//     { name: 'Fixed Income Secure Plan', type: 'Fixed Income', return: '6.5%', assetClass: 'Fixed Income', description: 'Provides regular interest payments in the form of stable returns by investing in government and corporate bonds.' },
//     { name: 'Real Estate Investment Trust', type: 'Real Estate', return: '8%', assetClass: 'Real Estate', description: 'Invests in commercial and residential real estate projects across urban areas.' },
//     { name: 'Gold & Commodities Basket', type: 'Commodities', return: '7%', assetClass: 'Commodities', description: 'Diversified commodity exposure including gold, oil, and metals for hedging inflation.' },
//     { name: 'Ultra-Liquid Fund', type: 'Cash & Cash Equivalents', return: '4%', assetClass: 'Cash and Cash Equivalence', description: 'Designed for short-term liquidity needs with low risk and easy access.' }
//   ];

//   get filteredProducts() {
//     return this.products.filter(product =>
//       product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//       product.assetClass.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }

//   getBadgeClass(type: string) {
//     switch (type) {
//       case 'Equity': return 'bg-success';
//       case 'Fixed Income': return 'bg-primary';
//       case 'Real Estate': return 'bg-warning text-dark';
//       case 'Commodities': return 'bg-secondary';
//       case 'Cash & Cash Equivalents': return 'bg-info text-dark';
//       default: return 'bg-secondary';
//     }
//   }
//   logout() {
//     // Optional: Clear any stored session data here
//     this.router.navigate(['']); // navigate to login page
//   }
//   home() {
//     // Optional: Clear any stored session data here
//     this.router.navigate(['/landing']); // navigate to login page
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService,Product } from '../services/product.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
//   standalone: true,
//   imports: []
// })
// export class ProductsComponent implements OnInit {
//   searchTerm = '';
//   products: Product[] = [];

//   constructor(private router: Router, private productService: ProductService) {}

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe(data => {
//       this.products = data;
//     });
//   }

//   get filteredProducts(): Product[] {
//     return this.products.filter(product =>
//       product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//       product.assetClass.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }

//   logout() {
//     this.router.navigate(['']);
//   }

//   home() {
//     this.router.navigate(['/landing']);
//   }
// }


// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService, Product } from '../services/product.service';
// import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
//   standalone: true,
//   imports: [FormsModule,CommonModule] // <-- Add FormsModule here
// })
// export class ProductsComponent implements OnInit {
//   searchTerm = '';
//   products: Product[] = [];

//   constructor(private router: Router, private productService: ProductService) {}

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe(data => {
//       this.products = data;
//     });
//   }

//   // get filteredProducts(): Product[] {
//   //   return this.products.filter(product =>
//   //     product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//   //     product.assetClass.toLowerCase().includes(this.searchTerm.toLowerCase())
//   //   );
//   // }

//   get filteredProducts() {
//     const query = this.searchQuery?.toLowerCase() || '';
//     return this.products
//       ?.filter(p => p?.name?.toLowerCase().includes(query)) || [];
//   }

//   logout() {
//     this.router.navigate(['']);
//   }

//   home() {
//     this.router.navigate(['/landing']);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// interface Product {
//   name: string;
//   type: string;
//   return: string;
//   assetClass: string;
//   description: string;
//   riskLevel: string;
//   liquidity: string;
//   pros: string;
//   cons: string;
// }

// @Component({
//   selector: 'app-products',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//   products: Product[] = [];
//   searchQuery: string = '';
//   apiUrl = 'http://localhost:5251/api/products'; // your backend endpoint

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.fetchProducts();
//   }

//   fetchProducts(): void {
//     this.http.get<Product[]>(this.apiUrl).subscribe({
//       next: (data) => {
//         console.log('Fetched Products:', data);  // Log the fetched data
//         this.products = data || [];
//       },
//       error: (err) => {
//         console.error('Failed to fetch products:', err);
//         this.products = [];
//       }
//     });
//   }
  

//   get filteredProducts(): Product[] {
//     const query = this.searchQuery?.toLowerCase() || '';
//     return this.products.filter(p =>
//       p?.name?.toLowerCase().includes(query) ||
//       p?.assetClass?.toLowerCase().includes(query)
//     );
//   }

//   home() {
//     this.router.navigate(['/dashboard']); // Adjust to your actual home route
//   }

//   // Logout method
//   logout() {
//     localStorage.clear(); // Clear authentication data
//     this.router.navigate(['/login']); // Adjust to your actual login route
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ProductService, ProductDTO } from '../services/product.service'; // Ensure correct import path
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports:[FormsModule,CommonModule]
})
export class ProductsComponent implements OnInit {
  products: ProductDTO[] = [];
  searchQuery: string = '';
  loading: boolean = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: ProductDTO[]) => { 
        console.log('Fetched Products:', data);  
        this.products = data || []; 
        this.loading = false;
      },
      error: () => {  
        // console.error('Failed to fetch products:');
        this.products = [];  
        this.loading = false;
      }
    });
  }

  // Filter products based on the search query
  get filteredProducts(): ProductDTO[] {
    const query = this.searchQuery?.toLowerCase() || '';
    return this.products.filter(p =>
      p?.productName?.toLowerCase().includes(query) ||
      p?.assetClass?.toLowerCase().includes(query)
    );
  }

  // Navigate to the dashboard/home page
  home():void {
    this.router.navigate(['/landing']); 
  }

  // Log out the user and clear local storage
  logout(): void {
    localStorage.clear(); 
    this.router.navigate(['/login']); 
  }
}
