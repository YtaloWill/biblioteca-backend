import { Connection } from 'mongoose';
import { ObraSchema } from './schemas/obra.schema';

export const obrasProviders = [
  {
    provide: 'OBRA_MODEL',
    useFactory: (connection: Connection) => connection.model('Obra', ObraSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];