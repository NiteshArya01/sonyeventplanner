import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import {
  MatDialog,
} from '@angular/material/dialog';

import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';
@Component({
  selector: 'app-gallery-view',
  standalone: true,
  imports: [MatDialogModule, GalleryDialogComponent],
  templateUrl: './gallery-view.component.html',
  styleUrl: './gallery-view.component.scss'
})
export class GalleryViewComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(img: any) {
    this.dialog.open(GalleryDialogComponent, {
      data: {
        image: img
      },
    });
  }
}
