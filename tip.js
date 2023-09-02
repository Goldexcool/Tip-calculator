fiveCent = () => {
  const input = document.getElementById("bill__input").value;
  const result = document.getElementById("amunt");
  const resultt = document.getElementById("amuntt");
  var numberOf= document.getElementById("bill__inputt").value
  let numberOfPeo = Number(numberOf)
  let convert = Number(input);
  let convertResult = convert /numberOfPeo *(5/100);

  // result.textContent?convertResult.to
  console.log(input)
  console.log(convert)
  console.log(numberOf)
  console.log(numberOfPeo)
  console.log(convertResult)
  convertResult !== NaN ?  result.textContent = convertResult.toFixed(2) : result.textContent = "0.00"
  // result.textContent = convertResult.toFixed(2)


  let convertResultt = convert /numberOfPeo +convertResult
  convertResultt !== NaN ?  resultt.textContent = convertResultt.toFixed(2) : resultt.textContent = "0.00"
  
  // resultt.textContent= convertResultt.toFixed(2)

};
tenCent = () => {
  const input = document.getElementById("bill__input").value;
  const result = document.getElementById("amunt");
  const resultt = document.getElementById("amuntt");
  var numberOf= document.getElementById("bill__inputt").value
  let numberOfPeo = Number(numberOf)
  let convert = Number(input);
  let convertResult = convert /numberOfPeo *(10/100);
  result.textContent = convertResult.toFixed(2)


  let convertResultt = convert /numberOfPeo +convertResult
  resultt.textContent= convertResultt.toFixed(2)

};

fifteenCent = () => {
  // const fiveCent = document.querySelector("#fiveCent");
  const input = document.getElementById("bill__input").value;
  const result = document.getElementById("amunt");
  const resultt = document.getElementById("amuntt");
  var numberOf= document.getElementById("bill__inputt").value
  let numberOfPeo = Number(numberOf)
  let convert = Number(input);
  let convertResult = convert /numberOfPeo *(15/100);
  result.textContent = convertResult.toFixed(2)


  let convertResultt = convert /numberOfPeo +convertResult
  resultt.textContent= convertResultt.toFixed(2)

};


twentyCent = () => {
  const input = document.getElementById("bill__input").value;
  const result = document.getElementById("amunt");
  const resultt = document.getElementById("amuntt");
  var numberOf= document.getElementById("bill__inputt").value
  let numberOfPeo = Number(numberOf)
  let convert = Number(input);
  let convertResult = convert /numberOfPeo *(25/100);
  result.textContent = convertResult.toFixed(2)


  let convertResultt = convert /numberOfPeo +convertResult
  resultt.textContent= convertResultt.toFixed(2)

};

fiftyCent = () => {
  const input = document.getElementById("bill__input").value;
  const result = document.getElementById("amunt");
  const resultt = document.getElementById("amuntt");
  var numberOf= document.getElementById("bill__inputt").value
  let numberOfPeo = Number(numberOf)
  let convert = Number(input);
  let convertResult = convert /numberOfPeo *(50/100);
  result.textContent = convertResult.toFixed(2)


  let convertResultt = convert /numberOfPeo +convertResult
  resultt.textContent= convertResultt.toFixed(2)

};
// fifty = () => {
//   const input = document.getElementById("bill__input").value;
//   const result = document.getElementById("amunt");
//   const resultt = document.getElementById("amuntt");
//   var numberOf= document.getElementById("bill__inputt").value
//   var customNum= document.getElementById("customInput").value
//   var custom= Number(customNum)
//   let percent=custom/100
//   let numberOfPeo = Number(numberOf)
//   let convert = Number(input);
//   let convertResult = convert /numberOfPeo * percent;
//   result.textContent = convertResult.toFixed(2)


//   let convertResultt = convert /numberOfPeo +convertResult
//   resultt.textContent= convertResultt.toFixed(2)
// };
// fifty()

// const customInput = document.getElementById("customInput").value;
// let convertCustomInput = Number(customInput);

// customFunction = async (converted) => {
//   const input = document.getElementById("bill__input").value;
//   let convertInput = Number(input);
//   // const customInput = await document.getElementById("customInput").value;
//   // let convertCustomInput = Number(customInput);
//   const customInputPercent = await converted/100
//   const result = document.getElementById("amunt");
//   const resultt = document.getElementById("amuntt");
//   var numberOf= document.getElementById("bill__inputt").value
//   let numberOfPeo = Number(numberOf)
  
//   let convertResult = convertInput /numberOfPeo * customInputPercent ;
//   result.textContent = convertResult.toFixed(2)

//   let convertResultt = convertInput /numberOfPeo +convertResult
//   resultt.textContent= convertResultt.toFixed(2)

// };

// customFunction(convertCustomInput)











// tenCent = () => {
//   // const fiveCent = document.querySelector("#fiveCent");
//   const input = document.getElementById("bill__input").value;
//   const result = document.getElementById("amunt");
//   console.log(input);
//   let convert = Number(input);
//   console.log(convert);
//   let convertResult = convert * (10 / 100);

//   result.textContent = convertResult;
// };
// fifteenCent = () => {
//   // const fiveCent = document.querySelector("#fiveCent");
//   const input = document.getElementById("bill__input").value;
//   const result = document.getElementById("amunt");
//   console.log(input);
//   let convert = Number(input);
//   console.log(convert);
//   let convertResult = convert * (15 / 100);

//   result.textContent = convertResult;
// };
// twentyCent =() => {
//   // const fiveCent = document.querySelector("#fiveCent");
//   const input = document.getElementById("bill__input").value;
//   const result = document.getElementById("amunt");
//   console.log(input);
//   let convert = Number(input);
//   console.log(convert);
//   let convertResult = convert * (25 / 100);

//   result.textContent = convertResult;
// };
// fiftyCent = () => {
//   const input = document.getElementById("bill__input").value;
//   const result = document.getElementById("amunt");
//   console.log(input);
//   let convert = Number(input);
//   console.log(convert);
//   let convertResult = convert * (50 / 100);

//   result.textContent = convertResult;
// };


reset=()=>{
  const result = document.getElementById("amunt");
  const resultt = document.getElementById("amuntt");

  result.innerHTML = "0.00"
  resultt.innerHTML= "0.00"
}