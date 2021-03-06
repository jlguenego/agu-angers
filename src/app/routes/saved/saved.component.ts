import { Component, OnInit, ElementRef } from '@angular/core';
import { faSmileWink } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  faSmileWink = faSmileWink;

  constructor(private elt: ElementRef) { }

  ngOnInit() {
    this.elt.nativeElement.querySelector('button').focus();
  }

}
