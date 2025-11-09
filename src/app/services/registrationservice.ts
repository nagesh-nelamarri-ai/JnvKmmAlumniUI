import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Member } from "../models/member";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class RegistraionService {
    private apiUrl = 'https://localhost:7143/'; // Replace with your actual API endpoint

    constructor(private http: HttpClient) { }

    register(payload: any): Observable<Member> {
        console.log('register called', payload);
        let url = this.apiUrl + 'api/Members';
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
            return this.http.post<Member>(url, formData);
        }

        // Otherwise send JSON
        //let http = new HttpHeaders({ 'Content-Type': 'application/json','accept': 'text/plain' });            
        
        return this.http.post<Member>(url, payload as any);
    }

    getAll(): Observable<Member[]> {
        // TODO: Replace with actual API call
        let allmembers = this.http.get<Member[]>(this.apiUrl + 'api/Members');
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