import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {
  @Output() disposePanelEmitter = new EventEmitter();
  constructor(
    private router: Router
  ) {
  }

  tryToLog: boolean = false;
  error: boolean = false;
  errorMessage: string = "";


  dispose() {
    console.log("dispose");
    this.disposePanelEmitter.emit();
  }

  ngOnInit(): void {
  }

  login() {
    // if (document.getElementById("login")?.textContent == '' || document.getElementById("password")?.textContent == '') {
    //   this.errorMessage = "Podaj poprawne dane.";
    //   this.error = true;
    //   return;
    // }
    this.tryToLog = true;
    setTimeout(() => {
      this.tryToLog = false;
      this.router.navigate(['home']);
    }, 1000);
  }


}
