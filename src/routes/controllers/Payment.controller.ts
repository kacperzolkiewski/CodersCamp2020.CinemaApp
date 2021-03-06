import "dotenv/config"
import { Router, Request, Response } from "express"
import * as paypal from "paypal-rest-sdk"
import { SDKError, Payment, PaymentResponse } from "paypal-rest-sdk"
import Controller from "../../interfaces/Controller.interface"
import ExecuteRequestJson from "../../interfaces/payment.interface"
import { samplePayment, executePayment } from "../../templates/payments/payment.templates"

export type RequestParamsPay = {
  name: string
  quantity: number
  description: string
}

export type RequestParamsSuccess = {
  quantity: number
  PayerID: string
  paymentId: string
  token?: string
}

paypal.configure({
  mode: "sandbox",
  client_id: process.env.CLIENT_ID || "",
  client_secret: process.env.CLIENT_SECRET || ""
})

class PaymentController implements Controller {
  public readonly path: string = "/payment"
  public readonly router: Router = Router()

  constructor() {
    this.initRoutes()
  }

  private initRoutes(): void {
    this.router.post(`${this.path}/pay`, this.createPayment)
    this.router.post(`${this.path}/success`, this.successPayment)
  }

  private createPayment = (req: Request<{}, {}, {}, RequestParamsPay>, res: Response): void => {
    const createPaymentJson: Payment = samplePayment(req)

    paypal.payment.create(createPaymentJson, (error: SDKError, payment: PaymentResponse): void => {
      if (error) {
        res.status(400).send(error)
      } else {
        payment.links?.forEach((link: paypal.Link) => {
          link.rel === "approval_url" && res.status(200).redirect(link.href)
        })
      }
    })
  }

  private successPayment = (req: Request<{}, {}, {}, RequestParamsSuccess>, res: Response): void => {
    const executePayemntJson: ExecuteRequestJson = executePayment(req)

    paypal.payment.execute(req.query.paymentId, executePayemntJson, (error: SDKError, payment: Payment): void => {
      if (error) {
        res.status(400).send(error)
      } else {
        res.status(200).json(payment)
      }
    })
  }
}

export default PaymentController
