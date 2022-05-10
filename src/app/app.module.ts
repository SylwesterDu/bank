import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { WelcomeScreenContentComponent } from './components/welcome-screen-content/welcome-screen-content.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CurrencyExchangePanelComponent } from './components/currency-exchange-panel/currency-exchange-panel.component';
import { UserProductsPanelComponent } from './components/user-products-panel/user-products-panel.component';
import { HistoryPanelComponent } from './components/history-panel/history-panel.component';
import { ExchangeRateGraphComponent } from './components/exchange-rate-graph/exchange-rate-graph.component';
import { MakeTransferScreenComponent } from './components/make-transfer-screen/make-transfer-screen.component';
import { BalanceScreenComponent } from './components/balance-screen/balance-screen.component';
import { HistoryScreenComponent } from './components/history-screen/history-screen.component';
import { BookScreenComponent } from './components/book-screen/book-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    WelcomeScreenContentComponent,
    LoginButtonComponent,
    LoginPanelComponent,
    HomeScreenComponent,
    CurrencyExchangePanelComponent,
    UserProductsPanelComponent,
    HistoryPanelComponent,
    ExchangeRateGraphComponent,
    MakeTransferScreenComponent,
    BalanceScreenComponent,
    HistoryScreenComponent,
    BookScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
