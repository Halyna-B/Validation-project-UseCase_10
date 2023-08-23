"# String Validator Application

## Application Description

This application offers a user-friendly interface for validating strings based on specific criteria. Users can input their text into a dedicated field and, upon submission, the application will check its conformity to predetermined standards, offering instant feedback on the validity of the input.

## Regex Implementation Description

The core functionality of this application relies on a regular expression designed to validate strings based on a few parameters. The regex ensures that the string is within an acceptable length range and contains at least one uppercase letter, one lowercase letter, one digit, and one special character from a predefined list. Additionally, the regex checks for the absence of whitespace characters, ensuring a more refined input quality. It's optimized for speed and simplicity while guaranteeing a robust validation mechanism.

## How to Run the Developed Application Locally

1. Clone the repository to your local machine:
```js
   "git clone <https://github.com/Halyna-B/Validation-project-UseCase_10.git>" 
```

2. Navigate to the project directory:
```js
"cd Validation-project-UseCase_10\use_case_10"
```

3. Install the required dependencies:
```js
   "npm install" 
```

4. Start the development server:
```js
   "npm start" 
```

5. Open your browser and navigate to `http://localhost:3000`. The application should be running.

## How to Run the Test Function Locally

Once you have the application running locally:

1. In the application's UI, you will find a text input field.
2. Enter your string into this field.
3. Click the "Validate" button below the input field.
4. The validation result will be displayed right below the button, indicating whether the input meets the criteria or not.
