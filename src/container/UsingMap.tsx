type UserProps = {
  name: string;
  email: string;
  phone: number;
  isBoy: boolean;
  skills: any[];
};
const UsingMap = ({ name, email, phone, isBoy, skills }: UserProps) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{isBoy}</p>
      <p>
        {skills.map((skill, index) => {
          return <span key={index}>{skill}</span>;
        })}
      </p>
    </div>
  );
};
export default UsingMap;
