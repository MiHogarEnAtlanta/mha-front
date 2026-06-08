import { isPlatformBrowser } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailService } from "../services/email.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit, AfterViewInit, OnDestroy {
  contactForm: FormGroup;
  showSuccess = false;
  showError = false;
  private alertTimer: any = null;

  @ViewChild("alertHost") alertHost: ElementRef<HTMLElement>;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      tel: [null, [Validators.required]],
      message: [null],
      agree: [false],
    });
  }

  ngAfterViewInit() {
    // Movemos el host de alertas directo a <body>: así el position:fixed se
    // ancla al viewport y no queda atrapado por ancestros con transform/overflow.
    if (isPlatformBrowser(this.platformId) && this.alertHost) {
      this.renderer.appendChild(document.body, this.alertHost.nativeElement);
    }
  }

  sendEmail() {
    if (this.contactForm.valid) {
      let name = this.contactForm.value.name;
      let email = this.contactForm.value.email;
      let tel = this.contactForm.value.tel;
      let message = this.contactForm.value.message;
      let consent = this.contactForm.value.agree;
      let req = {
        name: name,
        email: email,
        tel: tel,
        message: message,
        consent,
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
    // Limpiamos el host que movimos a <body> para no dejar nodos huérfanos.
    if (this.alertHost && this.alertHost.nativeElement.parentNode) {
      this.renderer.removeChild(
        this.alertHost.nativeElement.parentNode,
        this.alertHost.nativeElement
      );
    }
  }
}
