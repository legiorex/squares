import styles from 'styles.module.scss'

import AddItem from 'components/add-item'
import RemoveItem from 'components/remove-item'

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <AddItem />
        <RemoveItem />
      </header>
      <div>Items</div>
    </div>
  )
}

export default App
