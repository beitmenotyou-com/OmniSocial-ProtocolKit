
// LNbits invoice generator (mock)
const axios = require('axios');

async function createInvoice(amount, memo) {
  return {
    payment_request: 'lnbc1mockinvoice',
    checking_id: 'mock-check-id'
  };
}

module.exports = { createInvoice };
