const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://demo-flight-production-c887.up.railway.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  credentials: true,
  maxAge: 86400,
};

export default corsOptions;
