import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { SignInComponent } from "../auth/sign-in/sign-in.component";
import { SignUpComponent } from "../auth/sign-up/sign-up.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  token = localStorage.getItem("token");

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
  }

  openDialog(type): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: "250px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  goTocontact() {
    this.router.navigate(["contact"]);
  }

  goToprofilesetup() {
    this.router.navigate(["/profilesetup"]);
  }
  goToorders() {
    this.router.navigate(["/orders"]);
  }
  goToNotification() {
    this.router.navigate(["/Notification"]);
  }
  goTopayment() {
    this.router.navigate(["/payment"]);
  }
  goTohomepage() {
    this.router.navigate(["/homepage"]);
  }
}
