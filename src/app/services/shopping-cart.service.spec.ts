import { TestBed } from '@angular/core/testing';

import { CartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
