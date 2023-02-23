/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, wire, track } from "lwc";
import getQuoteRecord from '@salesforce/apex/QuoteController.getQuoteRecord';


export default class EditQuote extends LightningElement {
  @api recordId;
  @track quoteData;

  @wire(getQuoteRecord)
  wiredData({ error, data }) {
    if (data) {
      console.log('Data', data);
      this.quoteData.name = data.name;
      this.quoteData.startDate = data.startDate;
      this.quoteData.endDate = data.endDate;      
    } else if (error) {
      console.error('Error:', error);
    }
  }

  handleClick(){
    console.log('Click');
  }

  renderedCallback() {}
}
