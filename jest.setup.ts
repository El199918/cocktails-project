import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Patch global TextEncoder/TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as any;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as any;
}
