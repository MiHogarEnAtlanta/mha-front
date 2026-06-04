import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailService } from "../services/email.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  showSuccess = false;
  showError = false;
  private alertTimer: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      tel: [null, [Validators.required]],
      message: [null],
      agree: [false, [Validators.requiredTrue]],
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      let name = this.contactForm.value.name;
      let email = this.contactForm.value.email;
      let tel = this.contactForm.value.tel;
      let message = this.contactForm.value.message;
      let req = {
        name: name,
        email: email,
        tel: tel,
        message: message,
      };
      this.emailService.sendMessage(req).subscribe({
        next: () => {
          this.contactForm.reset({ agree: false });
          this.showAlert("success");
        },
        error: () => {
          // El correo no se pudo enviar: avisamos para que el usuario reintente
          this.showAlert("error");
        },
      });
    }
  }

  private showAlert(type: "success" | "error") {
    this.showSuccess = type === "success";
    this.showError = type === "error";

    if (this.alertTimer) {
      clearTimeout(this.alertTimer);
    }
    // El alert lateral se oculta solo después de unos segundos
    this.alertTimer = setTimeout(() => this.closePopup(), 6000);
  }

  closePopup() {
    this.showSuccess = false;
    this.showError = false;
    if (this.alertTimer) {
      clearTimeout(this.alertTimer);
      this.alertTimer = null;
    }
  }

  ngOnDestroy() {
    if (this.alertTimer) {
      clearTimeout(this.alertTimer);
    }
  }
}
