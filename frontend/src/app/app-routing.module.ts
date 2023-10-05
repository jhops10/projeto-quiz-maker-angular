import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: QuizInfoComponent },
  { path: 'list', component: QuizListComponent },
  { path: 'form', component: QuizFormComponent },
  { path: 'edit/:id', component: QuizFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
