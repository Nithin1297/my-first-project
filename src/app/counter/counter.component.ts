import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorGameComponent } from '../color-game/color-game.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule,ColorGameComponent,MatBadgeModule,MatButtonModule, MatIconModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
like = 0
dislike = 0
likeIncreament(){
  this.like += 1;
}
disLikeIncreament(){
this.dislike +=1
}
clearLikes(){
this.like = 0;
}

color =""

colorarray = ['']

addColor(){
this.colorarray.push(this.color)
}
}
