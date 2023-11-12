import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatbotService } from 'src/app/sevices/chatbot.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  formMessage: FormGroup;
  messages: any[]; 
  submitted = false;
  constructor(private messageService: ChatbotService, private formBulder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formMessage = this.formBulder.group({
     
      message: ['', Validators.required],
      
    });
    this.messages = [];
  }
  AddMessage() {
    this.submitted = true;
    
    if (this.formMessage.invalid) {
      return;
    } else {
      this.messageService.addMessage(this.formMessage.value).subscribe(
        (res: any) => {
          console.log("message ", res);
          this.messages.push(res.response); // Add the response to the messages array
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}
