import { PresenceService } from './_services/presence.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dating app';
  // users:any;

  constructor(private accountService:AccountService, private presence: PresenceService){}
  ngOnInit() {

    this.setCurrentUser();
  }

  setCurrentUser(){
    const user:User=JSON.parse(localStorage.getItem('user')||"");
    if(user) {
      this.accountService.setCurrentUser(user);
      this.presence.createHubConnection(user);
    }


  }


}