'use client';

import { useEffect, useRef, useState } from 'react';

interface DesignEditorProps {
  templateId: string;
  onComplete: (design: any) => void;
  onBack: () => void;
}

export default function DesignEditor({ templateId, onComplete, onBack }: DesignEditorProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editorReady, setEditorReady] = useState(false);

  useEffect(() => {
    // Load Customer's Canvas editor
    // Note: This is a demo/mock implementation
    // In production, you'd integrate with actual Customer's Canvas API
    const timer = setTimeout(() => {
      setIsLoading(false);
      setEditorReady(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [templateId]);

  const handleSave = () => {
    // In production: Extract design from Customer's Canvas
    const mockDesign = {
      templateId,
      customizations: {},
      timestamp: Date.now()
    };
    onComplete(mockDesign);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Toolbar */}
        <div className="bg-[#2c1810] px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-white hover:text-[#d4a574] transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to Templates
          </button>
          <h3 className="text-white font-semibold">Design Editor</h3>
          <button
            onClick={handleSave}
            disabled={!editorReady}
            className="px-6 py-2 bg-[#d4a574] hover:bg-[#c49564] disabled:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
          >
            Continue to Details →
          </button>
        </div>

        {/* Editor Area */}
        <div className="relative bg-[#f8f5f0]" style={{ height: '600px' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-10">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#8b4513] border-t-transparent mb-4"></div>
                <p className="text-[#2c1810] font-medium">Loading Design Editor...</p>
              </div>
            </div>
          )}

          {/* Mock Canvas Area (Customer's Canvas iframe would go here) */}
          <div className="h-full flex items-center justify-center p-8">
            <div className="bg-white shadow-2xl rounded-lg" style={{ width: '500px', height: '350px' }}>
              <div className="h-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#d4a574]">
                <span className="text-6xl mb-4">🍷</span>
                <h4 className="text-2xl font-bold text-[#2c1810] mb-2">Gift Card Preview</h4>
                <p className="text-gray-600 text-center mb-6">
                  Template: <span className="font-semibold">{templateId}</span>
                </p>
                <div className="space-y-3 w-full max-w-xs">
                  <div className="bg-[#f8f5f0] p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2 font-medium">Drag & Drop Features:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Upload custom images</li>
                      <li>• Add & edit text</li>
                      <li>• Change colors & fonts</li>
                      <li>• Resize & reposition elements</li>
                    </ul>
                  </div>
                  <div className="bg-[#d4a574]/10 p-3 rounded-lg text-center">
                    <p className="text-xs text-[#8b4513] font-medium">
                      🎨 Customer&apos;s Canvas integration ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel - Mock Design Tools */}
          <div className="absolute right-0 top-0 h-full w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#2c1810] mb-2">Design Tools</h4>
                <div className="space-y-2">
                  <button className="w-full py-2 px-3 bg-[#f8f5f0] hover:bg-[#e8dfd0] rounded text-sm text-left transition-colors">
                    📝 Add Text
                  </button>
                  <button className="w-full py-2 px-3 bg-[#f8f5f0] hover:bg-[#e8dfd0] rounded text-sm text-left transition-colors">
                    🖼️ Add Image
                  </button>
                  <button className="w-full py-2 px-3 bg-[#f8f5f0] hover:bg-[#e8dfd0] rounded text-sm text-left transition-colors">
                    🎨 Background
                  </button>
                  <button className="w-full py-2 px-3 bg-[#f8f5f0] hover:bg-[#e8dfd0] rounded text-sm text-left transition-colors">
                    ✨ Effects
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2c1810] mb-2">Wine Clipart</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['🍇', '🍷', '🍾', '🥂', '🛢️', '🏺'].map((emoji, i) => (
                    <button
                      key={i}
                      className="aspect-square bg-[#f8f5f0] hover:bg-[#d4a574] hover:scale-110 rounded text-2xl transition-all"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2c1810] mb-2">Colors</h4>
                <div className="grid grid-cols-4 gap-2">
                  {['#2c1810', '#8b4513', '#d4a574', '#f8f5f0', '#722f37', '#ffd700'].map((color) => (
                    <button
                      key={color}
                      className="aspect-square rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-[#f8f5f0] px-6 py-4 border-t border-gray-200">
          <p className="text-sm text-gray-700 text-center">
            <strong>Demo Mode:</strong> This is a prototype interface. In production, Customer&apos;s Canvas provides full drag-and-drop editing with image uploads, text formatting, and professional design tools.
          </p>
        </div>
      </div>
    </div>
  );
}
