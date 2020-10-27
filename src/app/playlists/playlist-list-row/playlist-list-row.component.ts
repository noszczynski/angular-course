import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-playlist-list-row',
  template: `
    <div class="list__row">
      <span> {{ index + 1 }}. </span>
      <span class="list__item font-weight-bold" [ngStyle]="{color: playlist.color}">
      <button class="list__item__button" (click)="handleSetEditedPlaylist(playlist.id)">
        {{ playlist.name }}
      </button>
    </span>
      <span class="list__item"> {{ playlist.tracks }} </span>
      <span class="list__item">
      <span [ngClass]="{'list__item__favourite': playlist.favourite}">
        <input
          type="checkbox"
          class="form-check-input position-static m-0 p-0"
          id="favourite"
          [(ngModel)]="playlist.favourite"
        />
        <label for="favourite" class="d-none form-check-label"></label>
      </span>
    </span>
    </div>
  `,
  styles: [
    `
      .list__row {
        display: grid;
        grid-template-columns: 2rem minmax(200px, 1fr) 4rem 5rem;
        align-items: center;
        width: 100%;
      }

      .list__item {
        padding: 0.5rem;
      }

      .list__item__favourite {

      }

      .list__item__button {
         border: none;
         background-color: transparent;
         font-size: 1rem;
         padding: 0;
         margin: 0;
         font-weight: bold;
         color: inherit;
         cursor: pointer;
         transition: opacity .2s ease-in-out;
      }

      .list__item__button:hover {
        opacity: 0.65;
      }
    `
  ]
})

export class PlaylistListRowComponent implements OnInit {

  @Input() index: number;
  @Input() playlist: any;
  @Output() setEditedPlaylist: EventEmitter<any> = new EventEmitter();

  handleSetEditedPlaylist = (id: number) => this.setEditedPlaylist.emit(id);

  constructor() { }

  ngOnInit(): void {
  }

}
