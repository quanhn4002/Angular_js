import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './component/student-list/student-list.component';
import { AddStudentComponent } from './component/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    StudentListComponent,
    AddStudentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
