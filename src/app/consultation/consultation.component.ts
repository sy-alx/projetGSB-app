import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})
export class ConsultationComponent implements OnInit {
  public returnedApiData:any;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getCompteRenduList();
  }

  getCompteRenduList() {
    this.httpClient.get('http://localhost:8888/api/CompteRendu').subscribe(
      (data:any)=> {
        this.returnedApiData = "";
        for (let value of data){
          this.returnedApiData +=value.Datevisite;

        }

      }
    )
   }
}
