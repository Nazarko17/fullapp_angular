import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import { SignupComponent } from './components/signup/signup.component';
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {UserDashboardComponent} from "./components/user/user-dashboard/user-dashboard.component";
import {AdminGuard} from "./services/admin.guard";
import {UserGuard} from "./services/user.guard";
import {ProfileComponent} from "./components/admin/profile/profile.component";
import {ViewCategoriesComponent} from "./components/admin/view-categories/view-categories.component";
import {AddCategoryComponent} from "./components/admin/add-category/add-category.component";
import {ViewExamsComponent} from "./components/admin/view-exams/view-exams.component";
import {AddExamComponent} from "./components/admin/add-exam/add-exam.component";
import {UpdateExamComponent} from "./components/admin/update-exam/update-exam.component";
import {ViewExamQuestionsComponent} from "./components/admin/view-exam-questions/view-exam-questions.component";
import {AddQuestionComponent} from "./components/admin/add-question/add-question.component";
import {UpdateQuestionComponent} from "./components/admin/update-question/update-question.component";
import {LoadExamComponent} from "./components/user/load-exam/load-exam.component";
import {InstructionsComponent} from "./components/user/instructions/instructions.component";
import {StartExamComponent} from "./components/user/start-exam/start-exam.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'admin', component: DashboardComponent, canActivate: [AdminGuard],
    children:
      [
        { path: 'profile', component: ProfileComponent },
        { path: 'categories', component: ViewCategoriesComponent },
        { path: 'add-category', component: AddCategoryComponent },
        { path: 'exams', component: ViewExamsComponent },
        { path: 'add-exam', component: AddExamComponent },
        { path: 'exam/:examId', component: UpdateExamComponent },
        { path: 'questions/:examId/:title', component: ViewExamQuestionsComponent },
        { path: 'add-question/:examId/:title', component: AddQuestionComponent },
        { path: 'question/:questionId', component: UpdateQuestionComponent }
      ]
  },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [UserGuard],
    children: [
      { path: ':categoryId', component: LoadExamComponent }, //bad code (дві крапки) :
      { path: 'instructions/:examId', component: InstructionsComponent },
    ] },
  { path: 'start/:examId', component: StartExamComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
