

const RecapComponent = ({userResponses, questions}) => {

  const length = userResponses.length;


  return (
    <div className={`${length> 0 ? 'block' : 'hidden'} ml-4 p-4 bg-white shadow rounded`}>
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Vos Réponses</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index} className={`${userResponses[index] ? 'block' : 'hidden'} flex flex-col gap-2 mb-2`}>
            <span className="text-gray-700 font-bold">{question}</span>
            <span className={`text-md`}>
              {userResponses[index]?.answer}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecapComponent;