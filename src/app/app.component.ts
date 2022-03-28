import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Compte rendu', url: '/folder/CompteRendu', icon: 'pencil' },
    { title: 'Consultation', url: '/consultation', icon: 'eye' },
    { title: 'Voir mes rendez-vous', url: '/folder/MesRdv', icon: 'time' },
    { title: 'Gestion des praticiens', url: '/folder/GestionPraticien', icon: 'person-add' },
    { title: 'informations médicaments', url: '/folder/InformationsMedicaments', icon: 'medkit' }
  ];
  // public labels = [];
  constructor(private authService: AuthenticationService, private router: Router) {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
