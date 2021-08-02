import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BranchofficeComponent } from './branchoffice/branchoffice.component';
import { ProductsComponent } from './products/products.component';
import { BranchofficeEditComponent } from './branchoffice-edit/branchoffice-edit.component';
import { CreateproductComponent } from './createproduct/createproduct.component';

const routes: Routes = [
  // { path: '**',pathMatch:'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'branchoffice', component: BranchofficeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'branchofficeEdit', component: BranchofficeEditComponent },
  { path: 'editproduct/:id', component: CreateproductComponent },
  { path: 'createproduct', component: CreateproductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NavComponent,
    FooterComponent,
    BranchofficeComponent,
    ProductsComponent,
    ProductsComponent,
    BranchofficeEditComponent,
    CreateproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
