import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { EventService } from '../../services/eventservice';
import { AppConfigService } from '../../services/AppConfigService';

@Component({
  selector: 'app-events',
  imports: [CommonModule, ButtonModule, CardModule, ImageModule, DialogModule,
    TooltipModule],
  providers: [DialogService],
  templateUrl: './events.html',
  styleUrl: './events.css',
  standalone: true
})


export class Events implements OnInit {

  ref: DynamicDialogRef<any> | null = null;
  events: EventData[] = [];
  displayImageModal = false;
  googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdNgARXYxDZL9BiiJgXtB1Zs97xokFPqvQSZ76ncMwLo06Wrw/viewform';
  imageUrl = '';// 'assets/gallery/Alumni_Invitation.jpg' // Replace with dynamic source if needed
  private readonly apiUrl: string;

  constructor(public dialogService: DialogService, public eventService: EventService, private config: AppConfigService) {
    this.apiUrl = this.config.apiUrl;
  }


  ngOnInit(): void {
    this.events = [];
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(data => {
      console.log('get all events ', data.length, data);
      if (data) {
        // this.events = data;
        this.events = data.map(e => ({
    ...e,
    eventDateTime: e.eventDateTime ? new Date(e.eventDateTime) : null // convert string → Date
  }));
      }
      console.log('map all events ',  this.events);

    });
  }

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

  showImage(event: EventData) {
    this.imageUrl = this.apiUrl + event.filePath!;
    this.displayImageModal = true;
  }

  hideImage() {
    this.displayImageModal = false;
  }

  openGoogleForm() {
    window.open(this.googleFormUrl, '_blank');
  }

  getFullPath(filePath: string): string {
    return this.apiUrl + filePath;
  }

}
