import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/sevices/cart.service';
import { ProductService } from 'src/app/sevices/product.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;
  categoryproduct:any;
  p: number = 1;
  items = [] as any;
  qty_user: number =1
  term:String;
  constructor(private productService:ProductService,private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
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
        this.product = res;
        console.log("product", this.product);
      }
    )
  }

  getAllCategory() {
    this.productService.getCateagoryproduct().subscribe(
      (res: any) => {
        this.categoryproduct = res;
        console.log("category product", this.categoryproduct);
      }
    )
  }

  OnChangeCategory(categoryproduct: any) {
    console.log("detected value category ", categoryproduct.id)
    this.productService.getProduct().subscribe(
      (res: any) => {
        console.log(res)
        this.product = res.filter((products: any) => products.category.id == categoryproduct.id)
        console.log("list of products", this.product)
      })
  }

  }
