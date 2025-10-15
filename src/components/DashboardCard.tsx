import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant: "doctor" | "patient";
}

export const DashboardCard = ({ title, description, icon, href, variant }: DashboardCardProps) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Card
      onClick={handleClick}
      className={`
        group relative overflow-hidden cursor-pointer
        p-8 transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-2
        ${variant === "doctor" 
          ? "bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.4)] border-primary/20" 
          : "bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-[0_20px_60px_-10px_hsl(var(--secondary)/0.4)] border-secondary/20"
        }
      `}
    >
      <div className="relative z-10">
        <div className={`
          mb-6 inline-flex p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110
          ${variant === "doctor" ? "bg-primary/10" : "bg-secondary/10"}
        `}>
          {icon}
        </div>
        
        <h2 className={`
          text-3xl font-semibold mb-3 transition-colors
          ${variant === "doctor" ? "text-primary group-hover:text-primary" : "text-secondary group-hover:text-secondary"}
        `}>
          {title}
        </h2>
        
        <p className="text-muted-foreground mb-6 text-lg">
          {description}
        </p>
        
        <div className={`
          inline-flex items-center gap-2 font-medium transition-all duration-300 group-hover:gap-4
          ${variant === "doctor" ? "text-primary" : "text-secondary"}
        `}>
          Access Dashboard
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
      
      {/* Animated gradient overlay on hover */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
        ${variant === "doctor" 
          ? "bg-gradient-to-br from-primary/5 via-transparent to-primary/10" 
          : "bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10"
        }
      `} />
    </Card>
  );
};
