import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Compte rendu', url: '/folder/inbox', icon: 'mail' },
    { title: 'Consultation', url: '/consultation', icon: 'paper-plane' },
    { title: 'Voir mes rdv', url: '/folder/Favorites', icon: 'heart' },
    { title: 'ajouter des praticiens', url: '/folder/Archived', icon: 'archive' },
    { title: 'information médicament', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = [];
  constructor() {}
}
