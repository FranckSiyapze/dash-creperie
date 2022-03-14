import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";
  public errorName: string = "";

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  login(){
    console.log([this.username,this.password]);
    this.apiService.login(this.username, this.password).subscribe(data => {
      
      if(data.role === 'R'){
        console.log(data);
        localStorage.setItem("user", data.email);
        localStorage.setItem("name", data.name);
        localStorage.setItem("phone", data.phone);
        /* localStorage.set("user", JSON.stringify(data));*/
        this.router.navigate(['/home']).then(()=>{
          window.location.reload();
        }); 
      }else{
        console.log("NOT ADMIN")
      }
      /* if (data.status === 1) {
        localStorage.setItem("token", data.access_token);
        this.router.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
      } else {
        this.errorName = "Utilisateur désactivé";
      } */

    }, error => {
      this.errorName = "Une erreur s'est produite";
    })
  }

}
