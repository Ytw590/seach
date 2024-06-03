let palavrasArmazenadas = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { palavras } = req.body;
    palavrasArmazenadas = palavras;
    res.status(200).json({ message: 'Palavras armazenadas com sucesso!' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
