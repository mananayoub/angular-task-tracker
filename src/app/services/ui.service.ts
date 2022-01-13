import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAdsTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  
  toggleAddTask(): void {
    this.showAdsTask = !this.showAdsTask;
    this.subject.next(this.showAdsTask);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
