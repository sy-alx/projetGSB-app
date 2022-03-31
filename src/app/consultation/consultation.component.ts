import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface ICompteRenduResponse {
  id: String,
  CoefConf: String,
  ImpacteVisite: String,
  MotifVisite: String,
  Praticien: String,
  Remplacant: String,
  fkUsers: String,
  idRdv: String,
  texte: String,
  Datevisite: String,
  DateCR: String
}  

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
})

export class ConsultationComponent implements OnInit {
  public returnedApiData:any;
  public nom;
  public prenom;  
  
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getCompteRenduList();
  }

  getCompteRenduList() {

    this.httpClient.get(`${environment.apiUrl}/api/CompteRendu`).subscribe(
      (data:Array<ICompteRenduResponse>)=> {  

        data.map((v) => {
          console.log(v);
        })
        this.returnedApiData = data;
        console.log(data);

      }
    )
   }
}
