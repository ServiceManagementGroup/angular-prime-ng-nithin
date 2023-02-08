import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { DataShareService } from 'src/app/services/data-share/data-share.service';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,    
    MenubarModule,    
    BadgeModule
  ],
  exports: [NavBarComponent],
  providers: [DataShareService]
})
export class NavBarModule { }
