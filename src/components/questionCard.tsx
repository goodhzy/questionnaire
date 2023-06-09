import classes from './QuestionCard.module.css';
interface propType {
  id: number;
  title: string;
  isPublish: boolean;
  del: (i: number) => void;
}

export default function QuestionCard(props: propType): JSX.Element {
  const { id, title, isPublish, del } = props;
  return (
    <ul>
      <li className={classes.border}>
        {id}
        {title}
        {isPublish}
        <button
          onClick={() => {
            del(id);
          }}
        >
          删除问卷
        </button>
      </li>
    </ul>
  );
}
