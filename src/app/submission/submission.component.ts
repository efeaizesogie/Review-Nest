import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {

  brandName: string = '';
  brandDesc: string = ''

  @Output() closeRequested = new EventEmitter<void>();

  closeSubmission() {
    this.closeRequested.emit();
  }

  constructor() {
    this.brandName = localStorage.getItem("companyName") || "";
    this.brandDesc = localStorage.getItem("companyName") || "";
  }
}
