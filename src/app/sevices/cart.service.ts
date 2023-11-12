import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  total: any
  items = [] as any;
  
  constructor(private http: HttpClient) { }
  addToCart(addedItem: any) {
    this.items.push(addedItem);
    this.saveCart();
    // this.loadCart();
  }
  getItems() {
    return this.items;
  }
  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem("cart_items")!) ?? [];
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }
  removeItem(item: any) {
    console.log(this.items)
    const index = this.items.findIndex((o: any) => o.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }
  updateItemsInfavoris(items: any) {
    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(items));
  }
  itemInCart(item: any): boolean {
    return this.items.findIndex((o: any) => o.id === item.id) > -1;
  }
}

