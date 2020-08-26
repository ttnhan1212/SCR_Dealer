import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { ToastService } from "../../../services/toast.service";
import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.page.html",
  styleUrls: ["./setting.page.scss"],
})
export class SettingPage implements OnInit {
  panelOpenState = false;

  id: string;
  constructor(
    private toast: ToastService,
    private router: Router,
    private afAuth: AngularFireAuth,
    public loadingController: LoadingController,
    translate: TranslateService
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.id = user.uid;
      }
    });

    translate.addLangs(["en", "kr"]);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("kr");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use("kr");
  }

  ngOnInit() {}

  async logOut() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      showBackdrop: true,
    });
    try {
      await loading.present();
      await this.afAuth.signOut();
      this.router.navigate(["login"]);
      await loading.dismiss();
    } catch (error) {
      this.toast.showToast(error.message);
      await loading.dismiss();
    }
  }
}
