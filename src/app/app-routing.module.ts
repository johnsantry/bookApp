import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'coverpage', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'coverpage', loadChildren: './coverpage/coverpage.module#CoverpagePageModule' },
  { path: 'table-of-contents', loadChildren: './table-of-contents/table-of-contents.module#TableOfContentsPageModule' },
  { path: 'ch1', loadChildren: './ch1/ch1.module#Ch1PageModule' },
  { path: 'ch2', loadChildren: './ch2/ch2.module#Ch2PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
