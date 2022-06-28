import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    ProgressBarComponent,
    HeaderComponent,
    UpdateComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'create',component:CreateComponent},
      {path:'edit/:id',component:EditComponent},
      {path:'index',component:IndexComponent},
      {path:'update',component:UpdateComponent}
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
