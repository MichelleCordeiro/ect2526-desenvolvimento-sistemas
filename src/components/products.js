export default function Produtos() {
    const products = [
        {title: 'AAAA', id: 1},
        {title: 'BBBB', id: 2},
        {title: 'CCCC', id: 3}
    ]
    
    const dados = [
        {title: 'Cabbage', cat: "vegetable"},
        {title: 'Garlic', cat: "vegetable"},
        {title: 'Apple', cat: "fruit"}
    ]
    
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    )

    const dadosFormatados = dados.map((p) => (
        <li key={p.id}>
            {p.title} - {p.cat}
        </li>
    ))
    
    return (
        <div>
            <ul> {listItems} </ul>
            <ol>{dadosFormatados}</ol>
        </div>
    )
}
