const fs = require('fs')
const path = require('path')
const parsePdf = require('pdf-parse/lib/pdf-parse')

async function main() {
  const input = process.argv[2]
  const output = process.argv[3]

  if (!input || !output) {
    console.error('Usage: node scripts/extract-pdf.cjs <input.pdf> <output.txt>')
    process.exit(1)
  }

  const absoluteInput = path.resolve(input)
  const absoluteOutput = path.resolve(output)

  const dataBuffer = fs.readFileSync(absoluteInput)
  const data = await parsePdf(dataBuffer)

  fs.writeFileSync(absoluteOutput, data.text || '', 'utf8')

  console.log(`Extracted ${data.numpages} pages -> ${absoluteOutput}`)
  console.log(`Chars: ${(data.text || '').length}`)
  console.log('--- Preview ---')
  console.log((data.text || '').slice(0, 3000))
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
