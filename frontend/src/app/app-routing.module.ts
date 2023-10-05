import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: QuizInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
