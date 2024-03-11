import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InsuranceDetailsService } from 'src/service/insurance-details.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [InsuranceDetailsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
