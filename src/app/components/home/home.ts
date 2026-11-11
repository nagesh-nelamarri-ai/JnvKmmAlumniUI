import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
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
        icon: 'pi pi-users',
        routerLink: ['membership'],
      },
      {
        label: 'Contribute',
        icon: 'pi pi-wallet',
        routerLink: ['contribute']
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-address-book',
        routerLink: ['contactus']
      },
    ]
  }
  
}
