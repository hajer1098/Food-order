import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/shared/model/Cart';
import { CartService } from './../services/cart.service';
import { CartItem } from './../../shared/CartItem';
import { FoodService } from './../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
   cart!:Cart;
  constructor(private cartService:CartService) {
   
  this.setCart();
   }


   setCart(){
    this.cart=this.cartService.getCart();
   }
    
   removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);


   }
   changeQuantity(cartItem:CartItem,quantityInString:string)
   {
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();

   }

  ngOnInit(): void {
  }

}
