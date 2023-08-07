import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'

const Wordcounter = (props: any) => {

    const [displayText, setDisplayText] = useState("");

    const [charCount, setCharCount] = useState(0);

    const [wordCount, setWordCount] = useState(0);




    useEffect(() => {
        setCharCount(displayText.length);
        const words = (displayText.trim().split(/\s+/))
        setWordCount(words.length);
    }, [displayText]);




    const onchnagetext = (event: any) => {
        setDisplayText(event.target.value);
    }

    const textToUppercase = () => {
        setDisplayText(displayText.toUpperCase());
    }

    const textToLowercase = () => {
        setDisplayText(displayText.toLowerCase());
    }
    
    const textClear = () => {
        setDisplayText("");
    }

    const clearSpace = () => {
        let newText = displayText.split(/[ ]+/);
        setDisplayText(newText.join(" "));
    }




    return (
        <div>
            <FloatingLabel controlId="floatingTextarea2" label="Enter Text..." style={{ width: '90%', display: 'flex', justifyContent: "center", margin: '0 auto' }}>

                <Form.Control as="textarea" style={{ height: '100px' }} value={displayText} onChange={(event) => onchnagetext(event)} />

            </FloatingLabel>

            <div style={{ display: 'flex', justifyContent: "center", margin: '20px' }}>
                <Button style={{ marginRight: '15px' }} onClick={textToUppercase}>Text toUpperCase</Button>
                <Button style={{ marginRight: '15px' }} onClick={textToLowercase}>Text LowerCase</Button>
                <Button style={{ marginRight: '15px' }} onClick={textClear}>Clear text</Button>
                <Button style={{ marginRight: '15px' }} onClick={clearSpace}>Clear Spaces</Button>
            </div>
            <p style={{ textAlign: 'center' }}>{`Character Count: ${charCount} and Word Count is ${wordCount}`}</p>
            <h4 style={{ textAlign: "center" }}>Preview <br /> {displayText}</h4>

        </div>
    );
}

export default Wordcounter
