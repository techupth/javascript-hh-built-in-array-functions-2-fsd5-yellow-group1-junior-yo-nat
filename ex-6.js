const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    return "new car collection is: " + carCollection.join(",");
  } else {
    const index = carCollection.indexOf(carBrand);
    return (
      carBrand +
      " has already existed in the " +
      (index + 1) +
      " position of car collection"
    );
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi"));

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota"));
