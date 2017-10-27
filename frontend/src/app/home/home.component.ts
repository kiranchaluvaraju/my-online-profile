import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  private errorMessage: string;
  private welcomeMessage: string;
  constructor(private homeService: HomeService) { }

  getMessage(): void {
  }


  ngOnInit() {
    this.homeService
      .getMessage()
      .subscribe(
      welcomeMessage => {
        this.welcomeMessage = welcomeMessage;
        console.log(welcomeMessage);
      },
      error => this.errorMessage = <any>error
      );
  }
}
