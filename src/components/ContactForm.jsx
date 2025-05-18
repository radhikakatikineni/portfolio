
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "All fields are required, please fill information in above form.",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            subject: formData.subject, 
            message: formData.message 
          }
        ]);

      if (error) throw error;
      
      toast({
        variant: "default",
        title: "Message Sent!",
        description: "Your message is sent, Radhi will reach you shortly. Thank you, Have good rest of your day!",
        className: "bg-green-500 text-white",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Supabase submission error:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.5, ease: "easeOut" },
    }),
  };


  return (
    <motion.div 
      className="p-8 md:p-10 rounded-xl glassmorphism-card shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div custom={0} variants={inputFieldVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
          <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-1.5">Full Name <span className="text-red-500">*</span></label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="e.g., Jane Doe"
            value={formData.name}
            onChange={handleChange}
            className={`contact-input ${errors.name ? "border-red-500 ring-red-500" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </motion.div>

        <motion.div custom={1} variants={inputFieldVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
          <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-1.5">Email Address <span className="text-red-500">*</span></label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`contact-input ${errors.email ? "border-red-500 ring-red-500" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </motion.div>

        <motion.div custom={2} variants={inputFieldVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground/90 mb-1.5">Subject <span className="text-red-500">*</span></label>
          <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Regarding your services..."
            value={formData.subject}
            onChange={handleChange}
            className={`contact-input ${errors.subject ? "border-red-500 ring-red-500" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
        </motion.div>

        <motion.div custom={3} variants={inputFieldVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
          <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-1.5">Message <span className="text-red-500">*</span></label>
          <Textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            className={`contact-input ${errors.message ? "border-red-500 ring-red-500" : ""}`}
            aria-required="true"
            aria-invalid={!!errors.message}
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </motion.div>

        <motion.div custom={4} variants={inputFieldVariants} initial="hidden" whileInView="visible" viewport={{once: true}}>
          <Button 
            type="submit" 
            className="w-full gradient-bg text-primary-foreground font-semibold text-lg py-6 rounded-lg shadow-lg hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden shine-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Send className="mr-2 h-5 w-5" />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
