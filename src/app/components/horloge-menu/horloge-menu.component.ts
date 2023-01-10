import { Component } from '@angular/core';

@Component({
  selector: 'app-horloge-menu',
  templateUrl: './horloge-menu.component.html',
  styleUrls: ['./horloge-menu.component.scss'],
})
export class HorlogeMenuComponent {
  timezones: string[] = [
    'Europe/Paris',
    'Europe/Berlin',
    'America/Los_Angeles',
    'America/New_York',
    'Asia/Hong_Kong',
    'Asia/Tokyo',
  ];

  public setTime(timezone: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    const time = date.split(' ')[1];

    setInterval(() => {}, 1000);

    return time;
  }
}
