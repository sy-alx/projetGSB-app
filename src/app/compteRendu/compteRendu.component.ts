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
  selector: 'app-compteRendu',
  templateUrl: './compteRendu.component.html',
  styleUrls: ['./compteRendu.component.scss'],
})

export class CompteRenduComponent implements OnInit {
  public returnedApiData:any;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getCompteRenduList();
  }

  getCompteRenduList() {

    this.httpClient.get(`${environment.apiUrl}/api/CompteRendu`, {headers:{
      'X-API-KEY': this.authenticationService.token
    }}).subscribe(
      (data:Array<ICompteRenduResponse>)=> { 
        this.returnedApiData = data; 
        console.log(data);
        // Get praticien && remplacant
      }
    )
  }
}
