import { Routes, Route } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserPreferencesProvider } from './context/UserPreferencesContext';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <UserPreferencesProvider>
        <div className="d-flex flex-column min-vh-100">
          <Header />

          <main className="flex-grow-1">
            <ChatProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </ChatProvider>
          </main>

          <Footer />
        </div>
      </UserPreferencesProvider>
    </ThemeProvider>
  );
}

export default App;
