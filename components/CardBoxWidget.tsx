import { mdiCog } from '@mdi/js'
import React from 'react'
import { ColorKey, TrendType } from '../interfaces'
import { colorsText } from '../src/colors'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'
import CardBox from './CardBox'
import PillTagTrend from './PillTagTrend'

type Props = {
  number: number
  numberPrefix?: string
  numberSuffix?: string
  icon: string
  iconColor: ColorKey
  label: string
  trendLabel?: string
  trendType?: TrendType
  trendColor?: ColorKey
}

const CardBoxWidget = (props: Props) => {
  return (
    <CardBox>
      {props.trendLabel && props.trendType && props.trendColor && (
        <div className="flex items-center justify-between mb-3">
          <PillTagTrend
            label={props.trendLabel}
            type={props.trendType}
            color={props.trendColor}
            small
          />
          <BaseButton icon={mdiCog} color="lightDark" small />
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">{props.label}</h3>
          <h1 className="text-3xl leading-tight font-semibold">
            {props.numberPrefix}
            {props.number}
            {props.numberSuffix}
          </h1>
        </div>
        {props.icon && (
          <BaseIcon
            path={props.icon}
            size="48"
            w=""
            h="h-16"
            className={colorsText[props.iconColor]}
          />
        )}
      </div>
    </CardBox>
  )
}

export default CardBoxWidget
