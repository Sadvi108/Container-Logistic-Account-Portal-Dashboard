import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Calendar, CheckCircle, AlertCircle, Banknote } from 'lucide-react';

const RefundManagement: React.FC = () => {
  // Sample refund data from screenshots
  const refunds = [
    { bank: 'Maybank', date: '2024-09-04', amount: 'RM 550.00', status: 'Completed' },
    { bank: 'CIMB', date: '2024-09-10', amount: 'RM 1,000.00', status: 'Completed' },
    { bank: 'Public Bank', date: '2024-09-15', amount: 'RM 750.00', status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      {/* Reload CLA Section */}
      <Card>
        <CardHeader>
          <CardTitle>Reload CLA</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-balance">Current Balance</Label>
            <Input id="current-balance" value="RM 2,500.00" readOnly className="bg-gray-50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reload-amount">Reload Amount</Label>
            <Input id="reload-amount" type="number" placeholder="Enter amount to reload" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reload-method">Payment Method</Label>
            <Select>
              <SelectTrigger id="reload-method">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maybank">Maybank</SelectItem>
                <SelectItem value="cimb">CIMB</SelectItem>
                <SelectItem value="public-bank">Public Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1 transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('RM 500 selected!')}>
              <Banknote className="mr-2 h-4 w-4" />
              RM 500
            </Button>
            <Button variant="outline" className="flex-1 transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('RM 1,000 selected!')}>
              RM 1,000
            </Button>
            <Button variant="outline" className="flex-1 transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('RM 2,000 selected!')}>
              RM 2,000
            </Button>
          </div>
          <Button className="w-full transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('CLA reloaded!')}>
            <CreditCard className="mr-2 h-4 w-4" />
            Reload CLA
          </Button>
        </CardContent>
      </Card>

      {/* Refund CLA Section */}
      <Card>
        <CardHeader>
          <CardTitle>Refund CLA</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bank</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {refunds.map((refund, index) => (
                <TableRow key={index}>
                  <TableCell>{refund.bank}</TableCell>
                  <TableCell>{refund.date}</TableCell>
                  <TableCell className="font-medium">{refund.amount}</TableCell>
                  <TableCell>
                    <Badge variant="default">
                      {refund.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Refund processed!')}>
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RefundManagement;
