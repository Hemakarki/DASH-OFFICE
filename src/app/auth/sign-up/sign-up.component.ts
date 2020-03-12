import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SignInComponent } from "../sign-in/sign-in.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["../../header/header.component.scss"]
})
export class SignUpComponent implements OnInit {
  SignUpForm: FormGroup;
  hasFormErrors: boolean = false;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public signInDialogRef: MatDialogRef<SignInComponent>,
    public dialogRef: MatDialogRef<SignUpComponent>
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.SignUpForm = this.fb.group({
      phone: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  /** ACTIONS */
  prepareContactUs() {
    const controls = this.SignUpForm.controls;

    let formData = {};
    formData["phone"] = controls["phone"].value;
    formData["password"] = controls["password"].value;

    return formData;
  }

  get f() {
    return this.SignUpForm.controls;
  }

  onSubmit() {
    this.hasFormErrors = false;
    const controls = this.SignUpForm.controls;
    /** check form */
    if (this.SignUpForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      this.hasFormErrors = true;
      return;
    } else {
      const data = this.prepareContactUs();
      console.log('---in submit', data);
      
      /*** service */
    }
  }

  openDialog(type): void {
    this.signInDialogRef.close(); 
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
