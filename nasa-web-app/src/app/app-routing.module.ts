import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { NotLoggedPageComponent }   from "./not-logged-page/not-logged-page.component";
import { AuthPageComponent }      from "./auth-page/auth-page.component";
import {ViewCollectionsComponent} from "./view-collections/view-collections.component";
 
const routes: Routes = [
 {path: "logged", component: AuthPageComponent},
 {path: "", component: NotLoggedPageComponent},
 {path: "viewCollections", component: ViewCollectionsComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
