import { writable } from 'svelte/store'

import type { Question } from './types'

export const bgColor = writable('bg-gray-900')
export const viewedQuestions = writable<Question[]>([])
