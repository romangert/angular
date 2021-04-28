import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

import { HeaderComponent } from "./header/header.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{
  loadedFeature: string = 'recipe';
  accounts: { name: string; status: string; }[]=[];

  onNavigate(feature: string){
    this.loadedFeature=feature;
  }

  constructor(private accountService: AccountService){}
  ngOnInit(): void {
    this.accounts=this.accountService.accounts;
  }
  
}
