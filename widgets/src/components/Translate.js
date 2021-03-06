import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="fiel">
                    <label> Enter Text </label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage} //mora da se poklapa sa nazivima koje smo definisali u Dropdown komponenti
            />
            <hr />
            <h3 className="ui header"> Output </h3>
            <Convert language={language} text={text} />
        </div>
    )
};

export default Translate;