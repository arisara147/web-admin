import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'patient', loadChildren: './patient/patient.module#PatientPageModule' },
  { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorPageModule' },
  { path: 'nurse', loadChildren: './nurse/nurse.module#NursePageModule' },
  { path: 'add-user', loadChildren: './add-user/add-user.module#AddUserPageModule' },
  { path: 'doctor-detail', loadChildren: './doctor-detail/doctor-detail.module#DoctorDetailPageModule' },
  { path: 'patient-detail', loadChildren: './patient-detail/patient-detail.module#PatientDetailPageModule' },
  { path: 'nurse-detail', loadChildren: './nurse-detail/nurse-detail.module#NurseDetailPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'admin-detail', loadChildren: './admin-detail/admin-detail.module#AdminDetailPageModule' },
  { path: 'add-news', loadChildren: './add-news/add-news.module#AddNewsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
