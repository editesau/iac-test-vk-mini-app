import { Icon24UserOutline } from '@vkontakte/icons'
import { Tabbar, TabbarItem } from '@vkontakte/vkui'

export const AppTabbar = ({ setCurrentPanel, currentPanel }) => (
  <Tabbar>
    <TabbarItem text="1" selected={currentPanel === 'UserOne'} onClick={() => setCurrentPanel('UserOne')}>
      <Icon24UserOutline />
    </TabbarItem>
    <TabbarItem text="2" selected={currentPanel === 'UserTwo'} onClick={() => setCurrentPanel('UserTwo')}>
      <Icon24UserOutline />
    </TabbarItem>
    <TabbarItem text="3" selected={currentPanel === 'UserThree'} onClick={() => setCurrentPanel('UserThree')}>
      <Icon24UserOutline />
    </TabbarItem>
  </Tabbar>
)
