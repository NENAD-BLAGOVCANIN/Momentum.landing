import { Card } from "../../components/ui/card";
import { Settings, User, Shield, Bell, Palette, Download } from "lucide-react";

export function Account() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
        <p className="text-muted-foreground text-lg">
          Manage your account preferences, security settings, and personalize your Momentum experience.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <User className="text-blue-500" size={20} />
          Profile Information
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Personal Details</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Update your basic profile information:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Name:</strong> Display name shown throughout the app</li>
              <li>• <strong>Email:</strong> Primary email for account access and notifications</li>
              <li>• <strong>Profile Picture:</strong> Upload a custom avatar image</li>
              <li>• <strong>Bio:</strong> Optional description about yourself</li>
              <li>• <strong>Time Zone:</strong> Set your local time zone for accurate scheduling</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Contact Preferences</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Control how we communicate with you:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Primary Email:</strong> Main contact email</li>
                <li>• <strong>Backup Email:</strong> Alternative contact method</li>
                <li>• <strong>Phone Number:</strong> For SMS notifications (optional)</li>
                <li>• <strong>Language:</strong> Interface language preference</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Marketing Emails:</strong> Product updates and tips</li>
                <li>• <strong>Newsletter:</strong> Weekly productivity insights</li>
                <li>• <strong>Survey Invitations:</strong> Help improve our product</li>
                <li>• <strong>Security Alerts:</strong> Important account notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="text-green-500" size={20} />
          Security & Privacy
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Password & Authentication</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Secure your account with strong authentication:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Change your password regularly</li>
              <li>• Enable two-factor authentication (2FA)</li>
              <li>• Use authenticator apps for extra security</li>
              <li>• Set up backup recovery codes</li>
              <li>• Review active login sessions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Privacy Controls</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Control your data and privacy settings:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Manage data sharing preferences</li>
              <li>• Control profile visibility</li>
              <li>• Set default sharing permissions</li>
              <li>• Review connected third-party apps</li>
              <li>• Download your personal data</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Bell className="text-purple-500" size={20} />
          Notification Preferences
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Email Notifications</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Choose which email notifications you want to receive:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Task Reminders:</strong> Due date notifications</li>
                <li>• <strong>Goal Updates:</strong> Progress milestones</li>
                <li>• <strong>Daily Summaries:</strong> End-of-day reports</li>
                <li>• <strong>Weekly Reviews:</strong> Progress summaries</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Team Updates:</strong> Collaboration notifications</li>
                <li>• <strong>System Updates:</strong> New features and changes</li>
                <li>• <strong>Security Alerts:</strong> Account security notifications</li>
                <li>• <strong>Tips & Tricks:</strong> Productivity suggestions</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Push Notifications</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Configure mobile and desktop notifications:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Enable/disable push notifications</li>
              <li>• Set quiet hours for uninterrupted time</li>
              <li>• Choose notification sounds</li>
              <li>• Configure badge counts</li>
              <li>• Set priority levels for different notification types</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Palette className="text-orange-500" size={20} />
          Appearance & Preferences
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Theme & Display</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Customize the look and feel of your interface:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Theme:</strong> Light, dark, or auto mode</li>
              <li>• <strong>Color Scheme:</strong> Choose accent colors</li>
              <li>• <strong>Font Size:</strong> Adjust text size for readability</li>
              <li>• <strong>Density:</strong> Compact or comfortable layout</li>
              <li>• <strong>Animations:</strong> Enable or disable interface animations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Productivity Settings</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Configure settings to match your workflow:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Default Views:</strong> Set preferred dashboard layout</li>
              <li>• <strong>Start of Week:</strong> Choose Monday or Sunday</li>
              <li>• <strong>Date Format:</strong> MM/DD/YYYY or DD/MM/YYYY</li>
              <li>• <strong>Time Format:</strong> 12-hour or 24-hour clock</li>
              <li>• <strong>Auto-save:</strong> Configure automatic saving intervals</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Download className="text-indigo-500" size={20} />
          Data Management
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Export & Backup</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Keep your data safe and portable:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Full Data Export:</strong> Download all your data in JSON format</li>
              <li>• <strong>Selective Export:</strong> Choose specific data types to export</li>
              <li>• <strong>Scheduled Backups:</strong> Automatic weekly data backups</li>
              <li>• <strong>Import Data:</strong> Restore from previous exports</li>
              <li>• <strong>Third-party Integration:</strong> Export to other productivity tools</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Storage & Limits</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Monitor your account usage and limits:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Storage Used:</strong> Current data usage</li>
                <li>• <strong>File Attachments:</strong> Media and document storage</li>
                <li>• <strong>Monthly Limits:</strong> API calls and sync operations</li>
                <li>• <strong>Upgrade Options:</strong> Increase limits with premium plans</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Data Retention:</strong> How long we keep your data</li>
                <li>• <strong>Cleanup Tools:</strong> Remove old or unused data</li>
                <li>• <strong>Archive Options:</strong> Long-term data storage</li>
                <li>• <strong>Delete Account:</strong> Permanently remove all data</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Settings className="text-red-500" size={20} />
          Advanced Settings
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">API & Integrations</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Connect with external services and tools:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Generate API keys for custom integrations</li>
              <li>• Connect with calendar applications</li>
              <li>• Sync with task management tools</li>
              <li>• Set up webhook notifications</li>
              <li>• Manage connected applications</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Account Management</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Advanced account operations:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Account Deletion:</strong> Permanently delete your account</li>
              <li>• <strong>Data Portability:</strong> Transfer data to another service</li>
              <li>• <strong>Account Merging:</strong> Combine multiple accounts</li>
              <li>• <strong>Subscription Management:</strong> Billing and plan changes</li>
              <li>• <strong>Support Requests:</strong> Contact customer support</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Account Security Tips</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Strong passwords:</strong> Use unique, complex passwords for your account</p>
          <p>• <strong>Enable 2FA:</strong> Add an extra layer of security with two-factor authentication</p>
          <p>• <strong>Regular reviews:</strong> Check your account activity and connected apps monthly</p>
          <p>• <strong>Keep updated:</strong> Ensure your contact information is current</p>
          <p>• <strong>Secure devices:</strong> Log out from shared or public computers</p>
        </div>
      </Card>
    </div>
  );
}
