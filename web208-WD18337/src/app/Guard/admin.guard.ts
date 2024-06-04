import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const userservice = inject(UserService);
  if (userservice.CheckUserValid()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
