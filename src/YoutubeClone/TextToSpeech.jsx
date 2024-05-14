import React, { Fragment } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 
import useClipboard from "react-use-clipboard";


const TexttoSpeech = ()=>{

    const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition(); 
    const [isCopy, setCopy] = useClipboard(transcript);
    if(!browserSupportsSpeechRecognition){
        return "browser not support useSpeechRecognition"
    }
    const startListening = ()=>{
        return SpeechRecognition.startListening({continuous:"true",language:"en-IN"});
    }
    const stopListening =()=>{
        return SpeechRecognition.stopListening()
    }    
    
    return(
        <Fragment>
        <h1>{transcript}</h1>
        <button onClick={startListening}>startListening</button>
        <button onClick={stopListening}>stopListening</button>
        <button onClick={setCopy}> {isCopy ? "Copied! 👍" : "Copy 👎"}</button>
        </Fragment>
    )
}


export default TexttoSpeech;



