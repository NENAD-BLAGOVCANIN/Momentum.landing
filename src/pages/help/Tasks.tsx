import { Card } from "../../components/ui/card";
import { Plus, Calendar, Flag, Tag, Clock, Users, Repeat } from "lucide-react";

export function Tasks() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Task Management</h1>
        <p className="text-muted-foreground text-lg">
          Master your productivity with powerful task management features. Learn how to create, organize, and track your tasks effectively.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Plus className="text-green-500" size={20} />
          Creating Tasks
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Quick Task Creation</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create tasks quickly using multiple methods:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Click the "+" button in the top navigation</li>
              <li>• Use the keyboard shortcut Ctrl+N (Cmd+N on Mac)</li>
              <li>• Type in the quick add box on your dashboard</li>
              <li>• Use voice commands on mobile app</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Task Details</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add comprehensive information to your tasks:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Title:</strong> Clear, actionable task name</li>
                <li>• <strong>Description:</strong> Additional context and notes</li>
                <li>• <strong>Due Date:</strong> When the task needs to be completed</li>
                <li>• <strong>Priority:</strong> High, Medium, or Low importance</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Category:</strong> Work, Personal, Health, etc.</li>
                <li>• <strong>Tags:</strong> Custom labels for organization</li>
                <li>• <strong>Estimated Time:</strong> How long you expect it to take</li>
                <li>• <strong>Subtasks:</strong> Break down complex tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Flag className="text-red-500" size={20} />
          Priority Management
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
            <Flag className="text-red-600 mx-auto mb-2" size={24} />
            <h3 className="font-medium text-red-800 dark:text-red-200">High Priority</h3>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">Urgent and important tasks that need immediate attention</p>
          </div>
          <div className="text-center p-4 border rounded-lg border-yellow-200 bg-yellow-50 dark:bg-yellow-950 dark:border-yellow-800">
            <Flag className="text-yellow-600 mx-auto mb-2" size={24} />
            <h3 className="font-medium text-yellow-800 dark:text-yellow-200">Medium Priority</h3>
            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Important tasks that should be completed soon</p>
          </div>
          <div className="text-center p-4 border rounded-lg border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
            <Flag className="text-green-600 mx-auto mb-2" size={24} />
            <h3 className="font-medium text-green-800 dark:text-green-200">Low Priority</h3>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">Tasks that can be done when time permits</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Tag className="text-purple-500" size={20} />
          Organization Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Categories</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Organize tasks into meaningful groups:
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Work</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">Personal</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">Health</span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">Learning</span>
            </div>
            <p className="text-xs text-muted-foreground">Create custom categories that match your workflow</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tags</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add flexible labels for cross-category organization:
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">#urgent</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">#meeting</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">#review</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs">#follow-up</span>
            </div>
            <p className="text-xs text-muted-foreground">Use tags to filter and search across all categories</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="text-blue-500" size={20} />
          Scheduling & Deadlines
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Due Dates</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Set deadlines to stay on track with your commitments:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Specific Date:</strong> Set exact due dates for time-sensitive tasks</li>
              <li>• <strong>Recurring:</strong> Set up tasks that repeat daily, weekly, or monthly</li>
              <li>• <strong>Flexible:</strong> Use "This Week" or "Next Month" for less rigid deadlines</li>
              <li>• <strong>No Date:</strong> Keep tasks without specific deadlines in your backlog</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Time Blocking</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Allocate specific time slots for task completion:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Drag tasks from your list to calendar slots</li>
              <li>• Set estimated duration for better planning</li>
              <li>• Get notifications when it's time to start</li>
              <li>• Track actual time spent vs. estimated</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Repeat className="text-green-500" size={20} />
          Recurring Tasks
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Repetition Patterns</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-blue-500" />
                <span><strong>Daily:</strong> Every day, weekdays only, or custom interval</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-green-500" />
                <span><strong>Weekly:</strong> Specific days of the week</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-purple-500" />
                <span><strong>Monthly:</strong> Same date each month or relative (first Monday)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-orange-500" />
                <span><strong>Yearly:</strong> Annual tasks like birthdays or reviews</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Managing Recurring Tasks</h3>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Complete one instance without affecting the series</li>
              <li>• Skip instances when needed</li>
              <li>• Modify future occurrences</li>
              <li>• End the recurrence pattern</li>
              <li>• View completion history</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users className="text-indigo-500" size={20} />
          Collaboration
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Sharing Tasks</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Collaborate with team members and family:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Assign tasks to specific people</li>
              <li>• Share task lists with groups</li>
              <li>• Add comments and updates</li>
              <li>• Get notifications when tasks are completed</li>
              <li>• Track who did what and when</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Keyboard Shortcuts</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-2">Task Creation</h3>
            <ul className="space-y-1">
              <li><kbd className="px-2 py-1 bg-background rounded">Ctrl+N</kbd> New task</li>
              <li><kbd className="px-2 py-1 bg-background rounded">Ctrl+D</kbd> Duplicate task</li>
              <li><kbd className="px-2 py-1 bg-background rounded">Ctrl+Enter</kbd> Save and create another</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Task Management</h3>
            <ul className="space-y-1">
              <li><kbd className="px-2 py-1 bg-background rounded">Space</kbd> Mark complete</li>
              <li><kbd className="px-2 py-1 bg-background rounded">E</kbd> Edit task</li>
              <li><kbd className="px-2 py-1 bg-background rounded">Del</kbd> Delete task</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
