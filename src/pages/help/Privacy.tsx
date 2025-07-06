import { Card } from "../../components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from "lucide-react";

export function Privacy() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Privacy & Security</h1>
        <p className="text-muted-foreground text-lg">
          Learn how we protect your data, respect your privacy, and keep your information secure.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Shield className="text-blue-500" size={20} />
          Data Protection
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">How We Protect Your Data</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We implement multiple layers of security to keep your information safe:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard AES-256</li>
              <li>• <strong>Secure Servers:</strong> Data stored in SOC 2 compliant data centers</li>
              <li>• <strong>Regular Backups:</strong> Automated daily backups with geographic redundancy</li>
              <li>• <strong>Access Controls:</strong> Strict employee access controls and monitoring</li>
              <li>• <strong>Security Audits:</strong> Regular third-party security assessments</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Data Minimization</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We only collect and store data that's necessary for providing our service:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Account information (email, name, preferences)</li>
              <li>• Your productivity data (tasks, goals, notes, etc.)</li>
              <li>• Usage analytics to improve our service</li>
              <li>• Technical logs for security and troubleshooting</li>
              <li>• We never collect unnecessary personal information</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Lock className="text-green-500" size={20} />
          Account Security
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Authentication Security</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Multiple layers of authentication protection:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Strong Passwords:</strong> Minimum security requirements enforced</li>
              <li>• <strong>Two-Factor Authentication:</strong> Optional 2FA via SMS or authenticator apps</li>
              <li>• <strong>Session Management:</strong> Automatic logout after inactivity</li>
              <li>• <strong>Device Recognition:</strong> Alerts for new device logins</li>
              <li>• <strong>Password Recovery:</strong> Secure password reset process</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Account Monitoring</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We monitor for suspicious activity:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Login Alerts:</strong> Notifications for unusual login patterns</li>
              <li>• <strong>IP Monitoring:</strong> Track login locations and devices</li>
              <li>• <strong>Failed Attempts:</strong> Account lockout after multiple failed logins</li>
              <li>• <strong>Activity Logs:</strong> Detailed logs of account activity</li>
              <li>• <strong>Breach Detection:</strong> Automated threat detection systems</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Eye className="text-purple-500" size={20} />
          Privacy Controls
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Data Visibility Settings</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Control who can see your information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Profile Visibility:</strong> Public, private, or contacts only</li>
                <li>• <strong>Activity Status:</strong> Show/hide when you're online</li>
                <li>• <strong>Shared Content:</strong> Control default sharing permissions</li>
                <li>• <strong>Search Visibility:</strong> Allow others to find you by email</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Analytics Opt-out:</strong> Disable usage analytics collection</li>
                <li>• <strong>Marketing Preferences:</strong> Control promotional communications</li>
                <li>• <strong>Third-party Sharing:</strong> Manage data sharing with integrations</li>
                <li>• <strong>Public API Access:</strong> Control API access to your data</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Content Privacy</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Your content privacy options:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Private by Default:</strong> All content is private unless you choose to share</li>
              <li>• <strong>Granular Sharing:</strong> Share specific items with specific people</li>
              <li>• <strong>Team Workspaces:</strong> Separate personal and team data</li>
              <li>• <strong>Guest Access:</strong> Temporary access for external collaborators</li>
              <li>• <strong>Link Sharing:</strong> Control who can access shared links</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Database className="text-orange-500" size={20} />
          Data Rights & Control
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Your Data Rights</h3>
            <p className="text-sm text-muted-foreground mb-3">
              You have full control over your personal data:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Access:</strong> Download all your data at any time</li>
              <li>• <strong>Portability:</strong> Export data in standard formats</li>
              <li>• <strong>Correction:</strong> Update or correct your information</li>
              <li>• <strong>Deletion:</strong> Delete your account and all associated data</li>
              <li>• <strong>Restriction:</strong> Limit how we process your data</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Data Retention</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How long we keep your information:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Active Accounts:</strong> Data retained while account is active</li>
              <li>• <strong>Deleted Accounts:</strong> Data permanently deleted within 30 days</li>
              <li>• <strong>Backup Retention:</strong> Backups purged after 90 days</li>
              <li>• <strong>Legal Requirements:</strong> Some data may be retained for legal compliance</li>
              <li>• <strong>Anonymized Analytics:</strong> Aggregated data may be retained indefinitely</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <UserCheck className="text-indigo-500" size={20} />
          Compliance & Standards
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Regulatory Compliance</h3>
            <p className="text-sm text-muted-foreground mb-3">
              We comply with major privacy regulations:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>GDPR:</strong> European General Data Protection Regulation</li>
                <li>• <strong>CCPA:</strong> California Consumer Privacy Act</li>
                <li>• <strong>PIPEDA:</strong> Canadian Personal Information Protection Act</li>
                <li>• <strong>SOC 2:</strong> Security and availability standards</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>ISO 27001:</strong> Information security management</li>
                <li>• <strong>HIPAA:</strong> Healthcare data protection (where applicable)</li>
                <li>• <strong>Privacy Shield:</strong> EU-US data transfer framework</li>
                <li>• <strong>Local Laws:</strong> Compliance with local privacy laws</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Third-Party Services</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How we handle third-party integrations:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Vetted Partners:</strong> All integrations undergo security review</li>
              <li>• <strong>Minimal Data Sharing:</strong> Only necessary data is shared</li>
              <li>• <strong>User Consent:</strong> Explicit permission required for data sharing</li>
              <li>• <strong>Revocable Access:</strong> You can revoke third-party access anytime</li>
              <li>• <strong>Audit Trail:</strong> Complete logs of third-party data access</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <AlertTriangle className="text-red-500" size={20} />
          Security Incidents & Response
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Incident Response</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Our approach to security incidents:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>24/7 Monitoring:</strong> Continuous security monitoring</li>
              <li>• <strong>Rapid Response:</strong> Immediate action on detected threats</li>
              <li>• <strong>User Notification:</strong> Prompt notification of any breaches</li>
              <li>• <strong>Transparent Communication:</strong> Clear updates on incident status</li>
              <li>• <strong>Post-Incident Review:</strong> Analysis and improvements after incidents</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Reporting Security Issues</h3>
            <p className="text-sm text-muted-foreground mb-3">
              How to report security concerns:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Security Email:</strong> security@momentum.com</li>
              <li>• <strong>Bug Bounty:</strong> Responsible disclosure program</li>
              <li>• <strong>Encrypted Communication:</strong> PGP key available for sensitive reports</li>
              <li>• <strong>Response Time:</strong> Acknowledgment within 24 hours</li>
              <li>• <strong>Recognition:</strong> Credit for responsible disclosure</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Privacy Best Practices</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Review settings regularly:</strong> Check your privacy settings monthly</p>
          <p>• <strong>Use strong passwords:</strong> Enable two-factor authentication</p>
          <p>• <strong>Be selective with sharing:</strong> Only share what's necessary</p>
          <p>• <strong>Monitor account activity:</strong> Review login history regularly</p>
          <p>• <strong>Keep software updated:</strong> Use the latest version of our apps</p>
          <p>• <strong>Report suspicious activity:</strong> Contact us immediately if something seems wrong</p>
        </div>
      </Card>
    </div>
  );
}
