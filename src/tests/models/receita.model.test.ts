import { Receita } from '../../model/receita.model';  

describe('Receita Model', () => {
  it('should create a receita with valid fields', () => {
    const receita = new Receita();
    receita.id = 1;
    receita.descricao = 'Consulta veterinária';
    receita.valor = 150.75;
    receita.data = new Date();

    // Verifica se as propriedades foram atribuídas corretamente
    expect(receita.id).toBe(1);
    expect(receita.descricao).toBe('Consulta veterinária');
    expect(receita.valor).toBe(150.75);
    expect(receita.data).toBeInstanceOf(Date);
  });

  it('should have required fields defined', () => {
    const receita = new Receita();
    receita.descricao = 'Vacinação';
    receita.valor = 50.00;
    receita.data = new Date();

    expect(receita).toHaveProperty('descricao');
    expect(receita).toHaveProperty('valor');
    expect(receita).toHaveProperty('data');
  });

  it('should handle decimal values correctly', () => {
    const receita = new Receita();
    receita.valor = 100.99;  // Verifica se o valor com duas casas decimais é armazenado corretamente
    expect(receita.valor).toBe(100.99);
  });
});