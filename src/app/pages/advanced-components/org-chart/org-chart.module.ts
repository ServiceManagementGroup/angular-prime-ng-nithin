import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgChartComponent } from './org-chart.component';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { NavBarModule } from '../../shared/nav-bar/nav-bar.module';
import { SideBarModule } from '../../shared/side-bar/side-bar.module';
import {CardModule} from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';

const routes: Routes = [
  {
    path: '', component: OrgChartComponent
  }
];

@NgModule({
  declarations: [
    OrgChartComponent
  ],
  imports: [
    CommonModule,
    OrganizationChartModule,
    NavBarModule,
    SideBarModule,   
    CardModule,
    TabViewModule,
    ButtonModule,
    AccordionModule,
    RouterModule.forChild(routes)
  ]
})
export class OrgChartModule { }
