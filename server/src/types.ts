export type Environment = "development" | "production" | "test";

export interface Config {
  environment: Environment;

  host: string;
  port: number;
}
