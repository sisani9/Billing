import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
interface InvoiceItem {
  hsCode: string;
  particulars: string;
  unitQty: number;
  rate: number;
  amount: number;
  p: string;
}

interface Invoice {
  companyName: string;
  companyAddress: string;
  vatNumber: string;
  date: string;
  invoiceNumber: string;
  customerName: string;
  customerAddress: string;
  customerVatNumber: string;
  paymentMode: string;
  items: InvoiceItem[];
  total: number;
  discount: number;
  taxableAmount: number;
  vat: number;
  grandTotal: number;
  customerSignature: string;
}

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
  invoice: Invoice = {
    companyName: '',
    companyAddress: '',
    vatNumber: '',
    date: '',
    invoiceNumber: '',
    customerName: '',
    customerAddress: '',
    customerVatNumber: '',
    paymentMode: 'Cash',
    items: [{ hsCode: '', particulars: '', unitQty: 0, rate: 0, amount: 0, p: '' }],
    total: 0,
    discount: 0,
    taxableAmount: 0,
    vat: 0,
    grandTotal: 0,
    customerSignature: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted', this.invoice);
  }
}