import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
 
  
  { path: "users",
    children:[
      { path: '', component: ListUserComponent},
      { path: 'list', component: ListUserComponent},
      { path: 'delete/:id', component: DeleteUserComponent},
      { path: 'edit/:id', component: EditUserComponent},
      { path: 'view/:id', component: ViewUserComponent},
      { path: 'create', component: AddUserComponent}
]},
 
 
  
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
