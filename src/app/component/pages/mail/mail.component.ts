import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  ok:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  clickConfirm(){
    this.ok=true
  }
}
