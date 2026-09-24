const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rota robusta de voos offshore para a API do Marítimo Pro
app.get('/api/voos', (req, res) => {
  const date = req.query.date || new Date().toISOString().split('T')[0];
  
  // Semente baseada na data para gerar dados dinâmicos consistentes por dia
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
    },
    {
      id: `6_${seed}`,
      flightNumber: `#50${seed}607`,
      time: '06:35',
      actualTime: '07:51',
      aircraftReg: 'PR-JHI',
      aircraftModel: 'AW139',
      company: 'Líder',
      origin: 'São Tomé (SBST)',
      originCode: 'SBST',
      destinationUnit: 'P-31',
      unitAlias: 'FPSO P-31',
      status: 'landed'
    },
    {
      id: `7_${seed}`,
      flightNumber: `#50${seed}685`,
      time: '06:45',
      aircraftReg: 'PR-OHV',
      aircraftModel: 'AW139',
      company: 'Omni',
      origin: 'Maricá (SBMI)',
      originCode: 'SBMI',
      destinationUnit: 'P-74',
      unitAlias: 'FPSO P-74 (Búzios)',
      status: 'airborne'
    },
    {
      id: `8_${seed}`,
      flightNumber: `#50${seed}696`,
      time: '06:45',
      actualTime: '07:12',
      aircraftReg: 'PS-BTO',
      aircraftModel: 'AW139',
      company: 'Bristow',
      origin: 'Macaé (SBME)',
      originCode: 'SBME',
      destinationUnit: 'P-55',
      unitAlias: 'Plataforma P-55',
      status: 'landed'
    },
    {
      id: `9_${seed}`,
      flightNumber: `#50${seed}700`,
      time: '07:25',
      actualTime: '08:15',
      aircraftReg: 'PR-BGT',
      aircraftModel: 'S-92A',
      company: 'Omni',
      origin: 'Maricá (SBMI)',
      originCode: 'SBMI',
      destinationUnit: 'P-75',
      unitAlias: 'FPSO P-75 (Búzios)',
      status: 'landed'
    },
    {
      id: `10_${seed}`,
      flightNumber: `#50${seed}701`,
      time: '08:10',
      actualTime: '08:42',
      aircraftReg: 'PR-JKM',
      aircraftModel: 'S-92A',
      company: 'Líder',
      origin: 'Vitória (SBVT)',
      originCode: 'SBVT',
      destinationUnit: 'P-58',
      unitAlias: 'FPSO P-58 (Parque das Baleias)',
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
