import { Routes } from '@angular/router';

import {SearchComponent} from "./search/search.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent }
];

