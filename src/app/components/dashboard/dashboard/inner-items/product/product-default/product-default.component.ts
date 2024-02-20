import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {NgForOf} from "@angular/common";
import {DiscountsService} from "../../../../../services/discounts.service";
import {ProductsService} from "../../../../../services/products.service";

@Component({
  selector: 'app-product-default',
  standalone: true,
    imports: [
        MatButton,
        MatPaginator,
        NgForOf
    ],
  templateUrl: './product-default.component.html',
  styleUrl: './product-default.component.scss'
})
export class ProductDefaultComponent implements AfterViewInit, OnInit{

  page: any = 0;
  size: any = 10;
  dataArray: any[] = [];
  count = 0;

  constructor( private discountsService: DiscountsService, private productService:ProductsService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.productService.loadData(this.page, this.size).subscribe(response => {
      console.log(response);
      this.dataArray = response?.dataList;
      this.count = response?.count;
    })
  }

  getServerData(pageData: any) {
    this.page = pageData.pageIndex;
    this.size = pageData.pageSize;
    this.loadData();
  }

  showProduct(id: any) {
    // need to implement the code
  }

  setDiscount(_id: any) {
    //
  }
}
