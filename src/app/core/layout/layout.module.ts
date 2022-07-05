import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
