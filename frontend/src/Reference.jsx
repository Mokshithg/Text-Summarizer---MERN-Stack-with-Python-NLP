
const Reference = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 border border-gray-300">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">References</h1>
        <p className="text-gray-600 mb-4 text-center font-medium">
            This project utilized several libraries and frameworks to achieve its functionality. Below are the key references:
        </p>
        <br/>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-start">Python Modules</h2>
        <ul className="list-disc list-inside text-gray-600 ">
            <li className="mb-2">
            <strong>Transformers:</strong> A state-of-the-art Natural Language Processing library by Hugging Face, used for text summarization models.
            </li>
            <li className="mb-2">
            <strong>Torch:</strong> An open-source machine learning library used for implementing deep learning models.
            </li>
            <li className="mb-2">
            <strong>PythonShell:</strong> A Node.js library to run Python scripts, used for integrating Python-based text summarization in the Node.js backend.
            </li>
        </ul>
        <br/>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-start">JavaScript Libraries</h2>
        <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">
            <strong>React:</strong> A JavaScript library for building user interfaces, used to create the frontend of the application.
            </li>
            <li className="mb-2">
            <strong>Express:</strong> A minimal and flexible Node.js web application framework, used to build the backend server.
            </li>
            <li className="mb-2">
            <strong>Tailwind CSS:</strong> A utility-first CSS framework, used for styling the application.
            </li>
        </ul>
        <br/>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-start">Other References</h2>
        <ul className="list-disc list-inside text-gray-600">
            <li className="mb-2">
            <strong>MDN Web Docs:</strong> Comprehensive resource for web developers, used for general web development references.
            </li>
            <li className="mb-2">
            <strong>Stack Overflow:</strong> A community-driven question and answer site for programming, used to solve specific coding issues.
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Reference