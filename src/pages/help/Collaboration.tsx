import { Card } from "../../components/ui/card";
import { Users, Share2, MessageSquare, UserPlus, Crown, Shield } from "lucide-react";

export function Collaboration() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Collaboration</h1>
        <p className="text-muted-foreground text-lg">
          Work together with your team, family, or friends. Share tasks, coordinate projects, and achieve goals together.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users className="text-blue-500" size={20} />
          Getting Started with Teams
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Creating Your First Team</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Set up a collaborative workspace for your group:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Click "Create Team" from your dashboard</li>
              <li>• Choose a descriptive team name</li>
              <li>• Set team description and goals</li>
              <li>• Invite members via email or link</li>
              <li>• Configure team settings and permissions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Team Types</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Different collaboration models for different needs:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Work Teams</h4>
                <p className="text-xs text-muted-foreground">Professional project collaboration</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Family Groups</h4>
                <p className="text-xs text-muted-foreground">Household management and planning</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Study Groups</h4>
                <p className="text-xs text-muted-foreground">Academic collaboration and learning</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <UserPlus className="text-green-500" size={20} />
          Managing Team Members
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Inviting Members</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add people to your team in multiple ways:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Email Invitations:</strong> Send direct invites to email addresses</li>
              <li>• <strong>Invitation Links:</strong> Share a join link with your team</li>
              <li>• <strong>QR Codes:</strong> Generate QR codes for easy mobile joining</li>
              <li>• <strong>Bulk Import:</strong> Upload a list of email addresses</li>
              <li>• <strong>Domain Restrictions:</strong> Auto-approve members from specific domains</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Member Management</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Control team membership and access:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Remove Members:</strong> Remove inactive or unwanted members</li>
              <li>• <strong>Transfer Ownership:</strong> Change team ownership</li>
              <li>• <strong>Suspend Access:</strong> Temporarily disable member access</li>
              <li>• <strong>Member Directory:</strong> View all team members and their roles</li>
              <li>• <strong>Activity Tracking:</strong> See when members were last active</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Crown className="text-purple-500" size={20} />
          Roles & Permissions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Team Roles</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Different levels of access and responsibility:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900 rounded-lg p-2 min-w-fit">
                    <Crown className="text-red-600 dark:text-red-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Owner</h4>
                    <p className="text-xs text-muted-foreground">Full control over team settings, billing, and members</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-2 min-w-fit">
                    <Shield className="text-blue-600 dark:text-blue-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Admin</h4>
                    <p className="text-xs text-muted-foreground">Manage members, settings, and team content</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900 rounded-lg p-2 min-w-fit">
                    <Users className="text-green-600 dark:text-green-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Member</h4>
                    <p className="text-xs text-muted-foreground">Create and edit content, collaborate on shared items</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 min-w-fit">
                    <Users className="text-gray-600 dark:text-gray-400" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Viewer</h4>
                    <p className="text-xs text-muted-foreground">Read-only access to shared team content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Custom Permissions</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Fine-tune what each role can do:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Content Creation:</strong> Who can create new tasks, goals, and notes</li>
              <li>• <strong>Editing Rights:</strong> Who can modify existing content</li>
              <li>• <strong>Deletion Permissions:</strong> Who can delete team content</li>
              <li>• <strong>Sharing Controls:</strong> Who can share content outside the team</li>
              <li>• <strong>Integration Access:</strong> Who can connect external services</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Share2 className="text-orange-500" size={20} />
          Sharing & Collaboration Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Shared Workspaces</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Collaborate on shared content:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Team Tasks:</strong> Assign and track tasks across the team</li>
              <li>• <strong>Shared Goals:</strong> Work together towards common objectives</li>
              <li>• <strong>Collaborative Notes:</strong> Real-time document editing</li>
              <li>• <strong>Team Calendar:</strong> Shared scheduling and events</li>
              <li>• <strong>Project Boards:</strong> Kanban-style project management</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Real-time Collaboration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Work together in real-time:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Live Editing:</strong> See changes as they happen</li>
              <li>• <strong>Presence Indicators:</strong> See who's online and active</li>
              <li>• <strong>Cursor Tracking:</strong> See where others are working</li>
              <li>• <strong>Conflict Resolution:</strong> Automatic handling of simultaneous edits</li>
              <li>• <strong>Version History:</strong> Track all changes and contributors</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <MessageSquare className="text-indigo-500" size={20} />
          Communication Tools
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Team Communication</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Stay connected with your team:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Comments:</strong> Add comments to any task, goal, or note</li>
                <li>• <strong>Mentions:</strong> @mention team members to get their attention</li>
                <li>• <strong>Team Chat:</strong> Dedicated chat channels for each team</li>
                <li>• <strong>Announcements:</strong> Broadcast important updates to the team</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Status Updates:</strong> Share progress and updates</li>
                <li>• <strong>Reactions:</strong> Quick emoji responses to messages</li>
                <li>• <strong>File Sharing:</strong> Share documents and media</li>
                <li>• <strong>Voice Messages:</strong> Record and share audio messages</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Notifications & Updates</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Stay informed about team activity:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Activity Feed:</strong> See all team activity in one place</li>
              <li>• <strong>Custom Notifications:</strong> Choose what updates you want to receive</li>
              <li>• <strong>Daily Digests:</strong> Summary emails of team activity</li>
              <li>• <strong>Milestone Alerts:</strong> Notifications when goals are achieved</li>
              <li>• <strong>Deadline Reminders:</strong> Team-wide deadline notifications</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Team Analytics & Insights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Team Performance</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Track your team's productivity:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Completion Rates:</strong> See how many tasks are completed on time</li>
              <li>• <strong>Goal Progress:</strong> Track progress towards team objectives</li>
              <li>• <strong>Activity Levels:</strong> Monitor team engagement and participation</li>
              <li>• <strong>Workload Distribution:</strong> Ensure balanced task assignment</li>
              <li>• <strong>Productivity Trends:</strong> Identify patterns and improvements</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Individual Insights</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Understand individual contributions:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Member Contributions:</strong> See who's contributing what</li>
              <li>• <strong>Skill Assessment:</strong> Identify team strengths and gaps</li>
              <li>• <strong>Time Tracking:</strong> Optional time tracking for projects</li>
              <li>• <strong>Recognition System:</strong> Highlight outstanding contributions</li>
              <li>• <strong>Growth Tracking:</strong> Monitor individual improvement</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Collaboration Best Practices</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Clear communication:</strong> Use descriptive task names and detailed descriptions</p>
          <p>• <strong>Regular check-ins:</strong> Schedule weekly team meetings or updates</p>
          <p>• <strong>Defined roles:</strong> Make sure everyone knows their responsibilities</p>
          <p>• <strong>Shared goals:</strong> Align individual tasks with team objectives</p>
          <p>• <strong>Celebrate success:</strong> Acknowledge achievements and milestones</p>
          <p>• <strong>Constructive feedback:</strong> Use comments to provide helpful suggestions</p>
        </div>
      </Card>
    </div>
  );
}
