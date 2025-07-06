import { Card } from "../../components/ui/card";
import { Utensils, Calendar, ShoppingCart, BarChart3, Users, Clock } from "lucide-react";

export function Meals() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Meal Planning</h1>
        <p className="text-muted-foreground text-lg">
          Plan your meals, track nutrition, and maintain a healthy lifestyle with our comprehensive meal planning tools.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Utensils className="text-blue-500" size={20} />
          Meal Planning Basics
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Getting Started</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Begin your meal planning journey with these simple steps:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Set your dietary preferences and restrictions</li>
              <li>• Define your weekly meal schedule</li>
              <li>• Add favorite recipes to your collection</li>
              <li>• Plan your first week of meals</li>
              <li>• Generate your shopping list</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Meal Types</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Plan different types of meals throughout your day:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Breakfast</h4>
                <p className="text-xs text-muted-foreground">Start your day with nutritious options</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Lunch</h4>
                <p className="text-xs text-muted-foreground">Midday meals for sustained energy</p>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-medium text-sm mb-1">Dinner</h4>
                <p className="text-xs text-muted-foreground">Evening meals for the whole family</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="text-green-500" size={20} />
          Weekly Meal Planning
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Planning Your Week</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create a structured weekly meal plan:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Drag and drop meals to calendar slots</li>
              <li>• Set recurring meals for consistency</li>
              <li>• Plan around your schedule and events</li>
              <li>• Balance nutrition across the week</li>
              <li>• Account for dining out and special occasions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Meal Prep Planning</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Optimize your meal preparation:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Batch cooking for multiple meals</li>
              <li>• Prep ingredients in advance</li>
              <li>• Plan leftover utilization</li>
              <li>• Schedule prep time in your calendar</li>
              <li>• Create prep checklists</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ShoppingCart className="text-purple-500" size={20} />
          Shopping Lists & Grocery Planning
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Smart Shopping Lists</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Generate and manage your grocery lists automatically:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Auto-generate from meal plans</li>
              <li>• Organize by store sections (produce, dairy, etc.)</li>
              <li>• Check off items as you shop</li>
              <li>• Add custom items and quantities</li>
              <li>• Share lists with family members</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Pantry Management</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Keep track of what you have at home:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• Track pantry staples and inventory</li>
                <li>• Set expiration date reminders</li>
                <li>• Suggest meals based on available ingredients</li>
                <li>• Create shopping lists for missing items</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• Barcode scanning for easy entry</li>
                <li>• Categorize items by storage location</li>
                <li>• Track usage patterns</li>
                <li>• Reduce food waste with smart suggestions</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="text-orange-500" size={20} />
          Nutrition Tracking
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Nutritional Information</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Track key nutritional metrics:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Calories per meal and daily totals</li>
              <li>• Macronutrients (carbs, protein, fat)</li>
              <li>• Vitamins and minerals</li>
              <li>• Fiber and sugar content</li>
              <li>• Sodium and cholesterol levels</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Health Goals</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Align your meals with health objectives:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Set daily calorie targets</li>
              <li>• Track weight management goals</li>
              <li>• Monitor specific dietary requirements</li>
              <li>• Get suggestions for balanced nutrition</li>
              <li>• View progress over time</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="text-indigo-500" size={20} />
          Recipe Management
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Recipe Collection</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Build and organize your recipe library:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Add recipes manually or import from websites</li>
              <li>• Categorize by cuisine, meal type, or dietary needs</li>
              <li>• Rate and review your favorite recipes</li>
              <li>• Add personal notes and modifications</li>
              <li>• Share recipes with friends and family</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Cooking Features</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Enhance your cooking experience:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• Step-by-step cooking instructions</li>
                <li>• Built-in timers for each cooking step</li>
                <li>• Ingredient substitution suggestions</li>
                <li>• Scaling recipes for different serving sizes</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• Photo documentation of your dishes</li>
                <li>• Voice-guided cooking mode</li>
                <li>• Cooking tips and techniques</li>
                <li>• Equipment and tool recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users className="text-red-500" size={20} />
          Family & Dietary Preferences
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Family Planning</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Plan meals for the whole family:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Set individual dietary preferences</li>
              <li>• Plan kid-friendly meal options</li>
              <li>• Account for different portion sizes</li>
              <li>• Coordinate family meal times</li>
              <li>• Share planning responsibilities</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Dietary Restrictions</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Accommodate various dietary needs:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Vegetarian and vegan options</li>
              <li>• Gluten-free meal planning</li>
              <li>• Allergy-safe recipe filtering</li>
              <li>• Low-carb and keto meal plans</li>
              <li>• Custom dietary restriction settings</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Meal Planning Tips</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Start simple:</strong> Begin with planning just a few meals per week</p>
          <p>• <strong>Batch similar meals:</strong> Cook multiple portions of the same dish</p>
          <p>• <strong>Use seasonal ingredients:</strong> Plan around fresh, seasonal produce</p>
          <p>• <strong>Plan for leftovers:</strong> Intentionally cook extra for easy next-day meals</p>
          <p>• <strong>Keep backup options:</strong> Have quick, easy meals ready for busy days</p>
        </div>
      </Card>
    </div>
  );
}
