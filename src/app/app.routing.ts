import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'tabs', component: TabsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
