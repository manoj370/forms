import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipe } from './searchpipe/filter.pipe';
import { ServiceService } from './service.service';
import { urlServices } from './serviceUrls';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { PostformComponent } from './postform/postform.component';
import { User } from './user.model';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DashboardComponent,FilterPipe, ViewComponent, PostformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [ServiceService,urlServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
