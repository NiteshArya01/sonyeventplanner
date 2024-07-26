import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { GalleryViewComponent } from '../pages/gallery-view/gallery-view.component';
import { TeamComponent } from '../pages/team/team.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SliderComponent, GalleryViewComponent, TeamComponent, ContactComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
