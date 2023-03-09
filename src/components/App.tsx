import Nav from './Nav';
import Header from './Header';
import Products from './Products';
import Banner from './Banner';
import Article from './Article';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app h-full w-full">
      <Nav />
      <Header />
      <div className="rwd-width my-[120px] mx-auto grid gap-[120px]">
        <Products />
        <Banner />
        <Article />
      </div>
      <Footer />
    </div>
  );
};

export default App;
