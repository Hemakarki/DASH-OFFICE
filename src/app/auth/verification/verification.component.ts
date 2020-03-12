import { Component, OnInit } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ["../../header/header.component.scss"]
})
export class VerificationComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public forgotPasswordDialogRef: MatDialogRef<ForgotPasswordComponent>,
    public dialogRef: MatDialogRef<VerificationComponent>,

  ) {
    dialogRef.disableClose = true;
   }

  ngOnInit() {
  }

  openDialog(type): void {
    this.forgotPasswordDialogRef.close();
    const dialogRef = this.dialog.open(SignInComponent, {
      width: "250px",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  closeModal(){
    this.dialogRef.close();
  }
}
