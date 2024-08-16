const aliceTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  
  alice1.animate(aliceTumbling, aliceTiming);
  
  const animateWithPromises = (element) => {
    return element.animate(aliceTumbling, aliceTiming).finished;
  };
  
  const animateAlice2AfterAlice1 = async () => {
    await animateWithPromises(alice1);
    await animateWithPromises(alice2);
    await animateWithPromises(alice3);
  };
  
  animateAlice2AfterAlice1();
  
