import { Component } from '@angular/core';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.scss'],
})
export class CallApiComponent {
  list: string = '';

  async jsonApi(): Promise<Response> {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => json.data);
  }
}
