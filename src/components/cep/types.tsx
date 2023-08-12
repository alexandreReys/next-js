import { z } from "zod";
import { schemaForm } from "@/components/cep/schema";

export type FormProps = z.infer<typeof schemaForm>;

export type AddressProps = {
  cep: string,
  bairro: string,
  complemento: string,
  uf: string,
  logradouro: string,
  localidade: string,
};
