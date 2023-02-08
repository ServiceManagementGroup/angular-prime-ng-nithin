import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedComponentsComponent } from './advanced-components.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/models/routes';

const routes: Routes = [  
  {
    path: AppRoutes.TreeView,
    loadChildren: () => import('./tree-view/tree-view.module').then(m => m.TreeViewModule)
  },
  {
    path: AppRoutes.FileUpload,
    loadChildren: () => import('./file-upload/file-upload.module').then(m => m.FileUploadModule)
  },
  {
    path: AppRoutes.OrgChart,
    loadChildren: () => import('./org-chart/org-chart.module').then(m => m.OrgChartModule)
  }
];

@NgModule({
  declarations: [
    AdvancedComponentsComponent
  ],
  imports: [
    CommonModule,    
    RouterModule.forChild(routes)
  ]
})
export class AdvancedComponentsModule { }
