import { remove } from 'fs-extra'
import 'dotenv/config'

await remove('build/assets')
