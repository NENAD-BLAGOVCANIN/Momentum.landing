import { Card } from "../../components/ui/card";
import { StickyNote, Search, Tag, Share2, FileText, Image } from "lucide-react";

export function Notes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Notes & Documentation</h1>
        <p className="text-muted-foreground text-lg">
          Capture ideas, create documentation, and organize your thoughts with our powerful note-taking system.
        </p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <StickyNote className="text-blue-500" size={20} />
          Creating Notes
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Note Types</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create different types of notes for various purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Quick Notes:</strong> Fast idea capture</li>
                <li>• <strong>Meeting Notes:</strong> Structured meeting documentation</li>
                <li>• <strong>Project Notes:</strong> Detailed project information</li>
                <li>• <strong>Personal Journal:</strong> Daily thoughts and reflections</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Research Notes:</strong> Information gathering</li>
                <li>• <strong>To-Do Lists:</strong> Action items and checklists</li>
                <li>• <strong>Reference Docs:</strong> Important information storage</li>
                <li>• <strong>Creative Writing:</strong> Stories, poems, ideas</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Rich Text Formatting</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Format your notes with powerful editing tools:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Text Styling:</strong> Bold, italic, underline</li>
                <li>• <strong>Headers:</strong> Multiple heading levels</li>
                <li>• <strong>Lists:</strong> Bulleted and numbered lists</li>
                <li>• <strong>Links:</strong> Web links and internal references</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Code Blocks:</strong> Syntax highlighting</li>
                <li>• <strong>Tables:</strong> Structured data presentation</li>
                <li>• <strong>Quotes:</strong> Blockquotes and citations</li>
                <li>• <strong>Markdown:</strong> Full markdown support</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Tag className="text-green-500" size={20} />
          Organization & Tagging
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Folders & Categories</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Organize notes into logical groups:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Create nested folder structures</li>
              <li>• Color-code different categories</li>
              <li>• Move notes between folders easily</li>
              <li>• Set default folders for quick access</li>
              <li>• Archive old notes to reduce clutter</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tags & Labels</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use tags for flexible organization:
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">#work</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">#ideas</span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs">#meeting</span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-xs">#important</span>
            </div>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Add multiple tags per note</li>
              <li>• Filter notes by tags</li>
              <li>• Create tag hierarchies</li>
              <li>• Auto-suggest existing tags</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Search className="text-purple-500" size={20} />
          Search & Discovery
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Powerful Search</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Find any note quickly with advanced search:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Full-text Search:</strong> Search within note content</li>
              <li>• <strong>Title Search:</strong> Find notes by title</li>
              <li>• <strong>Tag Search:</strong> Filter by specific tags</li>
              <li>• <strong>Date Range:</strong> Search by creation or modification date</li>
              <li>• <strong>Advanced Filters:</strong> Combine multiple search criteria</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Smart Suggestions</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Discover related content automatically:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Related notes based on content similarity</li>
              <li>• Recently accessed notes</li>
              <li>• Notes with similar tags</li>
              <li>• Frequently referenced notes</li>
              <li>• Notes from the same time period</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Image className="text-orange-500" size={20} />
          Media & Attachments
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Supported Media</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Enhance your notes with various media types:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• <strong>Images:</strong> Photos, screenshots, diagrams</li>
              <li>• <strong>Documents:</strong> PDFs, Word docs, spreadsheets</li>
              <li>• <strong>Audio:</strong> Voice recordings, music files</li>
              <li>• <strong>Video:</strong> Recordings, tutorials, clips</li>
              <li>• <strong>Links:</strong> Web pages, articles, resources</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Media Management</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Organize and manage your attachments:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Drag and drop file uploads</li>
              <li>• Image resizing and cropping</li>
              <li>• Audio playback controls</li>
              <li>• Video preview thumbnails</li>
              <li>• Attachment size optimization</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Share2 className="text-indigo-500" size={20} />
          Sharing & Collaboration
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Sharing Options</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Share your notes with others in various ways:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-sm space-y-1">
                <li>• <strong>Public Links:</strong> Share with anyone</li>
                <li>• <strong>Private Sharing:</strong> Invite specific people</li>
                <li>• <strong>Team Workspaces:</strong> Collaborative note spaces</li>
                <li>• <strong>Read-only Access:</strong> View without editing</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• <strong>Export Options:</strong> PDF, Word, Markdown</li>
                <li>• <strong>Print Formatting:</strong> Clean printable layouts</li>
                <li>• <strong>Email Sharing:</strong> Send notes via email</li>
                <li>• <strong>Social Sharing:</strong> Share to social platforms</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Real-time Collaboration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Work together on notes in real-time:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Live editing with multiple users</li>
              <li>• See who's currently viewing/editing</li>
              <li>• Comment and suggestion system</li>
              <li>• Version history and change tracking</li>
              <li>• Conflict resolution for simultaneous edits</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="text-red-500" size={20} />
          Templates & Automation
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Note Templates</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use pre-built templates for common note types:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Meeting notes template</li>
              <li>• Project planning template</li>
              <li>• Daily journal template</li>
              <li>• Research notes template</li>
              <li>• Custom template creation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Smart Features</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Automate common note-taking tasks:
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Auto-save as you type</li>
              <li>• Smart date/time insertion</li>
              <li>• Auto-linking to related notes</li>
              <li>• Spell check and grammar suggestions</li>
              <li>• Word count and reading time</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted">
        <h2 className="text-xl font-semibold mb-2">Note-Taking Best Practices</h2>
        <div className="space-y-2 text-sm">
          <p>• <strong>Consistent naming:</strong> Use clear, descriptive titles</p>
          <p>• <strong>Regular cleanup:</strong> Archive or delete outdated notes</p>
          <p>• <strong>Link related notes:</strong> Create connections between related content</p>
          <p>• <strong>Use templates:</strong> Standardize common note formats</p>
          <p>• <strong>Regular backups:</strong> Export important notes periodically</p>
        </div>
      </Card>
    </div>
  );
}
