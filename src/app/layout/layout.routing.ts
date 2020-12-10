import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      // { path: "", redirectTo: "/admin", pathMatch: "full" },
      // {
      //   path: "admin",
      //   loadChildren: () =>
      //     import("../admin/admin.module").then((m) => m.AdminModule),
      // },
      // {
      //   path: "seller",
      //   loadChildren: () =>
      //     import("../seller/seller.module").then((m) => m.SellerModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
