import { ReactNode } from "react"

type Props = {
  children: ReactNode;
  isSelected?: boolean;
  onClick: (assignee: string) => void;
}

//なぜ設定しているのかというと?の場合,undefinedになるため初期値を設定する
export const Avatar = ({ children, isSelected = false, onClick}: Props) => {
  const border = isSelected ? '3px solid orange': '1px solid gray';
  return (
    <div style={{
      width: '30px',
      height: '30px',
      border,
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '30px',
      userSelect: 'none',
    }} onClick={()=> onClick(`${children}`)}>{children}</div>
  )
}
