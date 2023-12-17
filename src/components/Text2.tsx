import type { ReactNode, ReactElement } from "react"

const Text2 = ({children}: {children: ReactNode}): ReactElement => (
  <span className="text-xs lg:text-base">{children}</span>
)

export default Text2
