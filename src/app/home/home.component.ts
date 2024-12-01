import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = ""
  password: string = ""

  constructor(private router: Router) {}

  login() {
    if (this.username == 'touchworld' && this.password == 'touchworldTech') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials!!!');
    }
  }
}
