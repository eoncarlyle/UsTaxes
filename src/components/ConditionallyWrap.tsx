import React, {
  PropsWithChildren,
  FunctionComponent,
  ReactElement
} from 'react'

const ConditionallyWrap = ({
  condition,
  wrapper,
  children
}: PropsWithChildren<{
  condition: boolean
  wrapper: FunctionComponent<any>
  children: ReactElement
}>) => (condition ? wrapper(children) : children)

export default ConditionallyWrap
