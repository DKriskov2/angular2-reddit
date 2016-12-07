import { Component, OnInit, OnDestroy } from '@angular/core';

import { IAlert } from './alert.interface';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: Array<IAlert> = [];
  private alertsSubscription;

  constructor(
    private AlertService: AlertService
  ) {
  }

  ngOnInit() {
    this.alertsSubscription = this.AlertService.alertSource$
      .subscribe(
        (data) => this.alerts = data);
  }

  ngOnDestroy() {
    this.alertsSubscription.unsubscribe();
  }

  closeAlert(index) {
    this.AlertService.closeAlert(index);
  }
}
