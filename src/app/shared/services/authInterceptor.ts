import { HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { PersistanceService } from './persistence.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const persistanceService = inject(PersistanceService);
  const token = persistanceService.get('accessToken');
  req = req.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });
  return next(req);
};
