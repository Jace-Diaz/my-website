# Zentic E-commerce Website

A modern e-commerce website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Product categories
- Shopping cart functionality
- Stripe payment integration
- Social media integration
- Newsletter subscription

## Prerequisites

- Node.js 14.x or later
- npm or yarn
- Stripe account (for payment processing)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd zentic-store
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Next.js pages
├── styles/        # Global styles
└── utils/         # Utility functions
```

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Stripe
- React Icons
- Heroicons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 