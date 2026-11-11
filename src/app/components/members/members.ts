import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AppConfigService } from '../../services/AppConfigService';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-members',
  imports: [CommonModule, CardModule, ProgressSpinnerModule, AutoCompleteModule, FormsModule, BadgeModule ],
  templateUrl: './members.html',
  styleUrl: './members.css',
  standalone: true
})
export class Members implements OnInit {

  associationMembers: MembersData[] = [];
  alumniMembers: MembersData[] = [];
  registeredMembers: MembersData[] = [];
  allMembers: MembersData[] = [];
  private readonly apiUrl: string;
  isLoading: boolean = false;
  yearList: string[] = [];
  year: string = '';
  filteredYears: string[] = [];

  constructor(private config: AppConfigService) {
    this.apiUrl = this.config.apiUrl;
  }

  ngOnInit(): void {
    this.loadMembersData();
  }

  

  loadMembersData() {
    this.associationMembers = [
      { name: 'Papaiah Varla', designation: 'President', image: 'assets/gallery/Papaiah.jpg', year: '1988', toYear: '1995' }
    ];

  }

}
