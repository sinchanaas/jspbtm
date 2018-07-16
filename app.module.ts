import { CourseService } from './course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ContactForm} from './contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {signupForm} from './signup.component';
import {postcomponent} from './post.component';
import {HttpModule} from "@angular/http";
@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    ContactForm,
signupForm,
postcomponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
