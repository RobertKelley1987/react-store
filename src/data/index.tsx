import { apparel } from './apparel';
import { albums } from './albums';
import { accessories } from './accessories';
import { Product } from '../types';

export const data: Product[] = [...apparel, ...albums, ...accessories];