import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('errorModal', { static: false }) errorModal: any;
  registerForm: FormGroup;
  message: string = '';
  errorMessages: string[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Member', Validators.required],
    });
  }

  ngAfterViewInit() {
    // Modal initialization if needed
  }

  register(): void {
    if (this.registerForm.valid) {
      const payload = this.registerForm.value;
debugger;
      this.authService.register(payload).subscribe({
        next: () => {
          this.message = 'Registration successful!';
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessages = err.error.map(
            (error: { description: string; code: string }) =>
              `${error.code}: ${error.description}`
          );
          this.openModal(); // Open the modal with error messages
        },
      });
    }
  }

  openModal(): void {
    const modalElement = document.getElementById('errorModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
