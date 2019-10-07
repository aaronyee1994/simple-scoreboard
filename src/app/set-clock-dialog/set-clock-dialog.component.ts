import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-set-clock-dialog',
  templateUrl: './set-clock-dialog.component.html',
  styleUrls: ['./set-clock-dialog.component.css']
})
export class SetClockDialogComponent implements OnInit {

  public timeForm:any;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SetClockDialogComponent>,
    )  { }

  ngOnInit() {
    this.timeForm = this.formBuilder.group({
      minutes: ['', Validators.min(0)],
      seconds: ['', [Validators.min(0), Validators.max(59)]],
    });
  }

  public onSubmit() {
    this.dialogRef.close(this.timeForm.value);
  }

}
