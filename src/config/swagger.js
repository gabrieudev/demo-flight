import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Demo-Flight",
    version: "1.0.0",
    description: "Documentação da API Demo-Flight",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor de desenvolvimento",
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
      },
    },
  },
  security: [
    {
      ApiKeyAuth: [],
    },
  ],
  tags: [
    {
      name: "Users",
      description: "Endpoints relacionados a usuários",
    },
    {
      name: "Auth",
      description: "Endpoints relacionados a autenticação",
    },
    {
      name: "Flights",
      description: "Endpoints relacionados a voos",
    },
    {
      name: "Boarding Passes",
      description: "Endpoints relacionados a cartões de embarque",
    },
    {
      name: "Passengers",
      description: "Endpoints relacionados a passageiros",
    },
    {
      name: "Aircrafts",
      description: "Endpoints relacionados a aeronaves",
    },
  ],
};

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
});

export default swaggerSpec;
