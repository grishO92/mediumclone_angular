import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/features/auth/store/reducers';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggler.component.html',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
})
export class FeedTogglerComponent {
  private store = inject(Store);

  @Input() tagName?: string;

  currentUser$ = this.store.select(selectCurrentUser);
}
