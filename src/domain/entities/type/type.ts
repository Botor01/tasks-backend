type TypeProps = {
  id?: number;
  name: string;
};

export class Type {
  private id?: number;
  private name: string;

  constructor(props: TypeProps) {
    if (props.name.length > 15 || props.name.length < 3) {
      throw new Error();
    }

    this.id = props.id;
    this.name = props.name;
  }
}
