import Hero from "../components/Hero";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import Posts from "./Posts";
import Empty from "../components/Empty";

const Home = ({articles}) => {
  return (
    <div>
      <Hero />
        {
            articles.length === 0 ? <Empty /> : <Posts articles={articles} />
        }
        {
            articles.length > 6 &&  <ReadMore />
        }
      <Footer />
    </div>
  );
};

export default Home;
