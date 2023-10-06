import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-quiz-tela',
  templateUrl: './quiz-tela.component.html',
  styleUrls: ['./quiz-tela.component.css'],
})
export class QuizTelaComponent implements OnInit {
  quiz!: Quiz;
  id = this.route.snapshot.paramMap.get('id');
  numQuestions: number = 0;
  num: number = 0;
  finished: boolean = false;
  randomArr: string[] = ['res1', 'res2', 'res3', 'res4'];
  correctAnswers: number = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizService.readQuizById(this.id).subscribe((quiz) => {
      this.quiz = quiz;
      this.numQuestions = quiz.numQuestions;
    });
    this.randomFunc();
  }

  randomFunc() {
    this.randomArr = this.randomArr.sort(() => Math.random() - 0.5);
    console.log(this.randomArr);
  }

  finishQuiz() {
    this.finished = true;
  }
  nextQuestion() {
    this.num++;
    this.randomFunc();
    if (this.num >= this.numQuestions) {
      this.finishQuiz();
    }
  }

  check(e: Event) {
    const label = e.target as HTMLLabelElement;
    const labelId = label.id;
    if (labelId == 'res1') {
      this.correctAnswers++;
      label.classList.add('correct');
    } else {
      label.classList.add('incorrect');
    }

    setTimeout(() => {
      label.setAttribute('class', 'btn btn-light');
    }, 500);
    setTimeout(() => {
      this.nextQuestion();
    }, 1500);
  }

  restart(): void {
    window.location.reload();
  }

  quit(): void {
    this.router.navigate(['list']);
  }
}
