import { useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import produce from 'immer';
import classes from './index.module.scss';
const questionInit = [
  {
    id: 1,
    title: '问卷1',
    isPublish: true
  },
  {
    id: 2,
    title: '问卷2',
    isPublish: true
  },
  {
    id: 3,
    title: '问卷3',
    isPublish: true
  }
];

export default function List(): JSX.Element {
  const [questionList, setQuestionList] = useState(questionInit);
  const add = (): void => {
    const question = {
      id: questionList.length + 1,
      title: '问卷',
      isPublish: false
    };
    setQuestionList(
      produce((draft: any[]) => {
        draft.push(question);
      })
    );
  };
  const del = (i: number): void => {
    setQuestionList(
      produce((draft: any[]) => {
        draft.splice(i - 1, 1);
      })
    );
  };
  return (
    <div>
      {questionList.map((q, i) => (
        <QuestionCard id={q.id} title={q.title} isPublish={q.isPublish} del={del} key={q.id}></QuestionCard>
      ))}
      <button className={classes.border} onClick={add}>
        添加问卷
      </button>
    </div>
  );
}
