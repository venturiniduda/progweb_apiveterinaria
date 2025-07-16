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
    // Cria sessões que separa cada CRUD para cada entidade 
    {
      "name":"Auth",
      "description":"Authentication endpoints"
    },
    {
      "name":"Users",
      "description":"User management endpoints"
    },
    {
      "name":"Cobrança",
      "description":"Cobranças management endpoints"
    },
    {
      "name":"Consultas",
      "description":"Consultas management endpoints"
    },
    {
      "name":"Estoque",
      "description":"Estoque management endpoints"
    },
    {
      "name":"Medicamento",
      "description":"Medicamento management endpoints"
    },
    // adicionar restante
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: "Insira as informações do JWT token seguindo o padrão: Bearer <token>"
    },
  },
  definitions: {
    // são os exemplos de preenchimento de cada uma das entidades
    AddUser: {
      $username: "testuser",
      $password: "password123" 
    },
    Login: {
      $username: "testuser",
      $password: "password123"
    },
    LoginResponse: {
      message: "Login bem sucedido!",
      token: "dhsjgskjfgsdjhfsifuweifgsjjsldsçfdfbçcdsjcsjksçckjsdckjsç"
    },
    User: {
      id: 1,
      username: 'antonio'
    },
    // adicionar restante 
  }
};

const output = './docs/swagger.json';
const endpoints = ['./src/routers/index.ts'];

swaggerAutogen()(output, endpoints, config);