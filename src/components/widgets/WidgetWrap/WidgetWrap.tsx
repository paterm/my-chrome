import React from 'react'
import { Card, SvgIconProps } from '@mui/material'
import s from './WidgetWrap.module.scss'

interface WidgetWrapProps {
  title?: string
  children: React.ReactNode
  Icon?: React.ElementType<SvgIconProps>
}

const WidgetWrap: React.FC<WidgetWrapProps> = ({
  title,
  Icon,
  children,
}) => {
  return (
    <Card className={s.container}>
      {title && (
        <div className={s.header}>
          {Icon && <Icon className={s.icon} />}
          {title}
        </div>
      )}
      <div className={s.content}>
        {children}
      </div>
    </Card>
  )
}

export default WidgetWrap
