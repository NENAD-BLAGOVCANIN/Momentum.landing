import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { BarChart3, Calendar, CheckSquare, Target, TrendingUp, Eye, Filter, RefreshCw } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground text-lg">
          Your dashboard is your command center for productivity. Learn how to make the most of your personalized overview.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="text-blue-500" size={20} />
          Dashboard Components
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-900 rounded-lg p-2">
                <CheckSquare className="text-green-600 dark:text-green-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Task Summary</h3>
                <p className="text-sm text-muted-foreground">Quick overview of pending, completed, and overdue tasks with progress indicators.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-2">
                <Target className="text-blue-600 dark:text-blue-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Goal Progress</h3>
                <p className="text-sm text-muted-foreground">Visual progress bars showing how close you are to achieving your goals.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-2">
                <Calendar className="text-purple-600 dark:text-purple-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Upcoming Events</h3>
                <p className="text-sm text-muted-foreground">Next scheduled events, deadlines, and important dates.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-2">
                <BarChart3 className="text-orange-600 dark:text-orange-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Activity Charts</h3>
                <p className="text-sm text-muted-foreground">Visual representations of your productivity patterns and trends.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-red-100 dark:bg-red-900 rounded-lg p-2">
                <TrendingUp className="text-red-600 dark:text-red-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Performance Metrics</h3>
                <p className="text-sm text-muted-foreground">Key performance indicators and productivity scores.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-teal-100 dark:bg-teal-900 rounded-lg p-2">
                <RefreshCw className="text-teal-600 dark:text-teal-400" size={16} />
              </div>
              <div>
                <h3 className="font-medium">Recent Activity</h3>
                <p className="text-sm text-muted-foreground">Latest updates, completed tasks, and recent changes.</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Eye size={20} />
          Customizing Your View
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Widget Management</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Personalize your dashboard by showing or hiding different widgets based on your needs.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Click the settings icon in the top-right corner</li>
              <li>• Toggle widgets on/off using the visibility controls</li>
              <li>• Drag and drop widgets to rearrange their order</li>
              <li>• Resize widgets by dragging the corners</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Time Range Selection</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Adjust the time period for your dashboard data to focus on what matters most.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="outline" size="sm">This Week</Button>
              <Button variant="outline" size="sm">This Month</Button>
              <Button variant="outline" size="sm">Custom Range</Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Filter size={20} />
          Filtering and Sorting
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Quick Filters</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use built-in filters to quickly focus on specific types of data.
            </p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Priority:</strong> High, Medium, Low priority items</li>
              <li>• <strong>Status:</strong> Completed, In Progress, Pending</li>
              <li>• <strong>Category:</strong> Work, Personal, Health, etc.</li>
              <li>• <strong>Due Date:</strong> Today, This Week, Overdue</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Sorting Options</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Organize your dashboard data in the way that makes most sense to you.
            </p>
            <ul className="text-sm space-y-1">
              <li>• <strong>By Date:</strong> Newest first, Oldest first</li>
              <li>• <strong>By Priority:</strong> High to Low, Low to High</li>
              <li>• <strong>By Progress:</strong> Most complete, Least complete</li>
              <li>• <strong>Alphabetical:</strong> A-Z, Z-A</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Understanding Your Metrics</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
            <div className="text-sm font-medium mb-1">Completion Rate</div>
            <div className="text-xs text-muted-foreground">Percentage of tasks completed on time</div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
            <div className="text-sm font-medium mb-1">Active Goals</div>
            <div className="text-xs text-muted-foreground">Goals currently being tracked</div>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">7.2</div>
            <div className="text-sm font-medium mb-1">Productivity Score</div>
            <div className="text-xs text-muted-foreground">Based on task completion and goal progress</div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Pro Tips</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Set up notifications:</strong> Get alerts for important deadlines and milestones</p>
          <p>• <strong>Use keyboard shortcuts:</strong> Press '?' to see all available shortcuts</p>
          <p>• <strong>Export data:</strong> Download your dashboard data for external analysis</p>
          <p>• <strong>Mobile sync:</strong> Your dashboard automatically syncs with the mobile app</p>
        </div>
      </Card>
    </div>
  );
}
