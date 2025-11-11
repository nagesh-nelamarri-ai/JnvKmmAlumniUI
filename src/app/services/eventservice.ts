import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EventData } from "../models/eventsdata";
import { AppConfigService } from "./AppConfigService";

@Injectable({ providedIn: 'root' })
export class EventService {
    private readonly apiUrl: string;
    private readonly url: string;
    constructor(private http: HttpClient, private config: AppConfigService) { 
        this.apiUrl = this.config.apiUrl;
        this.url = this.apiUrl + 'api/Events';
    }

    createEvent(eventData: any): Observable<any> {
        const formData = new FormData();

        for (const pair of eventData.entries()) {
            console.log(pair[0] + ':', pair[1]);
        }

        return this.http.post<EventData>(this.url, eventData);
    }

    getAllEvents(): Observable<EventData[]> {
        return this.http.get<EventData[]>(this.url);
    }

    getEventById(id: string): Observable<EventData> {
        return this.http.get<EventData>(`${this.url}/${id}`);
    }

    updateEvent(id: string, eventData: Partial<EventData>): Observable<EventData> {
        return this.http.put<EventData>(`${this.url}/${id}`, eventData);
    }

    deleteEvent(id: string): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}