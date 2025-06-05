import {Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import IdeaInput from "./pages/IdeaInput";
import AgentProgress from "./pages/AgentProgress";
import ResultsDashboard from "./pages/ResultsDashboard";
import PitchView from "./pages/PitchView";
import AskPal from "./pages/AskPal";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
  <div className="flex flex-col min-h-screen bg-gray-50">
       <ScrollToTop />
       <main className="flex-1">
         <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/idea" element={<IdeaInput />} />
           <Route path="/progress" element={<AgentProgress />} />
           <Route path="/dashboard" element={<ResultsDashboard />} />
           <Route path="/pitch" element={<PitchView />} />
           <Route path="/ask" element={<AskPal />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </main>
        <Footer />
   </div>
  );
}

export default App;