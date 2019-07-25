import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Curry',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWgOEr6yUvt_b0_5rn4UIkcos6zQTgnQIjl8V9Vnc49ARyn5cSA',
      ingredients: ['rice', 'meat', 'potato', 'carrot']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://c-chefgohan.gnst.jp/imgdata/recipe/30/22/2230/rc732x546_1403111105_668ffdb6d7b3f055db0e2340fd9d727d.jpg',
      ingredients: ['Spaghetti', 'meat', 'soy', 'carrot'] 
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
