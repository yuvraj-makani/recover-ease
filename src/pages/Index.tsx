import { DashboardCard } from "@/components/DashboardCard";
import { Stethoscope, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(var(--gradient-mid))] to-secondary animate-gradient-shift"
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-[hsl(var(--gradient-mid))] to-secondary bg-clip-text text-transparent">
                RecoverEase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto">
              Connecting Doctors and Patients Seamlessly
            </p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8 animate-scale-in">
            <DashboardCard
              title="Doctor Dashboard"
              description="Access your medical practice management tools and patient records"
              icon={<Stethoscope className="w-8 h-8 text-primary" />}
              href="https://preview--recoverease-doctor-dash.lovable.app/"
              variant="doctor"
            />
            
            <DashboardCard
              title="Patient Dashboard"
              description="View your health records, appointments, and connect with your care team"
              icon={<Heart className="w-8 h-8 text-secondary" />}
              href="https://preview--recover-ease-ai.lovable.app/"
              variant="patient"
            />
          </div>

          {/* Footer tagline */}
          <p className="text-sm text-foreground/60 pt-8">
            Trusted by healthcare professionals worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
