const { promises: fs } = require('fs')

async function writeFileOn(filePath, content) {
  try {
    const fileStats = async (p) => {
      const stats = await fs.stat(p)
      return Object.keys(stats).length > 0
    }

    const fileExists = await fileStats(filePath)

    if (!fileExists) {
      fs.writeFile(filePath, content)
      console.log('📰 Writing file...', filePath)
    } else {
      console.error('⚠ File already exists: ', filePath)
    }
  } catch (error) {
    throw new Error('Unable to write markdown file', error)
  }
}

async function transformMarkdown(payload, adapter) {
  let transformedMd = ''
  const md = payload.body_markdown
  const content = md.replace(/^---$.*^---$/ms, '').trim()
  const delimiter = '---'
  const frontmatter = Object.entries(adapter.transformFrontMatter(payload))

  transformedMd += `${delimiter}\n`

  // eslint-disable-next-line no-restricted-syntax
  for (const [k, v] of frontmatter) {
    transformedMd += `${k}: ${v}\n`
  }

  transformedMd += `${delimiter}\n`
  transformedMd += content
  return transformedMd
}

module.exports = { writeFileOn, transformMarkdown }