import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent  implements OnInit{

  constructor(private cartService: CartService, 
    private router: Router,
    private route: ActivatedRoute,
    ){}

    formData: Cart ={
      id: 0,
      Name: '',
      quantity: 0,
      Price: 0
    }


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      let id = Number(param.get('id'))
      this.getByid(id)
    })
  }

  getByid(id:number){
    this.cartService.edit(id).subscribe((data) =>{
      this.formData = data;
    })
  }

  update(){
    this.cartService.update(this.formData).subscribe({
      next: (data)=>{
        this.router.navigate(['product/cart'])
      },
      error: (er) => {
        console.log(er)
      }
    })
  }
}
