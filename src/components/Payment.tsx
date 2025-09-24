import { Smartphone, CreditCard, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Payment = () => {
  return (
    <section id="payment" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Session Payments
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and convenient payment options for your therapy sessions. 
              We accept M-Pesa for easy mobile payments.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* M-Pesa Payment */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary">M-Pesa Payment</h3>
                  <p className="text-muted-foreground">Quick and secure mobile payment</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-green-800 mb-3">M-Pesa Till Number</h4>
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-600">4027780</span>
                </div>
                <p className="text-sm text-green-700 mt-2 text-center">
                  Use this till number to pay for your sessions
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">How to Pay:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Go to M-Pesa menu on your phone</li>
                  <li>Select "Pay Bill"</li>
                  <li>Enter Till Number: <strong>4027780</strong></li>
                  <li>Enter session amount</li>
                  <li>Enter your M-Pesa PIN</li>
                  <li>Send confirmation to us</li>
                </ol>
              </div>
            </div>

            {/* Other Payment Options */}
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary">Other Options</h3>
                  <p className="text-muted-foreground">Alternative payment methods</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Bank Transfer</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Cash Payment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Insurance Claims</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                Contact us to discuss alternative payment arrangements if needed.
              </p>
            </div>
          </div>

          {/* Pricing Information */}
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
              Session Pricing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <h4 className="font-semibold text-primary mb-2">Individual Session</h4>
                <div className="text-2xl font-bold text-foreground mb-2">KES 3,000</div>
                <p className="text-sm text-muted-foreground">60 minutes</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <h4 className="font-semibold text-primary mb-2">Couples Session</h4>
                <div className="text-2xl font-bold text-foreground mb-2">KES 4,500</div>
                <p className="text-sm text-muted-foreground">90 minutes</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <h4 className="font-semibold text-primary mb-2">Group Session</h4>
                <div className="text-2xl font-bold text-foreground mb-2">KES 2,000</div>
                <p className="text-sm text-muted-foreground">90 minutes</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              First consultation is free. Payment is due at the time of service.
            </p>
          </div>

          {/* Security Notice */}
          <div className="flex items-center justify-center space-x-3 mt-8 p-4 bg-primary/5 rounded-lg">
            <Shield className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              All payments are secure and confidential. We never store your payment information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
