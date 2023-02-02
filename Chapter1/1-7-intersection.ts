{
  /*
   * Intersection Types: and
   * 다양한 타입들을 하나로 묶어서 선언 가능
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  interWork({
    name: 'min',
    score: 10,
    employeeId: 123,
    work: () => {},
  });
}
