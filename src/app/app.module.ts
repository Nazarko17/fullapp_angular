import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./components/signup/signup.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {MatCardModule} from "@angular/material/card";
import {AppRoutingModule} from "./app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {authInterceptorProviders} from "./services/auth.interceptor";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {UserDashboardComponent} from "./components/user/user-dashboard/user-dashboard.component";
import {ProfileComponent} from "./components/admin/profile/profile.component";
import {MatListModule} from "@angular/material/list";
import {SidebarComponent} from "./components/admin/sidebar/sidebar.component";
import {ViewCategoriesComponent} from "./components/admin/view-categories/view-categories.component";
import {AddCategoryComponent} from "./components/admin/add-category/add-category.component";
import { ViewExamsComponent } from './components/admin/view-exams/view-exams.component';
import { AddExamComponent } from './components/admin/add-exam/add-exam.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import { UpdateExamComponent } from './components/admin/update-exam/update-exam.component';
import { ViewExamQuestionsComponent } from './components/admin/view-exam-questions/view-exam-questions.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './components/admin/update-question/update-question.component';
import { UserSidebarComponent } from './components/user/user-sidebar/user-sidebar.component';
import { InstructionsComponent } from './components/user/instructions/instructions.component';
import { StartExamComponent } from './components/user/start-exam/start-exam.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from "ngx-ui-loader";
import { UpdateCategoryComponent } from './components/admin/update-category/update-category.component';
import { UpdateProfileComponent } from './components/admin/update-profile/update-profile.component';
import { UserViewExamsComponent } from './components/user/user-view-exams/user-view-exams.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './components/user/update-user-profile/update-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewExamsComponent,
    AddExamComponent,
    UpdateExamComponent,
    ViewExamQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserSidebarComponent,
    InstructionsComponent,
    StartExamComponent,
    UpdateCategoryComponent,
    UpdateProfileComponent,
    UserViewExamsComponent,
    UserProfileComponent,
    UpdateUserProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
