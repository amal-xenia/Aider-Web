import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions", count: 12 },
    { id: "general", name: "General", count: 4 },
    { id: "account", name: "Account & Billing", count: 3 },
    { id: "technical", name: "Technical Support", count: 3 },
    { id: "product", name: "Product Features", count: 2 },
  ];

  const faqs = [
    {
      id: 1,
      category: "general",
      question: "What is your service and how does it work?",
      answer:
        "Our service provides a comprehensive platform for managing your business needs. We offer intuitive tools for task management, team collaboration, and project tracking. Simply sign up, create your workspace, and start adding your team members and projects.",
    },
    {
      id: 2,
      category: "general",
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required. After the trial, you can choose from our flexible pricing plans that best suit your needs.",
    },
    {
      id: 3,
      category: "account",
      question: "How do I cancel my subscription?",
      answer:
        'You can cancel your subscription anytime from your account settings. Go to Billing > Subscription and click "Cancel Subscription". Your access will continue until the end of your current billing period.',
    },
    {
      id: 4,
      category: "account",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners.",
    },
    {
      id: 5,
      category: "technical",
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption for all data transmission and storage. We are GDPR compliant and undergo regular security audits. Your data privacy and security are our top priorities.",
    },
    {
      id: 6,
      category: "technical",
      question: "Which platforms do you support?",
      answer:
        "Our platform is web-based and works on all modern browsers. We also offer native mobile apps for iOS and Android, and desktop apps for Windows and Mac.",
    },
    {
      id: 7,
      category: "product",
      question: "Can I integrate with other tools?",
      answer:
        "Yes! We offer integrations with popular tools like Slack, Google Workspace, Microsoft Teams, Trello, and many more through our API. Check our integrations page for the complete list.",
    },
    {
      id: 8,
      category: "product",
      question: "Do you offer API access?",
      answer:
        "Yes, we provide a comprehensive REST API for developers. You can build custom integrations, automate workflows, and extend our platform functionality. API documentation is available in our developer portal.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent pt-20 pb-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-2xl mb-6">
              <HelpCircle className="text-primary" size={20} />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to know about our platform. Can't find what
              you're looking for? Feel free to contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-2">
            {categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {filteredFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-foreground pr-8">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: openItems[faq.id] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown
                            className="text-muted-foreground"
                            size={20}
                          />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openItems[faq.id] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-muted-foreground border-t border-border pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Search className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground">
                    We couldn't find any questions matching your search. Try
                    different keywords or contact support.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Still have questions */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Please chat with our
                  friendly team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="hover:opacity-100 transition-opacity"
                  >
                    <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                      <Mail className="mr-2" size={18} />
                      Contact Support
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQPage;
