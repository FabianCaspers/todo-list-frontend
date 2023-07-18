import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private as: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  async login() {
    try {
      let respSubscription: Subscription = this.as.loginWithUsernameAndPassword(this.username, this.password)
        .subscribe(
          (resp: { token: string }) => {
            console.log(resp);
            localStorage.setItem('token', resp.token);
            this.router.navigateByUrl('/todos');
            respSubscription.unsubscribe(); 
          },
          (error: any) => {
            alert('Login fehlgeschlagen');
            console.error(error);
            respSubscription.unsubscribe(); 
          }
        );
    } catch (e) {
      alert('Login fehlgeschlagen');
      console.error(e);
    }
  }
}
