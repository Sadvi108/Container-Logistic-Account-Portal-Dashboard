import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { User, Edit, Eye, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { useState } from 'react';

type Member = {
  type: string;
  name: string;
  email: string;
  phone: string;
  branch: string;
  duration: string;
  status: 'Active' | 'Pending';
};

const MemberManagement: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Sample data from screenshots
  const members: Member[] = [
    {
      type: 'ABC Logistics Sdn Bhd',
      name: 'Ali Bin Abu',
      email: 'ali@abc.com',
      phone: '012-3456789',
      branch: 'Port Klang',
      duration: '4 months',
      status: 'Active' as const,
    },
    {
      type: 'Maritime Solutions Ltd',
      name: 'Abdul Rahman',
      email: 'abdul@maritime.com',
      phone: '013-4567890',
      branch: 'Port Klang',
      duration: '23 months',
      status: 'Pending' as const,
    },
    {
      type: 'LLP Logistics Co',
      name: 'Sarah Lim',
      email: 'sarah@llp.com',
      phone: '014-5678901',
      branch: 'Penang',
      duration: '67 months',
      status: 'Active' as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Sub-tabs for Members */}
      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="directory" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50">Member Directory</TabsTrigger>
          <TabsTrigger value="new" className="transition-all duration-200 hover:scale-105 hover:bg-blue-50">New Registration</TabsTrigger>
        </TabsList>

        {/* Directory Tab */}
        <TabsContent value="directory" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Member Directory</h2>
            <div className="flex items-center space-x-2">
              <Input placeholder="Search members..." className="w-64" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Filter applied!')}>
                <Calendar className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{member.type}</TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm">{member.email}</p>
                      <p className="text-sm text-gray-500">{member.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>{member.branch}</TableCell>
                  <TableCell>{member.duration}</TableCell>
                  <TableCell>
                    <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="sm" className="transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => setSelectedMember(member)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-full sm:max-w-md">
                        <SheetHeader>
                          <SheetTitle>Member Details</SheetTitle>
                          <SheetDescription>Detailed information about the selected member.</SheetDescription>
                        </SheetHeader>
                        {selectedMember && (
                          <div className="space-y-4 mt-6">
                            <div className="flex items-center space-x-4">
                              <User className="h-8 w-8 text-blue-600" />
                              <div>
                                <h3 className="text-lg font-semibold">{selectedMember.name}</h3>
                                <p className="text-sm text-gray-500">{selectedMember.type}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">{selectedMember.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">{selectedMember.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">{selectedMember.branch}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">Duration: {selectedMember.duration}</span>
                              </div>
                            </div>
                            <Badge variant={selectedMember.status === 'Active' ? 'default' : 'secondary'}>
                              {selectedMember.status}
                            </Badge>
                          </div>
                        )}
                      </SheetContent>
                    </Sheet>
                    <Button variant="ghost" size="sm" className="transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Editing member!')}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        {/* New Registration Tab */}
        <TabsContent value="new" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>New Member Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Company Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sbn-bhd">Sdn Bhd</SelectItem>
                      <SelectItem value="ltd">Ltd</SelectItem>
                      <SelectItem value="llp">LLP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Member Name</Label>
                  <Input id="name" placeholder="Enter name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter phone" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Select>
                    <SelectTrigger id="branch">
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="port-klang">Port Klang</SelectItem>
                      <SelectItem value="penang">Penang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" placeholder="e.g., 12 months" />
                </div>
              </div>
              <Button className="w-full transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('New member registered!')}>Register New Member</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MemberManagement;
