import { FC } from 'react'
import styles from './App.module.css'
import Speech from './components/Speech/Speech'

const App: FC = () => {
   return (
      <div className={styles.fixed}>
         <div className={styles.container}>
            <Speech />
         </div>
      </div>
   )
}

export default App

