import Header from "./components/Header";
import AllRoutes from "./routes/AllRoutes";
import Footer from './components/footer'
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
  <Header />
  <AllRoutes />
  <Footer />
</div>
  );
}

export default App;