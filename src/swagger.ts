import swaggerAutogen from 'swagger-autogen';

const config = {
  info: {
    title: 'API Clínica Veterinária',
    version: '1.0.0',
    description: 'Documentação interativa da API da Clínica Veterinária',
  },
  host: `localhost:${process.env.PORT || 3000}`,
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
    addUser: {
      $username: 'testuser',
      $password: 'password123',
    },
    Login: {
      $username: 'testuser',
      $password: 'password123',
    },
    LoginResponse: {
      message: 'Login bem sucedido!',
      token: 'dhsjgskjfgsdjhfsifuweifgsjjsldsçfdfbçcdsjcsjksçckjsdckjsç',
    },
    User: {
      id: 1,
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
      tutor_id: 1,
      nome: 'João',
      sobrenome: 'Silva',
      telefone: '11999999999',
      email: 'joao@email.com',
      cpf: '12345678900',
    },
    Paciente: {
      animal_id: 1,
      nome: 'Rex',
      especie: 'Cachorro',
      raca: 'Labrador',
      data_nascimento: '2020-01-01',
      tutor: 1,
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
      createdAt: '2025-07-17T10:00:00Z',
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
      createdAt: '2025-07-17T10:00:00Z',
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
      criado_em: '2025-07-17T10:00:00Z',
      consultas: [],
    },
  },
};

const output = './docs/swagger.json';
const endpoints = ['./src/routers/index.ts'];

swaggerAutogen()(output, endpoints, config);