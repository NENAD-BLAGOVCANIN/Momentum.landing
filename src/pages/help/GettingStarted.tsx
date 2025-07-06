import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { CheckCircle, Download, Smartphone, Globe } from "lucide-react";

export function GettingStarted() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Getting Started with Momentum</h1>
        <p className="text-muted-foreground text-lg">
          Welcome to Momentum! This guide will help you get up and running quickly with our productivity platform.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="text-green-500" size={20} />
          Quick Setup Steps
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</div>
            <div>
              <h3 className="font-medium">Create Your Account</h3>
              <p className="text-sm text-muted-foreground">Sign up with your email or use Google authentication for quick access.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</div>
            <div>
              <h3 className="font-medium">Complete Your Profile</h3>
              <p className="text-sm text-muted-foreground">Add your personal information and preferences to customize your experience.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</div>
            <div>
              <h3 className="font-medium">Set Your First Goal</h3>
              <p className="text-sm text-muted-foreground">Define what you want to achieve and let Momentum help you track your progress.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</div>
            <div>
              <h3 className="font-medium">Download the Mobile App</h3>
              <p className="text-sm text-muted-foreground">Get the mobile app for on-the-go access to all your productivity tools.</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Globe size={20} />
            Web Platform
          </h2>
          <p className="text-muted-foreground mb-4">
            Access all features through your web browser with our responsive design that works on any device.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Full dashboard access
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Advanced analytics
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Bulk operations
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Export capabilities
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Smartphone size={20} />
            Mobile App
          </h2>
          <p className="text-muted-foreground mb-4">
            Stay productive on the go with our native mobile app available for iOS and Android.
          </p>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Offline access
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Push notifications
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Quick task entry
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Voice commands
            </li>
          </ul>
          <Button className="w-full" variant="outline">
            <Download size={16} className="mr-2" />
            Download App
          </Button>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Key Features Overview</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="font-medium mb-1">Task Management</h3>
            <p className="text-sm text-muted-foreground">Organize and track your daily tasks with smart prioritization.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="font-medium mb-1">Goal Tracking</h3>
            <p className="text-sm text-muted-foreground">Set and monitor progress towards your personal and professional goals.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h3 className="font-medium mb-1">Analytics</h3>
            <p className="text-sm text-muted-foreground">Gain insights into your productivity patterns and habits.</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p className="text-muted-foreground mb-4">
          If you have any questions or need assistance getting started, we're here to help!
        </p>
        <div className="flex gap-2">
          <Button variant="default">Contact Support</Button>
          <Button variant="outline">Watch Tutorial</Button>
        </div>
      </Card>
    </div>
  );
}
