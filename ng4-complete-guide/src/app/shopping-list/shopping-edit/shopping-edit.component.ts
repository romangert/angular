import { ShopingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef = new ElementRef(null);
  @ViewChild('amountInput') amountInputRef: ElementRef = new ElementRef(null);
  constructor(private slShopingListService: ShopingListService) { }

  ngOnInit(): void {

  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngridient = new Ingredient(ingName, ingAmount);
    this.slShopingListService.addIngredient(newIngridient);
  }

  onDeleteItem() {

  }

  onClear() {

  }

}
