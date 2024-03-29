import React, { useEffect } from 'react'
import GoogleKeepService from '@services/google-keep.service'
import WidgetWrap from '@components/widgets/WidgetWrap'
import { useRecoilValue } from 'recoil'
import { googleTokenState } from '@state/global.state'
import { EWidgetID } from '@const/widgetName';


const GoogleKeep: React.FC = () => {
  const googleToken = useRecoilValue(googleTokenState)

  useEffect(() => {
    if (!googleToken) {
      console.error('Токен не был установлен')
      return
    }
    console.log('googleToken', googleToken)
    const googleKeepService = new GoogleKeepService(googleToken)
    googleKeepService.get()
  }, [googleToken])

  return (
    <WidgetWrap
      title="Google Keep"
      widgetID={EWidgetID.GOOGLE_KEEP}
    >
      <div>GoogleKeep</div>
    </WidgetWrap>
  )
}

export default GoogleKeep
