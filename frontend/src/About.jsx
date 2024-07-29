
const About = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 border border-gray-300">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About This Project</h1>
          <p className="text-gray-600 mb-4 text-center font-medium  ">
            This project is a Text Summarizer application built using the MERN stack (MongoDB, Express, React, and Node.js). 
            The application allows users to input a block of text and receive a summarized version of that text.
          </p>
          <br/>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-start">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">User-friendly interface for inputting and summarizing text</li>
            <li className="mb-2">Real-time text summarization using a Python backend</li>
            <li className="mb-2">Loading indicator to show processing state</li>
          </ul>
          <br/>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-start">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">React for building the user interface</li>
            <li className="mb-2">Tailwind CSS for styling the application</li>
            <li className="mb-2">Express and Node.js for the backend server</li>
            <li className="mb-2">Python for text summarization processing</li>
          </ul>
          <br/>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-start">How It Works</h2>
          <p className="text-gray-600 mb-4 text-center">
            Users can input text into the provided textarea and click the Summarize button. The text is then sent to the backend server, 
            where a Python script processes it to generate a summary. The summarized text is then displayed on the screen.
          </p>
        </div>
    </div>
  )
}

export default About