
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileText, Users, Lock, Server, Info } from "lucide-react";

const LegalPage = ({ type }) => {
  const isTerms = type === "terms";
  
  const pageTitle = isTerms ? "Terms of Service" : "Privacy Policy";
  const pageSubtitle = isTerms 
    ? "Please read these terms carefully before using my services." 
    : "Your privacy is important to me. This policy explains how I handle your data.";

  const termsData = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Scope of Services",
      content: "These terms govern your use of freelance software development and consulting services provided by Radhi Katiki. Services may include web development, API development, cloud solutions, and technical consulting as agreed upon in project proposals or statements of work."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client Responsibilities",
      content: "Clients are responsible for providing clear project requirements, timely feedback, necessary access to systems or information, and fulfilling payment obligations as outlined in the agreed-upon terms. Delays caused by the client may impact project timelines."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Confidentiality",
      content: "Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of the project. This includes trade secrets, business plans, and technical data. Non-disclosure agreements (NDAs) can be arranged if required."
    },
    {
      icon: <Info className="h-8 w-8 text-primary" />,
      title: "Intellectual Property",
      content: "Upon full payment, the client will own the intellectual property rights to the final, delivered work product specifically created for the project. Pre-existing tools, libraries, or generic code used remain the property of Radhi Katiki or their respective owners."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Limitation of Liability",
      content: "Services are provided \"as is\". In no event shall Radhi Katiki be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the services provided, including loss of profits or data, even if advised of the possibility of such damages."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of Ontario, Canada. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Ontario."
    }
  ];

  const privacyData = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Information I Collect",
      content: "When you contact me or use my services, I may collect personal information such as your name, email address, phone number, and project details. If you use the contact form, messages are stored in browser localStorage for record-keeping and response purposes."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "How I Use Your Information",
      content: "Your information is used to communicate with you, provide requested services, manage projects, process payments, and improve my offerings. I do not sell or rent your personal information to third parties."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Data Storage & Security",
      content: "Contact form submissions are stored locally in your browser's localStorage. While I strive to protect your information, no method of electronic storage is 100% secure. I take reasonable measures to protect data against unauthorized access or disclosure."
    },
    {
      icon: <Info className="h-8 w-8 text-primary" />,
      title: "Third-Party Services",
      content: "This website may use third-party services (e.g., for analytics or hosting). These services have their own privacy policies, and I encourage you to review them. I am not responsible for the privacy practices of third parties."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Your Rights & Choices",
      content: "You may have rights regarding your personal information, such as access, correction, or deletion, subject to applicable laws. You can clear your browser's localStorage to remove contact form data stored locally."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Policy Updates",
      content: "I may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of my services after such changes constitutes acceptance of the new policy."
    }
  ];

  const contentData = isTerms ? termsData : privacyData;

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="section-padding bg-gradient-to-b from-background to-primary/5 hero-bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="section-title">
            {isTerms ? (
              <>Terms of <span className="gradient-text">Service</span></>
            ) : (
              <>Privacy <span className="gradient-text">Policy</span></>
            )}
          </h1>
          <p className="section-subtitle">{pageSubtitle}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {contentData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col glassmorphism-card rounded-xl card-hover-effect">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4 pt-7 px-7">
                  <div className="p-3 bg-primary/10 rounded-lg">{item.icon}</div>
                  <CardTitle className="text-xl font-semibold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-7 pb-7 flex-grow">
                  <p className="text-sm text-foreground/80 leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
         <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: contentData.length * 0.1 + 0.5, duration: 0.5 }}
          >
            <p className="text-sm text-foreground/60">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
