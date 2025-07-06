import { Card } from "../../components/ui/card";
import { Smartphone, Download, Bell, RefreshCw, Mic, Camera, Fingerprint } from "lucide-react";

export function MobileApp() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mobile App</h1>
        <p className="text-muted-foreground text-lg">
          Take your productivity on the go with our powerful mobile app. Access all your tasks, goals, and data from anywhere.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Download className="text-blue-500" size={20} />
          Getting Started
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Download & Installation</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get the Momentum app on your device:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Available on iOS App Store and Google Play Store</li>
              <li>• Requires iOS 14.0+ or Android 8.0+</li>
              <li>• Free download with premium features available</li>
              <li>• Automatic updates ensure you have the latest features</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">First-Time Setup</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Quick setup process to get you started:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Sign in with your existing account</li>
              <li>• Enable notifications for important updates</li>
              <li>• Set up biometric authentication (optional)</li>
              <li>• Sync your data from the web platform</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Smartphone className="text-green-500" size={20} />
          Key Mobile Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-2">
                <RefreshCw className="text-blue-600 dark:text-blue-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Real-time Sync</h3>
                <p className="text-sm text-muted-foreground">All changes sync instantly across all your devices</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-900 rounded-lg p-2">
                <Bell className="text-green-600 dark:text-green-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Smart Notifications</h3>
                <p className="text-sm text-muted-foreground">Get reminded about deadlines and important tasks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-2">
                <Mic className="text-purple-600 dark:text-purple-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Voice Commands</h3>
                <p className="text-sm text-muted-foreground">Create tasks and notes using voice input</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-2">
                <Camera className="text-orange-600 dark:text-orange-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Photo Attachments</h3>
                <p className="text-sm text-muted-foreground">Attach photos to tasks and notes directly from camera</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-red-100 dark:bg-red-900 rounded-lg p-2">
                <Fingerprint className="text-red-600 dark:text-red-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Biometric Security</h3>
                <p className="text-sm text-muted-foreground">Secure access with fingerprint or face recognition</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-teal-100 dark:bg-teal-900 rounded-lg p-2">
                <Smartphone className="text-teal-600 dark:text-teal-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Offline Access</h3>
                <p className="text-sm text-muted-foreground">View and edit your data even without internet</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Bell className="text-purple-500" size={20} />
          Notification Settings
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Notification Types</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Customize which notifications you receive:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Task Reminders:</strong> Due date and deadline alerts</li>
                <li>• <strong>Goal Updates:</strong> Progress milestones and achievements</li>
                <li>• <strong>Daily Summaries:</strong> Morning briefings and evening reviews</li>
                <li>• <strong>Collaboration:</strong> Team updates and shared task changes</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Habit Tracking:</strong> Reminders for daily routines</li>
                <li>• <strong>Calendar Events:</strong> Upcoming appointments and meetings</li>
                <li>• <strong>System Updates:</strong> App updates and new features</li>
                <li>• <strong>Motivational:</strong> Encouraging messages and tips</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Timing Controls</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Set when you want to receive notifications:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Quiet Hours:</strong> Disable notifications during sleep or focus time</li>
              <li>• <strong>Work Schedule:</strong> Different settings for work days vs. weekends</li>
              <li>• <strong>Time Zones:</strong> Automatic adjustment when traveling</li>
              <li>• <strong>Frequency:</strong> Control how often you get reminder notifications</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Mic className="text-orange-500" size={20} />
          Voice Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Voice Commands</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use natural language to interact with the app:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• "Add task: Buy groceries tomorrow"</li>
              <li>• "Mark task complete: Finish report"</li>
              <li>• "Show me today's tasks"</li>
              <li>• "Create note about meeting"</li>
              <li>• "Set reminder for 3 PM"</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Voice Notes</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Capture thoughts and ideas quickly:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Record voice memos on the go</li>
              <li>• Automatic transcription to text</li>
              <li>• Attach voice notes to tasks</li>
              <li>• Search within voice note transcriptions</li>
              <li>• Share voice notes with team members</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <RefreshCw className="text-blue-500" size={20} />
          Sync & Backup
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Data Synchronization</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Your data stays in sync across all devices:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Instant sync when connected to internet</li>
              <li>• Conflict resolution for simultaneous edits</li>
              <li>• Offline changes sync when connection restored</li>
              <li>• Manual sync option for immediate updates</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Backup & Recovery</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Your data is always safe and recoverable:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Automatic cloud backups every 24 hours</li>
              <li>• Export data to external storage</li>
              <li>• Easy account recovery process</li>
              <li>• Version history for important changes</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Mobile Tips & Tricks</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Quick Add:</strong> Use the floating action button for fast task creation</p>
          <p>• <strong>Swipe Actions:</strong> Swipe left/right on tasks for quick actions</p>
          <p>• <strong>Widget Support:</strong> Add Momentum widgets to your home screen</p>
          <p>• <strong>Dark Mode:</strong> Automatic switching based on system settings</p>
          <p>• <strong>Haptic Feedback:</strong> Enable vibrations for better interaction feedback</p>
        </div>
      </Card>
    </div>
  );
}
