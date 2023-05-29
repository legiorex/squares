import { FC, useMemo } from 'react'

import styles from './styles.module.scss'

type Props = {
  background: string
}

const Square: FC<Props> = ({ background }) => {
  const style = useMemo(() => ({ background }), [background])

  return (
    <li className={styles.wrapper}>
      <div className={styles.squareInner}>
        <div style={style} className={styles.squareContent}>
          Square
        </div>
      </div>
    </li>
  )
}

export default Square
