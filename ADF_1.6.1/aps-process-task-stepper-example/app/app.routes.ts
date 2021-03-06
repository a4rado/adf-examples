/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AuthGuardEcm, AuthGuardBpm } from 'ng2-alfresco-core';

import {
    LoginDemoComponent,
    SettingComponent,
    MyTasksComponent,
    NewRequestComponent
} from './components/index';

export const appRoutes: Routes = [

  {path: 'login', component: LoginDemoComponent},
  {path: 'settings', component: SettingComponent},
  {path: '', component: MyTasksComponent, canActivate: [AuthGuard]},
  {path: 'my-tasks', component: MyTasksComponent, canActivate: [AuthGuard]},
  {path: 'new-request', component: NewRequestComponent, canActivate: [AuthGuard]}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
