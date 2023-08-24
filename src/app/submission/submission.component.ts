import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {
  @Output() closeRequested = new EventEmitter<void>();

  closeSubmission() {
    this.closeRequested.emit();
  }
}
