import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '@/styles/Auth.module.css';

export default function AuthPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    // Проверяем, может быть пароль уже введен
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth');
        if (response.ok) {
          const data = await response.json();
          if (data.authenticated) {
            router.push(redirect || '/');
          }
        }
      } catch (err) {
        // Игнорируем ошибки при проверке
      }
    };
    checkAuth();
  }, [router, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Пароль верный, редиректим на нужную страницу
        router.push(redirect || '/');
      } else {
        setError(data.error || 'Неверный пароль');
      }
    } catch (err) {
      setError('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Вход на сайт</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Вход на сайт</h1>
            <p className={styles.subtitle}>Введите пароль для доступа</p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Пароль"
                  className={styles.input}
                  autoFocus
                  disabled={loading}
                />
              </div>
              {error && <div className={styles.error}>{error}</div>}
              <button
                type="submit"
                className={styles.button}
                disabled={loading || !password}
              >
                {loading ? 'Проверка...' : 'Войти'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
