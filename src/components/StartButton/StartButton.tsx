import { FC } from 'react'
import styles from './StartButton.module.css'
import { FaPlay, FaPause } from 'react-icons/fa'
import { IStartButton } from './start-button.interface'

const StartButton: FC<IStartButton> = ({ listening, ...props }) => {
   return (
      <button className={styles.button} {...props}>
         <div className={styles.icon}>
            {listening ? <FaPause /> : <FaPlay style={{marginLeft: '5'}} />}
         </div>
      </button>
   )
}

export default StartButton

