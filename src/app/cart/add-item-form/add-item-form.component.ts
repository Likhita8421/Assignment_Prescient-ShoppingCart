import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Cart } from '../cart.model';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent {


  constructor(private router:Router , private cartService: CartService){}

  formData: Cart ={
    id: 0,
    Name: '',
    quantity: 0,
    Price: 0
  }


  //create item method
  create(){
    this.cartService.addItem(this.formData).subscribe({
      next: (data)=>{
        this.router.navigate(['product/cart'])
      },
      error: (er) => {
        console.log(er)
      }
    })
  }

}
