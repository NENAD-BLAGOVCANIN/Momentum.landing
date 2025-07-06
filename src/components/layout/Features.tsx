import { Activity, Apple, Calendar, CalendarCheck, Goal, ListCheck } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Features() {
  return (
    <section id="features" className="container px-20 py-16">
      <h2 className="text-4xl font-bold mb-4">Features</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-0">
          <CardContent className="p-6">
            <div className="mb-3">
              <ListCheck size={30} color="#646cff" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Task Tracking</h3>
            <p className="text-muted-foreground">
              Own the source code for every component.
            </p>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-6">
            <div className="mb-3">
              <Apple size={30} color="#646cff" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Calory Tracking</h3>
            <p className="text-muted-foreground">
              Own the source code for every component.
            </p>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-6">
            <div className="mb-3">
              <Calendar size={30} color="#646cff" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Personal Calendar</h3>
            <p className="text-muted-foreground">
              Own the source code for every component.
            </p>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-6">
            <div className="mb-3">
              <CalendarCheck size={30} color="#646cff" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Plan your day</h3>
            <p className="text-muted-foreground">
              Own the source code for every component.
            </p>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-6">
            <div className="mb-3">
              <Goal size={30} color="#646cff" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Track Goals</h3>
            <p className="text-muted-foreground">
              Own the source code for every component.
            </p>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-6">
            <div className="mb-3">
              <Activity size={30} color="#646cff" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Track Activity</h3>
            <p className="text-muted-foreground">
              Own the source code for every component.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
