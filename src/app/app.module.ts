import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {AddressString} from './shared/get-address.pipe';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddressString
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule,
    UsersComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
