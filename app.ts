import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showOtherServices: boolean = false;
  selectedService: string = '';

  // Simple method to toggle other services
  toggleOtherServices() {
    this.showOtherServices = !this.showOtherServices;
    console.log('Showing other services:', this.showOtherServices);
  }
}
