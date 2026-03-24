import { Sparkles, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  pageName?: string;
}

const ComingSoon = ({ pageName = "This page" }: ComingSoonProps) => {
  return (
    <div className="container flex min-h-[80vh] flex-col items-center justify-center py-12 text-center animate-in fade-in duration-700">
      <div className="relative group cursor-default">
        {/* Animated glowing background on hover */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-xl transition-all duration-1000 group-hover:opacity-60 group-hover:duration-300 animate-pulse"></div>
        
        <div className="relative flex flex-col items-center space-y-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-12 shadow-xl transition-transform duration-500 hover:scale-[1.02]">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 shadow-inner group-hover:animate-bounce transition-all">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
            {pageName} is <span className="text-primary">Coming Soon</span>
          </h1>
          
          <p className="max-w-[450px] text-lg text-muted-foreground leading-relaxed">
            We're currently crafting a wonderful experience for you. Check back later to see what's new!
          </p>
          
          <div className="pt-6">
            <Link to="/">
              <Button variant="default" size="lg" className="gap-2 transition-all hover:pr-6 shadow-md hover:shadow-primary/25">
                <Home className="h-4 w-4" /> Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;