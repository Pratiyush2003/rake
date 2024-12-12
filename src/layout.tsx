import { useEffect, useState } from 'react';
import './layout.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import routes from './router';
import ModalWrapper from './components/Modals';
import { useToggleChatSection } from './hooks/useToggleChatSection';
import ResponsiveNavBar from './components/Sidebar/ResponsiveNavBar';

function App() {
  const { isChatModelOpen, toggleChatSection } = useToggleChatSection();
  const currentWidth = window.innerWidth;
  const [isTabletScreen, setIsTabletScreen] = useState<boolean>(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(
    currentWidth > 768 ? true : false,
  );
  const toggleSidebar = () => {
    if (currentWidth > 576 && currentWidth < 768) {
      setIsTabletScreen(!isTabletScreen);
    } else {
      setIsSideBarOpen(!isSideBarOpen);
    }
  };
  useEffect(() => {
    currentWidth < 576 && isChatModelOpen && toggleChatSection();
  }, []);
  return (
    <BrowserRouter>
      <main
        className={`h-full w-full overflow-hidden bg-rake_background-500 font-normal leading-snug
        tracking-[-0.02em]`}
      >
        <Header toggleSideBar={toggleSidebar} />
        <section className='relative flex h-full w-full flex-row overflow-hidden'>
          <Sidebar
            isSideBarOpen={isSideBarOpen}
            isTabletScreen={isTabletScreen}
          />
          {!isChatModelOpen && <ResponsiveNavBar toggleSideBar={toggleSidebar} />}
          <section className='m-0 h-[calc(100%-64px)] w-full grow-0 flex-col overflow-y-auto'>
            <div className='h-auto w-full'>
              <Routes>
                {routes.map((route, index) => (
                  <Route path={route.path} element={route.element} errorElement={route.errorElement} key={index} />
                ))}
              </Routes>
            </div>
            <Footer />
          </section>
          {isChatModelOpen && <Chat />}
        </section>
        <ModalWrapper />
      </main>
    </BrowserRouter>
  );
}
export default App;
