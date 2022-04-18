import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren : ()=>import('src/app/modules/home/home.module')
    .then(m=>m.HomeModule)
  },{
    path:'about',
    loadChildren : ()=>import('src/app/modules/about/about.module')
    .then(m=>m.AboutModule)
  },
  { path: 'blogs', loadChildren: () => import('./modules/blogs/blogs.module').then(m => m.BlogsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
