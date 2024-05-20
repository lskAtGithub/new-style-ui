import { makeInstall } from "@new-style-ui/utils"
import components from "./components"
import '@new-style-ui/theme/index.css'

const installer = makeInstall(components)

export * from '@new-style-ui/components'
export default installer