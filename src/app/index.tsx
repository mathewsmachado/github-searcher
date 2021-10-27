import { StyleProvider } from 'app/styles';
import { Home } from 'app/pages';

export function App() {
  return (
    <StyleProvider>
      <Home />
    </StyleProvider>
  );
}
