import { useState } from 'react';
import { isValidString } from '../../helpers';

export const RegexValidator = () => {
    const [inputValue, setInputValue] = useState('');
    const [validationResult, setValidationResult] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = () =>  {
        const result = isValidString(inputValue, 30);
        setValidationResult(result);
    }

    return (
        <div className="validator-container">
            <input type="text" placeholder="Enter your text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Validate</button>
            {validationResult !== null && (
                <p valid={validationResult.toString()}>{validationResult ? "Valid input" : "Invalid input"}</p>
            )}
        </div>
    );
};
