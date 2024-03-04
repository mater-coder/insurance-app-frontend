import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { fromEvent } from 'rxjs';
import { IWebWorker } from 'src/model/iweb-worker';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appRoutes: Routes = [];
  title = 'insurance-shell';

  child1Reference: any;
  child2Reference: any;
  textContent = '';
  info: any;
  showLegendFlag: boolean = false;
  changeBannerMessage: boolean = true;
  saveLog: boolean = true;

  ngOnInit(): void {
    fromEvent(window, 'event').subscribe((event: any) => {
      this.showBannerMessage('Request Sent.');
    });
    fromEvent(window, 'customEvent').subscribe((event: any) => {
      this.showBannerMessage('Emi Paid Successfully.');
    });
  }

  showLegends() {
    this.showLegendFlag = !this.showLegendFlag;
  }


  private showBannerMessage(title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: title,
    });
  }

  private storeInsuranceInfo(insuranceInfo: any) {
    const info = {
      name: insuranceInfo.name,
      emiAmount: insuranceInfo.emiValue,
    };
    return info;
  }

  private generateLogData(): any {
    const logInfo: IWebWorker = {
      name: this.info.name,
      emiAmount: this.info.emiAmount,
      date: new Date().toDateString(),
      time: new Date().toLocaleTimeString(),
      status: 'SUCCESS',
    };
    return logInfo;
  }
}
