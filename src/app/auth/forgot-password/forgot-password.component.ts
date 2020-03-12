import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { VerificationComponent } from "../verification/verification.component";
import { SignInComponent } from "../sign-in/sign-in.component";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ["../../header/header.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public signInDialogRef: MatDialogRef<SignInComponent>,
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    
    ) {
    dialogRef.disableClose = true;      
     }

  ngOnInit() {
  }
  openDialog(type): void {
    this.signInDialogRef.close();
    const dialogRef = this.dialog.open(VerificationComponent, {
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
