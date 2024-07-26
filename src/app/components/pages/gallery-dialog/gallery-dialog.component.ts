import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';


// export interface DialogData {
//   image: any;
// }
@Component({
  selector: 'app-gallery-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './gallery-dialog.component.html',
  styleUrl: './gallery-dialog.component.scss'
})
export class GalleryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
