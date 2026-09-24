const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rota de voos offshore
app.get('/api/voos', (req, res) => {
  const date = req.query.date || new Date().toISOString().split('T')[0];
  const dateObj = new Date(date);
  const seed = dateObj.getDate() + (dateObj.getMonth() + 1) * 31;

  const flights = [
    {
      id: `1_${seed}`,
      flightNumber: `#50${seed}661`,
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
      id: `2_${seed}`,
      flightNumber: `#50${seed}500`,
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
      id: `3_${seed}`,
      flightNumber: `#50${seed}632`,
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
      id: `4_${seed}`,
      flightNumber: `#50${seed}721`,
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
      id: `5_${seed}`,
      flightNumber: `#50${seed}824`,
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

// Nova rota de condições meteorológicas (METAR / Clima nas Bases Offshore)
app.get('/api/clima', (req, res) => {
  const weatherStations = [
    {
      base: 'Macaé',
      code: 'SBME',
      condition: 'Teto Baixo (Voo Condicionado)',
      statusColor: 'yellow',
      wind: '080@12KT',
      visibility: '5000M',
      ceiling: 'OVC008',
      temp: '24°C',
      updatedAt: new Date().toLocaleTimeString('pt-BR')
    },
    {
      base: 'Jacarepaguá',
      code: 'SBJR',
      condition: 'VFR / Bom para Voo',
      statusColor: 'green',
      wind: '110@08KT',
      visibility: '10KM+',
      ceiling: 'SCT025',
      temp: '27°C',
      updatedAt: new Date().toLocaleTimeString('pt-BR')
    },
    {
      base: 'São Tomé',
      code: 'SBST',
      condition: 'VFR / Bom para Voo',
      statusColor: 'green',
      wind: '090@10KT',
      visibility: '10KM+',
      ceiling: 'FEW020',
      temp: '26°C',
      updatedAt: new Date().toLocaleTimeString('pt-BR')
    },
    {
      base: 'Maricá',
      code: 'SBMI',
      condition: 'VFR / Bom para Voo',
      statusColor: 'green',
      wind: '100@09KT',
      visibility: '10KM+',
      ceiling: 'FEW022',
      temp: '26°C',
      updatedAt: new Date().toLocaleTimeString('pt-BR')
    },
    {
      base: 'Vitória',
      code: 'SBVT',
      condition: 'VFR / Bom para Voo',
      statusColor: 'green',
      wind: '070@11KT',
      visibility: '9000M',
      ceiling: 'SCT030',
      temp: '28°C',
      updatedAt: new Date().toLocaleTimeString('pt-BR')
    },
    {
      base: 'Cabo Frio',
      code: 'SBCB',
      condition: 'Restrição de Vento / Teto',
      statusColor: 'yellow',
      wind: '130@18G25KT',
      visibility: '6000M',
      ceiling: 'BKN012',
      temp: '23°C',
      updatedAt: new Date().toLocaleTimeString('pt-BR')
    }
  ];

  res.json({
    source: 'DECEA / AISWEB (Simulado em Tempo Real)',
    stations: weatherStations
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API do Marítimo Pro rodando na porta ${PORT}`);
});
