'use client';

import { useState } from 'react';
import TemplateSelector from '@/components/TemplateSelector';
import DesignEditor from '@/components/DesignEditor';
import GiftCardOptions from '@/components/GiftCardOptions';

export default function Home() {
  const [step, setStep] = useState<'template' | 'design' | 'options'>('template');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [designData, setDesignData] = useState<any>(null);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    setStep('design');
  };

  const handleDesignComplete = (design: any) => {
    setDesignData(design);
    setStep('options');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f5f0] to-white">
      {/* Header */}
      <header className="bg-[#2c1810] text-white py-6 px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Wine Shipping Gift Cards</h1>
            <p className="text-[#d4a574] mt-1">Design a personalized gift card in minutes</p>
          </div>
          <div className="text-sm text-gray-300">
            Powered by <span className="text-[#d4a574]">Customer&apos;s Canvas</span>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-center space-x-4 mb-12">
          <StepIndicator 
            number={1} 
            label="Choose Template" 
            active={step === 'template'} 
            completed={step !== 'template'}
          />
          <div className="w-24 h-1 bg-gray-300 rounded">
            <div className={`h-full bg-[#8b4513] rounded transition-all ${step !== 'template' ? 'w-full' : 'w-0'}`} />
          </div>
          <StepIndicator 
            number={2} 
            label="Customize Design" 
            active={step === 'design'} 
            completed={step === 'options'}
          />
          <div className="w-24 h-1 bg-gray-300 rounded">
            <div className={`h-full bg-[#8b4513] rounded transition-all ${step === 'options' ? 'w-full' : 'w-0'}`} />
          </div>
          <StepIndicator 
            number={3} 
            label="Gift Card Details" 
            active={step === 'options'} 
            completed={false}
          />
        </div>

        {/* Content */}
        {step === 'template' && (
          <TemplateSelector onSelect={handleTemplateSelect} />
        )}
        
        {step === 'design' && selectedTemplate && (
          <DesignEditor 
            templateId={selectedTemplate} 
            onComplete={handleDesignComplete}
            onBack={() => setStep('template')}
          />
        )}
        
        {step === 'options' && (
          <GiftCardOptions 
            designData={designData}
            onBack={() => setStep('design')}
          />
        )}
      </div>
    </main>
  );
}

function StepIndicator({ number, label, active, completed }: { 
  number: number; 
  label: string; 
  active: boolean; 
  completed: boolean; 
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`
        w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
        transition-all duration-300
        ${completed ? 'bg-[#8b4513] text-white' : ''}
        ${active ? 'bg-[#d4a574] text-white ring-4 ring-[#d4a574]/30' : ''}
        ${!active && !completed ? 'bg-gray-300 text-gray-600' : ''}
      `}>
        {completed ? '✓' : number}
      </div>
      <span className={`mt-2 text-sm font-medium ${active ? 'text-[#8b4513]' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}
