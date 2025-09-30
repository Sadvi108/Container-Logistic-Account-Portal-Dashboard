import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Banknote, Receipt, CheckCircle, Clock, AlertCircle, Wallet } from 'lucide-react';

const PaymentProcessing: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

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
          <div className="space-y-2">
            <Label htmlFor="payment-method">Select Payment Method</Label>
            <Select value={selectedMethod} onValueChange={setSelectedMethod}>
              <SelectTrigger id="payment-method">
                <SelectValue placeholder="Choose method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="banking">
                  <Banknote className="mr-2 h-4 w-4 inline" />
                  Banking
                </SelectItem>
                <SelectItem value="fpx">
                  <CreditCard className="mr-2 h-4 w-4 inline" />
                  FPX
                </SelectItem>
                <SelectItem value="wallet">
                  <Wallet className="mr-2 h-4 w-4 inline" />
                  Wallet
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {selectedMethod === 'banking' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bank">Select Bank</Label>
                <Select>
                  <SelectTrigger id="bank">
                    <SelectValue placeholder="Choose bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maybank">Maybank</SelectItem>
                    <SelectItem value="cimb">CIMB</SelectItem>
                    <SelectItem value="public">Public Bank</SelectItem>
                    <SelectItem value="rhb">RHB Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="account">Account Number</Label>
                <Input id="account" placeholder="1234567890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-name">Account Name</Label>
                <Input id="account-name" placeholder="John Doe" />
              </div>
            </div>
          )}
          {selectedMethod === 'fpx' && (
            <div className="space-y-2">
              <Label htmlFor="fpx-bank">Select FPX Bank</Label>
              <Select>
                <SelectTrigger id="fpx-bank">
                  <SelectValue placeholder="Choose FPX bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maybank">Maybank</SelectItem>
                  <SelectItem value="cimb">CIMB</SelectItem>
                  <SelectItem value="public">Public Bank</SelectItem>
                  <SelectItem value="rhb">RHB Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {selectedMethod === 'wallet' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wallet-type">Select Wallet</Label>
                <Select>
                  <SelectTrigger id="wallet-type">
                    <SelectValue placeholder="Choose wallet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="touchngo">Touch 'n Go</SelectItem>
                    <SelectItem value="boost">Boost</SelectItem>
                    <SelectItem value="grabpay">GrabPay</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="0123456789" />
              </div>
            </div>
          )}
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
