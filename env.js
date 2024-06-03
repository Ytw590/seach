export default function handler(req, res) {
  if (req.method === 'POST') {
    const { palavras } = req.body;
    // Faça o que quiser com as palavras recebidas, como salvar no banco de dados
    res.status(200).json({ message: 'Palavras recebidas com sucesso!' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
