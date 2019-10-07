import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MinuteSecondsPipe } from './minute-seconds.pipe';
import { SetClockDialogComponent } from './set-clock-dialog/set-clock-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MinuteSecondsPipe,
    SetClockDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SetClockDialogComponent]
})
export class AppModule { }
