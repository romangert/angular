import { Component } from '@angular/core';
//import { ServerElementComponent } from "./server-element/server-element.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  serverElements = [{type: 'server', name: 'test server 1', content: 'Just a test'}];

  oddNumbers: number[]=[];
  evenNumbers: number[]=[];

  onIntervalFired(firedNumber: number){
    if(firedNumber % 2 ===0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    console.debug(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst(event: any){
    this.serverElements[0].name = 'Changed';
  }
}
