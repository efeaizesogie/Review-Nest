import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserInputService {
  constructor() {}
  private userInputSubject = new BehaviorSubject<string>("");
  userInput$ = this.userInputSubject.asObservable();

  updateUserInput(input: any) {
    this.userInputSubject.next(input);
    console.log(input);
  }
}
