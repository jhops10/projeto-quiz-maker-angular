import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css'],
})
export class QuizInfoComponent {
  infos: string[] = [
    'O QuizMaker é uma plataforma para criar e jogar quizzes personalizados online.',
    'Crie perguntas, e teste seus conhecimentos ou compartilhe com amigos. ',
    'Você também pode buscar um Quiz na sua lista. Além de poder editá-lo ou removê-lo.',
    'Na criação, escolha a quantidade de perguntas do seu quiz. Cada questão terá no mínimo 2, e no máximo 4 alternativas',
    'ATENÇÃO! Ao criar cada questão, a primeira resposta será sempre a correta, e use os demais campos para as respostas incorretas.',
    'Não se preocupe com a ordem, no jogo, as respostas virão em ordens aleatórias.',
    'Divirta-se!',
  ];
}
