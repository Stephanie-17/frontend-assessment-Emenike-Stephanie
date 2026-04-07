import '@testing-library/jest-dom';

// Mock Next.js Image component for testing
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => {
    // Return a regular img tag that Jest can handle
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={typeof src === 'object' ? src.src : src} alt={alt} {...props} />;
  },
}));