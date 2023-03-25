import { Icon24UserOutline } from '@vkontakte/icons'
import { Panel } from '@vkontakte/vkui'
import styles from './userPanel.module.css'

export const UserPanel = ({ id }) => (
  <Panel centered id={id}>
    <div className={styles.panelContent}>
      <Icon24UserOutline />
      <span>{id}</span>
    </div>
  </Panel>
)
