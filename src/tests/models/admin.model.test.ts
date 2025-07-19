// import { Admin } from '../../model/admin.model'; 

// describe('Admin Model', () => {

//   it('should create an admin with valid fields', () => {
//     const admin = new Admin();
//     admin.nome = 'Carlos';
//     admin.sobrenome = 'Oliveira';
//     admin.cpf = '12345678901';
//     admin.cnpj = '12345678000123';
//     admin.rua = 'Rua Exemplo';
//     admin.numero = 123;
//     admin.bairro = 'Bairro Exemplo';
//     admin.cidade = 'Cidade Exemplo';
//     admin.complemento = 'Apto 101';
//     admin.email = 'carlos@exemplo.com';
//     admin.telefone = '11987654321';
//     admin.cargo = 'Gerente';
//     admin.data_admissao = new Date('2023-01-01');
//     admin.senha_hash = 'senha_hashed';
//     admin.criado_em = new Date();

//     // Verificando se os valores foram atribuídos corretamente
//     expect(admin.nome).toBe('Carlos');
//     expect(admin.sobrenome).toBe('Oliveira');
//     expect(admin.cpf).toBe('12345678901');
//     expect(admin.cnpj).toBe('12345678000123');
//     expect(admin.rua).toBe('Rua Exemplo');
//     expect(admin.numero).toBe(123);
//     expect(admin.bairro).toBe('Bairro Exemplo');
//     expect(admin.cidade).toBe('Cidade Exemplo');
//     expect(admin.complemento).toBe('Apto 101');
//     expect(admin.email).toBe('carlos@exemplo.com');
//     expect(admin.telefone).toBe('11987654321');
//     expect(admin.cargo).toBe('Gerente');
//     expect(admin.data_admissao).toEqual(new Date('2023-01-01'));
//     expect(admin.senha_hash).toBe('senha_hashed');
//     expect(admin.criado_em).toBeInstanceOf(Date);
//   });

//   it('should have created_at with a valid date', () => {
//     const admin = new Admin();
//     admin.criado_em = new Date();

//     // Verificando se a data de criação foi atribuída corretamente
//     expect(admin.criado_em).toBeInstanceOf(Date);
//   });

//   it('should handle the data_admissao as Date type', () => {
//     const admin = new Admin();
//     admin.data_admissao = new Date('2023-01-01');

//     // Verificando se a data_admissao é uma instância de Date
//     expect(admin.data_admissao).toBeInstanceOf(Date);
//   });

//   it('should have required fields defined', () => {
//     const admin = new Admin();
//     admin.nome = 'João';
//     admin.sobrenome = 'Silva';
//     admin.cpf = '98765432109';
//     admin.cnpj = '98765432000198';
//     admin.rua = 'Rua Exemplo 2';
//     admin.numero = 100;
//     admin.bairro = 'Centro';
//     admin.cidade = 'São Paulo';
//     admin.complemento = 'Apto 202';
//     admin.email = 'joao@exemplo.com';
//     admin.telefone = '11999887766';
//     admin.cargo = 'Diretor';
//     admin.data_admissao = new Date('2023-02-01');
//     admin.senha_hash = 'hashed_password';
//     admin.criado_em = new Date();

//     // Verificando se todos os campos obrigatórios estão definidos
//     expect(admin).toHaveProperty('nome');
//     expect(admin).toHaveProperty('sobrenome');
//     expect(admin).toHaveProperty('cpf');
//     expect(admin).toHaveProperty('cnpj');
//     expect(admin).toHaveProperty('rua');
//     expect(admin).toHaveProperty('numero');
//     expect(admin).toHaveProperty('bairro');
//     expect(admin).toHaveProperty('cidade');
//     expect(admin).toHaveProperty('complemento');
//     expect(admin).toHaveProperty('email');
//     expect(admin).toHaveProperty('telefone');
//     expect(admin).toHaveProperty('cargo');
//     expect(admin).toHaveProperty('data_admissao');
//     expect(admin).toHaveProperty('senha_hash');
//     expect(admin).toHaveProperty('criado_em');
//   });
// });