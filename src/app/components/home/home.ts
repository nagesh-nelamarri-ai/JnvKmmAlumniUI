import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { Registraion } from '../registraion/registraion';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-home',
  imports: [MenubarModule, ButtonModule, RouterOutlet, ImageModule, DialogModule],
  providers: [DialogService],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home implements OnInit {
  items: MenuItem[] | undefined;
  ref: DynamicDialogRef<any> | null = null;

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['homecontent']
      },
      {
        label: 'Members',
        icon: 'pi pi-user',
        routerLink: ['members']
      },
      {
        label: 'Events',
        icon: 'pi pi-calendar',
        routerLink: ['events'],
      },
      {
        label: 'Gallery',
        icon: 'pi pi-image',
        routerLink: ['gallery']
      },
      {
        label: 'MemberShip',
        icon: 'pi pi-calendar',
        routerLink: ['membership'],
      },
      {
        label: 'Contribute',
        icon: 'pi pi-image',
        routerLink: ['contribute']
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-address-book',
        routerLink: ['contactus']
      },
    ]
  }
  OpenRegisterForm() {
    this.ref = this.dialogService.open(Registraion, {
      header: 'Registration',
      width: '40%',
      baseZIndex: 10000,
      modal: true,
      closable: true,
      // blockScroll: true,
      dismissableMask: true,
      style: { 'width': '90vw', 'max-width': '500px' },
      contentStyle: { 'max-height': '85vh', 'overflow': 'auto' },
      breakpoints: { '768px': '100vw', '425px': '100vw' }
    });
  }
  
}
