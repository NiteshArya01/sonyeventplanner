import { Component } from '@angular/core';
import { GalleryViewComponent } from "../pages/gallery-view/gallery-view.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryViewComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
