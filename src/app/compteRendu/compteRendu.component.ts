import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from "src/app/services/authentication.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-compteRendu',
  templateUrl: './compteRendu.component.html',
  styleUrls: ['./compteRendu.component.scss'],
})

export class CompteRenduComponent implements OnInit {
  public returnedApiData:any;
  public dataPraticien:any;
  public dataRemplacant:any;
  public dataMedicament:any;
  public dataMotif:any;
  credentials: FormGroup;


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
        this.dataPraticien = data[0];
        this.dataRemplacant = data[1];
        this.dataMedicament = data[2];
        this.dataMotif = data[3];
      }
    )
  }

  onClickSubmit(credentials) {

    this.httpClient.post(`${environment.apiUrl}/api/CompteRenduPost`, credentials, {headers:{
      'X-API-KEY': this.authenticationService.token,
    }}).subscribe(
      (data:Array<ICompteRenduResponse>)=> { 

      }
    )
  }
  get DateVisite() {
    return this.credentials.get('Datevisite');
  }
  get DateCR() {
    return this.credentials.get('DateCR');
  } 
  get Praticien() {
    return this.credentials.get('Praticien');
  }
  get Remplacant() {
    return this.credentials.get('Remplacant');
  }
  get ImpacteVisite() {
    return this.credentials.get('ImpacteVisite');
  }
  get CoefConf() {
    return this.credentials.get('CoefConf');
  }
  
  get MED_NOMBRECHANTILLON() {
    return this.credentials.get('MED_NOMBRECHANTILLON');
  }
  
  get MotifVisite() {
    return this.credentials.get('MotifVisite');
  }

  get dateRdv() {
    return this.credentials.get('dateRdv');
  }

  get heureRdv() {
    return this.credentials.get('heureRdv');
  }

  get texte() {
    return this.credentials.get('texte');
  }

}
