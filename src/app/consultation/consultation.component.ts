import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from "src/app/services/authentication.service";

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
    private readonly httpClient: HttpClient,
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getCompteRenduList();
  }

  getCompteRenduList() {

    this.httpClient.get(`${environment.apiUrl}/api/Consultation`, {headers:{
      'X-API-KEY': this.authenticationService.token
    }}).subscribe(
      (data:Array<ICompteRenduResponse>)=> {  

        // data.map((v) => {
        //   // console.log(v);
        // })
        this.returnedApiData = data;
        // console.log(data);

      }
    )
  }

  getCompteRenduDetail(element){
   
    let tabToFill = ['nom', 'prenom', 'DateCR', 'Datevisite', 'RemplacantNom', 'RemplacantPrenom', 'Motif','ImpacteVisite', 'CoefConf', 'Texte'];
    let modal = document.getElementById('myModal');
  
      this.returnedApiData.map((val) => {
          if (val['id'] == element){
            tabToFill.forEach(el => {
              if(val[el] != null && document.getElementById(el) != null && val['id'] == element){
                // document.getElementById(el).innerHTML = val[el];
                document.getElementById(el).setAttribute('value', val[el])
              }
            });
          }
        })

      modal.style.display = "block";
  }

  closeMyModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
}
