import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from "src/app/services/authentication.service";

interface ICompteRenduResponse {
  // id: String,
  // CoefConf: String,
  // ImpacteVisite: String,
  // MotifVisite: String,
  // Praticien: String,
  // Remplacant: String,
  // fkUsers: String,
  // idRdv: String,
  // texte: String,
  // Datevisite: String,
  // DateCR: String
}  

@Component({
  selector: 'app-consultation',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})

export class PlanningComponent implements OnInit {
  public returnedApiData:any;
  public nom;
  public prenom;  
  
  constructor(
    private readonly httpClient: HttpClient,
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // this.getCompteRenduList();
  }

  // getCompteRenduList() {

  //   this.httpClient.get(`${environment.apiUrl}/api/Consultation`, {headers:{
  //     'X-API-KEY': this.authenticationService.token
  //   }}).subscribe(
  //     (data:Array<ICompteRenduResponse>)=> {  

  //       data.map((v) => {
  //         // console.log(v);
  //       })
  //       this.returnedApiData = data;
  //       console.log(data);

  //     }
  //   )
  //  }
}
