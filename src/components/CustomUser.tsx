type UserProps = {
  name: string;
  email: string;
  phone: number;
  isBoy: boolean;
};

const CustomUser = ({ name, email, phone, isBoy }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{email}</h3>
      <h4>{phone}</h4>
      <h4>{isBoy ? <p>He is Boy</p> : <p>She is Girl</p>}</h4>
    </div>
  );
};
export default CustomUser;
