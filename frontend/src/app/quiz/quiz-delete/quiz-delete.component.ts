import { AlertService } from './../../services/alert.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-delete',
  templateUrl: './quiz-delete.component.html',
  styleUrls: ['./quiz-delete.component.css'],
})
export class QuizDeleteComponent {
  quiz!: Quiz;
  quizName: string = '';

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.readQuizById(id).subscribe((quiz) => {
      this.quiz = quiz;
      this.quizName = quiz.name;
    });
  }

  cancel() {
    this.router.navigate(['list']);
  }

  delete() {
    this.quizService.deleteQuiz(this.quiz.id).subscribe({
      next: () =>
        this.alertService.showAlert(
          'Quiz Excluído com Sucesso!',
          'success',
          3000
        ),
      error: () =>
        this.alertService.showAlert('Erro ao excluir Quiz!', 'danger', 3000),
      complete: () => {
        this.cancel();
      },
    });
  }
}
