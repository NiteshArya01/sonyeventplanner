import { Component } from '@angular/core';
import { ServicesComponent } from "../services/services.component";
import { FooterComponent } from "../footer/footer.component";
import { TeamComponent } from "../pages/team/team.component";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ServicesComponent, FooterComponent, TeamComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
