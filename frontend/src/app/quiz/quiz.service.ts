import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  url: string = 'http://localhost:8080/quizzes';

  constructor(private http: HttpClient) {}

  readQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.url).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
    );
  }

  readQuizById(id: number): Observable<Quiz> {
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
    return e;
  }
}
