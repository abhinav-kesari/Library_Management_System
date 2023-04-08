import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuybookComponent } from './buybook/buybook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path: '',component: BuybookComponent
  },
  {
    path: 'viewBook',component: ViewbookComponent
  },
  {
    path: 'updatebook/:id',component: UpdateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
