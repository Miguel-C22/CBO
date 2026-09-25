import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ModuleRegistry,
  CartesianChartModule,
  BarSeriesModule,
  CategoryAxisModule,
  NumberAxisModule,
  LegendModule,
} from 'ag-charts-community'
import './index.css'
import App from './App.tsx'

ModuleRegistry.registerModules([
  CartesianChartModule,
  BarSeriesModule,
  CategoryAxisModule,
  NumberAxisModule,
  LegendModule,
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
