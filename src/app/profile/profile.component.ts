import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() Flower = 'Purple'
  imageURL = "https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg"
 
}
