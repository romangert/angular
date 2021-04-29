import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master',
            status: 'active'
        },
        {
            name: 'Test',
            status: 'inctive'
        },
        {
            name: 'Hidden',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();
    constructor(private loggingService: LoggingService) {

    }

    addAccount(name: string, status: string) { 
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateAccount(id: number, status: string) { 
        this.accounts[id].status=status;
        this.loggingService.logStatusChange(status);
    }
}