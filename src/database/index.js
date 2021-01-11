import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    // Conex�o com o mongo modo Desenvolvimento
    // this.mongoConnection = mongoose.connect(
    //   'mongodb://192.168.99.100:27017/mkedgetenants',
    //   { useNewUrlParser: true, useUnifiedTopology: true }
    // );

    // Conex�o com mongo modo Produ��o
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/mkedgetenants',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin',
        auth: {
          user: 'root',
          password: 'Falcon2931',
        },
      }
    );
  }
}

export default new Database();
