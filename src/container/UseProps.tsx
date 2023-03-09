import CustomUser from '../components/CustomUser';
const UseProps = () => {
  return (
    <div>
      <CustomUser
        name="Jakir"
        email="jakir@gmail.com"
        phone={8724732}
        isBoy={true}
      />
      <CustomUser
        name="Jakia"
        email="jakia@gmail.com"
        phone={843432}
        isBoy={false}
      />
    </div>
  );
};
export default UseProps;
