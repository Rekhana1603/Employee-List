import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  employeeDetails: { name: string, contact: string, email: string, address: string }[] = [
    {
      name : "Max Miller",
      contact : "9885697845",
      email : "max@gmail.com",
      address : "Berlin"
    },
    {
      name : "Alexia Monte",
      contact : "8554523089",
      email : "alexia@gmail.com",
      address : "Washington"
    },
    {
      name : "Lucas Alex",
      contact : "9556896302",
      email : "lucas@gmail.com",
      address : "London"
    },
    {
      name : "Anna Joseph",
      contact : "8440566238",
      email : "anna@gmail.com",
      address : "Dubai"
    }
  ]

  name: string = ""
  contact: string = ""
  email: string = ""
  address: string = ""

  addEmployee() {
    if (this.name && this.contact && this.email && this.address) {
      this.employeeDetails.push({ name: this.name, contact: this.contact, email: this.email, address: this.address });
      this.resetForm();
    }
  }

  resetForm() {
    this.name = "",
    this.contact = "",
    this.email = "",
    this.address = ""
  }

}
