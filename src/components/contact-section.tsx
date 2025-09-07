"use client"

import type { FC } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, MessageCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

const ContactSection: FC = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsAppNumber = "7021910692";
    const message = `
      *New Contact Form Submission*

      *Name:* ${values.name}
      *Email:* ${values.email}
      *Company:* ${values.company || 'N/A'}
      *Message:* ${values.message}
    `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message Ready!",
      description: "Your message is ready to be sent in WhatsApp.",
    })
    form.reset()
  }

  return (
    <section id="contact" className="main-section section-bg-blue">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-center">Get In Touch</h2>
          <p className="text-center mb-12 text-lg">Have a project in mind or just want to say hi? Drop me a line!</p>
          
          <div className="neo-card bg-card p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold uppercase">Name</FormLabel>
                        <FormControl>
                          <Input className="border-2 border-foreground" {...field} />
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
                        <FormLabel className="font-bold uppercase">Email</FormLabel>
                        <FormControl>
                          <Input className="border-2 border-foreground" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold uppercase">Company (Optional)</FormLabel>
                      <FormControl>
                        <Input className="border-2 border-foreground" {...field} />
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
                      <FormLabel className="font-bold uppercase">Message</FormLabel>
                      <FormControl>
                        <Textarea className="border-2 border-foreground min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="neo-btn bg-primary text-primary-foreground w-full">Send Message</Button>
              </form>
            </Form>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl mb-4">Or reach me here:</h3>
            <div className="flex justify-center items-center gap-8">
              <a href="mailto:fuyachavda01@gmail.com" className="neo-btn bg-secondary text-secondary-foreground"><Mail /> Email</a>
              <a href="https://wa.me/7021910692" target="_blank" rel="noopener noreferrer" className="neo-btn bg-secondary text-secondary-foreground"><MessageCircle /> WhatsApp</a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
