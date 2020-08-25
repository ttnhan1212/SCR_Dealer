import { AuthService } from "./../../../services/auth.service";
import { ToastService } from "../../../services/toast.service";
import { LoadingController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    public afAuth: AngularFireAuth,
    public loadingController: LoadingController,
    private toast: ToastService,
    private authService: AuthService,
    translate: TranslateService
  ) {
    translate.addLangs(["en", "kr"]);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("kr");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use("kr");
  }

  ngOnInit() {}

  async login() {
    const { email, password } = this;
    const loading = await this.loadingController.create({
      message: "Please wait...",
      showBackdrop: true,
    });
    try {
      await loading.present();
      await this.authService.login(email, password);
      await loading.dismiss();
    } catch (error) {
      this.toast.showToast(error.message);
      await loading.dismiss();
    }
  }
}
