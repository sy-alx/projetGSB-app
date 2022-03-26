import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    interface ICompteRenduResponse {
      id: String,
      Datevisite: String,
      DateCR: String
    }  
    this.httpClient.get(`${environment.apiUrl}/api/CompteRendu`).subscribe(
      (data:Array<ICompteRenduResponse>)=> {  

        data.map((v) => {
          console.log(v);
        })
       // console.log(data);

      }
    )
   }
}
