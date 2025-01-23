## Description
It provides an API endpoint to analyze code and return mock test cases and suggestions.

## API Endpoint
POST /api/test-code

## Request Body:
json { "code": "", "language": "" }
## Response:
json { "testCases": ["Test case 1: …", "Test case 2: …"], "suggestions": "Add error handling for invalid input." }
## Example Request
bash curl -X POST http://localhost:5000/api/test-code \ -H "Content-Type: application/json" \ -d '{"code": "function test() { return true; }", "language": "JavaScript"}' 

### Installation--->

## 1. Clone the repository:
bash git clone cd ai-driven-code-testing-tool
## 2. Install dependencies:
bash npm install
## 3. Set up the project:
mkdir ai-driven-code-testing-tool
cd ai-driven-code-testing-tool
npm init -y
npm install express
## 4. Create the server:
Create a file named server.js and add the following code from that[code included]
## 5. Create Frontend:
Create the index.html. [Code included]
## 6. Start the server:
bash npm start
## 7. Publish to GitHub:
Create a GitHub repository and push the code. 

GitHub Repository
You can find the code in the GitHub repository:
