import { getCurrentDate } from '../../../utils';

type TaskProps = {
  id: number;
  title: string;
  type: string;
  description: string;
  expirationDate: Date;
};

export class Task {
  private id: number;
  private title: string;
  private type: string;
  private description: string;
  private expirationDate: Date;

  constructor(props: TaskProps) {
    if (props.title.length > 30) {
      throw new Error();
    }

    if (props.description.length > 300) {
      throw new Error();
    }

    //Get current date and format to reset time to 0
    const currentDate = getCurrentDate();

    const isDueDateSameCurrentDate =
      currentDate.getTime() === props.expirationDate.getTime();

    const isDueDateBeforeCurrent =
      currentDate.getTime() > props.expirationDate.getTime();

    if (isDueDateSameCurrentDate || isDueDateBeforeCurrent) {
      throw new Error();
    }

    this.id = props.id;
    this.title = props.title;
    this.type = props.type;
    this.description = props.description;
    this.expirationDate = props.expirationDate;
  }

  get getId(): number {
    return this.id;
  }
}
