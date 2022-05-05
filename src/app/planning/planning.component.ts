import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from "src/app/services/authentication.service";

interface IPlanningResponse {
  id: String,
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
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
})

export class PlanningComponent implements OnInit {
  public displayedData:any[];
  public semaine: Date;
  private dayNumbers = [0,1,2,3,4,5,6];
  private calendarHours = [8,9,10,11,12,13,14,15,16,17,18];
  
  constructor(
    private readonly httpClient: HttpClient,
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    let date = new Date();
    let today = date.getDate();
    let dayOfWeek = date.getDay();
    let newDate = date.setDate(today-(dayOfWeek || 7) +1);
    this.semaine = new Date(newDate);
    this.getRdvList();
  }

  showNextWeek() {
    this.semaine = new Date(this.semaine.setDate(this.semaine.getDate() + 7));
    this.getRdvList();
  }

  reloadCurrentPage(){
    window.location.reload();
 }

  showPreviousWeek() {
    this.semaine = new Date(this.semaine.setDate(this.semaine.getDate() - 7));
    this.getRdvList();
  }

  getRdvList() {
    let endDate = new Date(this.semaine);
    endDate.setDate(this.semaine.getDate() + 6);
    this.httpClient.get(`${environment.apiUrl}/api/VoirRdv`, {headers:{
      'X-API-KEY': this.authenticationService.token
    },
  params: {
    dateDebut: this.semaine.toISOString().slice(0,10),
    dateFin: endDate.toISOString().slice(0,10)
  }}).subscribe(
      (data:Array<IPlanningResponse>)=> {  
        this.displayedData = data;
        // console.log(data);
      }
    )
  }

  CreateWeek(dayIncrement:number){
    let dateValue = new Date(this.semaine)
    let displayDate = new Date(dateValue.setDate(dateValue.getDate() + dayIncrement));
    return displayDate;
  }
  CreateWeekString(dayIncrement:number){
    return this.CreateWeek(dayIncrement).toISOString().slice(0,10);
  }
}
