import { Request } from "express"
import { Payment } from "paypal-rest-sdk"
import ExecuteRequestJson from "../../interfaces/payment.interface"
import { RequestParamsPay, RequestParamsSuccess } from "../../services/Payment/IPayment"

export const samplePayment = (req: Request<{}, {}, RequestParamsPay, {}>): Payment => {
  return {
    intent: "sale",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: `https://coderscamp-cinema-app.herokuapp.com/api/payment/success?quantity=${req.body.quantity}`,
      cancel_url: "https://google.com/"
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: JSON.stringify(req.body.name),
              sku: "001",
              price: "25.00",
              currency: "PLN",
              quantity: 1
            }
          ]
        },
        amount: {
          currency: "PLN",
          total: `${req.body.quantity * 25.0}`
        },
        description: JSON.stringify(req.body.description)
      }
    ]
  }
}

export const executePayment = (req: Request<{}, {}, {}, RequestParamsSuccess>): ExecuteRequestJson => {
  return {
    payer_id: req.query.PayerID,
    transactions: [
      {
        amount: {
          currency: "PLN",
          total: `${+req.query.quantity * 25.0}`
        }
      }
    ]
  }
}
