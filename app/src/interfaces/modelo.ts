import { Comparavel } from "./comparavel";
import { Imprimivel } from "./imprimivel";

// Uma Classe nao pode estender pra mais de uma classe.
// Uma Classe pode implementar quantas interfaces forem necessárias
// Uma Interface pode estender quantas interfaces forem necessárias
export interface Modelo<T> extends Imprimivel, Comparavel<T>{
}