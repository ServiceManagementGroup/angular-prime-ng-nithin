import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ListboxModule,
    RouterModule,
    MenuModule
  ],
  exports: [SideBarComponent]
})
export class SideBarModule { }
