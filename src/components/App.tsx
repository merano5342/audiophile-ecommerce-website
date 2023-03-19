import { ThemeProvider, useTheme } from 'next-themes';
import ThemeSwitch from 'src/hooks/ThemeSwitch';
import Nav from './Nav';
import Header from './Header';
import Products from './Products';
import Banner from './Banner';
import Article from './Article';
import Footer from './Footer';

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider attribute="class">
      <div className="app h-full w-full" data-mode="dark">
        <Nav />
        <Header />
        <div className="rwd-width my-[120px] mx-auto grid gap-[120px]">
          <ThemeSwitch />

          <Products />
          <Banner />
          <Article />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
