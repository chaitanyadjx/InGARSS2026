# Data Folder - InGARSS 2026

This folder contains all the content for the InGARSS 2026 website pages in JSON format. **Changes made to these JSON files will automatically appear on the website** after rebuilding or in development mode.

## ✅ How It Works

All page components now import their content from these JSON files. When you edit a JSON file and save it:
- **In Development** (`npm run dev`): Changes appear immediately with hot reload
- **In Production**: Run `npm run build` to rebuild the site with new content

## Structure

Each page has its own JSON file containing all the text content, links, and data structures used on that page.

### Available Data Files

- **[home.json](home.json)** - Homepage content including purpose, venue, quick links, and invitation sections
- **[speaker.json](speaker.json)** - Speaker and committee chair information with images
- **[cfp.json](cfp.json)** - Call for Papers tracks and descriptions
- **[authors.json](authors.json)** - Author guidelines, templates, page limits, review process, and publication details
- **[dates.json](dates.json)** - Important dates and deadlines
- **[ieee-guidelines.json](ieee-guidelines.json)** - IEEE guidelines and external resource links
- **[submit.json](submit.json)** - Submission checklist, guidelines, and banner information
- **[committee.json](committee.json)** - Complete committee structure with all members
- **[registration.json](registration.json)** - Registration information (currently TBD)

## 📝 Quick Start: Editing Content

### Example 1: Changing a Date

Open [dates.json](dates.json) and find the date you want to change:

```json
{
  "label": "CRITICAL DEADLINE",
  "value": "30 May 2026",
  "desc": "Paper Submission Deadline",
  "variant": "major"
}
```

Change the `value` to update the date:
```json
{
  "label": "CRITICAL DEADLINE",
  "value": "15 June 2026",
  "desc": "Paper Submission Deadline",
  "variant": "major"
}
```

### Example 2: Adding a Speaker

Open [speaker.json](speaker.json) and add a new member to any section:

```json
{
  "id": "generalChairs",
  "title": "General Chairs",
  "members": [
    {
      "name": "Existing Person",
      "affiliation": "Some University",
      "image": "https://..."
    },
    {
      "name": "New Person",
      "affiliation": "Another University",
      "image": "https://example.com/photo.jpg"
    }
  ]
}
```

### Example 3: Updating Text Content

Open [home.json](home.json) to change homepage text:

```json
{
  "sections": {
    "purpose": {
      "leftColumn": {
        "title": "Your New Title Here",
        "description": "Your updated description with <strong>bold text</strong>"
      }
    }
  }
}
```

## Content Guidelines

### When editing JSON files:

1. **Keep Valid JSON** - Use proper quotes, commas, and brackets
   - ✅ Good: `"title": "Hello"`
   - ❌ Bad: `title: "Hello"` or `"title": 'Hello'`

2. **HTML in Text** - Use HTML tags for formatting where needed
   ```json
   "text": "This is <strong>bold</strong> and <em>italic</em>"
   ```

3. **Test After Changes** - Always test in development mode or rebuild
   ```bash
   npm run dev
   # or
   npm run build
   ```

4. **Escape Quotes** - Use `\"` for quotes inside strings
   ```json
   "text": "He said \"Hello\" to me"
   ```

5. **No Trailing Commas** - Remove commas after the last item
   ```json
   {
     "name": "John",
     "age": 30
   }  // ← No comma after 30
   ```

### Common JSON Errors to Avoid

❌ **Missing comma between items:**
```json
{
  "name": "John"
  "age": 30  // Missing comma after "John"
}
```

✅ **Correct:**
```json
{
  "name": "John",
  "age": 30
}
```

❌ **Trailing comma at the end:**
```json
{
  "name": "John",
  "age": 30,  // Remove this comma
}
```

✅ **Correct:**
```json
{
  "name": "John",
  "age": 30
}
```

## Validation Tools

Before committing changes, validate your JSON:

1. **VS Code**: Install "JSON Validator" extension
2. **Online**: Use [JSONLint.com](https://jsonlint.com/)
3. **Command Line**: 
   ```bash
   # Check if JSON is valid
   node -e "JSON.parse(require('fs').readFileSync('src/data/home.json', 'utf8'))"
   ```

## Benefits

✅ **Easy Editing** - Non-developers can edit content without touching React components  
✅ **Centralized Content** - All text and data in one place per page  
✅ **Version Control** - Track content changes separately from code changes  
✅ **Multi-language Ready** - Easy to extend for translations (e.g., home.en.json, home.hi.json)  
✅ **Type Safety** - Can generate TypeScript types from JSON schema if needed  

## Development Workflow

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Edit JSON files** - Make your changes and save

3. **View changes** - Refresh browser to see updates

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Future Enhancements

- [ ] Add TypeScript type definitions
- [ ] Create validation schema (JSON Schema or Zod)
- [ ] Add multi-language support structure
- [ ] Create a simple CMS or admin panel for editing
- [ ] Add image management system

## Need Help?

- **JSON Tutorial**: [Learn JSON in 10 Minutes](https://www.json.org/)
- **Validate JSON**: [JSONLint.com](https://jsonlint.com/)
- **VS Code JSON**: Use built-in JSON validation (shows red squiggly lines for errors)

---

**Last Updated:** January 23, 2026
