import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// react-router utilise TextEncoder, absent de jsdom
Object.assign(globalThis, { TextEncoder, TextDecoder });

// jsdom n'implémente pas window.scrollTo
window.scrollTo = () => {};
