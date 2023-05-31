import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radioButton';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    DataViewModule,
    FormsModule,
    InputTextModule,
  ],
})
export class PostModule {}
