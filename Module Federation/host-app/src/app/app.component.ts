import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'insurance-shell';
  showLegendFlag: boolean = false;

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
}
