import { useState } from "react"

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
]

export default function App(){
    return <Steps/>
}

function Steps(){
    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)

    function handleNext(){
        // Following is the safe way to call setMethoud 
        // in React.
        if (step < 3) setStep((s) => s + 1)
    }

    function handlePrevious(){
        if (step > 1) setStep((s) => s - 1)
    }

    return (
        <>  
            <button className="close" onClick={() => setIsOpen((is) => !is) }>❌</button>
            {
                isOpen? (
                    <div className="steps">    
                        <div className="numbers">
                            <div className={step >= 1 ? "active":""}>1</div>
                            <div className={step >= 2 ? "active":""}>2</div>
                            <div className={step >= 3 ? "active":""}>3</div>
                        </div>

                        <StepMessage step={step}>
                            {/*This is a child of the div and is paassed to 
                            be read by the component called! */}
                            {messages[step - 1]}
                        </StepMessage>

                        <div className="buttons">
                            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
                                <span>👈</span> Previous
                            </Button>

                            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
                                <span>👉</span> Next
                            </Button>
                        </div>
                    </div>
                ):
                    <div></div>
            }
            
        </>
    )
}

function StepMessage({ step, children}){
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    )
}

function Button({textColor, bgColor, onClick, children}){
    return (
        <button style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>
            {children}
        </button>
    )
}