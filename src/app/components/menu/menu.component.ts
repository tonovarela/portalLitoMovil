import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ImenuItem } from '../../interfaces/ImenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: Observable<ImenuItem>;

  constructor() { }

  ngOnInit() {}

}
