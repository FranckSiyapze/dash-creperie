import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private apiService: ApiService,) {
  }
  ngOnInit() {
    if(!localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }else{
      var data = localStorage.getItem('user');
      console.log(data);
    }
  }
  title = 'dash';
}
