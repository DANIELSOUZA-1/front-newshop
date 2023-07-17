export interface CartItem
{
  id: number;
  produtoId: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export interface Carrinho 
{
  id: string,
  itens: CartItem[]
}
