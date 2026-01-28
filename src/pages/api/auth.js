export default async function handler(req, res) {
  const correctPassword = process.env.SITE_PASSWORD;
  
  // Если пароль не установлен, возвращаем ошибку
  if (!correctPassword) {
    return res.status(500).json({ error: 'Password protection is not configured' });
  }

  if (req.method === 'POST') {
    const { password } = req.body;

    if (password === correctPassword) {
      // Устанавливаем cookie с паролем
      res.setHeader(
        'Set-Cookie',
        `site_password=${correctPassword}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400` // 24 часа
      );
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ error: 'Неверный пароль' });
    }
  }

  if (req.method === 'GET') {
    // Проверка аутентификации
    const passwordCookie = req.cookies.site_password;

    if (passwordCookie === correctPassword) {
      return res.status(200).json({ authenticated: true });
    } else {
      return res.status(401).json({ authenticated: false });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
