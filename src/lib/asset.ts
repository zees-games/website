import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const memo = new Map<string, string>()

/**
 * A root-relative path into `public/` with `?v=<content hash>` appended.
 * Images are served with a week-long cache (Cloudflare and browsers), so a
 * changed cover or map shot only shows up because its URL changed. A file
 * that does not exist keeps its bare path.
 */
export function Asset(path: string): string {
  let url = memo.get(path)
  if (url === undefined) {
    try {
      const hash = createHash('sha1').update(readFileSync(join(process.cwd(), 'public', path))).digest('hex').slice(0, 10)
      url = `${path}?v=${hash}`
    } catch {
      url = path
    }
    memo.set(path, url)
  }
  return url
}
