import {React, useEffect, useState} from "react"
import firebase from "./firebase.js"

const History = () => {
    const [diaries, setDiaries] = useState("");
    
    useEffect(() => {
        let diaryRef = firebase.database().ref('diaries');
    }, [])

    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    return (
        <div>
            <h1>History</h1>
            <div className="row">
            </div>
        </div>
    )
}

export default History

