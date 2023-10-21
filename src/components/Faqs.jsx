import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is included inside CC360?',
      answer:
        'CC360 is an all-in-one software for course creators. It includes funnel and page building, course hosting, CRM, social media posting, blogging, automations, and much more.',
    },
    {
      question: 'How many texts & emails do I get each month?',
      answer: 'On our premium plan you get 28,500 emails per month OR 1,900 text segments. Those on the elite plan qualify for our unlimited emails and 2500 texts/month. The starter plan does not include credits each month.',
    },
    {
      question: 'What is the "done for you DNS setup"?',
      answer:
        'A proper DNS setup is crucial for your emails to consistently land in the primary inbox and avoid the spam & promotional folder. We handle this setup for you, saving you hours or days of work.',
    },
  ],
  [
    {
      question: 'How is this different than Kajabi or Clickfunnels?',
      answer:
        'Our $47 plan alone does 90% of what Kajabi offers. Kajabi and Clickfunnels are not built to be a CRM and charge you a premium for it. CC360 gives you the full spectrum at a low cost.',
    },
    {
      question:
        'Do we get any customer support?',
      answer:
        'Yes, we offer 24/7 customer service. We offer unlimited zoom call support and take this very seriously keeping our customer service reps accountable.',
    },
    {
      question:
        'What if I want to downgrade down the road?',
      answer:
        'You can downgrade to our starter plan at any point and upgrade back to where you were without losing any of your material.',
    },
  ],
  [
    {
      question: 'What does a "free sub account" mean in your premium and elite plans?',
      answer:
        'It means we will give you an entirely new CC360 account for free. So if you have another business or course you want to keep separate from your other one, we will give you an entirely new one.',
    },
    {
      question: 'What is the customized mobile app that is included in the premium and elite plans?',
      answer: 'This is a "progressive web app" which allows your course customer to download your customized app from the internet and onto their phone. All of your course material is present in this app for both online and offline viewing.',
    },
    {
      question: 'What is your refund policy?',
      answer:
        'We offer a full refund within thirty (30) days of initial sign-up. All payments made thereafter are non-refundable, and we do not provide credits for partially used subscription periods.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}