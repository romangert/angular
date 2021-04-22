import { element } from 'protractor';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ElementRef, ContentChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  AfterViewInit,
  OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string } = {
    type: '', name: '', content: ''
  };
  @Input() name: string = '';
  @ViewChild('heading',{static: true}) header: ElementRef = new ElementRef(null);
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef = new ElementRef(null);

  constructor() {
    console.log('constructor');

  }

  ngOnInit(): void {
    console.log('onInit');
    console.log('Text content ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('onChanges');
    console.log(changes);
  }

  ngAfterViewInit(){
    console.log('onAfterViewInit');
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }
}
