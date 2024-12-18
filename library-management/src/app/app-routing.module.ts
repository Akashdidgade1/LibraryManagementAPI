import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component'; // Import not needed; shown for clarity
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // Redirect to welcome
  { path: 'welcome', component: WelcomeComponent }, // Show WelcomeComponent
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'register', component: RegisterComponent }, // Register page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
