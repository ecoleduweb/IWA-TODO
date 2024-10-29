import '#style/App.scss';
import TheHeader from '#layout/TheHeader';
import TheFooter from '#layout/TheFooter';
import TheMain from '#layout/TheMain';

const App = () => {
  return (
    <div className="flex-between flex-column fill-height">
      <TheHeader />
      <TheMain />
      <TheFooter />
    </div>
  );
};

export default App;

