type UserProps = {
  userInfo: {
    name: string;
    email: string;
    phone: number;
    isBoy: boolean;
    skills: any[];
  };
};
const UsingObject = ({ userInfo }: UserProps) => {
  return (
    <div>
      <p>{userInfo.name}</p>
      <p>{userInfo.email}</p>
      <p>{userInfo.phone}</p>
      <p>{userInfo.isBoy}</p>
      <p>
        {userInfo.skills.map((skill, index) => {
          return <span key={index}>{skill}</span>;
        })}
      </p>
    </div>
  );
};
export default UsingObject;
