import styles from './page.module.css';
import Login from '@/app/ui/components/login/Login';

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
