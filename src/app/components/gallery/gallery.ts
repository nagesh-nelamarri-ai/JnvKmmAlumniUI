import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-gallery',
  imports: [
    ButtonModule,
    CardModule,
    DialogModule,
    TooltipModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true
})
export class Gallery {

  displayImageModal = false;

  imageUrl = 'assets/gallery/Alumini_Invitation.jpg' // Replace with dynamic source if needed

  showImage() {
    this.displayImageModal = true;
  }

  hideImage() {
    this.displayImageModal = false;
  }

}
