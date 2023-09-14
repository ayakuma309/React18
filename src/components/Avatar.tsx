import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export const Avatar = ({ children}: Props) => {
  return (
    <div style={{
      width: '30px',
      height: '30px',
      border: '1px solid black',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '30px',
      userSelect: 'none',
    }}>{children}</div>
  )
}
