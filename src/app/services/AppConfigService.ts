import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(data => {
        this.config = data;
      });
  }

//   get apiUrl(): string {
//     return this.config?.apiUrl;
//   }
  get apiUrl(): string {
    return (window as any).__appConfig?.apiUrl;
  }
}
