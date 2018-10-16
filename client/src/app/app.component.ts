import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allMessages:any;
  formMessage:any;
  oneMessage:any;
  title = 'app';
  constructor(private _httpService:HttpService){
    this.resetMessage();
    this.getMessages();
  }
  getMessages(){
    let obs = this._httpService.getMessages()
    obs.subscribe(data=>{
      this.allMessages = data;
      console.log(this.allMessages)
    })
  }
  resetMessage(){
    this.formMessage = {
      content:""
    }
  }
  buttonSubmit(){
    let obs = this._httpService.createMessage(this.formMessage)
    obs.subscribe(data=>{
      this.resetMessage();
      this.allMessages.push(data)
    })
  }
  showMessage(message_id){
    let obs = this._httpService.getOneMessage(message_id)
    obs.subscribe(data=>{
      this.oneMessage = data;
    })
  }
  updateMessage(){
    let obs = this._httpService.updateMessage(this.oneMessage);
    obs.subscribe(data=>{
      this.getMessages();
      this.oneMessage = false;
    })
  }
  deleteMessage(message_id){
    let obs = this._httpService.deleteMessage(message_id)
    obs.subscribe(data=>{
      this.getMessages();
      this.oneMessage = false;
    })
  }
}
