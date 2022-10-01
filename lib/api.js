import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const resourcesDirectory = join(process.cwd(), '_resources')

export function getMarkdownSlugs() {
  return fs.readdirSync(resourcesDirectory)
}

export function getMarkdownBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(resourcesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllMarkdowns(fields) {
  const slugs = getMarkdownSlugs()
  const markdowns = slugs
    .map((slug) => getMarkdownBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((md1, md2) => (md1.date > md2.date ? -1 : 1))
  return markdowns
}
