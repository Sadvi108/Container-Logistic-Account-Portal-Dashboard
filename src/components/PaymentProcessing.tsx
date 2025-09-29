import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Banknote, Receipt, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const PaymentProcessing: React.FC = () => {
  // Sample pending invoices
  const pendingInvoices = [
    {
      id: 'INV-001',
      date: '2024-01-15',
      amount: 'RM 2,500',
      member: 'ABC Logistics Sdn Bhd',
      status: 'Pending' as const,
    },
    {
      id: 'INV-002',
      date: '2024-01-16',
      amount: 'RM 1,800',
      member: 'Maritime Solutions Ltd',
      status: 'Overdue' as const,
    },
    {
      id: 'INV-003',
      date: '2024-01-17',
      amount: 'RM 3,200',
      member: 'LLP Logistics Co',
      status: 'Pending' as const,
    },
  ];

  // Sample cart summary
  const cartSummary = {
    subtotal: 'RM 7,500',
    tax: 'RM 750',
    total: 'RM 8,250',
  };

  return (
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="payment-method">Select Payment Method</Label>
              <Select>
                <SelectTrigger id="payment-method">
                  <SelectValue placeholder="Choose method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-card">
                    <CreditCard className="mr-2 h-4 w-4 inline" />
                    Credit Card
                  </SelectItem>
                  <SelectItem value="bank-transfer">
                    <Banknote className="mr-2 h-4 w-4 inline" />
                    Bank Transfer
                  </SelectItem>
                  <SelectItem value="cheque">
                    <Receipt className="mr-2 h-4 w-4 inline" />
                    Cheque
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Cardholder Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
          </div>
          <Button className="w-full md:w-auto transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Payment processed!')}>
            <CreditCard className="mr-2 h-4 w-4" />
            Process Payment
          </Button>
        </CardContent>
      </Card>

      {/* Pending Invoices Table */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingInvoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell>{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell className="font-medium">{invoice.amount}</TableCell>
                  <TableCell>{invoice.member}</TableCell>
                  <TableCell>
                    <Badge variant={invoice.status === 'Pending' ? 'secondary' : 'destructive'}>
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button variant="ghost" size="sm" className="transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Invoice approved!')}>
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Invoice reminded!')}>
                      <Clock className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Cart Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Cart Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{cartSummary.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (6%)</span>
            <span>{cartSummary.tax}</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold">
            <span>Total</span>
            <span>{cartSummary.total}</span>
          </div>
          <Button className="w-full mt-4 transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Payment confirmed!')}>
            <Receipt className="mr-2 h-4 w-4" />
            Confirm Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentProcessing;
