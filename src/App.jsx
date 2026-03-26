import React, { useState } from 'react';
import { 
  Zap, 
  Shield, 
  Rocket, 
  Globe, 
  CreditCard, 
  PieChart, 
  CheckCircle2, 
  ChevronDown, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-neon-gradient rounded-lg flex items-center justify-center shadow-neon-cyan">
                <Zap className="text-white fill-white" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                TURBO<span className="text-neon-cyan">CASH</span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-neon-cyan transition-colors">Home</a>
              <a href="#features" className="text-gray-300 hover:text-neon-cyan transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-neon-cyan transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-neon-cyan transition-colors">FAQ</a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-white hover:text-neon-cyan transition-colors font-medium">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-neon-cyan">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-neon-cyan">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-neon-cyan">Pricing</a>
              <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-neon-cyan">FAQ</a>
              <div className="flex flex-col gap-2 mt-4 px-3">
                <button className="text-white py-2 text-left font-medium">Login</button>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      
      {/* Light Trails */}
      <div className="light-trail top-1/4 left-0"></div>
      <div className="light-trail top-1/2 left-1/4" style={{ animationDelay: '1s' }}></div>
      <div className="light-trail top-3/4 left-0" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Simplify Your <br />
              <span className="text-transparent bg-clip-text bg-neon-gradient">Payment</span> <br />
              Management
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-lg">
              TurboCash provides a high-speed, secure, and automated payment solution for your growing business. Scale globally with ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2">
                Start For Free <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">View Demo</button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-dark bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">10k+ Businesses</p>
                <p className="text-gray-500 text-xs">Trust TurboCash daily</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="glass-card p-4 lg:p-8 relative overflow-hidden group">
              {/* Mockup UI */}
              <div className="aspect-video bg-dark/50 rounded-xl border border-white/10 p-4 relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <div className="space-y-1">
                    <div className="h-2 w-20 bg-white/20 rounded"></div>
                    <div className="h-4 w-32 bg-neon-cyan/40 rounded"></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                    <PieChart className="text-neon-purple" size={20} />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 rounded-lg bg-white/5 border border-white/5 p-2">
                      <div className="h-1 w-8 bg-white/10 rounded mb-2"></div>
                      <div className="h-3 w-12 bg-white/20 rounded"></div>
                    </div>
                  ))}
                </div>

                <div className="h-32 w-full bg-white/5 rounded-lg border border-white/5 flex items-end p-4 gap-2">
                  {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex-1 bg-neon-cyan/40 rounded-t-sm shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:bg-neon-cyan/60 transition-colors"
                    />
                  ))}
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-4 glass p-3 border-neon-purple/50 shadow-neon-purple"
                >
                  <CreditCard className="text-neon-purple" size={24} />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 glass p-3 border-neon-cyan/50 shadow-neon-cyan"
                >
                  <Rocket className="text-neon-cyan" size={24} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 border-white/5 hover:border-neon-cyan/30 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-neon-cyan/10 transition-colors">
      <Icon className="text-neon-cyan" size={30} />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Simple Integration",
      description: "Integrate with ease using our modern API, developer-friendly SDKs, and ready-to-use plugins."
    },
    {
      icon: Shield,
      title: "Automated Personal Account",
      description: "Get paid directly to your personal account with TurboCash's smart automation software."
    },
    {
      icon: CreditCard,
      title: "Invoice Generator",
      description: "Get paid quickly and professionally by sending custom invoices to your clients with one click."
    },
    {
      icon: PieChart,
      title: "Manage Billing",
      description: "Easily manage subscriptions, recurring billing, and financial reports from a single dashboard."
    },
    {
      icon: Globe,
      title: "Accept Global Payments",
      description: "Expand your reach globally and increase sales volume by accepting payments from 150+ countries."
    },
    {
      icon: Rocket,
      title: "30+ Payment Methods",
      description: "Offer your customers a variety of payment options including Cards, Wallets, and Crypto."
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Amazing Features Of TurboCash</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Say goodbye to manual payment processes with TurboCash's automated software.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, price, features, highlighted = false }) => (
  <div className={`glass-card p-8 border-white/10 relative overflow-hidden flex flex-col ${highlighted ? 'neon-border-cyan scale-105 z-10' : ''}`}>
    {highlighted && (
      <div className="absolute top-0 right-0 bg-neon-cyan text-dark font-bold px-4 py-1 rounded-bl-lg text-sm">
        Best Choice
      </div>
    )}
    <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-4xl font-black text-white">৳{price}</span>
      <span className="text-gray-500">/month</span>
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-gray-300">
          <CheckCircle2 size={18} className="text-neon-cyan" />
          {f}
        </li>
      ))}
    </ul>
    <button className={highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}>
      {highlighted ? 'Start Now' : 'Choose Plan'}
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Choose Pricing Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Honest and affordable pricing tailored to help you get started easily.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            plan="Starter"
            price="200"
            features={["Monthly 500 Transactions", "Unlimited Website", "Invoice Management", "Payment Link Management", "Free Support"]}
          />
          <PricingCard 
            plan="Basic"
            price="300"
            highlighted={true}
            features={["Monthly 2000 Transactions", "Unlimited Website", "Invoice Management", "Payment Link Management", "Multi-Currency Support", "Priority Support"]}
          />
          <PricingCard 
            plan="Standard"
            price="600"
            features={["Monthly 5000 Transactions", "Unlimited Website", "Invoice Management", "Payment Link Management", "Dedicated Manager", "24/7 Premium Support"]}
          />
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{question}</span>
        <ChevronDown className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is TurboCash?",
      answer: "TurboCash is a next-generation payment automation platform designed to help businesses manage their financial operations efficiently with modern tech."
    },
    {
      question: "How does it work?",
      answer: "Simply integrate our API or use our pre-built plugins to start accepting payments. Our system automates the routing and reporting for you."
    },
    {
      question: "Is it secure?",
      answer: "Absolutely. We use bank-grade encryption and follow strict compliance standards to ensure every transaction is safe."
    },
    {
      question: "Which payment methods are supported?",
      answer: "We support Credit/Debit cards, local wallets (bKash, Nagad), and even popular cryptocurrencies."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-dark/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="glass-card p-6 border-white/5">
          {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="pt-24 pb-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-neon-gradient rounded-md flex items-center justify-center">
              <Zap className="text-white" size={18} />
            </div>
            <span className="text-xl font-black text-white">TURBOCASH</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            The ultimate payment automation software for modern businesses. Fast, secure, and reliable.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Refund Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Submit Ticket</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-neon-cyan transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Connect</h4>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-cyan/20 transition-colors cursor-pointer border border-white/10">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; 2026 TurboCash. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        
        {/* Contact CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="bg-shape shape-1 opacity-20"></div>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="glass-card p-12 border-neon-cyan/20">
              <h2 className="text-4xl font-black text-white mb-6">Have Question? Get in touch!</h2>
              <p className="text-gray-400 mb-10 text-lg">Start working with TurboCash that can provide you with secure and efficient payment tools.</p>
              <button className="btn-primary">Contact Us Now</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
