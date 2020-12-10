import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      // { path: "", redirectTo: "/store", pathMatch: "full" },
      {
        path: "store",
        loadChildren: () =>
          import("../store/store.module").then((m) => m.StoreModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
