import { Output } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef=new ElementRef(null);
  @ViewChild('amountInput') amountInputRef: ElementRef=new ElementRef(null);
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngridient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngridient);
  }

  onDeleteItem(){

  }

  onClear(){

  }

}
