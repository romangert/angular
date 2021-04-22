import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = 'test';
  // newServerContent = 'test1';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef = new ElementRef(null);

  constructor() {
    // console.debug("ddd");
    // this.newServerName = newSrverName;
  }

  onAddServer(nameInput: any){
    // console.debug(serverName.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement){

    // this.serverContentInput.nativeElement.value='111';
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  ngOnInit(): void {
  }

}
