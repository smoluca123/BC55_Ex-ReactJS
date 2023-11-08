import Header from './Header';
import data from './data.json';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Preview from './Preview';
import GlassList from './GlassList';
import { useState } from 'react';

export default function Layout() {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const handleSelectGlass = (glass) => {
    setSelectedGlass(glass);
  };
  return (
    <div className="container-fruid">
      <Header />
      <Preview glassPreview={selectedGlass} />
      <GlassList
        data={data}
        onSelect={handleSelectGlass}
        selectedGlass={selectedGlass}
      />
    </div>
  );
}
