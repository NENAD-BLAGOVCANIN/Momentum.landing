import { Outlet, useLocation, Link } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { 
  BookOpen, 
  Calendar, 
  Target, 
  CheckSquare, 
  Utensils, 
  StickyNote, 
  TrendingUp, 
  Settings, 
  Shield, 
  HelpCircle,
  Users,
  Smartphone
} from "lucide-react";

const helpTopics = [
  { path: "/help/getting-started", title: "Getting Started", icon: BookOpen },
  { path: "/help/dashboard", title: "Dashboard Overview", icon: TrendingUp },
  { path: "/help/tasks", title: "Task Management", icon: CheckSquare },
  { path: "/help/goals", title: "Goals & Objectives", icon: Target },
  { path: "/help/calendar", title: "Calendar & Scheduling", icon: Calendar },
  { path: "/help/notes", title: "Notes & Documentation", icon: StickyNote },
  { path: "/help/meals", title: "Meal Planning", icon: Utensils },
  { path: "/help/mobile-app", title: "Mobile App", icon: Smartphone },
  { path: "/help/account", title: "Account Settings", icon: Settings },
  { path: "/help/privacy", title: "Privacy & Security", icon: Shield },
  { path: "/help/collaboration", title: "Collaboration", icon: Users },
  { path: "/help/troubleshooting", title: "Troubleshooting", icon: HelpCircle },
];

export function HelpLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="p-4 sticky top-8">
              <h2 className="text-lg font-semibold mb-4">Help Topics</h2>
              <nav className="space-y-2">
                {helpTopics.map((topic) => {
                  const Icon = topic.icon;
                  const isActive = location.pathname === topic.path;
                  
                  return (
                    <Link
                      key={topic.path}
                      to={topic.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <Icon size={16} />
                      {topic.title}
                    </Link>
                  );
                })}
              </nav>
              
              <div className="mt-6 pt-4 border-t">
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:support@momentum.com">
                    Contact Support
                  </a>
                </Button>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
