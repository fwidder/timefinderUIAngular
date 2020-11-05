import {Component, OnInit} from '@angular/core';
import {Event} from '../event';
import {EventService} from '../event.service';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];
  selectedEvent: Event;

  constructor(private eventService: EventService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }
}
