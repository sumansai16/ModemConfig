import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatExpansionModule, MatToolbarModule, MatDialogModule, MatCardModule, MatIconModule, MatIconRegistry } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  declarations: [],
  providers:[MatIconRegistry]
})
export class MaterialModule { }
