import MenuNav from '@/features/menu/MenuNav';
import Container from '@/shared/ui/container/Container';
import './Layout.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <div className="layout">
        <aside className="layout__menu">
          <MenuNav />
        </aside>
        <main className="layout__content">{children}</main>
      </div>
    </Container>
  );
};

export default Layout;
