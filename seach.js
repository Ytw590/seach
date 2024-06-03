// api/buscarPalavra.js

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { prefixo } = req.query;
    const palavraMaisProxima = encontrarPalavraMaisProxima(prefixo);
    res.status(200).json({ palavraMaisProxima });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

function encontrarPalavraMaisProxima(prefixo) {
    // Filtrar palavras que começam com o prefixo
    const palavrasCoincidentes = palavrasArmazenadas.filter(palavra => palavra.startsWith(prefixo));
    
    // Se não houver palavras coincidentes, retornar uma mensagem adequada
    if (palavrasCoincidentes.length === 0) {
        return 'Nenhuma palavra encontrada com esse prefixo';
    }
    
    // Ordenar as palavras por comprimento e retornar a primeira
    return palavrasCoincidentes.sort((a, b) => a.length - b.length)[0];
}
