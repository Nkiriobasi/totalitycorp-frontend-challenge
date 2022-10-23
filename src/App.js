import { DreamersSpotlight, Nft101, BrowseByCategory, Footer, NewAndNotable, Hero, Navbar } from './containers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewAndNotable />
      <DreamersSpotlight />
      <Nft101 />
      <BrowseByCategory />
      <Footer />
    </div>
  );
}

export default App;
