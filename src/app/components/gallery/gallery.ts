import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { GoogleDriveService } from '../../services/google-drive-service';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-gallery',
  imports: [
    ButtonModule,
    CardModule,
    DialogModule,
    TooltipModule, CommonModule, FieldsetModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true
})
export class Gallery implements OnInit {


  PHOTOS_FOLDER_ID = 'YOUR_PHOTOS_FOLDER_ID';
  VIDEOS_FOLDER_ID = 'YOUR_VIDEOS_FOLDER_ID';

  sections: any[] = [];
  sections2: any[] = [];
  photos: any[] = [];
  videos: any[] = [];

  activeTab: 'photos' | 'videos' = 'photos';

  constructor(private gdrive: GoogleDriveService) { }

  ngOnInit() {
    // this.loadPhotos();
    // this.loadVideos();

  this.sections = [
  { 
    name: 'Cultural',
    folderId: '1T5ITTT9xsJGe7RIl-qGbVdja-ISAkn8l',
    index: 0,
    data: []
  },
  { 
    name: 'Group Dances',
    folderId: '1nXqbHlQnOelC0OTZmVmh612qiA15lQNk',
    index: 1,
    data: []
  },
  { 
    name: 'Inauguration',
    folderId: '1DMK6s6V19S-iP6qnYNCoK_cGQoTRh05X',
    index: 2,
    data: []
  },
  { 
    name: 'Indoor',
    folderId: '1HLXOH6Pn3ufJlgy8JMJ4ohnKrEtp3bvH',
    index: 3,
    data: []
  },
  { 
    name: 'Jemalaiah',
    folderId: '1hcMQo4RKNRkDX28ons8J7nHgmY0lKAng',
    index: 4,
    data: []
  },
  { 
    name: 'Mahiteja',
    folderId: '10_GkOJMIVrtRpyDCDfE_OMH6mVjZ09hP',
    index: 5,
    data: []
  },
  { 
    name: 'Outdoor Games',
    folderId: '1aseAYboA9H5WwbHTsWAMQFZlxFP-UsJ1',
    index: 6,
    data: []
  },
  { 
    name: 'Registration',
    folderId: '1OuJxvZL5oYs4dMbp9QWo7-WkbRmFVKbL',
    index: 7,
    data: []
  },
  { 
    name: 'Torch Flame',
    folderId: '1kwqM8FxQ7T84mVui00lgeylOOnrO0-A4',
    index: 8,
    data: []
  }
];

this.sections2 = [
  { 
    name: 'association inauguration',
    folderId: '18oBNQu0Bp6_DM_T5oEZVbrFwOv5UOXs0',
    index: 0,
    data: []
  },
  { 
    name: 'stage program',
    folderId: '1jmdlc_zDyDzu8CR3mwZPQ8069mRAITWQ',
    index: 1,
    data: []
  },
  { 
    name: 'zumba',
    folderId: '1r6Ur0bLDFqwxy-JaK1rExEJJpo_RtPHb',
    index: 2,
    data: []
  },

];
 

  }

  loadPhotos(id:string,index:number) {
    // this.PHOTOS_FOLDER_ID = '1T5ITTT9xsJGe7RIl-qGbVdja-ISAkn8l';
    this.PHOTOS_FOLDER_ID = id;
    this.gdrive.getFilesFromFolder(this.PHOTOS_FOLDER_ID).subscribe(res => {
      this.photos = res.files;
      this.sections[index].data = res.files;
    });
  }

  loadPhotos2(id:string,index:number) {
    // this.PHOTOS_FOLDER_ID = '1T5ITTT9xsJGe7RIl-qGbVdja-ISAkn8l';
    this.PHOTOS_FOLDER_ID = id;
    this.gdrive.getFilesFromFolder(this.PHOTOS_FOLDER_ID).subscribe(res => {
      this.photos = res.files;
      this.sections2[index].data = res.files;
    });
  }

  loadVideos() {
    this.gdrive.getFilesFromFolder(this.VIDEOS_FOLDER_ID).subscribe(res => {
      this.videos = res.files;
    });
  }

  getPublicFileUrl(fileId: string) {
    return `https://lh3.googleusercontent.com/d/${fileId}=s400`;
  }

  getDriveViewUrl(fileId: string) {
    return `https://drive.google.com/file/d/${fileId}/view`;
  }

  //  getPublicFileUrl(fileId: string): string {
  //   return `https://drive.google.com/uc?id=${fileId}`;
  // }

  getVideoEmbed(fileId: string): string {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  onSectionClick(section: any){
    console.log('field click',section);
    if(section.data.length > 0)
      return;
    console.log('loading');

    this.loadPhotos(section.folderId,section.index);
  }

   onSectionClick2(section: any){
    console.log('field click',section);
    if(section.data.length > 0)
      return;
    console.log('loading');

    this.loadPhotos2(section.folderId,section.index);
  }

}

