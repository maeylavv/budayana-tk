import React from 'react';

export default function MultipleChoiceQuestion({ question, answersMapping = {}, onAnswer }) {
  const isPicture = question.type === 'picture_selection';
  const hasAnsweredFully = answersMapping.isCorrect === true;

  return (
    <div className={`question-options ${isPicture ? 'picture-grid' : ''}`}>
      {question.options.map((opt, idx) => {
        const label = String.fromCharCode(65 + idx); // A, B, C, D
        const text = isPicture ? opt.text : opt;
        const image = isPicture ? opt.image : null;
        const emoji = isPicture ? opt.emoji : null;

        const isCorrectOption = answersMapping.correctIndex === idx;
        const isWrongOption = (answersMapping.wrongIndices || []).includes(idx);

        let optionClasses = `option-btn ${isPicture ? 'picture-btn' : ''}`;
        if (isCorrectOption) optionClasses += ' correct-option';
        if (isWrongOption) optionClasses += ' wrong-option';

        return (
          <button
            key={idx}
            className={optionClasses}
            onClick={() => onAnswer(idx, idx === question.correctIndex)}
            disabled={hasAnsweredFully}
          >
            {!isPicture && <span className='option-label'>{label}</span>}

            {isPicture && (
              <>
                {emoji && (
                  <span className='option-emoji'>{emoji}</span>
                )}
                {!emoji && image && (
                  <img src={image} alt={text} className='option-img' onError={e => e.target.style.display = 'none'} />
                )}
                <span className='option-icon-label'>{text}</span>
              </>
            )}

            {!isPicture && (
              <span className='option-text'>{text}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
