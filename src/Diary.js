import {React, useEffect, useState} from "react"
import firebase from "./firebase.js";

const Diary = () => {
    const [today, setToday] = useState("")
    const [foodEaten, setFoodEaten] = useState("")
    const [grattitude, setGrattitude] = useState("")
    const [diary, setDiary] = useState("")
    const [mood, setMood] = useState(3)
    const [energy, setEnergy] = useState(3)

    const updateDiary = (e) => {
        e.preventDefault();
        const diaryRef = firebase.database().ref("diaries/" + today);
        const diaryItem = {
            title: today,
            energy: energy,
            mood: mood,
            foodEaten: foodEaten,
            grattitude: grattitude,
            diaryText: diary
        }
        diaryRef.set(diaryItem)
    }

    useEffect(() => {
        let today_date = new Date()
        let dd = today_date.getDate()
        let mm = today_date.getMonth();
        let yyyy = today_date.getFullYear();

        setToday(yyyy + "-" + mm + "-" + dd)
    });

    return (
        <form onSubmit={(event) => updateDiary(event)} class="card p-3 mt-5">
            <h1>Diary for {today}</h1>
            <div className="row justify-content-start">
                <div className="col-12 col-md-6 p-4">
                    <h5>Hur har ditt humör varit idag?</h5>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setMood(1)} className="form-check-input" type="radio" name="mood" id="inlineRadio1" value="1" />
                        <label className="form-check-label" for="inlineRadio1">Superdåligt</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setMood(2)} className="form-check-input" type="radio" name="mood" id="inlineRadio2" value="2" />
                        <label className="form-check-label" for="inlineRadio2">Inte bra</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setMood(3)} className="form-check-input" type="radio" name="mood" id="inlineRadio3" value="3" />
                        <label className="form-check-label" for="inlineRadio3">Helt ok</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setMood(4)} className="form-check-input" type="radio" name="mood" id="inlineRadio2" value="4" />
                        <label className="form-check-label" for="inlineRadio2">Bra</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setMood(5)} className="form-check-input" type="radio" name="mood" id="inlineRadio3" value="5" />
                        <label className="form-check-label" for="inlineRadio3">Superbra</label>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-4">
                    <h5>Hur har din energi varit idag?</h5>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setEnergy(1)} className="form-check-input" type="radio" name="energy" id="inlineRadio1" value="1" />
                        <label className="form-check-label" for="inlineRadio1">Superdåligt</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setEnergy(2)} className="form-check-input" type="radio" name="energy" id="inlineRadio2" value="2" />
                        <label className="form-check-label" for="inlineRadio2">Inte bra</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setEnergy(3)} className="form-check-input" type="radio" name="energy" id="inlineRadio3" value="3" />
                        <label className="form-check-label" for="inlineRadio3">Helt ok</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setEnergy(4)} className="form-check-input" type="radio" name="energy" id="inlineRadio2" value="4" />
                        <label className="form-check-label" for="inlineRadio2">Bra</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input onChange={() => setEnergy(5)} className="form-check-input" type="radio" name="energy" id="inlineRadio3" value="5" />
                        <label className="form-check-label" for="inlineRadio3">Superbra</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="food">Food eaten today</label>
                    <textarea onChange={(e) => setFoodEaten(e.target.value)} className="form-control" id="food" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="grattitude">Grattitude</label>
                    <textarea onChange={(e) => setGrattitude(e.target.value)} className="form-control" id="grattitude" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="diary">Dagbok</label>
                    <textarea onChange={(e) => setDiary(e.target.value)} className="form-control" id="diary" rows="6"></textarea>
            </div>
            <button class="btn btn-primary btn-lg">
                UPPDATERA
            </button>
        </form>
    )
}

export default Diary
