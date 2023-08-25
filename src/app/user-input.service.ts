import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserInputService {
  constructor() {}
  private userInputSubject = new BehaviorSubject<string>("");
  userInput$ = this.userInputSubject.asObservable();
  private selectedImageUrl: string | undefined;
  private selectedImageUrlSubject = new BehaviorSubject<string>("");
  selectedImageUrl$ = this.selectedImageUrlSubject.asObservable();

  updateUserInput(input: any) {
    this.userInputSubject.next(input);
    console.log(input);
  }

  updateSelectedImageUrl(url: string) {
    this.selectedImageUrlSubject.next(url);
  }

  getSelectedImageUrl(): string | undefined {
    return this.selectedImageUrl;
  }
}
