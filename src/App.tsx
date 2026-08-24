import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocaleProvider } from './contexts/LocaleContext';
import { BookingProvider } from './contexts/BookingContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { Home } from './pages/Home';
import { Tours } from './pages/Tours';
import { TourDetail } from './pages/TourDetail';
import { Booking } from './pages/Booking';
import { BookingConfirmed } from './pages/BookingConfirmed';
import { PlanTrip } from './pages/PlanTrip';
import { Explore } from './pages/Explore';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <BookingProvider>
          <div className="flex min-h-screen w-full flex-col bg-sand-50">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-jungle-800 focus:px-4 focus:py-2 focus:text-sm focus:text-sand-50">
              
              Skip to content
            </a>
            <Header />
            <div id="main-content" className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/tours/:slug" element={<TourDetail />} />
                <Route path="/tours/:slug/book" element={<Booking />} />
                <Route path="/booking/confirmed" element={<BookingConfirmed />} />
                <Route path="/plan-your-trip" element={<PlanTrip />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
            <WhatsAppButton />
          </div>
        </BookingProvider>
      </LocaleProvider>
    </BrowserRouter>);

}