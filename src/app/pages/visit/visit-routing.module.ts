import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VisitPage } from "./visit.page";

const routes: Routes = [
  {
    path: "",
    component: VisitPage,
  },
  {
    path: "result",
    loadChildren: () =>
      import("./result/result.module").then((m) => m.ResultPageModule),
  },
  {
    path: "home/revisit",
    loadChildren: () =>
      import("./revisit/revisit.module").then((m) => m.RevisitPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitPageRoutingModule {}
