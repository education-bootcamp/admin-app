import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {NgForOf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CategoryService} from "../../../../../services/category.service";
import {DiscountsService} from "../../../../../services/discounts.service";

@Component({
  selector: 'app-discount-default',
  standalone: true,
    imports: [
        MatButton,
        MatPaginator,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './discount-default.component.html',
  styleUrl: './discount-default.component.scss'
})
export class DiscountDefaultComponent implements AfterViewInit, OnInit{

  page: any = 0;
  size: any = 10;
  dataArray: any[] = [];
  count = 0;

  constructor( private discountsService: DiscountsService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.loadData();
  }


  private loadData() {
    this.discountsService.loadData(this.page, this.size).subscribe(response => {
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
