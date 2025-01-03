import React from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Fork le repository',
    description: 'Commencez par fork le repository GitHub de HACKING-MD sur votre compte.',
    link: 'https://github.com/HACKING995/HACKING--MD9/fork'
  },
  {
    title: 'Obtenir Session ID',
    description: 'Générez votre Session ID unique pour connecter le bot à WhatsApp.',
    link: 'https://hacking995.github.io/SESSION-ID-WEBCAM.COM/'
  },
  {
    title: 'Configuration',
    description: 'Configurez les variables d\'environnement selon vos besoins.',
    link: '#'
  },
  {
    title: 'Déploiement',
    description: 'Choisissez votre plateforme de déploiement préférée et suivez les instructions.',
    link: '#deployment'
  }
];

export default function Installation() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Terminal className="h-12 w-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Guide d'installation
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Suivez ces étapes simples pour installer HACKING-MD
          </p>
        </div>
        <div className="mt-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                    <p className="mt-2 text-gray-300">{step.description}</p>
                    {step.link !== '#' && (
                      <a
                        href={step.link}
                        className="mt-3 inline-flex items-center text-blue-400 hover:text-blue-500"
                      >
                        En savoir plus
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}