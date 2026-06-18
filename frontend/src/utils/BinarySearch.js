export function binarySearchDoctor(
  doctors,
  target
) {

  let left = 0;
  let right =
    doctors.length - 1;

  while (left <= right) {

    const mid =
      Math.floor(
        (left + right) / 2
      );

    if (
      doctors[mid].name === target
    ) {
      return doctors[mid];
    }

    if (
      doctors[mid].name < target
    ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}