import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { User, Menu, CreditCard, UserPlus, FileText, Download, Clock, AlertCircle, CheckCircle, File, BarChart3, Users, FileBarChart, Receipt, RotateCcw, MessageSquare } from 'lucide-react';
import MemberManagement from './MemberManagement';
import ReportsSystem from './ReportsSystem';
import PaymentProcessing from './PaymentProcessing';
import RefundManagement from './RefundManagement';
import FeedbackSystem from './FeedbackSystem';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for Overview
  const metrics = [
    { title: 'Total Payments', value: 'RM 45,800', icon: CreditCard, color: 'text-blue-600' },
    { title: 'Invoices', value: '23', icon: File, color: 'text-green-600' },
    { title: 'Members', value: '156', icon: User, color: 'text-purple-600' },
    { title: 'Refunds', value: '1,248', icon: AlertCircle, color: 'text-red-600' },
  ];

  const recentActivities = [
    { icon: CheckCircle, title: 'Payment via Maybank completed', amount: 'RM 1,500', status: 'success' },
    { icon: FileText, title: 'New invoice generated', amount: 'RM 1,500', status: 'pending' },
    { icon: AlertCircle, title: 'Refund request approved', amount: 'RM 550', status: 'success' },
    { icon: UserPlus, title: 'New member registration', amount: '', status: 'info' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-blue-600">CLAP Dashboard</h1>
            <span className="text-sm text-gray-500">v2.0</span>
          </div>
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="transition-all duration-200 hover:scale-105 active:scale-95">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Quick Actions</SheetTitle>
                  <SheetDescription>Access common features quickly.</SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-2">
                  <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('New Invoice created!')}>
                    <FileText className="mr-2 h-4 w-4" /> New Invoice
                  </Button>
                  <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('New Member added!')}>
                    <UserPlus className="mr-2 h-4 w-4" /> New Member
                  </Button>
                  <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Refund processed!')}>
                    <CreditCard className="mr-2 h-4 w-4" /> Process Refund
                  </Button>
                  <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Report generated!')}>
                    <Download className="mr-2 h-4 w-4" /> Generate Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Member added!')}>
                    <UserPlus className="mr-2 h-4 w-4" /> Add Member
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Quick Actions (Desktop) */}
        <aside className="hidden md:block w-64 bg-white border-r shadow-sm h-[calc(100vh-80px)]">
          <div className="p-4">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('New Invoice created!')}>
                <FileText className="mr-2 h-4 w-4" /> New Invoice
              </Button>
              <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('New Member added!')}>
                <UserPlus className="mr-2 h-4 w-4" /> New Member
              </Button>
              <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Refund processed!')}>
                <CreditCard className="mr-2 h-4 w-4" /> Process Refund
              </Button>
              <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Report generated!')}>
                <Download className="mr-2 h-4 w-4" /> Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Member added!')}>
                <UserPlus className="mr-2 h-4 w-4" /> Add Member
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="members" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Members
              </TabsTrigger>
              <TabsTrigger value="reports" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50 flex items-center gap-2">
                <FileBarChart className="h-4 w-4" />
                Reports
              </TabsTrigger>
              <TabsTrigger value="payments" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50 flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                Payments
              </TabsTrigger>
              <TabsTrigger value="refunds" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50 flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                Refunds
              </TabsTrigger>
              <TabsTrigger value="feedback" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Feedback
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                {metrics.map((metric, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                      <metric.icon className={`h-4 w-4 ${metric.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{metric.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center p-4 border rounded-lg">
                        <activity.icon className={`h-5 w-5 mr-3 ${activity.status === 'success' ? 'text-green-500' : activity.status === 'pending' ? 'text-yellow-500' : activity.status === 'info' ? 'text-blue-500' : 'text-gray-500'}`} />
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          {activity.amount && <p className="text-sm text-gray-500">{activity.amount}</p>}
                        </div>
                        <div className="text-right">
                          <Clock className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Used</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('New Invoice created!')}>
                      <File className="mr-2 h-4 w-4" /> New Invoice
                    </Button>
                    <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Member added!')}>
                      <User className="mr-2 h-4 w-4" /> Add Member
                    </Button>
                    <Button variant="outline" className="w-full justify-start transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Refund processed!')}>
                      <CreditCard className="mr-2 h-4 w-4" /> Process Refund
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Members Tab */}
            <TabsContent value="members" className="mt-6">
              <MemberManagement />
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="mt-6">
              <ReportsSystem />
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments" className="mt-6">
              <PaymentProcessing />
            </TabsContent>

            {/* Refunds Tab */}
            <TabsContent value="refunds" className="mt-6">
              <RefundManagement />
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="mt-6">
              <FeedbackSystem />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
