import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:any;
  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.productsService.getproducts().subscribe((data)=>{
    console.warn(data)
    this.data=data;
    })
  }

}
