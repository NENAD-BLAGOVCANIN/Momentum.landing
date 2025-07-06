import { Users, Download, Star, Trophy } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Users",
      description: "People trust Momentum daily"
    },
    {
      icon: Download,
      value: "100K+",
      label: "Downloads",
      description: "Across iOS and Android"
    },
    {
      icon: Star,
      value: "4.8",
      label: "App Store Rating",
      description: "Based on 2,500+ reviews"
    },
    {
      icon: Trophy,
      value: "95%",
      label: "Goal Achievement",
      description: "Users reach their targets"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-blue-600">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a growing community of productive individuals who have made Momentum 
            their go-to life management solution.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
