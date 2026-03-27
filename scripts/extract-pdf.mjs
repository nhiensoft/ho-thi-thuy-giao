import fs from 'node:fs/promises'
import pdf from 'pdf-parse'

const input = process.argv[2]
const output = process.argv[3]

if (!input || !output) {
  console.error('Usage: node scripts/extract-pdf.mjs <input.pdf> <output.txt>')
  process.exit(1)
}

const buffer = await fs.readFile(input)
const data = await pdf(buffer)
await fs.writeFile(output, data.text || '', 'utf8')
console.log(`Extracted ${data.numpages} pages -> ${output}`)
console.log(`Chars: ${(data.text || '').length}`)
console.log('--- Preview ---')
console.log((data.text || '').slice(0, 2500))
