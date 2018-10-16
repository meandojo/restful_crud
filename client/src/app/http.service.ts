import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) {}

  getMessages(){
    return this._http.get("/messages")
  }
  createMessage(message){
    return this._http.post("/messages", message)
  }
  getOneMessage(message_id){
    return this._http.get('/messages/' + message_id)
  }
  updateMessage(message){
    return this._http.put('/messages/' + message._id, message)
  }
  deleteMessage(message_id){
    return this._http.delete('/messages/' + message_id)
  }

}
