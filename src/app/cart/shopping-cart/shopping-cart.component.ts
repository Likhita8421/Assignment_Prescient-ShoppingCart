import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  implements OnInit{

  allProducts: Cart[] =[];

  constructor(private http : HttpClient , private cartServices: CartService){}

  ngOnInit(): void {
    this.cartServices.getAllProduct().subscribe((data)=>{
      this.allProducts = data;
    })
  }


  deleteItem(id: number){
    this.cartServices.deleteItem(id).subscribe({
      next: (data) =>{
        this.allProducts = this.allProducts.filter(_=> _.id != id)
      },
    })
  }
}
