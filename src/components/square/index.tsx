import { AnimatedProps, animated } from '@react-spring/web'
import { CSSProperties, FC, useMemo } from 'react'

import styles from './styles.module.scss'

type Props = {
  background: string
  animatedStyle: AnimatedProps<{ style: CSSProperties }>
}

const Square: FC<Props> = ({ background, animatedStyle }) => {
  const style = useMemo(() => ({ background }), [background])

  return (
    <animated.li style={animatedStyle.style} className={styles.wrapper}>
      <div className={styles.squareInner}>
        <div style={style} className={styles.squareContent}>
          Square
        </div>
      </div>
    </animated.li>
  )
}

export default Square
