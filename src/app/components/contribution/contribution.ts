import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contribution',
  imports: [CardModule, ButtonModule,PanelModule,ToastModule,ImageModule],
  templateUrl: './contribution.html',
  styleUrl: './contribution.css',
  standalone: true,
  providers: [MessageService]
})
export class Contribution {
  qrCodeUrl = 'assets/gallery/QR-Code.jpg'; // Replace with your QR image path
  accountDetails = {
     name: "Navodayan's The Alumni Association of JNV Khammam",
    accountNumber: '44130515561',
    ifsc: 'SBIN0020496',
    bank: 'State Bank of India, Gruhakalpa Branch, Hyderabad'
  };

  upiId = 'jnvkhammam@upi';

  constructor(private messageService: MessageService) {}

  async copyUpiId() {
    try {
      await navigator.clipboard.writeText(this.upiId);
      this.messageService.add({
        severity: 'success',
        summary: 'Copied!',
        detail: 'UPI ID copied to clipboard',
        life: 2000
      });
    } catch (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Failed',
        detail: 'Unable to copy UPI ID',
        life: 2000
      });
    }
  }

}
