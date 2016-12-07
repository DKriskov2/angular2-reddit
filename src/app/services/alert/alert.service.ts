import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IAlert } from '../../shared/alert/alert.interface';

@Injectable()
export class AlertService {
  public alertSource$: Observable<any>;
  private _alert$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private alerts: Array<IAlert> = [];
  private timeouts = [];

  constructor() {
    this.alertSource$ = this._alert$.asObservable();
  }

  addAlert(alertType, msg): void {
    this.alerts.push({type: alertType, message: msg});
    this.timeouts.push(setTimeout(() => this.closeAlert(), 2000 ));
    this._alert$.next(this.alerts);
  }

  closeAlert(index = 0): void {
    this.alerts.splice(index, 1);
    clearTimeout(this.timeouts[index]);
    this._alert$.next(this.alerts);
  }

}
