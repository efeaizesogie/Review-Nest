import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private isDetailBoxActiveSubject = new BehaviorSubject<boolean>(false);
  isDetailBoxActive$ = this.isDetailBoxActiveSubject.asObservable();

  updateIsDetailBoxActive(value: boolean) {
    this.isDetailBoxActiveSubject.next(value);
  }
}
