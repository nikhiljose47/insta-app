import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

declare var paypal: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgIf],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements AfterViewInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef<HTMLDivElement> = {} as ElementRef;
  
  ngAfterViewInit(): void {
    if (paypal) {
      try {
        paypal.Buttons(this.paypalConfig).render(this.paypalElement.nativeElement)
      } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
      }
    }
  }


  product = {
    price: "0.01",
    description: "test"
  }// this property can be make dynamically from your web api
  payeeEmail: string = "nikhiljose47@gmail.com" //<Merchant Account to credit the charge Amount>
  paidFor: boolean = false; //Payment Successful Message handling

  paypalConfig = {//Configuration for paypal Smart Button
    createOrder: (data: any, actions: any) => {
      return actions.order.create({
        purchase_units: [{
          description: 'Manager To Owner Payment',
          amount: {
            currency_code: 'USD',
            value: 1
          }, payee: {
            email_address: this.payeeEmail // to send amout to corresponding Merchant
          },
          invoice_id: "dsd",
        }]
      });
    },

    onApprove: async (data: any, actions: any) => {
      const order = await actions.order.capture();
      this.paidFor = true;
      console.log(order)
    },

    onError: (err: any) => {
      console.log(err)
    }
  }

}
