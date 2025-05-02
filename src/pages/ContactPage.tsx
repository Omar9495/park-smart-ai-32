
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the form schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Contact form submitted:", values);
      toast.success("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ipark-gold to-ipark-maroon">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help you.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="space-y-8">
                <Card className="border-ipark-gold/20 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Phone className="mr-2 text-ipark-gold" />
                      Call Us
                    </h3>
                    <p className="text-gray-600">
                      Our customer support team is available to assist you from Monday to Friday, 9am to 5pm.
                    </p>
                    <p className="mt-2 font-medium">(555) 123-4567</p>
                  </CardContent>
                </Card>

                <Card className="border-ipark-gold/20 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Mail className="mr-2 text-ipark-gold" />
                      Email Us
                    </h3>
                    <p className="text-gray-600">
                      Send us an email and we'll get back to you within 24 hours.
                    </p>
                    <p className="mt-2 font-medium">support@ipark.com</p>
                  </CardContent>
                </Card>

                <Card className="border-ipark-gold/20 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <MapPin className="mr-2 text-ipark-gold" />
                      Visit Us
                    </h3>
                    <p className="text-gray-600">
                      Our main office is located at:
                    </p>
                    <p className="mt-2 font-medium">
                      123 Parking Avenue<br />
                      Suite 456<br />
                      San Francisco, CA 94103
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="border-ipark-gold/20 shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your inquiry..." 
                                className="min-h-[150px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-ipark-gold hover:bg-ipark-maroon text-ipark-navy hover:text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
