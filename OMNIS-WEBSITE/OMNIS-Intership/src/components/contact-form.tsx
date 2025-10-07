'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Check if it's using local storage (temporary solution)
        const isLocalStorage = result.message?.includes('Saved locally');
        
        toast({
          title: "Success! 🎉",
          description: "Form submitted successfully! Your message has been received and will be processed soon.",
          variant: "success",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || 'Failed to send message. Please try again.',
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Network Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-omnis-electric-cyan/20 bg-white">
      <CardHeader>
        <CardTitle className="text-omnis-deep-blue">Send us a message</CardTitle>
        <CardDescription className="text-omnis-slate-gray">
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-2 block text-omnis-slate-gray">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="border-omnis-electric-cyan/20 focus:border-omnis-electric-cyan"
                disabled={isSubmitting}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block text-omnis-slate-gray">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="border-omnis-electric-cyan/20 focus:border-omnis-electric-cyan"
                disabled={isSubmitting}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="text-sm font-medium mb-2 block text-omnis-slate-gray">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project inquiry"
              value={formData.subject}
              onChange={handleInputChange}
              className="border-omnis-electric-cyan/20 focus:border-omnis-electric-cyan"
              disabled={isSubmitting}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="text-sm font-medium mb-2 block text-omnis-slate-gray">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="border-omnis-electric-cyan/20 focus:border-omnis-electric-cyan resize-none"
              disabled={isSubmitting}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-omnis-vibrant-orange hover:bg-omnis-vibrant-orange/90 text-white transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}