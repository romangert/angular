import { ShopingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'test 1 desc', 
            'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 3)
            ]
            ),
        new Recipe('B test recipe', 'test2 desc', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQQKXKfrKpBNR-t50fiG5qPf7hJL0E8KmfdmccX5ItGllBrNVQxyDeAOKkCVqKqOL5fw&usqp=CAU',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French fries', 3)
        ]
        )
      ];
    constructor(private slListService: ShopingListService) {
        
    }

    getRecipe(){
        return this.recipes.slice();
    }

    addIngredeientsToShopingList(ingredients: Ingredient[]){
        this.slListService.addIngredients(ingredients);
    }
}