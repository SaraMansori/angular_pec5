import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatCardModule, AppRoutingModule],
  exports: [CardComponent],
})
export class SharedModule {}
