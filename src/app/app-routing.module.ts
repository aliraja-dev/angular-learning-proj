import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: "", redirectTo: "/page1", pathMatch:"full"
  },
{
  path:"page1", loadChildren :()=> import("./page-one/page-one.module").then(m=>m.PageOneModule)
},
{
  path:"page2", loadChildren :()=> import("./page-two/page-two.module").then(m=>m.PageTwoModule)
},
{
  path:"page3", loadChildren :()=> import("./page-three/page-three.module").then(m=>m.PageThreeModule)
},
{
  path:"page4", loadChildren :()=> import("./page-four/page-four.module").then(m=>m.PageFourModule)
},
{
  path:"page5", loadChildren :()=> import("./page-five/page-five.module").then(m=>m.PageFiveModule)
},
{
  path:"page6", loadChildren :()=> import("./page-six/page-six.module").then(m=>m.PageSixModule)
},
]

@NgModule({
imports:[
  RouterModule.forRoot(routes)
],
exports:[RouterModule]
})

export class AppRoutingModule {

}
