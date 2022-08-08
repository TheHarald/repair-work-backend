## Backend приложение для системы ремонтных заявок.

#### Для запуска используйте

```
npm install
```

##### Создайте файл

```
src\sequelize\db.config.ts
```

##### Пример файла

```ts
export interface IDatabaseConfig {
  username: string;
  password: string;
  database: string;
}

export const DatabaseConfig: IDatabaseConfig = {
  username: "username",
  password: "username",
  database: "database",
};
```

```
npm run dev
```
