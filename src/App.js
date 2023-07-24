import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Что такое JSX в React?',
    variants: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension'],
    correct: 0,
  },
  {
    title: 'Каким образом можно обновить состояние (state) компонента в React?',
    variants: ['Используя метод this.updateState()', 'Через функцию this.setState()', 'Присваивая новое значение this.state'],
    correct: 1,
  },
  {
    title: 'Что такое компоненты в React?',
    variants: [
      'Это структуры данных, используемые для хранения состояния приложения',
      'Это элементы HTML, которые используются для отображения контента в приложении',
      'Это функции, возвращающие React элементы или другие компоненты',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/">
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game( { step, question, onClickVariant } ) {

  const percentage = Math.round((step / questions.length * 100));

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
        <li onClick={() => onClickVariant(index)} key = {text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if(index == question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step != questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />)
        : (
          <Result correct={correct} />
        )}

    </div>
  );
}

export default App;
