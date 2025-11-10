import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Member } from "../models/member";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { AppConfigService } from "./AppConfigService";

@Injectable({ providedIn: 'root' })
export class RegistraionService {
    // private apiUrl = 'https://localhost:7143/'; // Replace with your actual API endpoint
    private readonly apiUrl: string;
    private readonly url: string;
    constructor(private http: HttpClient, private config: AppConfigService) { 
        this.apiUrl = this.config.apiUrl;
        this.url = this.apiUrl + 'api/Members';
    }

    register(payload: any): Observable<Member> {
        console.log('register called', payload);
        // If payload contains a File (profilePhoto), send as FormData
        const useFormData = payload && (payload as any).profilePhoto instanceof File;

        if (useFormData) {
            const formData = new FormData();
            for (const key of Object.keys(payload as any)) {
                const value = (payload as any)[key];
                if (value === null || value === undefined) continue;
                if (value instanceof File) {
                    formData.append(key, value, value.name);
                } else {
                    formData.append(key, String(value));
                }
            }

            // console.log('registration form data',formData);
            //  for (const pair of formData.entries()) {
            //     console.log(pair[0] + ':', pair[1]);
            // }
            // Post FormData to API
            return this.http.post<Member>(this.url, formData);
        }

        // Otherwise send JSON
        //let http = new HttpHeaders({ 'Content-Type': 'application/json','accept': 'text/plain' });            
        
        return this.http.post<Member>(this.url, payload as any);
    }

    getAll(): Observable<Member[]> {
        // TODO: Replace with actual API call
        let allmembers = this.http.get<Member[]>(this.url);
        return allmembers;
    }

    getMemberById(id: string): Observable<Member | undefined> {
        // TODO: Replace with actual API call
        return of(undefined);
    }

    updateMember(id: string, updates: Member): Observable<Member> {
        // TODO: Replace with actual API call
        return of({} as Member);
    }
}