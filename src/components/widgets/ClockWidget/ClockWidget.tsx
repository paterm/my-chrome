import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import s from './ClockWidget.module.scss'
import { Box } from '@mui/material'
import cn from 'classnames'

interface ClockWidgetProps {
  size?: 's' | 'm' | 'l'
}


const ClockWidget: React.FC<ClockWidgetProps> = ({ size = 'l' }) => {
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(null)

  /**
   * Устанавливает новый объект Dayjs в useState раз в секунду
   */
  useEffect(() => {
    setCurrentDate(dayjs())
    const interval = setInterval(() => {
      setCurrentDate(dayjs())
    }, 1000);
    return () => clearInterval(interval);
  }, [setCurrentDate]);

  return (
    <Box className={cn(s.clock, { [`size-${size}`]: true })}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 80"
        preserveAspectRatio="xMinYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <text
          x="50%"
          y="55"
          fontSize="75"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          {currentDate?.format('HH:mm')}
        </text>
        <text
          x="50%"
          y="75"
          fontSize="15"
          fill="white"
          textAnchor="middle"
        >
          {currentDate?.locale('ru').format('D MMMM YYYY [г.]')}
        </text>
      </svg>
    </Box>
  );
};

export default ClockWidget;
