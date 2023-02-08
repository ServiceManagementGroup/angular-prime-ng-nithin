import { CurrencyPipe } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    price: 10.00, name: 'Hydrogen', image: "https://i.picsum.photos/id/1063/536/354.jpg?hmac=c-ouc6pAVYGm1E0uLcnK_cavuLd8J0VPbodIe_CG8s0",
    description: 'Lorem Picsum test'
  },
  {
    price: 20.00, name: 'Helium', image: "https://i.picsum.photos/id/994/536/354.jpg?hmac=2vh9aMw_mfyFM5-wVaqCiL59AEOtwCMCpr6ZLjr_IT4",
    description: 'Lorem Picsum demo'
  },
  {
    price: 30.00, name: 'Lithium', image: "https://i.picsum.photos/id/1012/536/354.jpg?hmac=P1hIZTmcAGhRZoKcGMzdzQtdic_ixZg0l-qiyO2t4nc",
    description: 'Lorem Picsum dummy'
  },
  {
    price: 40.00, name: 'Beryllium', image: "https://i.picsum.photos/id/296/536/354.jpg?hmac=OJNbKWSczNC78HT7g0EvAZtEN-UrilqQb4yfCVwtERs",
    description: 'Lorem Picsum analysis'
  }
];
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {
  products: Product[] = PRODUCTS;
  total: number = 0;
  @Input() dataFilter = '';

  constructor(private currencyPipe: CurrencyPipe, private dataShareService: DataShareService) {
    // this.products.map(p => {
    //   p.price = this.currencyPipe.transform(p.price);
    // });
  }

  addToCart() {
    this.dataShareService.updateCartItems(++this.total);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes["dataFilter"] && !changes["dataFilter"].firstChange) {
      this.applyFilter(changes["dataFilter"].currentValue);
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.products = PRODUCTS.filter(p => p.name.toLowerCase().includes(filterValue) || p.description.includes(filterValue));
  }
}
