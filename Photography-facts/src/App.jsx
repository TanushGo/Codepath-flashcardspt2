import { useState } from 'react'
import './App.css'
import NoteCard from './components/NoteCard.jsx'

function App() {
  const facts = [{"ques":"When was the first digital camera invented?","ans":"It was first invented in 1975 by Steven Sasson"},
  {"ques":"How many photographs are taken everyday?","ans":"There is no number for how many photos are taken a day. But, estimates suggest that more than 1 trillion photos are taken in a year."},
  {"ques":"When was the first color photograph taken?","ans":"In 1861, Thomas Sutton suggested the process to create the world’s first color image. The result of layering three separate images of red, green, and blue filters. "},
  {"ques":"What was the cost of the world's most expensive photo?","ans":"As of 2022, the most expensive photograph ever sold is Man Ray’s Le Violon d’Ingres. The original print from 1924 was auctioned by Christie’s in May 2022."},
  {"ques":"What is the most viewed photograph in history?","ans":"The most viewed photograph is the default wallpaper for Windows XP. The image named ‘Bliss”, captured by Charles O’Rear in 1996."},
  {"ques":"How many photos did the first digital camera with memory card store?","ans":"Fujifilm introduced the FUJIX DS-1P at Photokina in 1998. It had a capacity of 2MB, which could hold up to 10 photos."},
  {"ques":"What is the world's most expensive camera?","ans":"The most expensive camera is not the newest, nor is it the one with the most megapixels. Instead, it’s a Leica 0-Series No.105."},
  {"ques":"When was first image taken from Hale telescope?","ans":"Edwin Hubble recorded the first image through the Hale Telescope in January 1949."},
  {"ques":"Explain the origin of word photography?","ans":'The term "photography" comes from the Greek words "phōs" (light) and "graphē" (drawing), meaning "drawing with light."'},
  {"ques":"Why was the camera company called Kodak","ans":'The company, Kodak, was founded by George Eastman in 1888. When asked, Eastman claimed that the word “Kodak” had no meaning behind it. He said that the letter K seemed “a strong, incisive sort of letter.”'}];
  const [card, setCard] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const [correctAns, setCorrectAnswer] = useState('')
  
  const updateCardForward = (e) => {
    e.preventDefault();
    if (card==9){
      setCard(0);
    }
    else{
      setCard(card+1);
    }
    if (flipped)
    {
      setFlipped(!flipped);
    }
  }
  const updateFlipped = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
    
  } 
  const updateCardBackward = (e) => {
    if (card==0){
      setCard(9);
    }
    else{
      setCard(card-1);
    }
    if (flipped)
    {
      setFlipped(!flipped);
    }
  }
  const classFlipped = flipped ? 'flip-card flip' : 'flip-card';
  
  return (
  <div>
    <h3>Photography Aficionado</h3>
    <p>Learn and test your photography knowledge</p>
    <p>Number of Cards: 10</p>
    
    <div className= {classFlipped} onClick = {updateFlipped}>
    <NoteCard  {...facts[card]} />
    </div>
    
    <form >
    
    // we will fill this in soon!
    
    </form>

    <button type="submit" className="button submit" onClick={onCheckAnswer}>
    Check Answer
    </button>
    <button onClick={updateCardBackward}> Back </button>
    <button onClick={updateCardForward}> Next </button>
    

  </div>
  )
}

export default App
