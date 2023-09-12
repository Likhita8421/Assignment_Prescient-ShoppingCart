import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {path:'product/cart', component: ShoppingCartComponent},
  {path:'product', redirectTo:'product/cart', pathMatch:'full'},
  {path:'', redirectTo:'product/cart', pathMatch:'full'},
  {path: 'product/addItem', component:AddItemFormComponent},
  {path: 'product/edit/:id', component:EditFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
