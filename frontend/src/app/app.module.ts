import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';
import { BtnHomeComponent } from './components/btn-home/btn-home.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizFormComponent } from './quiz/quiz-form/quiz-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizInfoComponent,
    BtnHomeComponent,
    QuizListComponent,
    QuizFormComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
