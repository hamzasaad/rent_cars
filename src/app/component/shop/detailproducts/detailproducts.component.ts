import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/sevices/cart.service';
import { ProductService } from 'src/app/sevices/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailproducts',
  templateUrl: './detailproducts.component.html',
  styleUrls: ['./detailproducts.component.css']
})
export class DetailproductsComponent implements OnInit {
  items = [] as any;
  qty_user: number =1
  product:any;
  products:any;
  p: number = 1;
  id = this.activateroot.snapshot.params['id'] 
  constructor(private productService:ProductService, private router: Router, private activateroot: ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.getoneVoiture();
    this.getAllProduct();
  }
  getoneVoiture() {
    this.productService.getOneProduct(this.id).subscribe(
      (res: any) => {
        this.product = res;
        console.log("product", this.product);
      }
    )
  }
  addToCart(item: any) {
    if (!this.cartService.itemInCart(item)) {
      // item.qtyTotal = 1;
      item.currentQuatity = this.qty_user
      this.cartService.addToCart(item); //add items in cart
      this.items = this.cartService.getItems();
      // this.items = [...this.cartService.getItems()];
      console.log(this.items)
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart !',
      })
    }
  }
  getAllProduct() {
    this.productService.getProduct().subscribe(
      (res: any) => {
        this.products = res;
        console.log("products", this.products);
      }
    )
  }

}
