import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/features/auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/features/auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/features/globalFeed/globalFeed.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('src/app/features/yourFeed/yourFeed.routes').then((m) => m.routes),
  },
  {
    path: 'tags/:slug',
    loadChildren: () =>
      import('src/app/features/tagFeed/tagFeed.routes').then((m) => m.routes),
  },
  {
    path: 'articles/new',
    loadChildren: () =>
      import('src/app/features/createArticle/createArticle.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'articles/:slug',
    loadChildren: () =>
      import('src/app/features/article/article.routes').then((m) => m.routes),
  },
  {
    path: 'articles/:slug/edit',
    loadChildren: () =>
      import('src/app/features/editArticle/editArticle.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('src/app/features/settings/settings.routes').then((m) => m.routes),
  },
  {
    path: 'profiles/:slug',
    loadChildren: () =>
      import('src/app/features/userProfile/userProfile.routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'profiles/:slug/favorites',
    loadChildren: () =>
      import('src/app/features/userProfile/userProfile.routes').then(
        (m) => m.routes
      ),
  },
];
