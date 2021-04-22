import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //           <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus = "not created";
  serverName = 'default';
  serverCreated=false;
  servers = ["server 1, server 2"];

  constructor() { 
    setTimeout(()=>this.allowNewServer=true, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    //this.serverCreationStatus = "Server was created Server Name: " + this.serverName ;
    // this.serverCreated=true;
  }

  // onUpdateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
