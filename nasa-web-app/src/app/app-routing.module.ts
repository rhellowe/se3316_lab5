import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { NotLoggedPageComponent }   from "./not-logged-page/not-logged-page.component";
import { AuthPageComponent }      from "./auth-page/auth-page.component";
import {ViewCollectionsComponent} from "./view-collections/view-collections.component";
import {MycollectionsComponent} from "./mycollections/mycollections.component";
const routes: Routes = [
 {path: "logged", component: AuthPageComponent},
 {path: "", component: NotLoggedPageComponent},
 {path: "viewCollections", component: ViewCollectionsComponent },
 {path: "myCollections", component: MycollectionsComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
