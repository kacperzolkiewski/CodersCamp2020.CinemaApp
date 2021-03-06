export const mockMatchResponse = {
  payer_id: "EPSETXNXPKL6C",
  transactions: [
    {
      amount: {
        currency: "PLN",
        total: "25.0"
      }
    }
  ]
}

export const mockHigherTotal = {
  payer_id: "9P857MTZQ0XMX",
  transactions: [
    {
      amount: {
        currency: "PLN",
        total: "50.0"
      }
    }
  ]
}

export const mockUnsuccessfulTotal = {
  payer_id: "5ED0L94IQVTEA",
  transactions: [
    {
      amount: {
        currency: "PLN",
        total: "10000.0"
      }
    }
  ]
}

export const mockSamplePayment = {
  intent: "sale",
  payer: {
    payment_method: "paypal"
  },
  redirect_urls: {
    return_url: "http://localhost:3000/success?quantity=2",
    cancel_url: "http://localhost:3000/cancel"
  },
  transactions: [
    {
      item_list: {
        items: [
          {
            name: "The Shawshank Redemption",
            sku: "001",
            price: "50.0",
            currency: "PLN",
            quantity: 2
          }
        ]
      },
      amount: {
        currency: "PLN",
        total: "25.0"
      },
      description: "Film ticket for 'The Shawshank Redemption'."
    }
  ]
}
