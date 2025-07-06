import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

declare var paypal: any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements AfterViewInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef<HTMLDivElement> = {} as ElementRef;
    paymentMethods = [
    { id: 'credit', name: 'Credit/Debit Card', icon: 'credit_card' },
    { id: 'paypal', name: 'PayPal', icon: 'payments' },
    { id: 'bank', name: 'Bank Transfer', icon: 'account_balance' }
  ];

    // Form models
  selectedPaymentMethod = signal('credit');
  cardNumber = '';
  cardName = '';
  expiryDate = '';
  cvv = '';
  saveCard = false;
  
  // Delivery address
  deliveryAddress = {
    name: 'John Doe',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'United States'
  };

  // Order summary
  orderSummary = {
    items: 3,
    subtotal: 149.97,
    shipping: 0,
    tax: 12.45,
    total: 162.42,
    discount: -10.00
  };

  // UI state
  isProcessing = signal(false);
  showAddCardForm = signal(false);


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

    selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod.set(method);
    if (method === 'credit') {
      this.showAddCardForm.set(true);
    } else {
      this.showAddCardForm.set(false);
    }
  }

  submitPayment(): void {
    if (this.selectedPaymentMethod() === 'credit' && !this.validateCard()) {
      return;
    }

    this.isProcessing.set(true);
    
    // Simulate API call
    setTimeout(() => {
      this.isProcessing.set(false);
      // In a real app, you would navigate to order confirmation
      console.log('Payment processed successfully');
    }, 2000);
  }

  validateCard(): boolean {
    // Basic validation - in a real app you'd want more thorough checks
    if (!this.cardNumber || this.cardNumber.length < 16) {
      alert('Please enter a valid card number');
      return false;
    }
    
    if (!this.cardName) {
      alert('Please enter the name on card');
      return false;
    }
    
    if (!this.expiryDate || !this.expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
      alert('Please enter a valid expiry date (MM/YY)');
      return false;
    }
    
    if (!this.cvv || this.cvv.length < 3) {
      alert('Please enter a valid CVV');
      return false;
    }
    
    return true;
  }

  

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\s+/g, '');
    
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    
    // Add space after every 4 digits
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    this.cardNumber = value;
  }

}
