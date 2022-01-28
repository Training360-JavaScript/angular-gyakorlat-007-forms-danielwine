import { ActivatedRoute } from '@angular/router';
import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  event: Event = new Event();

  constructor(private eventService: EventService, private ar: ActivatedRoute) {}

  onUpdate(form: NgForm) {
    console.log(form.value);
    this.eventService.update(form.value)
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params) =>
      this.eventService
        .get(params['id'])
        .subscribe((event) => (this.event = event))
    );
  }
}
