import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  newMsg:string="";
  msgs:any = [
  {
    emiteur:"id",
    text :"hi"
  },{
    emiteur:"hLe3GgjsctUh6V9jDMBGiXFPni02",
    text :"hello"
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  sendMsg(){
    let msg={
      emiteur:"id",
      text :this.newMsg
    }
    this.msgs.push(msg)

    this.newMsg="";
    
  }

}
