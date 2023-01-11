import React from 'react'
import { Paper, SvgIconProps } from '@mui/material'
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
    <Paper
      elevation={24}
      className={s.container}
      sx={{ borderRadius: '24px' }}
    >
      {title && (
        <div className={s.header}>
          {Icon && <Icon className={s.icon} />}
          {title}
        </div>
      )}
      <div className={s.content}>
        {children}
      </div>
    </Paper>
  )
}

export default WidgetWrap
