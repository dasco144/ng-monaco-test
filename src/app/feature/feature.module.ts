import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ng-monaco-editor';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';



@NgModule({
  declarations: [
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    // Doesn't work.  No provider for MonacoEditorConfig!
    // MonacoEditorModule,
    MonacoEditorModule.forRoot({
      baseUrl: 'lib'
    })
  ]
})
export class FeatureModule { }
