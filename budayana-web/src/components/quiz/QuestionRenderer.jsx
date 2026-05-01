import React from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import DragDropQuestion from './DragDropQuestion';
import OpinionReasonQuestion from './OpinionReasonQuestion';
import SentenceArrangementDND from './SentenceArrangementDND';

export default function QuestionRenderer({ question, answersMapping, onAnswer }) {
  if (question.type === 'multiple_choice' || question.type === 'picture_selection') {
    return (
      <MultipleChoiceQuestion 
        question={question} 
        answersMapping={answersMapping || {}} 
        onAnswer={onAnswer} 
      />
    );
  } else if (question.type === 'drag_drop') {
    return (
      <DragDropQuestion 
        question={question}
        answersMapping={answersMapping || {}}
        onAnswer={onAnswer}
      />
    );
  } else if (question.type === 'opinion_reason') {
    return (
      <OpinionReasonQuestion
        question={question}
        answersMapping={answersMapping || {}}
        onAnswer={onAnswer}
      />
    );
  } else if (question.type === 'drag_drop_sentence') {
    return (
      <SentenceArrangementDND
        question={question}
        answersMapping={answersMapping || {}}
        onAnswer={onAnswer}
      />
    );
  }
  return <div>Tipe pertanyaan tidak dikenal</div>;
}
