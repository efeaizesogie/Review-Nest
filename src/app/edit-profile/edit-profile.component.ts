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

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent {
  showEditProfilePage: boolean = false;
  userInput: string = "";
  wordCount: number = 0;
  maxCharacters = 150;
  characterCount = 0;

  apiData: any;
  userInput$: any;

  selectedImage: any;
  selectedImageUrl: string | undefined;
  isDetailBoxActive: boolean = false;
  emailInput = new FormControl();
  desc = new FormControl();

  constructor(
    private http: HttpClient,
    private dataService: UserInputService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private userInputService: UserInputService,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {
    this.emailInput.valueChanges.pipe(debounceTime(100)).subscribe((value) => {
      this.emailInput.setValidators([Validators.required, Validators.email]);
      this.emailInput.updateValueAndValidity();
    });
  }

  onInput(event: any): void {
    this.characterCount = event.target.value.length;
    const words = this.userInput
      .split(" ")
      .filter((word) => word.trim() !== "");
    this.wordCount = words.length;
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
    this.selectedImageUrl = URL.createObjectURL(this.selectedImage);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      const base64Image = event.target.result;
      localStorage.setItem("enteredImageUrl", base64Image);
    };

    reader.readAsDataURL(this.selectedImage);

    this.userInputService.updateSelectedImageUrl(this.selectedImageUrl);
  }

  hideElement(): void {
    const elementToHide = document.querySelector(".edit-wrapper");
    if (elementToHide) {
      this.renderer.setStyle(elementToHide, "display", "none");
      this.sharedService.updateIsDetailBoxActive(false);
    }
  }

  onUpdateClicked(editForm: NgForm) {
    if (editForm.valid) {
      if (this.emailInput.valid && this.emailInput.value) {
        var formValues = editForm.value;

        formValues.email = this.emailInput.value;
        formValues.company_description = this.desc.value;

        this.userInputService.updateUserInput(formValues);

        this.userInputService.updateSelectedImageUrl(this.selectedImage);

        localStorage.setItem("companyImage", this.selectedImage);

        const elementToHide = document.querySelector(".edit-wrapper");
        if (elementToHide) {
          this.renderer.setStyle(elementToHide, "display", "none");
          this.sharedService.updateIsDetailBoxActive(false);
        }
        console.log(formValues);

        const headers = new HttpHeaders({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.NjRkZTAwYTg3YmUzZWI5ZDVhYzgzMjI4.2Un6mWrki4l1hGtK8HoFqInCKGoLnT25L94gdmQ4Q4M",
        });
        this.http
          .patch(
            "https://reviewnest.onrender.com/api/v1/user/64dffbb9aaeffa4bb4765feb?=eyJhbGciOiJIUzI1NiJ9.NjRkZTVlODRiNjQwMjdlNzAxYmZlZTFm.bhSNr6S0j6ub1TXPG6Iu95KvQiLmWh_rpALNdycnbS0/profile.json",
            formValues,
            { headers: headers }
          )
          .subscribe((res) => {
            this.apiData = res;
            console.log(this.apiData);
          });

        editForm.resetForm();
      } else {
        alert("Email is invalid.");
      }
    }
  }
}
