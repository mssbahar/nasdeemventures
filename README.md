# Nasdeem Ventures Website

A modern, responsive website for Nasdeem Ventures Sdn Bhd - Malaysia's leading Bumiputera company in scheduled waste management and industrial solutions.

## Features

- **Modern Design**: Clean, professional design with custom theme
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: Built with accessibility in mind

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Montserrat, Amethysta, Anonymous Pro

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nasdeem-ventures-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About pages (Our Story, Our Team, Certifications)
│   ├── services/          # Services pages
│   ├── contact/           # Contact page
│   ├── media/             # Media page
│   ├── career/            # Career page
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── HeroSection.tsx    # Hero section component
│   ├── SectionWrapper.tsx # Section wrapper with animations
│   ├── ServiceCard.tsx    # Service card component
│   └── FloatingElements.tsx # WhatsApp and scroll-to-top buttons
├── public/                # Static assets
└── ...config files
```

## Pages

### Homepage
- Hero section with video background
- Who Are We section
- Our Services showcase
- Why Choose Nasdeem section
- Trusted By section

### About
- **Our Story**: Company history, mission, vision, founder story, timeline
- **Our Team**: Team members with positions and bios
- **Certifications**: Filterable certification gallery

### Services
- **Main Services Page**: Overview of all services
- **Scheduled Waste Management**: Detailed page with waste categories and process
- **Other Services**: Placeholder pages for future content

### Other Pages
- **Media**: News, events, and newsletter
- **Career**: Job openings and employee stories
- **Contact**: Contact form, company info, and FAQ

## Customization

### Theme
The website uses a custom theme defined in `app/globals.css`. You can modify colors, fonts, and other design tokens by updating the CSS variables.

### Content
- Update company information in the respective page components
- Replace placeholder images with actual company photos
- Modify service descriptions and team member information

### Styling
- All styles use TailwindCSS classes
- Custom components are styled with the theme variables
- Responsive design is built-in with Tailwind's responsive utilities

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Deploy the `.next` folder to your hosting platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal JavaScript bundle
- CSS optimization with TailwindCSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Nasdeem Ventures Sdn Bhd.

## Support

For technical support or questions about the website, please contact:
- Email: general@nasdeemventures.com
- Phone: 604-5010800
