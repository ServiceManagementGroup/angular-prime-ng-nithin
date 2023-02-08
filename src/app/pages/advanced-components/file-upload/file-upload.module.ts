import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { Routes, RouterModule } from '@angular/router';
import { NavBarModule } from '../../shared/nav-bar/nav-bar.module';
import { SideBarModule } from '../../shared/side-bar/side-bar.module';
import { FileUploadModule as PrimeNGFileUpload } from 'primeng/fileupload';

const routes: Routes = [
  {
    path: '', component: FileUploadComponent
  }
];

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    SideBarModule,
    PrimeNGFileUpload,
    RouterModule.forChild(routes)
  ]
})
export class FileUploadModule { }
