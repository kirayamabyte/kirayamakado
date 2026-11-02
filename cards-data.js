// cards-data.js - 『赤城カード対戦』カードマスターデータ

const CARD_DATABASE = {
  units: [
    { id: 'u1', name: '赤城特務機 Commander', cap: 4, hp: 140, range: 170, color: '#ff3333', desc: '指揮官用の重甲・高威力ユニット。' },
    { id: 'u2', name: '九九式汎用量産機', cap: 2, hp: 75, range: 130, color: '#4a90e2', desc: '低コストで量産に適した機動機体。' },
    { id: 'u3', name: '赤城強襲型 Assault', cap: 3, hp: 95, range: 110, color: '#e67e22', desc: '近接射撃に長けた高機動アサルト。' },
    { id: 'u4', name: '零式長距離支援機', cap: 5, hp: 110, range: 240, color: '#2ecc71', desc: '後方からの超長距離支援射撃。' }
  ],
  tactics: [
    { id: 't1', name: '作戦：電撃強襲', cap: 2, effect: 'atk', val: 1.3, desc: '攻撃力 +30%' },
    { id: 't2', name: '作戦：鉄壁陣形', cap: 2, effect: 'hp', val: 1.3, desc: '耐久力(HP) +30%' },
    { id: 't3', name: '作戦：精密照準', cap: 1, effect: 'range', val: 1.25, desc: '射程距離 +25%' },
    { id: 't4', name: '作戦：緊急補給', cap: 3, effect: 'capRegen', val: 1.4, desc: 'CAP回復速度 +40%' }
  ],
  weapons: [
    { id: 'w1', name: '兵装：高出力ライフル', cap: 2, atk: 0.4, desc: '標準的かつ高威力のビーム兵装。' },
    { id: 'w2', name: '兵装：拡散型キャノン', cap: 3, atk: 0.6, desc: '重厚なダメージを与える主砲。' },
    { id: 'w3', name: '兵装：連射マシンガン', cap: 1, atk: 0.25, desc: 'コストが低く扱いやすい軽量兵器。' },
    { id: 'w4', name: '兵装：対艦ガトリング', cap: 4, atk: 0.8, desc: '超高コスト・絶大な火力を誇る重兵装。' }
  ]
};