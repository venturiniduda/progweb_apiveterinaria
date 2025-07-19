// import { Estoque } from '../../model/estoque.model';  
// import { Medicamento } from '../../model/medicamento.model';  

// describe('Estoque Model', () => {
  
//   it('should create a estoque with valid fields', () => {
//     const medicamento = new Medicamento();  
//     medicamento.med_id = 1; 

//     const estoque = new Estoque();
//     estoque.estoque_id = 1;
//     estoque.med_id = medicamento.med_id; 
//     estoque.lote = 12345;
//     estoque.validade = new Date('2025-12-31');
//     estoque.quantidade_atual = 100;
//     estoque.quantidade_minima = 10;
//     estoque.localizacao = 'Ala 1, Prateleira 3';
//     estoque.criado_em = new Date();
//     estoque.medicamento = medicamento;  // Relacionamento OneToMany com Medicamento

//     // Verificando se os valores foram atribuídos corretamente
//     expect(estoque.estoque_id).toBe(1);
//     expect(estoque.med_id).toBe(medicamento.med_id);
//     expect(estoque.lote).toBe(12345);
//     expect(estoque.validade).toEqual(new Date('2025-12-31'));
//     expect(estoque.quantidade_atual).toBe(100);
//     expect(estoque.quantidade_minima).toBe(10);
//     expect(estoque.localizacao).toBe('Ala 1, Prateleira 3');
//     expect(estoque.criado_em).toBeInstanceOf(Date);
//     expect(estoque.medicamento).toBe(medicamento);
//   });

//   it('should have required fields defined', () => {
//     const estoque = new Estoque();
//     estoque.med_id = 1;
//     estoque.lote = 12345;
//     estoque.validade = new Date('2025-12-31');
//     estoque.quantidade_atual = 100;
//     estoque.quantidade_minima = 10;
//     estoque.localizacao = 'Ala 1, Prateleira 3';
//     estoque.criado_em = new Date();

//     expect(estoque).toHaveProperty('med_id');
//     expect(estoque).toHaveProperty('lote');
//     expect(estoque).toHaveProperty('validade');
//     expect(estoque).toHaveProperty('quantidade_atual');
//     expect(estoque).toHaveProperty('quantidade_minima');
//     expect(estoque).toHaveProperty('localizacao');
//     expect(estoque).toHaveProperty('criado_em');
//   });

//   it('should correctly handle OneToMany relationship with Medicamento', () => {
//     const medicamento = new Medicamento();  
//     medicamento.med_id = 1;  
    
//     const estoque = new Estoque();
//     estoque.medicamento = medicamento;  // Relacionamento OneToMany com Medicamento

//     // Verificando se o relacionamento OneToMany foi atribuído corretamente
//     expect(estoque.medicamento).toBe(medicamento);
//   });

//   it('should handle the criado_em as Date type', () => {
//     const estoque = new Estoque();
//     estoque.criado_em = new Date();

//     // Verificando se criado_em é uma instância de Date
//     expect(estoque.criado_em).toBeInstanceOf(Date);
//   });
// });