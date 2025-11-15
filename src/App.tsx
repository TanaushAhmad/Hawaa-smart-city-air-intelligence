import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import Forecasting from './pages/Forecasting';
import Analysis from './pages/Analysis';
import Environmental from './pages/Environmental';
import Layout from './components/layout/Layout';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
              <Home />
            </Layout>} />
        <Route path="/dashboard" element={<Layout>
              <Dashboard />
            </Layout>} />
        <Route path="/map" element={<Layout>
              <MapView />
            </Layout>} />
        <Route path="/alerts" element={<Layout>
              <Alerts />
            </Layout>} />
        <Route path="/settings" element={<Layout>
              <Settings />
            </Layout>} />
        <Route path="/forecasting" element={<Layout>
              <Forecasting />
            </Layout>} />
        <Route path="/analysis" element={<Layout>
              <Analysis />
            </Layout>} />
        <Route path="/environmental" element={<Layout>
              <Environmental />
            </Layout>} />
      </Routes>
    </BrowserRouter>;
}