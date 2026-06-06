const empdata: Map<string, number[]> =new Map();
empdata.set("Ram" ,[75000,5,5]);
empdata.set("sita",[55000,4,4]);
empdata.set("Raghu",[80000,5,5]);
empdata.set("Anjaneya",[30000,8,3]);
empdata.set("Eswar",[20000,9,2]);

const hikemap: Map<string,number> =new Map();

for(const key of empdata.keys()) {
    const  data = empdata .get(key)!;
    const  basesalary = data[0];
    const  experience = data[1];
    const rating = data[2];

    const hikepercentage = calculatehike(basesalary,experience,rating);
    hikemap.set(key, hikepercentage);

    console.log("Hike percentage of the employee");
    console.log(hikemap);

    function calculatehike(
        basesalary:number,
        experience:number,
        rating:number
    ): number {
        let variablepercentage =0;
        let bonus=0;
        let reward=0;
        if (rating >= 4) {
    variablepercentage = 15;
    bonus = 1500;
  } else if (rating >= 3) {
    variablepercentage = 10;
    bonus = 1200;
  } else {
    variablepercentage = 3;
    bonus = 300;
  }

  if (experience >= 5) {
    reward = 5000;
  }

  const hike =
    (basesalary * variablepercentage) / 100 + bonus + reward;

  return (hike / basesalary) * 100;
}


    }