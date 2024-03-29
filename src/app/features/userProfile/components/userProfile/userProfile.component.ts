import { Component, OnInit, inject } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { userProfileActions } from '../../store/actions';
import { combineLatest, filter, map } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectUserProfileData,
} from '../../store/reducers';
import { selectCurrentUser } from 'src/app/features/auth/store/reducers';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { UserProfileInterface } from '../../types/userProfile.interface';
import { CommonModule } from '@angular/common';
import { FeedComponent } from 'src/app/shared/components/feed/feed.component';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FeedComponent],
})
export class UserProfileComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  slug: string = '';
  isCurrentUserProfile$ = combineLatest({
    currentUser: this.store.pipe(
      select(selectCurrentUser),
      filter(
        (currentUser): currentUser is CurrentUserInterface | null =>
          currentUser !== undefined
      )
    ),
    userProfile: this.store.pipe(
      select(selectUserProfileData),
      filter((userProfile): userProfile is UserProfileInterface =>
        Boolean(userProfile)
      )
    ),
  }).pipe(
    map(({ currentUser, userProfile }) => {
      return currentUser?.username === userProfile.username;
    })
  );

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    userProfile: this.store.select(selectUserProfileData),
    isCurrentUserProfile: this.isCurrentUserProfile$,
  });

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.store.dispatch(userProfileActions.getUserProfile({ slug: this.slug }));
  }

  getApiUrl(): string {
    return this.router.url.includes('favorites')
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }
}
