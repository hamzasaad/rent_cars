import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/sevices/cart.service';
import { ProductService } from 'src/app/sevices/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.component.html',
  styleUrls: ['./shopingcart.component.css']
})
export class ShopingcartComponent implements OnInit {
  items = [] as any
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  orderForm: FormGroup;
  qty_user: number = 1
  product: any
  totalPrice: any
  totalQte: any
  ok: boolean = false
  ngSelect =1;
  constructor(private route: Router, private cartService: CartService,private productService:ProductService,private formBulder: FormBuilder) { }

  ngOnInit(): void {
    
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    this.getQte();
    this.gettotal();
    this.orderForm = this.formBulder.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', Validators.required],
      total: ['', Validators.required],
      products: ['', Validators.required],
      id_client: ['', Validators.required]
    })
  }


  gettotal() {
    let total = 0;
    this.items.forEach((element: any) => {
      total = total+ Number(element.prix) *(element.currentQuantity);
      
    });
    this.totalPrice = total;
    return total;
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }
  minus() {
    this.qty_user--
  }
  plus() {
    if (this.qty_user < this.product.quantity) {
      this.qty_user++
    }
  }
  removeItem(item: any) {
    console.log(this.items)
    const index = this.items.findIndex((o: any) => o.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
      Swal.fire({
        icon: 'success',
        title: 'Deleted !',
      })
    }
  }
  getQte() {
    let totalQte = 0;
    this.items.forEach((element: any) => {
      totalQte += Number(element.currentQuantity)
    });
    this.totalQte = totalQte;
    console.log("total quantity :",totalQte)
    return totalQte;
  }
  addOrder() {
    const productIds = this.items.map((item: any) => item.id); // Extract product IDs
    
    console.log("product ids :",productIds)
    console.log("qte", this.totalQte);
    console.log("total", this.totalPrice);
    console.log("client", this.userconnect.id);
    this.orderForm.patchValue({
      price: this.totalQte,
      products: this.items,
      total: this.totalPrice,
      date: new Date().toISOString().split('T')[0].toString(),
    });
  
    this.productService.saveCommande(this.orderForm.value, this.userconnect.id,productIds).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  
    Swal.fire({
      icon: 'success',
      title: 'Order added!',
    });
  
    this.ok = true;
  }

}
