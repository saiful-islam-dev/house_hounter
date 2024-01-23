import Banear from "../../component/Banear/Banear";
import Card from "../../component/Card/Card";
import Container from "../../component/Shared/Container";

const Home = () => {
  return (
    <Container>
        <Banear />
      <div className="py-8">
        <p className="text-3xl font-semibold">Browse homes in Houston,</p>
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5  gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Container>
  );
};

export default Home;
