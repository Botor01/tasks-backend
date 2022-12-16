type UserProps = {
  id: number;
  name: string;
  lastName: string;
  nickName: string;
  birthDate: Date;
  email: string;
  password: string;
};

export class User {
  private id: number;
  private name: string;
  private lastName: string;
  private nickName: string;
  private birthDate: Date;
  private email: string;
  private password: string;

  constructor(props: UserProps) {
    const emailValidator =
      /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordValidator =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (props.nickName.length > 20) {
      throw new Error();
    }

    if (!emailValidator.test(props.email)) {
      throw new Error();
    }

    if (!passwordValidator.test(props.password)) {
      throw new Error();
    }

    this.id = props.id;
    this.name = props.name;
    this.lastName = props.lastName;
    this.nickName = props.nickName;
    this.birthDate = props.birthDate;
    this.email = props.email;
    this.password = props.password;
  }
}
