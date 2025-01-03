import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Comment obtenir mon Session ID ?',
    answer: 'Visitez notre page de génération de Session ID et suivez les instructions pour scanner le QR code avec WhatsApp.'
  },
  {
    question: 'Le bot est-il gratuit ?',
    answer: 'Oui, HACKING-MD est entièrement gratuit et open source sous licence MIT.'
  },
  {
    question: 'Puis-je personnaliser les commandes ?',
    answer: 'Oui, vous pouvez modifier et ajouter vos propres commandes en modifiant le code source.'
  },
  {
    question: 'Comment contribuer au projet ?',
    answer: 'Vous pouvez contribuer en soumettant des pull requests sur GitHub ou en signalant des bugs.'
  }
];

export default function FAQ() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mt-16">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300"
              >
                <dt className="text-lg font-medium text-white">{faq.question}</dt>
                <dd className="mt-2 text-gray-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}