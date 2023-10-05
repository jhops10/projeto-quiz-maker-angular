import { AlertService } from './alert.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, EMPTY } from 'rxjs';
import { Quiz } from '../quiz/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  url: string = 'http://localhost:8080/quizzes';

  constructor(private http: HttpClient, private alertServce: AlertService) {}

  readQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.url).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
    );
  }

  readQuizById(id: any): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.url}/${id}`).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
    );
  }

  createQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.url, quiz).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
    );
  }

  updateQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.put<Quiz>(`${this.url}/${quiz.id}`, quiz).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
    );
  }

  deleteQUiz(id: number): Observable<Quiz> {
    return this.http.delete<Quiz>(`${this.url}/${id}`).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
    );
  }

  error(e?: any): Observable<any> {
    this.alertServce.showAlert(`Erro ${e.name}: ${e.message}`, 'danger');
    return EMPTY;
  }
}
