import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { AlertTriangle, RefreshCw, Wifi, Database, HelpCircle, Mail } from "lucide-react";

export function Troubleshooting() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Troubleshooting</h1>
        <p className="text-muted-foreground text-lg">
          Having issues? Find solutions to common problems and learn how to get help when you need it.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="text-yellow-500" size={20} />
          Common Issues
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Wifi className="text-blue-500" size={16} />
              Sync Problems
            </h3>
            <div className="ml-6 space-y-2">
              <p className="text-sm text-muted-foreground mb-2">
                If your data isn't syncing between devices:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Check your internet connection</li>
                <li>• Force refresh by pulling down on the main screen</li>
                <li>• Log out and log back in</li>
                <li>• Clear app cache (Android) or restart app (iOS)</li>
                <li>• Ensure you're using the same account on all devices</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Database className="text-green-500" size={16} />
              Data Not Loading
            </h3>
            <div className="ml-6 space-y-2">
              <p className="text-sm text-muted-foreground mb-2">
                If your tasks, goals, or other data won't load:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Refresh the page or restart the app</li>
                <li>• Check if you're logged in to the correct account</li>
                <li>• Try switching between WiFi and mobile data</li>
                <li>• Clear browser cache (web) or app data (mobile)</li>
                <li>• Update to the latest version of the app</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <RefreshCw className="text-purple-500" size={16} />
              Performance Issues
            </h3>
            <div className="ml-6 space-y-2">
              <p className="text-sm text-muted-foreground mb-2">
                If the app is running slowly or freezing:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Close other apps to free up memory</li>
                <li>• Restart your device</li>
                <li>• Check available storage space</li>
                <li>• Update your operating system</li>
                <li>• Reinstall the app if problems persist</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Login & Account Issues</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Can't Sign In</h3>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Double-check your email and password</li>
              <li>• Try the "Forgot Password" option</li>
              <li>• Ensure caps lock is off</li>
              <li>• Clear browser cookies and cache</li>
              <li>• Try signing in from a different browser/device</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Account Recovery</h3>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Use the password reset email link</li>
              <li>• Check your spam/junk folder</li>
              <li>• Contact support if you can't access your email</li>
              <li>• Provide account verification details</li>
              <li>• Allow 24-48 hours for manual recovery</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Mobile App Specific</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">App Won't Open</h3>
            <p className="text-sm text-muted-foreground mb-2">
              If the mobile app crashes or won't start:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Force close and reopen the app</li>
              <li>• Restart your phone</li>
              <li>• Update the app from the app store</li>
              <li>• Free up storage space on your device</li>
              <li>• Reinstall the app as a last resort</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Notifications Not Working</h3>
            <p className="text-sm text-muted-foreground mb-2">
              If you're not receiving push notifications:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Check notification permissions in device settings</li>
              <li>• Ensure notifications are enabled in the app</li>
              <li>• Check "Do Not Disturb" mode settings</li>
              <li>• Verify notification timing settings</li>
              <li>• Try logging out and back in</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Browser Issues</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Supported Browsers</h3>
            <p className="text-sm text-muted-foreground mb-2">
              We recommend using the latest versions of:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Google Chrome (recommended)</li>
              <li>• Mozilla Firefox</li>
              <li>• Safari (macOS/iOS)</li>
              <li>• Microsoft Edge</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Browser Troubleshooting</h3>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Clear browser cache and cookies</li>
              <li>• Disable browser extensions temporarily</li>
              <li>• Try incognito/private browsing mode</li>
              <li>• Update your browser to the latest version</li>
              <li>• Check if JavaScript is enabled</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Data & Privacy</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Missing Data</h3>
            <p className="text-sm text-muted-foreground mb-2">
              If some of your data appears to be missing:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Check if you're logged into the correct account</li>
              <li>• Look in archived or completed sections</li>
              <li>• Try different date range filters</li>
              <li>• Contact support for data recovery assistance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Data Export</h3>
            <p className="text-sm text-muted-foreground mb-2">
              To backup or export your data:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Go to Settings → Data Export</li>
              <li>• Choose your preferred format (JSON, CSV)</li>
              <li>• Select date range and data types</li>
              <li>• Download will be emailed to you</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <HelpCircle className="text-blue-500" size={20} />
          Getting Additional Help
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Before Contacting Support</h3>
            <p className="text-sm text-muted-foreground mb-2">
              To help us assist you faster, please:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Try the troubleshooting steps above</li>
              <li>• Note your device type and operating system version</li>
              <li>• Record any error messages you see</li>
              <li>• Note when the problem started occurring</li>
              <li>• Take screenshots if helpful</li>
            </ul>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <Button className="flex items-center gap-2">
              <Mail size={16} />
              Contact Support
            </Button>
            <Button variant="outline">
              Community Forum
            </Button>
            <Button variant="outline">
              Video Tutorials
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Emergency Data Recovery</h2>
        <p className="text-sm text-muted-foreground mb-3">
          If you've lost important data, don't panic! We keep backups and can often recover your information.
        </p>
        <p className="text-sm">
          Contact our support team immediately with your account details and a description of what happened. 
          Include the approximate date when you last saw your data.
        </p>
      </Card>
    </div>
  );
}
