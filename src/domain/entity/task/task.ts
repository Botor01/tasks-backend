import { compareDates } from '../../../utils';

type TaskProps = {
  id: number;
  title: string;
  type: string;
  description: string;
  dueDate: Date;
};

export class Task {
  private id: number;
  private title: string;
  private type: string;
  private description: string;
  private dueDate: Date;

  constructor(props: TaskProps) {
    if (props.title.length > 30) {
      throw new Error();
    }

    if (props.description.length > 300) {
      throw new Error();
    }

    // const dueDate = props.dueDate.setHours(3, 0, 0, 0);

    const currentDate = new Date();

    console.log(compareDates(currentDate, props.dueDate));

    if (compareDates(currentDate, props.dueDate)) {
      throw new Error();
    }

    this.id = props.id;
    this.title = props.title;
    this.type = props.type;
    this.description = props.description;
    this.dueDate = props.dueDate;
  }
}
