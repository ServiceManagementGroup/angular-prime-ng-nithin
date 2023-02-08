import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DataShareComponent } from './data-share.component';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';
import { NavBarModule } from '../shared/nav-bar/nav-bar.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataShareService } from 'src/app/services/data-share/data-share.service';
import { SideBarModule } from '../shared/side-bar/side-bar.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: DataShareComponent
  }
];

@NgModule({
  declarations: [
    DataShareComponent,
    DataListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavBarModule,
    CardModule,
    ButtonModule,
    SideBarModule,
    InputTextModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CurrencyPipe,
    DataShareService
  ]
})
export class DataShareModule { }
