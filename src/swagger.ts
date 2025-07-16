import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Clínica Veterinária',
      version: '1.0.0',
      description: 'Documentação interativa da API da Clínica Veterinária',
    },
    servers: [
      {
        url: 'http://localhost:12345',
      },
    ],
  },
  apis: ['src/routers/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}