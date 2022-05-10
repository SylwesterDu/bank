import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  @Input() panelDisposed = false;
  showLogin: boolean = false;

  constructor() { }

  click() {
    this.showLogin = true;
    //TODO: pokazywanie okna z logowaniem
  }

  //w nawiasach nazwa emittera w child, wywołujemy funkcję tutaj, w parent
  dispose() {
    this.showLogin = false;
  }

  ngOnInit(): void {
  }

}
