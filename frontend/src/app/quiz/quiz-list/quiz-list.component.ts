import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent {
  quizzes!: Quiz[];
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.readQuizzes().subscribe((quizzes) => {
      this.quizzes = quizzes;
      console.log(quizzes);
    });
  }
}
