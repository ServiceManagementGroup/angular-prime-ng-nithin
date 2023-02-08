import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from './services/http.module';
import { environment } from 'src/environments/environment';
import { AppConstants } from './models/app-constans';
import { SideBarModule } from './pages/shared/side-bar/side-bar.module';
import { LoadingInterceptor } from './services/loading-interceptor';
import { LoadingService } from './services/loading';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SideBarModule,
    ProgressBarModule,
    HttpModule.forRoot({ environment })
  ],
  providers: [AppConstants, { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
