import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

const CURRENT = 'current';
const QUIZZ_LIST = 'quizz-list';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {


  currentQuizz: Quizz;
  list: any;

  constructor() {
    this.retrieveLocal();
    this.retrieveList();
  }

  create(name: string) {
    this.currentQuizz = new Quizz(name);
    console.log('quizz', this.currentQuizz);
    this.saveLocal();
  }

  saveLocal() {
    localStorage.setItem(CURRENT, JSON.stringify(this.currentQuizz));
  }

  retrieveLocal() {
    const quizz = JSON.parse(localStorage.getItem(CURRENT));
    if (!quizz) {
      return;
    }
    quizz.__proto__ = Quizz.prototype;
    this.currentQuizz = quizz;
  }

  retrieveList() {
    const quizz = JSON.parse(localStorage.getItem(QUIZZ_LIST));
    if (!quizz) {
      this.list = {};
      return;
    }
    // tslint:disable-next-line: forin
    for (const p in quizz) {
      quizz[p].__proto__ = Quizz.prototype;
    }
    this.list = quizz;
  }

  save() {
    this.list[this.currentQuizz.name] = this.currentQuizz;
    localStorage.setItem(QUIZZ_LIST, JSON.stringify(this.list));
  }





}
