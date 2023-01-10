import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss'],
})
export class HorlogeComponent {
  @Input()
  time: string = '00:00:00';
}
