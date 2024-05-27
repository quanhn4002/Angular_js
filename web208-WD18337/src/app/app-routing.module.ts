import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { adminGuard } from './Guard/admin.guard';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'products', component: ProductListComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },

  {
    path: 'admin/dashboard',
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'students', component: StudentListComponent },
      { path: 'students-add', component: AddStudentComponent },
      { path: 'students-edit/:id', component: EditStudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
