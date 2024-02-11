import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {CustomersService} from "../../../../../services/customers.service";


@Component({
  selector: 'app-customer-default',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './customer-default.component.html',
  styleUrl: './customer-default.component.scss'
})
export class CustomerDefaultComponent implements AfterViewInit, OnInit {
  constructor(private customerService: CustomersService) {
  }

  controlsOn: boolean = false;

  page: any = 0;
  size: any = 10;
  searchText: any = '';

  ngAfterViewInit(): void {
    this.controlsOn = true;
  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers() {
    this.customerService.findCustomers(this.page, this.size, this.searchText).subscribe(response => {
      console.log(response.data);
    })
  }

}
