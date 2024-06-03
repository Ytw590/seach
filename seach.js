export default function handler(req, res) {
  if (req.method === 'GET') {
    const { palavra } = req.query;
    // Faça a lógica para encontrar a palavra mais próxima com base na palavra recebida
    const palavraMaisProxima = 'suaPalavraMaisProxima';
    res.status(200).json({ palavraMaisProxima });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
