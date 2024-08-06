import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [],
  templateUrl: './color-game.component.html',
  styleUrl: './color-game.component.scss'
})
export class ColorGameComponent {
@Input() clr = ''
}
