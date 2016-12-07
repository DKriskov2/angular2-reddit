import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Article } from './article.model';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {class: 'row'}
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor(
    private AlertService: AlertService
  ) {

  }

  voteUp(): boolean {
    this.article.voteUp();
    this.AlertService.addAlert('success', 'added vote up');
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    this.AlertService.addAlert('warning', 'added vote down');
    return false;
  }

  ngOnInit() {
  }

}
