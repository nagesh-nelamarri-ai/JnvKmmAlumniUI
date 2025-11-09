import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Eventscard } from '../eventscard/eventscard';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EventData } from '../../models/eventsdata';
import { ImageModule } from 'primeng/image';
import { TooltipModule } from 'primeng/tooltip';
import { subtitle } from '@primeuix/themes/aura/card';

@Component({
  selector: 'app-events',
  imports: [CommonModule, ButtonModule, CardModule, ImageModule,DialogModule,
    TooltipModule],
  providers: [DialogService],
  templateUrl: './events.html',
  styleUrl: './events.css',
  standalone: true
})


export class Events {

  ref: DynamicDialogRef<any> | null = null;
  events: EventData[] = [];
  displayImageModal = false;
  googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdNgARXYxDZL9BiiJgXtB1Zs97xokFPqvQSZ76ncMwLo06Wrw/viewform';

  imageUrl = 'assets/gallery/Alumini_Invitation.jpg' // Replace with dynamic source if needed

  constructor(public dialogService: DialogService) { }

  events1 = [
    {
      title: 'JNV Alumni Meet 2025',
      description: `14th Batch organizing the event. Join us for a two-day alumni celebration filled with memories, networking,
      and fun at the beautiful Palair campus. Reconnect with your batchmates,
      relive unforgettable moments, and celebrate the JNV spirit together!`,
      filePath: 'assets/gallery/Alumini_Invitation.jpg',
      location: 'Palair',
      eventdatetime: 'Dec 6, 2025 - Dec 7, 2025'
    },
     {
      title: 'JNV Alumni Sports',
      description: `14th Batch organizing the event. Join us for a two-day alumni celebration filled with memories, networking,
      and fun at the beautiful Palair campus. Reconnect with your batchmates,
      relive unforgettable moments, and celebrate the JNV spirit together!`,
      filePath: 'assets/gallery/Alumini_Invitation.jpg',
      location: 'Palair',
      eventdatetime: 'Dec 6, 2025'
    },
  ]

  addEventCard() {
    this.ref = this.dialogService.open(Eventscard, {
      header: 'Add Event',
      width: '35%',
      baseZIndex: 10000,
      modal: true,
      closable: true,
      draggable: false,
      resizable: false
    });
  }

  showImage() {
    this.displayImageModal = true;
  }

  hideImage() {
    this.displayImageModal = false;
  }

   openGoogleForm() {
    window.open(this.googleFormUrl, '_blank');
  }

}
