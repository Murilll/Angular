import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { ComunityPageComponent } from './comunity-page/comunity-page.component';
import { NewAccountPageComponent } from './new-account-page/new-account-page.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PasswordComponent } from './password/password.component';
import { FormsModule } from '@angular/forms';
import { CreatePasswordComponent } from './create-password/create-password.component'; // Added for use ngModel
import { HttpClientModule } from '@angular/common/http'; // Added for use HttpClient
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added for use ReactiveForms
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'; // Added for use Angular Material Button


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    FeedPageComponent,
    ComunityPageComponent,
    NewAccountPageComponent,
    RecoverPageComponent,
    UserPageComponent,
    PasswordComponent,
    CreatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Added for use ngModel
    HttpClientModule, // Added for use HttpClient
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule // Added for use Angular Material Button
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
