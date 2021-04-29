import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  viewProviders: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string } = { name: '', status: ''};
  @Input() id: number=0;
  //@Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountService.updateAccount(this.id, status);
    this.loggingService.logStatusChange('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }
}
