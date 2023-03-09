import CustomUser from '../components/CustomUser';
const UseProps = () => {
  return (
    <div>
      <CustomUser
        name="Jakir"
        email="jakir@gmail.com"
        phone={8724732}
        isBoy={true}
        skills={['html', 45, 'JavaScript']}
      />
    </div>
  );
};
export default UseProps;
