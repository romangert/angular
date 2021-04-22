import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
            online{
                color: white;
            }
        `]
})

export class ServerComponent {
    serverID: number = 1;
    serverStatus: string = 'off';
    userName: string = "test1";

    /**
     *
     */
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'ofline';
        
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'red' : 'green'; 
    }
}