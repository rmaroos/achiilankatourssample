import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { getTourBySlug } from '../data/tours';
import { useBooking } from '../contexts/BookingContext';
import { useLocale } from '../contexts/LocaleContext';
import { BookingSteps } from '../components/booking/BookingSteps';
import { PriceSummary } from '../components/booking/PriceSummary';
import { StepDates } from '../components/booking/StepDates';
import { StepOptions } from '../components/booking/StepOptions';
import { StepDetails } from '../components/booking/StepDetails';
import { StepReview } from '../components/booking/StepReview';
import { StepPayment } from '../components/booking/StepPayment';
import { Button } from '../components/ui/Button';

const stepLabels = ['Dates & travellers', 'Options', 'Your details', 'Review', 'Payment'];

export function Booking() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const tour = getTourBySlug(slug);
  const { startBooking, confirmBooking } = useBooking();
  const { currency } = useLocale();
  const [step, setStep] = useState(0);
  const [furthest, setFurthest] = useState(0);

  useEffect(() => {
    if (tour) startBooking(tour.slug);
  }, [tour, startBooking]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const { draft } = useBooking();

  if (!tour) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">That tour is no longer available</h1>
        <Button to="/tours" className="mt-6">
          Browse all tours
        </Button>
      </main>);

  }

  function goTo(next: number) {
    setStep(next);
    setFurthest((current) => Math.max(current, next));
  }

  function handlePaid() {
    const booking = confirmBooking(tour!, currency.code);
    navigate('/booking/confirmed', { state: { reference: booking.reference } });
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link
        to={`/tours/${tour.slug}`}
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-jungle-700">
        
        <ArrowLeftIcon aria-hidden="true" className="h-4 w-4" />
        Back to {tour.title}
      </Link>

      <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Book {tour.title}</h1>

      <div className="mt-6">
        <BookingSteps steps={stepLabels} current={step} furthestReached={furthest} onSelect={setStep} />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          {step === 0 && <StepDates tour={tour} onContinue={() => goTo(1)} />}
          {step === 1 && <StepOptions tour={tour} onContinue={() => goTo(2)} onBack={() => setStep(0)} />}
          {step === 2 && <StepDetails onContinue={() => goTo(3)} onBack={() => setStep(1)} />}
          {step === 3 &&
          <StepReview tour={tour} onContinue={() => goTo(4)} onBack={() => setStep(2)} onEdit={setStep} />
          }
          {step === 4 && <StepPayment tour={tour} onPaid={handlePaid} onBack={() => setStep(3)} />}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <PriceSummary tour={tour} draft={draft} />
        </aside>
      </div>
    </main>);

}