import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'HostelManagement';
  constructor(
    private FindUserName: LoginService,
    private cookieService: CookieService
  ) {
    let userName = this.cookieService.get('userName');
    if (userName.length > 0) {
      this.FindUserName.setUserName(userName);
    }
  }
}
