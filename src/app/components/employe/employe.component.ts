import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss'],
})
export class EmployeComponent {
  list: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getData().subscribe((data) => (this.list = data));
  }
}
