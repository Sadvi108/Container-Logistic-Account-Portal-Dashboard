import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const FeedbackSystem: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic
    console.log('Feedback submitted:', { rating, message });
  };

  // Sample support info
  const supportInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us at +60 3-1234 5678',
      badge: '24/7',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Email: support@clap.com.my',
      badge: 'Response within 24h',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team now',
      badge: 'Online',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Feedback Form */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="rating">Rating</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 cursor-pointer ${rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your experience..."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full md:w-auto transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert('Feedback submitted!')}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Support Information */}
      <Card>
        <CardHeader>
          <CardTitle>Support</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportInfo.map((info, index) => (
              <Card key={index} className="text-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95" onClick={() => alert(`${info.title} selected!`)}>
                <CardHeader>
                  <info.icon className="h-8 w-8 mx-auto text-blue-600" />
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{info.description}</p>
                  <Badge variant="secondary" className="mt-2">{info.badge}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackSystem;
