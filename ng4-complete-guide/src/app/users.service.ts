import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    activeUsers=['Max', 'Anna'];
    inactiveUsers=['Cris', 'Manu'];

    constructor() {
        
    }

    setToActive(id: number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }

    
    setToInActive(id: number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }
}