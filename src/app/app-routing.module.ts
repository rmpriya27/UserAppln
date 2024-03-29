import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'users',
    component :UsersComponent
  },
  { path: '', redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'detail/:id',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
