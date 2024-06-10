import type { InjectionKey } from 'vue'

const provideKey = Symbol('provideKey') as InjectionKey<Record<string, any>>

export { provideKey }