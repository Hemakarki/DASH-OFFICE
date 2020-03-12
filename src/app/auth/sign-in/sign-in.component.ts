import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";
import { VerificationComponent } from "../verification/verification.component";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["../../header/header.component.scss"]
})
export class SignInComponent implements OnInit {
  animal: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public dialogRef: MatDialogRef<SignInComponent>,
    public signUpDialogRef: MatDialogRef<SignUpComponent>,
    public forgotPasswordDialogRef: MatDialogRef<ForgotPasswordComponent>,
    public verificationDialogRef: MatDialogRef<VerificationComponent> // public dialogRef: MatDialogRef<ModalComponent>
  ) {
    dialogRef.disableClose = true;
  }
  openDialog(type): void {
    let component: any;

    switch (type) {
      case "signUp":
        this.dialogRef.close(true);
        this.forgotPasswordDialogRef.close(true);
        this.verificationDialogRef.close(true);
        component = SignUpComponent;
        break;
      case "forgot":
        this.dialogRef.close(true);
        this.signUpDialogRef.close(true);
        this.verificationDialogRef.close(true);
        component = ForgotPasswordComponent;
        break;
      default:
        // code block
        this.signUpDialogRef.close(true);
        this.forgotPasswordDialogRef.close(true);
        this.verificationDialogRef.close(true);
        component = SignInComponent;
    }
    const dialogRef = this.dialog.open(component, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {}
}
