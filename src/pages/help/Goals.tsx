import { Card } from "../../components/ui/card";
import { Target, TrendingUp, Calendar, Award, BarChart3, CheckCircle } from "lucide-react";

export function Goals() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Goals & Objectives</h1>
        <p className="text-muted-foreground text-lg">
          Set meaningful goals and track your progress towards achieving them. Learn how to create SMART goals and stay motivated.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Target className="text-blue-500" size={20} />
          Creating Effective Goals
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">SMART Goals Framework</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create goals that are more likely to be achieved using the SMART criteria:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-2 min-w-fit">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">S</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Specific</h4>
                    <p className="text-xs text-muted-foreground">Clear and well-defined objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900 rounded-lg p-2 min-w-fit">
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">M</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Measurable</h4>
                    <p className="text-xs text-muted-foreground">Quantifiable progress indicators</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-2 min-w-fit">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">A</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Achievable</h4>
                    <p className="text-xs text-muted-foreground">Realistic and attainable</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-2 min-w-fit">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">R</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Relevant</h4>
                    <p className="text-xs text-muted-foreground">Aligned with your values and priorities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900 rounded-lg p-2 min-w-fit">
                    <span className="text-red-600 dark:text-red-400 font-bold text-sm">T</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Time-bound</h4>
                    <p className="text-xs text-muted-foreground">Clear deadlines and timeframes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="text-green-500" size={20} />
          Goal Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 border rounded-lg">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Target className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <h3 className="font-medium mb-2">Personal Goals</h3>
            <p className="text-sm text-muted-foreground">Health, relationships, hobbies, and personal development</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="bg-green-100 dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <h3 className="font-medium mb-2">Professional Goals</h3>
            <p className="text-sm text-muted-foreground">Career advancement, skill development, and work achievements</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Award className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <h3 className="font-medium mb-2">Learning Goals</h3>
            <p className="text-sm text-muted-foreground">Education, certifications, and knowledge acquisition</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="text-purple-500" size={20} />
          Tracking Progress
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Progress Indicators</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Monitor your advancement with various tracking methods:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Percentage Complete:</strong> Visual progress bars</li>
              <li>• <strong>Milestones:</strong> Key checkpoints along the way</li>
              <li>• <strong>Metrics:</strong> Quantifiable measurements</li>
              <li>• <strong>Check-ins:</strong> Regular progress reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Progress Visualization</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Fitness Goal</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Learning Goal</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Career Goal</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="text-orange-500" size={20} />
          Goal Timeline Management
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Time Horizons</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Organize goals by different time periods:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Short-term (1-3 months)</h4>
                <p className="text-xs text-muted-foreground">Quick wins and immediate objectives</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Medium-term (3-12 months)</h4>
                <p className="text-xs text-muted-foreground">Significant projects and developments</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Long-term (1+ years)</h4>
                <p className="text-xs text-muted-foreground">Life-changing aspirations and visions</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Milestone Planning</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Break down large goals into manageable milestones:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Set quarterly review points</li>
              <li>• Create monthly mini-goals</li>
              <li>• Establish weekly action items</li>
              <li>• Define daily habits that support your goals</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="text-green-500" size={20} />
          Goal Achievement Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Staying Motivated</h3>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Visualize your success regularly</li>
              <li>• Celebrate small wins along the way</li>
              <li>• Share your goals with accountability partners</li>
              <li>• Review and adjust goals as needed</li>
              <li>• Connect goals to your deeper values</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Overcoming Obstacles</h3>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Identify potential roadblocks early</li>
              <li>• Create contingency plans</li>
              <li>• Break down overwhelming goals</li>
              <li>• Seek support when needed</li>
              <li>• Learn from setbacks and adjust</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Goal Setting Best Practices</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Write them down:</strong> Goals are more likely to be achieved when documented</p>
          <p>• <strong>Make them visible:</strong> Keep your goals where you can see them daily</p>
          <p>• <strong>Review regularly:</strong> Schedule weekly or monthly goal review sessions</p>
          <p>• <strong>Be flexible:</strong> Adjust goals as circumstances and priorities change</p>
          <p>• <strong>Focus on process:</strong> Set goals for habits and systems, not just outcomes</p>
        </div>
      </Card>
    </div>
  );
}
