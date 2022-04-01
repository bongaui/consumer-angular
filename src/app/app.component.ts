import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  primary = 'primary';
  secondary = 'secondary';
  tertiary = 'tertiary';

  ngOnInit(): void {}
}
