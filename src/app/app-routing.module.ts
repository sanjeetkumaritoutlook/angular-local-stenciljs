import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WrapperEditorComponent } from './wrapper-editor/wrapper-editor.component';
import { FluidParentComponent } from './fluid-parent/fluid-parent.component';
import { LibraryComponentsComponent } from './library-components/library-components.component';
import { TestPagesComponent } from './test-pages/test-pages.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: TestPagesComponent }, // Default route
  { path: 'text-editor', component: WrapperEditorComponent },
  { path: 'fluid-form', component: FluidParentComponent,canActivate: [AuthGuard] },
  { path: 'library-components', component: LibraryComponentsComponent },
  { path: 'fluid-card', component: TestPagesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback route
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
