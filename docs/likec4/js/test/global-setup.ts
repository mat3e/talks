import { execSync } from 'node:child_process'

export default function () {
  execSync('likec4 gen model -o ./test/likec4-model.ts', { stdio: 'inherit' })
}
