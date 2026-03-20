# 🎨 Visual Preview & Screenshots

## User Flow Preview

### Step 1: Template Selection
```
┌─────────────────────────────────────────────────────────────┐
│  Wine Shipping Gift Cards                                   │
│  Design a personalized gift card in minutes                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Progress: [1 ●] ──── [2 ○] ──── [3 ○]                      │
│                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐             │
│  │     🍇     │ │     🍷     │ │     🥂     │             │
│  │  Classic   │ │   Modern   │ │Celebration │             │
│  │  Vineyard  │ │   Bottle   │ │            │             │
│  └────────────┘ └────────────┘ └────────────┘             │
│                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐             │
│  │     🛢️     │ │     ✨     │ │     🎉     │             │
│  │   Rustic   │ │  Elegant   │ │  Birthday  │             │
│  │   Barrel   │ │    Gold    │ │   Toast    │             │
│  └────────────┘ └────────────┘ └────────────┘             │
│                                                              │
│         [+ Start with Blank Canvas]                         │
└─────────────────────────────────────────────────────────────┘
```

### Step 2: Design Editor
```
┌─────────────────────────────────────────────────────────────┐
│ [← Back]        Design Editor           [Continue →]        │
├─────────────────────────────────────────────┬───────────────┤
│                                             │ Design Tools  │
│                                             │ ─────────────│
│          ┌────────────────────┐            │ 📝 Add Text  │
│          │                    │            │ 🖼️ Add Image │
│          │       🍷           │            │ 🎨 Background│
│          │                    │            │ ✨ Effects   │
│          │   Gift Card        │            │              │
│          │   Preview          │            │ Wine Clipart │
│          │                    │            │ ─────────────│
│          │  [Drag & Drop      │            │ 🍇 🍷 🍾     │
│          │   Interface]       │            │ 🥂 🛢️ 🏺     │
│          │                    │            │              │
│          └────────────────────┘            │ Colors       │
│                                             │ ─────────────│
│                                             │ ● ● ● ●     │
│                                             │ ● ● ● ●     │
└─────────────────────────────────────────────┴───────────────┘
```

### Step 3: Gift Card Options
```
┌─────────────────────────────────────────────────────────────┐
│ [← Edit Design]    Gift Card Details                        │
├──────────────────────────────┬──────────────────────────────┤
│ Gift Amount                  │ Recipient Information        │
│ ────────────────────────     │ ─────────────────────────   │
│ [$25] [$50] [$100]          │ Name: ___________________    │
│ [$250] [$500]               │                              │
│ Custom: $________           │ Email: __________________    │
│                              │                              │
│ Delivery Method              │ Your Name: ______________    │
│ ────────────────────────     │                              │
│ ☑ 📧 Email (Instant)        │ Message:                     │
│ ☐ 📮 Physical (+$5.99)      │ _________________________   │
│                              │ _________________________   │
│ Schedule: [________]         │ _________________________   │
│                              │                              │
├──────────────────────────────┴──────────────────────────────┤
│ Order Summary                                               │
│ ───────────────────────────────────────────────────────────│
│ Gift Card Amount                              $50.00       │
│ Physical Card Fee                              $0.00       │
│ ─────────────────────────────────────────────────────────  │
│ Total                                         $50.00       │
│                                                              │
│             [Proceed to Checkout →]                         │
└─────────────────────────────────────────────────────────────┘
```

## Color Palette

Based on wineshipping.com branding:

```
🟫 Primary Dark:   #2c1810  (Deep Brown - Header/Text)
🟤 Accent Brown:   #8b4513  (Saddle Brown - Buttons/CTA)
🟨 Gold Accent:    #d4a574  (Tan Gold - Highlights)
⬜ Background:     #f8f5f0  (Warm Off-White - Base)
🟥 Wine Red:       #722f37  (Burgundy - Accents)
🟡 Gold Foil:      #ffd700  (Metallic Gold - Premium)
```

## Typography

- **Headings:** Bold, modern sans-serif
- **Body:** Clean, readable sans-serif
- **Accent Text:** Semi-bold for emphasis

## Responsive Design

### Desktop (1920px+)
- Full-width layout with generous spacing
- 3-column template grid
- Side-by-side editor and tools

### Tablet (768px-1919px)
- 2-column template grid
- Stacked editor interface
- Touch-optimized controls

### Mobile (< 768px)
- Single-column layout
- Vertical stacking
- Large touch targets
- Bottom-anchored CTAs

## Interactive Elements

### Buttons
- Primary: Solid brown with gold hover
- Secondary: White with brown border
- Disabled: Gray, non-interactive

### Form Fields
- Focus: Brown border with subtle shadow
- Error: Red border with error message
- Success: Green checkmark

### Progress Steps
- Active: Gold with ring glow
- Completed: Brown with checkmark
- Upcoming: Gray, inactive

## Accessibility

- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Color contrast (WCAG AA)
- ✅ Form validation messages
- ✅ Error states clearly marked

## Animation & Transitions

- Template hover: Subtle scale + border color
- Progress steps: Smooth color transitions
- Form validation: Gentle shake on error
- Loading states: Spinning indicator

## Testing Checklist

- [ ] All templates load correctly
- [ ] Editor interface responsive
- [ ] Form validation works
- [ ] Amount calculations accurate
- [ ] Email validation prevents invalid addresses
- [ ] Date picker only allows future dates
- [ ] Mobile layout functional
- [ ] Accessibility standards met

## Local Preview

To see it in action:

```bash
cd /root/.clawdbot/workspace/projects/wineshipping-gift-cards
npm run dev
```

Open http://localhost:3000

---

**Note:** This is a high-fidelity prototype. The drag-and-drop editor interface is mocked and ready for Customer's Canvas integration.
