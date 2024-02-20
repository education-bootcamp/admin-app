import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {NgApexchartsModule} from "ng-apexcharts";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomersService} from "../../../../../services/customers.service";
import {CartService} from "../../../../../services/cart.service";

@Component({
  selector: 'app-cart-default',
  standalone: true,
  imports: [
    MatButton,
    MatPaginator,
    NgApexchartsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './cart-default.component.html',
  styleUrl: './cart-default.component.scss'
})
export class CartDefaultComponent implements AfterViewInit, OnInit {
  page: any = 0;
  size: any = 10;
  dataArray: any[] = [];
  count = 0;

  constructor(private cartService: CartService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.cartService.loadData(this.page, this.size).subscribe(response => {
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
}

