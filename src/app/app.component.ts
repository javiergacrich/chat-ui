import { Component, OnInit } from '@angular/core';
import { SignalrService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'chat-ui';
  text: string = "";

  constructor(public signalRService: SignalrService) {

  }

  ngOnInit(): void {
    this.signalRService.connect();
  }

  sendMessage(): void {

    // you can send the messge direclty to the hub or use the api controller.
    // choose wisely

    // this.signalRService.sendMessageToApi(this.text).subscribe({
    //   next: _ => this.text = '',
    //   error: (err) => console.error(err)
    // });

    this.signalRService.sendMessageToHub(this.text).subscribe({
      next: _ => this.text = '',
      error: (err) => console.error(err)
    });
  }
}
