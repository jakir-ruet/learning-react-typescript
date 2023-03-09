type UserProps = {
  name: string;
  email: string;
  phone: number;
  isBoy: boolean;
  skills: any[];
};

const CustomUser = ({ name, email, phone, isBoy, skills }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{email}</h3>
      <h4>{phone}</h4>
      <h4>{isBoy ? <p>He is Boy</p> : <p>She is Girl</p>}</h4>
      <h4>{skills}</h4>
    </div>
  );
};
export default CustomUser;
