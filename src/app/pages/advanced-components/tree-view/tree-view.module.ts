import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view.component';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SideBarModule } from '../../shared/side-bar/side-bar.module';
import { NavBarModule } from '../../shared/nav-bar/nav-bar.module';

const routes: Routes = [
  {
    path: '', component: TreeViewComponent
  }
];

@NgModule({
  declarations: [
    TreeViewComponent
  ],
  imports: [
    CommonModule,
    TreeModule,
    ButtonModule,
    CardModule,
    SideBarModule,
    NavBarModule,
    RouterModule.forChild(routes)
  ]
})
export class TreeViewModule { }
