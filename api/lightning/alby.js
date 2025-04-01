
// Alby OAuth2 + Invoice Integration (mock)
const axios = require('axios');

async function createAlbyInvoice(amount, accessToken) {
  return {
    payment_request: "lnbc1albyinvoice",
    checking_id: "alby-check-id"
  };
}

module.exports = { createAlbyInvoice };
