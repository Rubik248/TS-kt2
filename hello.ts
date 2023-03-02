class Point3D {
  x: number;
  y: number;
  z: number;
}
let pointFirst: Point3D = new Point3D();
pointFirst.x = 42;
pointFirst.y = 12;
pointFirst.z = 33;
console.log(`x: ${pointFirst.x}; y: ${pointFirst.y}; z:${pointFirst.z} `);

let pointSecond: Point3D = new Point3D();
pointSecond.x = 65;
pointSecond.y = 99;
pointSecond.z = 0;
console.log(`x: ${pointSecond.x}; y: ${pointSecond.y}; z:${pointSecond.z} `);

let pointThird: Point3D = new Point3D();
pointThird.x = 11;
pointThird.y = 23;
pointThird.z = 1;
console.log(`x: ${pointThird.x}; y: ${pointThird.y}; z:${pointThird.z} `);
