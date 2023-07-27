export const addNumber = (phrase: string) => {
   const words = phrase.split(' ')
   const updatedWords = words.map(
      (word) => word + Math.floor(Math.random() * 100),
   )

   return updatedWords.join(', ')
}

