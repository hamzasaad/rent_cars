import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/sevices/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  empty: boolean = true
  items = [] as any
  totalPrice: any
  connect: boolean = false
  totalitem:number=0;
  constructor(private route: Router, private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    this.check()
  
  }

  check() {
    if (this.state == 0) {
      this.connect = true
      this.empty = false
    }
    console.log('connect', this.connect)
  }
  onLogout() {
    localStorage.clear()
    this.route.navigateByUrl('/')
    this.connect = false
    this.empty = true
  }
  removeItem(item: any) {
    console.log(this.items)
    const index = this.items.findIndex((o: any) => o.id === item.id);
    if (index > -1) {
      this.items.splice(index, 1);
      Swal.fire({
        icon: 'success',
        title: 'Deleted !',
      })
      this.cartService.getItems();
    }
  }
  gettotal() {
    let total = 0;
    this.items.forEach((element: any) => {
      total += Number(element.prix) * Number(element.currentQuatity);
    });
    this.totalPrice = total;
    return total;
  }
  getItems(){
    this.items = this.cartService.getItems();
  }
}
