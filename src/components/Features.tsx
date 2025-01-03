import React from 'react';
import { FileText, MessageSquare, Users, Sticker, Globe, Shield } from 'lucide-react';

const features = [
  {
    name: 'Gestion de fichiers',
    description: 'Envoyez et recevez des fichiers de tous types avec compression automatique.',
    icon: FileText
  },
  {
    name: 'Interaction avec stickers',
    description: 'Trouvez et partagez les stickers parfaits pour chaque conversation.',
    icon: Sticker
  },
  {
    name: 'Gestion de groupes',
    description: 'Administrez facilement vos groupes WhatsApp avec des commandes simples.',
    icon: Users
  },
  {
    name: 'Multi-appareils',
    description: 'Compatible avec tous vos appareils : smartphones, tablettes et ordinateurs.',
    icon: Globe
  },
  {
    name: 'Messages automatiques',
    description: 'Répondez automatiquement aux messages avec des réponses personnalisées.',
    icon: MessageSquare
  },
  {
    name: 'Sécurité avancée',
    description: 'Protection contre le spam et gestion des autorisations.',
    icon: Shield
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Fonctionnalités principales
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Découvrez tout ce que HACKING-MD peut faire pour vous
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative group bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}