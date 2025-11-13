"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Handshake, Mail, MessageCircle, Trophy } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="plain"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Schedule", id: "schedule" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Thunder Hawks"
          button={{ text: "Join Team", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Thunder Hawks"
          description="Dominating the ice with skill, teamwork, and unwavering determination. Join us for an unforgettable hockey experience."
          buttons={[
            { text: "Season Tickets", href: "https://tickets.thunderhawks.com" },
            { text: "Meet the Team", href: "team" }
          ]}
          imageSrc="/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027216324-pixabay.jpg"
          imageAlt="Thunder Hawks hockey team in action"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Founded on passion, driven by excellence. The Thunder Hawks represent the heart and soul of competitive hockey, bringing together talented athletes who share one common goal: victory on the ice."
          buttons={[
            { text: "Our History", href: "history" },
            { text: "Join Us", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="What Makes Us Champions"
          description="Discover the key elements that drive our success on and off the ice"
          tag="Excellence"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Professional Training",
              description: "World-class coaching and training facilities that develop champions at every level of play",
              imageSrc: "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027217852-pixabay.jpg",
              imageAlt: "Hockey training session"
            },
            {
              id: "02",
              title: "Team Unity",
              description: "Building strong bonds between players that translate to unstoppable teamwork on the ice",
              imageSrc: "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027217248-pixabay.jpg",
              imageAlt: "Team unity photo"
            },
            {
              id: "03",
              title: "Fan Support",
              description: "The incredible energy from our loyal fanbase that drives us to victory every game",
              imageSrc: "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027218576-pixabay.jpg",
              imageAlt: "Fans celebrating victory"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Fans Say"
          description="Hear from the passionate supporters who make Thunder Hawks hockey unforgettable"
          tag="Fan Voice"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Mike Johnson",
              role: "Season Ticket Holder",
              company: "Thunder Hawks Fan Club",
              rating: 5,
              imageSrc: "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027221546-pixabay.jpg",
              imageAlt: "Mike Johnson portrait"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Youth Hockey Parent",
              company: "Local Hockey Community",
              rating: 5,
              imageSrc: "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027222005-pixabay.jpg",
              imageAlt: "Sarah Williams portrait"
            },
            {
              id: "3",
              name: "Tommy Chen",
              role: "Junior League Player",
              company: "Thunder Hawks Academy",
              rating: 5,
              imageSrc: "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027222571-pixabay.jpg",
              imageAlt: "Tommy Chen portrait"
            },
            {
              id: "4",
              name: "Robert Anderson",
              role: "Lifelong Hockey Fan",
              company: "Community Supporter",
              rating: 5,
              imageSrc: "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027223141-pixabay.jpg",
              imageAlt: "Robert Anderson portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Proudly Sponsored By"
          description="Thank you to our amazing sponsors who make Thunder Hawks hockey possible"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027223696-pixabay.jpg",
            "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027224413-pixabay.jpg",
            "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027225172-pixabay.jpg",
            "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027225744-pixabay.jpg",
            "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027226395-pixabay.jpg",
            "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027227077-pixabay.jpg",
            "/uploads/pixabay/540daeb6-abcc-4087-8827-a4d0ffad43aa/1763027227596-pixabay.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Join the Thunder Hawks Family"
          description="Get the latest updates on games, events, and exclusive team news delivered straight to your inbox."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive Thunder Hawks updates and can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Thunder Hawks"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" },
                { label: "Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Schedule", href: "schedule" },
                { label: "Tickets", href: "https://tickets.thunderhawks.com" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "News", href: "news" },
                { label: "Gallery", href: "gallery" },
                { label: "Shop", href: "https://shop.thunderhawks.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}