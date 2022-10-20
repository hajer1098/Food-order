import { Injectable } from '@angular/core';
import { Foods } from 'src/shared/model/Food';
import { Tag } from 'src/shared/model/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getFoodById(id:number):Foods{
 
     return this.getAll().find( food=> food.id == id)!;

  }

  getAllFoodByTag(tag: string): Foods[] {
    // return tag=='All'?
    // this.getAll() !:  this.getAll().filter(food => food.tags?.includes(tag));



      
    if (tag == 'All')
      return this.getAll()
    else
      return this.getAll().filter(food => food.tags?.includes(tag));



    // return tag =="All" ?
    // this.getAll() !:
    //  this.getAll().filter(food => food.tags?.includes(tag));
  }


 getAllTag():Tag[]{

  return[
    {name:'All',count:12},
    {name:'FastFood',count:9},
    {name:'Pizza',count:2},
    {name:'Sandwiches',count:1},
    {name:'Hamburger',count:1},
    {name:'SlowFood',count:1},
    {name:'soup',count:1},
  ]
  
   

 }





  getAll(): Foods[] {
    return [

      {
        id: 1,
        name: "Tuna pizza",
        price: 7,
        favorite: true,
        origins: ["italy"],
        stars: 2,
        imageUrl: '/assets/pizzathon.jpg',
        cookTime: '10-15',
        tags: ['pizza', 'Fastfood'],
      },
      {
        id: 2,
        name: "Pizza margarita",
        price: 10,
        favorite: false,
        origins: ["italy", "france"],
        stars: 4,
        imageUrl: '/assets/pizzamargarita.jpg',
        cookTime: '10-15',
        tags: ['pizza', 'Fastfood'],
      },

      {
        id: 3,
        name: "Hamburger",
        price: 13,
        favorite: false,
        origins: ["italy"],
        stars: 4,
        imageUrl: '/assets/hamburger.jpg',
        cookTime: '10-15',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: "Soup",
        price: 2,
        favorite: false,
        origins: ["italy"],
        stars: 4,
        imageUrl: '/assets/soupe.jpg',
        cookTime: '15-20',
        tags: ['SlowFood', 'soup'],
      },
      {
        id: 5,
        name: "Taco bell",
        price: 8,
        favorite: false,
        origins: ["italy"],
        stars: 2.7,
        imageUrl: '/assets/taco.jpg',
        cookTime: '5-7',
        tags: ['Fast', 'Tacos'],
      },
      {
        id: 6,
        name: "Tacos mexicains",
        price: 6,
        favorite: false,
        origins: ["italy"],
        stars: 4.5,
        imageUrl: '/assets/tacosmexicains.png',
        cookTime: '5-7',
        tags: ['FastFood', 'Tacos'],
      },
      {
        id: 7,
        name: "Meat sandwiches",
        price: 7,
        favorite: false,
        origins: ["italy"],
        stars: 4.5,
        imageUrl: '/assets/sandwichsviande.jpg',
        cookTime: '10-15',
        tags: ['SlowFood', 'Sandwiches'],
      },
      {
        id: 8,
        name: "Fried chicken",
        price: 7,
        favorite: true,
        origins: ["italy"],
        stars: 4.5,
        imageUrl: '/assets/friedchicken.jpg',
        cookTime: '10-15',
        tags: ['SlowFood', 'soup'],
      },


    ]


  }

}
