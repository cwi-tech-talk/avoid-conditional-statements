import Produto from './produto';
import cbrFunction from './cbr-function';
import ccrFunction from './ccr-function';

let mapping = new Map([
    [Produto.CBR, cbrFunction],
    [Produto.CCR, ccrFunction],
]);

export default function runByProduto(produto: Produto, args: any) {
    return mapping.get(produto)(args);
}