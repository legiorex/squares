import styles from 'styles.module.scss'

import AddItem from 'components/add-item'
import List from 'components/list'
import RemoveItem from 'components/remove-item'

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <AddItem />
        <RemoveItem />
      </header>
      <List />
    </div>
  )
}

export default App
