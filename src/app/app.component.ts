import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

import { Article } from './article/article.model.ts';

function linkValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value) {
    return null;
  } else if (!control.value.match(/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/)) {
    return {invalidLink: true};
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles: Article[];
  newArticle: Article;
  myForm: FormGroup;
  title: AbstractControl;
  link: AbstractControl;

  constructor(
    private fb: FormBuilder
  ) {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];

    this.newArticle = new Article();
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.compose([
        Validators.required, Validators.maxLength(10)])
      ],
      link: ['', Validators.compose([
        Validators.required, linkValidator])
      ]
    });

    this.title = this.myForm.controls['title'];
    this.link = this.myForm.controls['link'];

    this.title.valueChanges.subscribe(
      (value: string) => {
        console.log(value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log(form);
      }
    );
  }

  addArticle(article): boolean {
    this.articles.push(new Article(article.title, article.link, 0));
    this.myForm.reset();
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
