import swaggerAutogen from 'swagger-autogen';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  info: {
    title: 'API Clínica Veterinária',
    version: '1.0.0',
    description: 'Documentação interativa da API da Clínica Veterinária',
  },
  host: `progweb-apiveterinaria.onrender.com`,
  basePath: '/api/v1',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    { name: 'Auth', description: 'Authentication endpoints' },
    { name: 'Users', description: 'User management endpoints' },
    { name: 'Cobrança', description: 'Cobranças management endpoints' },
    { name: 'Consulta', description: 'Consultas management endpoints' },
    { name: 'Estoque', description: 'Estoque management endpoints' },
    { name: 'Medicamento', description: 'Medicamento management endpoints' },
    { name: 'Notificação', description: 'Notificação management endpoints' },
    { name: 'Paciente', description: 'Paciente management endpoints' },
    { name: 'Prontuário', description: 'Prontuário management endpoints' },
    { name: 'Receitas', description: 'Receita management endpoints' },
    { name: 'Tutor', description: 'Tutor management endpoints' },
    { name: 'Veterinário', description: 'Veterinário management endpoints' },
    { name: 'Admins', description: 'Admin management endpoints' },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'Insira as informações do JWT token seguindo o padrão: Bearer <token>',
    },
  },
  definitions: {
    AddUser: {
      username: 'testuser',
      password: 'password123',
    },
    Login: {
      username: 'testuser',
      password: 'password123',
    },
    LoginResponse: {
      message: 'Login bem sucedido!',
      token: 'dhsjgskjfgsdjhfsifuweifgsjjsldsçfdfbçcdsjcsjksçckjsdckjsç',
    },
    User: {
      username: 'antonio',
      password: 'dhbshjkvhsfjvjsdkfhjvskdfjvskj',
    },
    Admin: {
      admin_id: 1,
      nome: 'Maria',
      sobrenome: 'Silva',
      cpf: '12345678900',
      email: 'admin@vet.com',
      senha: '123456',
    },
    Tutor: {
      nome: 'João',
      sobrenome: 'Silva',
      cpf: '12345678900',
      data_nascimento: '2000-05-01',
      rua: 'rua teste',
      numero: '801',
      bairro: 'bairro teste',
      cidade: 'city',
      complemento: 'null',
      email: 'joao@email.com',
      telefone: '11999999999',
    },
    Paciente: {
      tutor_id: '6',
      nome: 'Rex',
      sexo: 'M',
      raca: 'Labrador',
      cor_pelagem: 'Caramelo',
      data_nascimento: '2020-01-01',
      animal_id: '9',
    },
    Consulta: {
      consulta_id: 1,
      data: '2025-07-17T10:00:00Z',
      motivo: 'Vacinação',
      paciente: 1,
      tutor: 1,
      veterinario: 2,
    },
    Receita: {
      id: 1,
      descricao: 'Antibiótico 2x ao dia',
      valor: 120.50,
    },
    Medicamento: {
      med_id: 1,
      nome: 'Vermífugo X',
      principio_ativo: 'Albendazol',
      forma_farmaceutica: 'Comprimido',
      dosagem: '500mg',
      quantidade: 50,
      validade: '2025-12-31',
    },
    Estoque: {
      estoque_id: 1,
      medicamentos: ['id_medicamento_1', 'id_medicamento_2'],
    },
    Cobranca: {
      id: 1,
      cliente: 'João',
      valor: 150.0,
      status: 'pago',
    },
    Prontuario: {
      prontuario_id: 1,
      consulta: 1,
      observacoes: 'Animal saudável',
      prescricao: 'Repouso e alimentação',
    },
    Notificacao: {
      id: 1,
      mensagem: 'Vacina agendada',
      tipo: 'lembrete',
      dataEnvio: '2025-07-15T10:00:00Z',
    },
    Veterinario: {
      vet_id: 1,
      nome: 'Ana',
      sobrenome: 'Costa',
      crmv: 'SP123456',
      telefone: '11987654321',
      email: 'ana.vet@clinicavet.com',
      consultas: [],
    },
  },
};

const output = './docs/swagger.json';
const endpoints = ['./src/routers/index.ts'];

swaggerAutogen()(output, endpoints, config);