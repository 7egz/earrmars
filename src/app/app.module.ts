import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/signup/signup.component';
import {Routes, RouterModule} from "@angular/router";
import { InviteFriendsComponent } from './home/invite-friends/invite-friends.component';
import { MakeOfferComponent } from './home/make-offer/make-offer.component';
import { FindOfferComponent } from './home/find-offer/find-offer.component';
import { PaymentComponent } from './home/make-offer/payment/payment.component';
import { SelectedOfferComponent } from './home/find-offer/selected-offer/selected-offer.component';
import { BankDataComponent } from './home/find-offer/selected-offer/bank-data/bank-data.component';

const appRoutes :Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'makeoffer', component: MakeOfferComponent},
  {path: 'invite', component: InviteFriendsComponent},
  {path: 'findoffer', component: FindOfferComponent},
  {path: 'makeoffer/payment', component: PaymentComponent},
  {path: 'findoffer/selectedone', component: SelectedOfferComponent},
  {path: 'findoffer/selectedone/bankdetail', component: BankDataComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    InviteFriendsComponent,
    MakeOfferComponent,
    FindOfferComponent,
    PaymentComponent,
    SelectedOfferComponent,
    BankDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
