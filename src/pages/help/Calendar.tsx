import { Card } from "../../components/ui/card";
import { Calendar as CalendarIcon, Clock, Users, Bell, Repeat, MapPin } from "lucide-react";

export function Calendar() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Calendar & Scheduling</h1>
        <p className="text-muted-foreground text-lg">
          Manage your time effectively with our integrated calendar system. Schedule events, set reminders, and stay organized.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CalendarIcon className="text-blue-500" size={20} />
          Calendar Views
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <CalendarIcon className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <h3 className="font-medium mb-2">Month View</h3>
            <p className="text-sm text-muted-foreground">See your entire month at a glance with all events and deadlines</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="bg-green-100 dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Clock className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <h3 className="font-medium mb-2">Week View</h3>
            <p className="text-sm text-muted-foreground">Detailed weekly schedule with hourly time slots</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <CalendarIcon className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <h3 className="font-medium mb-2">Day View</h3>
            <p className="text-sm text-muted-foreground">Focus on a single day with detailed scheduling</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="text-green-500" size={20} />
          Creating Events
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Event Types</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create different types of calendar events:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Meetings:</strong> Business meetings and calls</li>
                <li>• <strong>Appointments:</strong> Doctor visits, interviews</li>
                <li>• <strong>Personal:</strong> Family time, hobbies</li>
                <li>• <strong>Deadlines:</strong> Project due dates</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Travel:</strong> Flights, trips, commutes</li>
                <li>• <strong>Health:</strong> Workouts, medical appointments</li>
                <li>• <strong>Learning:</strong> Classes, training sessions</li>
                <li>• <strong>Social:</strong> Parties, gatherings</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Event Details</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add comprehensive information to your events:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Title & Description:</strong> Clear event details</li>
                <li>• <strong>Date & Time:</strong> Start and end times</li>
                <li>• <strong>Location:</strong> Physical or virtual meeting place</li>
                <li>• <strong>Attendees:</strong> Invite participants</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Reminders:</strong> Multiple notification options</li>
                <li>• <strong>Categories:</strong> Color-coded organization</li>
                <li>• <strong>Privacy:</strong> Public, private, or shared</li>
                <li>• <strong>Attachments:</strong> Files and documents</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Repeat className="text-purple-500" size={20} />
          Recurring Events
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Recurrence Patterns</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-500" />
                <span><strong>Daily:</strong> Every day, weekdays, or custom intervals</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-green-500" />
                <span><strong>Weekly:</strong> Same day each week or multiple days</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-purple-500" />
                <span><strong>Monthly:</strong> Same date or relative day (first Monday)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-orange-500" />
                <span><strong>Yearly:</strong> Annual events like birthdays</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Managing Recurring Events</h3>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Edit single occurrence or entire series</li>
              <li>• Skip specific instances when needed</li>
              <li>• Change future occurrences only</li>
              <li>• End recurrence on a specific date</li>
              <li>• View recurrence pattern summary</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Bell className="text-orange-500" size={20} />
          Reminders & Notifications
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Reminder Options</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Set multiple reminders for important events:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Time-based</h4>
                <p className="text-xs text-muted-foreground">5 min, 15 min, 1 hour, 1 day before</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Location-based</h4>
                <p className="text-xs text-muted-foreground">When arriving at or leaving a location</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Custom</h4>
                <p className="text-xs text-muted-foreground">Set specific times and dates</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Notification Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Push Notifications:</strong> Mobile alerts</li>
                <li>• <strong>Email Reminders:</strong> Sent to your inbox</li>
                <li>• <strong>Desktop Notifications:</strong> Browser alerts</li>
                <li>• <strong>SMS Alerts:</strong> Text message reminders</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>In-app Badges:</strong> Visual indicators</li>
                <li>• <strong>Calendar Alerts:</strong> System calendar integration</li>
                <li>• <strong>Smart Watch:</strong> Wearable device notifications</li>
                <li>• <strong>Voice Assistants:</strong> Alexa, Google Assistant</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users className="text-indigo-500" size={20} />
          Sharing & Collaboration
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Calendar Sharing</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Share your calendar with others:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Share entire calendar or specific events</li>
              <li>• Set view-only or edit permissions</li>
              <li>• Create public calendar links</li>
              <li>• Share with team members or family</li>
              <li>• Sync with external calendar apps</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Meeting Coordination</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Coordinate meetings with multiple people:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Send meeting invitations</li>
              <li>• Check attendee availability</li>
              <li>• Suggest optimal meeting times</li>
              <li>• Track RSVP responses</li>
              <li>• Add video conference links</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <MapPin className="text-red-500" size={20} />
          Location & Travel
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Location Features</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add location information to your events:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Physical addresses with map integration</li>
              <li>• Virtual meeting links (Zoom, Teams, etc.)</li>
              <li>• Travel time calculations</li>
              <li>• Traffic-aware departure reminders</li>
              <li>• Location-based notifications</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Travel Planning</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Plan your travel and commute times:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Automatic travel time estimation</li>
              <li>• Multiple transportation options</li>
              <li>• Real-time traffic updates</li>
              <li>• Buffer time for unexpected delays</li>
              <li>• Integration with navigation apps</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Calendar Best Practices</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Color coding:</strong> Use different colors for different types of events</p>
          <p>• <strong>Buffer time:</strong> Add 15-30 minutes between meetings</p>
          <p>• <strong>Regular reviews:</strong> Weekly calendar planning sessions</p>
          <p>• <strong>Time blocking:</strong> Schedule focused work time</p>
          <p>• <strong>Sync everywhere:</strong> Keep all your calendars synchronized</p>
        </div>
      </Card>
    </div>
  );
}
