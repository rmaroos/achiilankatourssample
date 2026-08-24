import React, { useState } from 'react';
import { CheckCircle2Icon, ClockIcon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WHATSAPP_URL } from '../components/layout/WhatsAppButton';

const channels = [
{
  icon: MessageCircleIcon,
  title: 'WhatsApp',
  detail: '+94 77 123 4567',
  note: 'Fastest way to reach us. Usually answered within an hour, 8am to 9pm Sri Lanka time (GMT+5:30).',
  href: WHATSAPP_URL,
  action: 'Open WhatsApp'
},
{
  icon: MailIcon,
  title: 'Email',
  detail: 'hello@serendibjourneys.lk',
  note: 'Best for detailed questions and custom itineraries. Answered within one working day.',
  href: 'mailto:hello@serendibjourneys.lk',
  action: 'Send an email'
},
{
  icon: PhoneIcon,
  title: 'Phone',
  detail: '+94 11 234 5678',
  note: 'Office line, 9am to 6pm Sri Lanka time, Monday to Saturday.',
  href: 'tel:+94112345678',
  action: 'Call the office'
}];


export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', reference: '', message: '' });
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please add your name, email and a message so we can reply properly.');
      return;
    }
    setError(null);
    setSent(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">Talk to someone in Colombo</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Not a call centre and not a chatbot — the same small team that plans and runs the tours. If you are
          already travelling with us, use WhatsApp; it is monitored outside office hours too.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {channels.map((channel) =>
        <div key={channel.title} className="flex flex-col rounded-2xl border border-sand-200 bg-white p-6">
            <channel.icon aria-hidden="true" className="h-6 w-6 text-jungle-600" />
            <h2 className="mt-4 font-display text-xl font-semibold text-ink">{channel.title}</h2>
            <p className="mt-1 text-sm font-medium text-ink">{channel.detail}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{channel.note}</p>
            <Button href={channel.href} variant="outline" size="sm" className="mt-5 self-start">
              {channel.action}
            </Button>
          </div>
        )}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
        <section aria-labelledby="message-heading" className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
          <h2 id="message-heading" className="font-display text-2xl font-semibold text-ink">
            Send us a message
          </h2>

          {sent ?
          <div className="mt-6 rounded-xl border border-jungle-200 bg-jungle-50 p-6">
              <p className="flex items-center gap-2 font-medium text-jungle-700">
                <CheckCircle2Icon aria-hidden="true" className="h-5 w-5" />
                Message sent
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Thanks {form.name.split(' ')[0]} — we will reply to {form.email} within one working day. If it is
                urgent, WhatsApp is faster.
              </p>
              <Button href={WHATSAPP_URL} variant="outline" size="sm" className="mt-4">
                <MessageCircleIcon aria-hidden="true" className="h-4 w-4" />
                Message us instead
              </Button>
            </div> :

          <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
              {error &&
            <p role="alert" className="rounded-xl border border-clay-300 bg-clay-100 p-4 text-sm text-clay-600 sm:col-span-2">
                  {error}
                </p>
            }
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Your name</span>
                <input
                type="text"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink" />
              
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Email address</span>
                <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink" />
              
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-ink">
                  Booking reference <span className="font-normal text-ink-muted">(if you have one)</span>
                </span>
                <input
                type="text"
                placeholder="SL-ABC1234"
                value={form.reference}
                onChange={(event) => setForm({ ...form, reference: event.target.value })}
                className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted" />
              
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
                <textarea
                rows={6}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink" />
              
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" variant="accent">
                  Send message
                </Button>
              </div>
            </form>
          }
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-sand-200 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Our office</h2>
            <p className="mt-3 flex items-start gap-2.5 text-sm text-ink-soft">
              <MapPinIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
              <span>
                Serendib Journeys (Pvt) Ltd
                <br />
                48 Ward Place, Colombo 00700
                <br />
                Sri Lanka
              </span>
            </p>
            <p className="mt-4 flex items-start gap-2.5 text-sm text-ink-soft">
              <ClockIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
              <span>
                Mon–Sat, 9am–6pm (GMT+5:30)
                <br />
                WhatsApp monitored until 9pm
              </span>
            </p>
          </div>
          <div className="rounded-2xl border border-sand-200 bg-sand-100 p-6 text-sm leading-relaxed text-ink-soft">
            <p className="font-medium text-ink">Licensed and registered</p>
            <p className="mt-2">
              Registered with the Sri Lanka Tourism Development Authority (licence #TA/0142) and a member of the
              Sri Lanka Association of Inbound Tour Operators.
            </p>
          </div>
        </aside>
      </div>
    </main>);

}