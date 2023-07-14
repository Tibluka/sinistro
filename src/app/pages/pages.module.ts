import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../components/modal/modal.component';
import { DeathPolicyDetailsComponent } from './death-policy-details/death-policy-details.component';



@NgModule({
  declarations: [
    PagesComponent,
    ModalComponent,
    DeathPolicyDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: PagesComponent,
      children: [
        { path: 'opening', loadChildren: () => import('./opening/opening.module').then(m => m.OpeningModule) },
        { path: 'policy-details', loadChildren: () => import('./policy-details/policy-details.module').then(m => m.PolicyDetailsModule) },
        { path: 'death-policy-details', loadChildren: () => import('./death-policy-details/death-policy-details.module').then(m => m.DeathPolicyDetailsModule) },
        { path: 'declaration-heirs', loadChildren: () => import('./declaration-heirs/declaration-heirs.module').then(m => m.DeclarationHeirsModule) },
        { path: 'follow-up', loadChildren: () => import('./follow-up/follow-up.module').then(m => m.FollowUpModule) }
      ]
    }
    ])
  ]
})
export class PagesModule { }
