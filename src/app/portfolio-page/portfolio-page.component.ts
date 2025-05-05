import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../services/portfoliodata.service';
import { ChartType, ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../chart/chart.component'; // Import ChartComponent
import { AssetsComponent } from '../asset-alloc/asset-alloc.component'; // Import AssetsComponent
import { ProductsComponent } from '../product-table/product-table.component'; // Import ProductsComponent

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [NgChartsModule, CommonModule, ChartComponent, AssetsComponent, ProductsComponent], // Add components here
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css'],
})
export class PortfolioPageComponent implements OnInit {
  portfolioData: any;
  subClasses: { name: string; percentage: number }[] = [];
  selectedAssetClass: string = '';
  selectedSubClassName: string = '';

  // Chart data
  assetClassChartLabels: string[] = [];
  assetClassChartData: number[] = [];
  pieChartType: ChartType = 'pie';
  assetClassChartColors: string[] = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  constructor(private portfolioDataService: PortfolioDataService) {}

    ngOnInit(): void {
    // Retrieve portfolio data from the service
    this.portfolioData = this.portfolioDataService.getPortfolioData();
    console.log('Portfolio Data:', this.portfolioData); // Debugging
  
    if (this.portfolioData) {
      // Populate chart data
      this.assetClassChartLabels = this.portfolioData.allocatedMatrix.map((asset: any) => asset.assetClass);
      this.assetClassChartData = this.portfolioData.allocatedMatrix.map((asset: any) => asset.percentage);
      this.assetClassChartColors = this.portfolioData.allocatedMatrix.map((asset: any) => asset.color);
  
      // Set default selected asset class and sub-classes
      if (this.portfolioData.allocatedMatrix.length > 0) {
        this.selectedAssetClass = this.portfolioData.allocatedMatrix[0].assetClass;
        this.subClasses = this.portfolioData.allocatedMatrix[0].subAssets;
      }
    }
  }

  onAssetSelected(assetClass: string): void {
    const selectedAsset = this.portfolioData.allocatedMatrix.find((asset: any) => asset.assetClass === assetClass);
    if (selectedAsset) {
      this.selectedAssetClass = selectedAsset.assetClass;
      this.subClasses = selectedAsset.subAssets;
    }
  }

  onSubClassSelected(subClassName: string): void {
    this.selectedSubClassName = subClassName;
  }
}