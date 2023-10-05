import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizInfoComponent } from './quiz/quiz-info/quiz-info.component';
import { BtnHomeComponent } from './components/btn-home/btn-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizInfoComponent,
    BtnHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
