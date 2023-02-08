import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './models/routes';

const routes: Routes = [
  {
    path: "",
    redirectTo: AppRoutes.DataShare,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.AdvancedComponents,
    loadChildren: () => import('./pages/advanced-components/advanced-components.module').then(m => m.AdvancedComponentsModule)
  },
  {
    path: AppRoutes.DataShare,
    loadChildren: () => import('./pages/data-share/data-share.module').then(m => m.DataShareModule)
  },
  {
    path: AppRoutes.NotFound,
    loadChildren: () => import('./pages/shared/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: "**",
    redirectTo: AppRoutes.NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
