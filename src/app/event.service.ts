import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from 'rxjs/operators';

import {MessageService} from './message.service';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private Url = 'http://localhost:8080/event';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.Url)
      .pipe(tap(_ => this.log('fetched events')),
        catchError(this.handleError<Event[]>('getEvents', []))
      );
  }

  getEvent(id: number): Observable<Event> {
    const url = `${this.Url}/id/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(_ => this.log(`fetched event id=${id}`)),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  createEvent(hero: Event): Observable<any> {
    return this.http.put(this.Url, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`EventService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
