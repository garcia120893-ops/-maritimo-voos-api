const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rota principal para buscar voos offshore (aceita ?date=YYYY-MM-DD)
app.get('/api/voos', (req, res) => {
  const date = req.query.date || new Date().toISOString().split('T')[0];

  const flights = [
    {
      id: '1',
      flightNumber: '#509576661',
      time: '06:20',
      actualTime: '06:26',
      aircraftReg: 'PS-BTK',
      aircraftModel: 'AW139',
      company: 'Bristow',
      origin: 'Vitória (SBVT)',
      originCode: 'SBVT',
      destinationUnit: 'MOP1',
      unitAlias: 'Plataforma MOP-1',
      status: 'landed'
    },
    {
      id: '2',
      flightNumber: '#509575000',
      time: '06:30',
      aircraftReg: 'PR-OON',
      aircraftModel: 'AW189',
      company: 'Omni',
      origin: 'Jacarepaguá (SBJR)',
      originCode: 'SBJR',
      destinationUnit: 'FPMA',
      unitAlias: 'FPSO Cidade de Mangaratiba',
      status: 'transferred'
    },
    {
      id: '3',
      flightNumber: '#509576632',
      time: '06:30',
      actualTime: '06:35',
      aircraftReg: 'PR-JBI',
      aircraftModel: 'S-92A',
      company: 'Líder',
      origin: 'São Tomé (SBST)',
      originCode: 'SBST',
      destinationUnit: 'P-43',
      unitAlias: 'FPSO P-43',
      status: 'landed'
    },
    {
      id: '4',
      flightNumber: '#509576721',
      time: '06:30',
      actualTime: '09:10',
      aircraftReg: 'PR-CGD',
      aircraftModel: 'S-92A',
      company: 'CHC',
      origin: 'Macaé (SBME)',
      originCode: 'SBME',
      destinationUnit: 'NS58',
      unitAlias: 'VALARIS DS-8',
      status: 'landed'
    },
    {
      id: '5',
      flightNumber: '#509576824',
      time: '06:30',
      aircraftReg: 'PR-BGZ',
      aircraftModel: 'AW139',
      company: 'CHC',
      origin: 'Cabo Frio (SBCB)',
      originCode: 'SBCB',
      destinationUnit: 'P-76',
      unitAlias: 'FPSO P-76 (Búzios)',
      status: 'landed'
    }
  ];

  res.json({
    date: date,
    total: flights.length,
    flights: flights
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API do Marítimo Pro rodando na porta ${PORT}`);
});
