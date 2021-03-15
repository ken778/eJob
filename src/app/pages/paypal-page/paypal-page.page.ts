import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-paypal-page',
  templateUrl: './paypal-page.page.html',
  styleUrls: ['./paypal-page.page.scss'],
})
export class PaypalPagePage implements OnInit {

  constructor(private router:Router) { 
    render(
      {
        id:"#myPaypalButtons",
        currency:"ZAR",
        value:"5.00",
        onApprove:(details)=>{
         this.router.navigate(['/success']);
        }
      }
    ) 
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
  }

}
