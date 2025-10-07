'use client'

// OMNIS Website - Digital Transformation Partner

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Code, Database, Globe, Smartphone, Cloud, Shield, CheckCircle, Users, Award, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ContactForm from '@/components/contact-form'
import { Toaster } from '@/components/ui/toaster'
import GoToTop from '@/components/go-to-top'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Scalable database architecture and management for your data needs."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing to grow your online presence."
    }
  ]

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "50+" },
    { label: "Years Experience", value: "10+" }
  ]

  const technologies = [
    "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", 
    "MongoDB", "PostgreSQL", "TypeScript", "Next.js", "Flutter", "Swift"
  ]

  const internships = [
    {
      title: "Web Development",
      description: "Learn modern web development with HTML, CSS, JavaScript, and popular frameworks like React and Next.js.",
      duration: "3-6 months",
      type: "Remote/On-site"
    },
    {
      title: "Android Development",
      description: "Master Android app development using Java/Kotlin and Android Studio with real-world projects.",
      duration: "3-6 months",
      type: "Remote/On-site"
    },
    {
      title: "Data Science",
      description: "Explore data analysis, machine learning, and visualization using Python, R, and advanced analytics tools.",
      duration: "4-6 months",
      type: "Remote"
    },
    {
      title: "Java Programming",
      description: "Build strong foundation in Java programming, OOP concepts, and enterprise application development.",
      duration: "2-4 months",
      type: "Remote/On-site"
    },
    {
      title: "C++ Programming",
      description: "Learn C++ from basics to advanced concepts including system programming and game development.",
      duration: "3-5 months",
      type: "Remote/On-site"
    },
    {
      title: "Python Programming",
      description: "Master Python programming for web development, automation, data science, and AI applications.",
      duration: "2-4 months",
      type: "Remote"
    },
    {
      title: "Artificial Intelligence (AI)",
      description: "Dive into AI concepts, neural networks, deep learning, and build intelligent applications.",
      duration: "6 months",
      type: "Remote"
    },
    {
      title: "Machine Learning (ML)",
      description: "Learn ML algorithms, model training, and deployment using Python and popular ML frameworks.",
      duration: "4-6 months",
      type: "Remote"
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user interfaces and experiences with design thinking, prototyping, and user research.",
      duration: "3-4 months",
      type: "Remote/On-site"
    },
    {
      title: "Flutter Development",
      description: "Build cross-platform mobile apps using Flutter and Dart for iOS and Android platforms.",
      duration: "3-5 months",
      type: "Remote"
    },
    {
      title: "ReactJS Development",
      description: "Become proficient in ReactJS, hooks, state management, and build modern web applications.",
      duration: "2-4 months",
      type: "Remote"
    },
    {
      title: "JavaScript Development",
      description: "Master JavaScript from fundamentals to advanced concepts including ES6+, async programming, and frameworks.",
      duration: "2-4 months",
      type: "Remote"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-omnis-deep-blue/95 backdrop-blur-sm border-b border-omnis-electric-cyan/20' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-omnis rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-omnis-deep-blue">OMNIS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-omnis-slate-gray hover:text-omnis-electric-cyan transition-colors font-medium">Home</a>
              <a href="#services" className="text-omnis-slate-gray hover:text-omnis-electric-cyan transition-colors font-medium">Services</a>
              <a href="#about" className="text-omnis-slate-gray hover:text-omnis-electric-cyan transition-colors font-medium">About</a>
              <a href="#internships" className="text-omnis-slate-gray hover:text-omnis-electric-cyan transition-colors font-medium">Internships</a>
              <a href="#technologies" className="text-omnis-slate-gray hover:text-omnis-electric-cyan transition-colors font-medium">Technologies</a>
              <a href="#contact" className="text-omnis-slate-gray hover:text-omnis-electric-cyan transition-colors font-medium">Contact</a>
              <Button className="bg-omnis-vibrant-orange hover:bg-omnis-vibrant-orange/90 text-white">Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 bg-omnis-deep-blue rounded-lg p-4">
              <a href="#home" className="block py-2 text-omnis-soft-white hover:text-omnis-electric-cyan transition-colors font-medium">Home</a>
              <a href="#services" className="block py-2 text-omnis-soft-white hover:text-omnis-electric-cyan transition-colors font-medium">Services</a>
              <a href="#about" className="block py-2 text-omnis-soft-white hover:text-omnis-electric-cyan transition-colors font-medium">About</a>
              <a href="#internships" className="block py-2 text-omnis-soft-white hover:text-omnis-electric-cyan transition-colors font-medium">Internships</a>
              <a href="#technologies" className="block py-2 text-omnis-soft-white hover:text-omnis-electric-cyan transition-colors font-medium">Technologies</a>
              <a href="#contact" className="block py-2 text-omnis-soft-white hover:text-omnis-electric-cyan transition-colors font-medium">Contact</a>
              <Button className="w-full mt-2 bg-omnis-vibrant-orange hover:bg-omnis-vibrant-orange/90 text-white">Get Started</Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-omnis-soft-white to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit border-omnis-electric-cyan text-omnis-electric-cyan bg-omnis-electric-cyan/10">
                🚀 Your Digital Transformation Partner
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-omnis-deep-blue">
                Transform Your Business with
                <span className="text-omnis-electric-cyan"> OMNIS</span>
              </h1>
              <p className="text-xl text-omnis-slate-gray">
                We deliver cutting-edge software solutions that drive innovation, 
                efficiency, and growth for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-omnis-vibrant-orange hover:bg-omnis-vibrant-orange/90 text-white">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-omnis-electric-cyan text-omnis-electric-cyan hover:bg-omnis-electric-cyan hover:text-white">
                  View Our Work
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-omnis-electric-cyan">{stat.value}</div>
                    <div className="text-sm text-omnis-slate-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-omnis rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-gradient-omnis rounded-3xl p-8 text-white">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-omnis-soft-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Innovation Meets Excellence</h3>
                  <p className="text-omnis-soft-white/90">
                    Building tomorrow's solutions today with cutting-edge technology 
                    and innovative approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-omnis-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-omnis-electric-cyan text-omnis-electric-cyan bg-omnis-electric-cyan/10">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-omnis-deep-blue">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-omnis-slate-gray max-w-2xl mx-auto">
              We offer end-to-end technology services to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-omnis-electric-cyan/20 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-omnis-electric-cyan/10 rounded-lg flex items-center justify-center text-omnis-electric-cyan group-hover:bg-omnis-electric-cyan group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-omnis-deep-blue">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-omnis-slate-gray">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="border-omnis-electric-cyan text-omnis-electric-cyan bg-omnis-electric-cyan/10">About OMNIS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-omnis-deep-blue">
                Driving Digital Excellence Since 2025
              </h2>
              <p className="text-lg text-omnis-slate-gray">
                OMNIS is a leading technology company specializing in innovative digital solutions. 
                Our team of expert developers, designers, and consultants work together to deliver 
                exceptional results that exceed expectations.
              </p>
              <p className="text-lg text-omnis-slate-gray">
                We believe in the power of technology to transform businesses and improve lives. 
                Our mission is to provide cutting-edge solutions that drive growth, efficiency, 
                and competitive advantage for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-omnis-mint-green" />
                  <span className="text-omnis-slate-gray">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-omnis-mint-green" />
                  <span className="text-omnis-slate-gray">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-omnis-mint-green" />
                  <span className="text-omnis-slate-gray">Agile Methodology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-omnis-mint-green" />
                  <span className="text-omnis-slate-gray">Quality Assurance</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-omnis-electric-cyan/20 bg-omnis-soft-white">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-omnis-electric-cyan mb-2">{stat.value}</div>
                    <div className="text-sm text-omnis-slate-gray">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 bg-gradient-to-br from-omnis-soft-white to-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-omnis-vibrant-orange text-omnis-vibrant-orange bg-omnis-vibrant-orange/10">INTERNSHIPS WE OFFER!</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-omnis-deep-blue">
              Launch Your Career with Our Internship Programs
            </h2>
            <p className="text-xl text-omnis-slate-gray max-w-2xl mx-auto">
              Gain hands-on experience and build your skills with our comprehensive internship programs 
              designed to kickstart your career in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-omnis-electric-cyan/20 bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-omnis-electric-cyan text-white">{internship.type}</Badge>
                    <Badge variant="outline" className="border-omnis-mint-green text-omnis-mint-green bg-omnis-mint-green/10">{internship.duration}</Badge>
                  </div>
                  <CardTitle className="text-xl text-omnis-deep-blue">{internship.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-omnis-slate-gray">
                    {internship.description}
                  </CardDescription>
                  <Button 
                    className="w-full mt-4 group bg-omnis-vibrant-orange hover:bg-omnis-vibrant-orange/90 text-white"
                    onClick={() => window.open('https://forms.gle/vJf7SpNBNKgXJzZcA', '_blank')}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto border-omnis-electric-cyan/20 bg-gradient-omnis-reverse text-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-omnis-soft-white/90 mb-6">
                  Join hundreds of students who have launched their careers through our internship programs.
                  Get real-world experience, mentorship, and the skills you need to succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-omnis-vibrant-orange hover:bg-omnis-vibrant-orange/90 text-white" onClick={() => window.open('https://forms.gle/vJf7SpNBNKgXJzZcA', '_blank')}>
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-omnis-mint-green text-omnis-mint-green hover:bg-omnis-mint-green hover:text-omnis-deep-blue" onClick={() => window.open('https://forms.gle/vJf7SpNBNKgXJzZcA', '_blank')}>
                    View Application Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-omnis-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-omnis-electric-cyan text-omnis-electric-cyan bg-omnis-electric-cyan/10">Technologies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-omnis-deep-blue">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-omnis-slate-gray max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-omnis-electric-cyan text-white hover:bg-omnis-electric-cyan/80 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white to-omnis-soft-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-omnis-vibrant-orange text-omnis-vibrant-orange bg-omnis-vibrant-orange/10">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-omnis-deep-blue">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-omnis-slate-gray max-w-2xl mx-auto">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-omnis-deep-blue py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/60 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="text-xl font-bold text-white">OMNIS</span>
              </div>
              <p className="text-sm text-omnis-soft-white/80">
                Your trusted partner for digital transformation and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-omnis-soft-white/80">
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-omnis-soft-white/80">
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-sm text-omnis-soft-white/80">
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-omnis-electric-cyan transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-omnis-electric-cyan/20 pt-8 text-center text-sm text-omnis-soft-white/60">
            <p>&copy; 2025 OMNIS. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Go to Top Button */}
      <GoToTop />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}