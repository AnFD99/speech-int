import { FC, useState } from 'react'
import styles from './Speech.module.css'
import { addNumber } from '../../utils/addNumber'
import SpeechRecognition, {
   useSpeechRecognition,
} from 'react-speech-recognition'
import StartButton from '../StartButton/StartButton'

const Speech: FC = () => {
   const [message, setMessage] = useState<string>('')

   const commands = [
      {
         command: '*',
         callback: (spokenPhrase: string) => {
            setMessage(addNumber(spokenPhrase))
         },
      },
   ]

   const { listening } = useSpeechRecognition({ commands })

   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return <div>Ваш браузер не поддерживается</div>
   }

   const listenContinuously = () => {
      SpeechRecognition.startListening({
         continuous: false,
         language: 'ru',
      })
   }
   return (
      <div className={styles.container}>
         <div>
            <div className={styles.note}>
               {listening ? 'Говорите...' : 'Нажмите кнопку и говорите'}
            </div>
            <div className={styles.btns}>
               <StartButton
                  onClick={listenContinuously}
                  listening={listening}
               />
               <div
                  className={styles.stop}
                  onClick={SpeechRecognition.stopListening}
               >
                  Остановить
               </div>
            </div>
         </div>
         <div className={styles.text}>{message}</div>
      </div>
   )
}

export default Speech

