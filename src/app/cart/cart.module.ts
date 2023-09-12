import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    EditFormComponent,
    AddItemFormComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
