import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test 1 desc', 'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg'),
    new Recipe('B test recipe', 'test2 desc', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQQKXKfrKpBNR-t50fiG5qPf7hJL0E8KmfdmccX5ItGllBrNVQxyDeAOKkCVqKqOL5fw&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onResipeSelected(recipe: Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }
}
