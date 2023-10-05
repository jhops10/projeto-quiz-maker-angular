import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css'],
})
export class QuizFormComponent implements OnInit {
  form1!: FormGroup;
  form2!: FormGroup;
  quizName!: string;
  numQuestions: number = 0;
  continue: boolean = false;
  questions: string[] = [];
  numQuestion: number = 1;
  isFinished: boolean = false;
  quiz!: Quiz;
  id? = this.route.snapshot.paramMap.get('id');
  initialNumQuestions!: number;
  counter: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form1 = this.formBuilder.group({
      quizName: [null, [Validators.required]],
      numQuestions: [null, [Validators.required]],
    });
    this.form2 = this.formBuilder.group({
      question: [null, [Validators.required]],
      res1: [null, [Validators.required]],
      res2: [null, [Validators.required]],
      res3: null,
      res4: null,
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.quizService.readQuizById(this.id).subscribe((quiz) => {
        this.form1 = this.formBuilder.group({
          quizName: quiz.name,
          numQuestions: quiz.numQuestions,
        });
        this.initialNumQuestions = quiz.numQuestions;
      });
    }
  }

  onSubmitForm1(form1: any): void {
    this.quizName = form1.value.quizName;
    this.numQuestions = form1.value.numQuestions;
    this.continue = true;
    if (this.id) {
      this.setForm2Values();
    }
  }

  setForm2Values() {
    this.quizService.readQuizById(this.id).subscribe((quiz) => {
      this.form2 = this.formBuilder.group({
        question: [
          quiz.questions[this.counter]?.question,
          [Validators.required],
        ],
        res1: [quiz.questions[this.counter]?.res1, [Validators.required]],
        res2: [quiz.questions[this.counter]?.res2, [Validators.required]],
        res3: quiz.questions[this.counter]?.res3,
        res4: quiz.questions[this.counter]?.res4,
      });
    });
  }

  onSubmitForm2(form2: any): void {
    this.questions.push(form2.value);
    form2.reset();
    if (this.numQuestion < this.numQuestions) {
      this.numQuestion++;
    }
    if (this.questions.length >= this.numQuestions) {
      this.isFinished = true;
      this.form2.disable();
    }
    if (
      this.initialNumQuestions == this.numQuestions ||
      (this.initialNumQuestions < this.numQuestions &&
        this.counter < this.initialNumQuestions) ||
      (this.initialNumQuestions > this.numQuestions &&
        this.counter < this.numQuestions)
    ) {
      this.setForm2Values();
      this.counter++;
    }
  }
  finish(): void {
    this.quiz = {
      name: this.quizName,
      numQuestions: this.questions.length,
      questions: this.questions,
      id: Number(this.id),
    };

    if (this.id) {
      this.quizService.updateQuiz(this.quiz).subscribe({
        next: () =>
          this.alertService.showAlert(
            'Quiz editado com sucesso!',
            'success',
            3000
          ),
        error: () =>
          this.alertService.showAlert('Erro ao editar quiz', 'danger', 3000),
        complete: () => {
          this.router.navigate(['list']);
        },
      });
    } else {
      this.quizService.createQuiz(this.quiz).subscribe({
        next: () =>
          this.alertService.showAlert(
            'Quiz criado com sucesso!',
            'success',
            3000
          ),
        error: () =>
          this.alertService.showAlert('Erro ao criar quiz', 'danger', 3000),
        complete: () => {
          this.router.navigate(['list']);
        },
      });
    }
  }
}
