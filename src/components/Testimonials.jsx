
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechInnovate",
      image: "sarah",
      content:
        "Working with this developer was a game-changer for our company. The custom CRM system they built has streamlined our operations and increased our team's productivity by 40%. Their Python expertise and attention to detail are exceptional.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, DataMetrics",
      image: "michael",
      content:
        "We hired this consultant to develop a data analytics platform for our startup, and the results exceeded our expectations. They delivered a robust, scalable solution that has become central to our business operations. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager, E-Shop Global",
      image: "emily",
      content:
        "The e-commerce platform developed for our business has transformed how we sell online. The developer's deep understanding of both technical and business aspects resulted in a solution that perfectly fits our needs and has increased our online sales by 75%.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            Don't just take my word for it - here's what my clients have to say about my work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full border-secondary/20 bg-secondary/5 backdrop-blur-sm hover:border-primary/30 card-hover">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/60 mb-4" />
                  <p className="text-foreground/80 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
