import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-transfer-screen',
  templateUrl: './make-transfer-screen.component.html',
  styleUrls: ['./make-transfer-screen.component.scss']
})
export class MakeTransferScreenComponent implements OnInit {
  normalTransfer: boolean = true;
  formFilled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
