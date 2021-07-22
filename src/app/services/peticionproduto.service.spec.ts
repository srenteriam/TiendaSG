import { TestBed } from '@angular/core/testing';

import { PeticionprodutoService } from './peticionproduto.service';

describe('PeticionprodutoService', () => {
  let service: PeticionprodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionprodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
