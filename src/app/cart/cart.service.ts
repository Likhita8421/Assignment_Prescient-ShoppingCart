import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get<Cart[]>("http://localhost:3000/shopping");
  }


  addItem(data:any){
    return this.http.post('http://localhost:3000/shopping',data);
  }

  edit(id: number){
    return this.http.get<Cart>(`http://localhost:3000/shopping/${id}`);
  }


  update(data:Cart){
    return this.http.put<Cart>(`http://localhost:3000/shopping/${data.id}`, data);
  }


  deleteItem(id: number){
    return this.http.delete<Cart>(`http://localhost:3000/shopping/${id}`);
  }
}

