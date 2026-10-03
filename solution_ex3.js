const portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
const portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
const portPowersKw = [250, 150, 60, 250, 60, 150];

const s01Index = portIds.indexOf('S01');
portStatuses[s01Index] = 'CHARGING';

const s03Index = portIds.indexOf('S03');
portStatuses[s03Index] = 'AVAILABLE';

let availableCount = 0;
let highestPower = 0;
let highestPowerPort = '';

for (let i = 0; i < portIds.length; i++) {
  if (portStatuses[i] === 'AVAILABLE') {
    availableCount++;

    if (portPowersKw[i] > highestPower) {
      highestPower = portPowersKw[i];
      highestPowerPort = portIds[i];
    }
  }
}

console.log('=== BÁO CÁO TRẠNG THÁI TRỤ SẠC ===');

for (let i = 0; i < portIds.length; i++) {
  console.log(
    portIds[i],
    '- Trạng thái:',
    portStatuses[i],
    '- Công suất:',
    portPowersKw[i],
    'kW'
  );
}

console.log('Tổng số trụ AVAILABLE:', availableCount);
console.log('Trụ AVAILABLE có công suất cao nhất:', highestPowerPort);
console.log('Công suất cao nhất:', highestPower, 'kW');