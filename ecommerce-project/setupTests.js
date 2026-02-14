import '@testing-library/jest-dom';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
///Add methods to expect()
// expect().toBeInTheDocument()
// expect().toHaveTextContent()
// expect().toHaveAttribute()