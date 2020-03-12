import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-foodcategory',
  templateUrl: './foodcategory.component.html',
  styleUrls: ['./foodcategory.component.scss']
})
export class FoodcategoryComponent implements OnInit {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  foods: Food[] = [
    { value: 'steak-0', viewValue: '1+' },
    { value: 'pizza-1', viewValue: '2+' },
    { value: 'tacos-2', viewValue: '3+' }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocartpage() {
    this.router.navigate(['cartpage'])
  };

}
