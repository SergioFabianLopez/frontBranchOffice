import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  data:any;
  constructor(private ProductoService: ProductsService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {

    this.ProductoService.getproductsid(this.route.snapshot.params.id).subscribe((data)=>{
      console.warn(data)
      this.data=data;
      })
  }
  saveProducto(name:string,sku:string)
  {
    const newProduct = {name:name,sku:sku}
    this.ProductoService.creatproduct(newProduct);
  }
  
}
