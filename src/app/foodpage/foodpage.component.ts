import { Component, OnInit } from '@angular/core';
import { Foods } from 'src/shared/model/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from './../services/food/food.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;


  constructor(private activatedRoute: ActivatedRoute,
    private foodService: FoodService,private CartService:CartService, private router:Router) {

      activatedRoute.params.subscribe((params)=>{

  return this.food = foodService.getFoodById(params['id']);
  
    })
    

  }
  addToCart(){
    this.CartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
  }

}
