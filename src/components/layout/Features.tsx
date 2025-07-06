import { Activity, Apple, Calendar, CalendarCheck, Goal, ListCheck } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Stay <span className="text-blue-600">Organized</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Momentum brings together all the tools you need to manage your life effectively. 
            From daily tasks to long-term goals, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-0 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <ListCheck size={24} className="text-blue-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3">Smart Task Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organize your tasks with intelligent prioritization, due dates, and categories. 
                Never miss an important deadline again.
              </p>
            </CardContent>
          </Card>

          <Card className="p-0 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Apple size={24} className="text-green-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3">Nutrition Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor your daily calorie intake and nutritional goals with our comprehensive 
                food database and easy logging system.
              </p>
            </CardContent>
          </Card>

          <Card className="p-0 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Calendar size={24} className="text-purple-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3">Personal Calendar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep track of appointments, events, and important dates with our intuitive 
                calendar that syncs across all your devices.
              </p>
            </CardContent>
          </Card>

          <Card className="p-0 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <CalendarCheck size={24} className="text-orange-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3">Daily Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start each day with purpose using our daily planning tools that help you 
                prioritize and schedule your most important activities.
              </p>
            </CardContent>
          </Card>

          <Card className="p-0 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <Goal size={24} className="text-red-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3">Goal Achievement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set, track, and achieve your long-term goals with milestone tracking, 
                progress visualization, and motivational insights.
              </p>
            </CardContent>
          </Card>

          <Card className="p-0 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                  <Activity size={24} className="text-teal-600" />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3">Activity Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track your physical activities, workouts, and health metrics to maintain 
                a balanced and healthy lifestyle.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
