import { CheckCircle, Calendar, ThumbsUp, UserCheck } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Choose Your Service",
    description: "Browse our wide range of services and select what you need",
  },
  {
    icon: Calendar,
    title: "Book a Time Slot",
    description: "Pick a convenient date and time that works for you",
  },
  {
    icon: UserCheck,
    title: "Get a Professional",
    description: "We assign the best-rated professional for your job",
  },
  {
    icon: ThumbsUp,
    title: "Enjoy the Service",
    description: "Sit back and relax while our experts handle everything",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting professional help has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="relative text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step Number */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-lg relative">
                      <Icon className="h-12 w-12 text-primary-foreground" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
