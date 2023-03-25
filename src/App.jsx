import { useState } from 'react'
import {
  View, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol,
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import { AppTabbar } from './components/AppTabbar/AppTabbar'
import { UserPanel } from './components/Panels/UserPanel'

export const App = () => {
  const [currentPanel, setCurrentPanel] = useState('UserOne')
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol aria-multiline>
              <View activePanel={currentPanel}>
                <UserPanel id="UserOne" />
                <UserPanel id="UserTwo" />
                <UserPanel id="UserThree" />
              </View>
              <AppTabbar setCurrentPanel={setCurrentPanel} currentPanel={currentPanel} />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
