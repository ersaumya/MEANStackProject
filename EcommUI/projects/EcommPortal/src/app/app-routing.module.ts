import { UserGuard } from './common/guard/user.guard';
import { AdminGuard } from './common/guard/admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module'; */


const routes: Routes = [
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren:()=>import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    canLoad: [UserGuard],
    loadChildren:()=>import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
