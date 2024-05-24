import { makeInstall } from "@new-style-ui/utils"
import components from "./components"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import '@new-style-ui/theme/dist/index.css'

library.add(fas)
const installer = makeInstall(components)

export * from '@new-style-ui/components'
export default installer