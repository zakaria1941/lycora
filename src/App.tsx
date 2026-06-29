/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  X,
  FlaskConical,
  PackageCheck
} from 'lucide-react';

import heroDropperImg from './assets/images/lycora_dropper_bottle_1782400620384.jpg';
import lifestyleWoodImg from './assets/images/lycora_products_wood_1782400638396.jpg';
import jarStoneImg from './assets/images/lycora_jar_stone_1782750422335.jpg';
import allProductsImg from './assets/images/lycora_all_products.png';

// Shared Step Component — numbered row
interface StepProps {
  number: number;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, text }) => (
  <div className="flex items-start gap-5 mb-6 last:mb-0">
    <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#C8381A] flex items-center justify-center text-[#F5F0E8] font-bold text-xs mt-1">
      {number}
    </div>
    <p className="text-[17px] leading-[1.55] text-[#EDE6D6] text-left">
      {text}
    </p>
  </div>
);

// Shared Divider Component
const Divider: React.FC = () => (
  <div className="py-8 flex justify-center">
    <div className="h-px w-24 bg-[#6B5A4A]" />
  </div>
);

// Shared PrimaryButton (Tomato CTA, with arrow)
interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center gap-3 bg-[#C8381A] text-[#F5F0E8] font-bold rounded-lg px-6 py-3 hover:bg-[#A82E15] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
  >
    <span>{label}</span>
    <ArrowRight className="w-5 h-5 strokeWidth={2.5}" />
  </button>
);

// Shared SolidButton (white pill)
interface SolidButtonProps {
  label: string;
  onClick?: () => void;
}

const SolidButton: React.FC<SolidButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-block bg-white text-[#0A0804] font-bold rounded-lg px-8 py-3 hover:bg-[#EDE6D6] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
  >
    {label}
  </button>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState('Les deux formulations (Huileuse + Poudre)');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: 'Sauces & Plats cuisinés',
    details: ''
  });

  const handleOpenModal = (productHint?: string) => {
    if (productHint) setModalProduct(productHint);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0A07] py-10 px-4 font-body">
      {/* Email-style Marketing Container */}
      <div className="max-w-[640px] mx-auto shadow-2xl overflow-hidden ring-1 ring-white/5 bg-[#141008] text-[#F5F0E8]">
        
        {/* Section 1 — Hero (image background) */}
        <section className="relative w-full overflow-hidden" style={{ aspectRatio: '640 / 820' }}>
          {/* Background image (absolutely filling container, object-cover) */}
          <img
            src={allProductsImg}
            alt="LYCORA Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay gradient (absolute inset-0) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(20,16,8,0) 45%, rgba(20,16,8,0.45) 68%, rgba(20,16,8,0.9) 88%, rgba(20,16,8,1) 100%)'
            }}
          />

          {/* Foreground stack */}
          <div className="relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10">
            {/* Top brand block */}
            <h1 className="font-display text-[28px] leading-[0.95] tracking-tight text-[#F5F0E8]">
              LYCORA
            </h1>
            <p className="text-[13px] tracking-[0.22em] font-medium mt-1 text-[#EDE6D6]">
              Rooted in Nature.
            </p>

            {/* Spacer mt-40, then badge */}
            <div className="mt-40">
              <span className="text-[#F5F0E8] text-[13px] tracking-[0.28em] font-semibold">
                MADE IN ALGERIA
              </span>
            </div>

            {/* flex-1 spacer pushing headline to bottom */}
            <div className="flex-1" />

            {/* Headline (Cormorant Garamond italic) */}
            <h2 className="font-display italic text-[#F5F0E8] text-[58px] leading-[1.02] tracking-tight max-w-[560px]">
              Colorez<br />
              sans compromettre.
            </h2>

            {/* Hero CTA pill (uses #D94020 variant) */}
            <button
              type="button"
              onClick={() => handleScrollTo('section-intro')}
              className="mt-10 inline-flex items-center gap-3 bg-[#D94020] text-[#F5F0E8] font-semibold rounded-full px-8 py-4 hover:bg-[#A82E15] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Découvrir LYCORA</span>
              <ArrowRight className="w-5 h-5 strokeWidth={2.5}" />
            </button>
          </div>
        </section>

        {/* Section 2 — Intro copy + CTA */}
        <section id="section-intro" className="px-[78px] pb-8 pt-4 text-center">
          <p className="text-[18px] leading-[1.55] text-[#EDE6D6] text-center">
            LYCORA est le premier colorant alimentaire naturel algérien issu de la valorisation et du recyclage des sous-produits industriels de la tomate. Fabriqué de manière éco-responsable à partir du lycopène extrait des pelures et des graines, ce pigment rouge-orangé puissant répond aux exigences réglementaires et sanitaires les plus strictes en offrant une alternative saine et sans chimie aux colorants synthétiques. Développé en collaboration avec les laboratoires universitaires algériens, LYCORA allie performance colorante et activité antioxydante pour répondre aux besoins d'innovation de l'industrie agroalimentaire locale.
          </p>

          {/* Badges Row */}
          <div className="flex justify-center gap-3 flex-wrap pt-6 pb-2">
            <span className="inline-flex items-center rounded-full bg-[#0D0A07] border border-[#C8381A]/40 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#F5F0E8]">
              100% Naturel
            </span>
            <span className="inline-flex items-center rounded-full bg-[#0D0A07] border border-[#C8381A]/40 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#F5F0E8]">
              Made in Algeria
            </span>
            <span className="inline-flex items-center rounded-full bg-[#0D0A07] border border-[#C8381A]/40 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#F5F0E8]">
              CE 1333/2008
            </span>
            <span className="inline-flex items-center rounded-full bg-[#0D0A07] border border-[#C8381A]/40 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#F5F0E8]">
              2 Formulations
            </span>
          </div>

          <div className="flex justify-center pb-14 pt-6">
            <PrimaryButton
              label="Voir les formulations"
              onClick={() => handleScrollTo('section-formulations')}
            />
          </div>

          <Divider />
        </section>

        {/* Section 3 — "Deux formulations, une seule nature." */}
        <section id="section-formulations">
          {/* Heading container */}
          <div className="px-9 pb-8">
            <h2 className="font-display text-center text-[46px] leading-[1.05] tracking-tight text-[#F5F0E8]">
              Deux formulations,<br />
              une seule nature.
            </h2>
          </div>

          {/* Video card px-[42px] pb-10 -> replaced with Image 1 tall rounded card */}
          <div className="px-[42px] pb-10">
            <a
              href="#formulations"
              onClick={(e) => { e.preventDefault(); handleOpenModal('Forme Huileuse 10 mL (Lycopène pur)'); }}
              className="block overflow-hidden rounded-[14px] group cursor-pointer"
            >
              <img
                src={heroDropperImg}
                alt="LYCORA Forme Huileuse Dropper Bottle"
                className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </a>
          </div>

          {/* Steps list container */}
          <div className="px-[76px] pb-10">
            <div className="max-w-[489px] mx-auto">
              <Step
                number={1}
                text="Formulation huileuse (FORME HUILEUSE) : concentré de 10 mL adapté aux matrices alimentaires grasses et lipophiles. Idéal pour les sauces tomate, produits laitiers gras, margarines, soupes et bouillons."
              />
              <Step
                number={2}
                text="Formulation en poudre (FORME EN POUDRE) : sachet hydrosoluble de 10 g, facile à stocker et à incorporer. Idéal pour les boissons & smoothies, confiseries, produits laitiers, pâtes et farines colorées."
              />
              <Step
                number={3}
                text="Ingrédients 100% transparents : formulation à base de poudre de pelures et graines de tomate, pigment lycopène naturel pur (représentant 80 à 90% des caroténoïdes de la tomate), avec de l'huile végétale de tournesol raffiné pour la version liquide."
              />
              <Step
                number={4}
                text="Pourquoi choisir LYCORA : un produit 100% naturel sans chimie de synthèse, issu de l'économie circulaire locale, scientifiquement validé en laboratoire universitaire, conforme au Règlement CE n°1333/2008 et doté d'une double propriété colorante et antioxydante."
              />
            </div>
          </div>

          <Divider />
        </section>

        {/* Section 4 — "Du déchet au délice." */}
        <section id="section-economie">
          {/* Heading container */}
          <div className="pb-7 px-9">
            <h2 className="font-display text-center text-[46px] leading-[1.05] tracking-tight text-[#F5F0E8]">
              Du déchet<br />
              au délice.
            </h2>
          </div>

          {/* Video card px-[42px] pb-10 -> replaced with Image 2 tall rounded card */}
          <div className="px-[42px] pb-10">
            <a
              href="#economie"
              onClick={(e) => { e.preventDefault(); handleOpenModal('Forme en Poudre 10 g'); }}
              className="block overflow-hidden rounded-[14px] group cursor-pointer"
            >
              <img
                src={lifestyleWoodImg}
                alt="LYCORA Products Lifestyle Shot"
                className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </a>
          </div>

          {/* Paragraph container */}
          <div className="px-[78px] pb-8">
            <p className="text-[18px] leading-[1.55] text-[#EDE6D6] text-center">
              En Algérie, le marché des colorants alimentaires est dominé à 70–80% par des produits synthétiques importés, alors que le segment des colorants naturels connaît une forte croissance de 20 à 30%. Face à l'absence de production locale de colorants naturels, LYCORA se positionne comme le premier colorant naturel algérien à base de lycopène extrait des déchets industriels de tomate locale, offrant ainsi une alternative saine, économique et écologiquement durable.
            </p>
          </div>

          {/* Usage and Storage info blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-[42px] pb-8 text-left">
            <div className="bg-[#0A0804] border border-[#6B5A4A]/30 rounded-[10px] p-5">
              <h4 className="font-display text-lg font-bold text-[#C8381A] mb-2 text-left">Mode d'emploi</h4>
              <p className="text-sm text-[#EDE6D6] leading-relaxed text-left">
                Utiliser en petites quantités selon l'intensité de couleur souhaitée. Commencer par une dose faible et ajuster progressivement.
              </p>
            </div>
            <div className="bg-[#0A0804] border border-[#6B5A4A]/30 rounded-[10px] p-5">
              <h4 className="font-display text-lg font-bold text-[#C8381A] mb-2 text-left">Conservation</h4>
              <p className="text-sm text-[#EDE6D6] leading-relaxed text-left">
                Conserver dans un endroit frais et sec, à l'abri de la lumière et de l'humidité. Refermer hermétiquement après ouverture.
              </p>
            </div>
          </div>

          {/* NEW Visual Card - Image 3 (jar on stone) */}
          <div className="px-[42px] pb-10">
            <div
              onClick={() => handleOpenModal('Forme en Poudre 10 g (Pot)')}
              className="block overflow-hidden rounded-[14px] group cursor-pointer"
            >
              <img
                src={jarStoneImg}
                alt="LYCORA Forme en Poudre Jar on Stone"
                className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="flex justify-center pb-14">
            <SolidButton
              label="En savoir plus"
              onClick={() => handleScrollTo('section-formulations')}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0A0804] text-[#F5F0E8] pt-12 px-10 text-center border-t border-white/5">
          {/* Wordmark link wrapped in pb-8 flex justify-center */}
          <div className="pb-8 flex justify-center">
            <a
              href="#top"
              onClick={(e) => { e.preventDefault(); handleScrollTo('section-intro'); }}
              className="font-display text-[30px] font-bold tracking-tight text-[#F5F0E8] hover:text-[#C8381A] transition-colors cursor-pointer"
            >
              LYCORA
            </a>
          </div>

          {/* Disclaimer paragraph */}
          <p className="text-[12px] text-[#8C7B6B] leading-[1.5] pb-8">
            LYCORA est conforme au Règlement CE n°1333/2008 sur les additifs alimentaires. Fabriqué en Algérie à partir de déchets industriels de tomate.
          </p>

          {/* Divider */}
          <div className="flex justify-center pb-8">
            <div className="h-px w-24 bg-[#6B5A4A]" />
          </div>

          {/* Link row */}
          <div className="text-[12px] pb-3 space-x-2 text-[#8C7B6B]">
            <a href="#support" onClick={(e) => { e.preventDefault(); handleOpenModal(); }} className="hover:underline text-[#F5F0E8]">
              Support
            </a>
            <span className="text-[#6B5A4A]">|</span>
            <a href="#mentions" onClick={(e) => e.preventDefault()} className="hover:underline text-[#F5F0E8]">
              Mentions légales
            </a>
            <span className="text-[#6B5A4A]">|</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleOpenModal(); }} className="hover:underline text-[#F5F0E8]">
              Contact
            </a>
          </div>

          {/* Copyright anchor */}
          <a
            href="#copyright"
            onClick={(e) => e.preventDefault()}
            className="text-[12px] text-[#EDE6D6]/80 hover:text-[#F5F0E8] inline-block transition-colors"
          >
            ©2026 LYCORA — Made in Algeria. Colorant naturel à base de lycopène de tomate.
          </a>

          {/* Trailing pb-10 spacer */}
          <div className="pb-10" />
        </footer>
      </div>

      {/* SAMPLE / ORDER MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#141008] border border-[#C8381A]/40 rounded-xl shadow-2xl overflow-hidden text-[#F5F0E8] p-6 sm:p-8 text-left">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#6B5A4A]/40">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#C8381A]/20 text-[#C8381A]">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#F5F0E8]">Commander LYCORA</h3>
                  <p className="text-xs text-[#8C7B6B]">Laboratoire de valorisation agro-alimentaire</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-[#8C7B6B] hover:text-[#F5F0E8] hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C8381A]/20 border border-[#C8381A] flex items-center justify-center text-[#C8381A]">
                  <PackageCheck className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#F5F0E8]">Demande enregistrée !</h4>
                <p className="text-sm text-[#EDE6D6] max-w-md mx-auto leading-relaxed text-center">
                  Merci pour votre intérêt pour <strong className="text-[#C8381A]">LYCORA</strong>. Notre équipe vous enverra la fiche technique et le kit d'échantillon sous 24h ouvrées.
                </p>
                <div className="pt-4 flex justify-center">
                  <SolidButton label="Retour à la page" onClick={() => setIsModalOpen(false)} />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitOrder} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#EDE6D6] mb-1 uppercase tracking-wider">
                    Formulation ciblée
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={modalProduct}
                    className="w-full bg-[#0A0804] border border-[#6B5A4A]/50 rounded-lg px-3.5 py-2.5 text-sm text-[#C8381A] font-medium focus:outline-none cursor-not-allowed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#EDE6D6] mb-1">Nom complet *</label>
                    <input
                      required
                      type="text"
                      placeholder="Dr. Karim Benali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0804] border border-[#6B5A4A]/40 rounded-lg px-3.5 py-2 text-sm text-[#F5F0E8] placeholder-[#8C7B6B] focus:border-[#C8381A] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#EDE6D6] mb-1">Société / Industrie *</label>
                    <input
                      required
                      type="text"
                      placeholder="Agro-Alimentaire SPA"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0A0804] border border-[#6B5A4A]/40 rounded-lg px-3.5 py-2 text-sm text-[#F5F0E8] placeholder-[#8C7B6B] focus:border-[#C8381A] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#EDE6D6] mb-1">Email professionnel *</label>
                    <input
                      required
                      type="email"
                      placeholder="contact@industrie.dz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0804] border border-[#6B5A4A]/40 rounded-lg px-3.5 py-2 text-sm text-[#F5F0E8] placeholder-[#8C7B6B] focus:border-[#C8381A] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#EDE6D6] mb-1">Secteur d'application</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-[#0A0804] border border-[#6B5A4A]/40 rounded-lg px-3.5 py-2 text-sm text-[#F5F0E8] focus:border-[#C8381A] focus:outline-none transition-colors"
                    >
                      <option value="Sauces & Plats cuisinés">Sauces & Plats cuisinés</option>
                      <option value="Boissons & Smoothies">Boissons & Smoothies</option>
                      <option value="Confiseries & Pâtisserie">Confiseries & Pâtisserie</option>
                      <option value="Produits laitiers & Margarines">Produits laitiers & Margarines</option>
                      <option value="Pâtes & Farines colorées">Pâtes & Farines colorées</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#EDE6D6] mb-1">Besoins techniques & quantités estimées</label>
                  <textarea
                    rows={3}
                    placeholder="Précisez votre matrice alimentaire ou vos exigences de stabilité..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#0A0804] border border-[#6B5A4A]/40 rounded-lg p-3 text-sm text-[#F5F0E8] placeholder-[#8C7B6B] focus:border-[#C8381A] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-[#8C7B6B] hover:text-[#F5F0E8] transition-colors cursor-pointer"
                  >
                    Annuler
                  </button>
                  <PrimaryButton label="Envoyer la demande" />
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
