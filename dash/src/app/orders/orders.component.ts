import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {



  public loader: boolean = true;
  public orders: any;
  public dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit():void {
    //this.getOrders();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [10, 25, 50, 100, 150, 200],
      processing: true,
      destroy: true
    }
    this.apiService.getOrders().subscribe(data=>{
      if(data){
        console.log(data);
        this.orders = data
        this.loader = false
      }
    })
  }

  getOrders(){
    console.log("test");
    this.apiService.getOrders().subscribe(data=>{

      if(data){
        console.log(data);
        this.orders = data
        this.loader = false
      }
    })
  }




}
