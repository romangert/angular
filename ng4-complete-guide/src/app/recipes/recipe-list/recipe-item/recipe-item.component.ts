import { Ingredient } from './../../../shared/ingredient.model';
import { RecipeService } from './../../recipe.service';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService) {

  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
  ngOnInit(): void {
  }

}
