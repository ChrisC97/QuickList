import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'checklist', loadChildren: './checklist/checklist.module#ChecklistPageModule' },
  { path: 'checklist/:id', loadChildren: './checklist/checklist.module#ChecklistPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
