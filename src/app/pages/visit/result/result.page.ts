import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-result",
  templateUrl: "./result.page.html",
  styleUrls: ["./result.page.scss"],
})
export class ResultPage implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute, translate: TranslateService) {
    this.id = this.route.snapshot.paramMap.get("id"); //get id parameter

    translate.addLangs(["en", "kr"]);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("kr");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use("kr");
  }

  ngOnInit() {}
}
