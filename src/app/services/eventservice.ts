import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EventData } from "../models/eventsdata";

@Injectable({ providedIn: 'root' })
export class EventService {
    private apiUrl = 'https://localhost:7143/api/Events'; // Replace with your actual API endpoint

    constructor(private http: HttpClient) { }

    createEvent(eventData: any): Observable<any> {
        const formData = new FormData();

        for (const pair of eventData.entries()) {
            console.log(pair[0] + ':', pair[1]);
        }

        // Append all fields to FormData
        // Object.keys(eventData).forEach(key => {
        //     const value = eventData[key];
        //     if (value !== null && value !== undefined) {
        //         if (key === 'file' && value instanceof File) {
        //             formData.append('File', value, value.name);
        //         } else if (key === 'eventdatetime' && value instanceof Date) {
        //             formData.append('EventDateTime', value.toISOString());
        //         } else {
        //             // Capitalize first letter of key for .NET API convention
        //             const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
        //             formData.append(capitalizedKey, String(value));
        //         }
        //     }
        // });

        return this.http.post<EventData>(this.apiUrl, eventData);
    }

    getAllEvents(): Observable<EventData[]> {
        return this.http.get<EventData[]>(this.apiUrl);
    }

    getEventById(id: string): Observable<EventData> {
        return this.http.get<EventData>(`${this.apiUrl}/${id}`);
    }

    updateEvent(id: string, eventData: Partial<EventData>): Observable<EventData> {
        return this.http.put<EventData>(`${this.apiUrl}/${id}`, eventData);
    }

    deleteEvent(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}