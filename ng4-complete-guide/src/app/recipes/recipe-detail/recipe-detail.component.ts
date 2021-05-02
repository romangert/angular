import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShopingList() {
    this.recipeService.addIngredeientsToShopingList(this.recipe.ingredients);
  }
}
