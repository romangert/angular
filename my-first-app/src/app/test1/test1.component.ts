import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  
  constructor() { }
  
  secrets: string[] = [];
  secret: string = '';
  showSecretToggle = false;

  ngOnInit(): void {
  }

  onBtnClick(){
    this.secret = "new secret " + Math.random();
    this.secrets.push(this.secret);
  }

  isSecretsExists(){
    return this.secrets.length > 0;
  }
}
