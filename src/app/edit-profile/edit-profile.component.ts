import {
  Component,
  ElementRef,
  NgModule,
  OnInit,
  Renderer2,
  importProvidersFrom,
} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  Validators,
} from "@angular/forms";
import { UserInputService } from "../user-input.service";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, debounceTime } from "rxjs";
import { SharedService } from "../shared.service";
import { ProfileService } from "../profile.service";
import { DataService } from "../data.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  showEditProfilePage: boolean = false;
  userInput: string = "";
  wordCount: number = 0;
  maxCharacters = 150;
  characterCount = 0;

  apiData: any;
  userInput$: any;

  isDetailBoxActive: boolean = false;
  company_description = new FormControl();
  loading: boolean = false;
  editForm!: FormGroup;

  private userID = localStorage.getItem("userID");
  private accessToken = localStorage.getItem("accessToken");
  private url = `https://reviewnest.onrender.com/api/v1/user/${this.userID}`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private userInputService: UserInputService,
    private sharedService: SharedService,
    private fb: FormBuilder,
    private profileService: ProfileService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      company_description: [
        "",
        [Validators.required, Validators.minLength(15)],
      ],
    });
  }

  onInput(event: any): void {
    this.characterCount = event.target.value.length;
    const words = this.userInput
      .split(" ")
      .filter((word) => word.trim() !== "");
    this.wordCount = words.length;
  }

  hideElement(): void {
    const elementToHide = document.querySelector(".edit-wrapper");
    if (elementToHide) {
      this.renderer.setStyle(elementToHide, "display", "none");
      this.sharedService.updateIsDetailBoxActive(false);
    }
  }

  onUpdateClicked() {
    if (this.editForm.valid) {
      this.loading = true;
      var formValues = this.editForm.value;
      this.userInputService.updateUserInput(formValues);

      const headers = new HttpHeaders({
        Authorization: `Bearer ${this.accessToken}`,
      });

      this.profileService.patch(this.url, formValues, headers).subscribe(
        (res) => {
          this.apiData = res;
          console.log(this.apiData);
          this.loading = false;

          const elementToHide = document.querySelector(".edit-wrapper");
          if (elementToHide) {
            this.renderer.setStyle(elementToHide, "display", "none");
            this.sharedService.updateIsDetailBoxActive(false);
          }
          this.editForm.reset();
        },
        (error) => {
          console.error(error);
          this.loading = false; // Make sure to handle the error condition as well
        }
      );
    } else {
      alert("form data is invalid");
    }
  }
}
