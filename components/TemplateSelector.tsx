interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: string;
}

const templates: Template[] = [
  {
    id: 'classic-vineyard',
    name: 'Classic Vineyard',
    description: 'Elegant vineyard landscape with gold accents',
    thumbnail: '🍇',
    category: 'Classic'
  },
  {
    id: 'modern-bottle',
    name: 'Modern Bottle',
    description: 'Minimalist wine bottle silhouette',
    thumbnail: '🍷',
    category: 'Modern'
  },
  {
    id: 'celebration',
    name: 'Celebration',
    description: 'Festive design with champagne and grapes',
    thumbnail: '🥂',
    category: 'Celebration'
  },
  {
    id: 'rustic-barrel',
    name: 'Rustic Barrel',
    description: 'Warm wood barrel with vineyard background',
    thumbnail: '🛢️',
    category: 'Classic'
  },
  {
    id: 'elegant-gold',
    name: 'Elegant Gold',
    description: 'Luxurious gold foil accents on deep burgundy',
    thumbnail: '✨',
    category: 'Luxury'
  },
  {
    id: 'birthday-toast',
    name: 'Birthday Toast',
    description: 'Perfect for birthday celebrations',
    thumbnail: '🎉',
    category: 'Celebration'
  }
];

interface TemplateSelectorProps {
  onSelect: (templateId: string) => void;
}

export default function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2c1810] mb-4">
          Choose Your Template
        </h2>
        <p className="text-lg text-gray-600">
          Select a design to customize, or start from scratch
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#d4a574]"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#f8f5f0] to-[#e8dfd0] flex items-center justify-center">
              <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                {template.thumbnail}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-[#2c1810]">{template.name}</h3>
                <span className="text-xs px-3 py-1 bg-[#d4a574]/20 text-[#8b4513] rounded-full font-medium">
                  {template.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{template.description}</p>
            </div>
            <div className="absolute inset-0 bg-[#8b4513]/0 group-hover:bg-[#8b4513]/5 transition-colors duration-300" />
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => onSelect('blank')}
          className="inline-flex items-center px-8 py-4 bg-white border-2 border-[#8b4513] text-[#8b4513] rounded-lg hover:bg-[#8b4513] hover:text-white transition-colors duration-300 font-semibold"
        >
          <span className="mr-2">+</span>
          Start with Blank Canvas
        </button>
      </div>
    </div>
  );
}
