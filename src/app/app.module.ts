import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { AnotherChildComponenetComponent } from './another-child-componenet/another-child-componenet.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    AnotherChildComponenetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
